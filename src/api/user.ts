import Device from '../types/Device';
import { requests } from './utils';



export const UserAPI = {
	reset: (): Promise<any> => requests.delete('user/change-password'),
	logout: (): Promise<any> => requests.delete('user/logout'),
	get: () => requests.get(`user`),
	findById: (id: string): Promise<any> => requests.get(`user/${id}`),
	setDevice: (device: Device): Promise<any> => requests.post('user/update/device', device),
	setAvatar: (avatar: any): Promise<any> => requests.post('user/update/avatar', avatar),
	setPhone: (data: any): Promise<any> => requests.post('user/update/phone', data), // { tel, code }
	changePassword: (credentials: any) => requests.post(`user/change-password`, credentials),
	identity: (form: FormData): Promise<any> => requests.post('user/identity', form),
};

