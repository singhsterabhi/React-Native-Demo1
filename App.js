import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import PlaceInput from "./src/components/PlaceInput/PlaceInput";
import PlaceList from "./src/components/PlaceList/PlaceList";

export default class App extends Component {
  state = {
    places: []
  };

  placeSubmitHandler = placeName => {
    if (placeName === "") return;

    this.setState(prevState => {
      return {
        places: prevState.places.concat(placeName)
      };
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeSubmitHandler} />
        <PlaceList places={this.state.places} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  }
});
