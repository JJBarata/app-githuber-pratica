import React from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  SafeAreaView
} from "react-native";
import styles from "./styles";

// import { Container } from './styles';

const Welcome = () => (
  <SafeAreaView style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor="transparent" />
    <View>
      <Text style={styles.title}>Bem-Vindo</Text>
      <Text style={styles.text}>
        Para continuar, precisamos que você informe seu usuário do Github
      </Text>
    </View>

    <View style={styles.form}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite seu usuário"
        underlineColorAndroid="transparent"
      />
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Prosseguir</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);

export default Welcome;
