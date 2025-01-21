import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import TextGrid from './TextGrid.tsx'

export default function App(): React.JSX.Element {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
    >
      <View style={styles.titleWrapper}><Text style={styles.title}>示例一</Text></View>
      <TextGrid />
      <View style={styles.titleWrapper}><Text style={styles.title}>示例二</Text></View>
      {/* <NormalGrid /> */}
      <View style={styles.titleWrapper}><Text style={styles.title}>示例三</Text></View>
      {/* 未实现 */}
      {/* <CustomGrid /> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleWrapper: {
    height: 50,
  },
  title: {
    // TODO: 这里可以设置为100%吗？
    height: 50,
    lineHeight: 50,
    textAlign: 'center',
    fontWeight: '700',
  },
});
