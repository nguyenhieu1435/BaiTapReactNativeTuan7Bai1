import { View, Text, Pressable, Alert, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function SignUp({navigation}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [isLoadingData, setIsLoadingData] = useState(false);
    const handleSignUp = async ()=>{
        if(username.trim() === "" || password.trim() === "" || confirmPassword.trim() === ""){
            // Alert.alert("Failed", "Please fill all fields", [
            //     {text: "OK", style: "cancel"}
               
            // ]);
            alert("Please fill all fields")
        }else if(password.trim() !== confirmPassword.trim()){
            // Alert.alert("Failed", "Password and confirm password must be same"), [

            //     {text: "OK", style: "cancel"}
            // ];
            alert("Password and confirm password must be sames")
        }else{
            setIsLoadingData(true);
            const res = await fetch("https://n38s2n-3000.csb.app/account_tuan7");
            const data = await res.json();
            setIsLoadingData(false);
            const isDulicated = data.some(item => item.username.trim().toLowerCase() === username.trim().toLowerCase());
            if (isDulicated){
                // Alert.alert("Failed", "Username is already exist", [
                //     {text: "OK", style: "cancel"}
                // ]);
                alert("Username is already exist")
            } else {
                const res = await fetch("https://n38s2n-3000.csb.app/account_tuan7", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: username.trim(),
                        password: password.trim()
                    })
                });
                const data = await res.json();
                // Alert.alert("Success", "Sign up successfully", [
                //     {text: "OK", onPress: ()=> navigation.goBack()}
                // ]);
            
                alert("Sign up successfully")
                setUsername("");
                setPassword("");

            }
        }
    }

    return (
        <View style={{flex: 1}}>
            <StatusBar/>

            <SafeAreaView style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <View style={{marginLeft: 15, marginTop: 15}}>
                        <Pressable
                        
                            onPress={()=> navigation.goBack()}
                        >
                            <Ionicons name="arrow-back-outline" size={28} color="black" />
                        </Pressable>
                    </View>
                </View>
                <View style={{flex: 2, justifyContent: "center"}}>
                    
                    <Text style={{fontSize: 40, fontWeight: 'bold', textAlign: "center"}}>Sign Up</Text>
                </View>
                <View style={{flex: 7, alignItems:"center"}}>
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
                    <View style={{flexDirection: "row", width: "90%", borderWidth: 1, marginTop: 30
                        , borderRadius: 12, alignItems: "center",}}>
                            <Feather name="key" size={24} color="black" style={{marginHorizontal: 15}} />
                            <TextInput
                                placeholder='Enter your confirm password'
                                secureTextEntry={true}
                                style={{paddingVertical: 10, flexGrow: 1, fontSize: 16}}
                                placeholderTextColor={"#888"}
                                value={confirmPassword}
                                onChangeText={setConfirmPassword}
                            />
                    </View>


                    <View
                        style={{width: "100%", alignItems: "center"}}
                    >
                        <Pressable style={{width: "30%", alignItems: "center"}}
                            onPress={handleSignUp}
                            disabled={isLoadingData}
                        >
                            {
                                isLoadingData
                                ?
                                <ActivityIndicator style={{marginTop: 30,}} size="large"/>
                                :
                                <Text style={{width: "100%", textAlign: "center", fontSize: 20, textTransform: "uppercase"
                                , color: "#fff", backgroundColor: "#00BDD5", paddingVertical: 8, marginTop: 30, borderRadius: 12}}
                                >Submit</Text>
                            }
                        </Pressable>
                    </View>
                </View>

            </SafeAreaView>
        </View>
    )
}