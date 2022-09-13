import React, { useState, useReducer } from "react";
import {
  View,
  Text,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { useDispatch } from "react-redux";
import { Input } from "../../components";
import { colors } from "../../constants/colors";
import { singUp, singIn } from "../../store/actions/auth.actions";
import { isIOS } from "../../utils/platform";
import { onInputChange, onFocusOut, UPDATED_FORM } from "../../utils/forms";
import { styles } from "./styles";

const initialState = {
  email: { value: "", touched: false, hasError: true, error: "" },
  password: { value: "", touched: false, hasError: true, error: "" },
  isFormValid: false,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case UPDATED_FORM:
      const { name, value, hasError, error, touched, isFormValid } =
        action.data;
      return {
        ...state,
        [name]: {
          ...state[name],
          value,
          hasError,
          error,
          touched,
        },
        isFormValid,
      };

    default:
      return state;
  }
};

const AuthScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [formState, dispatchFormState] = useReducer(formReducer, initialState);
  const [isLogin, setIsLogin] = useState(true);

  const title = isLogin ? "Login" : "Registrar";
  const message = isLogin ? "No tienes una cuenta?" : "Ya tienes una cuenta?";
  const messageButton = isLogin ? "Iniciar sesion" : "Registrarme";

  const onHandleAuth = () => {
    const { email, password } = formState;
    dispatch(
      isLogin
        ? singIn(email.value, password.value)
        : singUp(email.value, password.value)
    );
  };
  const onHandleLogin = () => {
    setIsLogin((login) => !login);
  };

  const onHandleChange = (value, type) => {
    onInputChange(type, value, dispatchFormState, formState);
  };

  const onHandleBlur = (text, type) => {
    onFocusOut(type, text, dispatchFormState, formState);
  };
  return (
    <KeyboardAvoidingView
      style={styles.containerKeyboard}
      behavior={isIOS ? "padding" : "height"}
    >
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Input
          placeholder="Ingrese su email"
          placeholderTextColor={colors.textLight}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={(text) => onHandleChange(text, "email")}
          value={formState.email.value}
          error={formState.email.error}
          hasError={formState.email.hasError}
          label="Email"
          onBlur={(e) => onHandleBlur(e.nativeEvent.text, "email")}
          touched={formState.email.touched}
        />
        <Input
          placeholder="Ingrese su contraseña"
          placeholderTextColor={colors.textLight}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
          onChangeText={(text) => onHandleChange(text, "password")}
          label="Password"
          value={formState.password.value}
          error={formState.password.error}
          hasError={formState.password.hasError}
          onBlur={(e) => onHandleBlur(e.nativeEvent.text, "password")}
          touched={formState.password.touched}
        />
        <View style={styles.footer}>
          <Button
            disabled={!formState.isFormValid}
            title={messageButton}
            color={colors.secondary}
            onPress={onHandleAuth}
          />
          <View style={styles.prompt}>
            <TouchableOpacity onPress={onHandleLogin}>
              <Text style={styles.promptMessage}>{message}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;
