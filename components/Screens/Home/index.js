// import {Text, Dimensions, FlatList} from 'react-native';
// import React, {useEffect} from 'react';
// import Catagory from './Catagory';
// import NewHighlights from '../../Common/NewHighlights';
// import CommonCarousel from '../../Common/CommonCarousel/index';
// import {HomePageSection} from '../../../constant';
// import {Colors} from '../../../assets/Colors';
// import Interior from './Interior';
// import Fonts from '../../../assets/fonts';
// import TopSwiper from '../../Common/TopSwiper';
// import axios from 'axios';
// import {getCartID, getData} from '../../Common/Helper';
// import WomenTab from './Tabs.js/WomenTab';
// import OfferTab from './Tabs.js/OfferTab';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useFocusEffect} from '@react-navigation/native';
// const width = Dimensions.get('window').width;

// export default function Dashbord(props) {
//   const [active, setActive] = React.useState('Bestsellers');
//   const [dashboardData, setDashboardData] = React.useState([]);
//   const [filteredComp, setFilteredComp] = React.useState([]);
//   const [Ids, setIds] = React.useState([]);
//   const getInitialData = async () => {
//     const response = await getData('cms/pages?lang=en&curr=INR');
//     setDashboardData(response.contentSlots.contentSlot);
//     getSections(response.contentSlots.contentSlot);
//   };
//   const checkSwitch = param => {
//     switch (param?.typeCode) {
//       case 'FabResponsiveGridBannerCarouselComponent':
//         return <TopSwiper data={param} {...props} />;
//       case 'FabCmsLinkCarousalComponent':
//         return <Catagory data={param} {...props} />;
//       case 'FabBannerCarouselComponent':
//         return (
//           <NewHighlights
//             {...props}
//             customStyle={{marginVertical: 20}}
//             bgColor={{backgroundColor: '#F3E0E0'}}
//             data={param}
//           />
//         );
//       case 'FabBannerResponsiveCarouselComponent':
//         return (
//           <CommonCarousel
//             {...props}
//             data={param}
//             width={width / 1.07}
//             height={200}
//             customStyle={{margin: 20}}
//           />
//         );
//       case 'FabCMSTabContainer':
//         return (
//           <>
//             <WomenTab data={param} {...props} />
//           </>
//         );
//       case 'FabResponsiveBannerCarouselComponent':
//         return (
//           <CommonCarousel
//             {...props}
//             data={param}
//             width={width}
//             height={200}
//             customStyle={{margin: 20}}
//           />
//         );
//       case 'FabTitleCMSTabParagraphContainer':
//         return (
//           <>
//             <Text
//               style={{
//                 fontFamily: Fonts.PlayfairDisplay600Italic,
//                 fontSize: 20,
//                 paddingTop: 20,
//                 color: Colors.textcolor,
//                 marginLeft: 15,
//               }}>
//               Offers for you
//             </Text>
//             <OfferTab data={param} {...props} />
//           </>
//         );
//       case 'SimpleResponsiveBannerComponent':
//         return <Interior data={param} {...props} />;
//       default:
//         return;
//     }
//   };
//   const getInitialCartID = async () => {
//     const cartId = await AsyncStorage.getItem('cartID');
//     console.log('cartId==>', cartId);
//     cartId == null && getCartID();
//   };
//   const generatTokenWithout = async () => {
//     await axios
//       .post(
//         `https://apisap.fabindia.com/authorizationserver/oauth/token?grant_type=client_credentials&client_id=mobile_android&client_secret=secret`,
//       )
//       .then(
//         response => {
//           console.log(
//             'response-=-=-=-=-=-generatTokenWithoutaa',
//             response.data,
//           );
//           AsyncStorage.setItem(
//             'generatToken',
//             JSON.stringify({...response.data, isCheck: false}),
//           );
//         },
//         error => {
//           console.log('response-=-=-=-=-=-error', error);
//         },
//       );
//   };
//   const checkToken = async () => {
//     const get = await AsyncStorage.getItem('generatToken');
//     const getToken = JSON.parse(get);
//     console.log('asdfasdfasdfasdf', JSON.parse(get));
//     if (getToken == null) {
//       await generatTokenWithout();
//       await getInitialCartID();
//     }
//   };
//   useEffect(
//     React.useCallback(() => {
//       checkToken();
//     }, []),
//   );

//   const getSections = data => {
//     var dataa = [];
//     HomePageSection.map(sectionId => {
//       const filter = data.find(item => {
//         return item.position == sectionId;
//       });
//       dataa.push(filter?.components?.component[0]);
//     });
//     setFilteredComp(dataa);
//   };
//   React.useEffect(() => {
//     getInitialData();
//   }, []);

//   return (
//     <>
//       <FlatList
//         contentContainerStyle={{flexGrow: 1, backgroundColor: '#FFFFFF'}}
//         data={filteredComp}
//         keyExtractor={(item, index) => index}
//         renderItem={item => checkSwitch(item.item)}
//       />
//     </>
//   );
// }

import {Text, Dimensions, FlatList, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import Catagory from './Catagory';
import NewHighlights from '../../Common/NewHighlights';
import CommonCarousel from '../../Common/CommonCarousel/index';
import {HomePageSection} from '../../../constant';
import {Colors} from '../../../assets/Colors';
import Interior from './Interior';
import Fonts from '../../../assets/fonts';
import TopSwiper from '../../Common/TopSwiper';
import axios from 'axios';
import {getCartID, getData} from '../../Common/Helper';
import WomenTab from './Tabs.js/WomenTab';
import OfferTab from './Tabs.js/OfferTab';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useFocusEffect} from '@react-navigation/native';
import YoutubeVideo from '../YoutubeVideo';
const width = Dimensions.get('window').width;

export default function Dashbord(props) {
  const [active, setActive] = React.useState('Bestsellers');
  const [dashboardData, setDashboardData] = React.useState([]);
  const [filteredComp, setFilteredComp] = React.useState([]);
  const [Ids, setIds] = React.useState([]);

  const getSections = data => {
    var dataa = [];
    HomePageSection.map(sectionId => {
      const filter = data.find(item => {
        return item.position == sectionId;
      });
      dataa.push(filter?.components?.component[0]);
    });
    setFilteredComp(dataa);
    console.log('this si filter data', dataa);
  };
  const getInitialData = async () => {
    const response = await getData('cms/pages?lang=en&curr=INR');
    // setDashboardData(response.contentSlots.contentSlot);
    getSections(response.contentSlots.contentSlot);
  };
  // const checkSwitch = param => {
  //   switch (param?.typeCode) {
  // case 'FabResponsiveGridBannerCarouselComponent':
  //   return <TopSwiper data={param} {...props} />;
  // case 'FabCmsLinkCarousalComponent':
  //   return <Catagory data={param} {...props} />;
  // case 'FabBannerCarouselComponent':
  //   return (
  //     <NewHighlights
  //       {...props}
  //       customStyle={{marginVertical: 20}}
  //       bgColor={{backgroundColor: '#F3E0E0'}}
  //       data={param}
  //     />
  //   );
  // case 'FabBannerResponsiveCarouselComponent':
  //   return (
  //     <CommonCarousel
  //       {...props}
  //       data={param}
  //       width={width / 1.07}
  //       height={200}
  //       customStyle={{margin: 20}}
  //     />
  //   );
  // case 'FabCMSTabContainer':
  //   return (
  //     <>
  //       <WomenTab data={param} {...props} />
  //     </>
  //   );
  // case 'FabResponsiveBannerCarouselComponent':
  //   return (
  //     <CommonCarousel
  //       {...props}
  //       data={param}
  //       width={width}
  //       height={200}
  //       customStyle={{margin: 20}}
  //     />
  //   );
  // case 'FabTitleCMSTabParagraphContainer':
  //   return (
  //     <>
  //       <Text
  //         style={{
  //           fontFamily: Fonts.PlayfairDisplay600Italic,
  //           fontSize: 20,
  //           paddingTop: 20,
  //           color: Colors.textcolor,
  //           marginLeft: 15,
  //         }}>
  //         Offers for you
  //       </Text>
  //       <OfferTab data={param} {...props} />
  //     </>
  //   );
  // case 'SimpleResponsiveBannerComponent':
  //   return <Interior data={param} {...props} />;
  //     default:
  //       return;
  //   }
  // };
  const getInitialCartID = async () => {
    const cartId = await AsyncStorage.getItem('cartID');
    console.log('cartId==>', cartId);
    cartId == null && getCartID();
  };
  const generatTokenWithout = async () => {
    await axios
      .post(
        `https://apisap.fabindia.com/authorizationserver/oauth/token?grant_type=client_credentials&client_id=mobile_android&client_secret=secret`,
      )
      .then(
        response => {
          console.log(
            'response-=-=-=-=-=-generatTokenWithoutaa',
            response.data,
          );
          AsyncStorage.setItem(
            'generatToken',
            JSON.stringify({...response.data, isCheck: false}),
          );
        },
        error => {
          console.log('response-=-=-=-=-=-error', error);
        },
      );
  };
  const checkToken = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    console.log('asdfasdfasdfasdf', JSON.parse(get));
    if (getToken == null) {
      await generatTokenWithout();
      await getInitialCartID();
    }
  };
  useEffect(
    React.useCallback(() => {
      checkToken();
    }, []),
  );
  const getNewHomeData = async () => {
    console.log('in the function');
    const response = await axios.get(
      'http://159.89.164.11:3030/gethomeappdata',
    );
    setDashboardData(response.data.data);
    console.log(
      'this is a eresponse of pageXOffset',
      response.data.data.section2,
    );
  };

  React.useEffect(() => {
    getInitialData();
    getNewHomeData();
  }, []);

  return (
    <>
      <ScrollView style={{backgroundColor: 'white'}}>
        {/* <FlatList
          contentContainerStyle={{flexGrow: 1, backgroundColor: '#FFFFFF'}}
          data={filteredComp}
          keyExtractor={(item, index) => index}
          renderItem={item => checkSwitch(item.item)}
        /> */}
        <Catagory
          data={dashboardData.section1}
          {...props}
          customStyle={{paddingVertical: 10}}
        />
        <TopSwiper data={dashboardData.section2} {...props} />
        <NewHighlights
          {...props}
          customStyle={{marginVertical: 20}}
          bgColor={{backgroundColor: '#F3E0E0'}}
          heading={'New in'}
          subHeading={'Women'}
          data={dashboardData.section3}
        />
        <CommonCarousel
          {...props}
          data={dashboardData.section3}
          width={width / 1.07}
          height={200}
          customStyle={{margin: 20}}
        />
        <WomenTab data={filteredComp[0]} {...props} />
        <NewHighlights
          {...props}
          customStyle={{marginVertical: 20}}
          bgColor={{backgroundColor: '#F3E0E0'}}
          heading={'New in'}
          subHeading={'Men'}
          data={dashboardData.section6}
        />
        <CommonCarousel
          {...props}
          data={dashboardData.section7}
          width={width / 1.07}
          height={200}
          customStyle={{margin: 20}}
        />
        <WomenTab data={filteredComp[1]} {...props} />
        <NewHighlights
          {...props}
          customStyle={{marginVertical: 20}}
          bgColor={{backgroundColor: '#F3E0E0'}}
          heading={'New in'}
          subHeading={'Kids'}
          data={dashboardData.section9}
        />
        <CommonCarousel
          {...props}
          data={dashboardData.section8}
          width={width / 1.07}
          height={200}
          customStyle={{margin: 20}}
        />
        <WomenTab data={filteredComp[2]} {...props} />
        {/* long card */}
        <Interior data={dashboardData.section10} {...props} />
        <NewHighlights
          {...props}
          customStyle={{marginVertical: 20}}
          bgColor={{backgroundColor: '#F3E0E0'}}
          heading={'New in'}
          subHeading={'Home & Living'}
          data={dashboardData.section11}
        />
        <CommonCarousel
          {...props}
          data={dashboardData.section12}
          width={width / 1.07}
          height={200}
          customStyle={{margin: 20}}
        />
        <WomenTab data={filteredComp[3]} {...props} />
        <CommonCarousel
          {...props}
          data={dashboardData.section13}
          width={width / 1.07}
          height={200}
          customStyle={{margin: 20}}
        />
        <YoutubeVideo />
      </ScrollView>
    </>
  );
}
