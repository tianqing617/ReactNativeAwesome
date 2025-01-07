import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  FlatList,
} from 'react-native';

interface PolicyItemType {
  id: string
  title: string
}

const NUM_ITEMS = 100;

const DATA: PolicyItemType[] = Array(NUM_ITEMS).fill(1).map((_, i) => ({id: `id:${i}`,title: `id:${i}`}))

const Item = ({title}: {title: string}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default function App(): React.JSX.Element {
  const renderItem = ({item}: { item: PolicyItemType }) => <Item title={item.title} />;

  return (
    <FlatList
      debug={true}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
