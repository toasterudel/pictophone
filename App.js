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

//https://www.npmjs.com/package/react-native-ble-manager
import BleManager from "react-native-ble-manager";

const styles = StyleSheet.create({
  middle: {
    alignSelf: "center",
    color: "red",
  },
});

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

  render() {
    return (
      <>
        <SafeAreaView>
          <Button title="Increment" onPress={this.increment} />
          <Text style={styles.middle}>{this.state.count}</Text>
        </SafeAreaView>
      </>
    );
  }
}

export default App;
