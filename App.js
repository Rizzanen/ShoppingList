import { StatusBar } from "expo-status-bar";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";

export default function App() {
  const [shoppingList, setShoppingList] = useState([]);
  const [listItem, setListItem] = useState("");

  const handleInputChange = (text) => {
    setListItem(text);
  };
  const addToList = () => {
    setShoppingList((prevList) => [...prevList, listItem]);
    setListItem("");
  };
  const clearList = () => {
    setShoppingList([]);
    setListItem("");
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 1,
            height: 40,
            width: "80%",
            marginLeft: "10%",
          }}
          value={listItem}
          onChangeText={(text) => handleInputChange(text)}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginBottom: 10,
            height: 50,
          }}
        >
          <Pressable
            onPress={() => addToList()}
            style={{
              backgroundColor: "green",
              height: 30,
              width: "20%",

              marginTop: "3%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white" }}>Add</Text>
          </Pressable>
          <Pressable
            onPress={() => clearList()}
            style={{
              backgroundColor: "red",
              height: 30,
              width: "20%",
              marginTop: "3%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>Clear List</Text>
          </Pressable>
        </View>
        <Text
          style={{ color: "blue", marginLeft: "auto", marginRight: "auto" }}
        >
          Shopping List
        </Text>

        <FlatList
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            flex: 1,
            marginTop: 5,
          }}
          data={shoppingList}
          renderItem={({ item }) => <Text>{item}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
    marginTop: "30%",
  },
});
