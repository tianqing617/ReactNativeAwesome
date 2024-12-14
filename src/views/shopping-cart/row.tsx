import React from 'react';
import {
  Text,
  View,
  StyleSheet, Button,
} from 'react-native';

export default function Row(): React.JSX.Element {
  return (
    <View style={styles.rowItem}>
      <Text style={styles.rowText}>菠萝蜜</Text>
      <Text style={styles.rowText}>30</Text>

      <View style={styles.buttonContainer}>
        {/* onPress={() => handleIncrement(product)} */}
        <Button title="+" />
        <Text>3</Text>
        {/* onPress={() => handleDecrement(product)} */}
        <Button title="-" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  rowText: {
    flex: 1,
  },
  buttonContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
