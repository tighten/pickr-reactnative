import { StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaView, Text, Picker, Button } from 'react-native';
import { connect } from 'react-redux';
import { getCategories } from "../../actions/action";

<<<<<<< HEAD
export default class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            categories: [],
            selectedCategory: null
        };
=======
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
  constructor() {
    super();

    this.state = {
      selectedCategory: null
>>>>>>> be7fc836ba0bd4e4399b63f37fadd4f942eb9102
    }

<<<<<<< HEAD
    componentDidMount() {
        fetch('http://pickr-api.cats/api/categories', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    categories: responseJson,
                    selectedCategory: responseJson[0].id
                });
            });
    }

    renderPickerItems() {
        return this.state.categories.map(category => {
            return (
                <Picker.Item
                    label={category.name}
                    value={category.id}
                    key={category.id}
                />
            );
        });
    }
=======
  componentDidMount() {
    this.props.getCategories();
  }

  renderPickerItems() {
    return this.props.categories.map(category => {
      return <Picker.Item
        label={ category.name }
        value={ category.id }
        key={ category.id }
      />;
    });
  }
>>>>>>> be7fc836ba0bd4e4399b63f37fadd4f942eb9102

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.header}>Pickr</Text>

                <Picker
                    selectedValue={this.state.selectedCategory}
                    style={styles.picker}
                    onValueChange={itemValue =>
                        this.setState({ selectedCategory: itemValue })
                    }
                >
                    {this.renderPickerItems()}
                </Picker>

                <Button
                    title="Pick Something!"
                    onPress={() =>
                        this.props.navigation.navigate('PickOne', {
                            category: this.state.categories.find(category => {
                                return (
                                    category.id === this.state.selectedCategory
                                );
                            })
                        })
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

<<<<<<< HEAD
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
=======
const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = {
  getCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
>>>>>>> be7fc836ba0bd4e4399b63f37fadd4f942eb9102
