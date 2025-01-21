/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './Welcome.tsx'
import HomeScreen from './Home.tsx'
import ChartScreen from './Chart.tsx'
import ShoppingCart from './views/shopping-cart'
import ImageManager from './views/image-manager'
// 滚动列表
import ScrollViewDemo from './views/scroll-list/ScrollView.tsx'
import FlatListDemo from './views/scroll-list/FlatList.tsx'
// import RecycleListViewDemo from './views/scroll-list/RecycleListView.tsx'
import HomePage from './HomePage/index.tsx'
import GridPage from './views/grid-demo'

const Stack = createNativeStackNavigator()
function App(): React.JSX.Element {
  // <Text>测试</Text>
  // <WelcomeScreen />
  return (
  <NavigationContainer>
    {/* Home */}
    {/* <Stack.Navigator initialRouteName="Home"> */}
    <Stack.Navigator initialRouteName="GridPage">
      {/* TODO: 这里有类型问题，没有解决。去掉any可复现？ */}
      <Stack.Screen name="Home" component={HomeScreen as any} options={{title: 'Home'}} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Chart" component={ChartScreen} />
      <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
      <Stack.Screen name="ImageManager" component={ImageManager} />
      {/* 滚动列表 */}
      <Stack.Screen name="ScrollView" component={ScrollViewDemo} />
      <Stack.Screen name="FlatList" component={FlatListDemo} />
      {/* <Stack.Screen name="RecycleListView" component={RecycleListViewDemo} /> */}
      {/* 电商首页 */}
      <Stack.Screen name="HomePage" component={HomePage} />
      {/* Grid组件示例 */}
      <Stack.Screen name="GridPage" component={GridPage} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

/* const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
}); */

export default App;
