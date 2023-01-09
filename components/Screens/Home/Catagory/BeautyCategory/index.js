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
          Name: `Sofa and Seatings`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `Sofas`,
        createdAt: '2023-01-02T04:52:15.102Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/fur-lp-sec1-mob-2nov22-1.jpg?context=bWFzdGVyfHJvb3R8NDk0OTF8aW1hZ2UvanBlZ3xoMjcvaDdhLzkwOTYzMTkwNzQzMzQvZnVyLWxwLXNlYzEtbW9iLTJub3YyMi0xLmpwZ3w3M2JlNzA1NzdkNjM3MGFiMDRkZDU2ZTBiOGUwOTJiNjMyMWU5YmNjNzQ2ODlhMDBmYjhiZDIwZjM4YWEyN2Y1',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:sofas',
        sortorder: 3,
        title: `Sofas`,
        updatedAt: '2023-01-03T05:59:51.683Z',
      },
      {
        _id: '63aae8c115519f83a5972b4a',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Accents',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: 'Accents',
        createdAt: '2022-12-27T12:44:49.616Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/fur-lp-sec1-mob-2nov22-2.jpg?context=bWFzdGVyfHJvb3R8MTI4OTgyfGltYWdlL2pwZWd8aDAyL2hhNy85MDk2MzIwMzE5NTE4L2Z1ci1scC1zZWMxLW1vYi0ybm92MjItMi5qcGd8OTgyY2Q3MDM1ZjU4NzQ0YmM0Zjk5YjA4ZWUzN2I3OTdhMGFhODMyMDMxODAzZmIzZDY3MTFkNDZhZTM5MWIxZA',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:accents',
        sortorder: 11,
        title: 'Accents',
        updatedAt: '2023-01-03T05:59:51.680Z',
      },
      {
        _id: '63ac4371f6a2493189ca4048',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: 'Bedroom',
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: 'Bedroom',
        createdAt: '2022-12-28T13:24:01.900Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/fur-lp-sec1-mob-2nov22-3.jpg?context=bWFzdGVyfHJvb3R8MTg5OTcwfGltYWdlL2pwZWd8aGQzL2hhZC85MDk2MzIwNTE2MTI2L2Z1ci1scC1zZWMxLW1vYi0ybm92MjItMy5qcGd8Y2ZiZTljYzYwZTFkOTRkYTIyODkzOTMxYzFhZTlmMjMzZThiMzVjN2EzNDcyNjJiNTBlMWNiMjFiZDI0N2VlNw',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:bedroom',
        sortorder: 5,
        title: 'Bedroom',
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
      {
        _id: '63ae63e3ce2829923f67fdf1',
        category: '63aab8b715519f83a59729d7',
        categoryData: {
          Is_Active: true,
          Name: `Dining`,
          _id: '63aab8b715519f83a59729d7',
          createdAt: '2022-12-27T09:19:51.037Z',
          sortorder: '1',
          updatedAt: '2022-12-29T07:08:39.709Z',
        },
        categoryId: '63aab8b715519f83a59729d7',
        categoryName: `Dining`,
        createdAt: '2022-12-30T04:06:59.301Z',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/fur-lp-sec1-mob-2nov22-4.jpg?context=bWFzdGVyfHJvb3R8NDgzMDZ8aW1hZ2UvanBlZ3xoNTcvaDczLzkwOTYzMTkyNzA5NDIvZnVyLWxwLXNlYzEtbW9iLTJub3YyMi00LmpwZ3wyZDRjOTAzMzZmY2E5N2VmOGRmOGJmYzkxYzIwNWM3YTgwYTk5YTc1YTQ0NGQwZmE2ZTk2Y2VhZjRmMWRjMDk2',
        is_enable: true,
        is_slider: true,
        landingPage: ':relevance:allCategories:dining',
        sortorder: 9,
        title: `Dining`,
        updatedAt: '2023-01-03T05:59:51.682Z',
      },
    ],
    NewInFace: [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/fur-lp-sec2-30sep22-1.jpg?context=bWFzdGVyfHJvb3R8OTQ1NDV8aW1hZ2UvanBlZ3xoYzEvaGViLzkwNzc0NzQxNjQ3NjYvZnVyLWxwLXNlYzItMzBzZXAyMi0xLmpwZ3w0NTE3YWI4MjU3MzM4YmJhNjgxOWNhYzEwZTdhNWNlZTRiZDRhM2QyZjQ0OTAxYzAwZmM3NWEyNjhkZmZmNGQy',
        landingPage: ':relevance:allCategories:sofas',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: `Sofas Seatings`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: `Sofa And Seatings`,
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: `/Living`,
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaf1d415519f83a5972ba7',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/fur-lp-sec2-30sep22-2.jpg?context=bWFzdGVyfHJvb3R8MTE5NDU1fGltYWdlL2pwZWd8aGIwL2hlOC85MDc3NDc0MjMwMzAyL2Z1ci1scC1zZWMyLTMwc2VwMjItMi5qcGd8ZDQwODQ3M2E0YzMxN2E3YTc5YjY2MDhkODllOGY3YjhlZDc2Y2ZlMjAzZDAwM2U4MTk4ZjUxODZlY2Y0YjNiOA',
        landingPage: ':relevance:allCategories:living-tables',
        category: '63aad98915519f83a5972aa6',
        sortorder: 17,
        title: `Tables`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:23:32.461Z',
        updatedAt: '2022-12-30T13:20:41.484Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: `Living Tables`,
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: `/Living`,
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63ae833abcb1a02702f7bde6',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/fur-lp-sec2-30sep22-3.jpg?context=bWFzdGVyfHJvb3R8NzE3ODJ8aW1hZ2UvanBlZ3xoMDIvaGU4LzkwNzc0NzQyOTU4MzgvZnVyLWxwLXNlYzItMzBzZXAyMi0zLmpwZ3w3YTNlZDFiZDdmNWUxM2I1MmYwNTFjMmY1NTNmM2U3MDFmMGUxYTc5N2JlM2JjNTZiZWRiNTJiNjk0YTZlZGY2',
        landingPage: ':relevance:allCategories:consoles',
        category: '63aad98915519f83a5972aa6',
        sortorder: 105,
        title: `Consoles`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-30T06:20:42.160Z',
        updatedAt: '2022-12-30T13:20:53.919Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Consoles',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Living',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63ae833abcb1a02702f7bde6',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/fur-lp-sec2-30sep22-4.4.jpg?context=bWFzdGVyfHJvb3R8ODUyNjd8aW1hZ2UvanBlZ3xoZjMvaGUxLzkwNzc0NzQ0MjY5MTAvZnVyLWxwLXNlYzItMzBzZXAyMi00LjQuanBnfGJkNTg0OGIwYjY1OGI5YjNkOTI1OGY5ZTI5YmM2MWM2NDEyMDg1ZTgwYjBmNmRlZWFlNGJkYzk0YWYzMmI2ZDk',
        landingPage: ':relevance:allCategories:ottomans-stools',
        category: '63aad98915519f83a5972aa6',
        sortorder: 105,
        title: `Ottoman & Stools`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-30T06:20:42.160Z',
        updatedAt: '2022-12-30T13:20:53.919Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Ottoman & Stools',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Living',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63ae833abcb1a02702f7bde6',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/fur-lp-sec2-30sep22-5.jpg?context=bWFzdGVyfHJvb3R8Nzc3MzZ8aW1hZ2UvanBlZ3xoMzEvaGUxLzkwNzc0NzQ0OTI0NDYvZnVyLWxwLXNlYzItMzBzZXAyMi01LmpwZ3w5Y2U4ZDU2N2YwODZlOTU2M2ZkMDk2MWU4OGQ2YWE5MDQyMDIyNmY2MDFmZGI0ZTlkODUwMWU1YjYxNGU1OTJi',
        landingPage: ':relevance:allCategories:entertainment-units',
        category: '63aad98915519f83a5972aa6',
        sortorder: 105,
        title: `Entertainment Units`,
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-30T06:20:42.160Z',
        updatedAt: '2022-12-30T13:20:53.919Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Entertainment Units',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Living',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63ae8358bcb1a02702f7bdef',
        image:
          'https://api.cq6bn590y3-fabindiao1-s1-public.model-t.cc.commerce.ondemand.com/medias/fur-lp-sec2-30sep22-6.jpg?context=bWFzdGVyfHJvb3R8NTUxMTB8aW1hZ2UvanBlZ3xoMzQvaGRlLzkwNzc0NzQ1NTc5ODIvZnVyLWxwLXNlYzItMzBzZXAyMi02LmpwZ3wwNDE2YzJlNWNlYWNhZTA2NzYwMmZhZGQ5YTExN2ZjYWY0YjE4YzYyNTliOGZjNzg5YmRlYTRkM2RjODg3OTlh',
        landingPage: ':relevance:allCategories:cabinets',
        category: '63aad98915519f83a5972aa6',
        sortorder: 106,
        title: 'Storage',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-30T06:21:12.899Z',
        updatedAt: '2022-12-30T13:21:02.098Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Cabinets',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Living',
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    NewInBath: [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/fur-lp-sec3-30sep22-1.jpg?context=bWFzdGVyfHJvb3R8OTIyNzd8aW1hZ2UvanBlZ3xoMjIvaGRiLzkwNzc0NzQ2MjM1MTgvZnVyLWxwLXNlYzMtMzBzZXAyMi0xLmpwZ3w4NWI1YzY0NjM2OWZmNGY3MTdiMjUyZGUzYmM3NTYwYjBjNTUyM2NjN2Y3MDc1N2M4MjQ2YTM4YzA3ZTFjY2E5',
        landingPage: ':relevance:allCategories:beds',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Beds',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Beds',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Bedroom',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/fur-lp-sec3-30sep22-2.jpg?context=bWFzdGVyfHJvb3R8MTIxNjQyfGltYWdlL2pwZWd8aDc0L2hkYS85MDc3NDc0Njg5MDU0L2Z1ci1scC1zZWMzLTMwc2VwMjItMi5qcGd8YWVmYTk0M2U4Y2ZhZTU5MzIxNzU5NjUxODc0M2I0YmNkZTQzYjAzY2E2MjA3YTZkNGFjZTZjNmRhYWZlNDc1NQ',
        landingPage: ':relevance:allCategories:bedside-tables',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Bedside Tables',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Bedside Tables',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Bedroom',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63ae8358bcb1a02702f7bdef',
        image:
          'https://apisap.fabindiahome.com/medias/fur-lp-sec3-30sep22-3.jpg?context=bWFzdGVyfHJvb3R8NzUxMDh8aW1hZ2UvanBlZ3xoNjMvaGQ3LzkwNzc0NzQ3NTQ1OTAvZnVyLWxwLXNlYzMtMzBzZXAyMi0zLmpwZ3xhYThkNjI5MzgxYWE2NGE4ZmQ1MWFiZWRhODQyMTYxYmIwY2U4ZDA1M2M5YWViMzM3NjQ1OGJmMTZlMzMzOWMz',
        landingPage: ':relevance:allCategories:wardrobes',
        category: '63aad98915519f83a5972aa6',
        sortorder: 106,
        title: 'Wardrobes',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-30T06:21:12.899Z',
        updatedAt: '2022-12-30T13:21:02.098Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Wardrobes',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Bedroom',
        categoryId: '63aad98915519f83a5972aa6',
      },
    ],
    NewInHair: [
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/fur-lp-sec4-30sep22-1.jpg?context=bWFzdGVyfHJvb3R8MTAzMTYzfGltYWdlL2pwZWd8aDUyL2hkNC85MDc3NDc0ODIwMTI2L2Z1ci1scC1zZWM0LTMwc2VwMjItMS5qcGd8MjJkM2VkOTkwNzU5MTIzZDhmODcyNWY5ZGJkMTRjZmNhZDg1NzUwNmZhY2I4NGQ3NThlNWU0OWRjMjljN2VmNA',
        landingPage: ':relevance:allCategories:dining-tables',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Dining Tables',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Dining Tables',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Dining',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/fur-lp-sec4-30sep22-2.jpg?context=bWFzdGVyfHJvb3R8NDM0Mjh8aW1hZ2UvanBlZ3xoYTQvaGQzLzkwNzc0NzQ4ODU2NjIvZnVyLWxwLXNlYzQtMzBzZXAyMi0yLmpwZ3xmYjg4MzZmNjFkODZlNGY1MTg4YzUyYmEzMDllODg1MmY3MmZlYzIwNjNmMTRlZjRiNmEyMmRhNjc5YzYyNzY4',
        landingPage: ':relevance:allCategories:dining-chairs',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Dining Chairs',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Dining Chairs',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Dining',
        categoryId: '63aad98915519f83a5972aa6',
      },
      {
        _id: '63aaef8e15519f83a5972b76',
        image:
          'https://apisap.fabindiahome.com/medias/fur-lp-sec4-30sep22-3.jpg?context=bWFzdGVyfHJvb3R8ODM5OTR8aW1hZ2UvanBlZ3xoOTIvaGQwLzkwNzc0NzQ5NTExOTgvZnVyLWxwLXNlYzQtMzBzZXAyMi0zLmpwZ3xjOGIzYTkxOTEyNDI3MWU1ZmZmMGY1ODE1MThlNTRlMWU3ODM1MGUyYjhmZjI3YWRkNjZkNzUwYjM3ZThjYmRl',
        landingPage: ':relevance:allCategories:bar-furniture',
        category: '63aad98915519f83a5972aa6',
        sortorder: 16,
        title: 'Bar Furniture',
        is_slider: true,
        is_enable: true,
        createdAt: '2022-12-27T13:13:50.117Z',
        updatedAt: '2022-12-30T13:20:32.173Z',
        categoryData: {
          _id: '63aad98915519f83a5972aa6',
          Name: 'Bar Furniture',
          sortorder: '3',
          Is_Active: true,
          createdAt: '2022-12-27T11:39:53.388Z',
          updatedAt: '2022-12-29T10:48:43.046Z',
        },
        categoryName: '/Dining',
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
