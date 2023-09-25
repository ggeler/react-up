import React, { useEffect, useState, useCallback } from 'react'
import { Button, FlatList, Image, RefreshControl, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { repository } from '../repository/Reporitorio'

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

const RepositoryList = ({ styles }) => {
  const [repositorio, setRepositorio] = useState([])
  const [refreshing, setRefreshing] = useState(true)

  const fetchRepository = () => {
    repository().then(data => {
      setRepositorio(data)
      setRefreshing(false)
      console.log('JSON: ', data)
    }).catch(error => console.log(error))
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    console.log('refreshing callback')
  }, [refreshing])

  useEffect(() => {
    if (!refreshing) {
      return
    }
    console.log('refresh effect')
    fetchRepository()
  }, [refreshing])

  return (
    <>
      <FlatList
        data={repositorio}
        renderItem={item => renderItemComponent(item)}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={ItemSeparator}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={() => setRefreshing(true)} />}
      />
      <Button title='Refresh' onPress={onRefresh} />
    </>
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
