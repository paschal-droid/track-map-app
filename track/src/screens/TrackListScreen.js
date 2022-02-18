//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

// create a component
const TrackListScreen = ({navigation}) => {
    return (
        <>
            <Text style={{fontSize: 40}}>TrackListScreen</Text>
            <Button 
                title='More Details'
                onPress={()=> navigation.navigate('trackFlow')}
                color= 'grey'
            />
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
});

//make this component available to the app
export default TrackListScreen;
