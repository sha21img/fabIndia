import {View, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import React, {useEffect, useRef} from 'react';
import Chip from '../../../Common/Chip';
import {BaseURL2, getComponentData} from '../../../Common/Helper';
import CardProducts from './CardProducts';
import axios from 'axios';
import {Colors} from '../../../../assets/Colors';
import Card from '../../../Common/Card';
import Fonts from '../../../../assets/fonts';

export default function WomenTab(props) {
  const {data = {}} = props;
  const flatlistRef = useRef();
  const [active, setActive] = React.useState('');
  const [selectedTab, setSelectedTab] = React.useState('');
  const [chipData, setChipData] = React.useState([]);
  const [productsData, setProductsData] = React.useState([]);
  const [toptabLabelData, setToptabLabelData] = React.useState([]);

  const getTabCount = async () => {
    const bannerId = data.tabs;
    getBannerCount(bannerId);
  };

  const getBannerCount = async bannerId => {
    const splitBannerId = bannerId?.split(' ').join(',');
    const response = await getComponentData(
      `cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );
    setChipData(response.component);
    getTabData(response.component[0]);
    // console.log('chipData==>', response.component);
  };

  const getTabData = async data => {
    setActive(data.title);
    // Scroll to first index
    flatlistRef.current.scrollToOffset({animated: true, offset: 0});
    const splitBannerId = data.components.split(' ').join(',');
    const response = await getComponentData(
      `cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );
    console.log('tabData==>', response.component);
    setToptabLabelData(response?.component);
    setSelectedTab(response?.component[0]?.title);
    getproductData(response?.component[0]?.productCodes.split(' '));
  };

  const getproductData = async productCodes => {
    const params = {
      productCodes: productCodes,
    };
    console.log(params, 'dfjffggfkjfgjklgfkjlfgklgfljk');

    const response = await axios.post(
      `${BaseURL2}/plpContent/searchProducts?fields=products(name,code,price(FULL),images(FULL),totalDiscount,priceAfterDiscount(FULL),newArrival,sale,stock)&lang=en&curr=INR`,
      params,
    );
    console.log('productData==>', JSON.stringify(response.data.products));
    setProductsData(response.data.products);
  };

  useEffect(() => {
    if (props?.data) {
      getTabCount();
    }
  }, [props?.data]);

  const productCard = item => {
    return <Card {...props} items={item.item} />;
  };

  return (
    <View style={{paddingLeft: 16}}>
      <View style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 8}}>
        {chipData.map((item, index) => {
          return (
            <Chip
              key={item.uuid}
              title={item.title}
              handleClick={() => getTabData(item)}
              active={active}
            />
          );
        })}
      </View>

      {/* Tabs */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row', marginVertical: 8}}>
          {toptabLabelData.map(item => {
            return (
              <TouchableOpacity
                key={item.uuid}
                activeOpacity={0.9}
                onPress={() => {
                  setSelectedTab(item.title);
                  getproductData(item?.productCodes?.split(' '));
                  // Scroll to first index
                  flatlistRef.current.scrollToOffset({
                    animated: true,
                    offset: 0,
                  });
                }}
                style={{
                  paddingVertical: 5,
                  marginRight: 16,
                  borderBottomWidth: 2,
                  borderBottomColor:
                    selectedTab == item.title
                      ? Colors.primarycolor
                      : 'transparent',
                }}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: Fonts.Assistant300,
                    color:
                      selectedTab == item.title
                        ? Colors.primarycolor
                        : Colors.textcolor,
                  }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      {/* Cards */}
      <View style={{flexDirection: 'row'}}>
        <FlatList
          ref={flatlistRef}
          horizontal
          data={productsData}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item?.code}
          renderItem={productCard}
        />
      </View>
    </View>
  );
}
