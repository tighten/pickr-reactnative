import {StyleSheet} from "react-native";
import React from "react";
import { SafeAreaView, Text, Picker, Button } from 'react-native';

export default class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [],
      selectedCategory: null
    }
  }

  componentDidMount() {
    fetch('http://pickr-api.test/api/categories', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          categories: responseJson,
          selectedCategory: responseJson[0].id
        });
      });
  }

  renderPickerItems() {
    return this.state.categories.map(category => {
      return <Picker.Item
        label={ category.name }
        value={ category.id }
        key={ category.id }
      />;
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Pickr</Text>

        <Picker
          selectedValue={this.state.selectedCategory}
          style={styles.picker}
          onValueChange={(itemValue) => this.setState({selectedCategory: itemValue})}
        >
          { this.renderPickerItems() }
        </Picker>

        <Button title="Pick Something!" />
        <Button title="Manage Category" />
        <Button
          title="Add Category"
          onPress={() => this.props.navigation.navigate('AddCategory')}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%'
  },
  header: {
    fontSize: 30,
    paddingTop: 80
  },
  picker: {
    height: 200,
    width: 200
  }
});
