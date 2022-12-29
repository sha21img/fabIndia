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
import Fonts from '../../../assets/fonts';
import {Colors} from '../../../assets/Colors';
import {image} from '../../../assets/images';
import {useNavigation} from '@react-navigation/native';
import NewAccordian from '../NewAccordian';
const width = Dimensions.get('window').width;

const Accordian = props => {
  const {data} = props;
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
          onPress={() => {
            data.children.length > 0 ? toggleListItem() : null;
          }}>
          <ImageBackground
            resizeMode="cover"
            source={{uri: data.image}}
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
                  {data.title}
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
          </ImageBackground>
        </TouchableOpacity>
        {data.children.length > 0 && showContent
          ? data.children.map((item, index) => {
              return <NewAccordian newData={item} {...props} />;
            })
          : null}
      </View>
    </>
  );
};
export default Accordian;
