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

import Home from "./screens/Home";
import Lobby from "./screens/Lobby";
import ServerList from "./screens/ServerList";
import Discover from "./screens/Discover";
import Draw from "./screens/Draw";

const Stack = createStackNavigator();

class App extends React.Component {
  constructor(orops) {
    super(props);
    // this.manager = new BleManager();
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this);
  }

  //runs on load
  componentDidMount() {}

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
          <Stack.Screen name="Discover" component={Discover} />
          <Stack.Screen name="Draw" component={Draw} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
