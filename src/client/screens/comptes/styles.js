import { StyleSheet, Dimensions } from 'react-native';

const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  body: {
    backgroundColor: '#97CC53',
    opacity: 0.6,
  },
  titleContainer: {
    paddingTop: 20,
  },
  inputVew: {
    margin: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
  },
  labelInput: {
    paddingRight: 10,
    width: x / 4,
    color: 'red',
    fontWeight: 'bold',
    color: '#47525E',
    fontSize: 16,
    lineHeight: 4,
  },
  TextInput: {
    padding: 10,
    borderWidth: 1,
    width: x / 2,
    borderRadius: 15,
    fontWeight: 'bold',
  },
  modalInput: {
    flexDirection: 'row',
    padding: 10,
    width: x / 2,
  },
  mgnText: {
    margin: 10,
  },
  textEditColor: {
    color: '#2C7AC3',
  },
  messageShow: {
    textAlign: 'center',
    padding: 5,
    margin: 5,
    color: 'red',
  },
  errorShow: {
    textAlign: 'center',
    margin: 5,
    color: '#2C7AC3',
  },
  option: {
    paddingBottom: 5,
  },
  optionSeparatorStr: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signinContainer: {
    flex: 1,
    margin: 7,
    padding: 10,
  },
  textPage: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  btn: {
    paddingLeft: 30,
    paddingRight: 30,
  },
  contentContainerStyle: {
    // width: x,
    // height: y - 160,
    flex: 1,
    backgroundColor: 'red',
  },
  containerStyle: {
    padding: 10,
    height: 45,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: 'white',
  },
  modalRoleTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalRoleContaint: {
    margin: 5,
    padding: 10,
  },
  modalRoleText: {
    margin: 10,
    padding: 10,
  },
});

export default styles;
