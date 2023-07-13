
import { MapAPI } from "../api/map";
var polyline = require('@mapbox/polyline');


export default async (a: any, b: any) => {

    const pickup = `${a.coords.latitude},${a.coords.longitude}`;
    const dropoff = `${b.coords.latitude},${b.coords.longitude}`;

    try {
        const response = await MapAPI.getDirections(pickup, dropoff);
        const routes = response.data.routes;

        const data = routes.map((r: any, index: number) => {
            const points = polyline.decode(r.overview_polyline.points);
            const legs = r.legs;

            return {
                summary: r.summary,
                start_address: legs[0].start_address,
                end_address: legs[0].end_address,
                duration: legs[0].duration,
                distance: legs[0].distance,
                coordinates: points.map((point: any, index: any) => {
                    return {
                        latitude: point[0],
                        longitude: point[1],
                    };
                }),

            }
        });

        return data;
    } catch (error) {
        console.error(error);
    }
}
