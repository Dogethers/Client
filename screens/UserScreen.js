import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const UserScreen = () => {
    return (
        <View style={styles.container}>
            <Text>User Screen</Text>
        </View>
    )
}

export default UserScreen

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    }
})
