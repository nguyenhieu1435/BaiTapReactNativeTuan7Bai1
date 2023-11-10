import { View, Text, StatusBar, SafeAreaView, Image, TextInput, FlatList, Pressable, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function Screen02({navigation, route}) {
    const [search, setSearch] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [data, setData] = useState([]);
    const [isUpdateList, setIsUpdateList] = useState(false)
    useEffect(()=>{
        const getData = async ()=>{
            const res = await fetch("https://n38s2n-3000.csb.app/todo_list_tuan7?username="+route?.params?.username);
            let dataArr = await res.json();
            dataArr = dataArr.sort((a,b)=>a.date.localeCompare(b.date));
            console.log(dataArr);
            setData(dataArr);
        }
        getData();
    }, [isUpdateList])

    const renderItemTodo = (item, index)=>{
        return (
            <View style={{backgroundColor: "#ccc", borderRadius: 25, flexDirection:"row", marginBottom: 25
            , paddingHorizontal: 25, alignItems: "center", justifyContent: "space-between", paddingVertical: 3}}>
                <Image
                    source={require("../../assets/check.png")}
                    resizeMode='contain'
                    style={{width: 25, height: 25}}
                />
                <View style={{flex: 1}}>
                    <Text style={{fontWeight: "500", fontSize: 16, marginLeft: 12, flexGrow: 1, paddingVertical: 5
                    , color: item.priority === 1 ? "red" : item.priority === 2 ? "orange" : "green"}}
                    >{item.todo_name}</Text>
                    <Text style={{marginLeft: 12, fontSize: 16}}>Hạn: {item.date}</Text>
                </View>
                <Pressable
                    onPress={()=>navigation.navigate("Screen03", {
                        action: "update",
                        username: route?.params?.username,
                        data: item,
                        index: index,
                        isUpdateList: isUpdateList,
                        setIsUpdateList: setIsUpdateList
                    })}
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
    const handleSetSeach = (text)=>{
        setSearch(text);
    }


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
                            onPress={()=> navigation.goBack()}
                        >
                            <Ionicons name="arrow-back-outline" size={28} color="black" />
                        </Pressable>
                        <View style={{flexDirection: "row" ,alignItems :"center"}}>
                            <Image
                                source={require("../../assets/avatarmain.png")}
                                style={{width: 45, height: 45, borderRadius: 100}}
                                resizeMode='contain'
                            />
                            <View>
                                <Text style={{textAlign: "center", fontWeight: "700", }}>Hi {route.params?.username}</Text>
                                <Text style={{marginLeft: 4, fontWeight: "500", color: "#666"}}>Have a greate day a head</Text>
                            </View>

                        </View>
                    </View>
                </View>
                <View style={{flexDirection: "row", borderWidth: 1, borderRadius: 4, alignItems: "center"}}>
                    <Image
                        source={require("../../assets/search-image.png")}
                        style={{width: 30, height: 30, marginHorizontal: 10}}
                        resizeMode='contain'
                    />
                    <TextInput
                        placeholder='Search'
                        placeholderTextColor="#333"

                        style={{flexGrow: 1, paddingVertical: 10, fontWeight: "500", fontSize: 16}}
                        value={search}
                        onChangeText={(text)=>handleSetSeach(text)}
                    />
                </View>
                <View>
                    <FlatList
                        style={{marginTop: 50}}
                        data={search != "" ? data.filter(item => item.todo_name.includes(search)) : data }
                        keyExtractor={(item, index)=> index +""}
                        renderItem={({item, index})=> renderItemTodo(item, index)}
                    />
                </View>
                <Pressable style={{alignItems: "center"}}
                    onPress={()=> navigation.navigate("Screen03", {
                        action: "add",
                        username: route?.params?.username, 
                        isUpdateList: isUpdateList,
                        setIsUpdateList: setIsUpdateList
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