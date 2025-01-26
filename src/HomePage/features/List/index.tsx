import React, { useState } from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Icons from '../Icons'
// useInfiniteQuery
import { useQuery, } from '@tanstack/react-query'
// import { RecyclerListView, DataProvider } from 'recyclerlistview';
import { queryRecyclerIcons } from '../Icons'
import { queryInfiniteList } from '../../api/homeAPI.tsx'

export default function App(): React.JSX.Element {
  const query = useQuery({ queryKey: ['icon', 'list'], queryFn: queryRecyclerIcons })
  console.log('list-query', query)

  // 列表内容
  /* const [dataProvider, setDataProvider] = useState(
    new DataProvider((r1, r2) => r1 !== r2)
  )
  // TODO: LayoutUtil.getLayoutProvider(0)
  const [layoutProvider, setLayoutProvider] = useState(
    // LayoutUtil.getLayoutProvider(0)
  )
  const [images, setImages] = useState([])
  const [count, setCount] = useState(0)
  const [viewType, setViewType] = useState(0) */
  const infiniteListData = queryInfiniteList(2)
  console.log('infiniteListData', infiniteListData)

  return (
    // 实现金刚位、无限列表
    <View style={styles.container}>
      <Icons row={query.data as any}></Icons>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#FAFAFA'
  },
});
