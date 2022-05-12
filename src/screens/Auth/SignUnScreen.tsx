import { Formik } from "formik";
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Button from "../../components/Button/Button";
import ButtonIcon from "../../components/Button/ButtonIcon";
import ButtonText from "../../components/Button/ButtonText";
import Container from "../../components/Container";
import Input from "../../components/Input/Input";
import ScrollContainer from "../../components/ScrollContainer";
import icons from "../../constants/icons";
import images from "../../constants/images";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { useAuth } from "../../hooks/useAuth";
import useBackHandler from "../../hooks/useBackHandler";
import { SignUpScreenProps } from "../../interfaces/navigation";

const SignUpScreen: React.FC<SignUpScreenProps> = ({ navigation }) => {
  useBackHandler()
  const { signUp, loading } = useAuth()

  const onPressBack = () => {
    navigation.goBack();
  }

  const onPressLogin = () => {
    navigation.navigate('Login');
  }
  const onSubmit = async (values: any) => {
    await signUp(values)
  }

  return (
    <ScrollContainer>
      <Container padding>
        <>
          <View
            style={styles.header}
          >
            <View
              style={styles.headerTop}
            >
              <View style={{ flex: 1, alignItems: 'flex-start' }}>
                <ButtonIcon
                  icon={icons.backward}
                  onPress={onPressBack}
                />
              </View>
              <View style={{ flex: 1, alignItems: 'center' }}>
                <Image
                  source={images.logoBlue}
                  style={styles.logo}
                />
              </View>
              <View style={{ flex: 1 }}/>
            </View>
            <Text
              style={styles.title}
            >
              Registrarse
            </Text>
            <Text
              style={styles.subtitle}
            >
              Únete a la mejor comunidad de profesionales
            </Text>
          </View>
          <View
            style={styles.content}
          >
            <Formik
              initialValues={{
                first_name: '',
                last_name: '',
                username: '',
                email: '',
                password: ''
              }}
              onSubmit={onSubmit}
            >
              {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
                <>
                  <Input
                    label="Nombre"
                    value={values.first_name}
                    onChangeText={handleChange('first_name')}
                    onBlur={handleBlur('first_name')}
                    error={errors.first_name && touched.first_name ? errors.first_name : undefined}
                    editable={!loading}
                    returnKeyType="next"
                  />
                  <Input
                    label="Apellido"
                    value={values.last_name}
                    onChangeText={handleChange('last_name')}
                    onBlur={handleBlur('last_name')}
                    error={errors.last_name && touched.last_name ? errors.last_name : undefined}
                    editable={!loading}
                    returnKeyType="next"
                  />
                  <Input
                    label="Usuario"
                    value={values.username}
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    error={errors.username && touched.username ? errors.username : undefined}
                    editable={!loading}
                    returnKeyType="next"
                  />
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
                  <Button
                    text="Registrarse"
                    loading={loading}
                    onPress={handleSubmit}
                  />
                  <ButtonText
                    text="¿Ya tienes una cuenta? Iniciar sesión"
                    onPress={onPressLogin}
                    containerStyle={styles.loginButtonContainer}
                    disabled={loading}
                  />
                </>
              )}
            </Formik>
          </View>
        </>
      </Container>
    </ScrollContainer>
  )
};

const styles = StyleSheet.create({
  header: {
    height: '18%',
    justifyContent: 'flex-end',
    marginBottom: SIZES.base,
  },
  headerTop: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: SIZES.base,
  },
  logo: {
    width: SIZES.width / 5,
    height: '100%',
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
  loginButtonContainer: {
    marginTop: SIZES.padding,
    alignItems: 'center'
  }
});

export default SignUpScreen;