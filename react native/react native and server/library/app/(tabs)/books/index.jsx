import { useFocusEffect } from 'expo-router';
import { useCallback, useState } from 'react';
import { Text, View } from 'react-native';

export default function index() {
    const [books, setBooks] = useState([]);

    async function fetchBooks() {
        try {
            const response = await fetch('https://rn-library-server.onrender.com/api/books');
            const data = await response.json();
            console.log('Fetched books:', data);
            setBooks(data);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    }

    useFocusEffect(useCallback(()=>{
        fetchBooks();
        // Cleanup function if needed
        return () => {
            setBooks([]); // Clear books on unmount
        };
    }, [books]));

    return (
        <View>
            <Text>Books</Text>
        </View>
    )
}