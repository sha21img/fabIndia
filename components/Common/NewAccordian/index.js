import {
  View,
  Text,
  LayoutAnimation,
  Animated,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React, { useState } from 'react';
import { Styles } from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Fonts from '../../../assets/fonts';
import { Colors } from '../../../assets/Colors';
import { image } from '../../../assets/images';
import { useNavigation } from '@react-navigation/native';
import { BaseURL2 } from '../Helper';
const width = Dimensions.get('window').width;
const NewAccordian = props => {
  const { newData } = props;
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

  const navigations = item => {
    let splitURL = item.landingPage.split('/');
    splitURL = splitURL[splitURL.length - 1];
    // console.log('splitURL==>', splitURL);

    if (item.title == 'Wedding') {
      navigation.navigate('Collections');
    } else if (item.title == 'Festive') {
      navigation.navigate('FestiveCollection');
    } else if (item.title == 'Interior Design Studio') {
      navigation.navigate('InteriorHomepage');
    } else {
      navigation.navigate('LandingPageSaris_Blouses', {
        title: item.title,
        code: splitURL,
        status: false,
      });
    }
  };
  return (
    <View key={Math.random() * 1099900} style={Styles.accordbox}>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() =>
          newData.children.length > 0
            ? toggleListItem()
            : navigations(newData)
        }
        style={Styles.headingBox}>
        <Text
          style={[
            Styles.activetxt,
            { fontFamily: showContent ? Fonts.Assistant700 : null },
          ]}>
          {newData.title}
        </Text>
        {newData.children.length > 0 ? (
          <Animated.View
            style={{
              transform: [{ rotateZ: arrowTransform }],
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
              activeOpacity={0.9}
              style={Styles.listBox}
              onPress={() => navigations(item)}>
              <Text>{item.title}</Text>
            </TouchableOpacity>
          );
        })
        : null}
    </View>
  );
};

export default NewAccordian;
