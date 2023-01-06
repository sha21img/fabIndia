import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';
import {LandingPageHomeLiving} from '../../../../../constant';
import CommonCarousel from '../../../../Common/CommonCarousel';
import TopSwiper from '../../../../Common/TopSwiper';
import {getData} from '../../../../Common/Helper';
import LifeStyle from '../../../../Common/LifeStyle';
import WomenTab from '../../Tabs.js/WomenTab';
import SingleBanner from '../../../../Common/SingleBanner';
import CollectionCard from '../../../../Common/CollectionCard';
import NewHighlights from '../../../../Common/NewHighlights';
import HomeHeader from '../../HomeHeader';
const width = Dimensions.get('window').width;

export default function HomeCatagory(props) {
  const {title} = props.route.params;

  const [active, setActive] = React.useState('Bestsellers');
  const [Ids, setIds] = React.useState([]);
  const [sectionData, setSectionData] = React.useState([]);
  const [filteredComp, setFilteredComp] = React.useState([]);

  const getInitialData = async () => {
    const response = await getData(
      'cms/pages?pageType=ContentPage&pageLabelOrId=%2Fhome-living&lang=en&curr=INR',
    );
    setSectionData(response?.contentSlots?.contentSlot);
    getSections(response?.contentSlots?.contentSlot);
  };
  const getSections = data => {
    var dataa = [];
    LandingPageHomeLiving.map(sectionId => {
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
            customViewStyle={{marginVertical: 20}}
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
          <TouchableOpacity
            activeOpacity={0.9}
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
              style={{height: 294, width: width}}
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
            data={param}
            width={width / 1.07}
            height={200}
            {...props}
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
          Name: `Men's Day Home Living Collection`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `Men's Day Home Living Collection`,
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/hl-lpsec1-15nov22-1.jpg?context=bWFzdGVyfHJvb3R8ODM4OTd8aW1hZ2UvanBlZ3xoNjgvaGE5LzkxMDMyNjA3Nzg1MjYvaGwtbHBzZWMxLTE1bm92MjItMS5qcGd8OTc4OGNkOTVlNzlkYjQ4NGYyODYxM2YwZTBlZjYxNWNlMWJjMjFmMTNlMGQzMDEyMjVlNTAxNGY2Nzc4OWE2Zg',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:mens-day-home-living',
        sortorder: 3,
        title: `Men's Day Home Living Collection`,
        updatedAt: '2023-01-03T05:59:51.683Z',
      },
      {
        _id: '63aae8c115519f83a5972b4a',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Home Living Bed linen',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: 'Home Living Bed linen',
        createdAt: '2022-12-27T12:44:49.616Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/hl-lpsec1-mob-13oct22-2-rep.jpg?context=bWFzdGVyfHJvb3R8ODgyNjR8aW1hZ2UvanBlZ3xoMTgvaGRhLzkwOTYzMTM4MzE0NTQvaGwtbHBzZWMxLW1vYi0xM29jdDIyLTItcmVwLmpwZ3w2Y2UxNDA3N2I4ZDkzODQzMGIyYzlkM2U0ZDEyZDY1ODhlNTEyZjU3MDkxYzFkNmExMTcxZjk3NWU5ZWRkY2E3',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:bed-linen',
        sortorder: 11,
        title: 'Home Living Bed linen',
        updatedAt: '2023-01-03T05:59:51.680Z',
      },
      {
        _id: '63ac4371f6a2493189ca4048',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Floor Covering',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: 'Floor Covering',
        createdAt: '2022-12-28T13:24:01.900Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/hl-lpsec1-mob-2nov22-3.jpg?context=bWFzdGVyfHJvb3R8OTg1MDR8aW1hZ2UvanBlZ3xoYWYvaDhiLzkwOTYzMTQwMjgwNjIvaGwtbHBzZWMxLW1vYi0ybm92MjItMy5qcGd8NDYxMGJlMzk0OTEyZDRmMDI4YWYwMmZlOTQwZjkzZjJmNGViMjIxYjMxOWI4OWUwODQ5MDRiN2JiODQ1NjM4Mw',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:floor-coverings',
        sortorder: 5,
        title: 'Floor Covering',
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
      {
        _id: '63ae63e3ce2829923f67fdf1',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Upto 50% off`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `Upto 50% off`,
        createdAt: '2022-12-30T04:06:59.301Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/hl-lpsec1-mob-2nov22-4.jpg?context=bWFzdGVyfHJvb3R8NTY1Njd8aW1hZ2UvanBlZ3xoMWUvaDg0LzkwOTYzMTQyOTAyMDYvaGwtbHBzZWMxLW1vYi0ybm92MjItNC5qcGd8MTVjODI0ZTQ5OTU5YmFmMTRhNTVlMDZlYjE4MjQ4YWMzMGEyZDhkMjU5NDBkOTUwNGMyZThjYzk3ZTRlOTBjNA',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:sale-home-living',
        sortorder: 9,
        title: `Upto 50% off`,
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
    ],
    NewInBedLinen: [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/hl-bl-sec2-29sep22-1.jpg?context=bWFzdGVyfHJvb3R8NjYwODZ8aW1hZ2UvanBlZ3xoYjgvaGE5LzkwNzUyNzg2MTA0NjIvaGwtYmwtc2VjMi0yOXNlcDIyLTEuanBnfGMzMDVkMDM2NWE5ZWUyYTYzNzk0MjYxNmYzNmQyMTllN2M4ZjQzZjczNWQ0OTA2MjIzMjhjMzBhOTAxNmZjMDA',
        landingPage: ':relevance:allCategories:bedcovers',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Bedcovers`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: `/Bad Linen`,
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: `/Bad Linen`,
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaf1d415519f83a5972ba7',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/hl-bl-sec2-29sep22-2.jpg?context=bWFzdGVyfHJvb3R8NjcxMTJ8aW1hZ2UvanBlZ3xoNjYvaGFhLzkwNzUyNzg2NzU5OTgvaGwtYmwtc2VjMi0yOXNlcDIyLTIuanBnfDRiZWJlZDU3Y2NjMTM3MWQ3ZjQyMTViZTRmNTBiMWYzYzIwNGI2MTVjN2Q3YTY4ZmRiZTYzNjM2YWY2NmI5ZmI',
        landingPage: ':relevance:allCategories:duvets-quilts',
        category: '63aad98915519f83a5972aa6',
        sortorder: 17,
        title: `Blankets, Quilts & Dohars`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:23:32.461Z',
        updatedAt: '2022-12-30T13:20:41.484Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: `/Bad Linen`,
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: `/Bad Linen`,
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63ae833abcb1a02702f7bde6',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/hl-bl-sec2-29sep22-3.jpg?context=bWFzdGVyfHJvb3R8NTA3MDR8aW1hZ2UvanBlZ3xoNzYvaGIwLzkwNzUyNzg4MDcwNzAvaGwtYmwtc2VjMi0yOXNlcDIyLTMuanBnfGRkNDE5OTJkNzgwYWNhNzk1OWUzNjRkNjM4OTFlMGY1ODA3YmFlZjVhYmEyZDdmMWI4ZWJmMTQ1NTg0YzRhMzU',
        landingPage: ':relevance:allCategories:pillow-covers',
        category: '63aad98915519f83a5972aa6',
        sortorder: 105,
        title: `Pillows & Pillow Covers`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-30T06:20:42.160Z',
        updatedAt: '2022-12-30T13:20:53.919Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: '/Bad Linen',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Bad Linen',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63ae8358bcb1a02702f7bdef',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/hl-bl-sec2-29sep22-4.jpg?context=bWFzdGVyfHJvb3R8NTYwNjJ8aW1hZ2UvanBlZ3xoNzcvaGFkLzkwNzUyNzg3NDE1MzQvaGwtYmwtc2VjMi0yOXNlcDIyLTQuanBnfGQwNmQyNzI1MjMxZjAwODYxZmViMWRlYjEyZWJjYjFmZjM5ZTA3MDFjMGM3YzI3ZmRhZmIwNzdjMWFkNzIwYzc',
        landingPage: ':relevance:allCategories:bedsheets',
        category: '63aad98915519f83a5972aa6',
        sortorder: 106,
        title: 'Bedsheets',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-30T06:21:12.899Z',
        updatedAt: '2022-12-30T13:21:02.098Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: '/Bad Linen',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Bad Linen',
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    NewInKitchen: [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/hl-sec3-30sep22-2.jpg?context=bWFzdGVyfHJvb3R8Mjc0NTd8aW1hZ2UvanBlZ3xoNDUvaDUxLzkwNzc0NzI2MjQ2NzAvaGwtc2VjMy0zMHNlcDIyLTIuanBnfDBlOGE2N2I3NTBiYWU4N2EzMWY1YzZkYzU3NDNmY2RmOGQ5MjM3ZThkNzdjNjMxMTkzYjZlM2NkNDFmOTIwZjI',
        landingPage: ':relevance:allCategories:dinner-serveware',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Dinner & Serveware',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: '/Kitchen And Dining',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Kitchen And Dining',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/hl-sec3-30sep22-3.jpg?context=bWFzdGVyfHJvb3R8MTgwMTd8aW1hZ2UvanBlZ3xoMDYvaDUyLzkwNzc0NzI2OTAyMDYvaGwtc2VjMy0zMHNlcDIyLTMuanBnfDQ2MGI4ZWY4ZjQ2NzlhNGNjNzRmMWQwMzc0YTcxMzM5M2MzYjFkOTgyMmFjZDQ1ZjYzN2YwZDQyNTRhNzk3NDE',
        landingPage: ':relevance:allCategories:drinkware',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Drinkware',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: '/Kitchen And Dining',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Kitchen And Dining',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaf1d415519f83a5972ba7',
        image:
          'https://apisap.fabindiahome.com/medias/hl-sec3-30sep22-4.jpg?context=bWFzdGVyfHJvb3R8Mzk4NDd8aW1hZ2UvanBlZ3xoMDQvaDU1LzkwNzc0NzI3NTU3NDIvaGwtc2VjMy0zMHNlcDIyLTQuanBnfDJjZjdmNTQ2MDgxMmUwMTEyNzYwOGFiZmZlODViNDdkZmE1YTc5ZTZmN2IxZGViMDA5OWY1MTNlM2RkNjUzMDA',
        landingPage: ':relevance:allCategories:dining-accessories',
        category: '63aad98915519f83a5972aa6',
        sortorder: 17,
        title: 'Dining Accessories',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:23:32.461Z',
        updatedAt: '2022-12-30T13:20:41.484Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: '/Kitchen And Dining',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Kitchen And Dining',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63ae8358bcb1a02702f7bdef',
        image:
          'https://apisap.fabindiahome.com/medias/Table-linen.jpg?context=bWFzdGVyfHJvb3R8NDM4OTd8aW1hZ2UvanBlZ3xoM2IvaGU4LzkwMTU1NzgxMzI1MTAvVGFibGUgbGluZW4uanBnfDZmNDQ2YjRhNzZmNDBmMTZkNGY4YzZhNTkwNTNjZGNhNWE4MzU1NGJlOTFjNjFhZDkwOTRhYTBkOTViYWZiY2U',
        landingPage: ':relevance:allCategories:table-linen',
        category: '63aad98915519f83a5972aa6',
        sortorder: 106,
        title: 'Table Linen',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-30T06:21:12.899Z',
        updatedAt: '2022-12-30T13:21:02.098Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: '/Kitchen And Dining',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Kitchen And Dining',
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    NewInLamp: [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/hl-sec4-30sep22-2.jpg?context=bWFzdGVyfHJvb3R8NjIzNzB8aW1hZ2UvanBlZ3xoMTUvaDU4LzkwNzc0NzI4MjEyNzgvaGwtc2VjNC0zMHNlcDIyLTIuanBnfDVkNzViYzViNWI5ZTdhZmVjNWUxNTYwNDRkZjAwZTA0ZWYzYTIyODFmZDllNDgwNGJmNjI5ZTVjYmE3ZjIzMGI',
        landingPage: ':relevance:allCategories:floor-lamps',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Floor Lamps',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: '/Lamp And Lampshades',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Lamp And Lampshades',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/hl-sec4-30sep22-3.jpg?context=bWFzdGVyfHJvb3R8MTA1NTY1fGltYWdlL2pwZWd8aGMzL2g1OC85MDc3NDcyODg2ODE0L2hsLXNlYzQtMzBzZXAyMi0zLmpwZ3w2NDU4ODk4ZWMyMGQ0ODc4Y2VkMTVmZDRlMTMyYmE0NTc3YjRjZjIzNjVmMGIxMGNjNDk1MjliNmYxY2FmNDZk',
        landingPage: ':relevance:allCategories:lampshades',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Lampshades',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: '/Lamp And Lampshades',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Lamp And Lampshades',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/hl-sec4-30sep22-4.jpg?context=bWFzdGVyfHJvb3R8NTEyMjh8aW1hZ2UvanBlZ3xoZDUvaDViLzkwNzc0NzI5NTIzNTAvaGwtc2VjNC0zMHNlcDIyLTQuanBnfGQwYjllYjlhMjkzOWVjMTBjYzM2YTA2NzQwMTMwZmJiMTkzNGFlZTUxMTJiNjc1NDcxNzY4NWNjNTQ5NDI1ZDY',
        landingPage: ':relevance:allCategories:hanging-wall-lamps',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Hanging & Wall Lamp',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: '/Lamp And Lampshades',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Lamp And Lampshades',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/hm-lvng-clp-sec4img1.jpg?context=bWFzdGVyfGltYWdlc3w1NTcwNXxpbWFnZS9qcGVnfGhmMi9oNzUvODkxMDgxMjkzODI3MC9obS1sdm5nLWNscC1zZWM0aW1nMS5qcGd8NjM4MDFiYmRjOWRlNWQxZGE2NzYyODY2ZGVlNjgxNWYyZWNkNjM0MTRkZGRiOTUxMTRhMmUxZDQ3YWFjNDVkMw',
        landingPage: ':relevance:allCategories:table-lamps',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Table Lamps',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: '/Lamp And Lampshades',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Lamp And Lampshades',
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    HomeLinen: [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/hl-sec5-30sep22-2.jpg?context=bWFzdGVyfHJvb3R8MzIyOTR8aW1hZ2UvanBlZ3xoN2UvaGE2LzkwNzc0NzMwMTc4ODYvaGwtc2VjNS0zMHNlcDIyLTIuanBnfDYxOTRkOTRiOWU4MWNmZTgyNTY4ODk4MWJjNzNkMzNkMWY2MDhlYjE0NzBjYjRiNmFhYTVlYzMwMzMwMzUwOTE',
        landingPage: ':relevance:allCategories:cushions',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Cushions`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Home Linen/Give your home a fresh look for the season with linens that match the vibe',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Home Linen/Give your home a fresh look for the season with linens that match the vibe',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/hl-sec5-30sep22-3.jpg?context=bWFzdGVyfHJvb3R8NTA1MDR8aW1hZ2UvanBlZ3xoM2YvaGE3LzkwNzc0NzMwODM0MjIvaGwtc2VjNS0zMHNlcDIyLTMuanBnfGRjOTg0ZjVhMGQ3MDliOGM3NWVjMTJlYjE3ZjFiY2M3YjcwODZmZTM1YjYxZWYwNmIzNGU2MDVlYjdkNTdiZjc',
        landingPage: ':relevance:allCategories:bedsheets',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Bedsheets`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Home Linen/Give your home a fresh look for the season with linens that match the vibe',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Home Linen/Give your home a fresh look for the season with linens that match the vibe',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/hl-sec5-30sep22-4.jpg?context=bWFzdGVyfHJvb3R8NDIxODZ8aW1hZ2UvanBlZ3xoM2QvaGFhLzkwNzc0NzMxNDg5NTgvaGwtc2VjNS0zMHNlcDIyLTQuanBnfDEyNDliYTI4NDEzZTY5NWVjMzAxZGFlM2UwZDVmZjZhYmZjNjI2NWY0MzgzNjdkYWQzMTA0MTRjOWRiZTI1OWE',
        landingPage: ':relevance:allCategories:towels',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Bath Towels`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Home Linen/Give your home a fresh look for the season with linens that match the vibe',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Home Linen/Give your home a fresh look for the season with linens that match the vibe',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/hl-sec5-30sep22-5.jpg?context=bWFzdGVyfHJvb3R8NjU3MzB8aW1hZ2UvanBlZ3xoNGUvaGFkLzkwNzc0NzMyMTQ0OTQvaGwtc2VjNS0zMHNlcDIyLTUuanBnfGQxMzczNDU3Y2M1MjQ0MGRhMGUxYzg4MGQ1ZThiZjFjOGU0NjExMTYwZmQyZjVmMzllMDdmOGVlMDE1MDM4NzQ',
        landingPage: ':relevance:allCategories:durries-runners',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Durries & Runners`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Home Linen/Give your home a fresh look for the season with linens that match the vibe',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Home Linen/Give your home a fresh look for the season with linens that match the vibe',
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    CelebrationBanner: [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/hl-kb-sec7-mob-29sep22-1.jpg?context=bWFzdGVyfHJvb3R8MTU2MDIxfGltYWdlL2pwZWd8aGQ3L2g5Zi85MDc1Mjc4MzQ4MzE4L2hsLWtiLXNlYzctbW9iLTI5c2VwMjItMS5qcGd8NGE3MWQ5OWNkOWRmY2UzYTU3NjIwODEwYmY2Zjk3NWYzYjgyMDg5MzA1MDUyMjYxMDVkMWFmZDRiYjZhYTU5Yg',
        landingPage: ':relevance:allCategories:gifting-ideas-home-living',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Home Living Gifting`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: `Home Living Gifting`,
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: `Home Living Gifting`,
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    ComfortBanner: [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/hl-kb-sec7-mob-29sep22-2.jpg?context=bWFzdGVyfHJvb3R8MTM1NzY0fGltYWdlL2pwZWd8aGE3L2hhNi85MDc1Mjc4NTQ0OTI2L2hsLWtiLXNlYzctbW9iLTI5c2VwMjItMi5qcGd8MzZiZTE0NDZkZWVlYTAwZDlhZDUyODBlYWI0ZTdhYTU4ZDRjZWRhYzUwMjNkMGUzNTdmODlkZmVjOTFiNjZmYg',
        landingPage: ':relevance:allCategories:bed-linen',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Home Bed Linen`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: `Home Bed Linen`,
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: `Home Bed Linen`,
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    HomeDecor: [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/hm-lvng-clp-sec11img2.jpg?context=bWFzdGVyfGltYWdlc3w4OTY3NnxpbWFnZS9qcGVnfGhiMS9oZDcvODkxMDg1MDY4NzAwNi9obS1sdm5nLWNscC1zZWMxMWltZzIuanBnfDJkN2ZkMjE1YTNkMjcyMWE2ZTVhN2Q4NWU1YmM4ZmFhNjI5ZWY0OTJjMWZhYmVhNDEwM2QwYjlhYThlZGUxMjI',
        landingPage: ':relevance:allCategories:clocks',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Clocks`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Home Decor/Redesign your space with handcrafted decorative essentials for your home',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Home Decor/Redesign your space with handcrafted decorative essentials for your home',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/Wall-art.jpg?context=bWFzdGVyfHJvb3R8NDY4ODF8aW1hZ2UvanBlZ3xoZGQvaGQzLzkwMTU1Nzg3MjIzMzQvV2FsbCBhcnQuanBnfGQ4MTk3NGM0NWRmYzE1MmY2OGM0YTk5MWY3YjhjYzZmZmZkNDdiNzBmMWVjM2E4NzA3MDdiNmI4NGE2ZmMwMmY',
        landingPage: ':relevance:allCategories:wall-art',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Wall Arts`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Home Decor/Redesign your space with handcrafted decorative essentials for your home',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Home Decor/Redesign your space with handcrafted decorative essentials for your home',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/Photo-Frames.jpg?context=bWFzdGVyfHJvb3R8NDgzNjV8aW1hZ2UvanBlZ3xoMWUvaGQwLzkwMTU1Nzg4NTM0MDYvUGhvdG8gRnJhbWVzLmpwZ3wyOTA5OWU3ZTA4MjFhYjk3MTRhZWY4N2E0Y2QwNmZjNjcwNjVmOTM3ZjM1OTM5MDZkZGMwZTgzNzM2Yzc5ZDI1',
        landingPage: ':relevance:allCategories:photo-frames',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Photo Frames`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Home Decor/Redesign your space with handcrafted decorative essentials for your home',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Home Decor/Redesign your space with handcrafted decorative essentials for your home',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/Candles-Candle-holders.jpg?context=bWFzdGVyfHJvb3R8NDQ5Njh8aW1hZ2UvanBlZ3xoMmYvaGQzLzkwMTU1Nzg3ODc4NzAvQ2FuZGxlcyBfIENhbmRsZSBob2xkZXJzLmpwZ3w4YzBhOTNlNjQ1MDE0ZTY0ZmEzYTFjYzcyZDUxMjZlYzlmNzBhYjdmNWJiZmE1ODIyNmY3MzBkZGIzZWE0ZmYz',
        landingPage: ':relevance:allCategories:candles-candle-stands',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Candles & Candle holders`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Home Decor/Redesign your space with handcrafted decorative essentials for your home',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Home Decor/Redesign your space with handcrafted decorative essentials for your home',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/hl-hd-sec11-30sep22-5.jpg?context=bWFzdGVyfHJvb3R8MjczOTl8aW1hZ2UvanBlZ3xoMGQvaGIxLzkwNzc0NzMzNDU1NjYvaGwtaGQtc2VjMTEtMzBzZXAyMi01LmpwZ3xkZmJjNTQ1MmUxNjZhNjBiOTk1OTJmMzI2NzRiMTAzOWY2MWQ3OGZhMmNlZDkzZjc2MTRjY2E2MzFhMGZlOWFk',
        landingPage: ':relevance:allCategories:accessories',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Stationary & Tags`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Home Decor/Redesign your space with handcrafted decorative essentials for your home',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Home Decor/Redesign your space with handcrafted decorative essentials for your home',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/hl-hd-sec11-30sep22-6.jpg?context=bWFzdGVyfHJvb3R8MzU5ODJ8aW1hZ2UvanBlZ3xoMTAvaGFlLzkwNzc0NzMyODAwMzAvaGwtaGQtc2VjMTEtMzBzZXAyMi02LmpwZ3w3Y2FmYWI0MjVlOGUyNTc2MzVjNTNhMzhhNDIwM2MzZWM1MzQ2NmUyNDc3YzNlMjJhZTdiNjY4ZTI1NzkwZDFk',
        landingPage: ':relevance:allCategories:planters',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Planters`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Home Decor/Redesign your space with handcrafted decorative essentials for your home',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName:
          'Home Decor/Redesign your space with handcrafted decorative essentials for your home',
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    HomeCarousel: [
      {
        _id: '63aae8c115519f83a5972b4a',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Homeiving IDS`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `Homeiving IDS`,
        createdAt: '2022-12-27T12:44:49.616Z',
        image:
          'https://apisap.fabindiahome.com/medias/hl-lp-sec13-img1.jpg?context=bWFzdGVyfHJvb3R8Mjc3MzkwfGltYWdlL2pwZWd8aGZiL2hhMy85MDY2MDAzNzU5MTM0L2hsLWxwLXNlYzEzLWltZzEuanBnfDgxYzY4M2IyMjJkNjZiMjc4ZDZiZjUwYjg5ZGIxMmE0Y2UzOWExYmNhMzczOThjNzE4MTVkOTM1NDBhMjIyZjA',
        is_enable: true,
        is_slider: true,
        landingPage: 'kids sleepwear:creationtime-desc:B2CL1:Kids',
        sortorder: 11,
        title: `IDS`,
        updatedAt: '2023-01-03T05:59:51.680Z',
      },
      {
        _id: '63ac4371f6a2493189ca4048',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Floor Covering`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `Floor Covering`,
        createdAt: '2022-12-28T13:24:01.900Z',
        image:
          'https://apisap.fabindiahome.com/medias/hl-lp-sec13-img2.jpg?context=bWFzdGVyfHJvb3R8MjcyNzQyfGltYWdlL2pwZWd8aGZhL2hhNi85MDY2MDAzNjkzNTk4L2hsLWxwLXNlYzEzLWltZzIuanBnfDZhZTFmMzUyYjFmNzE3MGM3ODg0ZmU2MzRkYzc0Mzg4NDI2ZDdmM2UxOGZhMTlhNmRmZjFiY2Y2ZjM5MDllZDA',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:floor-coverings',
        sortorder: 5,
        title: `Floor Covering`,
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
    ],
    Collections: [
      {
        _id: '63aae8c115519f83a5972b4a',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Curtains`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `Curtains`,
        createdAt: '2022-12-27T12:44:49.616Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/hl-cl-sec14-23sep22-img1.jpg?context=bWFzdGVyfHJvb3R8OTA1OTl8aW1hZ2UvanBlZ3xoMmIvaDlkLzkwNjYwMDM5NTU3NDIvaGwtY2wtc2VjMTQtMjNzZXAyMi1pbWcxLmpwZ3wwYzRjYTRjZGE2NjllY2IyYWEwYjRkYzU5OGNjY2MxZGE5NmI3NjBhYjhlNTVkNzM3YWI0MzVjODRiNGYyZmUx',
        is_enable: true,
        is_slider: true,
        landingPage:
          ':creationtime-desc:allCategories:home-living:B2CL2:Curtains',
        sortorder: 11,
        title: `Curtains`,
        updatedAt: '2023-01-03T05:59:51.680Z',
      },
      {
        _id: '63ac4371f6a2493189ca4048',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Bath Essential`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `Bath Essential`,
        createdAt: '2022-12-28T13:24:01.900Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/Bath-Essential.jpg?context=bWFzdGVyfHJvb3R8NTY4NjZ8aW1hZ2UvanBlZ3xoZTIvaDdkLzkwMTU1NzkxODEwODYvQmF0aCBFc3NlbnRpYWwuanBnfDBjZjRkODg4ODRmZWRjNTAzYTkzOGI3YjgxNWJlZjgyZjJmY2IxNWY5NDA1N2I1YWQ1Mzg5ZjY3MjI1ZDIzNmQ',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:bath',
        sortorder: 5,
        title: `Bath Essential`,
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
      {
        _id: '63ae63e3ce2829923f67fdf1',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Mugs & Tumblers',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: 'Mugs & Tumblers',
        createdAt: '2022-12-30T04:06:59.301Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/hm-lvng-clp-sec14img4.jpg?context=bWFzdGVyfGltYWdlc3wxMTE1NTh8aW1hZ2UvanBlZ3xoNDUvaDVmLzg5MTA4NTIzNTgxNzQvaG0tbHZuZy1jbHAtc2VjMTRpbWc0LmpwZ3w3MzlhNTM4Zjc3YzlkODFkNTlmOTllZDQ4NjViNWE1NmRiNzA3N2M3OGExYjkyMDNjNzEzYTQxNDUwYTFiZmNl',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:drinkware',
        sortorder: 9,
        title: `Mugs & Tumblers`,
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
      {
        _id: '63b262ffbcb1a02702f7c407',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'HL Home Decor Collection',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: 'HL Home Decor Collection',
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/hl-cl-sec14-23sep22-img4.jpg?context=bWFzdGVyfHJvb3R8NzcyODh8aW1hZ2UvanBlZ3xoMjkvaGEwLzkwNjYwMDM4OTAyMDYvaGwtY2wtc2VjMTQtMjNzZXAyMi1pbWc0LmpwZ3xkZjFhYWVlODBlMGRlMTc2ODE1ODYxMmI4OWNmYzg1NTc5Yjc1YTg3NGE5NDliOTQ2Y2U2NTYxNGUxZTllNGM3',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:home-decor',
        sortorder: 3,
        title: 'Home Decor Collection',
        updatedAt: '2023-01-03T05:59:51.683Z',
      },
    ],
  };
  const HomPageSections = {
    topSwiper: 'topSwiper',
    NewInBedLinen: 'NewInBedLinen',
    NewInKitchen: 'NewInKitchen',
    NewInLamp: 'NewInLamp',
    HomeLinen: 'HomeLinen',
    CelebrationBanner: 'CelebrationBanner',
    ComfortBanner: 'ComfortBanner',
    HomeDecor: 'HomeDecor',
    HomeCarousel: 'HomeCarousel',
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
              data={data?.[HomPageSections.NewInBedLinen]}
            />
            <NewHighlights
              {...props}
              isSap={true}
              isAdmin2={'isAdmin2'}
              customStyle={{marginVertical: 20}}
              bgColor={{backgroundColor: '#F3E0E0'}}
              data={data?.[HomPageSections.NewInKitchen]}
            />
            <NewHighlights
              isSap={true}
              {...props}
              isAdmin2={'isAdmin2'}
              customStyle={{marginVertical: 20}}
              bgColor={{backgroundColor: '#F3E0E0'}}
              data={data?.[HomPageSections.NewInLamp]}
            />
            <LifeStyle
              isAdmin2={'isAdmin2'}
              {...props}
              customViewStyle={{marginVertical: 20}}
              data={data?.[HomPageSections.HomeLinen]}
              // title={GetLifeStyleTitle}
              backgroundColor="#F8F2EF"
            />
            <WomenTab data={filteredComp[0]} {...props} />
            <TouchableOpacity
              style={{marginTop: 20}}
              activeOpacity={0.9}
              onPress={() =>
                props.navigation.navigate('LandingPageSaris_Blouses', {
                  code: data?.[HomPageSections.CelebrationBanner][0]
                    .landingPage,
                  title: data?.[HomPageSections.CelebrationBanner][0].title,
                  isAdmin2: 'isAdmin2',
                })
              }>
              <Image
                resizeMode="stretch"
                source={{
                  uri: data?.[HomPageSections.CelebrationBanner][0].image,
                }}
                style={{height: 213, width: width}}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginTop: 20}}
              activeOpacity={0.9}
              onPress={() =>
                props.navigation.navigate('LandingPageSaris_Blouses', {
                  code: data?.[HomPageSections.ComfortBanner][0].landingPage,
                  title: data?.[HomPageSections.ComfortBanner][0].title,
                  isAdmin2: 'isAdmin2',
                })
              }>
              <Image
                resizeMode="stretch"
                source={{
                  uri: data?.[HomPageSections.ComfortBanner][0].image,
                }}
                style={{height: 213, width: width}}
              />
            </TouchableOpacity>
            <LifeStyle
              isAdmin2={'isAdmin2'}
              {...props}
              customViewStyle={{marginVertical: 20}}
              data={data?.[HomPageSections.HomeDecor]}
              // title={GetLifeStyleTitle}
              backgroundColor="#F8F2EF"
            />
            <WomenTab data={filteredComp[1]} {...props} />
            <CommonCarousel
              {...props}
              isSap={true}
              data={data?.[HomPageSections.HomeCarousel]}
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
    //     headerText={title}
    //   />

    //   <ScrollView
    //     showsVerticalScrollIndicator={false}
    //     contentContainerStyle={{
    //       backgroundColor: Colors.backgroundColor,
    //       paddingBottom: 20,
    //       flexGrow: 1,
    //     }}>
    //     {filteredComp.map(item => {
    //       return checkSwitch(item);
    //     })}
    //   </ScrollView>
    // </>
  );
}
