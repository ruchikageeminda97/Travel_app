import { View, Text,Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'

import * as Animatable from 'react-native-animatable';


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
  
  <SafeAreaView className="bg-[#f3fdfa] flex-1 relative">

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

        <Text className="text-[#3C6072] text-base">Travel with purpose Discover new cultures and make a difference.</Text>
      </View>

{/*tHIRD area*/}

        <View className="w-[380px] h-[380px] bg-[#18bcd2] rounded-full absolute bottom-20 -right-36"></View>
        <View className="w-[380px] h-[380px] bg-[#ff7418] rounded-full absolute -bottom-28 -left-36"></View>

      <View className="flex-1 relative items-center justify-center">
        <Animatable.Image
          animation="fadeIn"
          easing="ease-out"
          source={Heroimage} className="w-full h-full object-cover mt-10"/>


        <TouchableOpacity 
          onPress={()=> navigation.navigate("Discover")}
          className="absolute bottom-20 w-24 h-24 rounded-full items-center justify-center 
             border-l-2 border-t-4 border-r-2 
              border-[#0ec3ba]">

            <Animatable.View 
            animation="pulse"
            easing="ease-in-out" 
            iterationCount={"infinite"} 
              className="w-20 h-20 items-center justify-center rounded-full bg-[#0ec3ba]">
              <Text className="text-[32px] font-semibold text-[#ffffff]">Go</Text>
            </Animatable.View>

        </TouchableOpacity>

      </View>

     

      </SafeAreaView>
  )
}

export default Homescreen