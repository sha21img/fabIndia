import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Size_Color({customStyle}) {
  const [size, setSize] = useState('XS');
  const [color, setColor] = useState('blue');
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
      <TouchableOpacity style={Styles.chartBox}>
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
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
});
