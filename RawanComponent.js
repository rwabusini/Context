import React ,{ useContext} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {UserContext} from './UserContext';


const RawanComponent = () => {
    const userContext = useContext(UserContext);
    console.log( "Rawan component" , userContext);
    // console.log( "user context" , UserContext)
    const {user, setUser} = userContext;

    return (
        <View style={styles.container}>
        <Text>Hello {user.name}!</Text>
        <Text>Hello {user.age}!</Text>
        <Button title="Change Name" onPress={() => setUser({...user, name: user.name+'_new'})}/>
        <Button title="Change Age" onPress={() => setUser({...user, age: user.age+1})}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
});

export default RawanComponent;

