import React, { useState, useEffect} from "react";
import { useQuery, useMutation } from "@apollo/client"
import { ADD_FRIEND, ACCEPT_FRIEND, REJECT_FRIEND } from '../graphql/mutations/friendlistMutation'
import {  GET_FRIEND, GET_FRIEND_REQUEST } from '../graphql/queries/friendlistQuery'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const FreindListScreen = ({ navigation }) => {
  const { data : friendData } = useQuery(GET_FRIEND)
  const { data: requestData} = useQuery(GET_FRIEND_REQUEST)
  const { data : addData } = useMutation(ADD_FRIEND)
  const { data : accepData} = useMutation(ACCEPT_FRIEND)
  const { data : rejectData } = useMutation(REJECT_FRIEND) 


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Friend Request</Text>
          { friendData}
        <ScrollView>
          <View style={styles.action}>
            <FontAwesome name="user" color="#05375a" size={20} />
            <Text style={styles.textUser}>Syukur</Text>

            <TouchableOpacity
              onPress={() => navigation.navigate("WaitingRoom")}
            >
              <LinearGradient
                colors={["#1F3C88", "#4f68ab"]}
                style={[styles.room, { marginRight: 10 }]}
              >
                <Text style={[styles.textRoom, { color: "#fff" }]}>Accept</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("WaitingRoom")}
            >
              <LinearGradient
                colors={["#EE6F57", "#ed5a3e"]}
                style={styles.room}
              >
                <Text style={[styles.textRoom, { color: "#fff" }]}>Reject</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          {/* <View style={styles.action}>
            <FontAwesome name="user" color="#05375a" size={20} />
            <Text style={styles.textUser}>Vikri</Text>

            <TouchableOpacity
              onPress={() => navigation.navigate("WaitingRoom")}
            >
              <LinearGradient
                colors={["#1F3C88", "#4f68ab"]}
                style={[styles.room, { marginRight: 10 }]}
              >
                <Text style={[styles.textRoom, { color: "#fff" }]}>Accept</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("WaitingRoom")}
            >
              <LinearGradient
                colors={["#EE6F57", "#ed5a3e"]}
                style={styles.room}
              >
                <Text style={[styles.textRoom, { color: "#fff" }]}>Reject</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View> */}
        </ScrollView>
      </View>

      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.title}>Freind List</Text>

        <ScrollView>

        <View style={[styles.action,{marginBottom: 20}]}>
            {/* <FontAwesome name="user" color="#05375a" size={20} /> */}
            <TextInput
                placeholder="Add your's freind"
                placeholderTextColor="#666666" 
                style={[styles.textUser,{backgroundColor: '#fff'}]} />
            <TouchableOpacity
              onPress={() => navigation.navigate("WaitingRoom")}
            >
              <LinearGradient
                colors={["#1F3C88", "#4f68ab"]}
                style={styles.room}
              >
                <Text style={[styles.textRoom, { color: "#fff" }]}>Add</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.action}>
            <FontAwesome name="user" color="#05375a" size={20} />
            <Text style={styles.textUser}>Bryan</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("WaitingRoom")}
            >
              <LinearGradient
                colors={["#EE6F57", "#ed5a3e"]}
                style={styles.room}
              >
                <Text style={[styles.textRoom, { color: "#fff" }]}>Chat</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          <View style={styles.action}>
            <FontAwesome name="user" color="#05375a" size={20} />
            <Text style={styles.textUser}>Bryan</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("WaitingRoom")}
            >
              <LinearGradient
                colors={["#EE6F57", "#ed5a3e"]}
                style={styles.room}
              >
                <Text style={[styles.textRoom, { color: "#fff" }]}>Chat</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
};

export default FreindListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "#fff",
  },
  footer: {
    flex: 1,

    backgroundColor: "#E5E5E5",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  title: {
    color: "#05375a",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  room: {
    width: 70,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textRoom: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 5,
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
    marginTop: Platform.OS === "ios" ? 0 : -2,
    paddingLeft: 15,
    color: "#05375a",
    fontSize: 18,
    marginRight: 10
  },
});
