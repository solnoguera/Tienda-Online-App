import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { colors } from "../../constants/colors";
import { singUp, singIn } from "../../store/actions/auth.actions";
import { isIOS } from "../../utils/platform";
import { styles } from "./styles";

const AuthScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const title = isLogin ? "Ingresar" : "Registrar";
  const message = isLogin ? "No tienes una cuenta?" : "Ya tienes una cuenta?";
  const messageButton = isLogin ? "Registrarme" : "Iniciar sesion";

  const dispatch = useDispatch();

  const onHandleAuth = () => {
    dispatch(isLogin ? singIn(email, password) : singUp(email, password));
  };
  const onHandleLogin = () => {
    setIsLogin((login) => !login);
    setEmail("");
    setPassword("");
  };

  return (
    <KeyboardAvoidingView
      style={styles.containerKeyboard}
      behavior={isIOS ? "padding" : "height"}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su email"
          placeholderTextColor={colors.textLight}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese su contraseña"
          placeholderTextColor={colors.textLight}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <Button
          disabled={!(email && password)}
          title={title}
          color={colors.secondary}
          onPress={onHandleAuth}
        />
        <View style={styles.prompt}>
          <TouchableOpacity onPress={onHandleLogin}>
            <Text style={styles.promptMessage}>{message}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;
