import { useState } from 'react'
import { Pressable } from 'react-native'
import { View, Text, StatusBar, SafeAreaView, Image, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Screen01({navigation}) {
    const [email, setEmail] = useState("");
  return (
    <View style={{flex: 1, backgroundColor : "#f9fafb"}}>
        <StatusBar/>
        <SafeAreaView style={{flex: 1}}>
            
            <View style={{flex: 1, alignItems: "center"}}>
                <View style={{flex: 4, justifyContent: "space-between", width: "100%"}}>
                    <View style={{width: "100%", alignItems: "flex-end", marginTop: 30}}>
                        <Pressable style={{width: "30%"}}>
                            <Text style={{textAlign: "center", fontSize: 18, color: "#fff", fontWeight: "700"
                            , backgroundColor: "#00BDD5", paddingVertical: 10}}>Sign In</Text>
                        </Pressable>
                    </View>
                    <View style={{width: "100%", alignItems: "center"}}>
                        <Text style={{width: "50%", textAlign: "center", fontSize: 24, fontWeight: "700"
                        , color: "#8353E2"}}>
                            MANAGE YOUR TASK
                        </Text>
                    </View>
                </View>

                <View style={{flex: 6, width: "100%", alignItems: "center"}}>
                    <View style={{flexDirection: "row", width: "90%", borderWidth: 1
                    , borderRadius: 12, alignItems: "center", marginTop: 60}}>
                        <Feather name="user" size={24} color="black" style={{marginHorizontal: 15}}/>
                        <TextInput
                            placeholder='Enter your username'
                            style={{paddingVertical: 10, flexGrow: 1, fontSize: 16}}
                            placeholderTextColor={"#888"}
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                    <View style={{flexDirection: "row", width: "90%", borderWidth: 1, marginTop: 30
                    , borderRadius: 12, alignItems: "center",}}>
                        <Feather name="key" size={24} color="black" style={{marginHorizontal: 15}} />
                        <TextInput
                            placeholder='Enter your password'
                            secureTextEntry={true}
                            style={{paddingVertical: 10, flexGrow: 1, fontSize: 16}}
                            placeholderTextColor={"#888"}
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                    <Pressable style={{flexDirection: "row", alignItems: "center", backgroundColor: "#00BDD5", marginTop: 25
                    , paddingVertical: 10, paddingHorizontal: 30, borderRadius: 12}}
                        onPress={()=> navigation.navigate("Screen02", {email: email})}
                    >
                        <Text style={{color: "#fff", fontSize: 18, marginRight: 6}}>Sign In</Text>
                        <Ionicons name="arrow-forward" size={24} color="white" />
                    </Pressable>
                </View>
            </View>

        </SafeAreaView>
    </View>
  )
} 