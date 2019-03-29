import React from 'react';
import { registerRootComponent } from 'expo';

import { Provider } from 'react-redux';
import App from './App';
import ConfigureStore from './src/store/reducer/ConfigureStore';

const store = ConfigureStore();

const RNRedux =() => {
    return(
    <Provider store ={store}>
        <App/>
    </Provider>
    )
}

 


registerRootComponent(RNRedux);

//"main": "node_modules/expo/AppEntry.js",