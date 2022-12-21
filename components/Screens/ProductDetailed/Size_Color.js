import {
  View,
  Text,
  Modal,
  Alert,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import {imageURL} from '../../Common/Helper';
import axios from 'axios';
import {dataDetectorType} from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';

export default function Size_Color({
  customStyle,
  productdetail,
  productId,
  sendCount,
  imageUrlCheck,
  getColorProductId = null,
  getImageData = null,
}) {
  console.log(
    'imageUrlCheck?.codeimageUrlCheck?.codeimageUrlCheck?.code000000p============================================================',
    productdetail.baseOptions[0].selected,
  );
  const [filterData, setFilterData] = useState([]);
  const [count, setCount] = useState(1);
  const [pinCode, setPinCode] = useState(null);
  const [pinStatus, setPinStatus] = useState(null);
  const [finalData, setfinalData] = useState(null);
  const [size, setSize] = useState([]);
  const [measure, setMeasure] = useState('inches');
  const [Stock, setStock] = useState(0);
  const [color, setColor] = useState({
    productCode: imageUrlCheck?.code,
    stock: 10,
    color:
      productdetail.baseOptions[0].selected.variantOptionQualifiers[0].value,
  });
  console.log(color, '............................');
  const [modalVisible, setModalVisible] = useState(false);
  // const freeSize = productdetail?.baseOptions[0]?.options[0]?.variantOptionQualifiers[1]?.value;
  const SizeHeader = [
    {value: 'Size'},
    {value: 'Bust'},
    {value: 'Across Shoulder'},
    {value: 'Waist'},
    {value: 'Length'},
  ];
  // console.log('productdetail..........', productdetail.baseOptions);

  openSize = () => setModalVisible(true);
  useEffect(() => {
    if (Object.keys(productdetail).length) {
      console.log('sdfghjk');
      // vicky();
      sizefilter();
    }
  }, [productdetail]);

  useEffect(() => {
    getColorProductId(imageUrlCheck?.code);
    // setColor(prev => {
    //   return {...prev, productCode: imageUrlCheck?.code};
    // });
  }, []);
  // const vicky = () => {
  //   let array = [];
  //   const filterArray = productdetail.baseOptions[0].options.map(item => {
  //     const aa = item.variantOptionQualifiers.map(it => {
  //       return {[it.value]: it.value};
  //     });
  //     console.log("aaaaaaaa",aa)
  //   });
  // };
  const sizefilter = () => {
    let arrayData = [];
    productdetail?.baseOptions &&
      productdetail?.baseOptions[0].options?.map(el => {
        if (
          arrayData.filter(
            elem => elem.size == el.variantOptionQualifiers[1]?.value,
          ).length
        ) {
          arrayData.map(item => {
            if (item.size == el.variantOptionQualifiers[1]?.value) {
              let col = item.color;
              col?.push({
                colorCode: el.variantOptionQualifiers[0].value,
                image: el.variantOptionQualifiers[0].swatchColorImageUrl,
                stock: el.stock.stockLevel,
                productCode: el.code,
                size: el.variantOptionQualifiers[1].value,
              });
              item.color = col;
            }
          });
        } else {
          let a = {
            size: el.variantOptionQualifiers[1]?.value,
            productCode: el.code,
            color: [
              {
                colorCode: el.variantOptionQualifiers[0]?.value,
                image: el.variantOptionQualifiers[0].swatchColorImageUrl,
                stock: el.stock.stockLevel,
                size: el.variantOptionQualifiers[1].value,
                productCode: el.code,
              },
            ],
          };
          arrayData.push(a);
        }
        // arrayData.push({size:el[1].value, color:})
      });
    setfinalData(arrayData[0]);
    setFilterData(arrayData);
    console.log(
      arrayData,
      'arrayDataarrayDataooooooooooooo9999999999999999999',
    );
  };

  const StockSubmit = item => {
    console.log(
      'itemmmmmmmashishhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh',
      item,
    );
    let sum = 0;
    item.color.map(el => {
      sum = sum + el.stock;
    });
    setStock(sum);
    setSize(item);
    if (
      item.color.filter(el => el.productCode == item.productCode)[0].stock == 0
    ) {
      setCount(0);
    } else {
      setCount(1);
    }
    let a = {
      productCode: item?.productCode,
      stock: item.color.filter(el => el.productCode == item.productCode)[0]
        .stock,
      color: item.color.filter(el => el.productCode == item.productCode)[0]
        .colorCode,
    };
    setColor(a);
    getColorProductId(item.productCode);
    getImageData(item.productCode);
    setfinalData(item);
  };

  const CounterQuantity = task => {
    console.log('color.stockcolor.stock', color.stock);
    let countData = count;
    if (task == 'Minus') {
      if (countData != 1) {
        countData = countData - 1;
      }
    } else {
      if (countData < color.stock) {
        countData = countData + 1;
      }
    }
    sendCount(countData);
    setCount(countData);
  };
  const checkPin = async () => {
    if (pinCode != null) {
      const response = await axios.get(
        `https://apisap.fabindia.com/occ/v2/fabindiab2c/pincodeService/productcatalogs/fabindia-b2cProductCatalog/versions/Online/product?pincode=${pinCode}&productCode=${productId}&lang=en&curr=INR`,
      );
      console.log(
        'response.dat response.data response.data response.data response.data33333333333',
        response.data,
      );
      // setProductDetail(response.data);
      setPinStatus(response.data?.status);
    }
  };

  // const getonPress = item => {
  //   console.log('itemitemitemitem', item);
  //   setColor(item);
  //   // getColorProductId(item.productCode);
  //   // getImageData(item.image);
  // };
  return (
    <View style={[Styles.container, customStyle]}>
      <View style={Styles.ColorBox}>
        <Text style={Styles.ColorTxt}>Colour</Text>
        <View style={Styles.colorContainer}>
          {finalData?.color?.map(item => {
            console.log(
              'itemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemcheck8--------------8888',
              item,
            );
            return (
              <TouchableOpacity
                onPress={async () => {
                  console.log(
                    'itemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemcheck888888888888888888888888888',
                    item.productCode,
                  );
                  console.log(
                    'itemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemitemcheck6666666666666666666666666666',
                    color?.productCode,
                  );

                  setColor(item);
                  getColorProductId(item.productCode);
                  getImageData(item.productCode);
                }}
                style={
                  item.productCode == color?.productCode ||
                  color.color == item.colorCode
                    ? Styles.colorOutlineActive
                    : Styles.colorOutlineInActive
                }>
                <Image
                  style={{width: 30, height: 30, borderRadius: 50}}
                  source={{uri: `${imageURL}${item.image}`}}
                />
                {/* <View style={[Styles.chooseColor, {backgroundColor: item}]} /> */}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={Styles.sizeTxt}>Size</Text>
        {filterData[0]?.size != 'Free Size' ? (
          <TouchableOpacity onPress={() => openSize()} style={Styles.chartBox}>
            <FontAwesome5 name="ruler" color={'#903233'} size={15} />
            <Text style={Styles.chartText}>Size Guide</Text>
          </TouchableOpacity>
        ) : null}
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={Styles.btnBox}>
        {filterData.map((item, index) => {
          console.log(item, '///llllllll/0000000000000000000000/?');

          return (
            <>
              <TouchableOpacity
                onPress={() => {
                  StockSubmit(item);
                }}
                style={
                  item.size == size.size ||
                  item.color.filter(el => el.productCode == color?.productCode)
                    .length
                    ? Styles.activeBtn
                    : Styles.inActiveBtn
                }>
                <Text
                  style={
                    item.size == size.size
                      ? Styles.activeBtnText
                      : Styles.inActiveBtnText
                  }>
                  {item.size}
                </Text>
              </TouchableOpacity>
            </>
          );
        })}
      </ScrollView>
      <Text style={Styles.leftTxt}>
        {Stock < 6
          ? size.length || Object.keys(size).length
            ? ` Only ${Stock}  Left`
            : ''
          : null}
      </Text>

      <View style={{marginVertical: 15, marginHorizontal: 15}}>
        <Text>Quantity</Text>
      </View>
      <View style={{flexDirection: 'row', marginHorizontal: 15}}>
        <TouchableOpacity
          onPress={() => {
            CounterQuantity('Minus');
          }}
          style={{
            borderWidth: 2,
            paddingVertical: 5,
            paddingHorizontal: 16,
            borderTopColor: 'lightgrey',
            borderRightColor: 'transparent',
            borderBottomColor: 'lightgrey',
            borderLeftColor: 'lightgrey',
          }}>
          <Text>-</Text>
        </TouchableOpacity>
        <View
          style={{
            borderWidth: 2,
            paddingVertical: 5,
            paddingHorizontal: 16,
            borderColor: 'lightgrey',
          }}>
          <Text style={{fontFamily: Fonts.Assistant700}}>{count}</Text>
        </View>

        <TouchableOpacity
          onPress={() => {
            CounterQuantity('Plus');
          }}
          style={{
            borderWidth: 2,
            paddingVertical: 5,
            paddingHorizontal: 16,
            borderTopColor: 'lightgrey',
            borderRightColor: 'lightgrey',
            borderBottomColor: 'lightgrey',
            borderLeftColor: 'transparent',
          }}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      {color.stock < 6 ? (
        <View style={{paddingVertical: 5, marginHorizontal: 15}}>
          <Text style={{color: color.stock != 0 ? '#717171' : 'red'}}>
            {color.stock != 0 ? `Only ${color.stock} left` : 'Out of Stock'}
          </Text>
        </View>
      ) : null}

      <View style={{marginTop: 20, marginHorizontal: 15}}>
        <View>
          <Text>Check Delivery service availabilty</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 5}}>
          <TextInput
            placeholder="Enter Pincode"
            onChangeText={text => (text.length < 7 ? setPinCode(text) : null)}
            value={pinCode}
            style={{
              backgroundColor: 'white',
              paddingVertical: 6,
              paddingHorizontal: 10,
              borderWidth: 1,
              width: '47%',
              borderColor: 'lightgrey',
            }}
          />
          <TouchableOpacity
            onPress={() => {
              checkPin();
            }}
            style={{
              paddingVertical: 5,
              paddingHorizontal: 20,
              borderWidth: 1,
              borderColor: '#903233',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'lightgrey',
            }}>
            <Text style={{color: '#903233'}}>Check</Text>
          </TouchableOpacity>
        </View>
        <Text style={{color: pinStatus ? '#5dac06' : '#db0002'}}>
          {pinStatus != null
            ? pinStatus
              ? 'Service is available'
              : 'This item cannot be delivered at the provided pincode'
            : null}
        </Text>
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
            <View style={{paddingHorizontal: 20}}>
              <View style={Styles.headingBox}>
                <Text style={Styles.heading}>Size chart</Text>
                <TouchableOpacity
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Entypo
                    name="circle-with-cross"
                    color={Colors.primarycolor}
                    size={24}
                  />
                </TouchableOpacity>
              </View>
              <View style={{flexDirection: 'row', paddingBottom: 20}}>
                <TouchableOpacity
                  onPress={() => {
                    setMeasure('inches');
                  }}
                  style={{
                    paddingHorizontal: 15,
                    paddingVertical: 7,
                    backgroundColor:
                      measure == 'inches' ? Colors.textcolor : '#E0D9D6',
                    borderRadius: 50,
                    marginRight: 10,
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={[
                      Styles.chipTextActive,
                      {color: measure != 'inches' ? Colors.textcolor : 'white'},
                    ]}>
                    Inches
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setMeasure('cms');
                  }}
                  style={{
                    paddingHorizontal: 15,
                    paddingVertical: 7,
                    backgroundColor:
                      measure != 'inches' ? Colors.textcolor : '#E0D9D6',
                    borderRadius: 50,
                    marginRight: 10,
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={[
                      Styles.chipTextActive,
                      {color: measure == 'inches' ? Colors.textcolor : 'white'},
                    ]}>
                    Cms
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={[Styles.chipContainer]}>
              <View
                style={{
                  // flex: 1,
                  alignSelf: 'stretch',
                  flexDirection: 'row',
                  paddingLeft: 15,
                }}>
                {SizeHeader.map(item => {
                  return (
                    <View style={{alignSelf: 'stretch', flex: 1}}>
                      <Text
                        style={{
                          fontSize: 14,
                          color: '#4A4A4A',
                          fontFamily: Fonts.Assistant400,
                        }}>
                        {item.value}
                      </Text>
                    </View>
                  );
                })}
              </View>

              {productdetail?.sizeChart?.entryMap.map(item => {
                return (
                  <ScrollView>
                    <View>
                      {item.value.entries.map(el => {
                        if (item.key == measure) {
                          return (
                            <>
                              <View
                                style={{
                                  flexDirection: 'row',
                                }}>
                                {el.entries.map(elem => {
                                  return (
                                    <View
                                      style={{
                                        flex: 1,
                                        alignSelf: 'stretch',
                                        flexDirection: 'row',
                                        paddingLeft: 15,
                                      }}>
                                      <View
                                        style={{flex: 1, alignSelf: 'stretch'}}>
                                        <Text
                                          style={{
                                            fontFamily: Fonts.Assistant700,
                                            fontSize: 16,
                                          }}>
                                          {elem.value}
                                        </Text>
                                      </View>
                                    </View>
                                  );
                                })}
                              </View>
                            </>
                          );
                        }
                      })}
                    </View>

                    {/* <TouchableOpacity style={Styles.chipInActive}>
                      <Text style={Styles.chipTextActive}>{item}</Text>
                    </TouchableOpacity> */}
                  </ScrollView>
                );
              })}
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Image
                  source={{
                    uri: `${imageURL}${productdetail?.sizeChart?.image?.url}`,
                  }}
                  style={{height: 300, width: 300}}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
    height: '85%',
  },
  headingBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 19,
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    lineHeight: 24,
    fontFamily: Fonts.Assistant600,
    color: Colors.textcolor,
    width: '85%',
  },
  btnBox: {
    paddingVertical: 5,
    paddingHorizontal: 15,
  },
  sizeTxt: {
    paddingHorizontal: 15,
    fontFamily: Fonts.Assistant400,
    fontSize: 14,
    lineHeight: 16,
    color: ' #717171',
  },
  leftTxt: {
    paddingHorizontal: 15,
    fontFamily: Fonts.Assistant700,
    fontSize: 12,
    lineHeight: 16,
    color: '#717171',
  },
  activeBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 70,
    backgroundColor: 'white',
    padding: 7,
    marginRight: 10,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.primarycolor,
  },
  activeBtnText: {
    color: Colors.textcolor,
  },
  inActiveBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 70,
    backgroundColor: 'white',
    marginRight: 10,
    padding: 7,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  inActiveBtnText: {
    color: Colors.textcolor,
  },
  chartBox: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  chartText: {
    color: '#903233',
    fontFamily: Fonts.Assistant400,
    fontSize: 14,
    lineHeight: 16,
    paddingHorizontal: 7,
  },
  ColorTxt: {
    color: '#717171',
    fontFamily: Fonts.Assistant400,
    fontSize: 14,
    lineHeight: 16,
    marginTop: 5,
  },
  ColorBox: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  colorContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
  },
  colorOutlineActive: {
    borderWidth: 2,
    borderRadius: 50,
    borderColor: Colors.textcolor,
    marginRight: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorOutlineInActive: {
    borderWidth: 1.7,
    borderRadius: 50,
    borderColor: '#C4C4C4',
    justifyContent: 'center',
    marginRight: 7,
    alignItems: 'center',
  },
  chooseColor: {
    width: 20,
    height: 20,
    borderRadius: 50,
    margin: 2,
  },
  chipContainer: {
    paddingVertical: 5,
    // flexDirection: 'row',
  },
  chipActive: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: Colors.textcolor,
    borderRadius: 50,
    marginRight: 10,
  },
  chipTextActive: {
    fontFamily: Fonts.Assistant700,
    fontSize: 16,
    // color: 'white',
  },
  chipInActive: {
    paddingHorizontal: 15,
    paddingVertical: 7,
    backgroundColor: '#E0D9D6',
    borderRadius: 50,
    marginRight: 10,
  },
  chipTextInActive: {
    fontFamily: Fonts.Assistant700,
    fontSize: 16,
    // color: Colors.textcolor,
  },
});
