import {
  View,
  Text,
  Modal,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';

export default function Footer(props) {
  const {
    oos,
    handleClick = null,
    disabled = false,
    handleWishListAdd = null,
    productdetail = {},
    showcartbutton,
    setShowcartbutton,
    wishlistproductCode = [],
    productId,
    imageUrlCheck,
  } = props;
  const {cartReducer} = useSelector(state => state);
  const dispatch = useDispatch();

  console.log(
    'productdetailproductdetailproductdetailproductdetailproductdetailproductdetailproductdetail',
    productdetail.code,
  );
  const [modalVisible, setModalVisible] = useState(false);
  var isVisible = cartReducer.WishListDetail.wishListData.find(items => {
    return items.code == productdetail.code;
  });
  openStock = () => setModalVisible(true);

  // console.log(
  //   'prprprprprprp1111111111111111111111111111111rprp',
  //   productdetail?.stock?.stockLevelStatus,
  // );
  const isAddWishlist = async () => {
    const token = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(token);
    // console.log('tokenqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq111', getToken.isCheck);
    if (getToken.isCheck) {
      if (productdetail?.stock?.stockLevelStatus == 'inStock') {
        // handleClick(item);
        handleWishListAdd(productdetail);
      } else {
        Toast.showWithGravity('No item left !', Toast.LONG, Toast.TOP);
      }
    } else {
      Toast.showWithGravity('Please Login First', Toast.LONG, Toast.TOP);
      props.navigation.navigate('Login_Register');
      props.navigation.navigate('Login_Register', {
        From: 'PDP',
        productCode: productId,
        code: imageUrlCheck,
      });
    }
  };
  return (
    <>
      <View style={Styles.container}>
        <TouchableOpacity
          style={Styles.heartBox}
          onPress={() => {
            isAddWishlist();
          }}>
          {!!isVisible?.code ? (
            <MaterialCommunityIcons
              name="cards-heart"
              color={Colors.primarycolor}
              size={22}
            />
          ) : (
            <MaterialCommunityIcons
              name="cards-heart-outline"
              color={Colors.primarycolor}
              size={22}
            />
          )}
          <Text
            style={{
              color: Colors.primarycolor,
              fontFamily: Fonts.Assistant400,
              fontSize: 16,
              paddingHorizontal: 4,
            }}>
            {!!!isVisible?.code ? 'Add To Wishlist' : 'Added In Wishlist'}
          </Text>
        </TouchableOpacity>
        {oos ? (
          !showcartbutton ? (
            <TouchableOpacity
              style={[
                Styles.cartBox,
                {
                  backgroundColor: Colors.primarycolor,
                },
              ]}
              // disabled={disabled}
              onPress={() => {
                // if (productdetail?.stock?.stockLevelStatus != 'inStock') {
                //   Toast.showWithGravity('No item left !', Toast.LONG, Toast.TOP);
                // } else {
                handleClick();
                // }
              }}>
              <MaterialCommunityIcons
                name="cart-outline"
                color={'white'}
                size={22}
              />
              <Text style={Styles.cartText}>Add to cart</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={[
                Styles.cartBox,
                {
                  backgroundColor: '#ffa51d',
                },
              ]}
              onPress={() => {
                props.navigation.navigate('CartPage');
                setShowcartbutton(false);
                // if (productdetail?.stock?.stockLevelStatus != 'inStock') {
                //   Toast.showWithGravity('No item left !', Toast.LONG, Toast.TOP);
                // } else {
                // handleClick();
                // setShowcartbutton(true);
                // }
              }}>
              <MaterialCommunityIcons
                name="cart-outline"
                color={'white'}
                size={22}
              />
              <Text style={Styles.cartText}>Go to cart</Text>
            </TouchableOpacity>
          )
        ) : (
          <TouchableOpacity onPress={() => openStock()} style={Styles.cartBox}>
            <Text style={Styles.cartText}>Notify me</Text>
          </TouchableOpacity>
        )}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={Styles.mainContainer}>
          <View style={Styles.centeredView}>
            <View style={Styles.headingBox}>
              <Text style={Styles.heading}>
                We’ll let you know once this item is back in stock!
              </Text>
              <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
                <Entypo
                  name="circle-with-cross"
                  color={Colors.primarycolor}
                  size={24}
                />
              </TouchableOpacity>
            </View>
            <View style={Styles.description}>
              <Text>
                You'll receive an e-mail and SMS on your registered e-mail
                address and mobile number as soon as we have this item
                available.
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={Styles.notiBtnBox}>
              <Text style={Styles.cartText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderTopWidth: 0.8,
    borderTopColor: 'lightgrey',
  },
  mainContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  centeredView: {
    marginTop: 'auto',
    width: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 20,
  },
  heartBox: {
    // borderWidth: 1.5,
    // borderRadius: 50,
    // borderColor: Colors.primarycolor,
    // padding: 7,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 9,
    width: '48%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1.5,
    backgroundColor: 'white',
    borderColor: Colors.primarycolor,
  },
  cartBox: {
    padding: 10,
    width: '48%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cartText: {
    color: 'white',
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
    paddingHorizontal: 5,
  },
  headingBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  heading: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: Fonts.Assistant600,
    color: Colors.textcolor,
    width: '85%',
  },
  description: {
    paddingVertical: 10,
  },
  notiBtnBox: {
    backgroundColor: Colors.primarycolor,
    padding: 12,
    marginTop: 10,
    width: '100%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
