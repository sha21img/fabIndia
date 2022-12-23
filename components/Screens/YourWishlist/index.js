import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import {Colors} from '../../../assets/Colors';
import Styles from './style';
import WishListCard from '../../Common/WishListCard';
import CommonButton from '../../Common/CommonButton';
import {useSelector} from 'react-redux';
export default function YourWishlist(props) {
  const {cartReducer} = useSelector(state => state);

  return (
    <>
      {cartReducer.WishListDetail.wishListData.length > 0 ? (
        <>
          <WishListCard {...props} />
        </>
      ) : (
        <>
          <View style={Styles.secondDiv}>
            <View style={Styles.ImageView}>
              <Image
                source={image.Shape}
                style={Styles.imagedimension}
                resizeMode="cover"
              />
              <View style={Styles.textView}>
                <Text style={Styles.carttxt}>Your Wishlist is empty !</Text>
                <Text style={Styles.carttxt2}>
                  Save items that you like in your wishlist
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              padding: 12,
              backgroundColor: '#FDFDFD',
              elevation: 5,
            }}>
            <CommonButton
              backgroundColor="#BDBDBD"
              txt="Start shopping"
              handleClick={() => {
                props.navigation.navigate('Home');
              }}
              customViewStyle={{
                backgroundColor: Colors.primarycolor,
              }}
            />
          </View>
        </>
      )}
    </>
  );
}
