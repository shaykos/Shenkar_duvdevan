import * as Location from 'expo-location';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Map from '../components/Map';

export default function Index() {

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
        {/* <Text>Location: {JSON.stringify(currentLocation)}</Text> */}
        {currentLocation && <Map lat={currentLocation.coords.latitude} lng={currentLocation.coords.longitude}/>}
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