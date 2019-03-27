import React from 'react';
import { StyleSheet, Text, View,TextInput ,Button} from 'react-native';

import PlaceInput from './src/components/PlaceInput';
import PlaceList from './src/components/PlaceList';
import PlaceDetail from  './src/components/PlaceDetail';



export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: "",
                  places: [],
                  placeSelected: null,
                };
  
  };

  placeNameChangerHandler = (val)=>{
    this.setState({
      text: val
    });
  };
  placeSubmitHandler = ()=>{
    if(this.state.text.trim() === ""){
      return;
    }

    this.setState(prevState =>{
      return{
        places: prevState.places.concat({
          key:Math.random().toString() ,
          name: prevState.text,
          image: {
            uri: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/06/04/12/cool-woman-2018.jpg?w968" }
        }
          
          )
      };
    });
  };

  placeSelectedHandler  = key =>{
    this.setState(prevState =>{

      return{
        placeSelected: prevState.places.find(place =>{
          return place.key === key;

        })
      }

    })

  };

  placeDeletedHandler = () =>{
      this.setState(prevState =>{
      return {
        places: prevState.places.filter((place) =>{
          return place.key !== prevState.placeSelected.key;
        }),
        placeSelected: null
      };
    });
  }
  modalClosedHandler = () => {
      this.setState({
        placeSelected: null
      })
  }

  render() {
    
    return (
      <View style={styles.container}>
            <PlaceDetail  selectedData = {this.state.placeSelected} onItemDeleted = {this.placeDeletedHandler} onModalClosed = {this.modalClosedHandler}/>
            <PlaceInput name = {this.state.text} onChangeText = {this.placeNameChangerHandler} onPress = {this.placeSubmitHandler}/>
            <PlaceList places = {this.state.places} onSelectedHandler ={this.placeSelectedHandler }/>
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
