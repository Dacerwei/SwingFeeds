import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class FeedScreen extends Component {
    static navigationOptions = {
        headerTitle: 'Feeds',
        headerRight: (
            <Button
                onPress={() => alert('Feeds Filter!')}
                title="Filter"
            />
        ),
    };

    render() {
        return (
            <View>
                <Text>FeedScreen</Text>
            </View>
        )
    }
}