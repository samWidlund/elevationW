import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <h1>elevationW</h1>
      <Text>Running app for generating elevation based trail routes</Text>
      <Text>by Samuel Widlund</Text>
      <Text>Version 0.1.0</Text>
      <Text>© 2025</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E7D32',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
