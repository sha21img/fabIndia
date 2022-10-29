import React from 'react';
import {View, ScrollView, Text, Dimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {image} from '../../../../assets/images';
import CollectionCard from '../../../Common/CollectionCard';
import LifeStyle from '../../../Common/LifeStyle';
import OfferCard from '../../../Common/OfferCard';
import StoriesCard from '../../../Common/StoriesCard';
import SummerGalary from '../../../Common/SummerGalary';

const WomenCategory = () => {
  const [imgActive1, setImgActive1] = React.useState(0);
  const StoriesCardData = [
    {
      Image: image.womenStoryCardPic,
      description: 'Tanya pairs out Dabu printed kurta with a chanderi dupatta',
    },
  ];
  const SummerGalaryData = [
    {image: image.womenPhoto1, name: 'Saris'},
    {image: image.womenPhoto2, name: 'Dresses'},
    {image: image.womenPhoto3, name: 'Tunics'},
    {image: image.womenPhoto4, name: 'Saris'},
    {image: image.womenPhoto1, name: 'Saris'},
    {image: image.womenPhoto2, name: 'Saris'},
  ];

  const LifeStyleData = [
    {image: image.womenPhoto1, name: 'Work from Home'},
    {image: image.womenPhoto2, name: 'Summer afternoons'},
    {image: image.womenPhoto3, name: 'Summer afternoons'},
    {image: image.womenPhoto4, name: 'Work from Home'},
  ];

  const onchangeCarousole = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive1) {
        setImgActive1(slide);
      }
    }
  };

  const OfferData = [
    {
      offerValue: '70',
      heading: 'HANDCRAFTED',
      subHeading: 'RINGS',
      description:
        'Be summer-ready with our collection of muted solids, pastel prints and relaxed silhouettes! ',
    },
    {
      offerValue: '70',
      heading: 'HANDCRAFTED',
      subHeading: 'RINGS',
      description:
        'Be summer-ready with our collection of muted solids, pastel prints and relaxed silhouettes! ',
    },
  ];

  const collectionData = [
    {
      image:image.collectionPic,
      heading:'',
      text:'' 
    }
  ]

  return (
    <ScrollView>
      {/* ===============Offer carousole======== */}
      <View style={{height: 500}}>
        <ScrollView
          horizontal
          onScroll={({nativeEvent}) => onchangeCarousole(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled>
          {OfferData.map(item => (
            <OfferCard key={Math.random() * 9999} data={item} />
          ))}
        </ScrollView>
        <View
          style={{
            position: 'absolute',
            bottom: 20,
            flexDirection: 'row',
            alignSelf: 'center',
          }}>
          {OfferData.map((item, index) => (
            <Text
            key={Math.random() * 988999}
              style={
                imgActive1 == index
                  ? {
                      margin: 3,
                      color: 'red',
                    }
                  : {
                      margin: 3,
                      color: '#ABABAB',
                    }
              }>
              ●
            </Text>
          ))}
        </View>
      </View>
      {/* ================Summer Galery======== */}
      <SummerGalary
        data={SummerGalaryData}
        title="Summer prints"
        subtitles="Keep it cool this summer"
      />
      {/* ================Story Card======== */}
      <StoriesCard data={StoriesCardData} />
      {/* ================LifeStyle 360======== */}
      <LifeStyle
        data={LifeStyleData}
        title="Lifestyle 360"
        subtitles="Combos that’ll keep you feeling fab!"
      />
      {/* ================Collection ======== */}
      <CollectionCard item={collectionData} />
    </ScrollView>
  );
};
export default WomenCategory;
