import { View, Text,Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Heroimage } from '../assets';

const Homescreen = () => {

  const navigation = useNavigation();

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false,
    })
  },[])

  return (
      <SafeAreaView className="bg-white flex-1 relative">

{/*Top area*/}

        <View className="flex-row px-6 mt-8 items-center space-x-2">
          <View className="w-16 h-16 bg-[#213363] rounded-full items-center justify-center">
            <Text className="text-[#ffffff] text-3xl font-semibold">Go</Text>
          </View>
          <Text className="text-[#2A2B4B] font-bold text-3xl">Travel</Text>
        </View>
{/*Second area*/}

      <View className="px-6 mt-6 space-y-2.5">
        <Text className="text-[#3C6072] text-[42px]">Enjoy the trip with</Text>
        <Text className="text-[#e83e3e] text-[30px] font-bold">Good Moents</Text>

        <Text className="text-[#3C6072] text-base">Travel with purpose: Discover new cultures and make a difference.</Text>
      </View>

{/*tHIRD area*/}

        <View className="w-[380px] h-[380px] bg-[#00BCC9] rounded-full absolute bottom-20 -right-36"></View>
        <View className="w-[380px] h-[380px] bg-[#E99265] rounded-full absolute -bottom-28 -left-36"></View>

      <View className="flex-1 relative items-center justify-center">
        <Image source={Heroimage} className="w-full h-full object-cover mt-10"/>

      </View>

      </SafeAreaView>
  )
}

export default Homescreen