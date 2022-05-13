import { NativeStackScreenProps } from "@react-navigation/native-stack";

// Main navigator
export type MainNavigatorParamsList = {
  SplashScreen: undefined;
  App: undefined;
  Internal: undefined;
}
export type SplashScreenProps = NativeStackScreenProps<MainNavigatorParamsList, "SplashScreen">;

// App navigator
export type AppNavigatorParamsList = {
  Home: undefined;
  Connection: undefined;
  Jobs: undefined;
  Notification: undefined;
  Editor: undefined;
}
export type HomeScreenProps = NativeStackScreenProps<AppNavigatorParamsList, "Home">;
export type ConnectionScreenProps = NativeStackScreenProps<AppNavigatorParamsList, 'Connection'>;
export type JobsScreenProps = NativeStackScreenProps<AppNavigatorParamsList, 'Jobs'>;
export type NotificationScreenProps = NativeStackScreenProps<AppNavigatorParamsList, 'Notification'>;
export type EditorScreenProps = NativeStackScreenProps<AppNavigatorParamsList, 'Editor'>;

// Auth navigator
export type AuthNavigatorParamsList = {
  Login: undefined;
  SignUp: undefined;
}
export type LoginScreenProps = NativeStackScreenProps<AuthNavigatorParamsList, "Login">;
export type SignUpScreenProps = NativeStackScreenProps<AuthNavigatorParamsList, "SignUp">;

// Internal navigator
export interface UserProfileParamList {
  userId: number;
}
export type InternalNavigatorParamsList = {
  UserProfile: UserProfileParamList;
  EditProfile: undefined;
  ContactInformation: undefined;
  Settings: undefined;
}
export type UserProfileScreenProps = NativeStackScreenProps<InternalNavigatorParamsList, "UserProfile">;
export type EditProfileScreenProps = NativeStackScreenProps<InternalNavigatorParamsList, "EditProfile">;
export type SettingsScreenProps = NativeStackScreenProps<InternalNavigatorParamsList, "Settings">;
export type ContactInformationScreenProps = NativeStackScreenProps<InternalNavigatorParamsList, "ContactInformation">;