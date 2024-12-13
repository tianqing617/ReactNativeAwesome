import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

// 定义导航堆栈的类型
type RootStackParamList = {
  // TODO: 这里类型定义，有什么用？
  // Home: { title: string }
  Home: undefined
  Chart: undefined
};

// 为 navigation 和 route 定义类型
/* type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>; */
export type HomeProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
  route: RouteProp<RootStackParamList, 'Home'>;
};
