import React from 'react'
import repositories from '../repository/repository'
import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useState } from 'react/cjs/react.production.min'

const renderItemComponent = (data) => {
    <TouchableOpacity style={styles.container}>
        <Text> Cat </Text>
        <Image style={styles.image} source={{ uri: data.item.url }} />
    </TouchableOpacity>
}

const ItemSeparator = () => <View style={{
  height: 2,
  backgroundColor: 'rgba(0,0,0,0.5)',
  marginLeft: 10,
  marginRight: 10
}} />

const fetchCats = () => {
  fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=1')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      return data.data
    })
    .catch(e => console.log(e))
}

const RepositoryList = () => {
  const cats = fetchCats()
  return (
    <View>
          <FlatList
            data={cats}
            renderItem={item => renderItemComponent(item)}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={ItemSeparator}
          />
    </View>
  )
}

export default RepositoryList

const styles = StyleSheet.create({
  container: {
    height: 300,
    margin: 10,
    backgroundColor: '#FFF',
    borderRadius: 6
  },
  image: {
    height: '100%',
    borderRadius: 4
  }
})
