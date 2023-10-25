import { useState } from 'react'
import { Pressable } from 'react-native'
import { View, Text, StatusBar, SafeAreaView, Image, TextInput } from 'react-native'


export default function Screen01({navigation}) {
    const [email, setEmail] = useState("");
  return (
    <View style={{flex: 1}}>
        <StatusBar/>
        <SafeAreaView style={{flex: 1}}>
            <View style={{flex: 4, alignItems: "center", justifyContent: "center"}}>
                <Image
                    source={require("../../assets/note.png")}
                    resizeMode='contain'
                    style={{width: 250, height: 250}}
                />
            </View>
            <View style={{flex: 6, alignItems: "center"}}>
                <Text style={{width: "50%", textAlign: "center", color: "#8667CE", fontSize: 25, fontWeight: "700"}}
                
                >MANAGE YOUR TASK</Text>

                <View style={{flexDirection: "row", width: "90%", borderWidth: 1
                , borderRadius: 12, alignItems: "center", marginVertical: 60}}>
                    <Image
                        source={require("../../assets/mail.jpg")}
                        resizeMode='contain'
                        style={{width: 20, height: 20, paddingHorizontal: 25, }}
                    />
                    <TextInput
                        placeholder='Enter your name'
                        style={{paddingVertical: 10, flexGrow: 1, fontSize: 16}}
                        placeholderTextColor={"#ccc"}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>
                <Pressable style={{flexDirection: "row", alignItems: "center", backgroundColor: "#00BDD5"
                , paddingVertical: 10, paddingHorizontal: 30, borderRadius: 12}}
                    onPress={()=> navigation.navigate()}
                >
                    <Text style={{color: "#fff", fontSize: 18, marginRight: 6}}>GET STARTED</Text>
                    <Image
                        source={require("../../assets/next.png")}
                        resizeMode='contain'
                        style={{width: 20, height: 20}}
                    />
                </Pressable>
            </View>

        </SafeAreaView>
    </View>
  )
} 