import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import Chip from '../../../Common/Chip';
import CommonTopTab from '../../../Common/CommonTopTab';
import Card from '../../../Common/Card';
import {Colors} from '../../../../assets/Colors';
import {WomenTabdata} from '../../../../constant';
import {getComponentData} from '../../../Common/Helper';

export default function MenTab({data = [], position}) {
  const [active, setActive] = React.useState('');
  const [chipData, setChipData] = React.useState([]);
  const [toptabLabelData, setToptabLabelData] = React.useState([]);
  // const [filterArray, setChipData] = React.useState([]);

  const getTabCount = async () => {
    const filterArray = data.filter(item => {
      return item.position == position;
    });
    console.log('filterArray', filterArray);
    const filterSlotId = filterArray[0].components.component[0].uid;
    console.log('commontabuid', filterSlotId);
    const response = await getComponentData(
      `fabindiab2c/cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${filterSlotId}&lang=en&curr=INR`,
    );
    const bannerId = response.component[0].tabs;
    console.log('commontabbannerId', bannerId);
    getBannerCount(bannerId);
  };
  const getTabData = async data => {
    setActive(data.title);
    const splitBannerId = data.components.split(' ').join(',');
    const response = await getComponentData(
      `fabindiab2c/cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );
    console.log('ALALALALLAALALL', data);
    setToptabLabelData(response.component);
  };
  const getBannerCount = async bannerId => {
    const splitBannerId = bannerId.split(' ').join(',');
    const response = await getComponentData(
      `fabindiab2c/cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );
    console.log('response', response.component);
    setChipData(response.component);
    getTabData(response.component[0]);
    // setCarouselData(response.data.component);
  };
  useEffect(() => {
    getTabCount();
  }, []);
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
        <View style={{marginLeft: 15, height: 470}}>
          <CommonTopTab data={toptabLabelData} />
        </View>
      )}
    </>
  );
}
