import { View, Text,Image, ScrollView, TouchableOpacity, ActivityIndicator  } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { SafeAreaView } from 'react-native-safe-area-context';

import {Attractions, Hotels, NotFound, Resturents, profile } from '../assets';
import Menu from '../components/Menu';

import { FontAwesome } from '@expo/vector-icons';
import ItemCard from '../components/ItemCard';
import { getPlacesData } from '../api';

const Discover = () => {

    const navigation = useNavigation();

    const [type, settype] = useState ("restaurants")
    const [isLoading, setisLoading] = useState(false)
    const [mainData, setmainData] = useState([])

   useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false,
    })
  },[])

  useEffect (()=> {
    setisLoading(true);
    getPlacesData().then(data => {
        setmainData(data);
        setInterval(() => {
            setisLoading(false);
        }, 2000);
    })
  }, []) 

{/*
 useEffect(() => {
    setisLoading(true);
    getPlacesData().then((data) => {
      setmainData(data);
        setInterval(() => {
        setisLoading (false);
      }, 2000);
    });
    },[])
*/}
  return (
    <SafeAreaView className="bg-white flex-1 relative">
       <View className="flex-row items-center justify-between px-8">

        <View>
            <Text className="text-[40px] text-[#0B646B] font-bold">Discover</Text>
            <Text className="text-[35px] text-[#527283] ">the beauty today</Text>
        </View>
        
        <View className="w-12 h-12 bg-slate-500 rounded-md items-center justify-center">
            <Image
                source={profile}
                className="h-full w-full rounded-md object-cover"
                />
        </View>

        </View>

        <View className="flex-row items-center bg-[#f9f7fd] mx-4 rounded-lg py-2 px-2 mt-3 shadow-lg">
        <GooglePlacesAutocomplete
            GooglePlacesDetailsQuery={{fields : "geometry"}}
            placeholder='Find here'
            fetchDetails={true}
            onPress={(data, details = null) => {
                // 'details' is provided when fetchDetails = true
                console.log(details?.geometry?.viewport);
            }}
            query={{
                key: "AIzaSyAfr-6auzWRumLUd4EXleZNY-Cj5--BI4w",
                language: 'en',
            }}
            />


        </View>

        {/* menu */}

           {isLoading ? <View className="flex-1 items-center justify-center">
                <ActivityIndicator size="large" color="#0B646B" /> 
           </View> :
           
            <ScrollView>

                    <View className=" flex-row items-center justify-between px-8 mt-8">
                        
                        <Menu
                            key={"hotel"}
                            title="Hotel"
                            imageSrc={Hotels}
                            type={type}
                            settype={settype}
                        />

                        <Menu
                            key={"attractions"}
                            title="Attractions"
                            imageSrc={Attractions}
                            type={type}
                            setType={settype}
                        />

                        <Menu
                            key={"restaurants"}
                            title="Restaurants"
                            imageSrc={Resturents}
                            type={type}
                            setType={settype}
                        />

                    </View>

                    <View>
                        <View className="flex-row items-center justify-between px-8 mt-8">
                            <Text className="text-[#266369] font-bold text-[30px]">
                                Top Tips
                            </Text>

                            <TouchableOpacity className="flex-row items-center justify-center space-x-1.5">
                                <Text className="text-[#2C7379] font-bold text-[24px]">
                                    Explore
                                </Text>

                                <FontAwesome name="long-arrow-right" size={24} color="#A0C4C7" />

                            </TouchableOpacity>
                        </View>
                    


                        <View className="px-4 mt-8 flex-row items-center justify-evenly flex-wrap">
                           
                         {mainData?.length > 0 ? (
                         <>
                        {mainData?.map((data, i) => (

                            <ItemCard 
                                key={i} 
                                imageSrc={
                                    data?.photo?.images?.medium?.url ? 
                                    data?.photo?.images?.medium?.url :
                                    "https://www.yoursteaktoday.nl/wp-content/uploads/2020/10/no-image-available.jpg"

                                } 
                                title={data?.name}
                                location={data?.location_string}
                                data={data}
                            />

                            ))}

                            </>
                             ) : ( 
                                <>
                                <View className="w-full h-[400px] items-center space-y-8 justify-center ">
                                    <Image source={NotFound} 
                                        className="w-40 h-40 object-cover "/>
                                        <Text className="text-[25px] mb-14">Oops... Not found</Text>
                                </View>
                                </> 
                            )}
                         
                         
                         
                           

                        </View>

                    </View>

            </ScrollView>
           
           } 

            
            

    </SafeAreaView>
  )
}

export default Discover