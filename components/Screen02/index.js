import { View, Text, StatusBar, SafeAreaView, Image, TextInput, FlatList, Pressable } from 'react-native'
import React, { useState } from 'react'

export default function Screen02({navigation}) {
    const [search, setSearch] = useState("");
    const [todoList, setTodoList] = useState(["To check email"]);
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
                <Pressable>
                    <Image
                        source={require("../../assets/edit.png")}
                        resizeMode='contain'
                        style={{width: 25, height: 25}}

                    />
                </Pressable>
            </View>
        )
    }
  return (
    <View style={{flex: 1}}>
        <StatusBar/>
        <SafeAreaView style={{flex: 1, paddingHorizontal: 30}}>
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
        </SafeAreaView>
    </View>
  )
}