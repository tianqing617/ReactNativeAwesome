import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Icons from '../Icons'
// useInfiniteQuery
import { useQuery, } from '@tanstack/react-query'
import { queryRecyclerIcons } from '../Icons'

export default function App(): React.JSX.Element {
  const query = useQuery({ queryKey: ['icon', 'list'], queryFn: queryRecyclerIcons })
  console.log('list-query', query)

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
