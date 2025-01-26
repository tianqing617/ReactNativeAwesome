import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Icons from '../Icons'
// useInfiniteQuery
import { useQuery, useInfiniteQuery } from '@tanstack/react-query'
import { RecyclerListView, DataProvider } from 'recyclerlistview';
import { queryRecyclerIcons } from '../Icons'
import ImageRenderer from './ImageRenderer.tsx'
import { getLayoutProvider } from './LayoutUtil.tsx'
import { queryInfiniteList } from '../../api/homeAPI.tsx'

export default function RecyclerList(): React.JSX.Element {
  const query = useQuery({ queryKey: ['icon', 'list'], queryFn: queryRecyclerIcons })
  console.log('list-query', query)

  /* 列表请求调试
  const infiniteListData = queryInfiniteList(1)
  console.log('infiniteListData', infiniteListData)
  */
  // 文档地址：https://tanstack.com/query/latest/docs/framework/react/reference/useInfiniteQuery
  const infiniteQuery = useInfiniteQuery({
    queryKey: ['infinite', 'list'],
    // queryFn: queryInfiniteList,
    queryFn: (params) => {
      console.log('queryFn', params)
      return queryInfiniteList(params.pageParam)
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) => {
      console.log('getNextPageParam', lastPage, allPages, lastPageParam, allPageParams)
      return lastPage.length > 0 ? (lastPageParam + 1) : null
      // return null
    }
  })
  console.log('infiniteQuery', infiniteQuery)

  // region 列表内容
  // RLV 的模板代码
  let dp = new DataProvider((r1, r2) => {
    return r1 !== r2;
  });
  if (infiniteQuery.data?.pages) {
    dp = dp.cloneWithRows(infiniteQuery.data.pages.flat());
  }

  // footer模板
  const renderFooter = () => {
    console.log('renderFooter', infiniteQuery.hasNextPage)
    //Second view makes sure we don't unnecessarily change height of the list on this event. That might cause indicator to remain invisible
    //The empty view can be removed once you've fetched all the data
    return infiniteQuery.hasNextPage
      ? <ActivityIndicator
        style={{ margin: 10 }}
        size="large"
        color={'black'}
      />
      : <View style={styles.noDataWrapper}><Text>没有更多数据了</Text></View>;
  }

  // 图片模板
  const rowRenderer = (type: number | string, data: string) => {
    console.log('rowRenderer', type, data)
    //We have only one view type so not checks are needed here
    return <ImageRenderer imageUrl={data} />;
  };

  // 布局模板
  const layoutProvider = getLayoutProvider(0)

  // 滚动至底部
  const loadMoreData = ()=> {
    if (infiniteQuery.fetchStatus === 'idle') {
      // onEndReached 返回值为void
      infiniteQuery.fetchNextPage()
    }
  }
  // endregion

  return (
    // 实现金刚位、无限列表
    <View style={styles.container}>
      {/* 金刚位放入RecyclerList，再不研究。使用时再研究
      核心在71行：const layoutProvider = new WaterfallLayoutProvider
      地址：https://github.com/jiangleo/react-native-classroom/blob/main/src/12_HomePage/features/List/index.tsx */}
      <Icons row={query.data as any}></Icons>

      {dp.getSize() > 0 ? (
        <RecyclerListView
          style={styles.listWrapper}
          onEndReached={loadMoreData}
          dataProvider={dp}
          layoutProvider={layoutProvider}
          rowRenderer={rowRenderer}
          renderFooter={renderFooter}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // height: 520,
    marginTop: 10,
    backgroundColor: '#FAFAFA'
  },
  listWrapper: {
    flex: 1,
    // height: 200,
  },
  noDataWrapper: {
    height: 60,
    lineHeight: 60,
    textAlign: 'center',
  },
});
