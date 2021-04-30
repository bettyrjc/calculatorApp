/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../themes/themes';

interface Props {
  text: string;
  bgcolor?: string;
  textcolor?: string;
  wrap?: boolean;
}

const button = ({
  text,
  bgcolor = '#2d2d2d',
  textcolor = 'white',
  wrap = false,
}: Props) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          ...styles.btn,
          backgroundColor: bgcolor,
          width: wrap ? 180 : 80,
        }}>
        <View>
          <Text style={{...styles.textbtns, color: textcolor}}>{text}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default button;
