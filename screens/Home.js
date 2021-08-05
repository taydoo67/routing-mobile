import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home(props) {
    const { navigate } = props.navigation

    return (
        <View style = {styles.container}>
            <Text>This is the Home Page</Text>
            <Button title="Home" onPress={ () => navigate('Content') } />
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