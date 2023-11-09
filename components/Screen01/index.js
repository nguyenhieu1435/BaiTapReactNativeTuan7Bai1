import { useState } from 'react'
import { Pressable } from 'react-native'
import { View, Text, StatusBar, SafeAreaView, Image, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native';

export default function Screen01({navigation}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoadingData, setIsLoadingData] = useState(false);
    async function handleLogin(){
        if(username.trim() === "" || password.trim() === ""){
            alert("Please fill all fields")
        }else{
            setIsLoadingData(true);
            const res = await fetch(`https://n38s2n-3000.csb.app/account_tuan7?username=${username}&password=${password}`);
            const data = await res.json();
            setIsLoadingData(false);
            if (!data || data.length === 0){
                alert("Username or password is incorrect");
            } else {
                navigation.navigate("Screen02", {username: username});
                setUsername("");
                setPassword("");
            }
        }
    }
  return (
    <View style={{flex: 1, backgroundColor : "#f9fafb"}}>
        <StatusBar/>
        <SafeAreaView style={{flex: 1}}>
            
            <View style={{flex: 1, alignItems: "center"}}>
                <View style={{flex: 4, justifyContent: "space-between", width: "100%"}}>
                    <View style={{width: "100%", alignItems: "flex-end", marginTop: 30}}>
                        <Pressable style={{width: "30%"}}
                            onPress={()=> navigation.navigate("SignUp")}
                        >
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
                            value={username}
                            onChangeText={setUsername}
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
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>
                    <Pressable style={{flexDirection: "row", alignItems: "center"}}
                        onPress={handleLogin}
                    >
                        {
                            isLoadingData
                            ?
                            <ActivityIndicator style={{marginTop: 30,}} size="large"/>
                            :
                            <>
                             <Text style={{color: "#fff", fontSize: 18, marginRight: 6, backgroundColor: "#00BDD5", marginTop: 25
                        , paddingVertical: 10, paddingHorizontal: 30,  borderRadius: 12, fontWeight:"700"}}>Sign In</Text>
                            <Ionicons name="arrow-forward" size={24} color="white" />
                            </>
                        }
                       
                    </Pressable>
                </View>
            </View>

        </SafeAreaView>
    </View>
  )
} 