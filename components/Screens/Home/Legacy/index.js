import {View, Text, Image, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {Styles} from './styles';
import {getComponentData, imageURL} from '../../../Common/Helper';

export default function Legacy({data = {}}) {
  const [newLegacyData, setLegacyData] = React.useState([]);

  const getLegacyIds = async () => {
    const filterSlotId = data.banners;
    getNewHighlightData(filterSlotId);
  };
  const getNewHighlightData = async bannerId => {
    const splitBannerId = bannerId.split(' ').join(',');
    const response = await getComponentData(
      `fabindiab2c/cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );
    setLegacyData(response.component);
  };
  useEffect(() => {
    getLegacyIds();
  }, []);
  return (
    <View style={Styles.container}>
      <View style={Styles.headingBox}>
        <Text style={Styles.header}>Our</Text>
        <Text style={Styles.header1}>legacy</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {newLegacyData?.map(item => {
          return (
            <Image
              style={Styles.img}
              source={{uri: `${imageURL}${item.media.url}`}}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
