import React, {useState} from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  ImageBackground,
  View,
} from "react-native";
import TInput from "./components/TInput";
import PInput from "./components/PInput";
import MainButton from "./components/MainButton";
import { Formik } from 'formik'
import * as yup from 'yup'
import { useDispatch } from "react-redux";
import { login } from '../../slices/auth';
import { useNavigation, useFocusEffect, useRoute } from '@react-navigation/native';

const Signup = () => {
  type Nav = {
    navigate: (value: string) => void;
  }

  const [formattedValue, setFormattedValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch<any>();
  const { navigate } = useNavigation<Nav>()
  const [uType, setUtype] = useState('');
  const route = useRoute();

  useFocusEffect(
    React.useCallback(() => {
      if(route?.params){
        setUtype(route.params.user_type);
      }
    }, [route?.params])
  );

  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Please enter valid email")
      .required('Email Address is Required'),
    password: yup
      .string()
      .min(6, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirm: yup
      .string()
      .min(6, ({ min }) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  })

  const onSubmit = (values:any) => {
    console.log("form values", values);
    setErrorMessage("");
    setIsLoading(true);

    dispatch(login({ email: values.email, password : values.password}))
      .unwrap()
      .then((res: any) => {
          console.log("res", res);
          if (res?.status == 409) {
              setIsLoading(false);
              setErrorMessage(res.message);
          }else if (res.status == 200) {
              setIsLoading(false);
              setErrorMessage(res.message);
              // navigate('Home')
          }else{
              setIsLoading(false);
              setErrorMessage("Please try again");
          }
      })
      .catch((error:any) => {
          console.log("login error", error)
          setErrorMessage(error.data.message);
          setIsLoading(false);
      });
  }


  return (
    <ScrollView
      style={styles.signup}
      contentContainerStyle={styles.signupScrollViewContent}
    >
      <ImageBackground
        style={styles.logoHeaderIcon}
        resizeMode="stretch"
        source={require("../../assets/frame481.png")}
      >
        <Image
          style={styles.lOGO13}
          resizeMode="cover"
          source={require("../../assets/logo-1-3.png")}
        />
        <Text style={[styles.qUARK, styles.mt_7]}>QUARK</Text>
      </ImageBackground>
      <Formik
        validationSchema={loginValidationSchema}
        initialValues={{ email: '', password: '', confirm: '' }}
        onSubmit={values => onSubmit(values)}>
      {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
      <View style={[styles.content, styles.mt12]}>
        <View style={styles.head}>
          <Text style={styles.signUp}>Sign up</Text>
          <View style={[styles.frameView, styles.mt23]}>
            <Text style={styles.welcomeToQuark}>{`Welcome to Quark `}</Text>
            <Text style={[styles.hiYouCanStartUsingApplic, styles.mt14]}>
              Hi, You can start using application after sign up
            </Text>
          </View>
        </View>
        <View style={[styles.form, styles.mt12]}>
          <View style={styles.formInput}>
            <View style={styles.email}>
              <Text style={styles.emailID}>Email ID</Text>
              <TInput
                frame458KeyboardType="email-address"
                frame458Placeholder="sample@email.com "
                name="email" onChangeText={handleChange} onBlur={handleBlur} 
              />
              {errors.email &&
                <Text style={{ fontSize: 10, color: 'red' }}>{errors.email}</Text>
              }
            </View>
            <View style={[styles.password1, styles.mt13]}>
              <Text style={styles.password}>Password</Text>
              <PInput frame458Placeholder="enter password" name="password" onChangeText={handleChange} onBlur={handleBlur}  />
              {errors.password &&
                <Text style={{ fontSize: 10, color: 'red' }}>{errors.password}</Text>
              }
            </View>
            <View style={[styles.password2, styles.mt13]}>
              <Text style={styles.reEnterPassword}>Re enter password</Text>
              <PInput frame458Placeholder="re-enter password" name="confirm" onChangeText={handleChange} onBlur={handleBlur}  />
              <Text>dsfv</Text>
              {errors.confirm &&
                <Text style={{ fontSize: 10, color: 'red' }}>{errors.confirm}</Text>
              }
            </View>
          </View>
          <View style={[styles.termsConditions, styles.mt8]}>
            <View style={styles.rectangleView} />
            <Text style={[styles.iAgreeWithTermsAndPrivacy, styles.ml6]}>
              <Text style={styles.iAgreeWith}>{`I Agree with `}</Text>
              <Text style={styles.terms}>Terms</Text>
              <Text style={styles.and}>{` and `}</Text>
              <Text style={styles.privacy}>Privacy</Text>
            </Text>
          </View>
        </View>
        <View style={[styles.linkButton, styles.mt12]}>
          <MainButton />
          <View style={[styles.signupLink, styles.mt22]}>
            <Text style={styles.alreadyHaveAnAccount}>
              Already Have An Account?
            </Text>
            <Text style={[styles.signIn, styles.mt11]}>Sign In</Text>
          </View>
        </View>
      </View>
       )}
    </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mt_7: {
    marginTop: -7,
  },
  mt14: {
    marginTop: 14,
  },
  mt23: {
    marginTop: 23,
  },
  mt4: {
    marginTop: 4,
  },
  mt13: {
    marginTop: 13,
  },
  ml6: {
    marginLeft: 6,
  },
  mt8: {
    marginTop: 8,
  },
  mt11: {
    marginTop: 11,
  },
  mt22: {
    marginTop: 22,
  },
  mt12: {
    marginTop: 12,
  },
  signupScrollViewContent: {
    flexDirection: "column",
    paddingHorizontal: 0,
    paddingBottom: 20,
  },
  lOGO13: {
    position: "relative",
    width: 99,
    height: 99,
    flexShrink: 0,
    overflow: "hidden",
  },
  qUARK: {
    position: "relative",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  logoHeaderIcon: {
    alignSelf: "stretch",
    height: 204,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "column",
    paddingHorizontal: 138,
    paddingVertical: 32,
    alignItems: "center",
    justifyContent: "flex-start",
    minHeight: 204,
  },
  signUp: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 18,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "center",
  },
  welcomeToQuark: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 16,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#1a3596",
    textAlign: "center",
  },
  hiYouCanStartUsingApplic: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#08288d",
    textAlign: "center",
  },
  frameView: {
    width: 273,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  head: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  emailID: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  email: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  password: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  password1: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  reEnterPassword: {
    position: "relative",
    fontSize: 14,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  password2: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  formInput: {
    width: 343,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  rectangleView: {
    position: "relative",
    borderRadius: 2,
    borderStyle: "solid",
    borderColor: "#1a3596",
    borderWidth: 1,
    width: 15,
    height: 15,
    flexShrink: 0,
  },
  iAgreeWith: {
    color: "#1a3596",
  },
  terms: {
    color: "#ffb300",
  },
  and: {
    color: "#1a3596",
  },
  privacy: {
    color: "#ffb300",
  },
  iAgreeWithTermsAndPrivacy: {
    position: "relative",
    fontSize: 12,
    fontFamily: "Roboto",
    textAlign: "left",
  },
  termsConditions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  alreadyHaveAnAccount: {
    position: "relative",
    fontSize: 13,
    fontFamily: "Roboto",
    color: "#0a288f",
    textAlign: "left",
  },
  signIn: {
    position: "relative",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "Roboto",
    color: "#ffa824",
    textAlign: "left",
  },
  signupLink: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  linkButton: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignSelf: "stretch",
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 16,
    paddingBottom: 20,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  signup: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    // overflow: "hidden",
    maxWidth: "100%",
  },
});

export default Signup;