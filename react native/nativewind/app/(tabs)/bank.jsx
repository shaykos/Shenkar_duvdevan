import { FlatList, Image, Linking, Text, TouchableOpacity, View } from 'react-native';

const banks = [
  {
    id: '1',
    name: 'בנק הפועלים',
    description: 'סניף ראשי בתל אביב',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135706.png',
    coords: { latitude: 32.0700, longitude: 34.7930 },
  },
];

function openWaze({ latitude, longitude }) {
  const url = `https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`;
  Linking.openURL(url);
}

export default function bank() {
  return (
    <View className="flex-1 bg-white">
      <FlatList
        data={banks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View className="flex-row m-3 p-3 bg-gray-100 rounded-xl items-center shadow">
            <Image source={{ uri: item.image }} className="w-16 h-16 rounded-full mr-3" />
            <View className="flex-1">
              <Text className="text-lg font-bold mb-1">{item.name}</Text>
              <Text className="text-sm text-gray-600 mb-1">{item.description}</Text>
              <Text className="text-xs text-gray-400 mb-2">{`מיקום: ${item.coords.latitude}, ${item.coords.longitude}`}</Text>
              <TouchableOpacity className="bg-blue-500 px-3 py-2 rounded-md self-start" onPress={() => openWaze(item.coords)}>
                <Text className="text-white font-bold">נווט למקום</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}
