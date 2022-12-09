import React, {useEffect, useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
const filterOption = [
  {option: 'Price'},
  {option: 'Color'},
  {option: 'Size'},
  {option: 'Fabric'},
  {option: 'Fit'},
  {option: 'Sleeves'},
  {option: 'Neck'},
];
const priceOption = [
  {op: '₹0 - ₹1,999'},
  {op: '₹2,000 - ₹3,999'},
  {op: '₹4,000 - ₹6,999'},
];
const colorOption = [{op: 'Red'}, {op: 'Yellow'}, {op: 'Green'}];
const sizeOption = [{op: 'S'}, {op: 'M'}, {op: 'L'}, {op: 'XL'}, {op: 'XXL'}];
const fabricOption = [{op: 'Cotton'}, {op: 'Pollster'}, {op: 'Leather'}];
const fitOption = [{op: 'Slim Fit'}, {op: 'Regular Fit'}, {op: 'Other'}];
const sleevesOption = [{op: 'Short'}, {op: 'Full'}, {op: 'Nea'}];
const neckOption = [{op: 'V '}, {op: 'Round'}];
const Filter = () => {
  const [isActive, setIsActive] = useState('Price');
  const [isActiveCheckBox, setIsActiveCheckBox] = useState([]);
  const [activeOption, setActiveOption] = useState(colorOption);

  const handleActiveOption = op => {
    setIsActive(op);
    if (op === 'Price') {
      setActiveOption(priceOption);
    } else if (op === 'Color') {
      setActiveOption(colorOption);
    } else if (op === 'Size') {
      setActiveOption(sizeOption);
    } else if (op === 'Fabric') {
      setActiveOption(fabricOption);
    } else if (op === 'Fit') {
      setActiveOption(fitOption);
    } else if (op === 'Sleeves') {
      setActiveOption(sleevesOption);
    } else if (op === 'Neck') {
      setActiveOption(neckOption);
    } else {
      setActiveOption(priceOption);
    }
  };
  const onPressCheckBox = op => {
    if (isActiveCheckBox.includes(op)) {
      let a = isActiveCheckBox.filter(el => el !== op);
      setIsActiveCheckBox(a);
    } else {
      setIsActiveCheckBox([...isActiveCheckBox, op]);
    }
    console.log('isActiveCheckBox...', isActiveCheckBox);
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'white',
      }}>
      <ScrollView contentContainerStyle={styles.box}>
        {filterOption.map((el, i) => {
          return (
            <TouchableOpacity
              style={
                el.option.includes(isActive)
                  ? styles.activeOption
                  : styles.filterOption
              }
              key={i}
              onPress={() => handleActiveOption(el.option)}>
              {el.option.includes(isActive) ? (
                <Text style={styles.activeText}>{el.option}</Text>
              ) : (
                <Text style={styles.inActiveText}>{el.option}</Text>
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View style={styles.box1}>
        {activeOption !== [] &&
          activeOption.map((el, i) => {
            return (
              <View key={i} style={styles.checkboxContainer}>
                <Text
                  style={
                    isActiveCheckBox.includes(el.op)
                      ? styles.selectedCheckboxIcon
                      : styles.checkboxIcon
                  }
                  onPress={() => onPressCheckBox(el.op)}
                />
                <Text style={styles.checkboxText}>{el.op}</Text>
              </View>
            );
          })}
      </View>

      <View style={styles.bottomContent}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancleTxt}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyTxt}>Apply</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#FAFAFA',
    flexGrow: 1,
  },
  box1: {
    backgroundColor: '#ffffff',
    width: '70%',
  },
  filterOption: {
    padding: 20,
    borderColor: '#e5e5e5',
    borderBottomWidth: 0.4,
  },
  activeOption: {
    padding: 20,
    borderLeftColor: '#973f40',
    borderLeftWidth: 5,
    borderBottomWidth: 0.4,
    borderBottomColor: '#e5e5e5',
  },
  bottomContent: {
    flexDirection: 'row',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    elevation: 10,
    paddingVertical: 15,
    justifyContent: 'space-evenly',
  },
  activeText: {
    color: Colors.primarycolor,
    fontFamily: Fonts.Assistant700,
    fontSize: 16,
  },
  inActiveText: {
    color: Colors.textcolor,
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
  },
  cancelButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.primarycolor,
    borderRadius: 50,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 50,
    width: '45%',
    alignItems: 'center',
    backgroundColor: 'grey',
    justifyContent: 'center',
  },
  checkboxContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 0.4,
    borderBottomColor: '#e5e5e5',
  },
  cancleTxt: {
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
    color: Colors.primarycolor,
  },
  applyTxt: {
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
    color: 'white',
  },
  checkboxIcon: {
    width: 13,
    height: 13,
    borderWidth: 0.6,
    borderRadius: 2,
  },
  selectedCheckboxIcon: {
    width: 13,
    height: 13,
    borderWidth: 0.6,
    backgroundColor: Colors.primarycolor,
    borderRadius: 2,
  },
  checkboxText: {
    marginLeft: 10,
    color: Colors.textcolor,
    fontFamily: Fonts.RupeeForadian,
    fontSize: 12,
  },
});
export default Filter;

// import {View, Text, StyleSheet} from 'react-native';
// import React from 'react';

// export default function Filter() {
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <View style={styles.hexagon}>
//         <View style={styles.hexagonInner} />
//         <View style={styles.hexagonBefore} />
//         <View style={styles.hexagonAfter} />
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   hexagon: {
//     width: 100,
//     height: 55,
//   },
//   hexagonInner: {
//     width: 100,
//     height: 55,
//     backgroundColor: 'green',
//   },
//   hexagonAfter: {
//     position: 'absolute',
//     bottom: -25,
//     left: 0,
//     width: 0,
//     height: 0,
//     borderStyle: 'solid',
//     borderLeftWidth: 50,
//     borderLeftColor: 'transparent',
//     borderRightWidth: 50,
//     borderRightColor: 'transparent',
//     borderTopWidth: 25,
//     borderTopColor: 'yellow',
//   },
//   hexagonBefore: {
//     position: 'absolute',
//     top: -25,
//     left: 0,
//     width: 0,
//     height: 0,
//     borderStyle: 'solid',
//     borderLeftWidth: 50,
//     borderLeftColor: 'transparent',
//     borderRightWidth: 50,
//     borderRightColor: 'transparent',
//     borderBottomWidth: 25,
//     borderBottomColor: 'pink',
//   },
// });
