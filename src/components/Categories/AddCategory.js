import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class AddCategory extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ''
    }
  }

  createCategory() {
    fetch('http://pickr-api.test/api/categories', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.text,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.props.navigation.navigate('Home');
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Add a new category</Text>

        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          placeholder="Category Name"
          value={this.state.text}
        />

        <Button
          onPress={() => this.createCategory()}
          title="Add"
          accessibilityLabel="Add a new category"
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 250
  }
});
