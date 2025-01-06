import React from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';

export default function App(): React.JSX.Element {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
    >
      <View>
        <Text>FlatList</Text>
      </View>
    </ScrollView>
  );
}

/* const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
}); */
