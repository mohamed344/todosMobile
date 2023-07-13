import { requests } from './utils';


export enum NotificationCategory {
    TASK = "Task",
    EVENT = 'Event',
    NOTE = 'Note',
    CONTACT = 'User',
    All = 'All',
    SYSTEM = 'SYSTEM'
  }
  
  
  export enum NotificationAction {
    CREATED = 'CREATED',
    UPDATED = 'UPDATED',
    DELETED = 'DELETED'
  }



export const NotificationAPI = {
	getAll: (): Promise<any> => requests.get(`notification`)
};
