// import React from 'react';
// import {Dimensions, ScrollView, Text} from 'react-native';
// import {Colors} from '../../../assets/Colors';
// import Fonts from '../../../assets/fonts';
// import {image} from '../../../assets/images';
// import CommonCarousel from '../../Common/CommonCarousel';
// import NewTrendy from '../../Common/NewTrendy';
// import WomenTrendy from '../../Common/WomenTrendy';

// const width = Dimensions.get('window').width;

// const NewArrivals = () => {
//   const newTrandyData = () => {
//     return <NewTrendy />;
//   };
//   const NewTrendCarouselData = [
//     {
//       heading_btn: () => newTrandyData(),
//       banner: image.TrendyHeader,
//     },
//     {
//       heading_btn: () => newTrandyData(),
//       banner: image.TrendyHeader,
//     },
//     {
//       heading_btn: () => newTrandyData(),
//       banner: image.TrendyHeader,
//     },
//   ];
//   const WomenTrendCarouselData = [
//     {
//       Footer: 'Apparel',
//       banner: image.womenPhoto1,
//     },
//     {
//       Footer: 'Jewellery',
//       banner: image.womenPhoto2,
//     },
//     {
//       Footer: 'Footwear',
//       banner: image.womenPhoto3,
//     },
//     {
//       Footer: 'Beauty',
//       banner: image.womenPhoto4,
//     },
//     {
//       Footer: 'Beauty',
//       banner: image.womenPhoto4,
//     },
//     {
//       Footer: 'Beauty',
//       banner: image.womenPhoto4,
//     },
//   ];
//   return (
//     <ScrollView>
//       {/* ==========New Trendy =========== */}
//       <CommonCarousel data={NewTrendCarouselData} width={width} height={380} />
//       {/* ===========Women Trend========== */}
//       <WomenTrendy
//         data={WomenTrendCarouselData}
//         title={() => (
//           <Text
//             style={{
//               fontSize: 30,
//               color: Colors.textcolor,
//               marginBottom: 10,
//               marginLeft: 15,
//               fontFamily: Fonts.PlayfairDisplay600Italic,
//             }}>
//             Women
//           </Text>
//         )}
//       />
//     </ScrollView>
//   );
// };

// export default NewArrivals;
import React from 'react';
import {Dimensions, ScrollView, Text, View} from 'react-native';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';
import {image} from '../../../assets/images';
import {Furniture2, MenCatagoryData} from '../../../constant';
import ArCarousel from '../../Common/ArCarousel';
import Card from '../../Common/Card';
import Chip from '../../Common/Chip';
import CommonCarousel from '../../Common/CommonCarousel';
import CommonTopTab from '../../Common/CommonTopTab';
import OfferCommonCarousel from '../../Common/OfferCommonCarousel';
import NewFurniture from '../../Common/NewFurniture';
import NewHome from '../../Common/NewHome';
import NewTrendy from '../../Common/NewTrendy';
import WomenTrendy from '../../Common/WomenTrendy';
import {Styles} from './style';

const width = Dimensions.get('window').width;

const NewArrivals = () => {
  const [active, setActive] = React.useState();
  const newTrandyData = () => {
    return <NewTrendy />;
  };
  const NewTrendCarouselData = [
    {
      heading_btn: () => newTrandyData(),
      banner: image.TrendyHeader,
    },
    {
      heading_btn: () => newTrandyData(),
      banner: image.TrendyHeader,
    },
    {
      heading_btn: () => newTrandyData(),
      banner: image.TrendyHeader,
    },
  ];
  const WomenTrendCarouselData = [
    {
      Footer: 'Apparel',
      banner: image.womenPhoto1,
    },
    {
      Footer: 'Jewellery',
      banner: image.womenPhoto2,
    },
    {
      Footer: 'Footwear',
      banner: image.womenPhoto3,
    },
    {
      Footer: 'Beauty',
      banner: image.womenPhoto4,
    },
  ];

  const NewFurnitureCarouselData = [
    {
      name: 'Tables',
      banner: image.womenPhoto1,
      bannerColor: '#99162A',
    },
    {
      name: 'Wall Mirror',
      banner: image.womenPhoto2,
      bannerColor: '#C1985F',
    },
    {
      name: 'Beds',
      banner: image.womenPhoto3,
      bannerColor: '#D36B4A',
    },
    {
      name: 'Cabinets',
      banner: image.womenPhoto4,
      bannerColor: '#8091BB',
    },
    {
      name: 'Cabinets',
      banner: image.womenPhoto4,
      bannerColor: '#99162A',
    },
    {
      name: 'Cabinets',
      banner: image.womenPhoto4,
      bannerColor: '#8091BB',
    },
  ];

  const HomeScreen = item => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          padding: 10,
          backgroundColor: Colors.backgroundColor,
        }}>
        <Card
          customViewStyle={{marginRight: 10}}
          originalprice="1,000"
          offer="20"
        />
        <Card
          customViewStyle={{marginRight: 10}}
          originalprice="1,000"
          offer="20"
        />
      </ScrollView>
    );
  };

  const handleClick = data => {
    setActive(data);
  };
  const screenObj2 = {
    Kurtas: HomeScreen,
    Shirts: HomeScreen,
    'Nehru Jackets & Blazers': HomeScreen,
    Pyjamas: HomeScreen,
  };

  const dataMap1 = MenCatagoryData.map(item => ({
    name: item,
    screen: screenObj2[item],
  }));

  const getOfferTitleHeading = () => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Text
          style={{
            fontSize: 24,
            fontFamily: Fonts.PlayfairDisplay800,
            color: '#ffffff',
            lineHeight: 31,
          }}>
          NEW IN
        </Text>
        <Text
          style={{
            fontSize: 26,
            fontFamily: Fonts.PlayfairDisplay400Italic,
            color: '#ffffff',
            lineHeight: 31,
          }}>
          {' '}
          FACE PACKS
        </Text>
      </View>
    );
  };

  const getDescription = () => {
    return (
      <Text
        style={{
          fontSize: 16,
          fontFamily: Fonts.Assistant400,
          color: '#ffffff',
        }}>
        This summer, explore our range of some unfiltered self-care specials!
      </Text>
    );
  };

  const OfferData = [
    {
      offerValue: '70',
      banner: image.HomeCarousel1,
      heading: () => getOfferTitleHeading(),
      description: () => getDescription(),
    },
    {
      offerValue: '70',
      banner: image.HomeCarousel,
      heading: () => getOfferTitleHeading(),
      description: () => getDescription(),
    },
  ];

  return (
    <ScrollView style={{backgroundColor: Colors.backgroundColor}}>
      {/* ==========New Trendy =========== */}
      <CommonCarousel data={NewTrendCarouselData} width={width} height={200} />
      {/* ===========Women Trend========== */}
      <WomenTrendy
        customStyle={{paddingVertical: 15}}
        data={WomenTrendCarouselData}
        title={() => (
          <Text
            style={{
              fontSize: 30,
              color: Colors.textcolor,
              marginBottom: 10,
              marginLeft: 15,
              fontFamily: Fonts.PlayfairDisplay600Italic,
            }}>
            Women
          </Text>
        )}
      />
      <Text style={Styles.BodyText}>
        A curated list of new launches for women
      </Text>
      {/* ===========Selling tab================= */}
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingHorizontal: 15,
          marginTop: 15,
        }}>
        <Chip
          title="Bestsellers"
          handleClick={() => handleClick('Bestsellers')}
          active={!!active ? active : 'Bestsellers'}
        />
        <Chip
          title="Recommended for you"
          handleClick={() => handleClick('Recommended for you')}
          active={active}
        />
      </View>
      {/* <View style={Styles.commontab}> */}
      <CommonTopTab data={dataMap1} />
      {/* </View> */}
      {/* ===========Men Trend========== */}
      <WomenTrendy
        data={WomenTrendCarouselData}
        customStyle={{paddingVertical: 15}}
        opacity={0.6}
        title={() => (
          <Text
            style={{
              fontSize: 30,
              color: Colors.textcolor,
              marginBottom: 10,
              marginLeft: 15,
              fontFamily: Fonts.PlayfairDisplay600Italic,
            }}>
            Men
          </Text>
        )}
      />
      <Text style={Styles.BodyText}>
        A curated list of new launches for women
      </Text>
      {/* ===========Selling tab================= */}
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingHorizontal: 15,
          marginTop: 15,
        }}>
        <Chip
          title="Bestsellers"
          handleClick={() => handleClick('Bestsellers')}
          active={!!active ? active : 'Bestsellers'}
        />
        <Chip
          title="Recommended for you"
          handleClick={() => handleClick('Recommended for you')}
          active={active}
        />
      </View>
      {/* <View style={Styles.commontab}> */}
      <CommonTopTab data={dataMap1} />
      {/* </View> */}
      <OfferCommonCarousel
        data={OfferData}
        // UptoText="UPTO"
        backgroundColor={'#A97A9B'}
        width={width / 1.07}
        height={420}
        customStyle={{marginVertical: 25}}
      />
      {/* ===========New Home============== */}
      <NewHome
        data={WomenTrendCarouselData}
        title={() => {
          return (
            <View style={{marginTop: 50, marginLeft: 20}}>
              <Text
                style={{
                  fontFamily: Fonts.PlayfairDisplay600Italic,
                  fontSize: 30,
                  color: Colors.textcolor,
                }}>
                New in Home
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.Assistant400,
                  fontSize: 20,
                  color: Colors.textcolor,
                }}>
                Handcrafted for your home
              </Text>
            </View>
          );
        }}
      />
      <Text style={Styles.BodyText}>
        A curated list of new launches for women
      </Text>
      {/* ===========Selling tab================= */}
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingHorizontal: 15,
          marginTop: 15,
        }}>
        <Chip
          title="Bestsellers"
          handleClick={() => handleClick('Bestsellers')}
          active={!!active ? active : 'Bestsellers'}
        />
        <Chip
          title="Recommended for you"
          handleClick={() => handleClick('Recommended for you')}
          active={active}
        />
      </View>
      {/* <View style={Styles.commontab}> */}
      <CommonTopTab data={dataMap1} />
      {/* </View> */}
      <OfferCommonCarousel
        data={OfferData}
        // UptoText="UPTO"
        backgroundColor={'#9E845D'}
        width={width / 1.07}
        height={420}
        customStyle={{marginVertical: 20}}
      />
      {/* ===========Men Trend========== */}
      <WomenTrendy
        customStyle={{paddingVertical: 15}}
        data={WomenTrendCarouselData}
        opacity={0.6}
        title={() => (
          <Text
            style={{
              fontSize: 30,
              color: Colors.textcolor,
              marginBottom: 10,
              marginLeft: 15,
              fontFamily: Fonts.PlayfairDisplay600Italic,
            }}>
            Kids
          </Text>
        )}
      />
      <Text style={Styles.BodyText}>
        A curated list of new launches for women
      </Text>
      {/* ===========Selling tab================= */}
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingHorizontal: 15,
          marginTop: 15,
        }}>
        <Chip
          title="Bestsellers"
          handleClick={() => handleClick('Bestsellers')}
          active={!!active ? active : 'Bestsellers'}
        />
        <Chip
          title="Recommended for you"
          handleClick={() => handleClick('Recommended for you')}
          active={active}
        />
      </View>
      {/* <View style={Styles.commontab}> */}
      <CommonTopTab data={dataMap1} />
      {/* </View> */}
      {/* ===========New Furniture=========== */}
      <NewFurniture
        data={NewFurnitureCarouselData}
        title={() => {
          return (
            <View style={{marginTop: 50, marginLeft: 20}}>
              <Text
                style={{
                  fontFamily: Fonts.PlayfairDisplay600Italic,
                  fontSize: 30,
                  color: Colors.textcolor,
                }}>
                New in Furniture
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.Assistant400,
                  fontSize: 20,
                  color: Colors.textcolor,
                }}>
                For every corner
              </Text>
            </View>
          );
        }}
      />
      <Text style={Styles.BodyText}>
        A curated list of new launches for women
      </Text>
      {/* ===========Selling tab================= */}
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingHorizontal: 15,
          marginTop: 15,
        }}>
        <Chip
          title="Bestsellers"
          handleClick={() => handleClick('Bestsellers')}
          active={!!active ? active : 'Bestsellers'}
        />
        <Chip
          title="Recommended for you"
          handleClick={() => handleClick('Recommended for you')}
          active={active}
        />
      </View>
      {/* <View style={Styles.commontab}> */}
      <CommonTopTab data={dataMap1} />
      {/* </View> */}
    </ScrollView>
  );
};

export default NewArrivals;
