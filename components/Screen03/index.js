import { View, Text, StatusBar, ScrollView, Pressable, Image, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native';
import { DatePickerModal } from 'react-native-paper-dates';

const priorities = [
    {
        level: 1,
        color: "red",
    },
    {
        level: 2,
        color: "orange",
    },
    {
        level: 3,
        color: "green"
    }
]

export default function Screen03({navigation, route}) {
    const {isUpdateList, setIsUpdateList} = route.params;
    //route.params?.data?.todo_name ||
    const [textInput, setTextInput] = useState(route.params?.data?.todo_name || "");
    const [isSubmit, setIsSubmit] = useState(false);
    //route.params?.data?.date ? new Date(route.params.data.date) : 
    const [date, setDate] = useState(route.params?.data?.date ? new Date(route.params.data.date) : new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [priority, setPriority] = useState(route.params?.data?.priority || priorities[0].level);

    useEffect(()=>{
        if (route.params?.action == "update"){
            setDate(new Date(route.params?.data?.date));
            setPriority(route.params?.data?.priority);
            setTextInput(route.params?.data?.todo_name);
        }
    }, [route.params])

    const handleClickFinish = async ()=>{
        if (textInput == ""){
            return;
        }
        if (route.params?.action == "add"){
            
            setIsSubmit(true);
            const res = await fetch("https://n38s2n-3000.csb.app/todo_list_tuan7", { 
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: route?.params?.username,
                    todo_name: textInput,
                    date: date.toISOString().slice(0, 10),
                    priority: priority
                })

            }); 
            setIsUpdateList(!isUpdateList);

            setIsSubmit(false);
            setTextInput("");
            navigation.navigate("Screen02", {
                username: route?.params?.username,
            });
        
        } else {
        
            setIsSubmit(true);
            const res = await fetch(`https://n38s2n-3000.csb.app/todo_list_tuan7/${route.params?.data?.id}`, { 
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: route?.params?.username,
                    todo_name: textInput,
                    date: date.toISOString().slice(0, 10),
                    priority: priority
                })
            });
            setIsSubmit(false);
            setTextInput("");
            setIsUpdateList(!isUpdateList);
            navigation.navigate("Screen02", {
                username: route?.params?.username,
            });
        }
    }

    const onDismissSingle = React.useCallback(() => {
        setShowPicker(false);
      }, [showPicker]);
    
      const onConfirmSingle = React.useCallback(
        (params) => {
            setShowPicker(false);
            setDate(params.date);
        },
        [showPicker, setDate]
      );

    return (
        <View style={{flex: 1}}>
            <StatusBar/>
            <SafeAreaView style={{flex: 1}}>
                <ScrollView stickyHeaderIndices={[0]}>

                    <View style={{backgroundColor:"#fff"}}>
                            <View style={{flexDirection: "row", justifyContent: "space-between", paddingVertical: 15, zIndex: 2}}>
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
                                <Pressable
                                    onPress={()=> navigation.goBack()}
                                >
                                    <Ionicons name="arrow-back-outline" size={28} color="black" />
                                </Pressable>
                            
                            </View>
                    </View>

                    <View style={{alignItems: "center", marginTop: 40, marginHorizontal: 30}}>
                        <Text style={{fontSize: 35, fontWeight: "700"}}>{route.params?.action == "add" ? "ADD YOUR JOB" : "EDIT YOUR JOB"}</Text>

                    </View>

                    <View style={{flexDirection: "row", alignItems: "center", borderWidth: 1, paddingVertical: 8, marginHorizontal: 30
                    ,borderRadius: 4, marginTop:30}}>
                        <Image
                            source={require("../../assets/notelist.png")}
                            resizeMode='contain'
                            style={{width: 25, height: 25, marginHorizontal: 10}}
                        />
                        <TextInput
                            placeholder='input your job'
                            style={{flexGrow: 1, fontSize: 16}}
                            placeholderTextColor={"#333"}
                            value={textInput}
                            onChangeText={setTextInput}
                        />
                    </View>
                
                    <Pressable style={{flexDirection: "row", alignItems: "center", borderWidth: 1, paddingVertical: 8, marginHorizontal: 30
                    ,borderRadius: 4, marginTop:30}}
                        onPress={()=> setShowPicker(true)}
                    >
                        <Text style={{textAlign: "center", width: "100%", fontSize: 16}}>{date.toISOString().slice(0, 10)}</Text>
                    </Pressable>


                    {
                            showPicker 
                            &&
                            <DatePickerModal
                                locale="en"
                                mode="single"
                                visible={true}
                                onDismiss={onDismissSingle}
                                date={date}
                                onConfirm={onConfirmSingle}
                                />
                    }

                
                    <View style={{width: "100%", marginTop: 20, marginHorizontal: 30}}>
                        <Text style={{fontSize: 20, fontWeight: "500"}}>Priority</Text>
                        <View style={{width: "100%", flexDirection: "row", justifyContent: "space-evenly", marginTop: 5}}>
                            {
                                priorities.map((item, index)=>{
                                    return (
                                        <Pressable key={index}
                                            onPress={()=> setPriority(item.level)}
                                            style={{width: 40, height: 40, justifyContent: "center"
                                            , borderWidth: priority === item.level ? 2 : 0, borderColor: "#00BDD5"}}
                                        >
                                            <Text style={{width: "100%", height: "100%", backgroundColor: item.color, paddingTop: 5
                                            , color: "#fff", fontSize: 17, textAlign: "center", fontWeight: "600"}}>
                                                {item.level}
                                            </Text>
                                        </Pressable>
                                    )
                                })
                            }
                            
                        </View>
                    </View>

                    <View style={{width: "100%", alignItems: "center", paddingHorizontal: 30}}>
                            {
                                isSubmit
                                ?
                                <ActivityIndicator style={{marginTop: 30,}} size="large"/>
                                :
                                <Pressable style={{borderRadius: 12, width: "60%", flexDirection: "row", alignItems :"center", justifyContent: "center"
                                , marginTop: 50, backgroundColor: "#00BDD5"}}
                                    onPress={()=>handleClickFinish()}
                                    
                                >
                                    <Text style={{fontSize: 17, color: "#fff", paddingVertical: 10, marginRight: 5}}
                                    
                                    >Finish</Text>
                                    <Ionicons name="arrow-forward" size={24} color="white" />
                                </Pressable>
                            }
                    </View>
                    <View style={{alignItems: "center", marginTop: 50, paddingHorizontal: 30}}>
                        <Image
                            source={require("../../assets/note.png")}
                            resizeMode='contain'
                            style={{width:250, height: 250}}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}