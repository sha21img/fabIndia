import {
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {image} from '../../../assets/images';
import Styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {imageURL} from '../Helper';

export default function CartCard({
  data = [],
  monogramClick = '',
  SizeQClick = '',
  EmiClick = '',
  RemoveClick = '',
  CustomClick = '',
}) {
  const [quantity, setQuantity] = useState(null);
  useEffect(() => {
    setupData();
  }, []);

  const setupData = () => {
    console.log('dataaaaaaaaaaaa', data);
    let quantity = data.orderEntries.reduce((n, {quantity}) => n + quantity, 0);
    console.log('quantityquantity', quantity);
    setQuantity(quantity);
  };

  const cardListRender = item => {
    console.log(
      'cartcardperitemmmmmm',
      item.item?.product?.baseOptions[0]?.selected?.variantOptionQualifiers[0]
        ?.value,
    );
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
              <Text style={Styles.title}>{item?.item?.product?.name}</Text>
              <View style={Styles.colorBox}>
                <Text style={Styles.colorText}>
                  Color -{' '}
                  {
                    item.item?.product?.baseOptions[0]?.selected
                      ?.variantOptionQualifiers[0]?.value
                  }
                </Text>
                {/* <View
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: 20 / 2,
                    backgroundColor: 'lightblue',
                    borderColor: 'black',
                    borderWidth: 2,
                    marginHorizontal: 3,
                  }}></View> */}
                <Image
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: 50,
                    marginHorizontal: 3,
                  }}
                  source={{
                    uri: `${imageURL}${item.item?.product?.baseOptions[0]?.selected?.variantOptionQualifiers[0]?.swatchColorImageUrl}`,
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  paddingVertical: 5,
                }}>
                <TouchableOpacity
                  style={Styles.sizeContainer}
                  onPress={() => SizeQClick(item?.item)}>
                  <Text style={Styles.sizeText}>
                    {item.item?.product?.baseOptions[0]?.selected
                      ?.variantOptionQualifiers[1]?.value == 'Free Size'
                      ? 'Free Size'
                      : `Size ${item.item?.product?.baseOptions[0]?.selected?.variantOptionQualifiers[1]?.value}`}
                  </Text>
                  <MaterialIcons name="keyboard-arrow-down" size={20} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={Styles.quantityContainer}
                  onPress={() => SizeQClick(item?.item)}>
                  <Text style={Styles.QuantityText}>
                    Quantity {item?.item?.quantity}
                  </Text>
                  <MaterialIcons name="keyboard-arrow-down" size={20} />
                </TouchableOpacity>
              </View>
              <View style={Styles.currencyContainer}>
                <Text style={Styles.curr}>
                  ₹ {item?.item?.product?.priceAfterDiscount?.value}
                </Text>
                <Text style={Styles.curr1}>
                  ₹ {item?.item?.product?.price?.value}
                </Text>
              </View>
              <Text style={Styles.saveText}>
                You save ₹{item?.item?.product?.totalDiscount?.value}!
              </Text>
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
            <TouchableOpacity
              onPress={() => RemoveClick(item?.item)}
              style={Styles.btn}>
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
      data={data.orderEntries}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index}
      renderItem={cardListRender}
    />
  );
}
