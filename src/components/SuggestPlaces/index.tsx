import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { h, w } from '../../config/dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CustomizedTextInput as Input } from "../TextInput";
import { useRef, useState } from 'react';
import { MapAPI } from '../../api/map';
import defaultPlaces from '../../screens/Find/Position/defaultPlaces';
import useTheme from '../../hooks/useTheme';


export default function SuggestPlaces({ setSuggestions, search, setSearch, setLocation }: any) {
  const timeout = useRef<any>()
  const { theme, mode } = useTheme();


  /**
   * @Method on input change
   * @returns err | null
   * */


  const handleSearchInputChange = async (searchTerm: string) => {
    // clear the previous timeout.
    clearTimeout(timeout.current)
    setSearch(searchTerm);

    // if there is no search term, do not make API call
    if (!searchTerm) {
      setSuggestions([]);
      return;
    }

    try {
      timeout.current = setTimeout(async () => {
        // limited to COUNTRY:DZ
        const response = await MapAPI.suggest(searchTerm);
        setSuggestions(response.data.predictions);
      }, 1000)
    } catch (error) {
      console.error(error);
    }
  };


  /**
   * @Method on clear press
   * @returns null
   * */

  const onClear = () => {
    setLocation(undefined);
    setSuggestions(defaultPlaces);
    setSearch("")
  }


  return (
    <View style={[styles.search, { backgroundColor: theme.colors.bg.input }]}>
      <View>
        <Ionicons
          name='search'
          size={w * 5}
          color={theme.colors.disabled.dark}
        />
      </View>
      <Input
        autoFocus
        autoCorrect={false}
        fontFamily={theme.fonts.FONT_REGULAR}
        style={styles.searchText}
        value={search}
        placeholder="Rue Larbi Ben M'hidi, Alger"
        numberOfLines={1}
        returnKeyType='go'
        maxLength={100}
        onChangeText={(text: string) => handleSearchInputChange(text)}
      />
      {search != "" &&
        <TouchableOpacity onPress={onClear}>
          <Ionicons
            name='close-circle'
            size={w * 6}
            color={theme.colors.disabled.dark}
          />
        </TouchableOpacity>
      }
    </View>
  )
}


const styles = StyleSheet.create({
  search: {
    height: h * 7,
    borderRadius: h * 1,
    flexDirection: "row",
    marginBottom: "5%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "5%"
  },
  searchText: {
    fontSize: w * 4,
    flexShrink: 1,
    flex: 1,
    paddingHorizontal: "5%",
  }
}); 