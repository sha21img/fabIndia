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
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import Fonts from '../../../assets/fonts';
import {Colors} from '../../../assets/Colors';
import {image} from '../../../assets/images';
import {useNavigation} from '@react-navigation/native';
const width = Dimensions.get('window').width;
const NewAccordion = props => {
  const {item} = props;
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
  console.log(item);
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
        <TouchableOpacity
          onPress={() => {
            console.log('hih'),
              navigation.navigate('LandingPageSaris_Blousess');
          }}
          style={Styles.activebox}
          key={Math.random() * 1099900}>
          <Text
            style={[
              Styles.activetxt,
              {fontFamily: showContent ? Fonts.Assistant700 : null},
            ]}>
            {item.name}
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
        </TouchableOpacity>
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
const Accordian = props => {
  const {title, category, description} = props;
  console.log('propssssssssssssssssssssssssss', props);
  console.log('Accordian', description);
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
        <TouchableOpacity onPress={() => toggleListItem()}>
          <ImageBackground
            resizeMode="cover"
            source={image.HomeDecor3}
            style={{
              height: 150,
              width: width,
              overflow: 'hidden',
              backgroundColor: 'rgba(144, 50, 51, 0.5)',
              marginTop: 2,
            }}>
            <View style={[Styles.titlebox]}>
              <View style={{flexDirection: 'row'}}>
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
              <Text
                style={[
                  Styles.titletxt,
                  {
                    fontFamily: showContent
                      ? Fonts.Assistant700
                      : Fonts.Assistant400,
                  },
                ]}>
                {description}
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
        {showContent &&
          category.map((item, index) => {
            return <NewAccordion item={item} {...props} />;
          })}
      </View>
    </>
  );
};
export default Accordian;
