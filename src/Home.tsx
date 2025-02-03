import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { PolicyCommonCpntProps } from './router'


// 导航页面
const HomeScreen = ({ navigation }: PolicyCommonCpntProps) => {
  console.log('navigation', navigation)
  function handleRedirect(pageName: string, params?: any) {
    navigation.navigate(pageName, params)
  }

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Welcome" onPress={() => handleRedirect('Welcome')} />
      <Button title="Chart" onPress={() => handleRedirect('Chart')} />
      <Button title="ShoppingCart" onPress={() => handleRedirect('ShoppingCart')} />

      {/* 滚动列表 */}
      <Button title="ScrollView" onPress={() => handleRedirect('ScrollView')} />
      <Button title="FlatList" onPress={() => handleRedirect('FlatList')} />
      <Button title="GridPage" onPress={() => handleRedirect('GridPage')} />
      {/* 动画 */}
      <Button title="AnimatedBase" onPress={() => handleRedirect('AnimatedBase')} />
      {/* 手势 */}
      <Button title="PanGesture" onPress={() => handleRedirect('PanGesture')} />
      <Button title="PanAndScroll" onPress={() => handleRedirect('PanAndScroll')} />
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
