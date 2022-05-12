import AsyncStorage from "@react-native-async-storage/async-storage";

export default class AuthService {
  public async getToken(): Promise<any | null> {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        return token;
      }
    } catch (error) {
      console.log('Error getting token', error);
      return error;
    }
  }

  public async getUser(): Promise<any | null> {
    try {
      const user = await AsyncStorage.getItem("user");
      if (user) {
        const userParsed = JSON.parse(user);
        return userParsed;
      }
    } catch (error) {
      console.log('Error getting user', error);
      return error
    }
  }

  public async setToken(token: string): Promise<boolean> {
    try {
      await AsyncStorage.setItem("token", token);
      return true
    } catch (error) {
      console.log('Error saving token', error);
      return false
    }
  }

  public async setUser(user: any): Promise<void> {
    try {
      await AsyncStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.log('Error saving user', error);
    }
  }

  public async removeToken(): Promise<void> {
    try {
      await AsyncStorage.removeItem("token");
    } catch (error) {
      console.log('Error removing token', error);
    }
  }

  public async removeUser(): Promise<void> {
    try {
      await AsyncStorage.removeItem("user");
    } catch (error) {
      console.log('Error removing user', error);
    }
  }

  public async logout(): Promise<void> {
    await this.removeToken();
    await this.removeUser();
  }

  public async isLoggedIn(): Promise<boolean> {
    const token = await this.getToken();
    return token !== null;
  }

  public async getOnboardingViewed(): Promise<boolean> {
    try {
      const onboarding = await AsyncStorage.getItem("onboarding");
      return onboarding === "true";
    } catch (error) {
      console.log('Error getting onboarding', error);
      return false;
    }
  }

  public async setOnboardingViewed(): Promise<void> {
    try {
      await AsyncStorage.setItem("onboarding", "true");
    } catch (error) {
      console.log('Error saving onboarding', error);
    }
  }
}