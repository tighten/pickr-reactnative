import React from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import { connect } from 'react-redux';
import {getCategories, selectCategory} from "../../actions/action";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    fontSize: 20,
    paddingBottom: 50,
    paddingTop: 50
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
      decision: {
        name: 'No Item',
        description: 'No Description'
      }
    };
  }

  componentDidMount() {
    this.decide();
  }

  decide() {
    let decision = this.props.category.items[
      Math.floor(Math.random() * this.props.category.items.length)
    ];

    this.setState({decision});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{this.props.category.name}</Text>
        <Text style={styles.decision}>{this.state.decision.name}</Text>
        <Text style={styles.description}>
          Description: {this.state.decision.description}
        </Text>

        <Button
          title="Pick Again"
          onPress={() => this.decide()}
        />

        <Button
          title="Manage Category"
          onPress={() =>
            this.props.navigation.navigate('ManageCategory')
          }
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    category: state.selectedCategory
  };
};

export default connect(mapStateToProps)(PickOne);
