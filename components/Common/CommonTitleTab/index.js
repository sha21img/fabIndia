import {View, Text, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getComponentData} from '../Helper';
import Chip from '../Chip';
import CommonTopTab from '../CommonTopTab';
import TitleCard from './TitleCard';

export default function CommonTitleTab(props) {
  const {data = {}} = props;
  const [active, setActive] = useState('');
  const [chipData, setChipData] = useState([]);
  const [toptabLabelData, setToptabLabelData] = useState([]);

  const getTabCount = async () => {
    const bannerId = data.tabs;
    getBannerCount(bannerId);
  };
  const getTabData = async data => {
    setActive(data.title);
    const splitBannerId = data.components.split(' ').join(',');
    console.log('ASdfasdfsdf-=-=-', data.components);
    const response = await getComponentData(
      `cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );
    // console.log('ALALALALLAALALL', response.component);
    setToptabLabelData(response.component);
  };

  const getBannerCount = async bannerId => {
    const splitBannerId = bannerId.split(' ').join(',');

    console.log('splitBannerId', splitBannerId);
    const response = await getComponentData(
      `cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );
    setChipData(response.component);
    getTabData(response.component[0]);
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
      {toptabLabelData.length > 0 && <TitleCard data={toptabLabelData} />}
    </>
  );
}
