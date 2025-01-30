/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

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
import DialogScreen from './views/navigation/DialogScreen.tsx'
import DiscoverPage from './views/navigation/discover-pets/index.tsx'
import PetDetail from './views/navigation/discover-pets/Detail.tsx'

const Stack = createNativeStackNavigator()
const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

// 顶部导航
function TopTabDiscover() {
  return (
    <TopTab.Navigator initialRouteName="Recommend">
      <TopTab.Screen name="Recommend" component={DefaultPage} options={{title: '推荐'}} />
      <TopTab.Screen
        name="Cat"
        component={DefaultPage}
        options={{title: '猫猫'}}
      />
      <TopTab.Screen
        name="Dog"
        component={DefaultPage}
        options={{title: '狗狗'}}
      />
    </TopTab.Navigator>
  );
}
function TopTabHome() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TopTab.Navigator initialRouteName="Follow">
        <TopTab.Screen
          name="Follow"
          component={DiscoverPage}
          options={{title: '关注'}}
        />
        <TopTab.Screen
          name="TopTabDiscover"
          component={TopTabDiscover}
          options={{title: '发现'}}
        />
        <TopTab.Screen
          name="Location"
          component={DefaultPage}
          options={{title: '附近'}}
        />
      </TopTab.Navigator>
    </SafeAreaView>
  );
}
// 底部导航
function BottomTabHome() {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      {/* 嵌套顶部标签导航 */}
      <BottomTab.Screen name="Home" component={TopTabHome} options={{title: '首页'}} />

      <BottomTab.Screen name="Messages" component={HomePage} options={{title: '动态'}}/>
      {/* TODO: 这里有类型问题，没有解决。去掉any可复现？ */}
      <BottomTab.Screen name="My" component={HomeScreen as any} options={{title: '我'}}/>
    </BottomTab.Navigator>
  );
}

// 入口函数
function App(): React.JSX.Element {
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

      {/* 2.默认页 */}
      <Stack.Screen name="Page" component={DefaultPage} />
      {/* 3.弹窗 */}
      <Stack.Screen
        options={{
          presentation: 'transparentModal' , // card modal transparentModal
          animation: 'fade',
          headerShown: false,
        }}
        name="Modal"
        component={DialogScreen}
      />

      {/* 4.Page类页面 */}
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Chart" component={ChartScreen} />
      <Stack.Screen name="ShoppingCart" component={ShoppingCart} />
      <Stack.Screen name="ImageManager" component={ImageManager} />
      {/* 滚动列表 */}
      <Stack.Screen name="ScrollView" component={ScrollViewDemo} />
      <Stack.Screen name="FlatList" component={FlatListDemo} />
      {/* <Stack.Screen name="RecycleListView" component={RecycleListViewDemo} /> */}
      {/* 电商首页。放到底部导航中 */}
      {/* <Stack.Screen name="HomePage" component={HomePage} /> */}
      {/* Grid组件示例 */}
      <Stack.Screen name="GridPage" component={GridPage} />
      {/* 动物详情 */}
      <Stack.Screen
        name="PetDetail"
        initialParams={{symbol: '$'}}
        options={{
          title: '详情页',
          // TODO: 研究注释参数
          // headerBackButtonMenuEnabled: false,
          // headerBackTitle: '1234',
          // headerBackTitleVisible: false,
          // statusBarHidden: false,
          // headerShown: false,
          // gestureEnabled: false,
          // animation: 'slide_from_bottom'
          // fullScreenGestureEnabled: true,
        }}
        // TODO: 研究如何去除any
        component={PetDetail as any}
      />
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
