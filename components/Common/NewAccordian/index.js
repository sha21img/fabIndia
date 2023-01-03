import {
  View,
  Text,
  LayoutAnimation,
  Animated,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {Styles} from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fonts from '../../../assets/fonts';
import {Colors} from '../../../assets/Colors';
import {image} from '../../../assets/images';
import {useNavigation} from '@react-navigation/native';
import {BaseURL2} from '../Helper';
const width = Dimensions.get('window').width;
const NewAccordian = props => {
  const {newData} = props;
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
  const navigations = name => {
    console.log('adsfasdfasdf start', name);
    let splitURL = name.split('/');
    splitURL = splitURL[splitURL.length - 1];
    console.log('adsfasdfasdf', splitURL);
    navigation.navigate('LandingPageSaris_Blouses', {
      title: splitURL,
      code: splitURL,
      status: false,
    });
  };
  return (
    <View key={Math.random() * 1099900} style={Styles.accordbox}>
      <TouchableOpacity
        onPress={() =>
          newData.children.length > 0
            ? toggleListItem()
            : navigations(newData.landingPage)
        }
        style={Styles.headingBox}>
        <Text
          style={[
            Styles.activetxt,
            {fontFamily: showContent ? Fonts.Assistant700 : null},
          ]}>
          {newData.title}
        </Text>
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
            console.log('this is last list console454545', item);
            return (
              <TouchableOpacity
                style={Styles.listBox}
                onPress={() => navigations(item.landingPage)}>
                <Text>{item.title}</Text>
              </TouchableOpacity>
            );
          })
        : null}
    </View>
  );
};

export default NewAccordian;
