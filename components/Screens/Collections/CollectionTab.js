import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getComponentData} from '../../Common/Helper';
import CommonTopTab from '../../Common/CommonTopTab';
import CardProducts from '../Home/Tabs.js/CardProducts';

const CollectionTab = props => {
  const {data = {}} = props;
  const [initialData, setInitialData] = React.useState([]);
  const [tabCardData, setTabCardData] = React.useState([]);
  const [page, setPage] = useState(0);
  console.log('pl,m ', data.components.split(' ').join(','));
  const getData = async () => {
    const splitBannerId = data.components.split(' ').join(',');
    const response = await getComponentData(
      `cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );
    // console.log('_+_+_+', response.component);
    setPage(page + 1);
    setInitialData(response);
    if (tabCardData.length > 0) {
      setTabCardData(prev => [...prev, ...response.component]);
    } else {
      setTabCardData(response.component);
    }
  };
  //   const endReach = () => {
  //     if (initialData?.pagination?.totalPages > page) {
  //       getData();
  //     }
  //   };
  useEffect(() => {
    getData();
  }, []);
  const cardsObj = {
    Kurtas: CardProducts,
    Dupattas: CardProducts,
    'Churidar & Salwar': CardProducts,
    'Pants, Palazzos & Skirts': CardProducts,
    'Saris & Blouses': CardProducts,
    'Nehru Jackets': CardProducts,
    'Churidar & Pyjamas': CardProducts,
    Shirts: CardProducts,
    'Girls Kurtas': CardProducts,
    'Girls Ethnic Sets': CardProducts,
    'Boys Kurtas': CardProducts,
    'Boys Sets': CardProducts,
    'Boys Churidar, Pyjama & Dhoti': CardProducts,
    'Bags, belts & wallets': CardProducts,
    Jewellery: CardProducts,
    'Mens footwear': CardProducts,
    'Womens footwear': CardProducts,
    'Stoles & Scarves': CardProducts,
    'Cushions & Cushion Covers': CardProducts,
    'Bed linen': CardProducts,
    'Kitchen & Dining': CardProducts,
    Bath: CardProducts,
    'Home Decor': CardProducts,
    'Indian Sets': CardProducts,
    'Sherwanis & Sets': CardProducts,
    'Infant Boys': CardProducts,
    'Girls Ethnic Wear': CardProducts,
    'Boys Ethnic Wear': CardProducts,
    'Infant Girls': CardProducts,
    Bags: CardProducts,
    Footwear: CardProducts,
  };
  return (
    <>
      {tabCardData.length > 0 && (
        <CommonTopTab
          {...props}
          data={tabCardData.map(item => ({
            ...item,
            card: cardsObj[item.title],
          }))}
        />
      )}
    </>
  );
};

export default CollectionTab;
