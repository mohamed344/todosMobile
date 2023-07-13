import { useContext } from "react";
import { ConversationsContext } from "../contexts/ConversationsContext";


const useConversations: any = () => useContext(ConversationsContext);
export default useConversations;