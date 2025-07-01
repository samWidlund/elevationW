import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <H1>elevationW</H1>
    </View>
  );
}

// styling components

const H1 = ({ children }) => (
  <Text style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 10 }}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E7D32',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
