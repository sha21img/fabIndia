import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Styles} from './styles';
import {image} from '../../../../assets/images';
import Fonts from '../../../../assets/fonts';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import InputText from '../../../Common/InputText';

import {Colors} from '../../../../assets/Colors';
import {useNavigation} from '@react-navigation/native';
export default function HomeHeader(props) {
  const [text, setText] = React.useState('');
  const [show, setShow] = React.useState(false);
  const navigation = useNavigation();
  return (
    <>
      <View style={Styles.container}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            // backgroundColor: 'red',
          }}>
          <SimpleLineIcons
            name="menu"
            color={Colors.primarycolor}
            size={20}
            onPress={() => navigation.openDrawer()}
          />
          <Image source={image.color_logo} style={Styles.imagestyle} />
        </View>

        <View style={Styles.detailContainer}>
          <TouchableOpacity style={Styles.locationContainer}>
            <EvilIcons
              name="search"
              color={Colors.primarycolor}
              size={30}
              onPress={() => {
                setShow(!show);
              }}
            />
          </TouchableOpacity>

          {/* <Ionicons name="location-sharp" color={'#792C27'} size={20} />
          <Text numberOfLines={1} style={Styles.locationText}>
            Powai, Mumbai
          </Text> */}
          <TouchableOpacity style={Styles.currencyContainer}>
            <EvilIcons name="heart" color={Colors.primarycolor} size={30} />

            {/* <Text style={Styles.currencyIcon}>₹</Text>
          <Text style={Styles.currencyText}>INR</Text> */}
          </TouchableOpacity>
          <TouchableOpacity style={Styles.cartContainer}>
            <EvilIcons name="cart" size={30} color={Colors.primarycolor} />
          </TouchableOpacity>
        </View>
      </View>
      {show ? (
        <>
          <View
            style={{
              position: 'absolute',
              top: 16,
              left: '10%',
              width: '72%',
            }}>
            <TextInput
              placeholder="Search here..."
              onChangeText={text => setText(text)}
              value={text}
              style={{
                backgroundColor: 'white',
                paddingVertical: 6,
                borderRadius: 50,
                paddingHorizontal: 25,
                elevation: 5,
              }}
            />
            <View
              style={
                {
                  position: 'absolute',
                  right: 5,
                  top: 5,
                }
              }>
              <FontAwesome
                name="close"
                color={Colors.primarycolor}
                size={25}
                onPress={() => {
                  setShow(!show);
                }}
              />
            </View>
          </View>
        </>
      ) : null}
    </>
  );
}
{
  /* <View style={Styles.container}>
<View style={Styles.logoBox}>
  <Image source={image.color_logo} style={Styles.logo} />
</View>
<View style={Styles.detailContainer}>
  <TouchableOpacity style={Styles.locationContainer}>
    <Ionicons name="location-sharp" color={'#792C27'} size={20} />
    <Text numberOfLines={1} style={Styles.locationText}>
      Powai, Mumbai
    </Text>
  </TouchableOpacity>
  <TouchableOpacity style={Styles.currencyContainer}>
    <Text style={Styles.currencyIcon}>₹</Text>
    <Text style={Styles.currencyText}>INR</Text>
  </TouchableOpacity>
  <TouchableOpacity style={Styles.cartContainer}>
    <AntDesign name="shoppingcart" size={24} color={'#792C27'} />
  </TouchableOpacity>
</View>
</View> */
}
