import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { addItem, getCategories } from "../../actions/action";
import {connect} from "react-redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
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

class AddItem extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      description: ''
    };
  }

  createItem() {
    this.props.addItem(this.props.category, { name: this.state.name, description: this.state.description })
      .then(() => this.props.getCategories());

    this.props.navigation.navigate('ManageCategory');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Add a new item to { this.props.category.name}</Text>

        <TextInput
          style={styles.textInput}
          onChangeText={name => this.setState({name})}
          placeholder="Item Name"
          value={this.state.name}
        />

        <TextInput
          style={styles.textInput}
          onChangeText={description => this.setState({description})}
          placeholder="Item Description"
          value={this.state.description}
        />

        <Button
          onPress={() => this.createItem()}
          title="Add"
          accessibilityLabel="Add a new item"
        />
      </View>
    );
  }
}

const mapDispatchToProps = {
  addItem,
  getCategories
};

const mapStateToProps = state => {
  return {
    category: state.selectedCategory
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
