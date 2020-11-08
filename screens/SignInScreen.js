import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
    AsyncStorage
  } from "react-native";

const SignInScreen = () => {
    return (
        <View style={styles.container}>
        
    </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
      },
      container: {
        flex: 1,
        backgroundColor: "#FFC300",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFC300",
        paddingLeft: 40,
        paddingRight: 40
      },
      header: {
        fontSize: 35,
        marginBottom: 60,
        color: "#fff",
        fontWeight: "bold"
      },
      textInput: {
        alignSelf: "stretch",
        padding: 16,
        marginBottom: 20,
        backgroundColor: "#fff"
      },
      btn: {
        alignSelf: "stretch",
        backgroundColor: "black",
        padding: 20,
        alignItems: "center"
      },
      bt: {
        color: "#fff",
        fontSize: 20,
        
      }
    
  });
