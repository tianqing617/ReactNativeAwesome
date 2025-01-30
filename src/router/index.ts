import { NativeStackNavigationProp, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RouteProp, ParamListBase } from '@react-navigation/native';

// 为通用导航参数，定义类型
export type PolicyCommonCpntProps = NativeStackScreenProps<ParamListBase>

type PolicyCommonProps = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList>;
}
// 定义导航堆栈的类型
type RootStackParamList = {
  // TODO: 这里类型定义，有什么用？
  // Home: { title: string }
  // Chart: undefined
  // ShoppingCart: undefined

  /* PetDetail: {
    symbol: string;
  }; */
};

export type BottomStackParamList = {
  Home: undefined
  Messages: undefined
  My: PolicyCommonProps
}

// 为 navigation 和 route 定义类型
/* type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>; */
/*
export type HomeProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
  route: RouteProp<RootStackParamList, 'Home'>;
};
*/
