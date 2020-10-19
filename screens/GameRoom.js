import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

const GameRoom = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#E5E5E5" barStyle="dark-content" />
      <View style={styles.header}>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => navigation.navigate("WaitingRoom")}
            style={styles.room}
          >
            <LinearGradient colors={["#EE6F57", "#ed5a3e"]} style={styles.room}>
              <Text style={[styles.textRoom, { color: "#fff" }]}>
                Create Room
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.title}>Join Room</Text>

        <ScrollView>
          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <Text style={styles.textUser}>Bryan Rooms</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("WaitingRoom")}
            >
              <Feather name="arrow-right-circle" color="orange" size={20} />
            </TouchableOpacity>
          </View>

          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <Text style={styles.textUser}>Rizki Rooms</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("WaitingRoom")}
            >
              <Feather name="arrow-right-circle" color="orange" size={20} />
            </TouchableOpacity>
          </View>

          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <Text style={styles.textUser}>Syukur Rooms</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("WaitingRoom")}
            >
              <Feather name="arrow-right-circle" color="orange" size={20} />
            </TouchableOpacity>
          </View>

          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <Text style={styles.textUser}>Samuel Rooms</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("WaitingRoom")}
            >
              <Feather name="arrow-right-circle" color="orange" size={20} />
            </TouchableOpacity>
          </View>

          <View style={styles.action}>
            <FontAwesome name="user-o" color="#05375a" size={20} />
            <Text style={styles.textUser}>Vikry Rooms</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("WaitingRoom")}
            >
              <Feather name="arrow-right-circle" color="orange" size={20} />
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default GameRoom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E5E5E5",
  },
  footer: {
    flex: 2,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    color: "#05375a",
    fontSize: 22,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  room: {
    width: "100%",
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
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  textUser: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -5,
    paddingLeft: 10,
    color: "#05375a",
    fontSize: 18,
  },
});
