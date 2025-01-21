import React from 'react';
import {
  View,
} from 'react-native';
import Grid from '../../HomePage/components/Grid'
import { NormalGridData } from './config.ts'

export default function App(): React.JSX.Element {
  return (
    <View>
      <Grid data={NormalGridData}></Grid>
    </View>
  );
}

/* const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
  },
}); */
