import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Dimensions, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function HomeScreen() {
  const navigation = useNavigation();
  
  // Animated values for fade and scale effect
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(0.5));

  // Animated rotation value for custom rotation animation
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Animasi Fade In dan Scale effect saat HomeScreen pertama kali dimuat
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();

    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start();

    // Custom rotation animation
    Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      })
    ).start();
  }, [fadeAnim, scaleAnim, rotation]);

  // Interpolation for rotation
  const rotate = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      {/* Animasi teks pertama menggunakan react-native-animatable */}
      <Animatable.Text 
        animation="fadeInDownBig" 
        style={styles.title}>
        Welcome to MyApp
      </Animatable.Text>

      {/* Animasi tombol */}
      <Animatable.View animation="zoomIn" delay={500}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('login')}>
          <Text style={styles.buttonText}>Go to Login</Text>
        </TouchableOpacity>
      </Animatable.View>

      {/* Animated Image with Custom Rotation */}
      <Animated.Image
        style={[styles.image, { transform: [{ rotate }] }]}
        source={{uri: 'https://example.com/your-image.png'}} 
      />

      {/* Animated Box with fade and scale */}
      <Animated.View 
        style={[
          styles.animatedBox,
          { opacity: fadeAnim, transform: [{ scale: scaleAnim }] }
        ]}
      >
        <Text style={styles.boxText}>This Box Animates!</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e8ecf4',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#075eec',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#075eec',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 40,
    marginBottom: 40,
  },
  animatedBox: {
    width: 200,
    height: 200,
    backgroundColor: '#075eec',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  boxText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
