import React, { useState, useEffect} from "react";
import { useQuery, useMutation } from "@apollo/client"
import { ADD_FRIEND, ACCEPT_FRIEND, REJECT_FRIEND } from '../graphql/mutations/friendlistMutation'
import {GET_FRIENDLIST,GET_FRIEND_REQUEST} from '../graphql/queries/friendlistQuery'
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
import * as SecureStore from 'expo-secure-store'

const FreindListScreen =({ navigation }) => {
  const [token,setToken] = useState('')
  const {loading,error, data: friendData}= useQuery(GET_FRIENDLIST,{variables:{access_token:token}})
  const {loading: loading2, error: error2, data: friendRequest}= useQuery(GET_FRIEND_REQUEST,{variables:{access_token:token}})
  const [acceptFriend,{ loading: loading3, error: error3, data: acceptData }] = useMutation(ACCEPT_FRIEND)
  // console.log(friendRequest,'req')
  // console.log(friendData,'list')
  // console.log(error3,'error3')

  const getToken = async () =>{
    const access_token = await SecureStore.getItemAsync('access_token')
    // console.log(access_token)
    setToken(access_token)
    return access_token
  }
  useEffect(()=>{
    getToken()
  },[])


  const accept= async (id) => {
    // console.log(await getToken(),'token accept')
    const acc_token = await getToken()
    console.log(acc_token, id, '<<<');
    
    acceptFriend({
      variables:{
        access_token: acc_token, 
        FriendId: +id
      },
    })
    console.log(id, acceptFriend ,'masuk pake eko')
    // console.log(acceptData, 'broooo')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Friend Request</Text>
        <ScrollView>
          {!loading2 && !error2 && friendRequest.getFriendRequest.map((list, id) =>{
                   return ( 
                   <View style={styles.action}>
            <FontAwesome name="user" color="#05375a" size={20} />
          <Text style={styles.textUser}>{list.User.username}</Text>

            <TouchableOpacity
              onPress={() => accept(list.UserId)}
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
          </View>)
          })}
        </ScrollView>
      </View>

      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.title}>Friend List</Text>

        <ScrollView>

        <View style={[styles.action,{marginBottom: 20}]}>
            {/* <FontAwesome name="user" color="#05375a" size={20} /> */}
            <TextInput
                placeholder="Add your's freind"
                placeholderTextColor="#666666" 
                style={[styles.textUser,{backgroundColor: '#fff'}]} />
            <TouchableOpacity
              // onPress={() => navigation.navigate("WaitingRoom")}
            >
              <LinearGradient
                colors={["#1F3C88", "#4f68ab"]}
                style={styles.room}
              >
                <Text style={[styles.textRoom, { color: "#fff" }]}>Add</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>

          {!loading && !error && friendData.getFriendlist.map((list,id)=>{
            return (<View style={styles.action} key={id}>
            <FontAwesome name="user" color="#05375a" size={20} />
            <Text style={styles.textUser}>{list.User.username}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("ChatRoom")}
            >
              <LinearGradient
                colors={["#EE6F57", "#ed5a3e"]}
                style={styles.room}
              >
                <Text style={[styles.textRoom, { color: "#fff" }]}>Chat</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>)
          })}
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
