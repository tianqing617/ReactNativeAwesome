import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

// 导航页面
// @ts-ignore
const HomeScreen = ({ navigation }) => {
  console.log('navigation', navigation)
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
