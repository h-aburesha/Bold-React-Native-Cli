import {View, Text, useColorScheme} from 'react-native';
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
        <Text style={styles.text}>Hi, there!</Text>
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
    fontSize: 32,
    lineHeight: 64,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
});
