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
      <Button title="ShoppingCart" onPress={() => handleRedirect('ShoppingCart')} />

      {/* 滚动列表 */}
      <Button title="ScrollView" onPress={() => handleRedirect('ScrollView')} />
      <Button title="FlatList" onPress={() => handleRedirect('FlatList')} />
      {/* 未实现，需要时看示例代码：src/views/scroll-list/RecycleListView.tsx.bak */}
      {/* <Button title="RecycleListView" onPress={() => handleRedirect('RecycleListView')} /> */}
      {/* 电商首页 */}
      <Button title="HomePage" onPress={() => handleRedirect('HomePage')} />
      <Button title="GridPage" onPress={() => handleRedirect('GridPage')} />
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
