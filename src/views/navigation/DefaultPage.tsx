import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import type { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export default function DefaultPage(
  { route, navigation }: NativeStackScreenProps<ParamListBase>
): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>我是{route.name}页面</Text>
      <Text
        style={styles.button}
        onPress={() => {
          navigation.push('Welcome');
        }}>
        跳转下一页
      </Text>
      {/* 弹窗 */}
      <Text
        style={styles.button}
        onPress={() => {
          navigation.push('Modal');
        }}>
        打开弹窗
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  button: {
    alignSelf: 'center',
    marginVertical: 10,
    backgroundColor: '#0ac'
  },
});
