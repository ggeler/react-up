import React, { useEffect, useState } from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { repository } from '../repository/catRepo'

const renderItemComponent = (data) => {
  return (
    <TouchableOpacity style={styles.container}>
        <Text> Cat </Text>
        <Text>DataID: {data.item.id}</Text>
        <Image style={styles.image} source={{ uri: data.item.url }} />
    </TouchableOpacity>
  )
}

const ItemSeparator = () => <View style={{
  height: 2,
  backgroundColor: 'rgba(0,0,0,0.5)',
  marginLeft: 10,
  marginRight: 10
}} />

const RepositoryList = () => {
  const [repositorio, setRepositorio] = useState([])

  useEffect(() => {
    repository().then(data => {
      setRepositorio(data)
      console.log('JSON: ', data)
    }).catch(error => console.log(error))
  }, [])

  return (
          <FlatList
            data={repositorio}
            renderItem={item => renderItemComponent(item)}
            keyExtractor={item => item.id.toString()}
            ItemSeparatorComponent={ItemSeparator}
          />
  )
}

export default RepositoryList

const styles = StyleSheet.create({
  container: {
    height: 400,
    // margin: 10,
    backgroundColor: '#FFF',
    borderRadius: 6
  },
  image: {
    height: '100%',
    borderRadius: 4
  }
})
