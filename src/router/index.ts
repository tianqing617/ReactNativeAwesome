import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ParamListBase } from '@react-navigation/native';
import { PolicyNTF } from '../views/navigation/discover-pets/config.ts'

// 组件参数定义：为通用导航参数，定义类型
export type PolicyCommonCpntProps = NativeStackScreenProps<ParamListBase>
export type PolicyPetDetailProps = NativeStackScreenProps<{
  PetDetail: PolicyNTF
}, 'PetDetail'>

// 路由定义
// 定义导航堆栈的类型
export type RootStackParamList = {
  BottomTabHome: undefined
  Page: PolicyCommonCpntProps
  Modal: PolicyCommonCpntProps
  PetDetail: PolicyNTF

  Welcome: undefined
  Chart: undefined
  ShoppingCart: undefined
  ImageManager: undefined
  ScrollView: undefined
  FlatList: undefined
  GridPage: undefined
};

export type BottomStackParamList = {
  Home: undefined
  Messages: undefined
  My: PolicyCommonCpntProps
}
