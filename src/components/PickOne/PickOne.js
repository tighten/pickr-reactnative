import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class PickOne extends React.Component {
    constructor() {
        super();

        this.state = {
            category: {
                name: 'No category',
                items: [{ name: 'No Item', description: 'No Description' }]
            },
            decision: { name: 'No Item', description: 'No Description' }
        };
    }

    componentDidUpdate() {
        this.decide();
    }

    decide() {
        const { navigation } = this.props;
        this.setState({
            category: navigation.getParam('category', {})
        });

        let decision = this.state.category.items[
            Math.floor(Math.random() * this.state.category.items.length)
        ];

        this.setState(decision);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>{this.state.category.name}</Text>
                <Text style={styles.decision}>{this.state.decision.name}</Text>
                <Text style={styles.description}>
                    Description: {this.state.decision.description}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        fontSize: 20
    },
    decision: {
        fontSize: 28
    },
    description: {
        fontSize: 14
    }
});
