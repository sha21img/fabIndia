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
import Toast from 'react-native-simple-toast';
export default function Footer({
  oos,
  handleClick = null,
  disabled = false,
  handleWishListAdd = null,
  productdetail = {},
  wishlistproductCode = [],
}) {
  const {cartReducer} = useSelector(state => state);
  const dispatch = useDispatch();

  console.log(
    'disabled',
    cartReducer.WishListDetail.wishListData.find(items => {
      return items.code == productdetail.code;
    }),
  );
  const [modalVisible, setModalVisible] = useState(false);
  var isVisible = cartReducer.WishListDetail.wishListData.find(items => {
    return items.code == productdetail.code;
  });
  openStock = () => setModalVisible(true);
  return (
    <>
      <View style={Styles.container}>
        <TouchableOpacity
          style={Styles.heartBox}
          onPress={() => {
            handleWishListAdd(productdetail);
          }}>
          {!!isVisible?.code ? (
            <MaterialCommunityIcons
              name="cards-heart"
              color={Colors.primarycolor}
              size={26}
            />
          ) : (
            <MaterialCommunityIcons
              name="cards-heart-outline"
              color={Colors.primarycolor}
              size={26}
            />
          )}
        </TouchableOpacity>
        {oos ? (
          <TouchableOpacity
            style={[
              Styles.cartBox,
              {
                backgroundColor: !disabled ? Colors.primarycolor : 'grey',
              },
            ]}
            disabled={disabled}
            onPress={() => {
              if (productdetail?.stock?.stockLevelStatus != 'inStock') {
                Toast.showWithGravity('No item left !', Toast.LONG, Toast.TOP);
              } else {
                handleClick() 
              }
              
            }}>
            <Text style={Styles.cartText}>Add to cart</Text>
          </TouchableOpacity>
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
    borderWidth: 1.5,
    borderRadius: 50,
    borderColor: Colors.primarycolor,
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBox: {
    padding: 12,
    width: '85%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartText: {
    color: 'white',
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
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
