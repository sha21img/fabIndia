import {
  View,
  Text,
  ScrollView,
  Image,
  Modal,
  TouchableOpacity,
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
  const [showOrderDetail, setShowOrderDetail] = useState(false);
  const [modalShowMono, setModalShowMono] = useState(false);
  const [showCustom, setShowCustom] = useState(false);
  const [showSizeQ, setShowSizeQ] = useState(false);
  const [showRemove, setShowRemove] = useState(false);
  const [showEmi, setShowEmi] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [totalquantity, setTotalquantity] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);
  const [entrynum, setEntrynum] = useState(null);
 const [maxstock,setMaxstock]= useState(null)
  
  const {cartdetails, getCartDetails} = props;
  useEffect(() => {
    // setCurrentPosition(1);
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
  const SizeQClick = data => {
    setShowSizeQ(true);
    console.log('dataaa quantityyyyyy7777777777777777777777777', data?.product?.stock?.stockLevel);
    setMaxstock(data?.product?.stock?.stockLevel)
    setEntrynum(data?.entryNumber);
    setQuantity(data?.quantity);
  };
  const RemoveClick = async data => {
    const value = await AsyncStorage.getItem('cartID');
    console.log('valuevaluevaluevaluevaluevaluevaluevaluevaluevalue', value);
    console.log('dataaaaaaaaaaaaaaaaaa00000000000000000000', data.entryNumber);
    const response = await axios.delete(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08266751/entries/${data.entryNumber}`,
      // {},
      {
        headers: {
          Authorization: `Bearer SqhPMInSnKoBK5sH76aH9ECVg_o`,
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
    let quantity = cartdetails.orderEntries.reduce(
      (n, {quantity}) => n + quantity,
      0,
    );
    console.log('quantityquantity', quantity);
    setTotalquantity(quantity);
    let sum = 0;

    cartdetails.orderEntries.forEach(value => {
      sum += value.totalPrice.value;
    });

    console.log('sum', sum);
    setTotalPrice(sum);
  };

  const updateQuantity = async () => {
    const response = await axios.patch(
      `https://apisap.fabindia.com/occ/v2/fabindiab2c/users/current/carts/08266751/entries/${entrynum}`,
      {
        quantity: quantity,
      },
      {
        headers: {
          Authorization: `Bearer SqhPMInSnKoBK5sH76aH9ECVg_o`,
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
                <Text style={styles.itemtext}>{totalquantity} items</Text>
                <TouchableOpacity onPress={() => orderValueDetail()}>
                  <Text style={styles.itemTextDesc}>
                    View Order value details
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cartDetail1}>
                <Text style={styles.totalAmount}>Total: ₹{totalPrice}</Text>
                <Text style={styles.saveAmount}>You save ₹19,000!</Text>
              </View>
            </View>
            <CartCard
              data={cartdetails}
              SizeQClick={SizeQClick}
              monogramClick={monogramClick}
              RemoveClick={RemoveClick}
              EmiClick={EmiClick}
              CustomClick={CustomClick}
            />
          </>
        ) : currentPosition == 1 ? (
          <MyAddresses {...props} />
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
              <Text style={styles.headtxt}>Monogramming details</Text>
              <TouchableOpacity onPress={() => setShowOrderDetail(false)}>
                <Ionicons name="close-circle-outline" size={24} />
              </TouchableOpacity>
            </View>
            <Text style={styles.headText2}>You have 6 items in your cart</Text>
            <View style={styles.divider} />
            {/*  */
            /* Table */
            /*  */}
            <Text>Table</Text>
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
                onPress={() =>  quantity > 1? setQuantity(quantity - 1) : null}
                style={styles.signBox}>
                <Text style={styles.sign}>-</Text>
              </TouchableOpacity>
              <View style={styles.quantityBox}>
                <Text style={styles.quantityText}>{quantity}</Text>
              </View>
              <TouchableOpacity
                onPress={() => quantity < maxstock ? setQuantity(quantity + 1) : null}
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
