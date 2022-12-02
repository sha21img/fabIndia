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
import {Styles} from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import Fonts from '../../../assets/fonts';
import {Colors} from '../../../assets/Colors';
import {image} from '../../../assets/images';
const width = Dimensions.get('window').width;
const NewAccordion = item => {
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
    <View key={Math.random() * 1099900} style={Styles.accordbox}>
      <TouchableOpacity
        onPress={() => toggleListItem()}
        style={{
          // flexDirection: 'row',
          // justifyContent: 'space-between',
          paddingHorizontal: 15,
          paddingTop: 10,
          backgroundColor: '#F6F6F6',
        }}>
        <View style={Styles.activebox} key={Math.random() * 1099900}>
          <Text
            style={[
              Styles.activetxt,
              {fontFamily: showContent ? Fonts.Assistant700 : null},
            ]}>
            {item.item.name}
          </Text>
          {!!item?.item?.subcategory && (
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
          )}
        </View>
      </TouchableOpacity>
      {!!item?.item?.subcategory && showContent ? (
        <View style={{paddingTop: 15, backgroundColor: '#FFFFFF'}}>
          {item.item.subcategory.map((item, index) => {
            return (
              <View
                style={{
                  paddingHorizontal: 15,
                  paddingBottom: 15,
                }}>
                <Text>{item.title}</Text>
              </View>
            );
          })}
        </View>
      ) : null}
    </View>
  );
};
const SimpleAccordian = (props) => {
  const{title, category, description, navigation}=props
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
      <View key={Math.random() * 1099900} style={Styles.accordbox}>
        <TouchableOpacity
          style={{width: '100%'}}
          onPress={() => toggleListItem()}>
          <View
            style={[
              Styles.titlebox,
              {backgroundColor: showContent ? '#EDEDED' : ''},
            ]}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text
                style={[
                  Styles.titletxt,
                  {
                    fontFamily: showContent
                      ? Fonts.Assistant700
                      : Fonts.Assistant400,
                    paddingRight: 10,
                  },
                ]}>
                {title}
              </Text>
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
            </View>
          </View>
        </TouchableOpacity>
        {showContent &&
          category.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => props.navigation.navigate('MyAccount', { screen: item.routes })
                  // ('AboutFabindia')
                }
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 18,
                  width: '100%',
                  backgroundColor: '#EDEDED',
                }}>
                <Text>{item.name}</Text>
              </TouchableOpacity>
            );
          })}
      </View>
    </>
  );
};
export default SimpleAccordian;
