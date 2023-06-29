import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'

const Menu = ({title, imageSrc,type}) => {
  
    const handlePress = () => {
        settype (title.toLowerCase())
    }
 
 
    return (
    <TouchableOpacity
    className="items-center justify-center space-y-2 onPress={handlePress}">
    <View
      className={`w-24 h-24 p-2 shadow-sm rounded-full items-center justify-center ${
        type === title.toLowerCase() ? "bg-slate-100" : ""
      }`}
    >
      <Image source={imageSrc} className="w-full h-full object-contain" />
    </View>
    <Text className="text-[#00BCC9] text-xl font-semibold">{title}</Text>
  </TouchableOpacity>
  )
}

export default Menu