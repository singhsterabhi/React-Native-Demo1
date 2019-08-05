import React, { Component } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

class PlaceInput extends Component {
  state = {
    placeName: ""
  };

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  };

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.placeInput}
          value={this.state.placeName}
          onChangeText={this.placeNameChangeHandler}
          placeholder="An Awesome Place"
        />
        <Button
          title="ADD"
          style={styles.placeButton}
          onPress={() => this.props.onPlaceAdded(this.state.placeName)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%",
    borderBottomColor: "green",
    borderBottomWidth: 1
  },
  placeButton: {
    width: "30%"
  }
});

export default PlaceInput;
