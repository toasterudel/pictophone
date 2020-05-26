/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";
import { BleManager } from "react-native-ble-plx";

class App extends React.Component {
  constructor() {
    super();
    this.manager = new BleManager();
  }

  componentDidMount() {
    const subscription = this.manager.onStateChange((state) => {
      if (state === "PoweredOn") {
        this.scanAndConnect();
        subscription.remove();
      }
    }, true);
  }

  scanAndConnect() {
    this.manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        // Handle error (scanning will be stopped automatically)
        return;
      }

      // Check if it is a device you are looking for based on advertisement data
      // or other criteria.
      if (device.name === "TI BLE Sensor Tag" || device.name === "SensorTag") {
        // Stop scanning as it's not necessary if you are scanning for one device.
        this.manager.stopDeviceScan();

        // Proceed with connection.
        device
          .connect()
          .then((device) => {
            return device.discoverAllServicesAndCharacteristics();
          })
          .then((device) => {
            //do work
          })
          .catch((error) => {
            console.error(error);
          });
      }
    });
  }

  componentWillUnmount() {
    this.manager.destroy();
  }

  render() {
    return (
      <>
        <SafeAreaView>
          <Text>Hello World</Text>
        </SafeAreaView>
      </>
    );
  }
}

export default App;
