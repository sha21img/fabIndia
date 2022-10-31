import {
  View,
  Text,
  LayoutAnimation,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Styles} from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Fonts from '../../../assets/fonts';
import {Colors} from '../../../assets/Colors';
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
          category.map((item, index) => {
            return (
              <View style={Styles.activebox} key={Math.random() * 1099900}>
                <Text style={Styles.activetxt}>{item}</Text>
              </View>
            );
          })}
      </View>
    </>
  );
};
export default Accordian;
