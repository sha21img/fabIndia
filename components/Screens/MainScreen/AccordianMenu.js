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
import {useNavigation} from '@react-navigation/native';
const width = Dimensions.get('window').width;

export default function AccordianMenu(props) {
  const {data} = props;
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
  return (
    <>
      <View key={Math.random() * 1099900} style={{overflow: 'hidden'}}>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            data.children.length > 0 ? toggleListItem() : null;
          }}
          style={{
            padding: 20,
            flexDirection: 'row',
            borderBottomColor: '#ebebeb',
            borderBottomWidth: 1,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons
              name="ios-grid-outline"
              size={20}
              color={Colors.primarycolor}
            />
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
