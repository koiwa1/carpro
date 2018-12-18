import React , {Component} from 'react';
//import ProtoTypes from 'prop-type';
import {TouchabaleOpacity} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';


function Button({iconName , onPress}){
    return (
    
            <TouchabaleOpacity>
                <fontAwesome name={iconName} size={80}
                color="white"/>

            </TouchabaleOpacity>
    )
}
export default Button;