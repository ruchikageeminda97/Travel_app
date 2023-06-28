import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import ItemScreen from '../screens/ItemScreen';

const ItemCard = ({imageSrc, title, location, data}) => {
  const navigation= useNavigation()
  return (
    <TouchableOpacity 
    onPress={()=>navigation.navigate("ItemScreen", {param:data})}

    className="rounded-md border-gray-50 space-y-2 px-3 py-2 shadow-md bg-white w-[182px] my-2">
      <Image 
        source={{uri : imageSrc}}
        className="w-full h-40 rounded-md object-cover"
      />
       
       {title ? (
        <>
          <Text className="text-[#428288] text-[18px] font-bold">
            {title?.length > 15 ? `${title.slice(0, 15)}..` : title}
        </Text>

      <View className="flex-row items-center space-x-1">
          
          <Ionicons name="md-location-sharp" size={15} color="#8597A2" />
          
          <Text className="text-[#428288] text-[18px] font-bold">
              {location?.length > 10 ? `${location.slice(0, 10)}..` : location}
          </Text>

      </View>
        </>
       ):(
         <></>
       )}
       

    </TouchableOpacity>
  )
}

export default ItemCard