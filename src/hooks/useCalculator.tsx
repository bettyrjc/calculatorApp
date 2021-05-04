import {useState, useRef} from 'react';

enum Operator {
  sum,
  rest,
  for,
  divide,
}

export const useCalculator = () => {
  const [num, setNumb] = useState('100');
  const [numAfter, setNumbAfter] = useState('0');
  const lastOperation = useRef<Operator>();

  const clear = () => {
    setNumb('0');
    setNumbAfter('0');
  };
  const doNumber = (nTxt: string) => {
    //verificar si ya existe un decimal
    if (num.includes('.') && nTxt === '.') return;

    if (num.startsWith('0') || num.startsWith('-0')) {
      //punto decimal
      if (nTxt === '.') {
        setNumb(num + nTxt);
        //evaluar si es ortro cero y hay un punto
      } else if (nTxt === '0' && num.includes('.')) {
        setNumb(num + nTxt);
      } else if (nTxt !== '0' && !num.includes('.')) {
        setNumb(nTxt);
      } else if (nTxt === '0' && !num.includes('.')) {
        setNumb(num);
      } else {
        setNumb(num + nTxt);
      }
    } else {
      setNumb(num + nTxt);
    }
  };

  const positiveNegative = () => {
    if (num.includes('-')) {
      setNumb(num.replace('-', ''));
    } else {
      setNumb('-' + num);
    }
  };

  const deleteLastNumber = () => {
    let negative = '';
    let tempNumber = num;
    if (num.includes('-')) {
      negative = '-';
      tempNumber = num.substr(1);
    }
    if (tempNumber.length > 1) {
      setNumb(negative + tempNumber.slice(0, -1));
    } else {
      setNumb('0');
    }
  };

  const changeNum = () => {
    if (num.endsWith('.')) {
      setNumbAfter(num.slice(0, -1));
    } else {
      setNumbAfter(num);
    }
    setNumb('0');
  };

  const btnDivide = () => {
    changeNum();
    lastOperation.current = Operator.divide;
  };

  const btnFor = () => {
    changeNum();
    lastOperation.current = Operator.for;
  };
  const btnRest = () => {
    changeNum();
    lastOperation.current = Operator.rest;
  };
  const btnSum = () => {
    changeNum();
    lastOperation.current = Operator.sum;
  };

  const calculate = () => {
    const num1 = Number(num);
    const num2 = Number(numAfter);

    switch (lastOperation.current) {
      case Operator.sum:
        setNumb(`${num1 + num2}`);
        break;
      case Operator.rest:
        setNumb(`${num2 - num1}`);
        break;
      case Operator.for:
        setNumb(`${num1 * num2}`);
        break;
      case Operator.divide:
        setNumb(`${num2 / num1}`);
        break;
    }
    setNumbAfter('0');
  };

  return {
    num,
    numAfter,
    clear,
    doNumber,
    positiveNegative,
    deleteLastNumber,
    changeNum,
    btnDivide,
    btnFor,
    btnRest,
    btnSum,
    calculate,
  };
};
