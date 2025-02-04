import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {
  useSelector,
  useDispatch,
  Provider,
  TypedUseSelectorHook,
// @ts-ignore
} from 'react-redux';
import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit';

// Infer the `RootState` and `AppDispatch` types from the store itself
type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
type AppDispatch = typeof store.dispatch;

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

// 3.使用 createSlice 函数创建分片；
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  // Reducer
  reducers: {
    increment: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// 2.使用 configureStore 函数创建 Store；
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

console.log('all global state:', store.getState());
console.log('increment action:',counterSlice.actions.increment(1));
console.log('reducer',counterSlice.reducer);

// 此两个变量声明，在CounterApp中使用
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
const useAppDispatch = () => useDispatch<AppDispatch>();

function CounterApp() {
  // 4.使用 useSelector 获取分片 State；
  const counter = useAppSelector((state: RootState) => state.counter.value);

  // 5.使用 useDispatch 生成的 dispatch 来发送 action。
  const dispatch = useAppDispatch();

  // Event Hanlder
  const handlePress = () => {
    // Action
    const action = counterSlice.actions.increment(1);
    // dispatch
    dispatch(action);
  };

  // View/UI
  return (
    <View style={styles.box}>
      <Text>{counter}</Text>
      <View  style={{marginTop: 10}}>
        {/* click event: deposit */}
        <Button onPress={handlePress} title="+1" />
      </View>
    </View>
  );
}

export default function Root() {
  return (
    /* 1.使用 Provider 组件向应用的其他组件提供获取 Store 的能力； */
    <Provider store={store}>
      <CounterApp />
    </Provider>
  );
}
console.log('CounterApp',CounterApp.toString())
const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/**
 * 步骤：
 * 1.使用 Provider 组件向应用的其他组件提供获取 Store 的能力；
 * 2.使用 configureStore 函数创建 Store；
 * 3.使用 createSlice 函数创建分片；
 * 4.使用 useSelector 获取分片 State；
 * 5.使用 useDispatch 生成的 dispatch 来发送 action。
 */
