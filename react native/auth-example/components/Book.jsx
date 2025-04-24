import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Book({title, author, genre, publishedYear}) {

  return (
    
    <View style={styles.container}>
      <Text className="text-lg text-blue-500">{title}</Text>
      <Text>{author}</Text>
      <Text>{genre}</Text>
      <Text>{publishedYear}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'black',
        borderRadius: 25,
        borderWidth: 2,
        height: 150,
        width: 350,
        marginBottom: 10,
        padding: 15
    }
})