import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Icons from '../Icons'


export default function App(): React.JSX.Element {
  return (
    // 实现金刚位、无限列表
    <View style={styles.container}>
      <Icons></Icons>
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
