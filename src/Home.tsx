import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { HomeProps } from './router'


// 导航页面
const HomeScreen: React.FC<HomeProps> = ({ navigation }) => {
  console.log('navigation', navigation)
  function handleRedirect(pageName: string, params?: any) {
    navigation.navigate(pageName, params)
  }

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Welcome" onPress={() => handleRedirect('Welcome')} />
      <Button title="Chart" onPress={() => handleRedirect('Chart')} />
      {/* <Button title="Chart" onPress={() => handleRedirect('ShoppingCart')} /> */}
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
