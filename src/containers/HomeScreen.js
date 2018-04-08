import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'

export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home',
    };

    render() {
        return (
            <View>
                <Text>HomeScreen</Text>
                <Button
                    title="Seeds"
                    onPress={() => this.props.navigation.navigate('List')}
                />
            </View>
        )
    }
}
