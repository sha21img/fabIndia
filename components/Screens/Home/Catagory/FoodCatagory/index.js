import {
  Text,
  FlatList,
  Dimensions,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';
import {LandingPageL1Food} from '../../../../../constant';
import CommonCarousel from '../../../../Common/CommonCarousel';
import TopSwiper from '../../../../Common/TopSwiper';
import {getData} from '../../../../Common/Helper';
import CollectionCard from '../../../../Common/CollectionCard';
import SingleBanner from '../../../../Common/SingleBanner';
import WomenTab from '../../Tabs.js/WomenTab';
import LifeStyle from '../../../../Common/LifeStyle';
import NewHighlights from '../../../../Common/NewHighlights';
import CommonTitleTab from '../../../../Common/CommonTitleTab';
import HomeHeader from '../../HomeHeader';
import CommonImageGrid from '../../../../Common/CommonImageGrid';
import FoodImageGrid from './FoodImageGrid';
const width = Dimensions.get('window').width;

export default function FoodCatagory(props) {
  const {title} = props.route.params;

  const [filteredComp, setFilteredComp] = useState([]);

  const getInitialData = async () => {
    const response = await getData(
      'cms/pages?pageType=ContentPage&pageLabelOrId=%2FFood&lang=en&curr=INR',
    );
    getSections(response?.contentSlots?.contentSlot);
  };
  const getSections = data => {
    var dataa = [];
    LandingPageL1Food.map(sectionId => {
      const filter = data.find(item => {
        return item.position == sectionId;
      });
      dataa.push(filter?.components?.component[0]);
    });
    setFilteredComp(dataa);
  };

  React.useEffect(() => {
    getInitialData();
  }, []);
  const checkSwitch = param => {
    switch (param?.typeCode) {
      case 'FabResponsiveGridBannerCarouselComponent':
        return <TopSwiper data={param} />;
      case 'FabBannerCarouselComponent':
        return (
          <NewHighlights
            {...props}
            customStyle={{marginVertical: 10}}
            bgColor={{backgroundColor: '#F3E0E0'}}
            data={param}
          />
        );
      case 'FabOffersGridBannerCarouselComponent':
        return (
          <LifeStyle
            {...props}
            // data={LifeStyleData}
            data={param}
            // title={GetLifeStyleTitle}
            backgroundColor="#F8F2EF"
          />
        );
      case 'FabTitleCMSTabContainer':
        return <CommonTitleTab data={param} {...props} />;
      case 'FabCMSTabContainer':
        return (
          <WomenTab data={param} {...props} />

          // <CommonCarousel data={param} width={width / 1.07} height={330} />
        );
      case 'SimpleResponsiveBannerComponent':
        console.log('Food category', param);
        const newCode = param.urlLink;
        let splitURL = newCode.split('/');
        splitURL = splitURL[splitURL.length - 1];
        let a = splitURL.split('?');
        console.log('paramparamparamparamparamparam', param);
        const newId = {
          code: a[a.length - 1].includes('query') ? a[1] : a[0],
          status: a[a.length - 1].includes('query'),
          title: param.title,
          // title: filteredObj.title || filteredObj.media.mobile.altText,
        };
        return (
          // <TouchableOpacity
          //   onPress={() =>
          //     props.navigation.navigate('LandingPageSaris_Blouses', {
          //       code: splitURL.split('?')[0],
          //       title: param.media.mobile.altText,
          //     })
          //   }>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() =>
              props.navigation.navigate('LandingPageSaris_Blouses', newId)
            }>
            <Image
              resizeMode="stretch"
              source={{
                uri: `https://apisap.fabindia.com/${param.media.mobile.url}`,
              }}
              style={{height: 238, width: width}}
            />
          </TouchableOpacity>
        );
      // section8 grid
      //section 9 empty
      case 'FabResponsiveBannerCarouselComponent':
        return <SingleBanner data={param} {...props} />;

      case 'FabBannerResponsiveCarouselComponent':
        return (
          <CommonCarousel
            {...props}
            data={param}
            width={width / 1.07}
            height={200}
            customStyle={{marginVertical: 20}}
          />
        );
      case 'FabBannerL1ResponsiveCarouselComponent':
        return (
          <>
            <Text
              style={{
                marginLeft: 15,
                fontFamily: Fonts.PlayfairDisplay600Italic,
                fontSize: 20,
                color: Colors.textcolor,
                marginBottom: 10,
              }}>
              Collections
            </Text>
            <CollectionCard data={param} {...props} />
          </>
        );
      // CollectionCard
      // case 'CMSFlexComponent':
      //   return;
      default:
        return;
    }
  };
  const data = {
    topSwiper: [
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Food`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `Food Ginger`,
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://apisap.fabindia.com/medias/of-lpsec1-mob-15dec22-1.jpg?context=bWFzdGVyfHJvb3R8ODk1OTN8aW1hZ2UvanBlZ3xoYjgvaDE2LzkxMjYwMDE1MDgzODIvb2YtbHBzZWMxLW1vYi0xNWRlYzIyLTEuanBnfDliNGZmNjI0M2E2MDM1MDljNmE1NjhkZWY3N2M5MzBjOWVjMzUxM2FiMjNmMjAxNzdiYjE4MWVlODM0OTlhZWM',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:food-promo',
        sortorder: 3,
        title: `Food Ginger`,
        updatedAt: '2023-01-03T05:59:51.683Z',
      },
      {
        _id: '63aae8c115519f83a5972b4a',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Essentials',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: 'Essentials',
        createdAt: '2022-12-27T12:44:49.616Z',
        image:
          'https://apisap.fabindia.com/medias/of-lpsec1-mob-28dec22-2.jpg?context=bWFzdGVyfHJvb3R8NTc3Mzd8aW1hZ2UvanBlZ3xoOWUvaGFlLzkxMjk4MDI1MzA4NDYvb2YtbHBzZWMxLW1vYi0yOGRlYzIyLTIuanBnfDViYjEyY2M4NTFjMGVjMWQ1M2JiOTljOGE1ODM3ZTkyOTJlNWFlMzhjMDA2MjYxYzQ4NTA4YTUxZWI1MDA0Yjk',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:essentials',
        sortorder: 11,
        title: 'Essentials',
        updatedAt: '2023-01-03T05:59:51.680Z',
      },
      {
        _id: '63ac4371f6a2493189ca4048',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Sweeteners',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: 'Organic Food',
        createdAt: '2022-12-28T13:24:01.900Z',
        image:
          'https://apisap.fabindia.com/medias/of-lpsec1-mob-28dec22-3.jpg?context=bWFzdGVyfHJvb3R8NTgzNjZ8aW1hZ2UvanBlZ3xoZTEvaGE3LzkxMjk4MDI3Mjc0NTQvb2YtbHBzZWMxLW1vYi0yOGRlYzIyLTMuanBnfDVmODFmNDU2MzRjNDNmZmNjMTM2ODFkNDRjNTEyMTQxZDA1NjRlYzlmZTM2OTViMGU5ODE4M2QzYTVlMzRkYzE',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:sweeteners',
        sortorder: 5,
        title: 'Organic Food',
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
      {
        _id: '63ae63e3ce2829923f67fdf1',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Driedfruits, Nuts and Seeds`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `Dry Fruits`,
        createdAt: '2022-12-30T04:06:59.301Z',
        image:
          'https://apisap.fabindia.com/medias/of-lpsec1-mob-28dec22-4.jpg?context=bWFzdGVyfHJvb3R8NTgzNzF8aW1hZ2UvanBlZ3xoMTAvaGExLzkxMjk4MDI5MjQwNjIvb2YtbHBzZWMxLW1vYi0yOGRlYzIyLTQuanBnfGE4ODdjYTMzM2IxZmUyYmNlNTEyNjAxMjRlMTQzYzQzZjg5MzkzMmI4OTFkNTE3ZjhiMmNjY2EyYTc1NTIwZWE',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:sale-home-living',
        sortorder: 9,
        title: `Dry Fruits`,
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
    ],
    NewInEssentials: [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/food-clp-sec2img2?context=bWFzdGVyfGltYWdlc3w3NTUyOHxpbWFnZS9qcGVnfGhjYi9oMDEvODkxMDgxMTYyNzU1MC9mb29kLWNscC1zZWMyaW1nMnw4Y2M4NDAxMzdmMjQ0MTZiZDNjNDE2MWRmOTlhMzc1ZmU2NTMzYjYyZmJiYzU3ZDliODFlOTMwZWE3OTE0YWE2',
        landingPage: ':relevance:allCategories:sweeteners',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Sweeteners`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: `Sweeteners`,
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: `/Essentials`,
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaf1d415519f83a5972ba7',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/food-clp-sec2img3?context=bWFzdGVyfGltYWdlc3w4MzY5MnxpbWFnZS9qcGVnfGg4ZC9oMDIvODkxMDgxMTY5MzA4Ni9mb29kLWNscC1zZWMyaW1nM3xlNDI2NzBhNTQ3MmMwODA5YWViYmYxZDc2MzVlMzc4NzU5OGJlODliYTAwOGY5MDEwNWVlMDRlZTIxZjA3MTky',
        landingPage: ':relevance:allCategories:rice-flour-grains-pulses',
        category: '63aad98915519f83a5972aa6',
        sortorder: 17,
        title: `Flour, Grains & Pulses`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:23:32.461Z',
        updatedAt: '2022-12-30T13:20:41.484Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: `Flour, Grains & Pulses`,
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: `/Essentials`,
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63ae833abcb1a02702f7bde6',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/food-clp-sec2img4?context=bWFzdGVyfGltYWdlc3w3NDI2NnxpbWFnZS9qcGVnfGgzMy9oMDUvODkxMDgxMTcyNTg1NC9mb29kLWNscC1zZWMyaW1nNHwxMzhlMzQzOTM1YjIzMDgzZGQzZDAxZGUwNDA0MWMyMjk5NjQxZmE5M2NhZDU4ZmY1ZGFmOTFlNWM2NDQ4ZWVk',
        landingPage: ':relevance:allCategories:spices-masalas',
        category: '63aad98915519f83a5972aa6',
        sortorder: 105,
        title: `Spices`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-30T06:20:42.160Z',
        updatedAt: '2022-12-30T13:20:53.919Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Spices and Masalas',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Essentials',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63ae8358bcb1a02702f7bdef',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/food-clp-sec2img1?context=bWFzdGVyfGltYWdlc3w2NjYyNXxpbWFnZS9qcGVnfGgzNi9oMDIvODkxMDgxMTY2MDMxOC9mb29kLWNscC1zZWMyaW1nMXw5MGRmNjJlODI1Y2ExYTFiY2NlNzlkOTliZWEwMmJkMWE2OTA3MDdiMjU0OWQ2YmJjNDBhZTYwNDEwNjk2YzMz',
        landingPage: ':relevance:allCategories:oil-ghee-butter',
        category: '63aad98915519f83a5972aa6',
        sortorder: 106,
        title: 'Oil, Ghee & Butter',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-30T06:21:12.899Z',
        updatedAt: '2022-12-30T13:21:02.098Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Oil, Ghee and Butter',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Essentials',
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    NewInSnaks: [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/food-clp-sec3img3?context=bWFzdGVyfGltYWdlc3w3MjEwN3xpbWFnZS9qcGVnfGgyNC9oNmMvODkxMDgxMjY3NjEyNi9mb29kLWNscC1zZWMzaW1nM3xlODNjOGYwNzc3NGViYmRkNzY5MWU5MmYyZTM1MmY2MjUyNTMzODZiOWE4NTg5ZTE3ZDMwNGFhNDA5MjZmNjRj',
        landingPage: ':relevance:allCategories:powdered-drinks-soup-mixes',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Powdered Drink & Soup Mixes',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Powdered Drink & Soup Mixes',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Snacks And Instant Food',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/food-clp-sec3img4?context=bWFzdGVyfGltYWdlc3w4MTEwOHxpbWFnZS9qcGVnfGhjYS9oNmUvODkxMDgxMjcwODg5NC9mb29kLWNscC1zZWMzaW1nNHxjNTYyNmQ3MjVlY2RhMzlhNmZkZWVkOGFjYzgzMDI0YWMzMDllYzkwMmIxNjhhMWRjYjg5NTY3Y2ZhZTIwOWRk',
        landingPage: ':relevance:allCategories:pasta-noodles',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Pasta & Noodles',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Pasta & Noodles',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Snacks And Instant Food',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/food-clp-sec3img5?context=bWFzdGVyfGltYWdlc3w3Mjc1NnxpbWFnZS9qcGVnfGg4Yy9oNmYvODkxMDgxMjc3NDQzMC9mb29kLWNscC1zZWMzaW1nNXw5ZGQyNTE4MWQ0YmQyMDdlOTQyMmU2M2NiNjg2NjA2NTk5MWNjZTczODlmZWMwOWU1MTkxOTg4N2YyZGVkMTQw',
        landingPage: ':relevance:allCategories:dried-fruits-nuts-seeds',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Dried Fruits, Nuts & Seeds',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Dried Fruits, Nuts & Seeds',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Snacks And Instant Food',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/food-clp-sec3img1?context=bWFzdGVyfGltYWdlc3w4NTg2NHxpbWFnZS9qcGVnfGhjZC9oNmIvODkxMDgxMjY0MzM1OC9mb29kLWNscC1zZWMzaW1nMXxkYTlmOWVkMDZmMjZmZmJkMTUyZDRjYmZjYzFiYmI1MzBmZWMyOWNlYWRiZjA1MmI4NjBlZDlhODFlMDkyOGI4',
        landingPage: ':relevance:allCategories:snacks-health-bars',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Snacks & Health Bars',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Snacks & Healthbars',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Snacks And Instant Food',
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    NewInCondiments: [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/food-clp-sec4img2?context=bWFzdGVyfGltYWdlc3w2MzE2MnxpbWFnZS9qcGVnfGgyMy9oZDkvODkxMDgxMzc1NzQ3MC9mb29kLWNscC1zZWM0aW1nMnwxMGQzNWEyN2EwYzM1YTRhZWQxYjFhZWMzYjFkYWJhZDYzYTI1ZjM2NGRlNzQ2ZGQ2MmM1MTA5YTliNDUyNGRj',
        landingPage: ':relevance:allCategories:salad-dressings-vinegars',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Salad Dressings & Vinegars',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Salad Dressings & Vinegars',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Condiments',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/food-clp-sec4img3?context=bWFzdGVyfGltYWdlc3w3MTQzOXxpbWFnZS9qcGVnfGg4ZC9oZDkvODkxMDgxMzc5MDIzOC9mb29kLWNscC1zZWM0aW1nM3w1MGVhMTZlMTJmOTM3YzRmMDhkNWJkN2ViZTI1OWYwYTFlMDk2YWVlOTFiYjk5N2UxMjEzYmEzMTk2ZmQwY2Q4',
        landingPage: ':relevance:allCategories:herbs',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Herbs',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Herbs',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Condiments',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaf1d415519f83a5972ba7',
        image:
          'https://apisap.fabindiahome.com/medias/food-clp-sec4img4?context=bWFzdGVyfGltYWdlc3w3MjM3MnxpbWFnZS9qcGVnfGg2Ny9oN2YvODkxMDg0NjU5MTAwNi9mb29kLWNscC1zZWM0aW1nNHxjMDNmZmQ5MDc5ODUxNDJiMmI1ZGE5MWMyZDg2YzhmOTM1YWNmNjA1YzRhZjU4MGYxNzVmMGNmY2ZiODZmYTli',
        landingPage: ':relevance:allCategories:pickles-chutneys',
        category: '63aad98915519f83a5972aa6',
        sortorder: 17,
        title: 'Pickles & Chutneys',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:23:32.461Z',
        updatedAt: '2022-12-30T13:20:41.484Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Pickles & Chutneys',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Condiments',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaf1d415519f83a5972ba7',
        image:
          'https://apisap.fabindiahome.com/medias/food-clp-sec4img5?context=bWFzdGVyfGltYWdlc3w2OTUxM3xpbWFnZS9qcGVnfGgwZC9oODIvODkxMDg0NjYyMzc3NC9mb29kLWNscC1zZWM0aW1nNXxkYjhkYTM1YTE2NDQ1YzQxODZlODgzNmYxZjAyZDJiOWQ2N2M0NTU0ZTFkMWFlYTE3ZmUxYmQ5OWQxYjBiZGQ3',
        landingPage: ':relevance:allCategories:sauces',
        category: '63aad98915519f83a5972aa6',
        sortorder: 17,
        title: 'Sauces',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:23:32.461Z',
        updatedAt: '2022-12-30T13:20:41.484Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Sauces',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Condiments',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63ae8358bcb1a02702f7bdef',
        image:
          'https://apisap.fabindiahome.com/medias/food-clp-sec4img1?context=bWFzdGVyfGltYWdlc3w4NzQ4M3xpbWFnZS9qcGVnfGhjYi9oZDgvODkxMDgxMzcyNDcwMi9mb29kLWNscC1zZWM0aW1nMXxmZDNiMDVlY2Q3ZWJlNzdjZWM2OWNmNjVlZWUyMjZiNTljOTQyMmMzOWE3Y2U0ODkyYThkZGE5OGY0YTE2NWU4',
        landingPage: ':relevance:allCategories:seasonings',
        category: '63aad98915519f83a5972aa6',
        sortorder: 106,
        title: 'Seasonings',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-30T06:21:12.899Z',
        updatedAt: '2022-12-30T13:21:02.098Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Seasonings',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Condiments',
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    Beverages: [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/Panel-5Conserves-.jpg?context=bWFzdGVyfHJvb3R8NDA2ODB8aW1hZ2UvanBlZ3xoZTEvaDU4LzkwMTU1NzY3NTYyNTQvUGFuZWwgNUNvbnNlcnZlcyAuanBnfDUxZjQzYzUxZTk2YWNhY2IzOWIzNWViNTkzNDk4ZjA0N2VlNjE0ZWMzYmZjYmMzYzU0MGQ2ZGZjM2U2NDk4MGU',
        landingPage: ':relevance:allCategories:conserves-marmalades',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Conserves & Marmalades`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Conserves & Marmalades',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Beverages and Preserves/Curated collection of beverages & preserves to make your day a happy one',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/Panel-5Jellies-Crushes.jpg?context=bWFzdGVyfHJvb3R8NDIyNjJ8aW1hZ2UvanBlZ3xoZjIvaDViLzkwMTU1NzY4MjE3OTAvUGFuZWwgNUplbGxpZXMgXyBDcnVzaGVzLmpwZ3w3MDMwMjIzYTA3ZDZlYTZjOWZlM2QzOTlmZjhjZmJiYzFlZjg3YWNlNTQyZTI1Y2Q4ZmUzMGJhYjczMzhmY2Nl',
        landingPage: ':relevance:allCategories:jellies-crushes',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Jellies & Crushes`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Jellies Crushes',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Beverages and Preserves/Curated collection of beverages & preserves to make your day a happy one',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/Panel-5Tea.jpg?context=bWFzdGVyfHJvb3R8NjM3MTN8aW1hZ2UvanBlZ3xoMjIvaDU1LzkwMTU1NzY2MjUxODIvUGFuZWwgNVRlYS5qcGd8Y2M4YTk1NjA4MGNjN2JhOWVmOTU4MDA0YzgzODcyMDA5MDA5Nzk4MTdiOTI2ODg0N2FhZjFiMDI2MmJlYTY0Mw',
        landingPage: ':relevance:allCategories:tea',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Tea`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Tea',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Beverages and Preserves/Curated collection of beverages & preserves to make your day a happy one',
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    NutritionBanner: [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindia.com/medias/of-lpsec-keybanner-mob-28dec22-1.jpg?context=bWFzdGVyfHJvb3R8NDQ0Nzl8aW1hZ2UvanBlZ3xoOTUvaDUyLzkxMjk4MDMxMjA2NzAvb2YtbHBzZWMta2V5YmFubmVyLW1vYi0yOGRlYzIyLTEuanBnfDkwZjdkY2UwZWNjNzk5ZTMwYWE3ZmMzYzY4ZDQwZDgzYzc4NDE1ZjNhNGMxMTY4YWVjYWY5OWM4OGRjY2I2NDU',
        landingPage: ':relevance:allCategories:health-supplements',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Health Supplements`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: `Health Supplements`,
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: `Health Supplements`,
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    SnakBanner: [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/Key-banner-M-2.jpg?context=bWFzdGVyfHJvb3R8MTIzNzYwfGltYWdlL2pwZWd8aDJjL2hiMS85MDE1NTc3MjE1MDA2L0tleSBiYW5uZXIgTSAyLmpwZ3xjMGVjYWE3M2E1ZGI1ZjllZjc3MWUwODY4N2U0NDc5NzU0ZDIyZTcyY2ViMTE1NWJjN2VmZmZhMTU0ODU3Yjhm',
        landingPage: ':relevance:allCategories:snacks-instant-food',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Snacks and Instant Food`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: `Snacks and Instant Food`,
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: `Snacks and Instant Food`,
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    AllAboutBeverages: [
      {
        _id: '63aae8c115519f83a5972b4a',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Green Tea`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `All About Beverages/Take a heavenly sip that'll soothe your soul with our selection`,
        createdAt: '2022-12-27T12:44:49.616Z',
        image:
          'https://apisap.fabindia.com/medias/Amla-Instant-Drink-Powder.jpg?context=bWFzdGVyfHJvb3R8MTIxMDV8aW1hZ2UvanBlZ3xoZGMvaGQxLzkwMTU4MDMxMTc1OTgvQW1sYSBJbnN0YW50IERyaW5rIFBvd2Rlci5qcGd8ODdhOTQ2N2M3ZDlhZDIzMDgxMTllZWU3ZWE4MGYwNDQ5YjNlZjJjOTRkZWRkZTdiOTllZTQwZGYwZDZiMmE2ZQ',
        is_enable: true,
        is_slider: true,
        landingPage: '10576333',
        sortorder: 11,
        title: `Green Tea`,
        updatedAt: '2023-01-03T05:59:51.680Z',
      },
      {
        _id: '63ac4371f6a2493189ca4048',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Ayush Kawath Teaw`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `All About Beverages/Take a heavenly sip that'll soothe your soul with our selection`,
        createdAt: '2022-12-28T13:24:01.900Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/Ayush-Kawath-Tea.jpg?context=bWFzdGVyfHJvb3R8MTUyMjJ8aW1hZ2UvanBlZ3xoYWQvaGQ4LzkwMTU4MDMzMTQyMDYvQXl1c2ggS2F3YXRoIFRlYS5qcGd8YWIyMGMxNDBjMDQ5Y2M3ZDUzZjc1ZTRiMzlmMmE0ZjcyMjI0ZGQ3NDU2YWViOTdkZTUzZTc2YjY0ZTRjM2U5Nw',
        is_enable: true,
        is_slider: true,
        landingPage: '10662064',
        sortorder: 5,
        title: `Ayush Kawath Teaw`,
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
      {
        _id: '63ae63e3ce2829923f67fdf1',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Infusion Tea`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `All About Beverages/Take a heavenly sip that'll soothe your soul with our selection`,
        createdAt: '2022-12-30T04:06:59.301Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/Fruit-Punch-Instant-Drink-Powder.jpg?context=bWFzdGVyfHJvb3R8MTI5MjV8aW1hZ2UvanBlZ3xoNmMvaGRjLzkwMTU4MDM0NDUyNzgvRnJ1aXQgUHVuY2ggSW5zdGFudCBEcmluayBQb3dkZXIuanBnfGQyZjczZDIwODc1NDZjYWZjNzkzMmQwMTQ5ODI1ZGQzZTRmMmQ1ZWEyODc1OGQ5MTlmNDJiZTZkNWQzZDM4MTY',
        is_enable: true,
        is_slider: true,
        landingPage: '10576349',
        sortorder: 9,
        title: `Infusion Tea`,
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Black Tea`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `All About Beverages/Take a heavenly sip that'll soothe your soul with our selection`,
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/Black-Darjeeling-Tea-b.jpg?context=bWFzdGVyfHJvb3R8NTAwNTB8aW1hZ2UvanBlZ3xoMmIvaGUwLzkwMTU4MDM1NzYzNTAvQmxhY2sgRGFyamVlbGluZyBUZWEtYi5qcGd8NmMwMDc2YTM5ZTY5YjI5YWYwODAyOTJiZDdiZTYxMTk4M2FjY2I3YWYwYzRkZTgyOWUyZmMzZmI0ZGM5MWQzMw',
        is_enable: true,
        is_slider: true,
        landingPage: '10576117',
        sortorder: 3,
        title: `Black Tea`,
        updatedAt: '2023-01-03T05:59:51.683Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Flavoured Tea`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `All About Beverages/Take a heavenly sip that'll soothe your soul with our selection`,
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/Ginger-Basil-Herbal-Tea.jpg?context=bWFzdGVyfHJvb3R8MTI1ODV8aW1hZ2UvanBlZ3xoM2EvaGU2LzkwMTU4MDM3MDc0MjIvR2luZ2VyIEJhc2lsIEhlcmJhbCBUZWEuanBnfDgyYmRiN2IwM2YxN2U4Njc4NzM2ODM2MDRmMTQwMGE2OTEzMWMxYzI5YWEzZjFmMmIwODAzOGRmZjZiZDFmMTk',
        is_enable: true,
        is_slider: true,
        landingPage: '10576123',
        sortorder: 3,
        title: `Flavoured Tea`,
        updatedAt: '2023-01-03T05:59:51.683Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Premium Tea`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `All About Beverages/Take a heavenly sip that'll soothe your soul with our selection`,
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/Lemon-Mint-Tea.jpg?context=bWFzdGVyfHJvb3R8MTIzMTR8aW1hZ2UvanBlZ3xoZjkvaGU5LzkwMTU4MDM4Mzg0OTQvTGVtb24gTWludCBUZWEuanBnfGI5NWNmNDVmMTViOGM4NzI2ZDJlNGRhNmM0MjY3OGI1OGY1OWRjZDE3ODY1MDVmZGViODc0ZjhhYjM2Y2Q4Mzg',
        is_enable: true,
        is_slider: true,
        landingPage: '10576131',
        sortorder: 3,
        title: `Premium Tea`,
        updatedAt: '2023-01-03T05:59:51.683Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Coffee`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `All About Beverages/Take a heavenly sip that'll soothe your soul with our selection`,
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/Premium-Tea-Dip-Bags.jpg?context=bWFzdGVyfHJvb3R8MTE1ODd8aW1hZ2UvanBlZ3xoYjgvaGVkLzkwMTU4MDM5Njk1NjYvUHJlbWl1bSBUZWEgRGlwIEJhZ3MuanBnfDk5NmViNDczYTlhN2Y2NjllMzFhODgyOTA1MTNmOTJlZjhmYzQ2NmE3MmFhOTZiMTc5NjU0OWNmNDI1NWIyNGE',
        is_enable: true,
        is_slider: true,
        landingPage: '10576118',
        sortorder: 3,
        title: `Coffee`,
        updatedAt: '2023-01-03T05:59:51.683Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Fruit Concentrates`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `All About Beverages/Take a heavenly sip that'll soothe your soul with our selection`,
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/Premium-Tulsi-Tea.jpg?context=bWFzdGVyfHJvb3R8MTE3Njd8aW1hZ2UvanBlZ3xoNzkvaGM0LzkwMTU4MDQxMDA2MzgvUHJlbWl1bSBUdWxzaSBUZWEuanBnfDZiYjc2MThkYTdhNzcyYmI3ZDUwNDU3ZmYwOWVkZTg4YThiNDNiNzI0MGMzNzBmMWRjYTg3ZGMwODM2Y2JlMDU',
        is_enable: true,
        is_slider: true,
        landingPage: '10576537',
        sortorder: 3,
        title: `Fruit Concentrates`,
        updatedAt: '2023-01-03T05:59:51.683Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Powdered Drinks`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `All About Beverages/Take a heavenly sip that'll soothe your soul with our selection`,
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/Tomato-Soup.jpg?context=bWFzdGVyfHJvb3R8MTE3NTR8aW1hZ2UvanBlZ3xoYmEvaGMwLzkwMTU4MDQyMzE3MTAvVG9tYXRvIFNvdXAuanBnfDUwZTE5MzVlOGY2NTRlNjljN2VhZDU5MTQ3MmQyZTRiNDg2MmYwNjY1MDdiYTE3YTgyMGM0MTAzOWU5YTFiNzc',
        is_enable: true,
        is_slider: true,
        landingPage: '10576364',
        sortorder: 3,
        title: `Powdered Drinks`,
        updatedAt: '2023-01-03T05:59:51.683Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Tulsi Tea`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `All About Beverages/Take a heavenly sip that'll soothe your soul with our selection`,
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/Tulsi-Green-Tea-b.jpg?context=bWFzdGVyfHJvb3R8NTIwMzR8aW1hZ2UvanBlZ3xoZmIvaGJjLzkwMTU4MDQzNjI3ODIvVHVsc2kgR3JlZW4gVGVhLWIuanBnfGZmOGY3YzkyYjEyMDQzNWQ1YjNlYjQ2NzQ5NjQ3YTQxMjQ0YjljNmUxYjNlZTdhZThmM2ExMDUxNjI5ZmY1Y2Y',
        is_enable: true,
        is_slider: true,
        landingPage: '10679880',
        sortorder: 3,
        title: `Tulsi Tea`,
        updatedAt: '2023-01-03T05:59:51.683Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Soup Mixes`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `All About Beverages/Take a heavenly sip that'll soothe your soul with our selection`,
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/Tulsi-Sweet-Rose-Tea.jpg?context=bWFzdGVyfHJvb3R8MTUxOTF8aW1hZ2UvanBlZ3xoM2IvaGI5LzkwMTU4MDQ0OTM4NTQvVHVsc2kgU3dlZXQgUm9zZSBUZWEuanBnfDkwZjZkYTgyMjcyMjc1NGU5ODMxYTYxMjAxODNjNWIwZWIyZDZiMmYxNzNmMGU3MTc2NjZjM2NlMGRjNGViZTE',
        is_enable: true,
        is_slider: true,
        landingPage: '10679891',
        sortorder: 3,
        title: `Soup Mixes`,
        updatedAt: '2023-01-03T05:59:51.683Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Tea Collection`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `All About Beverages/Take a heavenly sip that'll soothe your soul with our selection`,
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/White-Darjeeling-Premium-Tea.jpg?context=bWFzdGVyfHJvb3R8MTQzMzF8aW1hZ2UvanBlZ3xoMmMvaGIzLzkwMTU4MDQ2MjQ5MjYvV2hpdGUgRGFyamVlbGluZyBQcmVtaXVtIFRlYS5qcGd8MWRiODU0MDIyZDhjOTg0MWI5M2IxMGVjNGE0ODgwOTliYzJmMmVkYmUyZDVkMTBhZWRjZDcyOGE0NmJjNjI5YQ',
        is_enable: true,
        is_slider: true,
        landingPage: '10576114',
        sortorder: 3,
        title: `Tea Collection`,
        updatedAt: '2023-01-03T05:59:51.683Z',
      },
    ],
    Condiments: [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindia.com/medias/food-clp-sec11img1?context=bWFzdGVyfGltYWdlc3w0NzcwNnxpbWFnZS9qcGVnfGgzNi9oYzYvODkxMDg1MTQwNzkwMi9mb29kLWNscC1zZWMxMWltZzF8M2YyZDI2ZWJmM2NjZWI4MTNiZjJlOTY1MzYxMjVkYmFmNmZkMWFhNGZkZmI4ODQzMGRhZGFjMTU2ZjFlYWE2ZA',
        landingPage: ':relevance:allCategories:pickles-chutneys',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Pickles & Chutneys`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Pickles & Chutneys',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Condiments, Snacks and Essentials/Give your day some added dose of taste with a range of delicious, organic choices',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindia.com/medias/food-clp-sec11img3?context=bWFzdGVyfGltYWdlc3w0MzYzMXxpbWFnZS9qcGVnfGhkYy9oYzgvODkxMDg1MTM3NTEzNC9mb29kLWNscC1zZWMxMWltZzN8ODE5NjcxNDZhNDVmOWQ0Yjc3ODM5YTQ2MjMwMjdlM2IzYjhjZTU4Y2U2OWUwYmY0MzgyYzExZWM2ZGFiMjUzMg',
        landingPage: ':relevance:allCategories:oil-ghee-butter',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Oil, Ghee & Butter`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Oil, Ghee & Butter',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Condiments, Snacks and Essentials/Give your day some added dose of taste with a range of delicious, organic choices',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/food-clp-sec11img4?context=bWFzdGVyfGltYWdlc3wzOTQzMnxpbWFnZS9qcGVnfGhjZC9oYzIvODkxMDg1MTUwNjIwNi9mb29kLWNscC1zZWMxMWltZzR8NzdkNjliMjcwY2JjYTIxNzQ2YmIxZjk4YjhjYjYzY2NmMTJlYjgwMzRhZWExNTM0NDlkZGQxNmMzZWIzNDU1Yw',
        landingPage: ':relevance:allCategories:rice-flour-grains-pulses',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Flour, Grains & Pulses`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Rice, Flour, Grains & Pulses',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Condiments, Snacks and Essentials/Give your day some added dose of taste with a range of delicious, organic choices',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/food-clp-sec11img5?context=bWFzdGVyfGltYWdlc3wzODQyM3xpbWFnZS9qcGVnfGg3NC9oYzUvODkxMDg1MTQ3MzQzOC9mb29kLWNscC1zZWMxMWltZzV8NWI5Y2Q0MGU2NDhiZjk1OGFkYzYzMTNjNGZlNTZkMWUxOTNjYWJkNTljY2Q0MTNlZGMxZTEyZTVmYmY1MmVlMA',
        landingPage: ':relevance:allCategories:rice-flour-grains-pulses',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Sauces`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Sauces',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Condiments, Snacks and Essentials/Give your day some added dose of taste with a range of delicious, organic choices',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/food-clp-sec11img6?context=bWFzdGVyfGltYWdlc3w1NTg3NnxpbWFnZS9qcGVnfGg3Ny9oYzIvODkxMDg1MTUzODk3NC9mb29kLWNscC1zZWMxMWltZzZ8Y2NiN2NjZjEwNzExNDhkMTlkNTRiYjM1NDIyMmM0MjRiOWM0ZTQzMTBjNTJlMjEzMmJmYzA0N2M5NThkZTY0ZA',
        landingPage: ':relevance:allCategories:snacks-health-bars',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Snacks & Health Bars`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Snacks & Healthbars',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Condiments, Snacks and Essentials/Give your day some added dose of taste with a range of delicious, organic choices',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/food-clp-sec11img7?context=bWFzdGVyfGltYWdlc3w1MDMyMnxpbWFnZS9qcGVnfGg2NS9oYmYvODkxMDg1MTYwNDUxMC9mb29kLWNscC1zZWMxMWltZzd8NjUzNDkyNjE0YjliYzQ2Y2RiNzNjZDViMzVhYWI0YjcxMjg4OWRlNjI5NzFmZDRmZmE2YTA3NzM5MzFhOTRlMQ',
        landingPage: ':relevance:allCategories:seasonings',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Seasonings`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Seasonings',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Condiments, Snacks and Essentials/Give your day some added dose of taste with a range of delicious, organic choices',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/food-clp-sec11img2?context=bWFzdGVyfGltYWdlc3w0Nzk5NHxpbWFnZS9qcGVnfGgwZS9oYmYvODkxMDg1MTYzNzI3OC9mb29kLWNscC1zZWMxMWltZzJ8YjQ1YjkzYjM3MmZmNTc1ZjRmZTdhOTI2OTNmZTEzNTUwOTUzMGJjYWQ4NjNjNWQ4MDBkOTY0ZTA3MzNkOTc4NQ',
        landingPage: ':relevance:allCategories:dried-fruits-nuts-seeds',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Dried Fruits, Nuts & Seeds`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Dried Fruits, Nuts & Seeds',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Condiments, Snacks and Essentials/Give your day some added dose of taste with a range of delicious, organic choices',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/food-clp-sec11img8?context=bWFzdGVyfGltYWdlc3w1NzI2NnxpbWFnZS9qcGVnfGgwYy9oYzIvODkxMDg1MTU3MTc0Mi9mb29kLWNscC1zZWMxMWltZzh8ZGJmOGE3ODg0ZTBlMmEwOWU3ZWVkNzQ2Y2Y0ZDMyYTgwOTYxODYyMWY1OTNkNDRjNDdjOTViYzcwYmU5MTZmOQ',
        landingPage: ':relevance:allCategories:photo-frames',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Health Supplements`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Health Supplements',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Condiments, Snacks and Essentials/Give your day some added dose of taste with a range of delicious, organic choices',
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    FoodCarousel: [
      {
        _id: '63ac4371f6a2493189ca4048',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Snacks and Instant Food`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `Snacks and Instant Food`,
        createdAt: '2022-12-28T13:24:01.900Z',
        image:
          'https://apisap.fabindiahome.com/medias/food-clp-sec13img2?context=bWFzdGVyfGltYWdlc3wxMjEzODN8aW1hZ2UvanBlZ3xoMTQvaDY5Lzg5MTA4NTIwOTYwMzAvZm9vZC1jbHAtc2VjMTNpbWcyfDJiODY4YmRlODE2NDQ3Y2IyYzdkNzcwYjZlNmZmNjNkMWFhYzYzYTgxMzcwNzY3ODVkN2I2OWQ2YTRhNGQxZWQ',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:floor-coverings',
        sortorder: 5,
        title: `Snacks and Instant Food`,
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
      {
        _id: '63aae8c115519f83a5972b4a',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Rice, Flour, Grains and Pulses`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `Grains-Pulses`,
        createdAt: '2022-12-27T12:44:49.616Z',
        image:
          'https://apisap.fabindiahome.com/medias/food-clp-sec13img1-30aug22.jpg?context=bWFzdGVyfHJvb3R8OTExMTN8aW1hZ2UvanBlZ3xoMjIvaDM4LzkwNTM0MjIwMjY3ODIvZm9vZC1jbHAtc2VjMTNpbWcxLTMwYXVnMjIuanBnfDBjNTJiNjViNWJhM2FkY2Y3NWYwY2E3OGMzOTRlNDNkZTJmZjM2ZTlkZTkyMTU5NzQ0OTYwZWUzNjkyODY4MmM',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:rice-flour-grains-pulses',
        sortorder: 11,
        title: `IDS`,
        updatedAt: '2023-01-03T05:59:51.680Z',
      },
    ],
    Collections: [
      {
        _id: '63aae8c115519f83a5972b4a',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Spices And Masalas`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `Spices`,
        createdAt: '2022-12-27T12:44:49.616Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/food-clp-sec14img2?context=bWFzdGVyfGltYWdlc3w1MDQ0NHxpbWFnZS9qcGVnfGg4Mi9oMDAvODkxMDg1MzA3OTA3MC9mb29kLWNscC1zZWMxNGltZzJ8MjcwYmRiMGU5ZTE1ZWQ5ZDYyZjM5N2I4ZmYyYzBmYTY2OGU3NjJmNmVhMzg1Mzg1NDIwYjE0YTYwODcxZDk3Yw',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:spices-masalas',
        sortorder: 11,
        title: `Spices`,
        updatedAt: '2023-01-03T05:59:51.680Z',
      },
      {
        _id: '63ac4371f6a2493189ca4048',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Dryfruits, Seeds and Nuts`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `Seeds and Nuts`,
        createdAt: '2022-12-28T13:24:01.900Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/food-clp-sec14img3?context=bWFzdGVyfGltYWdlc3w1MjE2N3xpbWFnZS9qcGVnfGgzYy9oMDMvODkxMDg1MzExMTgzOC9mb29kLWNscC1zZWMxNGltZzN8YTY4OWYwOWE5YjA3ZDdiN2Y4MjIyZmRlMTdkYzM2MDlkMjdmYWIxN2Q3MTBhMmI0ZWMyOTFiOWM4NDEzOTc0Zg',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:dried-fruits-nuts-seeds',
        sortorder: 5,
        title: `Seeds and Nuts`,
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
      {
        _id: '63ae63e3ce2829923f67fdf1',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Condiments',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: 'Seasonings and Herbs',
        createdAt: '2022-12-30T04:06:59.301Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/food-clp-sec14img4?context=bWFzdGVyfGltYWdlc3w0ODA0MHxpbWFnZS9qcGVnfGg5My9oMDMvODkxMDg1MzE0NDYwNi9mb29kLWNscC1zZWMxNGltZzR8MTZhM2YwNjFhMTI0ZjBkMDVmMDVkN2Q2NDQ0NzczYzg5NzVlZGFlODE2NGRjYjRiMGU3ZmY1YTg0Yjg5YjBiZA',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:condiments',
        sortorder: 9,
        title: `Seasonings and Herbs`,
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Sweetners',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: 'Sweetners',
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/food-CollectionSweetners.jpg?context=bWFzdGVyfHJvb3R8NDI5ODZ8aW1hZ2UvanBlZ3xoZWQvaGIxLzkwMTU1NzcyODA1NDIvZm9vZCBDb2xsZWN0aW9uU3dlZXRuZXJzLmpwZ3w0YmY0MDNlMjU0MGQ0MjBmOGQ1NzJjZjBmOGY0MWU2Mjc4OWQ1ODkzMmNiODQzMTk0ZTM5NDFkNWZlMzJlYzNk',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:sweeteners',
        sortorder: 3,
        title: 'Sweetners',
        updatedAt: '2023-01-03T05:59:51.683Z',
      },
    ],
  };
  const HomPageSections = {
    topSwiper: 'topSwiper',
    NewInEssentials: 'NewInEssentials',
    NewInSnaks: 'NewInSnaks',
    NewInCondiments: 'NewInCondiments',
    Beverages: 'Beverages',
    NutritionBanner: 'NutritionBanner',
    AllAboutBeverages: 'AllAboutBeverages',
    SnakBanner: 'SnakBanner',
    Condiments: 'Condiments',
    FoodCarousel: 'FoodCarousel',
    Collections: 'Collections',
  };
  return (
    <>
      <HomeHeader
        customViewStyle={{backgroundColor: '#FFFFFF'}}
        {...props}
        headertext={title}
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
      <ScrollView style={{backgroundColor: 'white', flexGrow: 1}}>
        <TopSwiper
          data={data?.[HomPageSections.topSwiper]}
          {...props}
          isAdmin2={'isAdmin2'}
          isSap={true}
        />
        <NewHighlights
          isSap={true}
          {...props}
          isAdmin2={'isAdmin2'}
          customStyle={{marginVertical: 20}}
          bgColor={{backgroundColor: '#F3E0E0'}}
          data={data?.[HomPageSections.NewInEssentials]}
        />
        <NewHighlights
          isSap={true}
          {...props}
          isAdmin2={'isAdmin2'}
          customStyle={{marginVertical: 20}}
          bgColor={{backgroundColor: '#F3E0E0'}}
          data={data?.[HomPageSections.NewInSnaks]}
        />
        <NewHighlights
          {...props}
          isSap={true}
          isAdmin2={'isAdmin2'}
          customStyle={{marginVertical: 20}}
          bgColor={{backgroundColor: '#F3E0E0'}}
          data={data?.[HomPageSections.NewInCondiments]}
        />
        <LifeStyle
          isAdmin2={'isAdmin2'}
          {...props}
          customViewStyle={{marginVertical: 20}}
          data={data?.[HomPageSections.Beverages]}
          // title={GetLifeStyleTitle}
          backgroundColor="#F8F2EF"
        />
        <WomenTab data={filteredComp[0]} {...props} />
        <TouchableOpacity
          style={{marginTop: 20}}
          activeOpacity={0.9}
          onPress={() =>
            props.navigation.navigate('LandingPageSaris_Blouses', {
              code: data?.[HomPageSections.NutritionBanner][0].landingPage,
              title: data?.[HomPageSections.NutritionBanner][0].title,
              isAdmin2: 'isAdmin2',
            })
          }>
          <Image
            resizeMode="stretch"
            source={{
              uri: data?.[HomPageSections.NutritionBanner][0].image,
            }}
            style={{height: 213, width: width}}
          />
        </TouchableOpacity>
        <FoodImageGrid
          isAdmin2="isAdmin2"
          {...props}
          data={data?.[HomPageSections.AllAboutBeverages]}
        />
        <TouchableOpacity
          style={{marginTop: 20}}
          activeOpacity={0.9}
          onPress={() =>
            props.navigation.navigate('LandingPageSaris_Blouses', {
              code: data?.[HomPageSections.SnakBanner][0].landingPage,
              title: data?.[HomPageSections.SnakBanner][0].title,
              isAdmin2: 'isAdmin2',
            })
          }>
          <Image
            resizeMode="stretch"
            source={{
              uri: data?.[HomPageSections.SnakBanner][0].image,
            }}
            style={{height: 213, width: width}}
          />
        </TouchableOpacity>
        <LifeStyle
          isAdmin2={'isAdmin2'}
          {...props}
          customViewStyle={{marginVertical: 20}}
          data={data?.[HomPageSections.Condiments]}
          // title={GetLifeStyleTitle}
          backgroundColor="#F8F2EF"
        />
        <CommonCarousel
          {...props}
          isSap={true}
          data={data?.[HomPageSections.FoodCarousel]}
          width={width / 1.07}
          isAdmin2={'isAdmin2'}
          height={200}
          customStyle={{margin: 20}}
        />
        <Text
          style={{
            marginLeft: 15,
            fontFamily: Fonts.PlayfairDisplay600Italic,
            fontSize: 20,
            color: Colors.textcolor,
            marginBottom: 10,
          }}>
          Collections
        </Text>
        <CollectionCard
          isAdmin2={'isAdmin2'}
          data={data?.[HomPageSections.Collections]}
          {...props}
        />
      </ScrollView>
    </>
  );
}
