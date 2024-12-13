import React from 'react';
import {
  ScrollView,
  Text,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
    >
      <View>
        <Text>Blank Screen</Text>
      </View>
    </ScrollView>
  );
}

/* const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
}); */

export default App;
