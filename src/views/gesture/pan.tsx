import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

function Ball() {
  const isPressed = useSharedValue(false);
  const offset = useSharedValue({ x: 0, y: 0 });

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offset.value.x },
        { translateY: offset.value.y },
      ],
      backgroundColor: isPressed.value ? 'blue' : '#ccc',
    };
  });

  // 第二步，在 Gesture.Pan 拖拽手势的 10 个手势回调中，选择 onBegin 和 onFinalize 手势回调响应拖拽开始和拖拽完成，选择 onChange 响应拖拽移动；
  const dragGesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onChange((e) => {
      console.log('onChange', e)
      // {"absoluteX":175,"absoluteY":275.5,"changeX":8,"changeY":2,"eventName":"onGestureHandlerEvent","handlerTag":1,"numberOfPointers":1,"pointerType":0,"state":4,"target":2,"translationX":108.5,"translationY":142,"velocityX":63.38309016134245,"velocityY":15.203055819789565,"x":74.5,"y":71.5}

      // 第三步，在相应的拖拽回调中同步更新动画组件的共享值，也就是 x、y 轴坐标，实现基础的拖拽动效。
      offset.value = {
        x: e.changeX + offset.value.x,
        y: e.changeY + offset.value.y,
      };
    })
    .onFinalize(() => {
      isPressed.value = false;
    });

  return (
    // 第一步，创建 Gesture.Pan 手势并将拖拽手势绑定到动画组件上
    <GestureHandlerRootView>
      <GestureDetector gesture={dragGesture}>
        <Animated.View style={[styles.ball, animatedStyles]} />
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

export default function PanExample() {
  return (
    <View style={styles.container}>
      <Ball />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ball: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
});
