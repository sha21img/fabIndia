import {StyleSheet} from 'react-native';
import {Colors} from '../../../assets/Colors';
export const Styles = StyleSheet.create({
  container: {backgroundColor: '#ffffff'},
  headbox: {paddingHorizontal: 15, marginTop: 20},
  headtxt: {
    fontFamily: 'PlayfairDisplay-Italic',
    color: '#4A4A4A',
    fontSize: 18,
    fontWeight: '500',
  },
  box: {
    paddingVertical: 20,
    flexDirection: 'row',
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  loginbox: {
    marginRight: 10,
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderRadius: 100,
    borderColor: Colors.primarycolor,
  },
  logintxt: {
    fontWeight: '400',
    fontSize: 16,
    color: Colors.primarycolor,
  },
  registerbox: {
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderRadius: 100,
    borderColor: Colors.primarycolor,
  },
  registertxt: {
    fontWeight: '400',
    fontSize: 16,
    color: Colors.primarycolor,
  },
  accordiancont: {
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  servicebox: {
    borderTopWidth: 1,
    borderColor: '#EDEDED',
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  servicetxt: {
    color: Colors.textcolor,
    fontWeight: '400',
    fontSize: 16,
  },
});
