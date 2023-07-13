import React, { memo, useEffect, useState } from 'react';
import MapView, { Details, MapPolyline, Marker, PROVIDER_GOOGLE, Polyline, Region } from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';
import { HEIGHT, WIDTH } from '../../config/dimensions';
import light from './light';
import GetMapRoutes from '../../functions/GetMapRoutes';
import useTheme from '../../hooks/useTheme';


const  RoadPath = ({ a, b, routes, setRoutes, selectedRoute }: any) => {
    const { theme, mode } = useTheme();

    const region = {
        latitude: (a.coords.latitude + b.coords.latitude) / 2,
        longitude: (a.coords.longitude + b.coords.longitude) / 2,
        latitudeDelta: Math.max(
            Math.abs(a.coords.latitude - b.coords.latitude) * 1.1,
            0.0922
        ),
        longitudeDelta: Math.max(
            Math.abs(a.coords.longitude - b.coords.longitude) * 1.1,
            0.0421
        ),
    };


    useEffect(() => {
        if (routes.length > 0 || !setRoutes) return;

        (async () => {
            const paths = await GetMapRoutes(a, b);
            setRoutes(paths)
        })();

    }, []);



    return (
        <View style={styles.container}>
            <MapView
                //userInterfaceStyle='dark'
                customMapStyle={light}
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                followsUserLocation={true}
                showsMyLocationButton={false}
                loadingEnabled={true}
                moveOnMarkerPress={false}
                cacheEnabled={true}
                initialRegion={region}
            >
                <Marker coordinate={a.coords} pinColor={theme.colors.bg.blue} title="Pick up" />
                <Marker coordinate={b.coords} pinColor={theme.colors.bg.blue} title="Drop off" />
                {routes.map(({ coordinates }: any, index: number) => (
                    <Polyline
                        coordinates={coordinates}
                        strokeWidth={6}
                        strokeColor={index == selectedRoute ? theme.colors.bg.blue : theme.colors.bg.medium}
                    />
                ))}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: "-5%"
    },
    map: {
        width: WIDTH,
        height: HEIGHT / 2,
    },
});


export default memo(RoadPath)