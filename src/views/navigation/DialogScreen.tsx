import React from 'react';
import {
  Pressable,
  Text,
  View,
  Button,
  StyleSheet,
} from 'react-native';
import type { ParamListBase } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export default function DialogScreen(
  { navigation }: NativeStackScreenProps<ParamListBase>
): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Pressable style={styles.backdrop} onPress={navigation.goBack} />
      <View
        style={styles.dialog}
      >
        <Text style={styles.text}>
          我是弹窗
        </Text>
        <Button title="我知道了" onPress={navigation.goBack}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dialog: {
    padding: 16,
    width: '90%',
    maxWidth: 400,
    borderRadius: 3,
    backgroundColor: '#fff'
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  text: {
    alignSelf: 'center',
    marginVertical: 10,
  },
});
