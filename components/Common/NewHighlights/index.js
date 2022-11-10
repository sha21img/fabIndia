import {View, Text, ScrollView, Image, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import {Styles} from './styles';
import {getComponentData, imageURL} from '../Helper';
import {hasSpaces} from '../../../constant';
import Fonts from '../../../assets/fonts';

export default function NewHighlights({
  data = [],
  position,
  bgColor = '',
  customStyle = '',
}) {
  const width = Dimensions.get('window').width;

  const [newHighlights, setNewHighlights] = React.useState([]);
  const [compData, setCompData] = React.useState([]);

  const getNewHighlightIds = async () => {
    const filterArray = data.filter(item => {
      return item.position == position;
    });
    const filterSlotId = filterArray[0].components.component[0].uid;
    const response = await getComponentData(
      `fabindiab2c/cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${filterSlotId}&lang=en&curr=INR`,
    );
    setCompData(response.component[0]);
    const bannerId = response.component[0].banners;
    getNewHighlightData(bannerId);
  };
  const getNewHighlightData = async bannerId => {
    const splitBannerId = bannerId.split(' ').join(',');
    const response = await getComponentData(
      `fabindiab2c/cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );
    setNewHighlights(response.component);
  };
  const imageCard = newHighlights.map(item => {
    return (
      <View key={Math.random() * 987} style={Styles.imageBox}>
        <Image
          style={Styles.image}
          source={{uri: `${imageURL}${item.media.url}`}}
        />
        <Text style={Styles.imageText}>{item.title}</Text>
      </View>
    );
  });
  useEffect(() => {
    getNewHighlightIds();
  }, []);

  return (
    <View style={[Styles.container, customStyle]}>
      <View
        style={[
          {position: 'absolute', top: '37%', left: '4%', zIndex: 10},
          hasSpaces(compData.title ? compData.title : '')
            ? {width: width / 3}
            : {width: null},
        ]}>
        <Text
          style={{
            fontSize: 14,
            color: '#4A4A4A',
            fontFamily: Fonts.Assistant300,
          }}>
          {compData.headline}
        </Text>
        <Text
          style={{
            color: '#4A4A4A',
            fontSize: 24,
            fontFamily: Fonts.PlayfairDisplay700,
          }}>
          {compData.title}
        </Text>
      </View>
      <View style={[Styles.imageContainer, {backgroundColor: compData.color}]}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={Styles.ScrollView}>
          {imageCard}
        </ScrollView>
      </View>
    </View>
  );
}
