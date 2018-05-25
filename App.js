import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Home from './src/components/Home/Home';
import AddCategory from './src/components/Categories/AddCategory';
import PickOne from './src/components/PickOne/PickOne';

const RootStack = createStackNavigator(
    {
        Home,
        AddCategory,
        PickOne
    },
    {
        initialRouteName: 'Home'
    }
);

export default class App extends React.Component {
    render() {
        return <RootStack />;
    }
}
