import {
  View,
  Text,
  ScrollView,
  LayoutAnimation,
  Animated,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Fonts from '../../../assets/fonts';
import {Colors} from '../../../assets/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Styles} from './styles';
const data = [
  {
    id: 0,
    title: 'Women',
    category: [
      'All in Women',
      'Saris & Blouses',
      'Ethnic Wear',
      'Fusion Wear',
      'Jewellery',
      'Maternity Wear',
      'Sleepwear',
      'Footwear',
      'Accessories',
    ],
  },
  {
    id: 1,
    title: 'Men',
    category: [
      'All in Women',
      'Saris & Blouses',
      'Ethnic Wear',
      'Fusion Wear',
      'Jewellery',
      'Maternity Wear',
      'Sleepwear',
      'Footwear',
      'Accessories',
    ],
  },
  {
    id: 2,
    title: 'Kids',
    category: [
      'All in Women',
      'Saris & Blouses',
      'Ethnic Wear',
      'Fusion Wear',
      'Jewellery',
      'Maternity Wear',
      'Sleepwear',
      'Footwear',
      'Accessories',
    ],
  },
  {
    id: 3,
    title: 'Home Linen',
    category: [
      'All in Women',
      'Saris & Blouses',
      'Ethnic Wear',
      'Fusion Wear',
      'Jewellery',
      'Maternity Wear',
      'Sleepwear',
      'Footwear',
      'Accessories',
    ],
  },
  {
    id: 4,
    title: 'Furniture',
    category: [
      'All in Women',
      'Saris & Blouses',
      'Ethnic Wear',
      'Fusion Wear',
      'Jewellery',
      'Maternity Wear',
      'Sleepwear',
      'Footwear',
      'Accessories',
    ],
  },
  {
    id: 5,
    title: 'Home Decor',
    category: [
      'All in Women',
      'Saris & Blouses',
      'Ethnic Wear',
      'Fusion Wear',
      'Jewellery',
      'Maternity Wear',
      'Sleepwear',
      'Footwear',
      'Accessories',
    ],
  },
  {
    id: 6,
    title: 'Home Decor',
    category: [
      'All in Women',
      'Saris & Blouses',
      'Ethnic Wear',
      'Fusion Wear',
      'Jewellery',
      'Maternity Wear',
      'Sleepwear',
      'Footwear',
      'Accessories',
    ],
  },
  {
    id: 7,
    title: 'Beauty',
    category: [
      'All in Women',
      'Saris & Blouses',
      'Ethnic Wear',
      'Fusion Wear',
      'Jewellery',
      'Maternity Wear',
      'Sleepwear',
      'Footwear',
      'Accessories',
    ],
  },
  {
    id: 8,
    title: 'Food',
    category: [
      'All in Women',
      'Saris & Blouses',
      'Ethnic Wear',
      'Fusion Wear',
      'Jewellery',
      'Maternity Wear',
      'Sleepwear',
      'Footwear',
      'Accessories',
    ],
  },
  {
    id: 9,
    title: 'Collections',
    category: [
      'All in Women',
      'Saris & Blouses',
      'Ethnic Wear',
      'Fusion Wear',
      'Jewellery',
      'Maternity Wear',
      'Sleepwear',
      'Footwear',
      'Accessories',
    ],
  },
];
const data1 = [
  'Monogramming',
  'Customization',
  'Interior Design Solutions',
  'Offers',
  'Store Locator',
  'FAQs',
  'Contact us',
  'Customer Service',
  'FabFamily',
  'About Fabindia',
  'Franchise Enquiry Form',
  'Privacy Policy',
  'Terms of use',
  'Log out',
];
const Accordian = ({title, category}) => {
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
  return (
    <>
      <View style={Styles.accordbox}>
        <TouchableOpacity onPress={() => toggleListItem()}>
          <View
            style={[
              Styles.titlebox,
              {
                borderTopWidth: showContent ? 0 : 1,
                backgroundColor: showContent ? '#F6F6F6' : '#ffffff',
              },
            ]}>
            <Text
              style={[
                Styles.titletxt,
                {
                  fontWeight: showContent ? '700' : '400',
                },
              ]}>
              {title}
            </Text>
            <Animated.View style={{transform: [{rotateZ: arrowTransform}]}}>
              <MaterialIcons
                name="keyboard-arrow-down"
                color={Colors.primarycolor}
                size={30}
              />
            </Animated.View>
          </View>
        </TouchableOpacity>
        {showContent &&
          category.map(item => {
            return (
              <View style={Styles.activebox}>
                <Text style={Styles.activetxt}>{item}</Text>
              </View>
            );
          })}
      </View>
    </>
  );
};

export default function Menu() {
  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <View style={Styles.headbox}>
        <Text style={Styles.headtxt}>Hello!</Text>
      </View>
      <View style={Styles.box}>
        <View style={Styles.loginbox}>
          <Text style={Styles.logintxt}>Log in</Text>
        </View>
        <View style={Styles.registerbox}>
          <Text style={Styles.registertxt}>Register</Text>
        </View>
      </View>
      <View style={Styles.accordiancont}>
        <FlatList
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}) => (
            <Accordian title={item.title} category={item.category} />
          )}
        />
        {data1.map((item, i) => {
          return (
            <View key={i} style={Styles.servicebox}>
              <Text style={Styles.servicetxt}>{item}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
