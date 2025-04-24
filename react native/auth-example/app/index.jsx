import { FlatList, Text, View, StyleSheet } from "react-native";
import { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";
import Book from '../components/Book';

export default function Index() {
  const [books, setBooks] = useState(null)

  useFocusEffect(useCallback(() => {
    loadBooks();
    return setBooks(null);
  }, []))

  async function loadBooks() {
    let response = await fetch('https://shenkar-duvdevan.onrender.com/api/books', { method: 'GET' });
    let data = await response.json();
    //console.log(data);
    setBooks(data);
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}

    >
      <Text>Books</Text>
      {
        books && <View style={styles.container}>
          <FlatList 
            data={books}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => <Book {...item} />}
          />
        </View>
      }

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //backgroundColor: '#39c',
    height: 450
  }
})