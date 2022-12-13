import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Chip from '../../../Common/Chip';
import CommonTopTab from '../../../Common/CommonTopTab';
import Card from '../../../Common/Card';
import {Colors} from '../../../../assets/Colors';
import {WomenTabdata} from '../../../../constant';
import {getComponentData} from '../../../Common/Helper';
import axios from 'axios';
import CardProducts from './CardProducts';

export default function WomenTab(props) {
  const {data = {}} = props;
  const [active, setActive] = React.useState('');
  const [chipData, setChipData] = React.useState([]);
  const [toptabLabelData, setToptabLabelData] = React.useState([]);
  // const [filterArray, setChipData] = React.useState([]);

  const getTabCount = async () => {
    // const filterArray = data.filter(item => {
    //   return item.position == position;
    // });
    // console.log('filterArray', filterArray);
    // const filterSlotId = filterArray[0].components.component[0].uid;
    // console.log('commontabuid', filterSlotId);
    // const response = await getComponentData(
    //   `fabindiab2c/cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${filterSlotId}&lang=en&curr=INR`,
    // );
    const bannerId = data.tabs;
    // console.log('commontabbannerId', bannerId);
    getBannerCount(bannerId);
  };
  const getTabData = async data => {
    setActive(data.title);
    const splitBannerId = data.components.split(' ').join(',');
    const response = await getComponentData(
      `cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );
    // console.log('ALALALALLAALALL', response.component);
    setToptabLabelData(response.component);
    //2
  };

  const getBannerCount = async bannerId => {
    const splitBannerId = bannerId.split(' ').join(',');
    // console.log('response', splitBannerId);
    const response = await getComponentData(
      `cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );
    // console.log('responseresponse', response);
    setChipData(response.component);

    getTabData(response.component[0]);
    // setCarouselData(response.data.component);
  };
  useEffect(() => {
    getTabCount();
  }, []);
  const cardsObj = {
    Jewellery: CardProducts,
    'Saris & Blouses': CardProducts,
    'Stoles & Sarongs': CardProducts,
    'Women Ethnic': CardProducts,
    'Women Western': CardProducts,
    'Men Footwear': CardProducts,
    'Men Ethnic': CardProducts,
    'Men Western': CardProducts,
    Boys: CardProducts,
    'Infant Girls': CardProducts,
    Girls: CardProducts,
    'Infant Boys': CardProducts,
    'Home & Living': CardProducts,
    Furniture: CardProducts,
    Dupattas: CardProducts,
    'Churidars & Salwars': CardProducts,
    Kurtas: CardProducts,
    'Tops, Shirts & Tunics': CardProducts,
    'Dresses & Jumpsuits': CardProducts,
    'Pants & Palazzos': CardProducts,
    Sleepwear: CardProducts,
    Trousers: CardProducts,
    Shirts: CardProducts,
    'Girls Western Wear': CardProducts,
    'Boys Ethnic Wear': CardProducts,
    'Girls Ethnic Wear': CardProducts,
    'Boys Western Wear': CardProducts,
    'Infant Boys': CardProducts,
    'Boys Kurta': CardProducts,
    'Girls Ethnic Sets': CardProducts,
    'Girls Dresses & Jumpsuits': CardProducts,
    'Boys Shirt & Short Kurta': CardProducts,
    'Infant Girls Sets': CardProducts,
    'Bed Linen': CardProducts,
    Bath: CardProducts,
    'Kids Linen': CardProducts,
    Curtain: CardProducts,
    'Kitchen & Dining': CardProducts,
    'Home Decor': CardProducts,
    'Wall Decor': CardProducts,
    Cushions: CardProducts,
    'Floor Convering': CardProducts,
    Bedroom: CardProducts,
    Living: CardProducts,
    Dining: CardProducts,
    'Bar Furniture': CardProducts,
  };
  // console.log('oiuyf', toptabLabelData);
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingHorizontal: 15,
          marginTop: 10,
        }}>
        {chipData.map((item, index) => {
          return (
            <Chip
              title={item.title}
              handleClick={() => getTabData(item)}
              active={active}
            />
          );
        })}
      </View>
      {toptabLabelData.length > 0 && (
        <CommonTopTab
          {...props}
          data={toptabLabelData.map(item => ({
            ...item,
            card: cardsObj[item.title],

            // card: cardsObj[item.title],
          }))}
        />
      )}
    </>
  );
}
