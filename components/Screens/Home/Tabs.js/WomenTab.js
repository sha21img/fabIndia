import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Chip from '../../../Common/Chip';
import CommonTopTab from '../../../Common/CommonTopTab';
import {getComponentData} from '../../../Common/Helper';
import CardProducts from './CardProducts';

export default function WomenTab(props) {
  const {data = {}} = props;
  const [active, setActive] = React.useState('');
  const [chipData, setChipData] = React.useState([]);
  const [toptabLabelData, setToptabLabelData] = React.useState([]);

  const getTabCount = async () => {
    const bannerId = data.tabs;
    getBannerCount(bannerId);
  };

  const getTabData = async data => {
    setActive(data.title);
    const splitBannerId = data.components.split(' ').join(',');
    const response = await getComponentData(
      `cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );
    // console.log('tabData==>', response.component);
    setToptabLabelData(response.component);
  };

  const getBannerCount = async bannerId => {
    const splitBannerId = bannerId.split(' ').join(',');
    // console.log('bannerId==>', splitBannerId);
    const response = await getComponentData(
      `cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );
    setChipData(response.component);
    getTabData(response.component[0]);
    // console.log('chipData==>', response.component);
  };

  useEffect(() => {
    if (props?.data) {
      getTabCount();
    }
  }, [props?.data]);

  const cardsObj = {
    Jewellery: CardProducts,
    'Saris & Blouses': CardProducts,
    'Stoles & Sarongs': CardProducts,
    'Stoles & Scarves': CardProducts,
    'Women Ethnic': CardProducts,
    'Women Western': CardProducts,
    'Men Ethnic': CardProducts,
    'Men Western': CardProducts,
    'Men Footwear': CardProducts,
    Boys: CardProducts,
    'Infant Girls': CardProducts,
    Girls: CardProducts,
    'Infant Boys': CardProducts,
    'Home & Living': CardProducts,
    Furniture: CardProducts,
    Dupattas: CardProducts,
    'Churidars & Salwars': CardProducts,
    'Churidars & Pyjamas': CardProducts,
    Kurtas: CardProducts,
    'Tops, Shirts & Tunics': CardProducts,
    'Nehru Jackets': CardProducts,
    'Dresses & Jumpsuits': CardProducts,
    'Pants & Palazzos': CardProducts,
    Sleepwear: CardProducts,
    Trousers: CardProducts,
    Shirts: CardProducts,
    'Girls Western Wear': CardProducts,
    'Boys Ethnic Wear': CardProducts,
    'Girls Ethnic Wear': CardProducts,
    'Boys Western Wear': CardProducts,
    'Boys Kurta': CardProducts,
    'Girls Ethnic Sets': CardProducts,
    'Girls Dresses & Jumpsuits': CardProducts,
    'Boys Shirt & Short Kurta': CardProducts,
    'Infant Girls Sets': CardProducts,
    'Bed Linen': CardProducts,
    Bath: CardProducts,
    'Kids Linen': CardProducts,
    Curtain: CardProducts,
    'Kitchen & Dining': CardProducts,
    'Home Decor': CardProducts,
    'Wall Decor': CardProducts,
    Cushion: CardProducts,
    Cushions: CardProducts,
    'Floor Convering': CardProducts,
    'Floor Coverings': CardProducts,
    Bedroom: CardProducts,
    Living: CardProducts,
    Dining: CardProducts,
    'Bar Furniture': CardProducts,
    'Lamp & Shades': CardProducts,
    'Stationary & Tags': CardProducts,
  };

  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          paddingHorizontal: 15,
          marginTop: 10,
        }}>
        {chipData.map((item, index) => {
          return (
            <Chip
            key={Math.random()}
              title={item.title}
              handleClick={() => getTabData(item)}
              active={active}
            />
          );
        })}
      </View>

      {toptabLabelData.length > 0 && (
        <CommonTopTab
          {...props}
          data={toptabLabelData.map(item => ({
            ...item,
            card: cardsObj[item.title],
          }))}
        />
      )}
    </>
  );
}
