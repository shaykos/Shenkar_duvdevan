import { CameraView, useCameraPermissions, Camera } from 'expo-camera';
import { Text, View, Button, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useRef, useState } from "react";

export default function Index() {
  const [facing, setFacing] = useState('back'); // front | back
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [uri, setUri] = useState(null);

  //ממתינים לטעינת ההרשאות של המצלמה
  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  //אם אין הרשאות להשתמש במצלמה
  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  //זאת פונקציה שמחליפה בין המצלמה הקדמית לאחורית
  const toggleCameraFacing = () => {
    setFacing(facing === 'back' ? 'front' : 'back');
  };

  //זאת פונקציה שלוקחת תמונה
  const capturePhoto = async () => {
    let photo = await cameraRef.current?.takePictureAsync({
      quality: 0.5,
      //base64: true,
      skipProcessing: true,
    });
    console.log(photo);
    setUri(photo?.uri);
  };



  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={capturePhoto}>
            <Text style={styles.text}>Take a picture</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
      <Image source={{ uri }} style={{ width: 200, height: 200 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
