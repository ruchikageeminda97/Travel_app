import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';

const ItemScreen = ({route}) => {
    const navigation= useNavigation();
    const data = route?.params?.param;

useLayoutEffect(()=>{
    navigation.setOptions({
    headerShown:false,
    })
},[])


return (
   <SafeAreaView className="flex-1 bg-white relative">
    <ScrollView className="flex-1 px-4 py-6">
        <View className="relative bg-white shadow-lg">
            <Image 
                source={
                    {uri :
                        data?.photo?.images?.large?.url ? 
                        data?.photo?.images?.large?.url :
                        "https://www.yoursteaktoday.nl/wp-content/uploads/2020/10/no-image-available.jpg"
       
                    }
                }
            className="w-full h-72 object-cover rounded-2xl"
            />

            <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
               
                <TouchableOpacity 
                    onPress={() => navigation.navigate("Discover")}

                    className="w-10 h-10 rounded-md items-center justify-center bg-[#fdffff]">
                     <FontAwesome5 name="chevron-left" size={24} color="#06B2BE" />
                </TouchableOpacity>

                <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]">
                         <FontAwesome5 name="heartbeat" size={24} color="#fff" />
                </TouchableOpacity>

            </View>


            <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
               
               <View className="flex-row space-x-2 items-center">
                    <Text className="text-[12px] font-bold text-gray-100 ">
                        {data?.price_level}
                    </Text>

                    <Text className="text-[32px] font-bold text-gray-100">
                        {data?.price}
                    </Text>
               </View>

                <View>
                <Text className="px-2 py-1 rounded-md bg-teal-600 text-[#fff]">
                        {data?.open_now_text}
                    </Text>
                </View>

            </View>

        </View>


    </ScrollView>
        
   </SafeAreaView>
  )
}

export default ItemScreen