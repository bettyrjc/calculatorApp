import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
  },
  results: {
    color: 'white',
    fontSize: 60,
    textAlign: 'right',
  },
  operation: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  btn: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: '#2d2d2d',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10,
  },
  textbtns: {
    textAlign: 'center',
    padding: 10,
    color: 'white',
    fontSize: 30,
    fontWeight: '400',
  },
});
// Naranja #FF9427
//gris oscuro #2d2d2d
//backgroundColor: '#9b9b9b',
