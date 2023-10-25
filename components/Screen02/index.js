import { View, Text, StatusBar, SafeAreaView, Image, TextInput, FlatList, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Screen02({navigation, route}) {
    const [search, setSearch] = useState("");
    const [todoList, setTodoList] = useState([]);
    const renderItemTodo = (item, index)=>{
        return (
            <View style={{backgroundColor: "#ccc", borderRadius: 25, flexDirection:"row", marginBottom: 25
            , paddingHorizontal: 25, alignItems: "center"}}>
                <Image
                    source={require("../../assets/check.png")}
                    resizeMode='contain'
                    style={{width: 25, height: 25}}
                />
                <Text style={{fontWeight: "500", fontSize: 16, marginLeft: 12, flexGrow: 1, paddingVertical: 15}}>{item}</Text>
                <Pressable
                    onPress={()=>navigation.navigate()}
                >
                    <Image
                        source={require("../../assets/edit.png")}
                        resizeMode='contain'
                        style={{width: 25, height: 25}}

                    />
                </Pressable>
            </View>
        )
    }
   useEffect(()=>{
        if (route?.params?.action == "add"){
            console.log( route.params.todo)
            setTodoList([...todoList, route.params.todo]);
        }
   }, [route?.params?.todo])
  return (
    <View style={{flex: 1}}>
        <StatusBar/>
        <SafeAreaView style={{flex: 1, paddingHorizontal: 30}}>
            <ScrollView
                stickyHeaderIndices={[0]}
            >
                <View>
                    <View style={{flexDirection: "row", justifyContent: "space-between", paddingVertical: 15}}>
                        <Pressable
                            onPress={()=> navigation.navigate("Screen01")}
                        >
                            <Image
                                source={require("../../assets/back.jpg")}
                                resizeMode='contain'
                                style={{width: 25, height: 25}}
                            />
                        </Pressable>
                        <View style={{flexDirection: "row" ,alignItems :"center"}}>
                            <Image
                                source={require("../../assets/avatar.jpg")}
                                style={{width: 45, height: 45, borderRadius: 100}}
                                resizeMode='contain'
                            />
                            <View>
                                <Text style={{textAlign: "center", fontWeight: "700", }}>Hi {route.params?.email}</Text>
                                <Text style={{marginLeft: 4, fontWeight: "500", color: "#666"}}>Have a greate day a head</Text>
                            </View>

                        </View>
                    </View>
                </View>
                <View style={{flexDirection: "row", borderWidth: 1, borderRadius: 4}}>
                    <Image
                        source={require("../../assets/search.jpg")}
                        style={{width: 35, height: 35}}
                        resizeMode='contain'
                    />
                    <TextInput
                        placeholder='Search'
                        placeholderTextColor="#ccc"
                        style={{flexGrow: 1, paddingVertical: 10}}
                        value={search}
                        onChangeText={setSearch}
                    />
                </View>
                <View>
                    <FlatList
                        style={{marginTop: 50}}
                        data={todoList}
                        keyExtractor={(item, index)=> index +""}
                        renderItem={({item, index})=> renderItemTodo(item, index)}
                    />
                </View>
                <Pressable style={{alignItems: "center"}}
                    onPress={()=> navigation.navigate("Screen03", {
                        action: "add",
                        email: route?.params?.email
                    })}
                >
                    <Image
                        source={require("../../assets/add-more.png")}
                        resizeMode='contain'
                        style={{width: 55, height: 55}}
                    />
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    </View>
  )
}