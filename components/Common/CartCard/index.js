import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {image} from '../../../assets/images';
import Styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function CartCard({
  data = [],
  monogramClick = '',
  SizeQClick = '',
  EmiClick = '',
  RemoveClick = '',
  CustomClick = '',
}) {
  const cardListRender = () => {
    return (
      <>
        <View style={Styles.mainContainer}>
          {false ? (
            <View style={Styles.offerTextContainer}>
              <Text style={Styles.offerText}>
                <Text style={Styles.offerText1}>Buy 2 Get 2 </Text>for apparel,
                only on discounted...
              </Text>
            </View>
          ) : null}
          <View style={Styles.cartContainer}>
            <Image
              source={image.womenCard1}
              style={Styles.imagedimension}
              resizeMode="cover"
            />
            <View style={Styles.detailContainer}>
              <Text style={Styles.title}>jia Cotton Towel Set of 2</Text>
              <View style={Styles.colorBox}>
                <Text style={Styles.colorText}>Color - </Text>
                <View
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: 20 / 2,
                    backgroundColor: 'lightblue',
                    borderColor: 'black',
                    borderWidth: 2,
                    marginHorizontal: 3,
                  }}></View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingVertical: 5,
                }}>
                <TouchableOpacity
                  style={Styles.sizeContainer}
                  onPress={() => SizeQClick()}>
                  <Text style={Styles.sizeText}>Size</Text>
                  <MaterialIcons name="keyboard-arrow-down" size={20} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={Styles.quantityContainer}
                  onPress={() => SizeQClick()}>
                  <Text style={Styles.QuantityText}>Quantity</Text>
                  <MaterialIcons name="keyboard-arrow-down" size={20} />
                </TouchableOpacity>
              </View>
              <View style={Styles.currencyContainer}>
                <Text style={Styles.curr}>₹ 2500</Text>
                <Text style={Styles.curr1}>₹ 3,000</Text>
              </View>
              <Text style={Styles.saveText}>You save ₹500!</Text>
              <TouchableOpacity onPress={() => monogramClick()}>
                <Text style={Styles.typeText}>Monogrammed</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity onPress={() => CustomClick()}>
                <Text style={Styles.typeText}>Customized</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => EmiClick()}>
                <Text style={Styles.typeText}>EMI selected</Text>
              </TouchableOpacity> */}
            </View>
          </View>
          <View style={Styles.btnContainer}>
            <TouchableOpacity onPress={() => RemoveClick()} style={Styles.btn}>
              <Text style={Styles.btnText}>Remove</Text>
            </TouchableOpacity>
            <View style={Styles.divider}></View>
            <TouchableOpacity style={Styles.btn}>
              <Text style={Styles.btnText}>Add to wishlist</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };
  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index}
      renderItem={cardListRender}
    />
  );
}
