import "react-native-gesture-handler";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//https://www.npmjs.com/package/react-native-ble-manager
import BleManager from "react-native-ble-manager";

import Home from "./screens/Home";
import Lobby from "./screens/Lobby";
import ServerList from "./screens/ServerList";

const styles = StyleSheet.create({
  middle: {
    alignSelf: "center",
    color: "red",
  },
});

const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.manager = new BleManager();
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }

  //runs on load
  componentDidMount() {
    BleManager.start({ showAlert: false }).then(() => {
      //success
      console.log("started ble manager");
    });
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  /*
            <SafeAreaView>
            <Stack.Screen name="Home" component={Home} />
            <Button title="Increment" onPress={this.increment} />
            <Text style={styles.middle}>{this.state.count}</Text>
          </SafeAreaView>
*/

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Lobby" component={Lobby} />
          <Stack.Screen name="ServerList" component={ServerList} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
