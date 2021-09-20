import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';


export default function Category() {
  return (
    <View>
      <StatusBar style="auto" />
        Category
    </View>
  ); 
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16,
  },
  scroll: {
    paddingLeft: 16,
    paddingRight: 16,
  }
});
