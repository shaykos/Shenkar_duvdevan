import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Map({lat , lng}) {
    const [currentLocation, setCurrentLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    async function getLocation() {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return
        }
        let location = await Location.getCurrentPositionAsync();
        setCurrentLocation(location);
    }
    useEffect(() => {
        getLocation();
    }, []);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                {errorMsg ? <Text>{errorMsg}</Text> : null}
                {currentLocation ? <MapView style={styles.map} showsUserLocation={true} region={{
                    latitude: lat || 37.78825,
                    longitude: lng || -122.4324,
                    latitudeDelta: 0.0008,
                    longitudeDelta: 0.0011,
                }} >
                    <Marker coordinate={{
                        latitude: lat,
                        longitude: lng
                    }} title="You are here" />

                </MapView> : <Text>Loading Map...</Text>}
            </View>
        </SafeAreaView>
    );

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});