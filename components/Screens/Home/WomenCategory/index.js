import React from 'react';
import {View, ScrollView, Text, Dimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {Colors} from '../../../../assets/Colors';
import Fonts from '../../../../assets/fonts';
import {image} from '../../../../assets/images';
import CollectionCard from '../../../Common/CollectionCard';
import LifeStyle from '../../../Common/LifeStyle';
import OfferCard from '../../../Common/OfferCard';
import StoriesCard from '../../../Common/StoriesCard';
import SummerGalary from '../../../Common/SummerGalary';
import { Styles } from './style';

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
      heading: () => getOfferTitleHeading(),
      subHeading: () => getOfferSubHeading(),
      description:
        'Be summer-ready with our collection of muted solids, pastel prints and relaxed silhouettes! ',
    },
    {
      offerValue: '70',
      heading: () => getOfferTitleHeading(),
      subHeading: () => getOfferSubHeading(),
      description:
        'Be summer-ready with our collection of muted solids, pastel prints and relaxed silhouettes! ',
    },
  ];

  const collectionData = [
    {
      image: image.collectionPic,
      heading: 'Summer Collection',
      text: 'Be summer-ready with prints and easy, breezy silhouettes',
      color: '#AFA07A',
    },
    {
      image: image.collectionPic2,
      heading: 'Summer Collection',
      text: 'Be summer-ready with prints and easy, breezy silhouettes',
      color: '#464A62',
    },
  ];

  const getSummerTitle = () => {
    return (
      <Text
        style={{
          fontFamily: Fonts.PlayfairDisplayItalic,
          color: '#4A4A4A',
          fontSize: 30,
          marginHorizontal: 20,
          fontWeight: '600',
        }}>
        Summer prints
      </Text>
    );
  };

  const getOfferSubHeading = () => {
    return (
      <Text
        style={{
          fontSize: 26,
          fontFamily: Fonts.PlayfairDisplayItalic,
          color: '#ffffff',
          marginLeft: 5,
        }}>
        RINGS
      </Text>
    );
  };

  const getOfferTitleHeading = () => {
    return (
      <Text
        style={{
          fontSize: 24,
          fontFamily: Fonts.PlayfairDisplayExtraBold,
          color: '#ffffff',
        }}>
        HANDCRAFTED
      </Text>
    );
  };

  const GetStoriesTitle = () => {
    return (
      <Text
        style={{
          fontFamily: Fonts.BarlowRegular,
          fontStyle: 'normal',
          color: '#ffffff',
          fontSize: 30,
          marginHorizontal: 20,
        }}>
        <Text
          style={{
            fontFamily: Fonts.LaBelleAuroreRegular,
            fontStyle: 'normal',
            color: '#ffffff',
            fontSize: 60,
            lineHeight: 90,
          }}>
          Style
        </Text>{' '}
        STORIES
      </Text>
    );
  };

  const GetLifeStyleTitle = () => {
    return (
      <>
        <Text
          style={{
            fontFamily: Fonts.PlayfairDisplayItalic,
            color: '#4A4A4A',
            fontSize: 30,
            marginHorizontal: 20,
            marginBottom: 5,
          }}>
          Lifestyle 360
        </Text>
        <View>
          <Text
            style={{
              fontSize: 18,
              color: '#4A4A4A',
              lineHeight: 23,
              marginHorizontal: 20,
            }}>
            Combos that’ll keep you feeling fab!
          </Text>
        </View>
      </>
    );
  };

  return (
    <ScrollView
      contentContainerStyle={{backgroundColor: Colors.backgroundColor}}>
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
        title={getSummerTitle()}
        subtitles="Keep it cool this summer"
        backgroundColor="#EFE5E0"
      />
      {/* ================Story Card======== */}
      <StoriesCard data={StoriesCardData} title={GetStoriesTitle} />
      {/* ================LifeStyle 360======== */}
      <LifeStyle data={LifeStyleData} title={GetLifeStyleTitle} />
      {/* ================Collection ======== */}
      <View style={{paddingVertical: 30}}>
        <Text
          style={Styles.CollectionHead}>
          Collections
        </Text>
        <ScrollView horizontal>
          {collectionData.map(item => (
            <CollectionCard item={item} />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};
export default WomenCategory;
