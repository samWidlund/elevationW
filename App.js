import { StatusBar } from 'expo-status-bar';
import { Image, Animated, StyleSheet, Text, View, Dimensions, fadeAnim} from 'react-native';
import { useEffect, useRef } from 'react';
import "./global.css"

export default function App() {
  // variables
  const screenWidth = Dimensions.get('window').width;
  const slideAnim = useRef(new Animated.Value(-400)).current; // slide animation start outside screen
  const fadeAnim = useRef(new Animated.Value(1)).current;     // opacity starts at 1

  // slide in
  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 800,
      useNativeDriver: true,
    }).start(() => {
      // fade out
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: true,
        }).start();
      }, 3000);
    });
  }, [slideAnim, fadeAnim]);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <StatusBar style="auto"/>
      
        {/* slidein logo */}
        <Animated.View
          style={[
            shadowStyle,
          {
            opacity: fadeAnim,
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

      <Animated.Text
      style={{
        opacity: fadeAnim,
        // fix styling
      }}>

        <Description>
          generate elevation based trail routes
        </Description>
        <Text>
          © Samuel Widlund 2025
        </Text>
      </Animated.Text>
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
