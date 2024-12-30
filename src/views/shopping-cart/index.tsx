import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Product, Products } from './config.ts'
import ProductRow from './row.tsx'

// region 定义枚举和类型
enum RequestStatus {
  IDLE = 'IDLE',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  PENDING = 'PENDING',
}
// endregion

export default function ShoppingCart(): React.JSX.Element {
  const [products, setProducts] = useState<Products>([])
  const [requestStatus, setRequestStatus] = useState<RequestStatus>(RequestStatus.IDLE)

  const total = products.reduce((sum, product) => {
    return sum + Number(product.price) * product.count
  }, 0)

  useEffect(() => {
    setRequestStatus(RequestStatus.PENDING)

    const url = 'https://6756a93611ce847c992da4bb.mockapi.io/shopping-cart'
    fetch(url).then(res => res.json()).then((productList: Products) => {
      console.log('products', productList)
      setRequestStatus(RequestStatus.SUCCESS)
      setProducts(productList)
    }).catch(() => {
      setRequestStatus(RequestStatus.ERROR)
    })
  }, [])

  // 操作、交互
  const getUpdatedProducts = (product: Product) => {
    const newProducts = [...products]

    for (let index = 0; index < products.length; index++) {
      if (products[index].id === product.id) {
        newProducts[index] = product
      }
    }

    return newProducts
  }
  const handleIncrement = (product: Product) => {
    const newProduct: Product = { ...product, count: product.count + 1}
    const newProducts: Products = getUpdatedProducts(newProduct)
    setProducts(newProducts)
  }
  const handleDecrement = (product: Product) => {
    const count = product.count - 1 >= 0 ? product.count - 1 : 0
    const newProduct: Product = { ...product, count: count }
    const newProducts: Products = getUpdatedProducts(newProduct)
    setProducts(newProducts)
  }

  // 处理渲染逻辑
  if (requestStatus === RequestStatus.ERROR) {
    return <Text>网络出错了</Text>;
  }
  if (requestStatus === RequestStatus.PENDING) {
    return <Text>加载中...</Text>;
  }
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
          {products.map(pItem => (
            <ProductRow
              key={pItem.id}
              product={pItem}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
            />
          ))}
        </View>

        <Text style={styles.cartTotal}>总价：{total}</Text>
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
