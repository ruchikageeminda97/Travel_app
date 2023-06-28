import { View, Text } from 'react-native'
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

console.log(data);
return (
   <SafeAreaView className="flex-1 bg-yellow-400">
        <View >
        <Text>ItemScreen</Text>
        </View>

   </SafeAreaView>
  )
}

export default ItemScreen