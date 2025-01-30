import React, { useEffect } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';
import { PolicyPetDetailProps } from '../../../router'

export default function PetDetail(
  {
    route,
    navigation
  }: PolicyPetDetailProps)
{

  useEffect(() => {
    /* navigation.setOptions({
      headerShown: false,
      fullScreenGestureEnabled: true,
    }); */
  }, [navigation])

  const {
    describe,
    price,
    image,
    symbol
  } = route.params;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fefefe',
      }}>
      <Text style={styles.text}>{describe}</Text>
      <Image style={{width: 300, height: 300}} source={image} />

      <View style={{flexDirection: 'row'}}>
        <Text style={styles.text}>
          {symbol}
          {price}
        </Text>
        <Text style={[styles.button]}>Buy</Text>
        <Text
          style={[styles.button]}
          onPress={() => {
            if (symbol === '￥') {
              return;
            }
            navigation.setParams({
              symbol: '￥',
              price: price * 6.3,
            });
          }}>
          切换成￥
        </Text>
        <Text
          style={[styles.button]}
          onPress={() => {
            navigation.setOptions({
              title: '新标题',
            });
          }}>
          设置新标题
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  button: {
    alignSelf: 'center',
    marginVertical: 10,
    marginLeft: 10,
    backgroundColor: '#0ac'
  },
});
