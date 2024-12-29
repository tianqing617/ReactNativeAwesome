import React from 'react';
import {
  Text,
  View,
  StyleSheet, Button,
} from 'react-native';
import { Product } from './config.ts'

interface PolicyProductProps {
  product: Product
  handleIncrement: () => void
  handleDecrement: () => void
}
export default function ProductRow({ product, handleIncrement, handleDecrement }: PolicyProductProps): React.JSX.Element {
  return (
    <View style={styles.rowItem}>
      <Text style={styles.rowText}>{product.name}</Text>
      <Text style={styles.rowText}>{product.price}</Text>

      <View style={styles.buttonContainer}>
        
        <Button title="+" onPress={() => handleIncrement(product)} />
        <Text>{product.count}</Text>
        
        <Button title="-" onPress={() => handleDecrement(product)} />
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
