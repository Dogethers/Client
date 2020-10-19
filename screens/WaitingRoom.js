import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const WaitingRoom = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Waiting For Other Player</Text>
      </View>

      <View style={styles.footer}>
        <Text style={styles.list}>3/4</Text>
        <Text style={styles.list}>John Doe</Text>
        <Text style={styles.list}>John Doe</Text>
        <Text style={styles.list}>John Doe</Text>

        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Welcome")}
            style={styles.room}
          >
            <LinearGradient colors={["#EE6F57", "#ed5a3e"]} style={styles.room}>
              <Text style={[styles.textRoom, { color: "#fff" }]}>Start</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default WaitingRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  footer: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  list: {
    fontSize: 22,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  room: {
    width: 150,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textRoom: {
    fontSize: 22,
    fontWeight: "bold",
    padding: 20,
  },
});
