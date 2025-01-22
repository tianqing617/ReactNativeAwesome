import React from 'react';
/* import {
  ScrollView,
  Text,
  View,
} from 'react-native'; */
import { queryIcons, IconType } from '../../api/homeAPI.tsx'
import Grid from '../../components/Grid'
import { NormalGridData } from '../../../views/grid-demo/config.ts'

export interface CateIconType extends IconType {
  icon: string;
  text: string;
  onPress: () => void;
}
export interface RecyclerIcons {
  width: number;
  height: number;
  type: string;
  icons: CateIconType[];
}
// @ts-ignore
export const queryRecyclerIcons = async (): Promise<RecyclerIcons> => {
  const data = await queryIcons();
  console.log('Icons-data', data)

  // 1. 转为 Grid 组件的格式
  /* const cateIcons: CateIconType[] = data?.map(icon => ({
    ...icon,
    onPress: () => {},
    icon: icon.image,
    text: icon.title,
  })); */

  // 2. 转换为 RecyclerListView 需要的格式
  /* return {
    icons: cateIcons,
    width: windowWidth,
    height: wrapperHeight,
    type: 'ICONS',
  }; */
};
// TODO: 实现金刚位，支持左、右横向滑动
// queryRecyclerIcons()

export default function App(): React.JSX.Element {
  return (
    <Grid data={NormalGridData}></Grid>
  );
}

/* const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
}); */
