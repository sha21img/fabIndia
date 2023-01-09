import {Platform, StyleSheet} from 'react-native';
import {Colors} from '../../../../assets/Colors';
import Fonts from '../../../../assets/fonts';
export default Styles = StyleSheet.create({
  mainView: {},
  noticeBox: {
    backgroundColor: 'rgba(113,23,24,0.8)',
    padding: 15,
    minHeight: 66,
  },
  flower: {
    position: 'absolute',
    right: 0,
  },
  flower1: {
    position: 'absolute',
    left: 0,
  },
  noticeText: {
    fontFamily: Fonts.Assistant400,
    fontSize: 14,
    color: 'white',
  },
  cartDetailContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F8F6F5',
    paddingHorizontal: 15,
    paddingVertical: 7,
  },
  cartDetail: {
    width: '50%',
  },
  cartDetail1: {
    width: '50%',
    alignItems: 'flex-end',
  },
  itemtext: {
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
    color: Colors.textcolor,
    paddingVertical: 2,
  },
  itemTextDesc: {
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
    paddingVertical: 2,
    color: '#903233',
  },
  totalAmount: {
    fontFamily: Fonts.Assistant700,
    paddingVertical: 2,
    paddingHorizontal: 5,

    fontSize: 16,
    color: Colors.textcolor,
  },
  saveAmount: {
    paddingVertical: 2,
    fontFamily: Fonts.Assistant700,
    fontSize: 14,
    color: '#96AD66',
  },
  modalcontainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalbox: {
    backgroundColor: 'white',
    elevation: 5,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginTop: 'auto',
    width: '100%',
  },
  headbox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 10,
  },
  headtxt: {
    fontSize: 18,
    fontFamily: Fonts.Assistant600,
    color: Colors.textcolor,
  },
  head1txt: {
    fontSize: 14,
    fontFamily: Fonts.Assistant400,
    color: Colors.textcolor,
  },
  monogramList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  divider: {
    borderTopColor: '#D8D8D8',
    borderTopWidth: 1,
    marginVertical: 5,
  },
  sizeText: {
    fontSize: 16,
    fontFamily: Fonts.Assistant600,
    color: Colors.textcolor,
  },
  sizeScroll: {
    paddingVertical: 10,
  },
  chipActive: {
    backgroundColor: '#4A4A4A',
    paddingVertical: 7,
    paddingHorizontal: 10,
    minWidth: 75,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
  },
  chipTextActive: {
    color: 'white',
    fontSize: 16,
    fontFamily: Fonts.Assistant700,
  },
  chipInActive: {
    backgroundColor: '#E0D9D6',
    paddingVertical: 7,
    paddingHorizontal: 10,
    minWidth: 75,
    borderRadius: 15,
    marginRight: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chipTextInActive: {
    color: Colors.textcolor,
    fontSize: 16,
    fontFamily: Fonts.Assistant700,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  decreaseText: {
    color: Colors.textcolor,
    fontSize: 16,
    fontFamily: Fonts.Assistant600,
  },
  sign: {
    color: Colors.textcolor,
    fontSize: 26,
    fontFamily: Fonts.Assistant600,
  },
  signBox: {
    padding: 5,
  },
  quantityBox: {
    borderRadius: 3,
    elevation: 2,
    backgroundColor: 'white',
    padding: 5,
    minWidth: 30,
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityText: {
    color: Colors.textcolor,
    fontSize: 18,
    fontFamily: Fonts.Assistant600,
  },
  modalbox1: {
    backgroundColor: 'white',
    elevation: 5,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginTop: 'auto',
    width: '100%',
    flexDirection: 'row',
  },
  imageDim: {
    width: 114,
    height: 141,
  },
  modalDetails: {
    width: '70%',
    paddingLeft: 10,
  },
  headbox1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headText: {
    color: Colors.textcolor,
    fontSize: 16,
    fontFamily: Fonts.Assistant400,
    paddingRight: 15,
    paddingVertical: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
  },
  headText1: {
    color: Colors.textcolor,
    fontSize: 16,
    fontFamily: Fonts.Assistant400,
    paddingRight: 15,
    paddingVertical: 2,
  },
  headText2: {
    color: Colors.textcolor,
    fontSize: 16,
    fontFamily: Fonts.Assistant400,
    paddingRight: 15,
    paddingVertical: 7,
  },
});
