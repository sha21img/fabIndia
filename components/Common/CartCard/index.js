import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Fonts from '../../../assets/fonts';
import {Colors} from '../../../assets/Colors';

import {image} from '../../../assets/images';
import StepIndicator from 'react-native-step-indicator';
import DropDownPicker from 'react-native-dropdown-picker';
import Styles from './styles';

export default function CartCard() {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  const labels = ['Cart', 'Address', 'Payment'];
  const customStyles = {
    stepIndicatorSize: 30,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: '#96AD66',
    stepStrokeWidth: 6,
    stepStrokeFinishedColor: '#96AD66',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#96AD66',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#96AD66',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#903233',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#96AD66',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#979797',
  };
  const onGenderOpen = React.useCallback(() => {
    setCompanyOpen(false);
  }, []);
  return (
    <View>
      <StepIndicator
        customStyles={customStyles}
        currentPosition={currentPosition}
        labels={labels}
        stepCount={3}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
        }}>
        <Text>6 items</Text>
        <Text style={{color: '#4A4A4A', fontFamily: Fonts.Assistant400}}>
          Total: ₹1,19,800
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: '#903233'}}>View Order value details</Text>
        <Text style={{color: '#96AD66'}}> You save ₹19,000! </Text>
      </View>
      {[0, 0, 0, 0, 0].map(() => {
        return (
          <>
            <View style={{marginTop: 30, flexDirection: 'row'}}>
              <Image
                source={image.womenCard1}
                style={Styles.imagedimension}
                resizeMode="cover"
              />
              <View style={{paddingHorizontal: 15}}>
                <Text>jia Cotton Towel Set of 2</Text>
                <View style={{flexDirection: 'row', paddingTop: 30}}>
                  <Text>Color - </Text>
                  <View
                    style={{
                      width: 18,
                      height: 18,
                      borderRadius: 20 / 2,
                      backgroundColor: 'lightblue',
                      borderColor: 'black',
                      borderWidth: 3,
                    }}></View>
                </View>
                <View
                  style={{
                    width: '50%',
                    flexDirection: 'row',
                    paddingTop: 20,
                  }}>
                  <DropDownPicker
                    containerStyle={{}}
                    style={{
                      borderColor: 'transparent',
                      backgroundColor: '#EDEDED',
                      width: '80%',
                      borderWidth: null,
                    }}
                    dropDownContainerStyle={{
                      borderColor: 'transparent',
                      width: '70%',
                      backgroundColor: 'white',
                      // margin: 15,
                    }}
                    open={open}
                    placeholder="Size Bath towel"
                    value={value}
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                  />
                  <DropDownPicker
                    containerStyle={{
                      right: 26,
                    }}
                    style={{
                      borderColor: 'transparent',
                      backgroundColor: '#EDEDED',

                      width: '50%',
                      borderWidth: null,
                    }}
                    dropDownContainerStyle={{
                      borderColor: 'transparent',
                      width: '70%',
                      backgroundColor: 'white',
                    }}
                    open={open}
                    value={value}
                    placeholder="QTY "
                    items={items}
                    setOpen={setOpen}
                    setValue={setValue}
                    setItems={setItems}
                  />
                </View>
                <View style={{flexDirection: 'row', paddingTop: 20}}>
                  <Text style={{fontSize: 14, color: '#4A4A4A'}}>₹ 2500</Text>
                  <Text
                    style={{
                      paddingLeft: 10,
                      textDecorationLine: 'line-through',
                    }}>
                    ₹ 3,000
                  </Text>
                </View>
                <Text style={{color: '#96AD66', paddingTop: 10}}>
                  You save ₹500!
                </Text>
                <Text style={{color: '#903233', paddingTop: 10}}>
                  Monogrammed
                </Text>
              </View>
            </View>
            <View
              style={{
                paddingHorizontal: 30,
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 20,
              }}>
              <TouchableOpacity>
                <Text style={{color: 'black', fontSize: 14}}>Remove</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={{color: 'black'}}>Add to wishlist</Text>
              </TouchableOpacity>
            </View>
          </>
        );
      })}
    </View>
  );
}
