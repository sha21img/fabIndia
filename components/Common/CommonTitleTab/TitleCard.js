import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {image} from '../../../assets/images';
import {getComponentData} from '../Helper';
const width = Dimensions.get('window').width;

export default function TitleCard({data}) {
  const [carouselData, setCarouselData] = React.useState([]);
  const getCarauselIds = async () => {
    const bannerId = data[0].productCodes;
    const splitBannerId = bannerId.split(' ').join(',');
    getCarauselData(splitBannerId);
  };
  const getCarauselData = async bannerId => {
    const response = await getComponentData(
      `cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${bannerId}&lang=en&curr=INR`,
    );
    setCarouselData(response.component);
  };
  useEffect(() => {
    getCarauselIds();
  }, []);
  const titleCard = () => {
    return (
      <View style={Styles.cardContainer}>
        <Image source={image.SarisBanner} style={Styles.imgDim} />
        <View style={Styles.titleBox}>
          <Text style={Styles.title}>Khata Metha Amla Candied -100g</Text>
          <Text style={Styles.title}>MRP </Text>
        </View>
      </View>
    );
  };
  return (
    <>
      <FlatList
        horizontal
        style={Styles.cardListContainer}
        showsHorizontalScrollIndicator={false}
        data={[0, 0, 0]}
        // data={carouselData}
        keyExtractor={(item, index) => index}
        renderItem={titleCard}
      />
    </>
  );
}

const Styles = StyleSheet.create({
  cardListContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  imgDim: {
    width: 178,
    height: 226,
  },
  cardContainer: {
    marginRight: 10,
  },
  titleBox: {
    padding: 5,
    width: 178,
  },
  title: {
    fontSize: 16,
    paddingVertical: 1,
    flexWrap: 'wrap',
  },
});
