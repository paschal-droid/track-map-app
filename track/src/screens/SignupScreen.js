//import liraries
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {Text, Button, Input} from 'react-native-elements'
import Spacer from '../components/Spacer'

// create a component
const SignupScreen = ({navigation}) => {
    return (
        <>
            <Spacer style={styles.container}>
                <Text h3>Track your steps now</Text>
                <Spacer />
                <Input label='Email' />
                <Input label='Password' />
                <Button style={styles.button} title='Sign Up Now' />
            </Spacer>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    button: {
        width: 50,
        color: "green",
    },

});

//make this component available to the app
export default SignupScreen;
