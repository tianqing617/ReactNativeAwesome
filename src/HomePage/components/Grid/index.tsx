import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
  StyleProp,
  ViewStyle,
  ImageStyle,
  TextStyle,
  Dimensions,
} from 'react-native';

interface PolicyGridData {
  icon?: string // 图标，url地址，或base64
  text: string // 文字
  onPress?: (params: { icon?: string, text: string }) => void // 点击事件，定义类型
}
interface PolicyGridProps {
  data: PolicyGridData[], // 格子数据源
  column?: number // 列数

  style?: StyleProp<ViewStyle> // 外部容器的样式
  itemStyle?: StyleProp<ViewStyle> // 每个格子的样式
  iconStyle?: StyleProp<ImageStyle> // 格子icon的样式
  textStyle?: StyleProp<TextStyle> // 格子text的样式

  renderItem?: unknown // 自定义渲染每个格子的内容。未实现
}

const Grid: React.FC<PolicyGridProps> = (props) => {
  // 设置props的默认值
  const {
    data = [],
    column = 4, // 设置默认列数

    style = {},
    itemStyle = {},
    iconStyle = {},
    textStyle = {},
  } = props
  return (
    <View style={[styles.wrapper, style]}>
      {data.map((item, index) => {
        const {
          icon,
          text,
          onPress = () => {},
        } = item
        const width = Dimensions.get('window').width / column
        const height = icon ? (150 / 2) : (80 / 2)
        return (
          <TouchableHighlight
            key={index}
            activeOpacity={1}
            underlayColor={'#F5F5F5'}
            onPress={() => onPress({ icon, text })}
          >
            <View
              style={[styles.item, { width, height }, itemStyle]}
            >
              {/* 渲染图标 */}
              {icon && (
                <Image style={[styles.icon, iconStyle]} source={{uri: icon}} />
              )}

              {/* 渲染文字 */}
              <Text style={[styles.text, textStyle]}>{text}</Text>
            </View>
          </TouchableHighlight>
        )
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    width: Dimensions.get('window').width / 4,
    height: 150 / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 76 / 2,
    height: 76 / 2,
    marginBottom: 10 / 2,
  },
  text: {
    height: 24 / 2,
    fontSize: 24 / 2,
    color: '#333333',
  },
});

export default Grid
