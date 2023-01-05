import {
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import NewHighlights from '../../../../Common/NewHighlights';
import {LandingPageL1Men, LandingPageL1Women} from '../../../../../constant';
import {Colors} from '../../../../../assets/Colors';
import CommonCarousel from '../../../../Common/CommonCarousel';
import Fonts from '../../../../../assets/fonts';
import TopSwiper from '../../../../Common/TopSwiper';
import {getData} from '../../../../Common/Helper';
import LifeStyle from '../../../../Common/LifeStyle';
import WomenTab from '../../Tabs.js/WomenTab';
import SingleBanner from '../../../../Common/SingleBanner';
import CollectionCard from '../../../../Common/CollectionCard';
import CommonImageGrid from '../../../../Common/CommonImageGrid';
import HomeHeader from '../../HomeHeader';
const width = Dimensions.get('window').width;

const MenCatagory = props => {
  const {title} = props.route.params;
  const [active, setActive] = React.useState('Bestsellers');
  const [imgActive1, setImgActive1] = React.useState(0);
  const [sectionsData, setSectionsData] = React.useState([]);
  const [filteredComp, setFilteredComp] = React.useState([]);

  const [Ids, setIds] = React.useState([]);
  const getInitialData = async () => {
    const response = await getData(
      'cms/pages?pageType=ContentPage&pageLabelOrId=%2Fmen&lang=en&curr=INR',
    );
    console.log('Men Catagory response', response);
    setSectionsData(response?.contentSlots?.contentSlot);
    // getIds(response.contentSlots.contentSlot);
    getSections(response?.contentSlots?.contentSlot);
  };
  const getSections = data => {
    var dataa = [];
    LandingPageL1Women.map(sectionId => {
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

  // const checkSwitch = param => {
  //   console.log(param);
  //   switch (param?.typeCode) {
  //     case 'FabResponsiveGridBannerCarouselComponent':
  //       return <TopSwiper data={param} />;
  //     case 'FabBannerCarouselComponent':
  //       return (
  //         <NewHighlights
  //           {...props}
  //           customStyle={{marginVertical: 10}}
  //           bgColor={{backgroundColor: '#F3E0E0'}}
  //           data={param}
  //         />
  //       );
  //     case 'FabOffersGridBannerCarouselComponent':
  //       return (
  //         <LifeStyle
  //           {...props}
  //           // data={LifeStyleData}
  //           data={param}
  //           // title={GetLifeStyleTitle}
  //           backgroundColor="#F8F2EF"
  //         />
  //       );
  //     case 'FabCMSTabContainer':
  //       return (
  //         <WomenTab data={param} {...props} />

  //         // <CommonCarousel data={param} width={width / 1.07} height={330} />
  //       );
  //     case 'SimpleResponsiveBannerComponent':
  //       const newCode = param.urlLink;
  //       let splitURL = newCode.split('/');
  //       splitURL = splitURL[splitURL.length - 1];
  //       return (
  //         <TouchableOpacity
  //           activeOpacity={0.8}
  //           style={{marginTop: 20}}
  //           onPress={() =>
  //             props.navigation.navigate('LandingPageSaris_Blouses', {
  //               code: splitURL.split('?')[0],
  //               title: param.title,
  //             })
  //           }>
  //           <Image
  //             resizeMode="stretch"
  //             source={{
  //               uri: `https://apisap.fabindia.com/${param.media.mobile.url}`,
  //             }}
  //             style={{height: 300, width: width}}
  //           />
  //         </TouchableOpacity>
  //       );

  //     // section8 grid
  //     case 'FabBannerResponsiveTableComponent':
  //       return <CommonImageGrid {...props} data={param} />;
  //     //section 9 empty
  //     case 'FabResponsiveBannerCarouselComponent':
  //       return <SingleBanner data={param} {...props} />;

  //     case 'FabBannerResponsiveCarouselComponent':
  //       return (
  //         <CommonCarousel
  //           {...props}
  //           data={param}
  //           width={width / 1.07}
  //           height={200}
  //           customStyle={{marginVertical: 20}}
  //         />
  //       );
  //     case 'FabBannerL1ResponsiveCarouselComponent':
  //       return (
  //         <>
  //           <Text
  //             style={{
  //               marginLeft: 15,
  //               fontFamily: Fonts.PlayfairDisplay600Italic,
  //               fontSize: 20,
  //               color: Colors.textcolor,
  //               marginBottom: 10,
  //             }}>
  //             Collections
  //           </Text>
  //           <CollectionCard data={param} {...props} />
  //         </>
  //       );
  //     // CollectionCard
  //     // case 'CMSFlexComponent':
  //     //   return;
  //     default:
  //       return;
  //   }
  // };
  const data = {
    '63aab8dc15519f83a59729df': [
      {
        _id: '63aae8c115519f83a5972b4a',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Mens Clothing',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: 'Mens Clothing',
        createdAt: '2022-12-27T12:44:49.616Z',
        image:
          'https://apisap.fabindiahome.com/medias/sys_master/root/ha9/ha5/9103260647454/mn-lpsec1-mob-15nov22-1/mn-lpsec1-mob-15nov22-1.jpg',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:mens-day-clothing',
        sortorder: 11,
        title: 'Mens Clothing',
        updatedAt: '2023-01-03T05:59:51.680Z',
      },
      {
        _id: '63ac4371f6a2493189ca4048',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'NUIndian Clothing For Men',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: 'NUIndian Clothing For Men',
        createdAt: '2022-12-28T13:24:01.900Z',
        image:
          'https://apisap.fabindiahome.com/medias/sys_master/root/h59/he8/9053814325278/mn-sec1-mob-31aug22-2/mn-sec1-mob-31aug22-2.jpg',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:nuindian-men-clothing',
        sortorder: 5,
        title: 'NUIndian Clothing For Men',
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
      {
        _id: '63ae63e3ce2829923f67fdf1',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Men's Shirts`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `Men's Shirts`,
        createdAt: '2022-12-30T04:06:59.301Z',
        image:
          'https://apisap.fabindiahome.com/medias/sys_master/root/hac/hf0/9065285550110/mn-sec1-mob-22sep22-3/mn-sec1-mob-22sep22-3.jpg',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:men-shirts',
        sortorder: 9,
        title: `Men's Shirts`,
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Sale on Men Clothing & Accessories ',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: 'Sale on Men Clothing & Accessories ',
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://apisap.fabindiahome.com/medias/sys_master/root/h6b/h2e/9075280707614/mn-sec1-mob-29sep22-4/mn-sec1-mob-29sep22-4.jpg',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:sale-men-products',
        sortorder: 3,
        title: 'Sale on Men Clothing & Accessories ',
        updatedAt: '2023-01-03T05:59:51.683Z',
      },
    ],
    '63aad98915519f83a5972aa6': [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/sys_master/root/ha5/h41/9087466143774/men-sec2-10oct22-1/men-sec2-10oct22-1.jpg',
        landingPage:
          ':creationtime-desc:allCategories:men-kurtas:B2CL4:Long Kurtas',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Long kurtas`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: `Long kurtas`,
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: `/Ethnic Wear`,
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaf1d415519f83a5972ba7',
        image:
          'https://apisap.fabindiahome.com/medias/sys_master/root/ha3/h44/9087466209310/men-sec2-10oct22-2/men-sec2-10oct22-2.jpg',
        landingPage: ':relevance:allCategories:men-nehru-jackets',
        category: '63aad98915519f83a5972aa6',
        sortorder: 17,
        title: `Nehru Jackets`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:23:32.461Z',
        updatedAt: '2022-12-30T13:20:41.484Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: `Men's Nehru Jackets`,
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: `/Men's kurtas`,
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63ae833abcb1a02702f7bde6',
        image:
          'https://apisap.fabindiahome.com/medias/sys_master/root/h64/h45/9087466274846/men-sec2-10oct22-3/men-sec2-10oct22-3.jpg',
        landingPage: ':relevance:allCategories:men-short-kurtas',
        category: '63aad98915519f83a5972aa6',
        sortorder: 105,
        title: `Short Kurtas`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-30T06:20:42.160Z',
        updatedAt: '2022-12-30T13:20:53.919Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'New In/Women',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: 'New In/Women',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63ae8358bcb1a02702f7bdef',
        image:
          'https://apisap.fabindiahome.com/medias/sys_master/root/h75/h48/9087466340382/men-sec2-10oct22-4/men-sec2-10oct22-4.jpg',
        landingPage:
          ':creationtime-desc:allCategories:men-kurtas:B2CL4:Pathani Kurtas',
        category: '63aad98915519f83a5972aa6',
        sortorder: 106,
        title: 'Pathani Kurtas',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-30T06:21:12.899Z',
        updatedAt: '2022-12-30T13:21:02.098Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Pathani Kurtas',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: 'Pathani Kurtas',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63ae8358bcb1a02702f7bdef',
        image:
          'https://apisap.fabindiahome.com/medias/sys_master/root/h73/h4b/9087466405918/men-sec2-10oct22-5/men-sec2-10oct22-5.jpg',
        landingPage: ':relevance:allCategories:men-churidars-pyjamas',
        category: '63aad98915519f83a5972aa6',
        sortorder: 106,
        title: 'Churidars & Pyjamas',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-30T06:21:12.899Z',
        updatedAt: '2022-12-30T13:21:02.098Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Pathani Kurtas',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: 'Pathani Kurtas',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63ae83a2bcb1a02702f7bdfb',
        image:
          'https://apisap.fabindiahome.com/medias/sys_master/root/hb0/hf4/9089104543774/men-sec2-12oct22-6/men-sec2-12oct22-6.jpg',
        landingPage: ':relevance:allCategories:men-sherwanis-sets',
        category: '63aad98915519f83a5972aa6',
        sortorder: 107,
        title: 'Sherwanis & Sets',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-30T06:22:26.460Z',
        updatedAt: '2022-12-30T13:21:14.735Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'New In/Women',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: 'New In/Women',
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    '63aab8b715519f83a59729d7': [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/sys_master/root/h34/h4c/9087466471454/men-sec3-10oct22-1/men-sec3-10oct22-1.jpg',
        landingPage: ':relevance:allCategories:men-shirts',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Shirts',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: '/Western Wear',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Western Wear',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaf1d415519f83a5972ba7',
        image:
          'https://apisap.fabindiahome.com/medias/sys_master/root/h32/h4f/9087466536990/men-sec3-10oct22-2/men-sec3-10oct22-2.jpg',
        landingPage: ':relevance:allCategories:men-pants',
        category: '63aad98915519f83a5972aa6',
        sortorder: 17,
        title: 'Trousers',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:23:32.461Z',
        updatedAt: '2022-12-30T13:20:41.484Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: '/Western Wear',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Western Wear',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63ae833abcb1a02702f7bde6',
        image:
          'https://apisap.fabindiahome.com/medias/sys_master/root/h44/h52/9087466602526/men-sec3-10oct22-3/men-sec3-10oct22-3.jpg',
        landingPage: ':relevance:allCategories:men-shorts',
        category: '63aad98915519f83a5972aa6',
        sortorder: 105,
        title: 'Shorts',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-30T06:20:42.160Z',
        updatedAt: '2022-12-30T13:20:53.919Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: '/Western Wear',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Western Wear',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63ae8358bcb1a02702f7bdef',
        image:
          'https://apisap.fabindiahome.com/medias/sys_master/root/hf2/h52/9087466668062/men-sec3-10oct22-4/men-sec3-10oct22-4.jpg',
        landingPage: ':relevance:allCategories:men-jackets',
        category: '63aad98915519f83a5972aa6',
        sortorder: 106,
        title: 'Jackets',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-30T06:21:12.899Z',
        updatedAt: '2022-12-30T13:21:02.098Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: '/Western Wear',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Western Wear',
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    '63aadb5815519f83a5972aba': [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/sys_master/root/hb1/h56/9087466799134/men-sec4-10oct22-1/men-sec4-10oct22-1.jpg',
        landingPage: ':relevance:allCategories:men-chappals',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Chappals',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Apparel',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Footwear',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaf1d415519f83a5972ba7',
        image:
          'https://apisap.fabindiahome.com/medias/sys_master/root/hc2/h59/9087466864670/men-sec4-10oct22-2/men-sec4-10oct22-2.jpg',
        landingPage: ':relevance:allCategories:men-sandals',
        category: '63aad98915519f83a5972aa6',
        sortorder: 17,
        title: 'Sandals',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:23:32.461Z',
        updatedAt: '2022-12-30T13:20:41.484Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'New In/Women',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Footwear',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63ae833abcb1a02702f7bde6',
        image:
          'https://apisap.fabindiahome.com/medias/sys_master/root/h03/h56/9087466733598/men-sec4-10oct22-3/men-sec4-10oct22-3.jpg',
        landingPage: ':relevance:allCategories:men-jutties',
        category: '63aad98915519f83a5972aa6',
        sortorder: 105,
        title: 'Jutties',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-30T06:20:42.160Z',
        updatedAt: '2022-12-30T13:20:53.919Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'New In/Women',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Footwear',
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    '63aadb1815519f83a5972ab4': [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/sys_master/root/hd3/h5c/9087466930206/men-sec5-10oct22-1/men-sec5-10oct22-1.jpg',
        landingPage: ':relevance:allCategories:men-kurtas',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Men's Kurtas`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Ethnic Wear/Discover a wardrobe that exudes elegance and comfort',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Ethnic Wear/Discover a wardrobe that exudes elegance and comfort',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaf1d415519f83a5972ba7',
        image:
          'https://apisap.fabindiahome.com/medias/sys_master/root/h81/h5d/9087466995742/men-sec5-10oct22-2/men-sec5-10oct22-2.jpg',
        landingPage: ':relevance:allCategories:men-nehru-jackets',
        category: '63aad98915519f83a5972aa6',
        sortorder: 17,
        title: `Men's Nehru Jackets`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:23:32.461Z',
        updatedAt: '2022-12-30T13:20:41.484Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Ethnic Wear/Discover a wardrobe that exudes elegance and comfort',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Ethnic Wear/Discover a wardrobe that exudes elegance and comfort',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63ae833abcb1a02702f7bde6',
        image:
          'https://apisap.fabindiahome.com/medias/sys_master/root/h3e/ha8/9087467061278/men-sec5-10oct22-3/men-sec5-10oct22-3.jpg',
        landingPage: ':relevance:allCategories:men-churidars-pyjamas',
        category: '63aad98915519f83a5972aa6',
        sortorder: 105,
        title: `Men's Churidars Pyjamas`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-30T06:20:42.160Z',
        updatedAt: '2022-12-30T13:20:53.919Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Ethnic Wear/Discover a wardrobe that exudes elegance and comfort',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Ethnic Wear/Discover a wardrobe that exudes elegance and comfort',
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    '63aadab915519f83a5972aad': [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/sys_master/root/h0b/h98/9065286041630/mn-sec7-mob-22sep22-1/mn-sec7-mob-22sep22-1.jpg',
        landingPage: ':relevance:allCategories:men-ethnic-wear',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Men's Ethnic Wear`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: `Men's Ethnic Wear`,
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: `Men's Ethnic Wear`,
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    '63aadbd215519f83a5972ac1': [
      {
        _id: '63aae8c115519f83a5972b4a',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Take a Tour of india/Explore the various crafts of India and dress in sustainable, handcrafted style',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName:
          'Take a Tour of india/Explore the various crafts of India and dress in sustainable, handcrafted style',
        createdAt: '2022-12-27T12:44:49.616Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/sys_master/root/h94/h68/8957804347422/men-clp-sec8col1img1/men-clp-sec8col1img1.jpg',
        is_enable: true,
        is_slider: true,
        landingPage:
          ':creationtime-desc:allCategories:men-products:Craft:Ajrakh',
        sortorder: 11,
        title: `Ajrakh`,
        updatedAt: '2023-01-03T05:59:51.680Z',
      },
      {
        _id: '63ac4371f6a2493189ca4048',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Take a Tour of india/Explore the various crafts of India and dress in sustainable, handcrafted style',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName:
          'Take a Tour of india/Explore the various crafts of India and dress in sustainable, handcrafted style',
        createdAt: '2022-12-28T13:24:01.900Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/sys_master/root/ha4/h6b/8957804412958/men-clp-sec8col1img2/men-clp-sec8col1img2.jpg',
        is_enable: true,
        is_slider: true,

        landingPage:
          ':creationtime-desc:allCategories:men-products:Craft:Chikankari',
        sortorder: 5,
        title: `Chikankari`,

        updatedAt: '2023-01-03T05:59:51.682Z',
      },
      {
        _id: '63ae63e3ce2829923f67fdf1',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Take a Tour of india/Explore the various crafts of India and dress in sustainable, handcrafted style',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName:
          'Take a Tour of india/Explore the various crafts of India and dress in sustainable, handcrafted style',
        createdAt: '2022-12-30T04:06:59.301Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/sys_master/root/hc5/hcd/8958720868382/men-clp-sec8col1img3-rep/men-clp-sec8col1img3-rep.jpg',
        is_enable: true,
        is_slider: true,
        landingPage:
          ':creationtime-desc:allCategories:men-products:Craft:Hand Woven',
        sortorder: 9,
        title: `Hand Woven`,
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Take a Tour of india/Explore the various crafts of India and dress in sustainable, handcrafted style',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName:
          'Take a Tour of india/Explore the various crafts of India and dress in sustainable, handcrafted style',
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/sys_master/root/h64/h6f/8957804544030/men-clp-sec8col2img1/men-clp-sec8col2img1.jpg',
        is_enable: true,
        is_slider: true,
        landingPage:
          ':creationtime-desc:allCategories:men-products:Craft:Kalamkari',
        sortorder: 3,
        title: `Kalamkari`,
        updatedAt: '2023-01-03T05:59:51.683Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Take a Tour of india/Explore the various crafts of India and dress in sustainable, handcrafted style',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName:
          'Take a Tour of india/Explore the various crafts of India and dress in sustainable, handcrafted style',
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/sys_master/root/h62/h72/8957804609566/men-clp-sec8col2img2/men-clp-sec8col2img2.jpg',
        is_enable: true,
        is_slider: true,
        landingPage: ':creationtime-desc:allCategories:men-products:Craft:Dabu',
        sortorder: 3,
        title: `Dabu`,

        updatedAt: '2023-01-03T05:59:51.683Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Take a Tour of india/Explore the various crafts of India and dress in sustainable, handcrafted style',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName:
          'Take a Tour of india/Explore the various crafts of India and dress in sustainable, handcrafted style',
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/sys_master/root/h06/hca/8958720999454/men-clp-sec8col2img3-rep/men-clp-sec8col2img3-rep.jpg',
        is_enable: true,
        is_slider: true,
        landingPage:
          ':creationtime-desc:allCategories:men-products:Craft:Ajrakh',
        sortorder: 3,
        title: `Ajrakh`,

        updatedAt: '2023-01-03T05:59:51.683Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Take a Tour of india/Explore the various crafts of India and dress in sustainable, handcrafted style',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName:
          'Take a Tour of india/Explore the various crafts of India and dress in sustainable, handcrafted style',
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/sys_master/root/h34/h76/8957804740638/men-clp-sec8col3img1/men-clp-sec8col3img1.jpg',
        is_enable: true,
        is_slider: true,
        landingPage: ':creationtime-desc:allCategories:men-products:Craft:Ikat',
        sortorder: 3,
        title: `Ikat`,

        updatedAt: '2023-01-03T05:59:51.683Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Take a Tour of india/Explore the various crafts of India and dress in sustainable, handcrafted style',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName:
          'Take a Tour of india/Explore the various crafts of India and dress in sustainable, handcrafted style',
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/sys_master/root/h38/h7c/8958721130526/men-clp-sec8col3img2-rep/men-clp-sec8col3img2-rep.jpg',
        is_enable: true,
        is_slider: true,
        landingPage:
          ':creationtime-desc:allCategories:men-products:Craft:Bagru',
        sortorder: 3,
        title: `Bagru`,

        updatedAt: '2023-01-03T05:59:51.683Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Take a Tour of india/Explore the various crafts of India and dress in sustainable, handcrafted style',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName:
          'Take a Tour of india/Explore the various crafts of India and dress in sustainable, handcrafted style',
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/sys_master/root/h79/h78/8958721261598/men-clp-sec8col3img3-rep/men-clp-sec8col3img3-rep.jpg',
        is_enable: true,
        is_slider: true,
        landingPage: ':creationtime-desc:allCategories:men-products:Craft:Bagh',
        sortorder: 3,
        title: `Bagh`,

        updatedAt: '2023-01-03T05:59:51.683Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Take a Tour of india/Explore the various crafts of India and dress in sustainable, handcrafted style',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName:
          'Take a Tour of india/Explore the various crafts of India and dress in sustainable, handcrafted style',
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/sys_master/root/hab/h6e/8958721523742/men-clp-sec8col4img1-rep/men-clp-sec8col4img1-rep.jpg',
        is_enable: true,
        is_slider: true,
        landingPage:
          ':creationtime-desc:allCategories:men-products:Craft:Batik',
        sortorder: 3,
        title: `Batik`,

        updatedAt: '2023-01-03T05:59:51.683Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Take a Tour of india/Explore the various crafts of India and dress in sustainable, handcrafted style',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName:
          'Take a Tour of india/Explore the various crafts of India and dress in sustainable, handcrafted style',
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/sys_master/root/hf1/h7c/8957804937246/men-clp-sec8col4img3/men-clp-sec8col4img3.jpg',
        is_enable: true,
        is_slider: true,
        landingPage:
          ':creationtime-desc:allCategories:men-products:Craft:Hand Block Print',
        sortorder: 3,
        title: `Hand Block Print`,

        updatedAt: '2023-01-03T05:59:51.683Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Take a Tour of india/Explore the various crafts of India and dress in sustainable, handcrafted style',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName:
          'Take a Tour of india/Explore the various crafts of India and dress in sustainable, handcrafted style',
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/sys_master/root/hba/h74/8958721392670/men-clp-sec8col4img2-rep/men-clp-sec8col4img2-rep.jpg',
        is_enable: true,
        is_slider: true,
        landingPage:
          ':creationtime-desc:allCategories:men-products:Craft:Jamdani',
        sortorder: 3,
        title: `Jamdani`,
        updatedAt: '2023-01-03T05:59:51.683Z',
      },
    ],
    '63ad7b23bcb1a02702f7bb0c': [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/sys_master/root/h4e/h91/9065286238238/mn-sec10-mob-22sep22-1/mn-sec10-mob-22sep22-1.jpg',
        landingPage:
          ':creationtime-desc:allCategories:men-products:Craft:Ajrakh:Craft:Kalamkari:Craft:Bagru:Craft:Dabu:Craft:Bagh:Craft:Hand Block Print',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Men's Clothing and Accessories`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: `Men's Clothing and Accessories`,
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: `Men's Clothing and Accessories`,
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    '63ad9230bcb1a02702f7bb9f': [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/sys_master/root/hba/hfe/9088549584926/Shirts-rep/Shirts-rep.jpg',
        landingPage: ':relevance:allCategories:men-shirt',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Men's Shirts`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Western Wear/From office to easy days, dive into a selection of smart, crisp dressing',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Western Wear/From office to easy days, dive into a selection of smart, crisp dressing',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaf1d415519f83a5972ba7',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/sys_master/root/h72/h5c/9014563569694/Jackets/Jackets.jpg',
        landingPage: ':relevance:allCategories:men-jackets',
        category: '63aad98915519f83a5972aa6',
        sortorder: 17,
        title: `Men's Jackets`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:23:32.461Z',
        updatedAt: '2022-12-30T13:20:41.484Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Western Wear/From office to easy days, dive into a selection of smart, crisp dressing',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Western Wear/From office to easy days, dive into a selection of smart, crisp dressing',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63ae833abcb1a02702f7bde6',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/sys_master/root/h34/hfe/9088549650462/Trousers-rep/Trousers-rep.jpg',
        landingPage: ':relevance:allCategories:men-pants',
        category: '63aad98915519f83a5972aa6',
        sortorder: 105,
        title: `Men's Pants`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-30T06:20:42.160Z',
        updatedAt: '2022-12-30T13:20:53.919Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Western Wear/From office to easy days, dive into a selection of smart, crisp dressing',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Western Wear/From office to easy days, dive into a selection of smart, crisp dressing',
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    '63ad9067bcb1a02702f7bb87': [
      {
        _id: '63aae8c115519f83a5972b4a',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Men's Clothing And Accessories`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `Men's Clothing And Accessories`,
        createdAt: '2022-12-27T12:44:49.616Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/sys_master/root/h2c/h2f/9075280773150/mn-sec13-29sep22-1/mn-sec13-29sep22-1.jpg',
        is_enable: true,
        is_slider: true,
        landingPage:
          ':creationtime-desc:allCategories:men-products:Sleeves:Sleeveless',
        sortorder: 11,
        title: `Men's Clothing And Accessories`,
        updatedAt: '2023-01-03T05:59:51.680Z',
      },
      {
        _id: '63ac4371f6a2493189ca4048',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Men's Footwears`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `Men's Footwears`,
        createdAt: '2022-12-28T13:24:01.900Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/sys_master/root/h94/h62/9014563700766/Footwear/Footwear.jpg',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:men-footwear',
        sortorder: 5,
        title: `Men's Footwears`,
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
    ],
    '63ad923cbcb1a02702f7bba4': [
      {
        _id: '63aae8c115519f83a5972b4a',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Men's Short Kurtas`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `Men's Short Kurtas`,
        createdAt: '2022-12-27T12:44:49.616Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/sys_master/root/h8f/h8d/9065286369310/mn-cl-sec14-22sep22-img1/mn-cl-sec14-22sep22-img1.jpg',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:men-short-kurtas',
        sortorder: 11,
        title: `Men's Short Kurtas`,
        updatedAt: '2023-01-03T05:59:51.680Z',
      },
      {
        _id: '63ac4371f6a2493189ca4048',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Everyday Living Men Clothing`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `Everyday Living Men Clothing`,
        createdAt: '2022-12-28T13:24:01.900Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/sys_master/root/h6d/h87/9065286500382/mn-cl-sec14-22sep22-img3/mn-cl-sec14-22sep22-img3.jpg',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:everyday-living-men',
        sortorder: 5,
        title: `Everyday Living Men Clothing`,
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
      {
        _id: '63ae63e3ce2829923f67fdf1',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Wedding Men Clothing',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: 'Wedding Men Clothing',
        createdAt: '2022-12-30T04:06:59.301Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/sys_master/root/hbf/h86/9065286565918/mn-cl-sec14-22sep22-img4/mn-cl-sec14-22sep22-img4.jpg',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:wedding-men',
        sortorder: 9,
        title: `Wedding Men Clothing`,
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Indigo Men Clothing',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: 'Indigo Men Clothing',
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/sys_master/root/h7e/h8a/9065286434846/mn-cl-sec14-22sep22-img2/mn-cl-sec14-22sep22-img2.jpg',
        is_enable: true,
        is_slider: true,
        landingPage:
          ':creationtime-desc:allCategories:indigo-men:Color:BLUE:Color:INDIGO:Color:NAVY',
        sortorder: 3,
        title: 'Indigo Men Clothing',
        updatedAt: '2023-01-03T05:59:51.683Z',
      },
    ],
  };
  const HomPageSections = {
    topSwiper: '63aab8dc15519f83a59729df',
    NewInapparel: '63aad98915519f83a5972aa6',
    NewIndupattas: '63aab8b715519f83a59729d7',
    NewInjewellery: '63aadb5815519f83a5972aba',
    LifeStyleethnicwear: '63aadb1815519f83a5972ab4',
    TraditionBanner: '63aadab915519f83a5972aad',
    TaketoorCard: '63aadbd215519f83a5972ac1',
    Sophistication: '63ad7b23bcb1a02702f7bb0c',
    LifeStylewesternwear: '63ad9230bcb1a02702f7bb9f',
    carousel: '63ad9067bcb1a02702f7bb87',
    Collections: '63ad923cbcb1a02702f7bba4',

    // offer
    // offerHome: '63ad9244bcb1a02702f7bba9',

    // Interior: '63ad95f5bcb1a02702f7bbd8',
    // NewInHome: '63ad96b4bcb1a02702f7bbe6',
    // BannerHome: '63ad979cbcb1a02702f7bbfd',
    // BannerLiving: '63ad983cbcb1a02702f7bc10',
    // youtube: '63abc289c349c715bd92dadd',
  };
  return (
    <>
      {filteredComp.length > 0 && (
        <>
          <HomeHeader
            customViewStyle={{backgroundColor: '#FFFFFF'}}
            {...props}
            headertext={title}
          />
          <ScrollView style={{backgroundColor: 'white', flexGrow: 1}}>
            <TopSwiper
              data={data?.[HomPageSections.topSwiper]}
              {...props}
              isAdmin2={'isAdmin2'}
              isSap={true}
            />

            <NewHighlights
              {...props}
              isAdmin2={'isAdmin2'}
              customStyle={{marginVertical: 20}}
              bgColor={{backgroundColor: '#F3E0E0'}}
              data={data?.[HomPageSections.NewInapparel]}
            />
            <NewHighlights
              {...props}
              isAdmin2={'isAdmin2'}
              customStyle={{marginVertical: 20}}
              bgColor={{backgroundColor: '#F3E0E0'}}
              data={data?.[HomPageSections.NewIndupattas]}
            />
            <NewHighlights
              {...props}
              isAdmin2={'isAdmin2'}
              customStyle={{marginVertical: 20}}
              bgColor={{backgroundColor: '#F3E0E0'}}
              data={data?.[HomPageSections.NewInjewellery]}
            />
            <LifeStyle
              isAdmin2={'isAdmin2'}
              {...props}
              customViewStyle={{marginVertical: 20}}
              data={data?.[HomPageSections.LifeStyleethnicwear]}
              // title={GetLifeStyleTitle}
              backgroundColor="#F8F2EF"
            />
            <WomenTab data={filteredComp[0]} {...props} />
            <TouchableOpacity
              style={{marginTop: 20}}
              activeOpacity={0.8}
              onPress={() =>
                props.navigation.navigate('LandingPageSaris_Blouses', {
                  code: data?.[HomPageSections.TraditionBanner][0].landingPage,
                  title: data?.[HomPageSections.TraditionBanner][0].title,
                  isAdmin2: 'isAdmin2',
                })
              }>
              <Image
                resizeMode="stretch"
                source={{
                  uri: data?.[HomPageSections.TraditionBanner][0].image,
                }}
                style={{height: 213, width: width}}
              />
            </TouchableOpacity>
            <CommonImageGrid
              isAdmin2="isAdmin2"
              {...props}
              data={data?.[HomPageSections.TaketoorCard]}
            />
            <SingleBanner
              data={data?.[HomPageSections.Sophistication][0]}
              {...props}
              isAdmin2="isAdmin2"
            />
            <LifeStyle
              isAdmin2={'isAdmin2'}
              {...props}
              customViewStyle={{marginVertical: 20}}
              data={data?.[HomPageSections.LifeStylewesternwear]}
              // title={GetLifeStyleTitle}
              backgroundColor="#F8F2EF"
            />
            <WomenTab data={filteredComp[1]} {...props} />
            <CommonCarousel
              {...props}
              data={data?.[HomPageSections.carousel]}
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
      )}
      {/* <HomeHeader
        customViewStyle={{backgroundColor: '#FFFFFF'}}
        {...props}
        headertext={title}
      />

      <FlatList
        contentContainerStyle={{
          backgroundColor: Colors.backgroundColor,
          paddingBottom: 20,
          flexGrow: 1,
        }}
        data={filteredComp}
        keyExtractor={(item, index) => index}
        renderItem={item => checkSwitch(item.item)}
      /> */}
    </>
  );
};

export default MenCatagory;
