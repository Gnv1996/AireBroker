import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function ChatScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello this is Chat Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  heading: {
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default ChatScreen;
