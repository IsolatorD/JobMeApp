import { Formik } from "formik";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Button from "../../components/Button/Button";
import ButtonText from "../../components/Button/ButtonText";
import Container from "../../components/Container";
import Input from "../../components/Input/Input";
import images from "../../constants/images";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { useAuth } from "../../hooks/useAuth";
import useBackHandler from "../../hooks/useBackHandler";
import { LoginScreenProps } from "../../interfaces/navigation";

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  useBackHandler({ isMain: true })
  const { signIn, loading } = useAuth()

  const onPressForgot = () => {}

  const onPressRegister = () => {
    navigation.navigate('SignUp');
  }

  const onSubmit = async (values: any) => {
    await signIn({
      email: values.email,
      password: values.password
    })
  }

  return (
    <Container padding>
      <View
        style={styles.header}
      >
        <View
          style={styles.logoContainer}
        >
          <Image
            source={images.logoBlue}
            style={styles.logo}
          />
        </View>
        <Text
          style={styles.title}
        >
          Iniciar sesión
        </Text>
        <Text
          style={styles.subtitle}
        >
          Mantente conectado con los mejores profesionales
        </Text>
      </View>
      <View
        style={styles.content}
      >
        <Formik
          initialValues={{
            email: '',
            password: ''
          }}
          onSubmit={onSubmit}
        >
          {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
            <>
              <Input
                label="Correo electrónico"
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                error={errors.email && touched.email ? errors.email : undefined}
                editable={!loading}
                keyboardType="email-address"
                returnKeyType="next"
              />
              <Input
                label="Contraseña"
                value={values.password}
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                error={errors.password && touched.password ? errors.password : undefined}
                editable={!loading}
              />
              <ButtonText
                text="Olvidé mi contraseña"
                onPress={onPressForgot}
                disabled={loading}
              />
              <Button
                text="Iniciar sesión"
                onPress={handleSubmit}
                loading={loading}
              />
              <ButtonText
                text="¿No tienes una cuenta? Regístrate"
                onPress={onPressRegister}
                containerStyle={styles.registerButtonContainer}
                disabled={loading}
              />
            </>
          )}
        </Formik>
      </View>
    </Container>
  )
};

const styles = StyleSheet.create({
  header: {
    height: '30%',
    justifyContent: 'flex-end',
    paddingVertical: SIZES.padding,
  },
  logoContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: SIZES.padding,
  },
  logo: {
    width: SIZES.width / 3,
    resizeMode: 'contain',
  },
  title: {
    ...FONTS.h2,
    color: COLORS.black
  },
  subtitle: {
    ...FONTS.caption,
    color: COLORS.black
  },
  content: {
    flex: 1,
  },
  registerButtonContainer: {
    marginTop: SIZES.padding,
    alignItems: 'center'
  }
});

export default LoginScreen;