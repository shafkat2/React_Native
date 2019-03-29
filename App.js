import React from 'react';
import { StyleSheet, Text, View,TextInput ,Button} from 'react-native';
import { connect } from 'react-redux';
 

import PlaceInput from './src/components/PlaceInput';
import PlaceList from './src/components/PlaceList';
import PlaceDetail from  './src/components/PlaceDetail';
import {addPlace, deletePlace, selectPlace, deselectPlace,nameChanger } from './src/store/action/Places_action';



class App extends React.Component {

  placeSubmitHandler = (placename )=>{
    this.props.onAddPlace(placename);
  }

  placeNameChangerHandler = (val)=>{
      this.props.onChangePlace(val);
  };

  placeSelectedHandler  = key =>{
    this.props.onSelectPlace(key);
  };

  placeDeletedHandler = () =>{
      this.props.onDeletePlace();
  }
  modalClosedHandler = () => {
      this.props.onDeselectPlace();
  }

  render() {
    
    return (
      <View style={styles.container}>
            <PlaceDetail  selectedData = {this.props.placeSelected} onItemDeleted = {this.placeDeletedHandler} onModalClosed = {this.modalClosedHandler}/>
            <PlaceInput name = {this.props.text} onChangeText = {this.placeNameChangerHandler} onPress = {this.placeSubmitHandler}/>
            <PlaceList places = {this.props.places} onSelectedHandler ={this.placeSelectedHandler }/>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  
});

const mapsStatetoProps = state =>{

    return{
      text: state.places.text,
      places: state.places.places,
      selectedPlace:state.places.selectedPlace
    };
};

const mapDispatchtoProps = dispatch =>{
  return{
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace()),
    onNameChanger: (name) => dispatch(nameChanger(name)),

  }
}



export default connect(mapsStatetoProps,mapDispatchtoProps)(App);