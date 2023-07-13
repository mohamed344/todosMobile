import axios from 'axios';
import constants from '../config/constants';

const API_KEY = constants?.GOOGLE_API_KEY;


export const MapAPI = {
	suggest: (str: string): Promise<any> => axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${str}&key=${API_KEY}`), //&components=country:dz
	coords: (place_id: string): Promise<any> => axios.get(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${place_id}&key=${API_KEY}`),
	getCityNameByCoords: (lat: number, lng: number): Promise<any> => axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&sensor=true&key=${API_KEY}`),
	getDirections: (coordsA: string, coordsB: string): Promise<any> => axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${coordsA}&destination=${coordsB}&provideRouteAlternatives=true&alternatives=true&travelMode=DRIVING&mode=DRIVING&key=${API_KEY}`),
};