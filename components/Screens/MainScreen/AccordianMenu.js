import {
  View,
  Text,
  LayoutAnimation,
  Animated,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fonts from '../../../assets/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Colors} from '../../../assets/Colors';
import {image} from '../../../assets/images';
import AccordianSubMenu from './AccordianSubMenu';
import {useNavigation} from '@react-navigation/native';
import {style} from 'deprecated-react-native-prop-types/DeprecatedImagePropType';
const width = Dimensions.get('window').width;

export default function AccordianMenu(props) {
  const {data} = props;
  const navigation = useNavigation();
  console.log('this is a data first accourdion', data);
  const toggleAnimation = {
    duration: 300,
    update: {
      duration: 300,
      property: LayoutAnimation.Properties.opacity,
      type: LayoutAnimation.Types.easeInEaseOut,
    },
    delete: {
      duration: 200,
      property: LayoutAnimation.Properties.opacity,
      type: LayoutAnimation.Types.easeInEaseOut,
    },
  };
  const [showContent, setShowContent] = useState(false);
  const animationController = React.useRef(new Animated.Value(0)).current;
  const toggleListItem = () => {
    const config = {
      duration: 300,
      toValue: showContent ? 0 : 1,
      useNativeDriver: true,
    };
    Animated.timing(animationController, config).start();
    LayoutAnimation.configureNext(toggleAnimation);
    setShowContent(!showContent);
  };
  const arrowTransform = animationController.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });
  const checkNavigation = async () => {
    if (data.title == 'Gift Cards') {
      const get = await AsyncStorage.getItem('generatToken');
      const getToken = JSON.parse(get);
      if (getToken.isCheck == true) {
        navigation.navigate('MyAccount', {screen: 'GiftCard'});
      } else {
        navigation.navigate('MyAccount', {screen: 'Login_Register'});
      }
    } else if (data.title == 'FAQs') {
      navigation.navigate('MyAccount', {screen: 'FAQ'});
    } else if (data.title == 'Contact Us') {
      navigation.navigate('MyAccount', {screen: 'ContactUs'});
    }
  };

  //   navigation.dispatch(
  //     CommonActions.reset({
  //       index: 0,
  //       routes: [{ name: 'GiftCard' }]
  //     })
  //   );
  const checkIcon = item => {
    console.log('this sis writch item', item);
    switch (item) {
      case 'Shop By Collection':
        return (
          <Ionicons
            name="ios-grid-outline"
            size={20}
            color={Colors.primarycolor}
          />
        );
      case 'Shop By Brand':
        return (
          <MaterialIcons
            name="branding-watermark"
            size={20}
            color={Colors.primarycolor}
          />
        );
      case 'Sale':
        return (
          <Fontisto
            name="shopping-sale"
            size={20}
            color={Colors.primarycolor}
          />
        );
      case 'Services':
        return (
          <MaterialIcons
            name="design-services"
            size={20}
            color={Colors.primarycolor}
          />
        );
      case 'Gift Cards':
        return (
          <Image
            source={image.GiftCard}
            style={{width: 18, height: 18}}
            resizeMode="contain"
          />
        );
      default:
        return;
    }
  };
  return (
    <>
      <View key={Math.random() * 1099900} style={{overflow: 'hidden'}}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            data.children.length > 0 ? toggleListItem() : checkNavigation();
          }}
          style={
            data.title == 'FAQs' || data.title == 'Contact Us'
              ? {
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  marginLeft: 20,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }
              : {
                  padding: 20,
                  flexDirection: 'row',
                  borderBottomColor: '#ebebeb',
                  borderBottomWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }
          }>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            {data.title == 'FAQs' || data.title == 'Contact Us'
              ? null
              : checkIcon(data.title)}
            <Text style={{color: Colors.textcolor, marginLeft: 10}}>
              {data.title}
            </Text>
          </View>
          {data.children.length > 0 ? (
            <Animated.View
              style={{
                transform: [{rotateZ: arrowTransform}],
              }}>
              <MaterialIcons
                name="keyboard-arrow-down"
                color={Colors.primarycolor}
                size={20}
              />
            </Animated.View>
          ) : null}
        </TouchableOpacity>
        {data.children.length > 0 && showContent
          ? data.children.map((item, index) => {
              return <AccordianSubMenu newData={item} {...props} />;
            })
          : null}
      </View>
    </>
  );
}
