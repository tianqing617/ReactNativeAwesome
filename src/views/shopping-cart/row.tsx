import React from 'react';
import {
  Text,
  View,
  StyleSheet, Button,
} from 'react-native';
import { Product } from './config.ts'

export default function ProductRow({ product }: { product: Product }): React.JSX.Element {
  return (
    <View style={styles.rowItem}>
      <Text style={styles.rowText}>{product.name}</Text>
      <Text style={styles.rowText}>{product.price}</Text>

      <View style={styles.buttonContainer}>
        {/* onPress={() => handleIncrement(product)} */}
        <Button title="+" />
        <Text>{product.count}</Text>
        {/* onPress={() => handleDecrement(product)} */}
        <Button title="-" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  rowText: {
    flex: 1,
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
