import { requests } from './utils';



export const MessageAPI = {
	send: (message: FormData): Promise<any> => requests.post('message/send', message),
	read: (conversation_id: string): Promise<any> => requests.get(`message/read/${conversation_id}`),
	delete: (id: string): Promise<any> => requests.delete(`message/${id}`),
};
