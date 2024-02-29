import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

function GoogleAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    _configureGoogleSignIn();
  }, []);

  const _configureGoogleSignIn = () => {
    GoogleSignin.configure({
      webClientId:
        '413500377424-2dd84p1nu276n90hprbt2likfp1taum3.apps.googleusercontent.com',
      offlineAccess: false,
    });
  };

  const GoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUser(userInfo.user);
      Alert.alert('Success', JSON.stringify(userInfo));
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        Alert.alert('Cancelled', 'User cancelled the login flow');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        Alert.alert('In Progress', 'Operation is in progress already');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        Alert.alert('Play Services', 'Play services not available or outdated');
      } else {
        Alert.alert('Error', 'Something went wrong' + error.toString());
        // ""
      }
    }
  };

  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView style={styles.home}>
      <View style={styles.container}>
        {user === null ? (
          <GoogleSigninButton
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={GoogleSignIn} // Call the GoogleSignIn function on button press
          />
        ) : (
          <TouchableOpacity onPress={signOut} style={styles.btn}>
            <Text style={styles.textBtn}>Sign Out</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 350,
  },
  btn: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    width: 200,
    borderColor: 'white',
    borderWidth: 4,
  },
  textBtn: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  home: {
    backgroundColor: '#f15a28',
  },
});

export default GoogleAuth;
