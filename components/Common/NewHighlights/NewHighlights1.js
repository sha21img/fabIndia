import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Styles} from './styles';
import {getComponentData, imageURL} from '../Helper';
import {hasSpaces} from '../../../constant';
export default function NewHighlights1(props) {
  const {data, customStyle = ''} = props;
  const width = Dimensions.get('window').width;
  const [newHighlights, setNewHighlights] = React.useState([]);
  const [dataArray, setDataArray] = useState([]);
  const [page, setPage] = useState(0);
  const getNewHighlightIds = async () => {
    const bannerId = data.banners;
    getNewHighlightData(bannerId);
  };
  const getNewHighlightData = async bannerId => {
    const splitBannerId = bannerId.split(' ').join(',');
    const response = await getComponentData(
      `cms/components?fields=DEFAULT&currentPage=${page}&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );
    setPage(page + 1);
    setDataArray(response);
    if (newHighlights.length) {
      setNewHighlights(prev => [...prev, ...response.component]);
    } else {
      setNewHighlights(response.component);
    }
  };
  const imageCard = item => {
    const newCode = item.item.urlLink;
    // console.log('item for product', item.item.urlLink);
    let splitURL = newCode.split('/');
    splitURL = splitURL[splitURL.length - 1];
    console.log('splitURL', splitURL);
    return (
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('LandingPageSaris_Blouses', {
            code: splitURL.split('?')[0],
            title: item.item.title,
          })
        }
        activeOpacity={0.8}
        key={Math.random() * 987}
        style={Styles.imageBox}>
        <Image
          style={Styles.image}
          source={{uri: `${imageURL}${item.item.media.url}`}}
        />
        <Text style={Styles.imageText}>{item.item.title}</Text>
      </TouchableOpacity>
    );
  };
  useEffect(() => {
    getNewHighlightIds();
  }, []);
  const endReach = () => {
    if (dataArray?.pagination?.totalPages > page) {
      getNewHighlightIds();
    }
  };
  return (
    <View style={[Styles.container, customStyle]}>
      <View
        style={[
          Styles.headingBox,
          hasSpaces(data.title ? data.title : '')
            ? {width: width / 3}
            : {width: null},
        ]}>
        <Text style={Styles.headingText}>{data.headline}</Text>
        <Text style={Styles.headingTitle}>{data.title}</Text>
      </View>
      <View style={[Styles.imageContainer, {backgroundColor: data.color}]}>
        <FlatList
          horizontal
          data={newHighlights}
          onEndReached={endReach}
          showsHorizontalScrollIndicator={false}
          onEndReachedThreshold={0.1}
          keyExtractor={(item, index) => index}
          renderItem={imageCard}
        />
      </View>
    </View>
  );
}
// <View
// style={[
//   {position: 'absolute', top: '37%', left: '4%', zIndex: 10},
//   hasSpaces(compData.title ? compData.title : '')
//     ? {width: width / 3}
//     : {width: null},
// ]}>
// <Text
//   style={{
//     fontSize: 14,
//     color: '#4A4A4A',
//     fontFamily: Fonts.Assistant300,
//   }}>
//   {/* {compData.headline} */}
//   New In
// </Text>
// <Text
//   style={{
//     color: '#4A4A4A',
//     fontSize: 24,
//     fontFamily: Fonts.PlayfairDisplay700,
//   }}>
//   {/* {compData.title} */}
//   Women
// </Text>
// </View>
