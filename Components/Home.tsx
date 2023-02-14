import {
  View,
  Text,
  useColorScheme,
  Button,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Home = (): JSX.Element => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundImage = {
    uri: 'https://s3.amazonaws.com/spicedling/sR27vECAj414KOsimdlehadjFCqzUs4p.png',
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.image}>
        <StatusBar barStyle={'dark-content'} />
        <Text style={styles.text}>Welcome!</Text>
        <TouchableOpacity>
          <Text style={styles.button}>Register now!</Text>
        </TouchableOpacity>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',

    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'arial',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 150,
  },
  button: {
    color: 'white',
    fontFamily: 'arial',
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
  },
});
