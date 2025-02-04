import React from 'react';
import { Text, useWindowDimensions} from 'react-native';
import Animated, {
  withSpring,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

const LOADING_HEIGHT = 30

function PanAndScrollView() {
  const refreshY = useSharedValue(-LOADING_HEIGHT) // 加载提示，移动量
  const scrollY = useSharedValue(0)
  const { height: windowHeight } = useWindowDimensions()
  const wrapperHeight = windowHeight + LOADING_HEIGHT // 总高度 = 加载提示高度 + 屏幕高度，并设置默认偏移量为-30，隐藏加载提示

  const scrollGesture = Gesture.Native()

  const panGesture = Gesture.Pan() // 指在触摸屏上滑动来移动元素的手势
    .onChange(e => {
      // 滚动到顶部或者容器整体偏离正常位置时，可触发手势动画
      if (scrollY.value === 0 || refreshY.value !== -LOADING_HEIGHT) {
        refreshY.value =  Math.max(-LOADING_HEIGHT, (refreshY.value + e.changeY));
      }
    })
    .onEnd(() => {
      // 松手时，如果容器整体偏离正常位置
      if (refreshY.value !== -LOADING_HEIGHT) {
        // 则使用弹性动画 withSpring，回到该位置
        refreshY.value = withSpring(-LOADING_HEIGHT, {
          stiffness:300,
          overshootClamping: true
        })
      }
    })


  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: refreshY.value}],
    };
  });

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: e => {
      // 记录偏移量，只能读不能写。当为0时，要触发容器偏移，展示加载提示
      scrollY.value = e.contentOffset.y;
    },
  });

  return (
    <GestureHandlerRootView>
      {/* animatedStyle 设置Y轴偏移量 */}
      <Animated.View style={[{height: wrapperHeight}, animatedStyle]}>
        <Text style={{textAlign: 'center', height: LOADING_HEIGHT }}>loading...</Text>
        <GestureDetector gesture={Gesture.Simultaneous(scrollGesture, panGesture)}>
          <Animated.ScrollView
            // iOS支持此属性，Android不支持
            bounces={false}
            style={{backgroundColor: '#0ac'}}
            contentContainerStyle={{alignItems: 'center'}}
            onScroll={scrollHandler}
            scrollEventThrottle={1}>
            {Array(100)
              .fill(1)
              .map((_, index) => (
                <Text key={index}>{index}</Text>
              ))}
          </Animated.ScrollView>
        </GestureDetector>
      </Animated.View>
    </GestureHandlerRootView>
  );
}

export default PanAndScrollView;

/**
 * 不足之处
 * 1. 首先是 Loading 本身不能不响应拖拽手势，这就限制了回弹下拉刷新功能的通用性。
 *  如果你想把 Loading 替换成类似淘宝二楼的效果，用刚刚我们实现的下拉刷新组件来做就会有 Bug。
 *  要知道，二楼视图的高度可要比只有 30 像素的 Loading 高很多，用户很容易拖拽到二楼视图，如果用户拖拽后发现没有反应，肯定会感觉到很奇怪。
 * 2. 另外一个体验方面的问题是，在 B 方案中，也就是不松手而是反向滚动或拖拽这个步骤时，滚动动画和拖拽动画都没有禁止，二者可能会同时触发，这会导致出现两个叠加视图偏移问题。
 * 解决代码示例：https://github.com/jiangleo/react-native-classroom/blob/main/src/17_Gesture/4_BetterPanAndScrollView.tsx
 * 文章地址：17｜Gesture（下）：如何解决多视图多手势的冲突问题？——多视图多手势的冲突问题
 */
