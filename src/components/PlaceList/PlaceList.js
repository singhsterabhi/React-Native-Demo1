import React from "react";
import { StyleSheet, View } from "react-native";
import ListItem from "../ListItem/ListItem";

const placeList = props => {
  const placesOputput = props.places.map((place, i) => (
    <ListItem
      key={i}
      placeName={place}
      onItemPress={() => alert("Item Pressed - ID : " + i)}
    />
  ));
  return <View style={styles.listContainer}>{placesOputput}</View>;
};

const styles = StyleSheet.create({
  listContainer: {
    width: "100%"
  }
});

export default placeList;
