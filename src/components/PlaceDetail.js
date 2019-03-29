import React from 'react';
import {Modal,View,Image,Text,Button,StyleSheet} from 'react-native';

const PlaceDetail = (props) => {
    let modalContent = null;

    if(props.selectedData){
        modalContent = (
            <View>
                 <Image source = {props.selectedData.image} style = {styles.placeImage}/>
                <Text style = {styles.Name}>
                    {props.selectedData.name}  
                </Text>
            </View>
        );
    }
    return(
    <Modal onRequestClose = {props.onModalClosed} visible = {props.selectedData !== null} animationType = "slide">
        <View style = {styles.modalContainer}>
                    {modalContent}
            <View>
                <Button title ="Delete" onPress ={props.onItemDeleted} color= "red"/>
                <Button title ="Close" onPress = {props.onModalClosed}/>
            </View>
        </View>
    </Modal>
    );

}

const styles = StyleSheet.create({
    modalContainer:{
        margin: 22,
    },
    placeImage:{
        width: "100%",
        height: 200,
    },
    Name:{
        fontWeight: "bold",
        textAlign:  "center",
        fontSize: 28
    }
});

export default PlaceDetail
