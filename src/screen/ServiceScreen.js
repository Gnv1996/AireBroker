import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function ServiceScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello this is Service Screen</Text>
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

export default ServiceScreen;
