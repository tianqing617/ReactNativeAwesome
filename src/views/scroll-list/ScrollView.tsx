import React from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  Pressable,
} from 'react-native';

export default function App(): React.JSX.Element {
  const NUM_ITEMS = 100;

  const makeContent = (nItems: number, styles: any) => {
    return Array(nItems)
      .fill(1)
      .map((_, i) => (
        <Pressable
          onLayout={() => console.log('layout:' + i)}
          key={i}
          style={styles}>
          <Text>{'Item ' + i}</Text>
        </Pressable>
      ));
  };

  return (
    <ScrollView onScroll={e => console.log(e.nativeEvent.layoutMeasurement)}>
      {makeContent(NUM_ITEMS, styles.itemWrapper)}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  itemWrapper: {
    backgroundColor: '#dddddd',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 5,
    borderColor: '#a52a2a',
    padding: 30,
    margin: 5,
  },
});
