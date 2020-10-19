import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import * as Animatable from "react-native-animatable";
import GambarMusic from "../assets/gameMusic.svg";
import GambarTebak from "../assets/tebak-gambar.svg";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#E5E5E5" barStyle="dark-content" />
      <View style={styles.header}>
      <Text style={styles.title}>Guess the song!</Text>
        <TouchableOpacity onPress={() => navigation.navigate("GameRoom")}>
            <GambarMusic width={228} height={176} />
        </TouchableOpacity>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
      <Text style={styles.title}>Guess the picture</Text>
        <TouchableOpacity onPress={() => navigation.navigate("GameRoom")}>
            <GambarTebak width={228} height={176} />
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#E5E5E5",
    },
    header: {
      flex: 2,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#E5E5E5",
    },
    footer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 50,
    },
    
    title: {
        color: '#05375a',
        fontSize: 22,
        fontWeight:'bold'
    },
  });