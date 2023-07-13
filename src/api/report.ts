import Report from '../types/Report';
import { requests } from './utils';



export const ReportAPI = {
	get: () => requests.get(`report`),
	report: (report: Report): Promise<any> => requests.post('report/user', report),
};

