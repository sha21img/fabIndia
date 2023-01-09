import React, {useState} from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import {
  LandingPageL1Gifting,
  LandingPageL1Women,
} from '../../../../../constant';
import {getData} from '../../../../Common/Helper';
import HomeHeader from '../../HomeHeader';
import Carousel from './Carousel';
import ClassicsCards from './ClassicsCards';
import Occasion from './Occasion';
import {Image} from 'react-native';
import TopBanner from './TopBanner';
import Fonts from '../../../../../assets/fonts';
import CommonCarousel from '../../../../Common/CommonCarousel';
const width = Dimensions.get('window').width;

const GiftingCatagory = props => {
  const {title} = props.route.params;
  const [dashboardData, setDashboardData] = React.useState([]);
  const [filteredComp, setFilteredComp] = useState([]);
  const getInitialData = async () => {
    const response = await getData(
      'cms/pages?pageType=ContentPage&pageLabelOrId=%2Fgifting&lang=en&curr=INR',
    );
    setDashboardData(response?.contentSlots?.contentSlot);
    getSections(response?.contentSlots?.contentSlot);
  };
  const getSections = data => {
    var dataa = [];
    LandingPageL1Gifting.map(sectionId => {
      const filter = data.find(item => {
        return item.position == sectionId;
      });
      dataa.push(filter?.components?.component[0]);
    });
    console.log(
      'dataadataadataadataadataadataadataadataadataadataadataadataadataadataadataa',
      dataa,
    );
    setFilteredComp(dataa);
  };
  React.useEffect(() => {
    getInitialData();
  }, []);

  const checkSwitch = param => {
    console.log('param.....', param);
    switch (param?.typeCode) {
      case 'FabResponsiveBannerCarouselComponent':
        return <TopBanner data={param} {...props} />;
      case 'FabBannerResponsiveCarouselComponent':
        const newSplit = param.banners.split(' ');
        console.log('param.banners.length < 3', newSplit.length);
        if (newSplit.length < 3) {
          return (
            <Carousel
              data={param}
              customStyles={{marginVertical: 10}}
              {...props}
            />
          );
        } else {
          return <Occasion data={param} {...props} />;
        }

      case 'FabProductCarouselComponent':
        return (
          <ClassicsCards
            data={param}
            customStyles={{marginVertical: 10}}
            {...props}
          />
        );
      default:
        return;
    }
  };
  const data = {
    GiftBanner: [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/giftingpage-sec1img1?context=bWFzdGVyfGltYWdlc3w1Nzk5NzYyfGltYWdlL2pwZWd8aDc2L2g3MC85MDgwNDIzMzgzMDcwL2dpZnRpbmdwYWdlLXNlYzFpbWcxfDM0ZDZhNjQyZTJkMDJkODE5NDVkOWQ5NjNlN2RiMDE0ZDAwOTA5YTk4MWJlOGVkMjlmMDIzY2M0MzFhZTg1YzM',
        landingPage: ':relevance:allCategories:bed-linen',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `FabGifting`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: `FabGifting`,
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: `Home Bed Linen`,
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    CategoryCarousel: [
      {
        _id: '63aae8c115519f83a5972b4a',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Gift Cards`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `Gift Cards`,
        createdAt: '2022-12-27T12:44:49.616Z',
        image:
          'https://apisap.fabindiahome.com/medias/giftingPage-sec2img1?context=bWFzdGVyfGltYWdlc3wzMDcwMTl8aW1hZ2UvanBlZ3xoZGUvaDczLzkwODA0MjM0ODEzNzQvZ2lmdGluZ1BhZ2Utc2VjMmltZzF8MTI0OGY2YWI2OGFmNmU5MzU2MzgyNGMzOTZmNzk3MTBjMjk1NTMwYWFkMDU2M2I0YWQ4OWM3NzFiNDIyMGQyMQ',
        is_enable: true,
        is_slider: true,
        landingPage: 'kids sleepwear:creationtime-desc:B2CL1:Kids',
        sortorder: 11,
        title: `Gift Cards`,
        updatedAt: '2023-01-03T05:59:51.680Z',
      },
      {
        _id: '63ac4371f6a2493189ca4048',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Gift Sets`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `Gift Sets`,
        createdAt: '2022-12-28T13:24:01.900Z',
        image:
          'https://apisap.fabindiahome.com/medias/giftingPage-sec2img2?context=bWFzdGVyfGltYWdlc3wyOTMyNzR8aW1hZ2UvanBlZ3xoODUvaDc2LzkwODA0MjM1MTQxNDIvZ2lmdGluZ1BhZ2Utc2VjMmltZzJ8MmYzYWJiNDBmMTYyZTViNTAyODUxZTA4ZWRjNWQ5YWY4YzRiNDAxY2NiZWFhNTljODZmOWFiZjBiM2U5N2Q3OQ',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:gift-set',
        sortorder: 5,
        title: `Gift Sets`,
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
    ],
    Occasion: [
      {
        _id: '63ac4371f6a2493189ca4048',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Gift for home`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `Gift Sets`,
        createdAt: '2022-12-28T13:24:01.900Z',
        image:
          'https://apisap.fabindiahome.com/medias/giftingPage-sec3img1?context=bWFzdGVyfGltYWdlc3wxNDY5MDh8aW1hZ2UvanBlZ3xoMjYvaDdkLzkwODA0MzE4MzcyMTQvZ2lmdGluZ1BhZ2Utc2VjM2ltZzF8ZjAxODY3YWNhZjUxM2ZhNjc0ZTEzZWQ5ZDZmMzJhYTJkOTYyOTE2MTBkMGM0MDYwMTI2ZTI1NWI1OTU5MzZmMw',
        is_enable: true,
        is_slider: true,
        landingPage:
          ':creationtime-desc:allCategories:gift-set:giftByOccassion:Gifts for Home',
        sortorder: 5,
        title: `Gift for home`,
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
      {
        _id: '63ac4371f6a2493189ca4048',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Gifts of celebration`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `Gift Sets`,
        createdAt: '2022-12-28T13:24:01.900Z',
        image:
          'https://apisap.fabindiahome.com/medias/giftingPage-sec3img2?context=bWFzdGVyfGltYWdlc3wxNzE2NzZ8aW1hZ2UvanBlZ3xoY2YvaDdjLzkwODA0MzE4MDQ0NDYvZ2lmdGluZ1BhZ2Utc2VjM2ltZzJ8YjRlOTA1OGM1ZGY5ZjhiNWQ2YjFlZTlkYzc1MjhkZGQyZDliMGI3MWExNTM4MzI1ZGVjODhhNjM3YWNlNjc3Yg',
        is_enable: true,
        is_slider: true,
        landingPage:
          ':creationtime-desc:allCategories:gift-set:giftByOccassion:Gifts for Celebration',
        sortorder: 5,
        title: `Gifts of celebration`,
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
      {
        _id: '63ac4371f6a2493189ca4048',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Gift for gratitude`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `Gift Sets`,
        createdAt: '2022-12-28T13:24:01.900Z',
        image:
          'https://apisap.fabindiahome.com/medias/giftingPage-sec3img3?context=bWFzdGVyfGltYWdlc3wxNzE4MTF8aW1hZ2UvanBlZ3xoMjgvaDdhLzkwODA0MzE3NzE2NzgvZ2lmdGluZ1BhZ2Utc2VjM2ltZzN8ZmI0NjY2YzQ5Nzk2OTJmZmQwMjc3NDJjMzYzZDNjNjM0ODAzZDgyMmNjZjk3ZDhiNWM0NTlkOGRkNjI5YjM1OA',
        is_enable: true,
        is_slider: true,
        landingPage:
          ':creationtime-desc:allCategories:gift-set:giftByOccassion:Gifts of Gratitude',
        sortorder: 5,
        title: `Gift for gratitude`,
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
      {
        _id: '63ac4371f6a2493189ca4048',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Gift for her`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `Gift Sets`,
        createdAt: '2022-12-28T13:24:01.900Z',
        image:
          'https://apisap.fabindiahome.com/medias/giftingPage-sec3img4?context=bWFzdGVyfGltYWdlc3wyMTEwMjF8aW1hZ2UvanBlZ3xoN2QvaDdkLzkwODA0MzE4Njk5ODIvZ2lmdGluZ1BhZ2Utc2VjM2ltZzR8MDA1MjU3MzllYzM1MDUxZWU2MTM2MzhjOGU4MDdkYWIyZDUzZWIxZDFhOTJkMGZmZTc2MjUzMDdiNTYyNDk2Zg',
        is_enable: true,
        is_slider: true,
        landingPage:
          ' :creationtime-desc:allCategories:gift-set:giftByOccassion:Gifts for Her',
        sortorder: 5,
        title: `Gift for her`,
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
    ],
  };
  const GiftingSections = {
    GiftBanner: 'GiftBanner',
    CategoryCarousel: 'CategoryCarousel',
    Occasion: 'Occasion',
  };

  return (
    <>
      <HomeHeader
        customViewStyle={{backgroundColor: '#FFFFFF'}}
        {...props}
        headertext={title}
      />
      <ScrollView style={{backgroundColor: 'white', flexGrow: 1}}>
        <TouchableOpacity
          style={{marginTop: 20}}
          activeOpacity={0.9}
          // onPress={() =>
          //   props.navigation.navigate('LandingPageSaris_Blouses', {
          //     code: data?.[GiftingSections.GiftBanner][0].landingPage,
          //     title: data?.[GiftingSections.GiftBanner][0].title,
          //     isAdmin2: 'isAdmin2',
          //   })
          // }
        >
          <Image
            resizeMode="stretch"
            source={{
              uri: data?.[GiftingSections.GiftBanner][0].image,
            }}
            style={{height: 150, width: width}}
          />
        </TouchableOpacity>
        <Text
          style={{
            paddingHorizontal: 15,
            paddingTop: 25,
            fontFamily: Fonts.PlayfairDisplay600Italic,
            fontSize: 30,
          }}>
          Gift by Category
        </Text>
        <CommonCarousel
          {...props}
          isSap={true}
          data={data?.[GiftingSections.CategoryCarousel]}
          width={width / 1.07}
          isAdmin2={'isAdmin2'}
          height={200}
        />
        <Text
          style={{
            paddingHorizontal: 15,
            paddingTop: 10,
            fontFamily: Fonts.PlayfairDisplay600Italic,
            fontSize: 30,
          }}>
          Gift by Ocassion
        </Text>
        <Occasion
          data={data?.[GiftingSections.Occasion]}
          isSap={true}
          {...props}
        />

        <ClassicsCards
          data={filteredComp[0]}
          customStyles={{marginVertical: 5}}
        />
        {/* <FlatList
          contentContainerStyle={{
            backgroundColor: Colors.backgroundColor,
            paddingBottom: 20,
            flexGrow: 1,
          }}
          data={filteredComp}
          keyExtractor={(item, index) => index}
          renderItem={item => checkSwitch(item.item)}
        /> */}
      </ScrollView>
    </>
  );
};
export default GiftingCatagory;
