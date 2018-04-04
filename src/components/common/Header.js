//Import libraries for making a component
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

//Make a component
const Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>{props.title}</Text>
        </View>
    )
};

//Creating styles 
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        backgroundColor: '#F8F8F8',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
});

//Make the component available to other parts of the app
export default Header;