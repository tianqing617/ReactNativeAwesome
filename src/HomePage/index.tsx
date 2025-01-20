import React from 'react';
import {
  ScrollView,
  Text,
  View,
  SafeAreaView,
} from 'react-native';
import TopBar from './features/TopBar'

/**
 * function App(): React.JSX.Element：仅限制返回值为 JSX 元素
 * const App: React.FC：限定返回 JSX 元素并定义 props。此写法缺点是，还要再写一个export default
 */
const App: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* 占位 */}
      <View style={{height: 10}} />
      {/* 顶栏 */}
      <TopBar />

      {/* 金刚位 + 瀑布流卡片 */}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >
        <View>
          <Text>Blank Screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default App

/* const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
}); */
