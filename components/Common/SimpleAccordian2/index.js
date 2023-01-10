import {
  View,
  Text,
  LayoutAnimation,
  Animated,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React, {Component, useState} from 'react';
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
          backgroundColor: 'white',
        }}>
        <View style={Styles.activebox} key={Math.random() * 1099900}>
          <Text
            style={[
              Styles.activetxt,
              //   {fontFamily: showContent ? Fonts.Assistant700 : null},
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
const SimpleAccordian2 = props => {
  const {title, description, navigation, bodyData, IconName, handleclick} =
    props;
  console.log(typeof props.subItem, 'asssssssssssssssssss');
  console.log(props.subItem, '-----------------------------------');

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
              {backgroundColor: showContent ? 'white' : ''},
            ]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              {/* <MaterialIcons
                name={IconName}
                color={Colors.primarycolor}
                size={20}
              /> */}
              <Text
                style={[
                  Styles.titletxt,
                  {
                    fontFamily: Fonts.Assistant400,
                    // paddingRight: 10,
                    paddingHorizontal: 7,
                    width: '80%',
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
        {/* {showContent &&
          !bodyData &&
          category.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={
                  () =>
                    props.navigation.navigate(item.routes)
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
          })} */}
        {showContent && bodyData && (
          <View style={{paddingHorizontal: 15, backgroundColor: 'white'}}>
            {typeof props?.subItem == 'object' ? props.subItem : null}
          </View>
        )}
      </View>
    </>
  );
};
export default React.memo(SimpleAccordian2);
