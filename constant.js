import ImageColors from 'react-native-image-colors';
import {image} from './assets/images';

export const getColor = async (uri = image.ArtistImg1) => {
  const result = await ImageColors.getColors(uri, {
    fallback: '#228B22',
    cache: true,
    key: 'unique_key',
  });
  switch (result.platform) {
    case 'android':
      // android result properties
      const vibrantColor = result.vibrant;
      return vibrantColor;
      break;
    case 'web':
      // web result properties
      const lightVibrantColor = result.lightVibrant;
      break;
    case 'ios':
      // iOS result properties
      const primaryColor = result.primary;
      break;
    default:
      throw new Error('Unexpected platform key');
  }
};

export const WomenTabdata = [
  'Saris',
  'Tunics',
  'Kurtas',
  'Dresses',
  'Tops Shirts',
  'Pants',
];
export const MenCatagoryTableData = [
  'Ethnic Wear',
  'Western Wear',
  'Accessories',
  'Footwear',
  'Pants',
];
export const KidsTableData = ['Infants', 'Girls', 'Boys'];
export const KidsTableData1 = [
  'Girls Kurtas',
  'Boys Kurtas',
  'Infants Kurtas',
  'Girls',
];
export const KidsTableData2 = ['Bestsellers', 'Furniture', 'Games & Toys'];
export const KidsTableData3 = ['Summer Vacation', 'Playtime'];
export const Furniture2 = ['Living Room', 'Dining', 'Bedroom', 'Study Room'];
export const WoMenCatagoryTableData = [
  'Apparel',
  'Jewellery',
  'Beauty',
  'Footwear',
  'Accessories',
  'Pants',
];
export const WoMenCatagoryBeachData = [
  'Weekend Getaway',
  'Lounging Around',
  'Brunch',
];
export const MenCatagoryData = [
  'Kurtas',
  'Shirts',
  'Nehru Jackets & Blazers',
  'Pyjamas',
];
export const WoMenCatagoryData = [
  'Saris',
  'Dresses',
  'Tunics',
  'Skirts',
  'Kurtas',
  'Pants',
];
export const WoMenCatagoryData2 = [
  'Chanderi',
  'Chikankari',
  'Ikat',
  'Shibori',
  'Madhubani',
];
export const MenCatagoryTab2 = [
  'Cotton',
  'Linen',
  'Silk',
  'Cotton Silk',
  'Cotton Linen',
];

export const MenTabdata = [
  'Shirts',
  'Kurtas',
  'FaceMasks',
  'NehruJacketsBlazers',
  'Pants',
];

export const OfferTabData = ['Women', 'Men', 'Kids', 'HomeLinen', 'HomeDecor'];

export const HomeTabdata = ['HomeLinen', 'Furniture', 'HomeDecor'];
export const LifeTabdata = [
  'WeekendGetaway',
  'Brunchdate',
  'WorkfromHome',
  'Pants',
];
export const MenCatagoryTab3 = [
  'Lounging Around',
  'Work from Home',
  'In the Kitchen',
];
export const hasSpaces = str => {
  if (str.indexOf(' ') !== -1) {
    return true;
  } else {
    return false;
  }
};

export const HomeCatagoryTab4 = [
  'Meals at Home',
  'Room Makeover',
  'Staycation',
];

export const HomeCatagoryTab3 = [
  'Table Covers',
  'Table Napkins',
  'Runners',
  'Mats',
];
export const HomeCatagoryTab2 = [
  'Cotton',
  'Linen',
  'Silk',
  'Cotton Linen',
  'Cotton Silk',
];
export const HomeCatagoryTab1 = [
  'Bedsheets',
  'Bedcovers',
  'Bath Linen',
  'Pillow Covers',
];

export const FoodCatagoryTab1 = [
  'Spices, Seasonings & Masalas',
  'Tea',
  'Preserves',
];

export const FoodCatagoryTab2 = [
  'Tulsi Tea',
  'Herbal Infusions',
  'Green Tea',
  'Flavoured Tea',
];
export const FoodCatagoryTab3 = [
  'Healthy Living',
  'Snacking Sundays',
  'Wholesome meals',
];
export const HomeDecorTableData = [
  'Dinnerware',
  'Drinkware',
  'Serveware',
  'Flatware',
];
export const HomeDecorTableData1 = [
  'Morning Chai',
  'Casual Lunch',
  'Dinner Party',
];
export const HomeDecorTableData2 = [
  'Lamps',
  'Lamp Shades',
  'Hanging & String Lights',
];

export const CollectionWomenData = [
  'Dupattas',
  'Kurtas',
  'Saris',
  'Lehengas',
];
