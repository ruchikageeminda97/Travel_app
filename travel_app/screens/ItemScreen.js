import { View, Text, ScrollView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
        </View>
    </ScrollView>
        
   </SafeAreaView>
  )
}

export default ItemScreen