import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import TextGrid from './TextGrid.tsx'

export default function App(): React.JSX.Element {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
    >
      <View style={{height: 50}} />
      <TextGrid />
      <View style={{height: 50}} />
      {/* <NormalGrid /> */}
      <View style={{height: 50}} />
      {/* 未实现 */}
      {/* <CustomGrid /> */}
    </ScrollView>
  );
}

/* const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
}); */