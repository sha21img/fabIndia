import {
  View,
  Text,
  LayoutAnimation,
  Animated,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from '../../../assets/Colors';
import {useNavigation} from '@react-navigation/native';
const NewAccordian = props => {
  const {newData} = props;
  const navigation = useNavigation();
  const navigations = item => {
    console.log('this sis item', item.title);
    let splitURL = item.landingPage.split('/');
    splitURL = splitURL[splitURL.length - 1];
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
    <View key={Math.random() * 1099900} style={{overflow: 'hidden'}}>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          newData.children.length > 0 ? toggleListItem() : navigations(newData);
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
            console.log('this is item', item);
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  item.children.length > 0
                    ? toggleListItem()
                    : navigations(item);
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
