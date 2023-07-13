import axios, { AxiosResponse } from 'axios';
import constants from '../config/constants';
import { useEffect } from 'react';
import useRequest from '../hooks/useRequest';
import { useTranslation } from 'react-i18next';
import useAuth from '../hooks/useAuth';
import { Alert } from 'react-native';



const instance = axios.create({
	baseURL: constants?.API_URL,
	timeout: parseInt(constants?.TIMEOUT),
	headers: {
		'x-api-key': constants?.X_API_KEY,
	}
});


const response = (res: AxiosResponse) => res.data;


export const requests = {
	get: (url: string) => instance.get(url).then(response),
	post: (url: string, body: {}) => instance.post(url, body).then(response),
	put: (url: string, body: {}) => instance.put(url, body).then(response),
	delete: (url: string) => instance.delete(url).then(response),
};


const AxiosInterceptor = ({ children }: any) => {
	const { isLoading, setLoading } = useRequest();
	const { auth, isLogged } = useAuth();
	const { i18n } = useTranslation();
	//const navigation = useNavigation();


	const IdentityVerificationAlert = () => {
		Alert.alert('Verification', 'Verify your identity via Settings => Upload Documents');
	}


	useEffect(() => {

		// @request interceptor
		const onRequest = (req: any) => {
			console.log(req.url)
			setLoading(true);

			// client preferred language
			req.headers['accept-language'] = i18n.language || 'fr';
			// jwt token
			if (isLogged && auth.tokens) req.headers.Authorization = 'Bearer ' + auth.tokens.accessToken;
			return req;
		}

		// @response interceptor 
		const onReponse = (res: any) => {
			setLoading(false)
			return res;
		}

		// @error interceptor 
		const onError = (err: any) => {
			setLoading(false)

			if (err.response.data.message) {
				const isUnverified = err.response.data.statusCode == 10004;

				if (isUnverified) IdentityVerificationAlert()
				else Alert.alert('Something went wrong!', err.response.data.message)
			}
			else Alert.alert(JSON.stringify(err))

			console.log("\nStatus : " + err.response.status + "\n Body : ")
			console.log(err.response.data)
			return Promise.reject(err);
		}

		const responseInterceptor = instance.interceptors.response.use(onReponse, onError);
		const requestInterceptor = instance.interceptors.request.use(onRequest, onError);

		return () => {
			instance.interceptors.response.eject(responseInterceptor);
			instance.interceptors.request.eject(requestInterceptor);
		}

	}, [auth, i18n, isLogged])

	return children;
}

export { AxiosInterceptor }