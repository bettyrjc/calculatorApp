import React from 'react';
import {View, Text} from 'react-native';
import ButtonCircle from '../components/ButtonCircle';
import {styles} from '../themes/themes';
import {useCalculator} from '../hooks/useCalculator';

const CalculatorScreen = () => {
  const {
    num,
    numAfter,
    clear,
    doNumber,
    positiveNegative,
    deleteLastNumber,
    btnDivide,
    btnFor,
    btnRest,
    btnSum,
    calculate,
  } = useCalculator();
  return (
    <View style={styles.container}>
      <Text style={styles.operation}>{numAfter === '0' ? '' : numAfter}</Text>
      <Text style={styles.results} numberOfLines={1} adjustsFontSizeToFit>
        {num}
      </Text>

      <View style={styles.row}>
        <ButtonCircle
          textcolor="black"
          bgcolor="#9b9b9b"
          text="C"
          action={clear}
        />
        <ButtonCircle
          textcolor="black"
          bgcolor="#9b9b9b"
          text="+/-"
          action={positiveNegative}
        />
        <ButtonCircle
          textcolor="black"
          bgcolor="#9b9b9b"
          text="del"
          action={deleteLastNumber}
        />
        <ButtonCircle bgcolor="#FF9427" text="/" action={btnDivide} />
      </View>

      <View style={styles.row}>
        <ButtonCircle text="7" action={doNumber} />
        <ButtonCircle text="8" action={doNumber} />
        <ButtonCircle text="9" action={doNumber} />
        <ButtonCircle text="X" bgcolor="#FF9427" action={btnFor} />
      </View>

      <View style={styles.row}>
        <ButtonCircle text="4" action={doNumber} />
        <ButtonCircle text="5" action={doNumber} />
        <ButtonCircle text="6" action={doNumber} />
        <ButtonCircle text="-" bgcolor="#FF9427" action={btnRest} />
      </View>

      <View style={styles.row}>
        <ButtonCircle text="1" action={doNumber} />
        <ButtonCircle text="2" action={doNumber} />
        <ButtonCircle text="3" action={doNumber} />
        <ButtonCircle text="+" bgcolor="#FF9427" action={btnSum} />
      </View>

      <View style={styles.row}>
        <ButtonCircle text="0" wrap action={doNumber} />
        <ButtonCircle text="." action={doNumber} />
        <ButtonCircle text="=" bgcolor="#FF9427" action={calculate} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
