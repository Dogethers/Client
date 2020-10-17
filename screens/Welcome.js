import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Image,
} from "react-native";
import * as Animatable from "react-native-animatable";
import {LinearGradient} from 'expo-linear-gradient'
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import GambarSvg from "../assets/home.svg";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#E5E5E5" barStyle="dark-content" />
      <View style={styles.header}>
        {/* <Image 
                 source={require('../assets/home.svg')}
                 style={styles.logo}
                 resizeMode="stretch"   
                /> */}
        <GambarSvg width={228} height={176} />
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
      <Text style={styles.titleMain}>DOGETHER!</Text>
        <Text style={styles.title}>Stay games with everyone</Text>
        <Text style={styles.text}>Sign in with account</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <LinearGradient
              colors={["#EE6F57", "#ed5a3e"]}
              style={styles.login}
            >
              <Text style={styles.textLogin}>Get Started</Text>
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default Welcome;

// const {height} = Dimensions.get("screen")
// const height_logo = height * 0.01

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
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 50,
  },
  // logo: {
  //     width: height_logo,
  //     height: height_logo
  // },
  titleMain: {
    color: '#EE6F57',
    fontSize: 30,
    fontWeight:'bold'
},
  title: {
      color: '#05375a',
      fontSize: 22,
      fontWeight:'bold'
  },
  text: {
      color:'grey',
      marginTop: 5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  login: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textLogin: {
      color: 'white',
      fontWeight: 'bold'
  }
});
