import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    checkboxConatiner: {
        flexDirection: 'row-reverse',
    },
    checkbox: {
        marginRight: -20,
        marginLeft: 10
    },
    checkboxLabel: {
        fontSize: 18
    }
});

export default styles;