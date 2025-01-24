import React, { useState } from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { queryIcons } from '../../api/homeAPI.tsx'
import Grid from '../../components/Grid'

export interface CateIconType {
  id: string
  text: string
  icon: string
  onPress: (data: CateIconType) => void;
}
/* export interface RecyclerIcons {
  width: number;
  height: number;
  type: string;
  icons: CateIconType[];
} */

function handleIconClick(data: CateIconType) {
  console.log('handleIconClick', data)
}
// Promise<RecyclerIcons>
export const queryRecyclerIcons = async (): Promise<CateIconType[]> => {
  const data = await queryIcons();
  // console.log('Icons-data', data)

  // 1. 转为 Grid 组件的格式
  const cateIcons: CateIconType[] = data?.map(item => ({
    id: item.id,
    text: item.title,
    icon: item.image,
    onPress: handleIconClick,
  }));
  return cateIcons

  // 2. 转换为 RecyclerListView 需要的格式
  /* return {
    icons: cateIcons,
    width: windowWidth,
    height: wrapperHeight,
    type: 'ICONS',
  }; */
};
// queryRecyclerIcons()

// 1. 定义容器的宽和高
// const wrapperHeight = 200;
const windowWidth = Dimensions.get('window').width;

export default function CateIcons({ row }: { row: CateIconType[]}): React.JSX.Element {
  console.log('CateIcons', row)
  // 处理数据
  const firstPartRow = row?.slice(0, 10) || []
  const secondPartRow = row?.slice(10, 20) || []

  // 金刚位 页数
  const [indicator, setIndicator] = useState(0);

  // 2. 定义Grid的宽和高
  const height = 200
  const width = windowWidth
  const wrapperStyle = {height, width};

  const indicatorHeight = 5;
  const gridStyle = [{height: height - indicatorHeight, width}];

  return (
    <View style={wrapperStyle}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={({nativeEvent}) => {
          if (nativeEvent.contentOffset.x < windowWidth) {
            setIndicator(0);
          } else {
            setIndicator(1);
          }
        }}
        showsHorizontalScrollIndicator={false}
      >
        {/* 第一页 */}
        <Grid
          data={firstPartRow}
          column={5}
          style={gridStyle}
          itemStyle={styles.itemStyle}
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
        ></Grid>
        {/* 第二页 */}
        <Grid
          data={secondPartRow}
          column={5}
          style={gridStyle}
          itemStyle={styles.itemStyle}
          iconStyle={styles.iconStyle}
          textStyle={styles.textStyle}
        ></Grid>
      </ScrollView>
      {/* 页数 */}
      <View style={styles.indicatorBox}>
        <View
          style={indicator === 0 ? styles.activeIndicator : styles.indicator}
        />
        <View
          style={indicator === 1 ? styles.activeIndicator : styles.indicator}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    marginVertical: 12,
  },
  // 容器的宽和高
  wrapper: {
    width: windowWidth,
    // height: wrapperHeight, // 注意： wrapper.height > iconStyle.height*2
  },
  itemStyle: {
    height: 80,
  },
  iconStyle: {
    width: 40,
    height: 40,
    borderRadius: 10,
  },
  textStyle: {
    fontSize: 12,
    color: '#636363',
  },

  indicatorBox: {
    flexDirection: 'row',
    height: 5,
    alignSelf: 'center',
    transform: [{translateY: -18}],
  },
  indicator: {
    height: 5,
    marginHorizontal: 5,
    width: 8,
    backgroundColor: '#A9A9A9',
    borderRadius: 5,
  },
  activeIndicator: {
    height: 5,
    width: 15,
    backgroundColor: '#FF4C39',
    borderRadius: 5,
  },
});
