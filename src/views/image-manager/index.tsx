import React from 'react';
import {
  ScrollView,
  View,
  Image,
} from 'react-native';
// TODO: 为什么要使用ICON
import ICON_BASE64 from './icon-base64';

export default function App(): React.JSX.Element {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
    >
      <View>
        <Image
          style={{width: 200, height: 200}}
          source={require('./insurance.jpeg')}
          defaultSource={{uri: ICON_BASE64}}
        />
        {/* TODO: 未加载成功 */}
        <Image
          style={{width: 200, height: 200}}
          source={{
            uri: 'https://share.cleanshot.com/TxtbSk5d',
          }}
          defaultSource={{uri: ICON_BASE64}}
        />
      </View>
    </ScrollView>
  );
}

/* const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
}); */
