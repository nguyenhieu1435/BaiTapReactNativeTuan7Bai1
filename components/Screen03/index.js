import { View, Text, StatusBar, ScrollView, Pressable, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'

export default function Screen03({navigation, route}) {
    const [textInput, setTextInput] = useState("");
    const handleClickFinish = ()=>{
        if (route.params?.action == "add"){
            navigation.navigate("Screen02", {
                action: "add",
                todo: textInput,
                email: route?.params?.email
            })
        }
    }
  return (
    <View style={{flex: 1, paddingHorizontal: 30}}>
        <StatusBar/>
        <SafeAreaView style={{flex: 1}}>
            <ScrollView stickyHeaderIndices={[0]}>

                <View>
                        <View style={{flexDirection: "row", justifyContent: "space-between", paddingVertical: 15}}>
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
                            <Pressable
                                onPress={()=> navigation.navigate("Screen01")}
                            >
                                <Image
                                    source={require("../../assets/back.jpg")}
                                    resizeMode='contain'
                                    style={{width: 25, height: 25}}
                                />
                            </Pressable>
                           
                        </View>
                    </View>

                <View style={{alignItems: "center", marginTop: 40}}>
                    <Text style={{fontSize: 35, fontWeight: "700"}}>ADD YOUR JOB</Text>

                </View>
                <View style={{flexDirection: "row", alignItems: "center", borderWidth: 1, borderRadius: 4, marginTop:30}}>
                    <Image
                        source={require("../../assets/notelist.png")}
                        resizeMode='contain'
                        style={{width: 35, height: 35}}
                    />
                    <TextInput
                        placeholder='input your job'
                        style={{flexGrow: 1, fontSize: 16}}
                        value={textInput}
                        onChangeText={setTextInput}
                    />
                </View>
                <View style={{width: "100%", alignItems: "center"}}>
                    <Pressable style={{borderRadius: 12, width: "60%", flexDirection: "row", alignItems :"center", justifyContent: "center"
                    , marginTop: 50, backgroundColor: "#00BDD5"}}
                        onPress={()=>handleClickFinish()}
                    
                    >
                        <Text style={{fontSize: 17, color: "#fff", paddingVertical: 10, marginRight: 5}}
                        
                        >Finish</Text>
                        <Image
                            source={require("../../assets/next.png")}
                            resizeMode='contain'
                            style={{width: 25, height: 25}}
                        />
                    </Pressable>
                </View>
                <View style={{alignItems: "center", marginTop: 50}}>
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