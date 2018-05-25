import React from 'react';
import {StyleSheet, Text, View, Button } from 'react-native';
import {connect} from "react-redux";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
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

class ManageCategory extends React.Component {
  renderItems() {
    return this.props.category.items.map(item => {
      return <Button
        key={item.id}
        title={item.name}
        onPress={() =>
          this.props.navigation.navigate('Home')
        }
      />
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{ this.props.category.name }</Text>

        <View style={{ borderBottom: 1 }}>
          { this.renderItems() }
        </View>

        <Button
          title="Add Item"
          onPress={() =>
            this.props.navigation.navigate('AddItem')
          }
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    category: state.selectedCategory
  }
};

export default connect(mapStateToProps)(ManageCategory);
