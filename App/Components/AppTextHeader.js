import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from './AppText';
import colors from '../StyleSheets/colors'

function AppTextHeader({header}) {
  return (
      <View style={styles.headerComponent}>
        <AppText style={styles.header}>{header}</AppText>
      </View>
  );
}

const styles = StyleSheet.create({
  header: {
      fontSize: 30,
      fontWeight: '900',
      color: colors.black,
      paddingTop: 5,
      paddingLeft: 10
  },
  headerComponent: {
      backgroundColor: colors.white,
  }
});

export default AppTextHeader;