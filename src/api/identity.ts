import { requests } from './utils';



export const IdentityAPI = {
	upload: (form: FormData): Promise<any> => requests.post('identity/upload', form),
};

