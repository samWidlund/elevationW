import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import "./global.css"

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <StatusBar style="auto"/>
      
    {/* logo */}
    <View className="shadow-lg bg-white rounded-3xl mb-5">
      <Image 
        className="rounded-3xl"
        source={require('./img/elevationWLogo.png')}
        style={{width: 200, height: 200}}
      />
    </View>

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

