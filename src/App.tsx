/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
// Navigation
import DefaultPage from './views/navigation/DefaultPage.tsx'

const Stack = createNativeStackNavigator()
const BottomTab = createBottomTabNavigator();

// 底部导航
function BottomTabHome() {
  return (
    <BottomTab.Navigator
      initialRouteName="My"
      screenOptions={{
        headerShown: false,
      }}>
      {/* <BottomTab.Screen name="Home" component={TopTabHome} options={{title: '首页'}} /> */}
      <BottomTab.Screen name="Messages" component={DefaultPage} options={{title: '消息'}}/>
      <BottomTab.Screen name="My" component={DefaultPage} options={{title: '我'}}/>
    </BottomTab.Navigator>
  );
}

function App(): React.JSX.Element {
  // <Text>测试</Text>
  // <WelcomeScreen />
  return (
  <NavigationContainer>
    {/* Home */}
    {/* <Stack.Navigator initialRouteName="Home"> */}
    <Stack.Navigator initialRouteName="BottomTabHome">
      {/* 1.底部标签导航 */}
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="BottomTabHome"
        component={BottomTabHome}
      />

      {/* 2.顶部标签导航 */}
      {/* 3.Page类页面 */}
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
