import {
  View,
  Text,
  ScrollView,
  Image,
  Modal,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import CartCard from '../../../Common/CartCard';
import Fonts from '../../../../assets/fonts';
import styles from './styles';
import {image} from '../../../../assets/images';
import StepIndicator from 'react-native-step-indicator';
import {Colors} from '../../../../assets/Colors';
import CommonButton from '../../../Common/CommonButton';
import MyAddresses from '../../MyAccount/MyAddresses';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Payment from '../Payment';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckAddress from '../../MyAccount/MyAddresses/CheckAddress';
import InputText from '../../../Common/InputText';
import Toast from 'react-native-simple-toast';

const customStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 30,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 3,
  stepStrokeCurrentColor: Colors.primarycolor,
  stepStrokeWidth: 1,
  stepStrokeFinishedColor: Colors.primarycolor,
  stepStrokeUnFinishedColor: '#aaaaaa',
  separatorFinishedColor: Colors.primarycolor,
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: Colors.primarycolor,
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#903233',
  stepIndicatorLabelFontSize: 12,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#ffffff',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#aaaaaa',
  labelColor: '#999999',
  labelSize: 13,
  currentStepLabelColor: Colors.primarycolor,
};

const labels = ['Cart', 'Address', 'Payment'];
export default function CartList(props) {
  const newCurrPosition = props?.route?.params?.currPosition;
  console.log('newCurrPosition', newCurrPosition);
  const [showOrderDetail, setShowOrderDetail] = useState(false);
  const [modalShowMono, setModalShowMono] = useState(false);
  const [showCustom, setShowCustom] = useState(false);
  const [showSizeQ, setShowSizeQ] = useState(false);
  const [showRemove, setShowRemove] = useState(false);
  const [showEmi, setShowEmi] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(newCurrPosition || 0);
  const [quantity, setQuantity] = useState(1);
  const [totalquantity, setTotalquantity] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [entrynum, setEntrynum] = useState(null);
  const [maxstock, setMaxstock] = useState(null);
  const [couponCode, setCouponCode] = useState('');

  const {cartdetails, getCartDetails, handleClick} = props;
  useEffect(() => {
    let newCurrpos = newCurrPosition || 0;
    setCurrentPosition(newCurrpos);
  }, []);
  const orderValueDetail = () => {
    setShowOrderDetail(true);
  };
  const monogramClick = () => {
    setModalShowMono(true);
  };
  const CustomClick = () => {
    setShowCustom(true);
  };

  const deleteCouponCode = async code => {
    Keyboard.dismiss();
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');
    console.log('this us cart id', getCartID);
    const response = await axios.delete(
      // https://apisap.fabindiahome.com/occ/v2/fabindiab2c/users/current/carts/08008002/vouchers/S1_Percentage_discount_coupon?lang=en&curr=INR
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/${getCartID}/vouchers/${code}?lang=en&curr=INR`,
      {
        headers: {
          Authorization: `${getToken.token_type} ${getToken.access_token}`,
        },
      },
    );
    getCartDetails();
    console.log('checkCouponCode===>', JSON.stringify(response.data));
    if (response && response.status == 200) {
      setCouponCode('');
      if (response.data?.vouchers.length > 0) {
        // success
      } else {
        Toast.show('Invalid code', Toast.LONG);
      }
    }
  };

  const checkCouponCode = async () => {
    Keyboard.dismiss();
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');
    console.log('this us cart id', getCartID);
    const response = await axios.get(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/${getCartID}/vouchers?voucherId=${couponCode}&lang=en&curr=INR`,
      {
        headers: {
          Authorization: `${getToken.token_type} ${getToken.access_token}`,
        },
      },
    );
    getCartDetails();
    // console.log('checkCouponCode===>', JSON.stringify(response.data));
    if (response && response.status == 200) {
      setCouponCode('');
      if (response.data?.vouchers.length > 0) {
        // success
      } else {
        Toast.show('Invalid code provided', Toast.LONG);
      }
    }
  };

  const SizeQClick = data => {
    setShowSizeQ(true);
    console.log(
      'dataaa quantityyyyyy7777777777777777777777777',
      data?.product?.stock?.stockLevel,
    );
    setMaxstock(data?.product?.stock?.stockLevel);
    setEntrynum(data?.entryNumber);
    setQuantity(data?.quantity);
  };
  console.log(
    'currentPositibbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbon',
    currentPosition,
  );
  const addWishlist = async () => {
    console.log('add wishlist');
  };
  const RemoveClick = async data => {
    const value = await AsyncStorage.getItem('cartID');
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');
    console.log('this us cart id', getCartID);
    const response = await axios.delete(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/${getCartID}/entries/${data.entryNumber}`,
      // {},
      {
        headers: {
          Authorization: `${getToken.token_type} ${getToken.access_token}`,
        },
      },
    );
    getCartDetails();
    console.log(
      'RemoveClickRemoveClickRemoveClickRemoveClickRemoveClickRemoveClickRemoveClickRemoveClick',
      response.data,
    );
  };
  const EmiClick = () => {
    setShowEmi(true);
  };
  useEffect(() => {
    setupData();
  }, [cartdetails]);

  const setupData = () => {
    console.log('dataaaaaaaaaaaa', cartdetails);
    let quantity = cartdetails.entries.reduce(
      (n, {quantity}) => n + quantity,
      0,
    );
    console.log('quantityquantity', quantity);
    setTotalquantity(quantity);
    let sum = 0;

    cartdetails.entries.forEach(value => {
      sum += value.totalPrice.value;
    });

    console.log('sum', sum);
    setTotalPrice(sum);
  };

  const updateQuantity = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const getCartID = await AsyncStorage.getItem('cartID');
    console.log('this us cart id', getCartID);
    const response = await axios.patch(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/${getCartID}/entries/${entrynum}`,
      {
        quantity: quantity,
      },
      {
        headers: {
          Authorization: `${getToken.token_type} ${getToken.access_token}`,
        },
      },
    );
    console.log(
      'updateQuantityupdateQuantityupdateQuantityupdateQuantityupdateQuantityupdateQuantity',
      response.data,
    );
    getCartDetails();
    setShowSizeQ(false);
  };
  return (
    <>
      <ScrollView
        contentContainerStyle={styles.mainView}
        nestedScrollEnabled={true}
        showsVerticalScrollIndircator={false}>
        {currentPosition == 0 ? (
          <View style={styles.noticeBox}>
            <Image source={image.cartFlower} style={styles.flower} />
            <Image source={image.cartFlower1} style={styles.flower1} />
            <Text style={styles.noticeText}>
              With every purchase at Fabindia, you help us empower local
              artisans, protect nature and celebrate our country and its crafts!
            </Text>
          </View>
        ) : null}
        <View style={{paddingVertical: 15, backgroundColor: 'white'}}>
          <StepIndicator
            customStyles={customStyles}
            currentPosition={currentPosition}
            labels={labels}
            stepCount={3}
          />
        </View>
        {currentPosition == 0 ? (
          <>
            <View style={styles.cartDetailContainer}>
              <View style={styles.cartDetail}>
                <Text style={styles.itemtext}>
                  {cartdetails?.deliveryItemsQuantity} items
                </Text>
                <TouchableOpacity onPress={() => orderValueDetail()}>
                  <Text style={styles.itemTextDesc}>
                    View Order value details
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cartDetail1}>
                <Text style={styles.totalAmount}>
                  Total: {cartdetails?.totalAmountToPay?.formattedValue}
                </Text>
                <Text style={styles.saveAmount}>
                  You save {cartdetails?.productDiscounts?.formattedValue}
                </Text>
              </View>
            </View>
            <CartCard
              {...props}
              data={cartdetails}
              SizeQClick={SizeQClick}
              monogramClick={monogramClick}
              RemoveClick={RemoveClick}
              EmiClick={EmiClick}
              CustomClick={CustomClick}
              handleClick={handleClick}
            />
          </>
        ) : currentPosition == 1 ? (
          <CheckAddress
            {...props}
            totalPrice={cartdetails?.totalAmountToPay?.value}
            totalquantity={cartdetails?.deliveryItemsQuantity}
          />
        ) : currentPosition == 2 ? (
          <Payment />
        ) : null}
      </ScrollView>
      {currentPosition == 0 ? (
        <View
          style={{
            padding: 12,
            backgroundColor: '#FDFDFD',
            elevation: 5,
          }}>
          <CommonButton
            handleClick={() => setCurrentPosition(prev => prev + 1)}
            txt="Place order"
            customViewStyle={{
              backgroundColor: Colors.primarycolor,
            }}
          />
        </View>
      ) : null}
      {/* Monogramming details modals */}
      <Modal
        visible={showOrderDetail}
        animationType="slide"
        swipeDirection={['down']}
        transparent={true}>
        <View style={styles.modalcontainer}>
          <View style={styles.modalbox}>
            <View style={styles.headbox}>
              <Text style={styles.headtxt}>Order value Details</Text>
              <TouchableOpacity onPress={() => setShowOrderDetail(false)}>
                <Ionicons name="close-circle-outline" size={24} />
              </TouchableOpacity>
            </View>

            {cartdetails?.appliedVouchers.length == 0 ? (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 15,
                }}>
                <InputText
                  label={'Enter Coupon code'}
                  value={couponCode}
                  customStyle={{flex: 1, paddingHorizontal: 0}}
                  onChangeText={text => setCouponCode(text)}
                />

                <TouchableOpacity
                  disabled={couponCode == ''}
                  onPress={() => checkCouponCode()}
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 8,
                    borderRadius: 20,
                    backgroundColor:
                      couponCode == '' ? '#bdbdbd' : Colors.primarycolor,
                  }}>
                  <Text style={{fontSize: 16, color: '#fff'}}>Apply</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginVertical: 15,
                  padding: 8,
                  backgroundColor: '#F4F4F4',
                  borderRadius: 2,
                }}>
                <Text
                  style={{
                    flex: 1,
                    fontSize: 14,
                    color: '#4A4A4A',
                    fontWeight: 'bold',
                  }}>
                  {cartdetails?.appliedVouchers[0]?.voucherCode}
                </Text>

                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() =>
                    deleteCouponCode(
                      cartdetails?.appliedVouchers[0]?.voucherCode,
                    )
                  }>
                  <Image
                    source={image.close}
                    style={{
                      width: 10,
                      height: 10,
                      marginLeft: 12,
                      tintColor: '#4A4A4A',
                    }}
                  />
                </TouchableOpacity>
              </View>
            )}

            <Text style={styles.totalAmount}>
              Price Detail ({cartdetails?.deliveryItemsQuantity} items)
            </Text>
            <View style={styles.divider} />

            <View
              style={[styles.cartDetailContainer, {backgroundColor: '#fff'}]}>
              <View style={styles.cartDetail}>
                <Text style={styles.itemtext}>Total MRP</Text>
                <Text style={[styles.itemtext, {marginVertical: 8}]}>
                  Discount on MRP
                </Text>
                {cartdetails?.totalDiscounts?.value > 0 ? (
                  <Text style={[styles.itemtext, {marginBottom: 8}]}>
                    You saved
                  </Text>
                ) : null}
                <Text style={styles.itemtext}>Delivery Charges</Text>
              </View>

              <View style={styles.cartDetail1}>
                <Text style={styles.itemtext}>
                  {cartdetails?.subTotalWithoutDiscount?.formattedValue}
                </Text>
                <Text style={[styles.saveAmount, {marginVertical: 8}]}>
                  - {cartdetails?.productDiscounts?.formattedValue}
                </Text>
                {cartdetails?.totalDiscounts?.value > 0 ? (
                  <Text style={[styles.saveAmount, {marginBottom: 8}]}>
                    - {cartdetails?.totalDiscounts?.formattedValue}
                  </Text>
                ) : null}
                <Text style={styles.itemtext}>
                  {cartdetails?.deliveryCost?.formattedValue}
                </Text>
              </View>
            </View>

            <View style={styles.divider} />

            <View
              style={[
                styles.cartDetailContainer,
                {backgroundColor: '#fff', marginVertical: 8},
              ]}>
              <View style={styles.cartDetail}>
                <Text style={styles.totalAmount}>Amount payable</Text>
              </View>

              <View style={styles.cartDetail1}>
                <Text style={styles.totalAmount}>
                  {cartdetails?.totalAmountToPay?.formattedValue}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      {/* Monogramming details modals */}
      <Modal
        visible={modalShowMono}
        animationType="slide"
        swipeDirection={['down']}
        transparent={true}>
        <View style={styles.modalcontainer}>
          <View style={styles.modalbox}>
            <View style={styles.headbox}>
              <Text style={styles.headtxt}>Monogramming details</Text>
              <TouchableOpacity onPress={() => setModalShowMono(false)}>
                <Ionicons name="close-circle-outline" size={24} />
              </TouchableOpacity>
            </View>
            <View style={styles.monogramList}>
              <Text style={styles.head1txt}>Jia Cotton Towel Set Of 2</Text>
              <Text style={styles.head1txt}>₹ 2500</Text>
            </View>
            <View style={styles.monogramList}>
              <Text style={styles.head1txt}>Jia Cotton Towel Set Of 2</Text>
              <Text style={styles.head1txt}>₹ 2500</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.monogramList}>
              <Text style={styles.head1txt}>Total amount</Text>
              <Text style={styles.head1txt}>₹ 2700</Text>
            </View>
          </View>
        </View>
      </Modal>
      {/* Custom details modals */}
      <Modal
        visible={showCustom}
        animationType="slide"
        swipeDirection={['down']}
        transparent={true}>
        <View style={styles.modalcontainer}>
          <View style={styles.modalbox}>
            <View style={styles.headbox}>
              <Text style={styles.headtxt}>Customization details</Text>
              <TouchableOpacity onPress={() => setShowCustom(false)}>
                <Ionicons name="close-circle-outline" size={24} />
              </TouchableOpacity>
            </View>
            <View style={styles.monogramList}>
              <Text style={styles.head1txt}>Quadro Single Seater Sofa</Text>
              <Text style={styles.head1txt}>₹ 23,500</Text>
            </View>
            <View style={styles.monogramList}>
              <Text style={styles.head1txt}>Wood finish</Text>
              <Text style={styles.head1txt}>₹ 5000</Text>
            </View>
            <View style={styles.monogramList}>
              <Text style={styles.head1txt}>Fabric</Text>
              <Text style={styles.head1txt}>₹ 5000</Text>
            </View>
            <View style={styles.monogramList}>
              <Text style={styles.head1txt}>Artisan</Text>
              <Text style={styles.head1txt}>₹ 2000</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.monogramList}>
              <Text style={styles.head1txt}>Total amount</Text>
              <Text style={styles.head1txt}>₹ 3500</Text>
            </View>
          </View>
        </View>
      </Modal>
      {/* Size Quantity details modals */}
      <Modal
        visible={showSizeQ}
        animationType="slide"
        swipeDirection={['down']}
        transparent={true}>
        <View style={styles.modalcontainer}>
          <View style={styles.modalbox}>
            <View style={styles.headbox}>
              <Text style={styles.headtxt}></Text>
              <TouchableOpacity onPress={() => setShowSizeQ(false)}>
                <Ionicons name="close-circle-outline" size={24} />
              </TouchableOpacity>
            </View>
            <Text style={styles.sizeText}>Select size</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.sizeScroll}>
              <View style={styles.chipActive}>
                <Text style={styles.chipTextActive}>XS</Text>
              </View>
              <View style={styles.chipInActive}>
                <Text style={styles.chipTextInActive}>S</Text>
              </View>
              <View style={styles.chipInActive}>
                <Text style={styles.chipTextInActive}>M</Text>
              </View>
              <View style={styles.chipInActive}>
                <Text style={styles.chipTextInActive}>L</Text>
              </View>
              <View style={styles.chipInActive}>
                <Text style={styles.chipTextInActive}>XL</Text>
              </View>
              <View style={styles.chipInActive}>
                <Text style={styles.chipTextInActive}>XXL</Text>
              </View>
            </ScrollView>
            <Text style={styles.sizeText}>Select quantity</Text>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                onPress={() =>
                  quantity > 1 ? setQuantity(quantity - 1) : null
                }
                style={styles.signBox}>
                <Text style={styles.sign}>-</Text>
              </TouchableOpacity>
              <View style={styles.quantityBox}>
                <Text style={styles.quantityText}>{quantity}</Text>
              </View>
              <TouchableOpacity
                onPress={() =>
                  quantity < maxstock ? setQuantity(quantity + 1) : null
                }
                style={styles.signBox}>
                <Text style={styles.sign}>+</Text>
              </TouchableOpacity>
            </View>
            <CommonButton
              txt="Update"
              customViewStyle={{
                backgroundColor: Colors.primarycolor,
                borderWidth: 1,
                marginVertical: 8,
              }}
              handleClick={updateQuantity}
            />
          </View>
        </View>
      </Modal>
      {/* remove modals */}
      <Modal
        visible={showRemove}
        animationType="slide"
        swipeDirection={['down']}
        transparent={true}>
        <View style={styles.modalcontainer}>
          <View style={styles.modalbox1}>
            <Image source={image.card} style={styles.imageDim} />
            <View style={styles.modalDetails}>
              <View style={styles.headbox1}>
                <Text style={styles.headtxt}>Remove from cart?</Text>
                <TouchableOpacity onPress={() => setShowRemove(false)}>
                  <Ionicons name="close-circle-outline" size={24} />
                </TouchableOpacity>
              </View>
              <Text style={styles.headText}>
                You can save products to your wishlist to use later.
              </Text>
              <Text style={styles.headText}>
                Please note: Add Rs. 150 to your cart to be eligible for free
                delivery
              </Text>
            </View>
          </View>
          <View style={styles.btnContainer}>
            <CommonButton
              txt="Remove"
              customViewStyle={{
                backgroundColor: '#FFFFFF',
                borderWidth: 1,
                borderColor: Colors.primarycolor,
                width: '32%',
              }}
              btntxtColor={Colors.primarycolor}
            />
            <CommonButton
              txt="Remove & add to wishlist"
              customViewStyle={{
                backgroundColor: Colors.primarycolor,
                width: '65%',
              }}
            />
          </View>
        </View>
      </Modal>
      {/* EMI Selected modals */}
      <Modal
        visible={showEmi}
        animationType="slide"
        swipeDirection={['down']}
        transparent={true}>
        <View style={styles.modalcontainer}>
          <View style={styles.modalbox}>
            <View style={styles.headbox}>
              <Text style={styles.headtxt}>EMI Selected</Text>
              <TouchableOpacity onPress={() => setShowEmi(false)}>
                <Ionicons name="close-circle-outline" size={24} />
              </TouchableOpacity>
            </View>
            <Text style={styles.headText1}>
              ₹ 3,686 x 3 months | 12.0% per annum
            </Text>
            <Text style={styles.headText1}>Total payable to bank ₹ 1,139</Text>
          </View>
        </View>
        <View style={styles.btnContainer}>
          <CommonButton
            txt="Remove"
            customViewStyle={{
              backgroundColor: '#FFFFFF',
              borderWidth: 1,
              borderColor: Colors.primarycolor,
              width: '48%',
            }}
            btntxtColor={Colors.primarycolor}
          />
          <CommonButton
            txt="Change"
            customViewStyle={{
              backgroundColor: Colors.primarycolor,
              width: '48%',
            }}
          />
        </View>
      </Modal>
    </>
  );
}
