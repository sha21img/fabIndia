import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import {useNavigation} from '@react-navigation/native';
import {Styles} from './styles';

export default function Header({
  customViewStyle = {},
  headtext = '',
  count = '',
}) {
  const navigation = useNavigation();
  return (
    <View style={[Styles.container, customViewStyle]}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          style={{paddingHorizontal: 5}}
          onPress={() => navigation.goBack()}>
          <SimpleLineIcons
            name="arrow-left"
            color={Colors.primarycolor}
            size={20}
          />
        </TouchableOpacity>
        <View style={{paddingLeft: 10}}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: Fonts.PlayfairDisplay400,
              color: Colors.primarycolor,
            }}>
            {headtext}
          </Text>
          {!!count && (
            <Text
              style={{
                fontSize: 12,
                fontFamily: Fonts.PlayfairDisplay400,
                color: Colors.primarycolor,
              }}>
              {count} items
            </Text>
          )}
        </View>
      </View>
      <View style={Styles.detailContainer}>
        <TouchableOpacity style={Styles.locationContainer}>
          <Ionicons name="share-social" color={Colors.primarycolor} size={25} />

          {/* <Ionicons name="location-sharp" color={'#792C27'} size={20} />
          <Text numberOfLines={1} style={Styles.locationText}>
            Powai, Mumbai
          </Text> */}
        </TouchableOpacity>
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
  );
}
// import {View, Text, TouchableOpacity} from 'react-native';
// import React from 'react';
// import {Colors} from '../../../assets/Colors';
// import Fonts from '../../../assets/fonts';
// import {Styles} from './styles';
// // import color from '../../assets/color';

// export default function Header({
//   leftIcon = '',
//   rightIcon = '',
//   customStyle = {},
//   title = null,
//   txtcolor = 'white',
//   navigation,
// }) {
//   const defaultContainerStyle = {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 15,
//     alignItems: 'center',
//     elevation: 5,
//   };
//   return (
//     <View style={[defaultContainerStyle, customStyle]}>
//       <TouchableOpacity
//         onPress={() => {
//           navigation.goBack();
//         }}>
//         <Text style={Styles.icon}>{leftIcon}</Text>
//       </TouchableOpacity>
//       {title && <Text style={Styles.title}>{title}</Text>}

//       <TouchableOpacity
//         onPress={() => {
//           navigation.navigate('Wallet');
//         }}>
//         <Text style={Styles.icon}>{rightIcon}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }
