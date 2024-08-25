import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

function App() {
  return (
    <View style={styles.container}>
      <Text>App</Text>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
