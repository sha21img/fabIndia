import React from 'react';
import {
  Text,
  Dimensions,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';
import {LandingPageL1Women} from '../../../../../constant';
import CollectionCard from '../../../../Common/CollectionCard';
import CommonCarousel from '../../../../Common/CommonCarousel';
import CommonImageGrid from '../../../../Common/CommonImageGrid';
import {getData} from '../../../../Common/Helper';
import LifeStyle from '../../../../Common/LifeStyle';
import NewHighlights from '../../../../Common/NewHighlights';
import SingleBanner from '../../../../Common/SingleBanner';
import TopSwiper from '../../../../Common/TopSwiper';
import HomeHeader from '../../HomeHeader';
import WomenTab from '../../Tabs.js/WomenTab';
import CommonCarousel1 from '../../../../Common/CommonCarousel/CommonCarousel1';
import NewHighlights1 from '../../../../Common/NewHighlights/NewHighlights1';
import TopSwiper1 from '../../../../Common/TopSwiper/TopSwiper1';
const width = Dimensions.get('window').width;

const WomenCategory = props => {
  const {title} = props.route.params;

  const [imgActive1, setImgActive1] = React.useState(0);
  const [active, setActive] = React.useState('');

  const [filteredComp, setFilteredComp] = React.useState([]);
  const getInitialData = async () => {
    const response = await getData(
      'cms/pages?pageType=ContentPage&pageLabelOrId=%2Fwomen&lang=en&curr=INR',
    );
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

  const checkSwitch = param => {
    switch (param?.typeCode) {
      case 'FabResponsiveGridBannerCarouselComponent':
        return <TopSwiper1 data={param} {...props} />;
      case 'FabBannerCarouselComponent':
        return (
          <NewHighlights1
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
            customViewStyle={{marginVertical: 20}}
            // data={LifeStyleData}
            data={param}
            // title={GetLifeStyleTitle}
            backgroundColor="#F8F2EF"
          />
        );
      case 'FabCMSTabContainer':
        return (
          <WomenTab data={param} {...props} />

          // <CommonCarousel data={param} width={width / 1.07} height={330} />
        );
      case 'SimpleResponsiveBannerComponent':
        const newCode = param.urlLink;
        let splitURL = newCode.split('/');
        splitURL = splitURL[splitURL.length - 1];
        return (
          <>
            <TouchableOpacity
              style={{marginTop: 20}}
              activeOpacity={0.8}
              onPress={() =>
                props.navigation.navigate('LandingPageSaris_Blouses', {
                  code: splitURL.split('?')[0],
                  title: param.title,
                })
              }>
              <Image
                resizeMode="stretch"
                source={{
                  uri: `https://apisap.fabindia.com/${param.media.mobile.url}`,
                }}
                style={{height: 213, width: width}}
              />
            </TouchableOpacity>
          </>
        );
      // section8 grid
      case 'FabBannerResponsiveTableComponent':
        return <CommonImageGrid {...props} data={param} />;
      // case 'FabBannerResponsiveTableComponent':
      //   return <CategoryGrid data={param} {...props} />;
      //section 9 empty
      case 'FabResponsiveBannerCarouselComponent':
        return <SingleBanner data={param} {...props} />;

      case 'FabBannerResponsiveCarouselComponent':
        return (
          <CommonCarousel1
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
  // console.log('filteredComp', filteredComp);
  // const dataObj = {
  //   typeCode: 'FabResponsiveGridBannerCarouselComponent',
  // };
  // console.log('filteredComp', filteredComp['FabResponsiveGridBannerCarouselComponent']);
  const topSwiper = [
    {
      _id: '63aae8c115519f83a5972b4a',
      category: '63aab8b715519f83a59729d7',
      categoryData: {
        Is_Active: true,
        Name: 'Main Slider',
        _id: '63aab8b715519f83a59729d7',
        createdAt: '2022-12-27T09:19:51.037Z',
        sortorder: '1',
        updatedAt: '2022-12-29T07:08:39.709Z',
      },
      categoryId: '63aab8b715519f83a59729d7',
      categoryName: 'Main Slider',
      createdAt: '2022-12-27T12:44:49.616Z',
      image:
        'https://apisap.fabindiahome.com/medias/sys_master/root/h59/h6c/9091111551006/wmn-lpsec1-mob-19oct22-1/wmn-lpsec1-mob-19oct22-1.jpg',
      is_enable: true,
      is_slider: true,
      landingPage: ':relevance:allCategories:women-festive-wear',
      sortorder: 11,
      title: 'Women Festive Wear',
      updatedAt: '2023-01-03T05:59:51.680Z',
    },
    {
      _id: '63ac4371f6a2493189ca4048',
      category: '63aab8b715519f83a59729d7',
      categoryData: {
        Is_Active: true,
        Name: 'Main Slider',
        _id: '63aab8b715519f83a59729d7',
        createdAt: '2022-12-27T09:19:51.037Z',
        sortorder: '1',
        updatedAt: '2022-12-29T07:08:39.709Z',
      },
      categoryId: '63aab8b715519f83a59729d7',
      categoryName: 'Main Slider',
      createdAt: '2022-12-28T13:24:01.900Z',
      image:
        'https://apisap.fabindiahome.com/medias/sys_master/root/h20/h93/9053813932062/wmn-sec1-mob-31aug22-2/wmn-sec1-mob-31aug22-2.jpg',
      is_enable: true,
      is_slider: true,
      landingPage: ':relevance:allCategories:nuindian-women-clothing',
      sortorder: 5,
      title: 'NUIndian Clothing For Women',
      updatedAt: '2023-01-03T05:59:51.682Z',
    },
    {
      _id: '63ae63e3ce2829923f67fdf1',
      category: '63aab8b715519f83a59729d7',
      categoryData: {
        Is_Active: true,
        Name: 'Main Slider',
        _id: '63aab8b715519f83a59729d7',
        createdAt: '2022-12-27T09:19:51.037Z',
        sortorder: '1',
        updatedAt: '2022-12-29T07:08:39.709Z',
      },
      categoryId: '63aab8b715519f83a59729d7',
      categoryName: 'Main Slider',
      createdAt: '2022-12-30T04:06:59.301Z',
      image:
        'https://apisap.fabindiahome.com/medias/sys_master/root/h18/ha4/9081602474014/wm-sec1-mob-3oct22-3/wm-sec1-mob-3oct22-3.jpg',
      is_enable: true,
      is_slider: true,
      landingPage: ':relevance:allCategories:women-silver-jewellery',
      sortorder: 9,
      title: `Women's Silver Jewellery`,
      updatedAt: '2023-01-03T05:59:51.682Z',
    },
    {
      _id: '63b262ffbcb1a02702f7c407',
      category: '63aab8b715519f83a59729d7',
      categoryData: {
        Is_Active: true,
        Name: 'Main Slider',
        _id: '63aab8b715519f83a59729d7',
        createdAt: '2022-12-27T09:19:51.037Z',
        sortorder: '1',
        updatedAt: '2022-12-29T07:08:39.709Z',
      },
      categoryId: '63aab8b715519f83a59729d7',
      categoryName: 'Main Slider',
      createdAt: '2023-01-02T04:52:15.102Z',
      image:
        'https://apisap.fabindiahome.com/medias/sys_master/root/h5b/hb1/9057942306846/wmn-sec1-mob-39sep22-4/wmn-sec1-mob-39sep22-4.jpg',
      is_enable: true,
      is_slider: true,
      landingPage: ':relevance:allCategories:sale-women-products',
      sortorder: 3,
      title: 'Sale on Women Clothing & Accessories',
      updatedAt: '2023-01-03T05:59:51.683Z',
    },
  ];
  const apparelHighlight = [
    {
      _id: '63aaef8e15519f83a5972b76',
      image:
        'https://apisap.fabindiahome.com/medias/sys_master/root/ha9/h5a/9085958979614/wmn-clp-sec2-07oct22-img1/wmn-clp-sec2-07oct22-img1.jpg',
      landingPage: ':relevance:allCategories:women-kurtas',
      category: '63aad98915519f83a5972aa6',
      sortorder: 16,
      title: 'kurtas',
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
      categoryName: '/Apparel',
      categoryId: '63aad98915519f83a5972aa6',
    },
    {
      _id: '63aaf1d415519f83a5972ba7',
      image:
        'https://apisap.fabindiahome.com/medias/sys_master/root/h66/ha5/9085959045150/wmn-clp-sec2-07oct22-img2/wmn-clp-sec2-07oct22-img2.jpg',
      landingPage: ':relevance:allCategories:women-saris',
      category: '63aad98915519f83a5972aa6',
      sortorder: 17,
      title: 'Saris & Blouses',
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
      categoryName: 'New In/Women',
      categoryId: '63aad98915519f83a5972aa6',
    },
    {
      _id: '63ae833abcb1a02702f7bde6',
      image:
        'https://apisap.fabindiahome.com/medias/sys_master/root/h77/ha8/9085959110686/wmn-clp-sec2-07oct22-img3/wmn-clp-sec2-07oct22-img3.jpg',
      landingPage: ':relevance:allCategories:women-dresses-jumpsuits',
      category: '63aad98915519f83a5972aa6',
      sortorder: 105,
      title: 'Dresses & Jumpsuits',
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
        'https://apisap.fabindiahome.com/medias/sys_master/root/h25/ha9/9085959176222/wmn-clp-sec2-07oct22-img4/wmn-clp-sec2-07oct22-img4.jpg',
      landingPage: ':relevance:allCategories:women-tops',
      category: '63aad98915519f83a5972aa6',
      sortorder: 106,
      title: 'Tops',
      is_slider: true,
      is_enable: true,
      createdAt: '2022-12-30T06:21:12.899Z',
      updatedAt: '2022-12-30T13:21:02.098Z',
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
      _id: '63ae83a2bcb1a02702f7bdfb',
      image:
        'https://apisap.fabindiahome.com/medias/sys_master/root/h36/hac/9085959241758/wmn-clp-sec2-07oct22-img5/wmn-clp-sec2-07oct22-img5.jpg',
      landingPage: ':relevance:allCategories:women-pants-palazzos',
      category: '63aad98915519f83a5972aa6',
      sortorder: 107,
      title: 'Pants & Palazzos',
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
  ];
  const dupattasHighlight = [
    {
      _id: '63aaef8e15519f83a5972b76',
      image:
        'https://apisap.fabindiahome.com/medias/sys_master/root/hd2/h42/9085960060958/wmn-clp-sec3-07oct22-img1/wmn-clp-sec3-07oct22-img1.jpg',
      landingPage:
        ':creationtime-desc:allCategories:women-dupattas:Craft:Hand Woven',
      category: '63aad98915519f83a5972aa6',
      sortorder: 16,
      title: 'Hand Woven',
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
      categoryName: '/Dupattas',
      categoryId: '63aad98915519f83a5972aa6',
    },
    {
      _id: '63aaf1d415519f83a5972ba7',
      image:
        'https://apisap.fabindiahome.com/medias/sys_master/root/hd4/h3f/9085960126494/wmn-clp-sec3-07oct22-img2/wmn-clp-sec3-07oct22-img2.jpg',
      landingPage:
        ':creationtime-desc:allCategories:women-dupattas:Craft:Maheshwari',
      category: '63aad98915519f83a5972aa6',
      sortorder: 17,
      title: 'Maheshwari',
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
      categoryName: 'New In/Women',
      categoryId: '63aad98915519f83a5972aa6',
    },
    {
      _id: '63ae833abcb1a02702f7bde6',
      image:
        'https://apisap.fabindiahome.com/medias/sys_master/root/h13/h3f/9085960192030/wmn-clp-sec3-07oct22-img3/wmn-clp-sec3-07oct22-img3.jpg',
      landingPage:
        ':creationtime-desc:allCategories:women-dupattas:Craft:Banarsi',
      category: '63aad98915519f83a5972aa6',
      sortorder: 105,
      title: 'Banarasi',
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
        'https://apisap.fabindiahome.com/medias/sys_master/root/h15/h3c/9085960257566/wmn-clp-sec3-07oct22-img4/wmn-clp-sec3-07oct22-img4.jpg',
      landingPage:
        ':creationtime-desc:allCategories:women-dupattas:Craft:Hand Block',
      category: '63aad98915519f83a5972aa6',
      sortorder: 106,
      title: 'Block Print',
      is_slider: true,
      is_enable: true,
      createdAt: '2022-12-30T06:21:12.899Z',
      updatedAt: '2022-12-30T13:21:02.098Z',
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
      _id: '63ae83a2bcb1a02702f7bdfb',
      image:
        'https://apisap.fabindiahome.com/medias/sys_master/root/h04/h39/9085960323102/wmn-clp-sec3-07oct22-img5/wmn-clp-sec3-07oct22-img5.jpg',
      landingPage:
        ':creationtime-desc:allCategories:women-dupattas:Craft:Chanderi',
      category: '63aad98915519f83a5972aa6',
      sortorder: 107,
      title: 'Chanderi',
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
  ];
  const jewelleryHighlight = [
    {
      _id: '63aaef8e15519f83a5972b76',
      image:
        'https://apisap.fabindiahome.com/medias/sys_master/root/h2c/h2a/9085961142302/wmn-clp-sec4-07oct22-img1/wmn-clp-sec4-07oct22-img1.jpg',
      landingPage: ':relevance:allCategories:women-fashion-earrings',
      category: '63aad98915519f83a5972aa6',
      sortorder: 16,
      title: 'Earrings',
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
      categoryName: '/Dupattas',
      categoryId: '63aad98915519f83a5972aa6',
    },
    {
      _id: '63aaf1d415519f83a5972ba7',
      image:
        'https://apisap.fabindiahome.com/medias/sys_master/root/h2a/h2d/9085961207838/wmn-clp-sec4-07oct22-img2/wmn-clp-sec4-07oct22-img2.jpg',
      landingPage: ':relevance:allCategories:women-fashion-necklace',
      category: '63aad98915519f83a5972aa6',
      sortorder: 17,
      title: 'Necklace',
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
      categoryName: 'New In/Women',
      categoryId: '63aad98915519f83a5972aa6',
    },
    {
      _id: '63ae833abcb1a02702f7bde6',
      image:
        'https://apisap.fabindiahome.com/medias/sys_master/root/heb/h2d/9085961273374/wmn-clp-sec4-07oct22-img3/wmn-clp-sec4-07oct22-img3.jpg',
      landingPage: ':relevance:allCategories:women-fashion-bracelets-bangles',
      category: '63aad98915519f83a5972aa6',
      sortorder: 105,
      title: 'Bangles & Bracelets',
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
        'https://apisap.fabindiahome.com/medias/sys_master/root/h77/ha8/9085962747934/wmn-clp-sec4-07oct22-img4rep/wmn-clp-sec4-07oct22-img4rep.jpg',
      landingPage: ':relevance:allCategories:women-fashion-anklets-toe-rings',
      category: '63aad98915519f83a5972aa6',
      sortorder: 106,
      title: 'Anklets & Toe Rings',
      is_slider: true,
      is_enable: true,
      createdAt: '2022-12-30T06:21:12.899Z',
      updatedAt: '2022-12-30T13:21:02.098Z',
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
      _id: '63ae83a2bcb1a02702f7bdfb',
      image:
        'https://apisap.fabindiahome.com/medias/sys_master/root/h7a/ha5/9085962682398/wmn-clp-sec4-07oct22-img5rep/wmn-clp-sec4-07oct22-img5rep.jpg',
      landingPage:
        ':creationtime-desc:allCategories:women-silver-jewellery:B2CL4:Rings',
      category: '63aad98915519f83a5972aa6',
      sortorder: 107,
      title: 'Rings',
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
  ];
  console.log('filteredComp[0]', filteredComp[0]);
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
            <TopSwiper data={topSwiper} {...props} isAdmin2={'isAdmin2'} />
            <NewHighlights
              {...props}
              isAdmin2={'isAdmin2'}
              customStyle={{marginVertical: 20}}
              bgColor={{backgroundColor: '#F3E0E0'}}
              data={apparelHighlight}
            />
            <NewHighlights
              {...props}
              isAdmin2={'isAdmin2'}
              customStyle={{marginVertical: 20}}
              bgColor={{backgroundColor: '#F3E0E0'}}
              data={dupattasHighlight}
            />
            <NewHighlights
              {...props}
              isAdmin2={'isAdmin2'}
              customStyle={{marginVertical: 20}}
              bgColor={{backgroundColor: '#F3E0E0'}}
              data={jewelleryHighlight}
            />
            {/* <LifeStyle
              {...props}
              customViewStyle={{marginVertical: 20}}
              // data={LifeStyleData}
              data={filteredComp[0]}
              // title={GetLifeStyleTitle}
              backgroundColor="#F8F2EF"
            /> */}
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
      )}
    </>
  );
};
export default WomenCategory;
