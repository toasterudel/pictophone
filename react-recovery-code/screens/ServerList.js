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

function ServerList({ navigation }) {
  return (
    <>
      <Image
        style={styles.tinyLogo}
        source={{
          uri:
            "https://cdn4.iconfinder.com/data/icons/computers-3/32/351-01-512.png",
        }}
      />
      <Text style={styles.middle}>List of the Servers</Text>
      <Button title="Lobby" onPress={() => navigation.navigate("Lobby")} />
      <Button title="Lobby" onPress={() => navigation.navigate("Lobby")} />
      <Button title="Lobby" onPress={() => navigation.navigate("Lobby")} />
      <Button title="Lobby" onPress={() => navigation.navigate("Lobby")} />
    </>
  );
}

export default ServerList;
