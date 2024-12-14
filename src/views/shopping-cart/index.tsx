import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ProductRow from './row.tsx'

export default function ShoppingCart(): React.JSX.Element {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
    >
      <View style={styles.cartContainer}>
        <View style={styles.cartRow}>
          <Text style={styles.cartTitleText}>名称</Text>
          <Text style={styles.cartTitleText}>价格</Text>
          <Text style={styles.cartTitleNum}>数量</Text>
        </View>

        {/* 购物清单 */}
        <View>
          {/* products.map(product => ( */}
          <ProductRow></ProductRow>
          <ProductRow></ProductRow>
          <ProductRow></ProductRow>
          {/* handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
          product={product}
          key={product.id} */}
        </View>

        <Text style={styles.cartTotal}>总价：120</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cartContainer: {
    marginTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
  cartRow: {
    flexDirection: 'row',
    // TODO: 这个属性设置任何值，都没有变化，不生效
    justifyContent: 'space-evenly', // space-between space-around space-evenly
  },
  cartTitleText: {
    flex: 1,
    fontWeight: 'bold',
  },
  cartTitleNum: {
    alignSelf: 'flex-end',
    fontWeight: 'bold',
  },
  cartTotal: {
    marginTop: 20,
    fontWeight: 'bold',
  },
});
