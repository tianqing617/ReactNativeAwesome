import React from 'react';
import {
  Image,
  View,
} from 'react-native';

export default function ImageRenderer({imageUrl} : {imageUrl: string}): React.JSX.Element {
  // TODO: 需要在iOS上测试，是否需要在图片加载完成之前，隐藏旧的图片
  // 在 iOS 上，当组件（如列表或页面）在回收（recycling）过程中，直到新的图片加载完成之前，旧的图片仍然会保持可见。
  return (
    <View
      style={{
        flex: 1,
        margin: 3,
        backgroundColor: 'lightgrey',
      }}>
      <Image
        style={{
          flex: 1,
        }}
        source={{ uri: imageUrl }}
      />
    </View>
  );
}

/* const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
}); */
