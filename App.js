import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "./global.css"

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-green-100">
      <H1>
        elevationW
      </H1>
      
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
