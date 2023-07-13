import { createContext, useEffect, useRef, useState } from "react";
import { ConversationAPI } from "../api/conversation";
import Conversation from "../types/Conversation";
import { AppState } from "react-native";
import useAuth from "../hooks/useAuth";
import socket from "../api/socket";
import Message from "../types/Message";
import { MessageAPI } from "../api/message";
// ============================================================

export const ConversationsContext = createContext<any>({
  conversations: [],
  activeUsers: [],
  sendMessage: (arg: any) => { },
  fulfill: (arg: any) => { },
  add: (arg: any) => { },
});

// ============================================================

const ConversationsProvider = ({ children }: any) => {
  const { auth, isLogged } = useAuth();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [activeUsers, setActiveUsers] = useState<string[]>([]);

  const appState = useRef(AppState.currentState);

  /**
  * listen to app state change and handle socket
  * @returns void
  * */

  useEffect(() => {
    if (!isLogged) return;
    setup();

    const subscription = AppState.addEventListener("change", nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        console.log("App has come to the foreground!");
      }

      appState.current = nextAppState;
    });

    return () => {
      if (subscription) subscription.remove();
      socket.removeAllListeners()
    };

  }, [isLogged]);


  /**
  * setup
  * @returns void
  * */

  const setup = () => {
    socket.removeAllListeners()
    if (!isLogged) return;

    loadConversations();
    subscribe();
  };

  /**
  * subscribe to socket
  * @returns void
  * */

  const subscribe = () => {
    socket.emit("subscribe", { token: auth.tokens.accessToken, data: {} });
    onActivityChange();
    onMessageReceive();
    onMessageSeen();
  };

  /**
  * unsubscribe from socket
  * @returns void
  * */

  const unsubscribe = () => {
    socket.emit("unsubscribe", { token: auth.tokens.accessToken, data: {} })
  };

  /**
  * send message [socket]
   * @param message (Message)
  * @returns void
  * */

  const sendMessage = (content: string, to: string) => {
    socket.emit("sendMessage", { token: auth.tokens.accessToken, data: { content, to } })
  };


  /**
  * users activity change listener
  * @returns void
  * */

  const onActivityChange = () => {
    socket.on("ActivityChange", (users: string[]) => {
      setActiveUsers(users)
    });
  }

  /**
  * message seen listener
  * @returns void
  * */

  const onMessageSeen = () => {
    socket.on("MessageSeen", (conversation: any) => {
      setConversations((prev: any) => {
        let conversations_ = prev;

        // find conversation index
        const conversationIndex = conversations_.findIndex((chat: Conversation) => chat._id?.toString() == conversation._id?.toString());
        if (conversationIndex == -1) return prev;

        // update lastSeenAt
        conversations_[conversationIndex].lastSeenAt = conversation.lastSeenAt;
        return [...conversations_];
      })
    });
  }


  /**
  * add message to conversation
  * @param message (Message)
  * @param conversation (Conversation)
  * @returns void
  * */

  const pushMessage = (messages: Message[] | any, conversation: Conversation, replace = false) => {
    let conversationIndex = -1;

    setConversations((prev: any) => {
      let conversations_ = prev;

      // find conversation index
      conversationIndex = conversations_.findIndex((chat: Conversation) => chat._id?.toString() == conversation._id?.toString());
      if (conversationIndex == -1) return prev;

      // push message
      if (replace) conversations_[conversationIndex].messages = [...messages];
      else conversations_[conversationIndex].messages = [...messages, ...conversations_[conversationIndex].messages]

      // if chat ended
      conversations_[conversationIndex].ended = messages[0].conversation.ended;
      return [...conversations_];
    })

    if (conversationIndex == -1) create(conversation);
  }

  /**
  * messages box listener
  * @returns void
  * */

  const onMessageReceive = () => {
    socket.on("NewMessage", (message: Message) => {
      console.log('receiving message ....')
      pushMessage([message], message.conversation)
    });
  }

  /**
  * get conversations api
  * @returns void
  * */

  const loadConversations = () => {

    ConversationAPI.get()
      .then(({ data }: any) => {
        setConversations(data);
      })
      .catch(e => console.log(e));
  };


  /**
  * create conversations
  * @returns void
  * */

  const create = (chat: Conversation) => {
    ConversationAPI.getById(chat._id)
      .then(({ data: conversation }: any) => {
        console.log(conversation)
        setConversations((prev: any) => [...prev, conversation]);
      })
      .catch(e => console.log(e));
  };


  /**
  * get conversations api
   * @param conversation (Conversation)
  * @returns void
  * */

  const fulfill = (conversation: Conversation) => {
    if (!conversation._id) return;

    MessageAPI.read(conversation._id)
      .then(({ data: messages }: any) => {
        pushMessage(messages, conversation, true);
      })
      .catch(e => console.log(e));
  };


  return (
    <ConversationsContext.Provider
      value={{
        conversations,
        sendMessage,
        activeUsers,
        fulfill,
        create
      }}
    >
      {children}
    </ConversationsContext.Provider>
  );
};

export default ConversationsProvider;