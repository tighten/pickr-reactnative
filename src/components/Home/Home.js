import {StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView, Text, Picker, Button} from 'react-native';
import {connect} from 'react-redux';
import {getCategories, selectCategory} from "../../actions/action";

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


class Home extends React.Component {
  componentDidMount() {
    this.props.getCategories();
  }

  renderPickerItems() {
    return this.props.categories.map(category => {
      return <Picker.Item
        label={category.name}
        value={category.id}
        key={category.id}
      />;
    });
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.header}>Pickr</Text>

        <Picker
          selectedValue={this.props.selectedCategoryId}
          style={styles.picker}
          onValueChange={itemValue => this.props.selectCategory(itemValue)}
        >
          {this.renderPickerItems()}
        </Picker>

        <Button
          title="Pick Something!"
          onPress={() =>
            this.props.navigation.navigate('PickOne')
          }
        />
        <Button
          title="Manage Category"
          onPress={() =>
            this.props.navigation.navigate('ManageCategory')
          }
        />
        <Button
          title="Add Category"
          onPress={() =>
            this.props.navigation.navigate('AddCategory')
          }
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    selectedCategoryId: state.selectedCategoryId
  };
};

const mapDispatchToProps = {
  getCategories,
  selectCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
