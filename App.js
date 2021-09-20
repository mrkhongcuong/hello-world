import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import CategoryListItem from './components/CategoryListItem';


const categories = [
  {id: 1, name: 'Dụng cụ trượt tuyết'},
  {id: 2, name: 'Quần áo trượt tuyết'},
  {id: 3, name: 'Cây trượt tuyết'},
  {id: 4, name: 'Kính mũ'},
];
export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <FlatList 
        data={categories}
        renderItem={({item}) => <CategoryListItem category={item}/>}
        keyExtractor={item => `${item.id}`}
        contentContainerStyle={{paddingLeft: 16, paddingRight: 16, }}
      />
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
