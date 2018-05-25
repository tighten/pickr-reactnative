import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Home from './src/components/Home/Home';
import AddCategory from './src/components/Categories/AddCategory';
import ManageCategory from './src/components/Categories/ManageCategory';
import AddItem from './src/components/Items/AddItem';
import PickOne from './src/components/PickOne/PickOne';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import reducer from './src/reducers/reducer';
import {composeWithDevTools} from 'remote-redux-devtools';

const client = axios.create({
  baseURL: 'http://pickr-api.test/',
  responseType: 'json'
});

const composeEnhancers = composeWithDevTools({realtime: true});

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(axiosMiddleware(client)))
);

const RootStack = createStackNavigator(
  {
    Home,
    AddCategory,
    ManageCategory,
    AddItem,
    PickOne
  },
  {
    initialRouteName: 'Home'
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootStack/>
      </Provider>
    );
  }
}
