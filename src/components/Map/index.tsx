import React, { useEffect, useRef, useState } from 'react';
import MapView, { Details, Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { HEIGHT, WIDTH } from '../../config/dimensions';
import light from './light';


export default function Map({ location, setLocation }: any) {
  const mapRef = useRef<MapView>(null);


  const handleRegionChangeComplete = (region: Region) => {
    if (mapRef.current) {
      if (Platform.OS === 'android') mapRef.current.animateToRegion(region, 2000);
      setLocation({
        coords: region
      })
    }
  };


  return (
    <View style={styles.container}>
      {location &&
        <MapView
          //userInterfaceStyle='dark'
          //cacheEnabled={true}
          ref={mapRef}
          customMapStyle={light}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          showsUserLocation={true}
          followsUserLocation={true}
          showsMyLocationButton={false}
          loadingEnabled={true}
          moveOnMarkerPress={false}
          onRegionChangeComplete={handleRegionChangeComplete}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="Your Location"
            image={require('../../../assets/vectors/map-cursor.png')}
          />

        </MapView>
      }
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
    height: HEIGHT / 1.4,
  },
});
