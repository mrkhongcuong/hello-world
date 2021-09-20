import React from 'react'
import {Image, Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import SkiImage from '../assets/ski.png'

const CategoryListItem = (props) => {
    const {category} = props;
    return (
        <TouchableOpacity activeOpacity={0.5} onPress={()=> {
            Alert.alert('Click!');
        }}>
        <View style={styles.container}>
        <Text style={styles.title}>{category.name}</Text>
        <Image style={styles.categoryImage} source={SkiImage}/>
        </View>
        </TouchableOpacity>
    );
}
export default CategoryListItem;


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 16,
        borderRadius: 4,
        backgroundColor: '#FFF8E5',
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {width: 0, height:0},
        marginBottom: 16,
    },
    categoryImage: {
        width: 64,
        height: 64,
    },
    title: {
        textTransform: 'uppercase',
        marginBottom: 8,
        fontWeight: '700',
    },
})
