import React from 'react';
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import ICON_BASE64 from './icon-base64';

export default function App(): React.JSX.Element {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
    >
      {/* 网络图片、本地图片、Base64图片，示例： */}
      {/* defaultSource: 加载图像源时显示的静态图像。 */}
      <View style={styles.container}>
        <Image
          style={{width: 200, height: 200}}
          source={require('./insurance.jpeg')}
          defaultSource={{uri: ICON_BASE64}}
        />
        {/* TODO: 未加载成功 */}
        <Image
          style={{width: 200, height: 200}}
          src={'https://lsky.11101122.xyz/i/2024/09/30/66fa212771c19.png'}
          defaultSource={{uri: ICON_BASE64}}
        />
        <Image
          style={{width: 60, height: 60}}
          source={{uri: ICON_BASE64}}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
