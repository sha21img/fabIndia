import {
  View,
  Text,
  LayoutAnimation,
  Animated,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fonts from '../../../assets/fonts';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../../assets/Colors';
import {image} from '../../../assets/images';
import AccordianSubMenu from './AccordianSubMenu';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
import {BaseURL2} from '../../Common/Helper';
const NewAccordian = props => {
  const {newData} = props;
  console.log('this is new accordian data-=-=', props);
  const navigation = useNavigation();
  const navigations = name => {
    console.log('adsfasdfasdf start', name);
    let splitURL = name.split('/');
    splitURL = splitURL[splitURL.length - 1];
    console.log('adsfasdfasdf', splitURL);
    if (name == 'Collections') {
      navigation.navigate('Collections');
    } else {
      navigation.navigate('LandingPageSaris_Blouses', {
        title: splitURL,
        code: splitURL,
        status: false,
      });
    }
  };
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

  const goToProductList = async () => {
    console.log('23]4[]2349234092340]2394]0923]04923]923]][4[[]][[]][');
    const fields =
      'products(code,name,summary,optionId,configurable,configuratorType,multidimensional,price(FULL),images(DEFAULT),stock(FULL),averageRating,variantOptions(FULL),variantMatrix,sizeChart,url,totalDiscount(formattedValue,DEFAULT),priceAfterDiscount(formattedValue,DEFAULT),variantProductOptions(FULL),newArrival,sale,tagName),facets,breadcrumbs,breadcrumbCategories(code,name,url),pagination(DEFAULT),sorts(DEFAULT),freeTextSearch,currentQuery';

    // https://apisap.fabindia.com/occ/v2/fabindiab2c/products/search?fields=products
    // (code%2Cname%2Csummary%2CoptionId%2Cconfigurable%2CconfiguratorType%2Cmultidimensional%2Cprice(FULL)%2Cimages(DEFAULT)%2Cstock(FULL)%2CaverageRating%2CvariantOptions(FULL)%2CvariantMatrix%2CsizeChart%2Curl%2CtotalDiscount(formattedValue%2CDEFAULT)%2CpriceAfterDiscount(formattedValue%2CDEFAULT)%2CvariantProductOptions(FULL)%2CnewArrival%2Csale%2CtagName)%2Cfacets%2Cbreadcrumbs%2CbreadcrumbCategories(code%2Cname%2Curl)%2Cpagination(DEFAULT)%2Csorts(DEFAULT)%2CfreeTextSearch%2CcurrentQuery
    // &query=%3Arelevance%3AallCategories%3Ainfant-boys-kurtas&pageSize=9&lang=en&curr=INR

    response = await axios.get(
      `${BaseURL2}/products/search?fields=${fields}
        &query=:relevance:allCategories:infant-boys-kurtas
        &pageSize=9&lang=en&curr=INR`,
    );
    console.log(
      'response sad[]][][fds][dsf[]df][sdffsd][dfs[]dfs][fd][-=',
      response.data,
    );
  };

  return (
    <View key={Math.random() * 1099900} style={{overflow: 'hidden'}}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          newData.children.length > 0
            ? toggleListItem()
            : navigations(newData.landingPage);
        }}
        style={{
          padding: 20,
          flexDirection: 'row',
          borderBottomColor: '#ebebeb',
          borderBottomWidth: 1,
          alignItems: 'center',
          justifyContent: 'space-between',
          marginLeft: 30,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* <Ionicons
            name="ios-grid-outline"
            size={20}
            color={Colors.primarycolor}
          /> */}
          <Text style={{color: Colors.textcolor}}>{newData.title}</Text>
        </View>
        {newData.children.length > 0 ? (
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
      {newData.children.length > 0 && showContent
        ? newData.children.map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  item.children.length > 0
                    ? toggleListItem()
                    : navigations(item.landingPage);
                }}
                style={{
                  padding: 20,
                  flexDirection: 'row',
                  borderBottomColor: '#ebebeb',
                  borderBottomWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginLeft: 50,
                }}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{color: Colors.textcolor}}>{item.title}</Text>
                </View>
                {item.children.length > 0 ? (
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
            );
          })
        : null}
    </View>
  );
};

export default NewAccordian;
