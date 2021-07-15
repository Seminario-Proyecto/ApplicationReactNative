import React, { Component } from 'react';
import {Text, TouchableOpacity,Image} from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';


interface SearchBoxProps {
  navigation: any;
  placeholder?: String;
  navigateTo: String;
}

const SearchBar = ({placeholder, navigation, navigateTo}: SearchBoxProps) => {
  const goToSearchPage = () => {
    navigation.navigate(navigateTo);
  };

  return (
    <TouchableOpacity onPress={() => goToSearchPage()} style={styles.searchBar}>
       <Image
          source={require('../../images/lupa.png')}
         
        />
      <Text style={styles.searchBarText}>
        {placeholder ? placeholder : 'Busque un Reporte '}
      </Text>
    </TouchableOpacity>
  );
};

const styles = EStyleSheet.create({
  searchBar: {
    width: '100%',
    paddingVertical: 16.0,
    paddingHorizontal: 15.0,
    backgroundColor: '#F2F3F2',
    borderRadius: 15.0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  searchBarText: {
    marginLeft: 7.0,
    fontFamily: '$gilroyNormal600',
    fontSize: '0.875rem',
    color: '#000000',
  },
});

export default SearchBar;
