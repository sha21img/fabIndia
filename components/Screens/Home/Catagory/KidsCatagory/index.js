import {
  View,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Colors} from '../../../../../assets/Colors';
import NewHighlights from '../../../../Common/NewHighlights';
import Fonts from '../../../../../assets/fonts';
import {LandingPageL1Kids, LandingPageL1Women} from '../../../../../constant';
import CommonCarousel from '../../../../Common/CommonCarousel';
import TopSwiper from '../../../../Common/TopSwiper';
import {getData} from '../../../../Common/Helper';
import CollectionCard from '../../../../Common/CollectionCard';
import SingleBanner from '../../../../Common/SingleBanner';
import WomenTab from '../../Tabs.js/WomenTab';
import LifeStyle from '../../../../Common/LifeStyle';
import CommonImageGrid from '../../../../Common/CommonImageGrid';
import HomeHeader from '../../HomeHeader';
const width = Dimensions.get('window').width;

const KidsCatagory = props => {
  const {title} = props.route.params;

  const [active, setActive] = React.useState('Bestsellers');
  const [imgActive1, setImgActive1] = React.useState(0);
  const [dashboardData, setDashboardData] = React.useState([]);
  const [Ids, setIds] = React.useState([]);
  const [filteredComp, setFilteredComp] = React.useState([]);
  const getInitialData = async () => {
    const response = await getData(
      'cms/pages?pageType=ContentPage&pageLabelOrId=%2Fkids&lang=en&curr=INR',
    );
    setDashboardData(response.contentSlots.contentSlot);
    getSections(response?.contentSlots?.contentSlot);
  };
  const getSections = data => {
    var dataa = [];
    LandingPageL1Kids.map(sectionId => {
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
        return <TopSwiper data={param} {...props} />;
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
      case 'FabCMSTabContainer':
        return (
          <WomenTab data={param} {...props} />

          // <CommonCarousel data={param} width={width / 1.07} height={330} />
        );
      case 'SimpleResponsiveBannerComponent':
        const newCode = param.urlLink;
        let splitURL = newCode.split('/');
        splitURL = splitURL[splitURL.length - 1];
        console.log(
          'paramparamparamparamparamparamparamparamparamparamparamparamparamparam',
          param,
        );
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            style={{marginTop: 20}}
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
              style={{height: 300, width: width}}
            />
          </TouchableOpacity>
        );

      // section8 grid
      case 'FabBannerResponsiveTableComponent':
        return <CommonImageGrid {...props} />;
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
        _id: '63aae8c115519f83a5972b4a',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Kidswear Collections',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: 'Kidswear Collections',
        createdAt: '2022-12-27T12:44:49.616Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/kd-lpsec1-mob-8nov22-1.jpg?context=bWFzdGVyfHJvb3R8NDY0Nzh8aW1hZ2UvanBlZ3xoYmIvaGQyLzkxMDA2MDY3MDE1OTgva2QtbHBzZWMxLW1vYi04bm92MjItMS5qcGd8ODZiZDU5ZmM3ODU5ODJlNWU0MTdiZjQ4M2MzNDYxMmFjZjAyMzJhMmYzM2NhNzkxYTZlODg4YzMxMDZiMjI1MA',
        is_enable: true,
        is_slider: true,
        landingPage:
          ':creationtime-desc:allCategories:kids-products:ibmCategories:Infant Girls:ibmCategories:Infant Boys:ibmCategories:Boys Western Wear:ibmCategories:Girls Western Wear',
        sortorder: 11,
        title: 'Kidswear Collections',
        updatedAt: '2023-01-03T05:59:51.680Z',
      },
      {
        _id: '63ac4371f6a2493189ca4048',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Kidswear Collections',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: 'Kidswear Collections',
        createdAt: '2022-12-28T13:24:01.900Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/kd-lpsec1-mob-19oct22-2.jpg?context=bWFzdGVyfHJvb3R8MjAzNTY5fGltYWdlL2pwZWd8aDQ1L2hiZi85MDkxMTA1NDg4OTI2L2tkLWxwc2VjMS1tb2ItMTlvY3QyMi0yLmpwZ3xmZTIwMDdhNzAxMGIzZmQzODczY2Y2ZjgxNDZjZjJlZTk1MzZjZjhjNmY3YTFhMWU3MTdkMDFiYjE3ZGNhMGMz',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:kids-products',
        sortorder: 5,
        title: 'Kidswear Collections',
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
      {
        _id: '63ae63e3ce2829923f67fdf1',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Infants Boy's Clothing`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `Infants Boy's Clothing`,
        createdAt: '2022-12-30T04:06:59.301Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/kd-lpsec1-mob-19oct22-3.jpg?context=bWFzdGVyfHJvb3R8MTMxNDk0fGltYWdlL2pwZWd8aDc0L2hiOC85MDkxMTA1Njg1NTM0L2tkLWxwc2VjMS1tb2ItMTlvY3QyMi0zLmpwZ3xlZTAwYjEyMTdjNTk3NTU0NzNkYWVjMmU2YzVmM2Y5YzFkNGUyNzBlZjQ2NzExZjQ3MWQ4ODc4ZWY3OTExZjE3',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:infant-boys',
        sortorder: 9,
        title: `Infants Boy's Clothing`,
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Infants Girls Clothes',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: 'Infants Girls Clothes',
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/kd-lpsec1-mob-19oct22-4.jpg?context=bWFzdGVyfHJvb3R8MTM4MzM3fGltYWdlL2pwZWd8aGE0L2hiMS85MDkxMTA1ODgyMTQyL2tkLWxwc2VjMS1tb2ItMTlvY3QyMi00LmpwZ3wxNTI4MDc4MjIxYjQ5MGUyYzcyMjVmZDIzYmU5OTA3NjMyY2Y0OWUyNzI0OGEyZTRlMWQ4ZDIzNTdlNDk1NDk5',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:infant-girls',
        sortorder: 3,
        title: 'Infants Girls Clothes',
        updatedAt: '2023-01-03T05:59:51.683Z',
      },
    ],
    NewInInfants: [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/kids-lp-sec-2-10oct22-1.jpg?context=bWFzdGVyfHJvb3R8MTczMDV8aW1hZ2UvanBlZ3xoM2MvaGFiLzkwODc0NjcxMjY4MTQva2lkcy1scC1zZWMtMi0xMG9jdDIyLTEuanBnfDY4OWRjZmMyMDQ3ZmEzNDYxNTA2YzkzZjI5ZDY2OGUwNGFlZDY2NzI5N2NiMjdkOGJjMDIwZDlhYmNhMGEyM2M',
        landingPage: ':relevance:allCategories:infant-boys-sets',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Boys Sets`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: `/Infants`,
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: `/Infants`,
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaf1d415519f83a5972ba7',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/kids-lp-sec-2-10oct22-2.jpg?context=bWFzdGVyfHJvb3R8MTg4NTN8aW1hZ2UvanBlZ3xoZmQvaGFiLzkwODc0NjcxOTIzNTAva2lkcy1scC1zZWMtMi0xMG9jdDIyLTIuanBnfGJkM2JiNzMzZGVlNjU5MTZiYzdkMWNlZTk3MjNkZGFlMTg0YzczYzM0MTg1NDc5ZDRhZjg0MTdmNmIyMDhmNDg',
        landingPage: ':relevance:allCategories:infant-girls-sets',
        category: '63aad98915519f83a5972aa6',
        sortorder: 17,
        title: `Girls Sets`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:23:32.461Z',
        updatedAt: '2022-12-30T13:20:41.484Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: `/Infants`,
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: `/Infants`,
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63ae833abcb1a02702f7bde6',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/kids-lp-sec-2-10oct22-3.jpg?context=bWFzdGVyfHJvb3R8MjA0MTN8aW1hZ2UvanBlZ3xoZmIvaGFlLzkwODc0NjcyNTc4ODYva2lkcy1scC1zZWMtMi0xMG9jdDIyLTMuanBnfDI5YTBiZWU5ZmQ4NDU4N2Q5ZjJhMTY5NzcxMTQ5NmFhNzIyNDA2NDgyMjQ2NWE4MWNhM2U0NWQ3YmNjOGIwNWI',
        landingPage: ':relevance:allCategories:infant-boys-kurtas',
        category: '63aad98915519f83a5972aa6',
        sortorder: 105,
        title: `Kurtas`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-30T06:20:42.160Z',
        updatedAt: '2022-12-30T13:20:53.919Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: '/Infants',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Infants',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63ae8358bcb1a02702f7bdef',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/kids-lp-sec-2-10oct22-4.jpg?context=bWFzdGVyfHJvb3R8MTk5ODZ8aW1hZ2UvanBlZ3xoMGMvaGIyLzkwODc0NjczMjM0MjIva2lkcy1scC1zZWMtMi0xMG9jdDIyLTQuanBnfGZhNzQxZmYyZjkxMzcxYmI0MWZiYTU5ZThmYmNmODA4NjhkYzRlNWI1OTliYWU3ODU2Nzc5MTBiZGM3M2M0ODY',
        landingPage: ':relevance:allCategories:infant-girls-dresses',
        category: '63aad98915519f83a5972aa6',
        sortorder: 106,
        title: 'Dresses',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-30T06:21:12.899Z',
        updatedAt: '2022-12-30T13:21:02.098Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: '/Infants',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Infants',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63ae8358bcb1a02702f7bdef',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/kids-lp-sec-2-10oct22-5.jpg?context=bWFzdGVyfHJvb3R8MjQzODV8aW1hZ2UvanBlZ3xoYmEvaGIyLzkwODc0NjczODg5NTgva2lkcy1scC1zZWMtMi0xMG9jdDIyLTUuanBnfDYzZDk1Y2U2OTNmMDhhMzI3ZTIwMTIyMTcyZjA3ODUzMTk5OTNlMjYyOTFhM2NjMTg1YzdlNWFlZGVmOGFiMDk',
        landingPage: ':relevance:allCategories:infant-boys-shirts-short-kurtas',
        category: '63aad98915519f83a5972aa6',
        sortorder: 106,
        title: 'Shirts',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-30T06:21:12.899Z',
        updatedAt: '2022-12-30T13:21:02.098Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: '/Infants',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Infants',
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    NewInGirls: [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/kids-lp-sec3-10oct22-1.jpg?context=bWFzdGVyfHJvb3R8MTgxNTB8aW1hZ2UvanBlZ3xoY2IvaGI1LzkwODc0Njc0NTQ0OTQva2lkcy1scC1zZWMzLTEwb2N0MjItMS5qcGd8NzExNDJlNDZmMGNhNzdiYTIwZDg2Y2RkNGE4YWRkZjVlYjdhMjAyYTU4ZDU3ZGFjOTBjNGRhODJhYTVjNTE1OA',
        landingPage: ':relevance:allCategories:girls-ethnic-sets',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Ethnic Sets',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: '/Girls',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Girls',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/kids-lp-sec3-10oct22-2.jpg?context=bWFzdGVyfHJvb3R8MTU2NzN8aW1hZ2UvanBlZ3xoZGQvaGI4LzkwODc0Njc1MjAwMzAva2lkcy1scC1zZWMzLTEwb2N0MjItMi5qcGd8NGRlMGQ4OTJhN2E5ZGFmMmNmOTk2MTgwZTM3NmYzYjQwYWJkM2NlMjVlYTZmZDkyYzM2N2VmMTcyZWFhYzM0MA',
        landingPage: ':relevance:allCategories:girls-dresses-jumpsuits',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Dress & Jumpsuits',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: '/Girls',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Girls',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaf1d415519f83a5972ba7',
        image:
          'https://apisap.fabindiahome.com/medias/kids-lp-sec3-10oct22-3.jpg?context=bWFzdGVyfHJvb3R8MjEyOTh8aW1hZ2UvanBlZ3xoOGEvaGI5LzkwODc0Njc1ODU1NjYva2lkcy1scC1zZWMzLTEwb2N0MjItMy5qcGd8NGU2ZTBmYjIxZmY0N2ZlNmU2YjU5M2RiYzlkNGY3NDI3NGEyMGMzMjdhNDgxYjQ3ZGY3MGRhMGVjZjUxZjAzNg',
        landingPage: ':relevance:allCategories:girls-kurtas',
        category: '63aad98915519f83a5972aa6',
        sortorder: 17,
        title: 'Kurtas',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:23:32.461Z',
        updatedAt: '2022-12-30T13:20:41.484Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: '/Girls',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Girls',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63ae833abcb1a02702f7bde6',
        image:
          'https://apisap.fabindiahome.com/medias/kids-lp-sec3-10oct22-4.jpg?context=bWFzdGVyfHJvb3R8MTYwMzV8aW1hZ2UvanBlZ3xoOWMvaGJjLzkwODc0Njc2NTExMDIva2lkcy1scC1zZWMzLTEwb2N0MjItNC5qcGd8MGMyMjcwOTU5OTk1NzY5Y2M5MWI1MjEzZWVlOTNiZWFmM2Q1NjIxZGVkZWI5OTViOGU1NTJjZjUzMTg3NjJlYg',
        landingPage: ':relevance:allCategories:girls-tops-t-shirts',
        category: '63aad98915519f83a5972aa6',
        sortorder: 105,
        title: 'Tops & T-Shirts',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-30T06:20:42.160Z',
        updatedAt: '2022-12-30T13:20:53.919Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: '/Girls',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Girls',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63ae8358bcb1a02702f7bdef',
        image:
          'https://apisap.fabindiahome.com/medias/kids-lp-sec3-10oct22-5.jpg?context=bWFzdGVyfHJvb3R8MTk5MjR8aW1hZ2UvanBlZ3xoOWEvaGJmLzkwODc0Njc3MTY2Mzgva2lkcy1scC1zZWMzLTEwb2N0MjItNS5qcGd8NWMwYTU4NTgyMmUzMjM3YzEyMzM2YmI5ODgwZTdmNzBkM2RmMzYwNDM4NDY1NmYzM2I2ZDgxMjBhYzJjOTE4OA',
        landingPage: ':relevance:allCategories:girls-shorts-skirts',
        category: '63aad98915519f83a5972aa6',
        sortorder: 106,
        title: 'Shorts & Skirts',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-30T06:21:12.899Z',
        updatedAt: '2022-12-30T13:21:02.098Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: '/Girls',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Girls',
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    NewInBoys: [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/kids-lp-sec4-10oct22-1.jpg?context=bWFzdGVyfHJvb3R8MTM4Mzd8aW1hZ2UvanBlZ3xoNWIvaGMwLzkwODc0Njc3ODIxNzQva2lkcy1scC1zZWM0LTEwb2N0MjItMS5qcGd8YTI2NTczNDg0NWZhZDQwOGZiMjg2OGMyMmE3ZjUzNjdjYWFlMDhmYTNhNWZlNjM5YjQ0ODA2ZDc4YjU1MGM4YQ',
        landingPage: ':relevance:allCategories:boys-kurtas',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Kurtas',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: '/Boys',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Boys',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/kids-lp-sec4-10oct22-2.jpg?context=bWFzdGVyfHJvb3R8MTUwOTN8aW1hZ2UvanBlZ3xoNTkvaGMzLzkwODc0Njc4NDc3MTAva2lkcy1scC1zZWM0LTEwb2N0MjItMi5qcGd8ZTQ4ZjE5OWZkNTc3MWIxODFiZjRmM2NmZGVhNmI0OWUwMWM4ODA3MTJkMmJiMzQ5YmY3Yjc1NmNlYjFmYjBlZQ',
        landingPage: ':relevance:allCategories:ethnic-boys-jackets',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Jackets',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: '/Boys',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Boys',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/kids-lp-sec4-10oct22-3.jpg?context=bWFzdGVyfHJvb3R8MTU0MjR8aW1hZ2UvanBlZ3xoNmEvaGM2LzkwODc0Njc5MTMyNDYva2lkcy1scC1zZWM0LTEwb2N0MjItMy5qcGd8MDQ0ZDkzMzczMWYwYjlhZDk5MDM3NmUxYzllZmQ3MThlNTRiYWVjYjE2M2QyMzlmMzIwNjUxZjhmMGJlNjQ4Mg',
        landingPage: ':relevance:allCategories:ethnic-boys-sets',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Ethnic Sets',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: '/Boys',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Boys',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/kids-lp-sec4-10oct22-4.jpg?context=bWFzdGVyfHJvb3R8MjUyODd8aW1hZ2UvanBlZ3xoMTgvaGM3LzkwODc0Njc5Nzg3ODIva2lkcy1scC1zZWM0LTEwb2N0MjItNC5qcGd8Y2MzZTk0ZmZkMDkxZGY2ZmQwYTk5NGY1ZmMwZjgxYjk1NGIzMjExNDMzZGFhODYzMWM4Yzc3YTVlNzBjNDk5Mw',
        landingPage: ':relevance:allCategories:boys-shirts-short-kurtas',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Shirt & Short Kurta',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: '/Boys',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Boys',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/kids-lp-sec4-10oct22-5.jpg?context=bWFzdGVyfHJvb3R8MTUwOTl8aW1hZ2UvanBlZ3xoMmEvaGVlLzkwODc0NjgwNDQzMTgva2lkcy1scC1zZWM0LTEwb2N0MjItNS5qcGd8YmE4YzFlYTc3YTNlMjk5M2YyZGRlZTY3MTk1NjkwMTljZGM2MjcxY2ZmNzk1YzM2MTlhNDQyMWRlNzRiYjcxMg',
        landingPage: ':relevance:allCategories:boys-churidars-pyjamas-dhotis',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Ethnic Bottomwear',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: '/Boys',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Boys',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/kids-lp-sec4-10oct22-6.jpg?context=bWFzdGVyfHJvb3R8MTUzMjd8aW1hZ2UvanBlZ3xoZWYvaGFlLzkwODkxMDUxNjYzNjYva2lkcy1scC1zZWM0LTEwb2N0MjItNi5qcGd8YTVhOTM0MDM4NzY1MmI0MDZmM2VlYzgxNWIyNWQyZjQ4MjgxZmQ1YzUxMzI0ZTQ3N2FjYjBjZmE2OTNlZWI3ZA',
        landingPage: ':relevance:allCategories:boys-pants-shorts',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Western Bottomwear',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: '/Boys',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Boys',
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    ShopByCategory: [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/kids-lp-sec5-10oct22-1.jpg?context=bWFzdGVyfHJvb3R8Nzg2MTB8aW1hZ2UvanBlZ3xoMmQvaGViLzkwODc0NjgxMDk4NTQva2lkcy1scC1zZWM1LTEwb2N0MjItMS5qcGd8NTAwZmJjMzA5NTg5OThlMGIwMDQ3ZWEyZjFiOWI5MzljZGQyNzU3Njg1NTkxZTFjNzhhZGZkNzFhMmI3ODY2Mg',
        landingPage: ':relevance:allCategories:girls-ethnic-wear',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Girl Ethnic Wear`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Shop by Category/Dress you young ones as their fashionable selves',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Shop by Category/Dress you young ones as their fashionable selves',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/kids-lp-sec5-10oct22-3.jpg?context=bWFzdGVyfHJvb3R8NjQ2ODd8aW1hZ2UvanBlZ3xoYmYvaDVhLzkwODc2MzAwNDkzMTAva2lkcy1scC1zZWM1LTEwb2N0MjItMy5qcGd8ZTFjOGUxZDMxNTcwOTYwMGFiY2YzOTU4NTBlZThkMWNiYjg4YWEzMmI1Mzk5Y2MyZjllYzc2MTVhMDMwZmQwYg',
        landingPage: ':relevance:allCategories:infant-boys',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Infant Boys`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Shop by Category/Dress you young ones as their fashionable selves',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Shop by Category/Dress you young ones as their fashionable selves',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/kids-lp-sec5-10oct22-4.jpg?context=bWFzdGVyfHJvb3R8NzExMzZ8aW1hZ2UvanBlZ3xoYWUvaDU3LzkwODc2MzAxMTQ4NDYva2lkcy1scC1zZWM1LTEwb2N0MjItNC5qcGd8NWMxNmIwZmNlODM0ODMyMjI1OTc5MDg1MDkxNzBjZDZmYjI1OWYxMTI1ZTQxZmY1MzlmYjUzNjQxZmZkNTQ4Yg',
        landingPage: ':relevance:allCategories:infant-girls',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Infant Girls`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Shop by Category/Dress you young ones as their fashionable selves',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Shop by Category/Dress you young ones as their fashionable selves',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/kids-lp-sec5-10oct22-5.jpg?context=bWFzdGVyfHJvb3R8NzY5NTl8aW1hZ2UvanBlZ3xoZWMvaDU2LzkwODc2MzAxODAzODIva2lkcy1scC1zZWM1LTEwb2N0MjItNS5qcGd8NDQ3ODQ5NjBhMWU1YTkzYzI5ZTQxZTM2Y2ZiOTRkOGM1MmFkNDM5ODFiNTc5ZGUxOTExN2U1MjMzNDRjODQyOQ',
        landingPage: ':relevance:allCategories:boys-western-wear',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Boys Western Wear`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Shop by Category/Dress you young ones as their fashionable selves',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Shop by Category/Dress you young ones as their fashionable selves',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/kids-lp-sec5-10oct22-6.jpg?context=bWFzdGVyfHJvb3R8MTAwMzI4fGltYWdlL2pwZWd8aGVmL2g1My85MDg3NjMwMjQ1OTE4L2tpZHMtbHAtc2VjNS0xMG9jdDIyLTYuanBnfDFiOGUzNTdiZTQzYTc4YTc1MDBmOTU3MmYzZDQxNGQ2ODg0ZmIxN2UzMTc3NzFmMDNjYjg4MDgxY2U3OTY2MTY',
        landingPage: ':relevance:allCategories:girls-western-wear',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Girls Western Wear`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Shop by Category/Dress you young ones as their fashionable selves',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Shop by Category/Dress you young ones as their fashionable selves',
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    BrightBanner: [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/kd-lpsec7-mob-19oct22.jpg?context=bWFzdGVyfHJvb3R8ODY1OTR8aW1hZ2UvanBlZ3xoM2IvaDYzLzkwOTExMDYwNzg3NTAva2QtbHBzZWM3LW1vYi0xOW9jdDIyLmpwZ3xjMGEyZWFjMDZiYzI4MjNmZWI5OThlNzZiYWRkZDhhYTdiZjhmOGNkMzc3NGY5NzlmMzQ2ODFkMTA0NGNiY2Yx',
        landingPage:
          ':creationtime-desc:allCategories:kids-products:Craft:Hand Block Print',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Printed Collection`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: `Printed Collection`,
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: `Printed Collection`,
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    ShopByAge: [
      {
        _id: '63aae8c115519f83a5972b4a',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Shop by Age/Made to give your kid the best fit; let their adorable selves shine at every age',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName:
          'Shop by Age/Made to give your kid the best fit; let their adorable selves shine at every age',
        createdAt: '2022-12-27T12:44:49.616Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/kids-clp-sec8col1img1?context=bWFzdGVyfGltYWdlc3wyODQ1N3xpbWFnZS9qcGVnfGgzYS9oNGEvODkxMDg0OTM3NjI4Ni9raWRzLWNscC1zZWM4Y29sMWltZzF8YzUzMDgyMDMzYzNlYTlmMzNhNDZlNDkyNmZmNDkxMGJmY2I3YzYyZmRjMDIyMDNkOWJkMmE3ODUzNjFlY2E2Mw',
        is_enable: true,
        is_slider: true,
        landingPage:
          ':creationtime-desc:allCategories:kids-products:SIZE_F:3-6M',
        sortorder: 11,
        title: `3 - 6 M`,
        updatedAt: '2023-01-03T05:59:51.680Z',
      },
      {
        _id: '63ac4371f6a2493189ca4048',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Shop by Age/Made to give your kid the best fit; let their adorable selves shine at every age',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName:
          'Shop by Age/Made to give your kid the best fit; let their adorable selves shine at every age',
        createdAt: '2022-12-28T13:24:01.900Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/kids-clp-sec8col1img2?context=bWFzdGVyfGltYWdlc3wyNzE4MHxpbWFnZS9qcGVnfGg5My9oNDcvODkxMDg0OTQwOTA1NC9raWRzLWNscC1zZWM4Y29sMWltZzJ8NDM0N2Q5NjcxYzg1ZDE0ZDkwZWZiNTNjMGM2OGJlNGE5M2VjN2IzODEwNmRlMmFlZGY4NWVjNzYyYWMzMWZmZg',
        is_enable: true,
        is_slider: true,
        landingPage:
          ':creationtime-desc:allCategories:kids-products:SIZE_F:6-12M',
        sortorder: 5,
        title: `6 - 12 M`,

        updatedAt: '2023-01-03T05:59:51.682Z',
      },
      {
        _id: '63ae63e3ce2829923f67fdf1',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Shop by Age/Made to give your kid the best fit; let their adorable selves shine at every age',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName:
          'Shop by Age/Made to give your kid the best fit; let their adorable selves shine at every age',
        createdAt: '2022-12-30T04:06:59.301Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/kids-clp-sec8col1img3?context=bWFzdGVyfGltYWdlc3wxNzM3MnxpbWFnZS9qcGVnfGgyOS9oNDcvODkxMDg0OTQ0MTgyMi9raWRzLWNscC1zZWM4Y29sMWltZzN8NWVhNjI5OTAxZWI2ZjU2NmQ4MzkxM2I5MDZlZjg4NDAwYWRlYThkYmJhMmM5YjBjNGEyODVmZDc3NWYxMzllZQ',
        is_enable: true,
        is_slider: true,
        landingPage:
          ':creationtime-desc:allCategories:kids-products:SIZE_F:12-18M',
        sortorder: 9,
        title: `12 - 18 M`,
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Shop by Age/Made to give your kid the best fit; let their adorable selves shine at every age',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName:
          'Shop by Age/Made to give your kid the best fit; let their adorable selves shine at every age',
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/kids-clp-sec8col2img2.jpg?context=bWFzdGVyfHJvb3R8MjEzMjV8aW1hZ2UvanBlZ3xoNzkvaGUwLzg5NTc4MDU3ODkyMTQva2lkcy1jbHAtc2VjOGNvbDJpbWcyLmpwZ3w5NGUxMzNhY2VmNThjODYzODIyZTQ0ZjNjZGM4Y2Y1NzM5YjYzZjdhMjEwMDM5M2M1NDhmYjhjZWUyMTI2NmVi',
        is_enable: true,
        is_slider: true,
        landingPage:
          ':creationtime-desc:allCategories:kids-products:SIZE_F:18-24M',
        sortorder: 3,
        title: `18 - 24 M`,
        updatedAt: '2023-01-03T05:59:51.683Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Shop by Age/Made to give your kid the best fit; let their adorable selves shine at every age',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName:
          'Shop by Age/Made to give your kid the best fit; let their adorable selves shine at every age',
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/kids-clp-sec8col2img3.jpg?context=bWFzdGVyfHJvb3R8MTg0NDl8aW1hZ2UvanBlZ3xoOGEvaGUzLzg5NTc4MDU4NTQ3NTAva2lkcy1jbHAtc2VjOGNvbDJpbWczLmpwZ3w5NjY1ZDQ5Y2UzZmNlZThkZDE2OGEwYzUyNzEwNDEyMjZjNzVjYmMwMGYxNDA3YTQ4MTRhNDkyNjk1NDUzOWMz',
        is_enable: true,
        is_slider: true,
        landingPage:
          ':creationtime-desc:allCategories:kids-products:SIZE_F:2-3Y',
        sortorder: 3,
        title: `2 - 3 Y`,
        updatedAt: '2023-01-03T05:59:51.683Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Shop by Age/Made to give your kid the best fit; let their adorable selves shine at every age',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName:
          'Shop by Age/Made to give your kid the best fit; let their adorable selves shine at every age',
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/kids-clp-sec8col2img1?context=bWFzdGVyfGltYWdlc3wxMDYyNzd8aW1hZ2UvanBlZ3xoZDIvaDQ2Lzg5MTA4NDk0NzQ1OTAva2lkcy1jbHAtc2VjOGNvbDJpbWcxfDQxMjE2ODJhZWY0NDdlY2QxYzZmYzE0MGEzYWM0ZTg1OWMyYjNiYjZkMzEzMWE4NThiMTI5NWFmNzZkMjQwMmE',
        is_enable: true,
        is_slider: true,
        landingPage:
          ':creationtime-desc:allCategories:kids-products:SIZE_F:3-4Y',
        sortorder: 3,
        title: `3 - 4 Y`,
        updatedAt: '2023-01-03T05:59:51.683Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Shop by Age/Made to give your kid the best fit; let their adorable selves shine at every age',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName:
          'Shop by Age/Made to give your kid the best fit; let their adorable selves shine at every age',
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/kids-clp-sec8col3img1.jpg?context=bWFzdGVyfHJvb3R8MjY0Nzl8aW1hZ2UvanBlZ3xoOWIvaGU2Lzg5NTc4MDU5MjAyODYva2lkcy1jbHAtc2VjOGNvbDNpbWcxLmpwZ3xkNWI5NzI5YWVjYWI0YzYxMGExMThmM2YzYTFmNTMxYmRjMzhiNWQ5NWIzZWUxYjY4MTk5MmY2MDY1MjNjODAz',
        is_enable: true,
        is_slider: true,
        landingPage:
          ':creationtime-desc:allCategories:kids-products:SIZE_F:4-6Y',
        sortorder: 3,
        title: `4 - 6 Y`,
        updatedAt: '2023-01-03T05:59:51.683Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Shop by Age/Made to give your kid the best fit; let their adorable selves shine at every age',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName:
          'Shop by Age/Made to give your kid the best fit; let their adorable selves shine at every age',
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/6-8-years.jpg?context=bWFzdGVyfHJvb3R8ODcwNXxpbWFnZS9qcGVnfGgxNS9oMjIvOTAxNTU3NTI0ODkyNi82IC0gOCB5ZWFycy5qcGd8MjFmMWIxNmJkOGZiMmQyYjIzYmIxOTlkZmQ0Y2Q2MjRkMzczMTg2NWUyMjcyZjg0ZDQ0YWViMjk3ZmYzNzA0OA',
        is_enable: true,
        is_slider: true,
        landingPage:
          ':creationtime-desc:allCategories:kids-products:SIZE_F:6-8Y',
        sortorder: 3,
        title: `6 - 8 Y`,
        updatedAt: '2023-01-03T05:59:51.683Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Shop by Age/Made to give your kid the best fit; let their adorable selves shine at every age',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName:
          'Shop by Age/Made to give your kid the best fit; let their adorable selves shine at every age',
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/kids-clp-sec8col3img2.jpg?context=bWFzdGVyfHJvb3R8MjY0NDF8aW1hZ2UvanBlZ3xoNDkvaGU3Lzg5NTc4MDU5ODU4MjIva2lkcy1jbHAtc2VjOGNvbDNpbWcyLmpwZ3w4ODdkNzU0NjIwMDVhZTNiOTBlOTJlYzZiOWRhNTljOTJhMWE3MmE0YjkyN2ZkNDZkMDU2NGJiYzY3YTQwOTZh',
        is_enable: true,
        is_slider: true,
        landingPage:
          ':creationtime-desc:allCategories:kids-products:SIZE_F:8-10Y',
        sortorder: 3,
        title: `8 - 10 Y`,
        updatedAt: '2023-01-03T05:59:51.683Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Shop by Age/Made to give your kid the best fit; let their adorable selves shine at every age',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName:
          'Shop by Age/Made to give your kid the best fit; let their adorable selves shine at every age',
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/kids-clp-sec8col3img3.jpg?context=bWFzdGVyfHJvb3R8MTMwNDF8aW1hZ2UvanBlZ3xoZjkvaGNkLzg5NTc4MDYwNTEzNTgva2lkcy1jbHAtc2VjOGNvbDNpbWczLmpwZ3wzYTVmNDc1MDIxOGI4MmM4ZjlmODQyMTVjNGY1NzNiNTBiYjBjZjNiZWZiNzI2MzgwNDViZjhhMmJhZWRhM2Y2',
        is_enable: true,
        is_slider: true,
        landingPage:
          ':creationtime-desc:allCategories:kids-products:SIZE_F:10-12Y',
        sortorder: 3,
        title: `10 - 12 Y`,
        updatedAt: '2023-01-03T05:59:51.683Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Shop by Age/Made to give your kid the best fit; let their adorable selves shine at every age',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName:
          'Shop by Age/Made to give your kid the best fit; let their adorable selves shine at every age',
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/12-14-years.jpg?context=bWFzdGVyfHJvb3R8MTkwMDZ8aW1hZ2UvanBlZ3xoNTYvaDFlLzkwMTU1NzUzNzk5OTgvMTIgLSAxNCB5ZWFycy5qcGd8NDE5NzIxNTVmYjI0YzE3YzhjZGRiNDhhNWUwOWRiMmFjNDZkNDZiZDRlMTdlYzZhOTBmY2Y1M2QxNWJhMDE5ZA',
        is_enable: true,
        is_slider: true,
        landingPage:
          ':creationtime-desc:allCategories:kids-products:SIZE_F:12-14Y',
        sortorder: 3,
        title: `12 - 14 Y`,
        updatedAt: '2023-01-03T05:59:51.683Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Shop by Age/Made to give your kid the best fit; let their adorable selves shine at every age',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName:
          'Shop by Age/Made to give your kid the best fit; let their adorable selves shine at every age',
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/Shop-all.jpg?context=bWFzdGVyfHJvb3R8NzgyMzF8aW1hZ2UvanBlZ3xoMzMvaDE4LzkwMTU1NzU1MTEwNzAvU2hvcCBhbGwuanBnfGZiMjQzNjMwYzNmNjRhZWYwYmUxY2U0Mzg4OGY0YTU0YTBkMDQ2ZjVkODFmNTM0MzhkOGI3N2M4ZGMzNDI0ODg',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:kids-products',
        sortorder: 3,
        title: `All Age Group`,
        updatedAt: '2023-01-03T05:59:51.683Z',
      },
    ],
    upto50: [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/kd-lpsec9-mob-19oct22.jpg?context=bWFzdGVyfHJvb3R8NjYxMjN8aW1hZ2UvanBlZ3xoNmIvaDVjLzkwOTExMDYyNzUzNTgva2QtbHBzZWM5LW1vYi0xOW9jdDIyLmpwZ3xhOTNmNTZiYWNlNThlMzhjZDYyMzUxOTQyNjg4M2I1YjM4MjRjMzhlMTc3YjVmZjJjNzI0ZWY4ODZiMGJhYmNl',
        landingPage: ':relevance:allCategories:sale-kids-products',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Sale On Kids Clothing`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: `Sale On Kids Clothing`,
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: `Sale On Kids Clothing`,
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    TopSellers: [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/kd-lpsec10-19oct22-1.jpg?context=bWFzdGVyfHJvb3R8MTM4OTE2fGltYWdlL2pwZWd8aDVhL2g1OS85MDkxMTA2MzQwODk0L2tkLWxwc2VjMTAtMTlvY3QyMi0xLmpwZ3xmNTEwMTc2ZTZiMWMwODlmOWMzMzk3MmM3NGFiYWMzYTA1YWY0NDhkMjgyMzQ4YTY4Mjk0N2FiYmVkMTM0YWFm',
        landingPage: ':relevance:allCategories:boys-kurtas',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Boys Kurta`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Top Sellers/Give your little one only the best of soft fabrics & cute prints for their wardrobe',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Top Sellers/Give your little one only the best of soft fabrics & cute prints for their wardrobe',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/kd-lpsec10-19oct22-2.jpg?context=bWFzdGVyfHJvb3R8MTMzNzM4fGltYWdlL2pwZWd8aDVjL2g1Ni85MDkxMTA2NDA2NDMwL2tkLWxwc2VjMTAtMTlvY3QyMi0yLmpwZ3wxOThhM2NiMjM1OTFmYzUwYzhhZTczM2QyMjgyZGVjMjU1OGE4OTYxMTgwYzFkNDVlZGQxN2U4MDM5ODcyMzI3',
        landingPage: ':relevance:allCategories:girls-ethnic-sets',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Girls Ethnic Sets`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Top Sellers/Give your little one only the best of soft fabrics & cute prints for their wardrobe',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Top Sellers/Give your little one only the best of soft fabrics & cute prints for their wardrobe',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/kd-lpsec10-19oct22-3.jpg?context=bWFzdGVyfHJvb3R8NjU2ODh8aW1hZ2UvanBlZ3xoOWIvaDU1LzkwOTExMDY0NzE5NjYva2QtbHBzZWMxMC0xOW9jdDIyLTMuanBnfGM1MTE1ZmVmN2U3ZTYwYjE0MjcwMTVmYzhjN2NiYmZkNmMxMTc2OWI5Y2UwMjFkMjQ0NmQ5NDI2NzRjMjc2ZjY',
        landingPage: ':relevance:allCategories:infant-boys-sets',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Infant Boys Sets`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Top Sellers/Give your little one only the best of soft fabrics & cute prints for their wardrobe',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Top Sellers/Give your little one only the best of soft fabrics & cute prints for their wardrobe',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/kd-lpsec10-19oct22-4-rep.jpg?context=bWFzdGVyfHJvb3R8NzkwNzZ8aW1hZ2UvanBlZ3xoOWUvaGQ2LzkwOTExMTI1OTk1ODIva2QtbHBzZWMxMC0xOW9jdDIyLTQtcmVwLmpwZ3wwYmNhOWU0YzBlM2RhMWM0NWEyMWFmNGY1NzY0ZDc4ZWIxZDlhNzgwODJmNDQ5MDlmNTM1NTM0ZTFhZjlkMDBi',
        landingPage: ':relevance:allCategories:infant-girls-sets',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Infant Girls Sets`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Top Sellers/Give your little one only the best of soft fabrics & cute prints for their wardrobe',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Top Sellers/Give your little one only the best of soft fabrics & cute prints for their wardrobe',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/kd-lpsec10-19oct22-5.jpg?context=bWFzdGVyfHJvb3R8NzE1MzR8aW1hZ2UvanBlZ3xoOGIvaDRmLzkwOTExMDY2MDMwMzgva2QtbHBzZWMxMC0xOW9jdDIyLTUuanBnfDAyNzkzYTgyMGU3YjFiZmE4YzZlZjI2N2I3NjJhMDM5NWZlNjdhZjRhZGRhN2ZmMGYxMzQ2MmM0MzQ4OTM5ZTQ',
        landingPage: ':relevance:allCategories:boys-shirts-short-kurtas',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Boys Shirts`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Top Sellers/Give your little one only the best of soft fabrics & cute prints for their wardrobe',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Top Sellers/Give your little one only the best of soft fabrics & cute prints for their wardrobe',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/kd-lpsec10-19oct22-6.jpg?context=bWFzdGVyfHJvb3R8MTEzMjY4fGltYWdlL2pwZWd8aGRlL2g0ZS85MDkxMTA2NjY4NTc0L2tkLWxwc2VjMTAtMTlvY3QyMi02LmpwZ3wxZTU2YjkwY2UwMTFiOTI5M2MzOWZhZDJiMDhmNTZkMzEyZTFhYjI4YzNlZmZmZjBmMjI1NTE2NDE5MDM5N2Q5',
        landingPage: ':relevance:allCategories:girls-dresses-jumpsuits',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Girls Dresses`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Top Sellers/Give your little one only the best of soft fabrics & cute prints for their wardrobe',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Top Sellers/Give your little one only the best of soft fabrics & cute prints for their wardrobe',
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    BabyCarousel: [
      {
        _id: '63aae8c115519f83a5972b4a',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Indigo`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `Indigo`,
        createdAt: '2022-12-27T12:44:49.616Z',
        image:
          'https://apisap.fabindiahome.com/medias/kd-lpsec12-19oct22-2.jpg?context=bWFzdGVyfHJvb3R8MzMyNDM5fGltYWdlL2pwZWd8aDFlL2g0Yi85MDkxMTA2Nzk5NjQ2L2tkLWxwc2VjMTItMTlvY3QyMi0yLmpwZ3xlNjI2ODdkNWNjMTNmYjc1NjFmMDk2ZGQ2ODhiNTBlYTg0MjRjODZiZjNiMjM3MTcxNjRlZTM4ZTkzYmVmMzFi',
        is_enable: true,
        is_slider: true,
        landingPage: 'kids sleepwear:creationtime-desc:B2CL1:Kids',
        sortorder: 11,
        title: `Indigo`,
        updatedAt: '2023-01-03T05:59:51.680Z',
      },
      {
        _id: '63ac4371f6a2493189ca4048',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Kids Sleepwear`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `Kids Sleepwear`,
        createdAt: '2022-12-28T13:24:01.900Z',
        image:
          'https://apisap.fabindiahome.com/medias/kd-lpsec12-19oct22-1.jpg?context=bWFzdGVyfHJvb3R8MTY3MDA2fGltYWdlL2pwZWd8aGNjL2g0Yi85MDkxMTA2NzM0MTEwL2tkLWxwc2VjMTItMTlvY3QyMi0xLmpwZ3w5NDQwMmM2Mjg0Mzg5YTYwZWRiMmQwNjU1Njg0MWNkNjE3MjJkM2JhNWVhYzRkY2VhOTM1MzY5OGQ5ZDljOWRm',
        is_enable: true,
        is_slider: true,
        landingPage:
          ':creationtime-desc:allCategories:kids-products:Color:NAVY:Color:INDIGO:Color:BLUE',
        sortorder: 5,
        title: `Kids Sleepwear`,
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
    ],
    Collections: [
      {
        _id: '63aae8c115519f83a5972b4a',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `All Infant Wear`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `All Infant Wear`,
        createdAt: '2022-12-27T12:44:49.616Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/kd-lpsec13-19oct22-1.jpg?context=bWFzdGVyfHJvb3R8MTAzODY4fGltYWdlL2pwZWd8aDBkL2g0OC85MDkxMTA2ODY1MTgyL2tkLWxwc2VjMTMtMTlvY3QyMi0xLmpwZ3w0ZTg5ZTMxMjk4MjM1NTY0Mjk4ZjE4MTQyYjhlNmFkN2MyOGI2ZDNlNjdjMTM1YzEyMzMyNDgxYzQxMWYzZTE3',
        is_enable: true,
        is_slider: true,
        landingPage:
          ':creationtime-desc:allCategories:kids-products:SIZE_F:3-6M:SIZE_F:18-24M:SIZE_F:6-12M:SIZE_F:12-18M',
        sortorder: 11,
        title: `All Infant Wear`,
        updatedAt: '2023-01-03T05:59:51.680Z',
      },
      {
        _id: '63ac4371f6a2493189ca4048',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `All Boys and Girls`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `All Boys and Girls`,
        createdAt: '2022-12-28T13:24:01.900Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/kd-lpsec13-19oct22-2.jpg?context=bWFzdGVyfHJvb3R8MTI1MTY0fGltYWdlL2pwZWd8aGZjL2g0NC85MDkxMTA2OTMwNzE4L2tkLWxwc2VjMTMtMTlvY3QyMi0yLmpwZ3xlZmNjOTRjMDEyNzg3NjU4ZmU0Y2QwMGYzNTViOTcxNzMyNmRlNDhmM2UzNDg2Yzc2ZDMxNzg5ZTFiZjViN2I2',
        is_enable: true,
        is_slider: true,
        landingPage:
          ':creationtime-desc:allCategories:kids-products:SIZE_F:2-3Y:SIZE_F:3-4Y:SIZE_F:4-6Y:SIZE_F:6-8Y:SIZE_F:8-10Y:SIZE_F:10-12Y:SIZE_F:12-14Y:SIZE_F:11',
        sortorder: 5,
        title: `All Boys and Girls`,
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
      {
        _id: '63ae63e3ce2829923f67fdf1',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Handcrafted Curartion - All Age Groups',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: 'Handcrafted Curartion - All Age Groups',
        createdAt: '2022-12-30T04:06:59.301Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/kd-lpsec13-19oct22-3.jpg?context=bWFzdGVyfHJvb3R8MTE2NjE0fGltYWdlL2pwZWd8aDZkL2gwNi85MDkxMTA3MDYxNzkwL2tkLWxwc2VjMTMtMTlvY3QyMi0zLmpwZ3w4ZjRkYzM2ZTE5ZTA0OTFmMDFlYzQ2MTA1MzcyYzk0OTZmY2RhNDJkMmVjYzQ2N2M1ODI3OTEzN2QyZDM4OGMw',
        is_enable: true,
        is_slider: true,
        landingPage:
          ':creationtime-desc:allCategories:kids-products:Craft:Bandhani:Craft:Bagru:Craft:Ajrakh:Craft:Kalamkari:Craft:Dabu:Craft:Ikat:Craft:Chikankari:Craft:Hand Embroidery:Craft:Hand Block Print',
        sortorder: 9,
        title: `Handcrafted Curartion`,
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Wedding Picks',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: 'Wedding Picks',
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/kd-lpsec13-19oct22-4.jpg?context=bWFzdGVyfHJvb3R8MTM0Mzk2fGltYWdlL2pwZWd8aDZjL2gwOS85MDkxMTA3MTI3MzI2L2tkLWxwc2VjMTMtMTlvY3QyMi00LmpwZ3wyYjA1NzZhNjU0OTZkMmVlYjI2YmZkYjVjOGZiYWVmMTIxMTE1ZjYxZDViM2ViNTI0MjFiMzAwODA3ZjFjOWNl',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:wedding-kids',
        sortorder: 3,
        title: 'Wedding Picks',
        updatedAt: '2023-01-03T05:59:51.683Z',
      },
    ],
  };
  const HomPageSections = {
    topSwiper: 'topSwiper',
    NewInInfants: 'NewInInfants',
    NewInGirls: 'NewInGirls',
    NewInBoys: 'NewInBoys',
    ShopByCategory: 'ShopByCategory',
    BrightBanner: 'BrightBanner',
    ShopByAge: 'ShopByAge',
    upto50: 'upto50',
    TopSellers: 'TopSellers',
    BabyCarousel: 'BabyCarousel',
    Collections: 'Collections',
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
              isSap={true}
              {...props}
              isAdmin2={'isAdmin2'}
              customStyle={{marginVertical: 20}}
              bgColor={{backgroundColor: '#F3E0E0'}}
              data={data?.[HomPageSections.NewInInfants]}
            />
            <NewHighlights
              {...props}
              isSap={true}
              isAdmin2={'isAdmin2'}
              customStyle={{marginVertical: 20}}
              bgColor={{backgroundColor: '#F3E0E0'}}
              data={data?.[HomPageSections.NewInGirls]}
            />
            <NewHighlights
              isSap={true}
              {...props}
              isAdmin2={'isAdmin2'}
              customStyle={{marginVertical: 20}}
              bgColor={{backgroundColor: '#F3E0E0'}}
              data={data?.[HomPageSections.NewInBoys]}
            />
            <LifeStyle
              isAdmin2={'isAdmin2'}
              {...props}
              customViewStyle={{marginVertical: 20}}
              data={data?.[HomPageSections.ShopByCategory]}
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
                  uri: data?.[HomPageSections.BrightBanner][0].image,
                }}
                style={{height: 213, width: width}}
              />
            </TouchableOpacity>
            <CommonImageGrid
              isAdmin2="isAdmin2"
              {...props}
              data={data?.[HomPageSections.ShopByAge]}
            />
            <SingleBanner
              data={data?.[HomPageSections.upto50][0]}
              {...props}
              isAdmin2="isAdmin2"
            />
            <LifeStyle
              isAdmin2={'isAdmin2'}
              {...props}
              customViewStyle={{marginVertical: 20}}
              data={data?.[HomPageSections.TopSellers]}
              // title={GetLifeStyleTitle}
              backgroundColor="#F8F2EF"
            />
            <WomenTab data={filteredComp[1]} {...props} />
            <CommonCarousel
              {...props}
              isSap={true}
              data={data?.[HomPageSections.BabyCarousel]}
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
    </>
    // <>
    //   <HomeHeader
    //     customViewStyle={{backgroundColor: '#FFFFFF'}}
    //     {...props}
    //     headertext={title}
    //   />

    //   <FlatList
    //     contentContainerStyle={{
    //       backgroundColor: Colors.backgroundColor,
    //       paddingBottom: 20,
    //       flexGrow: 1,
    //     }}
    //     data={filteredComp}
    //     keyExtractor={(item, index) => index}
    //     renderItem={item => checkSwitch(item.item)}
    //   />
    // </>
  );
};

export default KidsCatagory;
