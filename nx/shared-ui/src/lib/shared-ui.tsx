import React from 'react';
import { View, Text, Platform } from 'react-native';

/* eslint-disable-next-line */
export interface SharedUiProps {}

export function SharedUi(props: SharedUiProps) {

    if(Platform.OS === 'web'){
        return <div  style={styles.container}>
            <h1 style={styles.text}>Welcome to SharedUi!</h1>
        </div>
    }
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to SharedUi!</Text>
        </View>
    );
}

export default SharedUi;

// You can define platform-specific styles
const styles = {
    container: {
        // Common styles for both platforms
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // Platform-specific styles
        ...(Platform.OS === 'web' ? { height: '100vh' } : {}),
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        // Add more styling as needed
    },
};
