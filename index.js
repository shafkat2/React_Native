import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import App from './App';
import ConfigureStore from './src/store/reducer/ConfigureStore';

const store = ConfigureStore();

const RNRedux =() => {
    <Provider store ={store}>
        <App/>
    </Provider>
}
 


AppRegistry.registerComponent('Awesome_places',()=> RNRedux);

//"main": "node_modules/expo/AppEntry.js",