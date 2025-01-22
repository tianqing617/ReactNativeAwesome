import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import { NormalGridData } from '../../../views/grid-demo/config.ts'
import Grid from '../../components/Grid'


export default function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Grid data={NormalGridData}></Grid>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: '#FAFAFA'
  },
});
