import { Button, TextInput, View } from "react-native"
import React, { useEffect, useState } from 'react';
import {db} from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';

export default PasswordScreen = ({navigation}) => {
    const [password, setPassword] = useState('');

    useEffect(() => {
        setPassword('');
    }, []);

    const checkForPassword = async () => {
        console.log((typeof(password)));
        const docRef = doc(db, "ChatUsers", password);
        const docSnap = await getDoc(docRef);
        console.log(docSnap.data());
        if (docSnap.exists()) {
            setPassword('');
            navigation.navigate('chat', docSnap.data());
        } else {
            notifyUser('Incorrect Password');
            setPassword('');
        }
    }

    const notifyUser = async (message) => {
        alert(message);
    }
    return (
        <View style={{display: 'flex', justifyContent: 'center', height: '100%', width: '100%'}}>
            <View style={{padding: 25}}>
                <TextInput secureTextEntry={true} focusable={true} value={password} onChangeText={(pass) => {setPassword(pass)}} placeholder="Enter Password" style={{backgroundColor: '#e6ebe7', width: '100%', height: 40, marginBottom: 30}}></TextInput>
                <Button disabled={!password.length} onPress={() => {checkForPassword()}} title="CONTINUE"></Button>
            </View>
        </View>
        
    )
}