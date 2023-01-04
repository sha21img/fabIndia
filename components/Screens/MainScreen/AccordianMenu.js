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
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    if (data.title == 'Gift Cards') {
      if (getToken.isCheck == true) {
        navigation.navigate('MyAccount', {screen: 'GiftCard', from: 'Menu'});
      } else {
        navigation.navigate('MyAccount', {screen: 'Login_Register'});
      }
    } else if (data.title == 'FAQs') {
      navigation.navigate('MyAccount', {screen: 'FAQ'});
    } else if (data.title == 'Contact Us') {
      navigation.navigate('MyAccount', {screen: 'ContactUs'});
    } else if (data.title == 'Shop By Categories') {
      navigation.navigate('CategorySection', data);
    } else if (data.title == 'FabFamily') {
      navigation.navigate('MyAccount', {screen: 'FabFamily'});
    } else if (data.title == 'Orders') {
      if (getToken.isCheck) {
        navigation.navigate('MyOrder');
      } else {
        navigation.navigate('MyAccount', {
          screen: 'Login_Register',
        });
      }
    }
  };

  const checkIcon = item => {
    // console.log('this sis writch item', item);
    switch (item) {
      case 'Orders':
        return (
          <Image
            source={image.document}
            style={{width: 20, height: 20, resizeMode: 'contain'}}
          />
        );
      case 'FabFamily':
        return (
          <Image
            source={image.ribbon}
            style={{width: 20, height: 20, resizeMode: 'contain'}}
          />
        );
      case 'Shop By Categories':
        return (
          <Ionicons
            name="ios-grid-outline"
            size={20}
            color={Colors.primarycolor}
          />
        );
      case 'Shop By Collection':
        return (
          // <></>
          <MaterialIcons
            name="collections-bookmark"
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
                  paddingVertical: 12,
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
            <Text
              style={
                data.title == 'FAQs' || data.title == 'Contact Us'
                  ? {fontSize: 13, color: Colors.textcolor, marginLeft: 10}
                  : {fontSize: 16, color: Colors.textcolor, marginLeft: 10}
              }>
              {data.title}
            </Text>
          </View>
          {data?.children?.length > 0 ? (
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
        {data?.children?.length > 0 && showContent
          ? data.children.map((item, index) => {
              return <AccordianSubMenu newData={item} {...props} />;
            })
          : null}
      </View>
    </>
  );
}
