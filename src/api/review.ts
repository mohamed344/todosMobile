import Review from '../types/Review';
import { requests } from './utils';



export const ReviewAPI = {
	get: (id: string): Promise<any> => requests.get(`review/${id}`),
	submit: (review: Review): Promise<any> => requests.post('review/submit', review),
	remove: (id: string): Promise<any> => requests.delete(`review/delete/${id}`),
};

