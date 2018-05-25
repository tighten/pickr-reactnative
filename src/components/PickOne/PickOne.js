import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { connect } from 'react-redux';
import {getCategories, selectCategory} from "../../actions/action";

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

class PickOne extends React.Component {
  constructor() {
    super();

    this.state = {
      category: {
        name: '',
        items: []
      },
      decision: {
        name: 'No Item',
        description: 'No Description'
      }
    };
  }

  componentDidMount() {
    const category = this.props.categories.find(item => {
      return item.id === this.props.selectedCategoryId;
    });

    console.log(category);

    this.setState({ category });
  }

  componentDidUpdate() {
    this.decide();
  }

  decide() {
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

const mapStateToProps = state => {
  return {
    categories: state.categories,
    selectedCategoryId: state.selectedCategoryId
  };
};

export default connect(mapStateToProps)(PickOne);
