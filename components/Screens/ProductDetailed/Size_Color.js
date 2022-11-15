import {
  View,
  Text,
  Modal,
  Alert,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

export default function Size_Color({customStyle}) {
  const [size, setSize] = useState('XS');
  const [color, setColor] = useState('blue');
  const [modalVisible, setModalVisible] = useState(false);

  openSize = () => setModalVisible(true);
  return (
    <View style={[Styles.container, customStyle]}>
      <Text style={Styles.sizeTxt}>Size</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={Styles.btnBox}>
        {['XS', 'S', 'M', 'L', 'XL'].map((item, index) => {
          return (
            <>
              <TouchableOpacity
                onPress={() => setSize(item)}
                style={item == size ? Styles.activeBtn : Styles.inActiveBtn}>
                <Text
                  style={
                    item == size ? Styles.activeBtnText : Styles.inActiveBtnText
                  }>
                  {item}
                </Text>
              </TouchableOpacity>
            </>
          );
        })}
      </ScrollView>
      <Text style={Styles.leftTxt}>ONLY 3 LEFT!</Text>
      <TouchableOpacity onPress={() => openSize()} style={Styles.chartBox}>
        <FontAwesome5 name="ruler" color={'#903233'} size={15} />
        <Text style={Styles.chartText}>View size chart</Text>
      </TouchableOpacity>
      <View style={Styles.ColorBox}>
        <Text style={Styles.ColorTxt}>Colour</Text>
        <View style={Styles.colorContainer}>
          {['green', 'blue', 'pink'].map(item => {
            return (
              <TouchableOpacity
                onPress={() => setColor(item)}
                style={
                  item == color
                    ? Styles.colorOutlineActive
                    : Styles.colorOutlineInActive
                }>
                <View style={[Styles.chooseColor, {backgroundColor: item}]} />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={Styles.mainContainer}>
          <View style={Styles.centeredView}>
            <View style={Styles.headingBox}>
              <Text style={Styles.heading}>Size chart</Text>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Entypo
                  name="circle-with-cross"
                  color={Colors.primarycolor}
                  size={24}
                />
              </TouchableOpacity>
            </View>
            <View style={Styles.chipContainer}>
              {['Inches', 'Cms'].map(item => {
                return (
                  <>
                    <TouchableOpacity style={Styles.chipActive}>
                      <Text style={Styles.chipTextActive}>{item}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.chipInActive}>
                      <Text style={Styles.chipTextActive}>{item}</Text>
                    </TouchableOpacity>
                  </>
                );
              })}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  mainContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  centeredView: {
    marginTop: 'auto',
    width: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
  },
  headingBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: Fonts.Assistant600,
    color: Colors.textcolor,
    width: '85%',
  },
  btnBox: {
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  sizeTxt: {
    paddingHorizontal: 15,
    fontFamily: Fonts.Assistant400,
    fontSize: 14,
    lineHeight: 16,
    color: ' #717171',
  },
  leftTxt: {
    paddingHorizontal: 15,
    fontFamily: Fonts.Assistant700,
    fontSize: 12,
    lineHeight: 16,
    color: ' #717171',
  },
  activeBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 70,
    backgroundColor: Colors.textcolor,
    padding: 7,
    marginRight: 10,
    borderRadius: 50,
  },
  activeBtnText: {
    color: 'white',
  },
  inActiveBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 70,
    backgroundColor: '#E0D9D6',
    marginRight: 10,
    padding: 7,
    borderRadius: 50,
  },
  inActiveBtnText: {
    color: Colors.textcolor,
  },
  chartBox: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  chartText: {
    color: '#903233',
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
    lineHeight: 16,
    paddingHorizontal: 7,
  },
  ColorTxt: {
    color: '#717171',
    fontFamily: Fonts.Assistant400,
    fontSize: 14,
    lineHeight: 16,
    marginTop: 5,
  },
  ColorBox: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  colorContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  colorOutlineActive: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: Colors.textcolor,
    marginRight: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorOutlineInActive: {
    borderWidth: 1.7,
    borderRadius: 50,
    borderColor: '#C4C4C4',
    justifyContent: 'center',
    marginRight: 7,
    alignItems: 'center',
  },
  chooseColor: {
    width: 20,
    height: 20,
    borderRadius: 50,
    margin: 2,
  },
  chipContainer: {
    paddingVertical: 5,
    flexDirection: 'row',
  },
  chipActive: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: Colors.textcolor,
    borderRadius: 50,
    marginRight: 10,
  },
  chipTextActive: {
    fontFamily: Fonts.Assistant700,
    fontSize: 16,
    color: 'white',
  },
  chipInActive: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: '#E0D9D6',
    borderRadius: 50,
    marginRight: 10,
  },
  
  chipTextInActive: {
    fontFamily: Fonts.Assistant700,
    fontSize: 16,
    color: Colors.textcolor,
  },
});
