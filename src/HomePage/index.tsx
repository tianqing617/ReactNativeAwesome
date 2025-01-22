import React from 'react';
import {
  View,
  SafeAreaView,
} from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import TopBar from './features/TopBar'
import List from './features/List'

const queryClient = new QueryClient({
  // queries：指定与查询相关的默认配置。retry：定义查询失败时的重试次数。
  defaultOptions: { queries: { retry: 2 }},
})
/**
 * function App(): React.JSX.Element：仅限制返回值为 JSX 元素
 * const App: React.FC：限定返回 JSX 元素并定义 props。此写法缺点是，还要再写一个export default
 */
const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{flex: 1}}>
        {/* 占位 */}
        <View style={{height: 10}} />
        {/* 顶栏 */}
        <TopBar />

        {/* 金刚位 + 瀑布流卡片 */}
        <List />
      </SafeAreaView>
    </QueryClientProvider>
  );
}
export default App

/* const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
}); */
