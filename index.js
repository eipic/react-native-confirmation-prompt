import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions, TouchableOpacity, Animated } from 'react-native';

const { height, width } = Dimensions.get('window');

export default class ConfirmationPrompt extends Component {
    componentWillMount(){
        this.actionSheetOpacity = new Animated.Value(0);
    }
    render() {
        if(this.props.actionSheetVisibility == 'flex'){
            Animated.timing(this.actionSheetOpacity,{
                toValue:1,
                duration: this.props.duration ? this.props.duration : 500
            }).start();
            this.actionSheetContentBottom = this.actionSheetOpacity.interpolate({
                inputRange: [0, 1],
                outputRange: [-height, 0]
            });
        }
        return (
            <View style={[styles.actionSheetContainer]}>
                <Animated.View style={[styles.actionSheetContentContainer, { display:this.props.obj.state.actionSheetVisibility, opacity:this.actionSheetOpacity}]}>
                    <TouchableOpacity style={styles.clearTop} onPress={() => this.closeConfimation()}></TouchableOpacity>
                    <Animated.View style={[styles.actionSheetContent, {marginBottom: this.actionSheetContentBottom}]}>
                        <View style={{alignItems:'center'}}>
                            <View style={styles.headerLine}></View>
                            <View style={{alignItems:'center', marginBottom:26}}>
                                <Text style={{color:'gray'}}>{this.props.message ? this.props.message : "Please Confirm to proceed"}</Text>
                            </View>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <TouchableOpacity onPress={() => this.confirm()} activeOpacity={0.5} style={[styles.btn, styles.btnConfirm, {backgroundColor:this.props.confirmButtonColor ? this.props.confirmButtonColor : 'gray'}]}>
                                    <Text style={{color:'white'}}>{this.props.yesButton ? this.props.yesButton : "Confirm"}</Text>
                                </TouchableOpacity>
                                <View style={{marginHorizontal: 16, marginLeft:24, width: 1, height: 10, backgroundColor:'#eeeeee'}}></View>
                                <TouchableOpacity activeOpacity={0.5} style={[styles.btn, styles.btnCancel]} onPress={() => this.closeConfimation()}>
                                    <Text>{this.props.noButton ? this.props.noButton : "Cancel"}</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Animated.View>
                </Animated.View>
             </View>
        );
    }

    showConfirmation = (obj) =>{
        obj.setState({actionSheetVisibility:'flex'});
    }
    
    closeConfimation = () =>{
        Animated.timing(this.actionSheetOpacity,{
            toValue:0,
            duration: this.props.duration ? this.props.duration : 500
        }).start(() => this.props.obj.setState({actionSheetVisibility:'none'}));
    }

    confirm = () => {
        Animated.timing(this.actionSheetOpacity,{
            toValue:0,
            duration: this.props.duration ? this.props.duration : 500
        }).start(() => this.closeAndCallback());
        
    }

    closeAndCallback = () =>{
        this.props.obj.setState({actionSheetVisibility:'none'});
        this.props.callBack ? this.props.callBack() : alert("add a callback method");
    }

    
}

const styles = StyleSheet.create({
    btn:{
        paddingHorizontal: 16,
        paddingVertical: 6,
        backgroundColor: "#1565c0",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 200,
      },
    
      actionSheetContainer:{
        position: 'absolute',
        top:0,
        
      },
    
      actionSheetContentContainer:{
        height: height,
        width: width,
        backgroundColor:'#000000BB'
      },
    
      clearTop:{
        flex: 1
      },
      actionSheetContent:{
        paddingHorizontal: 16,
        paddingBottom: 40,
        paddingTop: 10,
        backgroundColor: 'white'
      },
      headerLine:{
        width: 35,
        height: 3, 
        backgroundColor: 'gray',
        borderRadius: 200,
        marginBottom: 26,
      },
      
      btnConfirm:{
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5,
        shadowRadius: 5,
      },
      
      btnCancel:{
        backgroundColor: 'transparent',
      }
});