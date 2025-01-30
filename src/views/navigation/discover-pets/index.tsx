import React from 'react';
import {
  ScrollView,
  Pressable,
  View,
  Image,
  ImageSourcePropType,
  GestureResponderEvent,
  StyleSheet,
} from 'react-native';
import type { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ALL_NTF, PolicyNTF } from './config.ts'

interface PolicyItem {
  source: ImageSourcePropType;
  onPress: ((event: GestureResponderEvent) => void) | null | undefined;
}
function Item({ source, onPress }: PolicyItem) {
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          height: 160,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: '#cfcfcf',
          borderRadius: 10,
          borderWidth: StyleSheet.hairlineWidth,
          margin: 10,
          backgroundColor: '#fff',
        }}>
        <Image style={{width: 100, height: 100}} source={source} />
      </View>
    </Pressable>
  );
}

export default function Discover({ navigation }: NativeStackScreenProps<ParamListBase>) {
  const handleRedirect = (data: PolicyNTF) => {
    navigation.navigate('PetDetail', data);
  }

  return (
    <ScrollView style={{flex: 1}}>
      {ALL_NTF.map((NTF, index) => (
        <Item
          key={index}
          source={NTF.image}
          onPress={() => handleRedirect(NTF)}
        />
      ))}
    </ScrollView>
  );
}

/* const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
}); */
