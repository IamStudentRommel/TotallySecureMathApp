import React from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TRootStackParamList } from "./App";
import firebase from "firebase/compat/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

export interface IUser {
  username: string;
  password: string;
}

interface IProps {
  onLogin: (user: IUser) => void;
}

type TProps = NativeStackScreenProps<TRootStackParamList, "Login"> & IProps;

export default function Login(props: TProps) {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const auth = getAuth();
  const login = async () => {
    try {
      if (username.trim() == "") {
        Alert.alert("Error", "Please enter the username.");
        return;
      }
      if (password.trim() == "") {
        Alert.alert("Error", "Please enter the password.");
        return;
      }
      const response = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );
      if (response) {
        let foundUser: IUser | false = false;
        foundUser = { username: username, password: password };
        props.onLogin(foundUser);
      } else {
        Alert.alert("Error", "Username or password is invalid.");
        return;
      }
    } catch (error) {
      console.error("Error:", (error as Error).message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login by Firebase Account</Text>
      <TextInput
        style={styles.username}
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
      />
      <TextInput
        style={styles.password}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
      />
      <Button title="Login" onPress={login} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  username: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
  password: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
});
