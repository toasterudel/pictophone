import React from "react";
import { Text, Button } from "react-native";

function Lobby({ navigation }) {
  return (
    <>
      <Text>Lobby</Text>
      <Button title="Draw" onPress={() => navigation.navigate("Draw")} />
    </>
  );
}

export default Lobby;
