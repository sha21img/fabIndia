import {ScrollView, Dimensions, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {Colors} from '../../../../../assets/Colors';
import {LandingPagePersonalCare} from '../../../../../constant';
import TopSwiper from '../../../../Common/TopSwiper';
import {getData} from '../../../../Common/Helper';
import NewHighlights from '../../../../Common/NewHighlights';
import CommonTitleTab from '../../../../Common/CommonTitleTab';
import HomeHeader from '../../HomeHeader';
import WomenTab from '../../Tabs.js/WomenTab';
const width = Dimensions.get('window').width;

export default function BeautyCategory(props) {
  const {title} = props.route.params;

  const [active, setActive] = React.useState('Bestsellers');
  const [dashboardData, setDashboardData] = React.useState([]);

  const [sectionsData, setSectionsData] = React.useState([]);
  const [filteredComp, setFilteredComp] = React.useState([]);
  const [Ids, setIds] = React.useState([]);
  const getInitialData = async () => {
    const response = await getData(
      'cms/pages?pageType=ContentPage&pageLabelOrId=%2Fpersonal-care&lang=en&curr=INR',
    );
    setSectionsData(response?.contentSlots?.contentSlot);

    getSections(response?.contentSlots?.contentSlot);
  };
  const getSections = data => {
    var dataa = [];
    LandingPagePersonalCare.map(sectionId => {
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
      //1
      case 'FabResponsiveGridBannerCarouselComponent':
        return <TopSwiper data={param} {...props} />;
      //  2,3,4
      case 'FabBannerCarouselComponent':
        return (
          <NewHighlights
            {...props}
            customStyle={{marginVertical: 10}}
            bgColor={{backgroundColor: '#F3E0E0'}}
            data={param}
          />
        );
      //5 not present

      //6
      case 'FabCMSTabContainer':
        //   return <WomenTab data={param} />;
        return <CommonTitleTab data={param} {...props} />;

      //7
      case 'SimpleResponsiveBannerComponent':
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

        console.log('split...................', splitURL.split('?')[1]);
        // let splitURL = newCode.split('=')[1];
        // console.log('Adding', splitURL);

        return (
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
              style={{height: 296, width: width}}
            />
          </TouchableOpacity>
        );

      //8,9,10 empty
      //11 not present
      //12 empty
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
          Name: `Beauty Products`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `PC offer`,
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://apisap.fabindia.com/medias/pc-lpsec1-mob-6jan23-1.jpg?context=bWFzdGVyfHJvb3R8NzU4MjF8aW1hZ2UvanBlZ3xoMzkvaDgwLzkxNDg4NDEwMDA5OTAvcGMtbHBzZWMxLW1vYi02amFuMjMtMS5qcGd8ZWE4NTU3YzQ4NjJkOWU0MTRiYjI5ZDBlMWE2NGNhMGRiMzA2ZWUyOGFiYzM5MjE0NWM0MDMyNDA3MWNkZTgzZQ',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:personal-care',
        sortorder: 3,
        title: `PC offer`,
        updatedAt: '2023-01-03T05:59:51.683Z',
      },
      {
        _id: '63aae8c115519f83a5972b4a',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Personal Care',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: 'Winter Essentials',
        createdAt: '2022-12-27T12:44:49.616Z',
        image:
          'https://apisap.fabindia.com/medias/pc-lpsec1-mob-19dec22-2.1.jpg?context=bWFzdGVyfHJvb3R8MTkxOTUwfGltYWdlL2pwZWd8aGJkL2hkOS85MTI2ODU1MjQ1ODU0L3BjLWxwc2VjMS1tb2ItMTlkZWMyMi0yLjEuanBnfDRkYTE4ZTUyNzA4ZGRkOGZhMTYzZjIxMGE5MmQ4OWZkZTVjZWE5YmUxYzZkNzliNWE2MTg2NmI1ODhmMmZkNjk',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:personal-care-promo',
        sortorder: 11,
        title: 'Winter Essentials',
        updatedAt: '2023-01-03T05:59:51.680Z',
      },
      {
        _id: '63ac4371f6a2493189ca4048',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Beauty Products',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: 'Self Love',
        createdAt: '2022-12-28T13:24:01.900Z',
        image:
          'https://apisap.fabindia.com/medias/pc-lpsec1-mob-19dec22-3.1.jpg?context=bWFzdGVyfHJvb3R8MTAzMzMyfGltYWdlL2pwZWd8aDg0L2g4NC85MTI2ODU0ODUyNjM4L3BjLWxwc2VjMS1tb2ItMTlkZWMyMi0zLjEuanBnfDMzODIwNWNiYzJkZWQyNTU1ZWViODUyNDZjMWMyNjE3YzMwZmM4NTdhOTBmMTEyYWM3NTdjODQ4NGQzZjczMWQ',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:personal-care',
        sortorder: 5,
        title: 'Self Love',
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
      {
        _id: '63ae63e3ce2829923f67fdf1',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Fragrance Oils`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `Fragrance Oils`,
        createdAt: '2022-12-30T04:06:59.301Z',
        image:
          'https://apisap.fabindia.com/medias/pc-lpsec1-mob-19dec22-4.1.jpg?context=bWFzdGVyfHJvb3R8NzY3MDF8aW1hZ2UvanBlZ3xoZWQvaGQyLzkxMjY4NTUwNDkyNDYvcGMtbHBzZWMxLW1vYi0xOWRlYzIyLTQuMS5qcGd8NDE0NjBlYmMwNzM3OTdmMzVhOGU2YjQ1OTQ4MWVlYzc1Y2FlNjdjMjE3OTIzMWVhYjhmYzQwNmFkYmRkZjUxOQ',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:fragrance-oils',
        sortorder: 9,
        title: `Fragrance Oils`,
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
    ],
    NewInFace: [
      {
        _id: '63aaf1d415519f83a5972ba7',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/pc-lpsec2-15oct22-1.jpg?context=bWFzdGVyfHJvb3R8MTA1NzY5fGltYWdlL2pwZWd8aDI0L2g5Yi85MDkwMjE4ODUyMzgyL3BjLWxwc2VjMi0xNW9jdDIyLTEuanBnfGJiZTk0MzA4ZDVmODJlYjFmOTZmNGFhMjNhZTU1YzNjMzQzYmU2ODI2OWZlMWE3YTlkZWM0NGJiOGI5OWU3OWM',
        landingPage: ':relevance:allCategories:living-tables',
        category: '63aad98915519f83a5972aa6',
        sortorder: 17,
        title: `Cleaning`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:23:32.461Z',
        updatedAt: '2022-12-30T13:20:41.484Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: `Face Care`,
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: `/Face`,
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63ae833abcb1a02702f7bde6',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/pc-lpsec2-15oct22-2.jpg?context=bWFzdGVyfHJvb3R8MTUxMjcxfGltYWdlL2pwZWd8aDIyL2g5ZS85MDkwMjE4OTE3OTE4L3BjLWxwc2VjMi0xNW9jdDIyLTIuanBnfGQ4MzdmNGE1ZWFiMzkyY2ZlNDg1YmUxOWIzYzQ5ODA5NGE4MjA2ZjI1ODEzNzgyOTViYzZlZDQ4ODAwMWU3NDk',
        landingPage: ':relevance:allCategories:toners',
        category: '63aad98915519f83a5972aa6',
        sortorder: 105,
        title: `Toning`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-30T06:20:42.160Z',
        updatedAt: '2022-12-30T13:20:53.919Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Toners',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Face',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63ae833abcb1a02702f7bde6',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/pc-lpsec2-15oct22-3.jpg?context=bWFzdGVyfHJvb3R8MTQ2Mzg5fGltYWdlL2pwZWd8aGU0L2g5ZS85MDkwMjE4OTgzNDU0L3BjLWxwc2VjMi0xNW9jdDIyLTMuanBnfGU5ZjRjNWUzNjRiYTFlM2YxNGExNDU5NzdlNzdkZDQ4YjdmMDg5ZDJiYzdlYzJmZmJlZGZlOGYxOWY1MDQyYmY',
        landingPage: ':relevance:allCategories:ottomans-stools',
        category: '63aad98915519f83a5972aa6',
        sortorder: 105,
        title: `Moisturising`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-30T06:20:42.160Z',
        updatedAt: '2022-12-30T13:20:53.919Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Face Creams',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Face',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63ae833abcb1a02702f7bde6',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/pc-lpsec2-15oct22-4.jpg?context=bWFzdGVyfHJvb3R8ODkxMjh8aW1hZ2UvanBlZ3xoOGQvaGU5LzkwOTAyMTkwNDg5OTAvcGMtbHBzZWMyLTE1b2N0MjItNC5qcGd8MzlkMjAwMTkxMjU1NDM3ZWFlOGU2ODEwNGI5NTgyYTE2NjU3OTk1ZDk2ZjA3N2NiMjJiMWNhMWFjMmQ4NDI3MQ',
        landingPage: ':relevance:allCategories:sunscreens',
        category: '63aad98915519f83a5972aa6',
        sortorder: 105,
        title: `Sun Protection`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-30T06:20:42.160Z',
        updatedAt: '2022-12-30T13:20:53.919Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Sunscreens',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Face',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63ae8358bcb1a02702f7bdef',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/pc-lpsec2-15oct22-5.jpg?context=bWFzdGVyfHJvb3R8OTczNTJ8aW1hZ2UvanBlZ3xoOWUvaGVjLzkwOTAyMTkxMTQ1MjYvcGMtbHBzZWMyLTE1b2N0MjItNS5qcGd8ZGFlMjhhMzM2YzVmODljNGI5YTdkYjBkNWQ1Mjg4ZTE5ZTQxZjEyNTcwMmQ5Mjg3MWI0NGIyYWMzY2YwYzFmZQ',
        landingPage: ':relevance:allCategories:lip-butter',
        category: '63aad98915519f83a5972aa6',
        sortorder: 106,
        title: 'Lip Care',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-30T06:21:12.899Z',
        updatedAt: '2022-12-30T13:21:02.098Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Lip Butter',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Face',
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    NewInBath: [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/pc-lpsec3-15oct22-1.jpg?context=bWFzdGVyfHJvb3R8Nzg4ODB8aW1hZ2UvanBlZ3xoNjAvaGVkLzkwOTAyMTkxODAwNjIvcGMtbHBzZWMzLTE1b2N0MjItMS5qcGd8ODkyMDIxYzkyMmQ4NDcwMDJhMTJlMzVkZmRlNWNiNDI1NGVmY2E0NTdhYTA0YjE2MTg3MDg1Nzc0NGFiMjFhYw',
        landingPage:
          ':creationtime-desc:allCategories:face:ibmCategories:Face Scrubs:ibmCategories:Face Washes',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Cleaning',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Face Care',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Bath And Body',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/pc-lpsec3-15oct22-2.jpg?context=bWFzdGVyfHJvb3R8OTIxNDF8aW1hZ2UvanBlZ3xoNWQvaGYwLzkwOTAyMTkyNDU1OTgvcGMtbHBzZWMzLTE1b2N0MjItMi5qcGd8Njg4MDY5MWYwMzU5Y2Y1NzdiODc0MTBlMjRmYzFlMzMyYzBhNDI1MzYxYzU1MDQ2MTEwZWJjMDI5MzAyYTBiOA',
        landingPage:
          ':creationtime-desc:allCategories:bath-body:ibmCategories:Hand & Body Lotions:ibmCategories:Body Butter:ibmCategories:Hand & Foot Creams:ibmCategories:Body Oil',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Moisturising',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Bath Body',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Bath And Body',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63ae8358bcb1a02702f7bdef',
        image:
          'https://apisap.fabindiahome.com/medias/pc-lpsec3-15oct22-3.jpg?context=bWFzdGVyfHJvb3R8ODgzNjh8aW1hZ2UvanBlZ3xoNmYvaGYzLzkwOTAyMTkzMTExMzQvcGMtbHBzZWMzLTE1b2N0MjItMy5qcGd8ZTBkY2MxMzFhNTQyMmM1YzI1ZjY3YzQ1M2MzZjhkYTBlY2Q2NWI4YTFhZjFmZjYzMzgzYTkxMzZmMjI3NmQyNQ',
        landingPage: ':relevance:allCategories:fragrance-oils',
        category: '63aad98915519f83a5972aa6',
        sortorder: 106,
        title: 'Fragrance',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-30T06:21:12.899Z',
        updatedAt: '2022-12-30T13:21:02.098Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Fragrance Oils',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Bath And Body',
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    NewInHair: [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/pc-lpsec4-15oct22-1.jpg?context=bWFzdGVyfHJvb3R8MTI1NTg2fGltYWdlL2pwZWd8aDFjL2hmNC85MDkwMjE5Mzc2NjcwL3BjLWxwc2VjNC0xNW9jdDIyLTEuanBnfDJiMDQ2YWUyMWY2Zjc5Yzk2MGEwZjZhMjc0NGRjYjg1YWM1ZTNjM2FhMzBlYmQ1N2FjODRmZWZmN2M5MDkzZmU',
        landingPage: ':relevance:allCategories:hair-oils',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Oiling',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Hair Oils',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Hair',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/pc-lpsec4-15oct22-2.jpg?context=bWFzdGVyfHJvb3R8OTUwODF8aW1hZ2UvanBlZ3xoMmUvaGY3LzkwOTAyMTk0NDIyMDYvcGMtbHBzZWM0LTE1b2N0MjItMi5qcGd8ZWNiNmM1NjdjZjE1MmY5Y2U0ODc4NjBlMzBjZGM0NzlmNzYyMjgzZDU4ZjgwN2IxYTI1ZjRkZjZmNmM5NmNlMw',
        landingPage: ':relevance:allCategories:shampoos',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Cleaning',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Shampoos',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Hair',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/pc-lpsec4-15oct22-3.jpg?context=bWFzdGVyfHJvb3R8ODAwMjV8aW1hZ2UvanBlZ3xoMmMvaGZhLzkwOTAyMTk1MDc3NDIvcGMtbHBzZWM0LTE1b2N0MjItMy5qcGd8MmMzOWY4NmE2NDgxOGUwODY1NTJhZmMwZDU0MjEwZDg0ZGQxYTE1M2U2Yzg4MGM2MzBiZmNhM2UxMjllYjE5Nw',
        landingPage: ':relevance:allCategories:conditioners',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Conditioning',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Conditioners',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Hair',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/pc-lpsec4-15oct22-4.jpg?context=bWFzdGVyfHJvb3R8OTA2MDd8aW1hZ2UvanBlZ3xoZWQvaGZhLzkwOTAyMTk1NzMyNzgvcGMtbHBzZWM0LTE1b2N0MjItNC5qcGd8NTk3ZjJhNzQ0NWFjYjZmZDkwMDBkZDI4NTg0MDU0ZWE4OThkZjI0ZDA2ZjYyZjkzYzBmZmNlNTg5ZDE2NGM2Mg',
        landingPage: ':relevance:allCategories:hair-masks-henna',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Nourshing',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Hair Masks and Henna',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Hair',
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    CircleBanner: [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/pc-lpsec7-mob-19oct22.jpg?context=bWFzdGVyfHJvb3R8NjYxODZ8aW1hZ2UvanBlZ3xoMGMvaDE3LzkwOTExMDc1MjA1NDIvcGMtbHBzZWM3LW1vYi0xOW9jdDIyLmpwZ3w5NTc1M2IxYjJiMTJkZjFmNGMxMGI3OGExNmRmMzRlMzhmZDVjMjU3YWY0MWUzM2U4YWEyYjc5NDgyODg2NzFm',
        landingPage: 'fabessentials',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Circle of Kindness`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: `Fabessentials`,
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: `Circle of Kindness`,
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
  };
  const HomPageSections = {
    topSwiper: 'topSwiper',
    NewInFace: 'NewInFace',
    NewInBath: 'NewInBath',
    NewInHair: 'NewInHair',
    CircleBanner: 'CircleBanner',
  };
  return (
    <>
      <HomeHeader
        customViewStyle={{backgroundColor: '#FFFFFF'}}
        {...props}
        headertext={title}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: Colors.backgroundColor,
          paddingBottom: 20,
          flexGrow: 1,
        }}>
        {/* {filteredComp.map(item => {
          return checkSwitch(item);
        })} */}
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
          data={data?.[HomPageSections.NewInFace]}
        />
        <NewHighlights
          {...props}
          isSap={true}
          isAdmin2={'isAdmin2'}
          customStyle={{marginVertical: 20}}
          bgColor={{backgroundColor: '#F3E0E0'}}
          data={data?.[HomPageSections.NewInBath]}
        />
        <NewHighlights
          isSap={true}
          {...props}
          isAdmin2={'isAdmin2'}
          customStyle={{marginVertical: 20}}
          bgColor={{backgroundColor: '#F3E0E0'}}
          data={data?.[HomPageSections.NewInHair]}
        />
        <WomenTab data={filteredComp[0]} {...props} />

        <TouchableOpacity
          style={{marginTop: 20}}
          activeOpacity={0.9}
          onPress={() =>
            props.navigation.navigate('LandingPageSaris_Blouses', {
              code: data?.[HomPageSections.CircleBanner][0].landingPage,
              title: data?.[HomPageSections.CircleBanner][0].title,
              isAdmin2: 'isAdmin2',
            })
          }>
          <Image
            resizeMode="stretch"
            source={{
              uri: data?.[HomPageSections.CircleBanner][0].image,
            }}
            style={{height: 215, width: width}}
          />
        </TouchableOpacity>
      </ScrollView>
    </>
  );
}
