import React, { useEffect } from "react";
import { Text, Button, Image, StyleSheet } from "react-native";
import BleManager from "react-native-ble-manager";

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
  middle: {
    alignSelf: "center",
  },
});

function Home({ navigation }) {
  useEffect(() => {
    BleManager.start({ showAlert: false }).then(() => {
      //success
      console.log("started ble manager");
    });
  }, []);

  return (
    <>
      <Image
        style={styles.tinyLogo}
        source={{
          uri:
            "https://www.rawshorts.com/freeicons/wp-content/uploads/2017/01/blue_repicthousebase_1484336386-1.png",
        }}
      />
      <Text style={styles.middle}>Welcome to the home screen</Text>

      <Button
        title="Click here to go to the List of Servers screen"
        onPress={() => {
          navigation.navigate("ServerList");
        }}
      />
      <Button
        title="Discover Available Devices"
        onPress={() => {
          navigation.navigate("Discover");
        }}
      />
    </>
  );
}

export default Home;
