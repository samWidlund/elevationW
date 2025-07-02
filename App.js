import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import "./global.css"

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-green-100">
      <StatusBar style="auto"/>

        <Image 
        source={require('./img/elevationWLogo.png')}
        style={{width: 200, height: 200, marginBottom: 20, borderRadius: 20,}}
        />

        <Text>
          © Samuel Widlund 2025
        </Text>
    </View>
  );
}

// styling components
const H1 = ({ children }) => (
  <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 10 }}>
    {children}
  </Text>
);

