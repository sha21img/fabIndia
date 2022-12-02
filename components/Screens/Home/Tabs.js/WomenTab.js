import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Chip from '../../../Common/Chip';
import CommonTopTab from '../../../Common/CommonTopTab';
import Card from '../../../Common/Card';
import {Colors} from '../../../../assets/Colors';
import {WomenTabdata} from '../../../../constant';
import {getComponentData} from '../../../Common/Helper';
const ABC = () => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: 'row',
        paddingHorizontal: 15,
        backgroundColor: '#FFFFFF',
      }}>
      <Card />
      <Card />
    </ScrollView>
  );
};
export default function WomenTab({data = {}}) {
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
      `fabindiab2c/cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );
    // console.log('ALALALALLAALALL', response.component);
    setToptabLabelData(response.component);
    //2
  };

  const getBannerCount = async bannerId => {
    const splitBannerId = bannerId.split(' ').join(',');
    // console.log('response', splitBannerId);
    const response = await getComponentData(
      `fabindiab2c/cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
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
    Jewellery: ABC,
    'Saris & Blouses': ABC,
    'Stoles & Sarongs': ABC,
    'Women Ethnic': ABC,
    'Women Western': ABC,
    'Men Footwear': ABC,
    'Men Ethnic': ABC,
    'Men Western': ABC,
    Boys: ABC,
    'Infant Girls': ABC,
    Girls: ABC,
    'Infant Boys': ABC,
    'Home & Living': ABC,
    Furniture: ABC,
    Dupattas: ABC,
    'Churidars & Salwars': ABC,
    Kurtas: ABC,
    'Tops, Shirts & Tunics': ABC,
    'Dresses & Jumpsuits': ABC,
    'Pants & Palazzos': ABC,
    Sleepwear: ABC,
    Trousers: ABC,
    Shirts: ABC,
    'Girls Western Wear': ABC,
    'Boys Ethnic Wear': ABC,
    'Girls Ethnic Wear': ABC,
    'Boys Western Wear': ABC,
    'Infant Boys': ABC,
    'Boys Kurta': ABC,
    'Girls Ethnic Sets': ABC,
    'Girls Dresses & Jumpsuits': ABC,
    'Boys Shirt & Short Kurta': ABC,
    'Infant Girls Sets': ABC,
    'Bed Linen': ABC,
    Bath: ABC,
    'Kids Linen': ABC,
    Curtain: ABC,
    'Kitchen & Dining': ABC,
    'Home Decor': ABC,
    'Wall Decor': ABC,
    Cushions: ABC,
    'Floor Convering': ABC,
    Bedroom: ABC,
    Living: ABC,
    Dining: ABC,
    'Bar Furniture': ABC,
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
