import React from "react";
import { Text, Button, Image, StyleSheet } from "react-native";

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
    </>
  );
}

export default Home;
