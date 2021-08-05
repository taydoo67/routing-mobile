import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Login(props) {
    const { navigate } = props.navigation

    return (
        <View style = {styles.container}>
            <Text>This is the Sign in Page</Text>
            <Button title="Login" onPress={ () => navigate('Home') } />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
    },
 });