import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import {addCategory} from "../../actions/action";
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

class AddCategory extends React.Component {
  constructor() {
    super();

    this.state = {
      text: ''
    };
  }

  createCategory() {
    this.props.addCategory({ name: this.state.text });
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Add a new category</Text>

        <TextInput
          style={styles.textInput}
          onChangeText={text => this.setState({text})}
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

const mapDispatchToProps = {
  addCategory
};

export default connect(null, mapDispatchToProps)(AddCategory);
