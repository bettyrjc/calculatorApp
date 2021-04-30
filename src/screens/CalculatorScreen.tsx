import React from 'react';
import {View, Text} from 'react-native';
import ButtonCircle from '../components/ButtonCircle';
import {styles} from '../themes/themes';

const CalculatorScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.operation}>1,500.00</Text>
      <Text style={styles.results}>1,500.00</Text>

      <View style={styles.row}>
        <ButtonCircle textcolor="black" bgcolor="#9b9b9b" text="C" />
        <ButtonCircle textcolor="black" bgcolor="#9b9b9b" text="+/-" />
        <ButtonCircle textcolor="black" bgcolor="#9b9b9b" text="del" />
        <ButtonCircle bgcolor="#FF9427" text="/" />
      </View>

      <View style={styles.row}>
        <ButtonCircle text="7" />
        <ButtonCircle text="8" />
        <ButtonCircle text="9" />
        <ButtonCircle text="X" bgcolor="#FF9427" />
      </View>

      <View style={styles.row}>
        <ButtonCircle text="4" />
        <ButtonCircle text="5" />
        <ButtonCircle text="6" />
        <ButtonCircle text="-" bgcolor="#FF9427" />
      </View>

      <View style={styles.row}>
        <ButtonCircle text="1" />
        <ButtonCircle text="2" />
        <ButtonCircle text="3" />
        <ButtonCircle text="+" bgcolor="#FF9427" />
      </View>

      <View style={styles.row}>
        <ButtonCircle text="0" wrap />
        <ButtonCircle text="." />
        <ButtonCircle text="=" bgcolor="#FF9427" />
      </View>
    </View>
  );
};

export default CalculatorScreen;
