import React, {useState} from 'react';
import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {image} from '../../../../assets/images';
import CommonButton from '../../../Common/CommonButton';
import {Colors} from '../../../../assets/Colors';
import Fonts from '../../../../assets/fonts';
import StepIndicator from 'react-native-step-indicator';
import DropDownPicker from 'react-native-dropdown-picker';
import Styles from './styles';
import CartCard from '../../../Common/CartCard';

const EmptyCart = props => {
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
    <SafeAreaView style={Styles.container}>
      <View style={Styles.bodyContainer}>
        <ScrollView
          contentContainerStyle={Styles.mainView}
          showsVerticalScrollIndicator={false}>
          {false ? (
            <View style={Styles.secondDiv}>
              <View style={Styles.ImageView}>
                <Image
                  source={image.transCart}
                  style={Styles.imagedimension}
                  resizeMode="cover"
                />
                <View style={Styles.textView}>
                  <Text style={Styles.carttxt}>Your cart is empty !</Text>
                  <Text style={{textAlign: 'center', fontSize: 16}}>
                    Looks like you haven't added anything to your cart yet
                  </Text>
                </View>
              </View>
            </View>
          ) : (
            <CartCard/>
            
          )}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default EmptyCart;
