import { StatusBar } from 'expo-status-bar';
import { Image, Animated, StyleSheet, Text, View, Dimensions } from 'react-native';
import { useEffect, useRef } from 'react';
import "./global.css"

export default function App() {
  // variables
  const screenWidth = Dimensions.get('window').width;
  const slideAnim = useRef(new Animated.Value(-400)).current; // slide animation start outside screen

  // slide in animation
  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, [slideAnim]);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <StatusBar style="auto"/>
      
        {/* slidein logo */}
        <Animated.View
          style={[shadowStyle, {
            transform: [{ translateX: slideAnim }],
            backgroundColor: 'white',
            borderRadius: 24,
            marginBottom: 20,
          }]}
        >
        <Image
          source={require('./img/elevationWLogo.png')}
          style={{

            // dynamic sizing
            width: screenWidth * 0.5,
            height: screenWidth * 0.5,
          }}
          className="rounded-3xl shadow-lg"
          resizeMode="contain"
        />
      </Animated.View>

      {/* description */}
      <Description>
        generate elevation based trail routes
      </Description>

      {/* links */}    
      <Text>
        © Samuel Widlund 2025
      </Text>
    </View>
  );
}

// styling components
const Description = ({ children }) => (
  <Text style={{ fontSize: 16, fontStyle:"italic", marginBottom: 10 }}>
    {children}
  </Text>
);

const shadowStyle = {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.3,
  shadowRadius: 4.65,
  elevation: 8,
};
