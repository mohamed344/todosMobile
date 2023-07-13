import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { h, w } from '../../config/dimensions';
import { FilterHorizontalItem } from './FilterHorizontalItem';
import useTheme from '../../hooks/useTheme';


export function FilterHorizontal({ filter, options, color = 'primary', ...props }: any) {
  const { theme, mode } = useTheme();

  return (
    <View style={
      [styles.horizontalScrollView, {
        borderBottomColor: theme.colors.disabled.border,
        backgroundColor: theme.colors.bg[color]
      }]}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyboardShouldPersistTaps='handled'
        contentContainerStyle={styles.filter}
      >
        {options.map((x: any, index: number) => {
          const isSelected = filter == index;
          return (
            <FilterHorizontalItem key={index} {...props} options={options} isSelected={isSelected} index={index} />
          )
        })}
      </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
  filter: {
    flexDirection: "row",
    //flexGrow: 1
  },
  horizontalScrollView: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: h * 7,
  },
})