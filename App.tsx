import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
} from "react-native";

export default function App() {
  const [leftNum,setLeftNum] = React.useState("");
  const [rightNum,setRightNum] = React.useState("");
  const [result,setResult] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.textResult}>{result}</Text>
      <View style={styles.inPuts}>
        <TextInput
          style={styles.inputText}
          // 値を受け取ったらstateを更新する記述
          onChangeText={(text) => setLeftNum(text)}
          value={leftNum}
        />
        <TextInput
          style={styles.inputText}
          // 値を受け取ったらstateを更新する記述
          onChangeText={(text) => setRightNum(text)}
          value={rightNum}
        />
      </View>
      <View style={styles.inputButton}>
        <Button title="+" onPress={() => {}} />
        <Button title="-" onPress={() => {}} />
        <Pressable>
          <Text style={styles.textButton}>C</Text>
        </Pressable>
        <Button title="×" onPress={() => {}} />
        <Button title="÷" onPress={() => {}} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textResult: {
    textAlign: "right",
    padding: 10,
    fontSize: 30,
    marginBottom: 20,
  },
  inPuts: {
    flexDirection: "row",
    marginBottom: 20,
  },
  inputText: {
    textAlign: "right",
    padding: 10,
    fontSize: 10,
    backgroundColor: "lightgray",
    color: "#000",
  },
  inputButton: {
    textAlign: "center",
    flexDirection: "row",
  },
  textButton: {
    textAlign: "center",
    color: "#fff",
    fontSize: 30,
    backgroundColor: "blue",
    width: 40,
    height: 40,
    lineHeight: 40,
  },
});
