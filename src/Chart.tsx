import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import BasicChart from './echarts/BasicChart.tsx'

function getCellColor(num: number) {
  if (num > 0) {
    return styles.cellTextGreen;
  } else {
    return styles.cellTextRed;
  }
}
const Separator = () => <View style={styles.separator} />;

function Chart(): React.JSX.Element {
  // Mock数据
  const tableData = [
    { name: '北京', num: '3286', grew: 14 },
    { name: '上海', num: '3178', grew: 46 },
    { name: '郑州', num: '1895', grew: -24 },
  ];
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={backgroundStyle}>
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
          <Text style={styles.label}>运营分析表</Text>
          {/* 表格报表 */}
          {/* 表格中的一行 */}
          {tableData.map(row => (
            <View key={row.name} style={styles.tableRow}>
              <View style={styles.tableCell}>
                <Text style={styles.tableCellText}>{row.name}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={styles.tableCellText}>{row.num}</Text>
              </View>
              <View style={styles.tableCell}>
                <Text style={[styles.tableCellText, getCellColor(row.grew)]}>{row.grew}</Text>
              </View>
            </View>
          ))}
      </View>

      {/* 分隔线 */}
      <Separator />

      {/* 图表 */}
      <BasicChart />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  label: {
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 10,
    fontSize: 24,
  },
  tableRow: {
    flexDirection: 'row',
    height: 30,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  tableCell: {
    flex: 1,
  },
  tableCellText: {
    textAlign: 'center',
  },
  cellTextGreen: {
    color: 'green',
  },
  cellTextRed: {
    color: 'red',
  },

  separator: {
    backgroundColor: '#fff',
    // paddingVertical: 8,
    // color: '#fff',
    borderBottomColor: '#737373',
    // borderColor: '#fff',
    paddingVertical: 8,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default Chart;
