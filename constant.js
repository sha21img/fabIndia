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
      return result;
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
export const ProductOrderdata = ['Items Ordered & Delivery Details', 'Payment'];
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

export const CollectionWomenData = ['Dupattas', 'Kurtas', 'Saris', 'Lehengas'];

export const HomePageSection = [
  'Section2', //category
  'Section1', // Top Swipper
  'Section3', //Women new high
  'Section4', // women carousel
  'Section5', // women Tab
  'Section6', // Empty
  'Section7', //men new high
  'Section8', //men carousel
  'Section9', // 9 repeat men tab
  'Section9A', // 9A kid new high
  'Section9B', // 9B  kid carousel
  'Section9C', // 9C  kid tab
  'Section10', // offer long card
  'Section11', //Interior
  'Section12', //Empty
  'Section13', // home livin new high
  'Section14', // home livin Carousel
  'Section15', // home livin tab
  'Section16', //Empty
  'Section17', //Empty
  'Section18', //Empty
  'Section19', // tea carousel
  'Section20', // Empty
  'Section21', //video ART_ARTIST
  'Section22', //legacy
  'Section23', // not available in our figma
];

export const LandingPageL1Women = [
  'Section1', // Top Swipper
  'Section2', //Apparel highlight
  'Section3', //Duppatta highlight
  'Section4', // jewellery highlight
  'Section5', // Ethnic wear
  'Section6', // women toptab
  'Section7', //Women Indian Banner
  // 'Section8', //Gallery grid
  // 'Section9', //empty
  'Section10', //Banner
  'Section11', //Western Wears
  'Section12', //women tops toptab
  'Section13', //carousel
  'Section14', //Collections
  // 'Section15', //empty
  // 'Section16', //empty
  // 'Section17', //empty
];
export const LandingPageL1Men = [
  'Section1', // Top Swipper
  'Section2', //Apparel highlight
  'Section3', //Duppatta highlight
  'Section4', // jewellery highlight
  'Section5', // Ethnic wear
  'Section6', // women toptab
  'Section7', //Women Indian Banner
  // 'Section8', //Gallery grid
  // 'Section9', //empty
  'Section10', //Banner
  'Section11', //Western Wears
  'Section12', //women tops toptab
  'Section13', //carousel
  'Section14', //Collections
  // 'Section15', //empty
  // 'Section16', //empty
  // 'Section17', //empty
];

export const LandingPageHomeLiving = [
  'Section1', // Top Swipper
  'Section2', //Apparel highlight
  'Section3', //Duppatta highlight
  'Section4', // jewellery highlight
  'Section5', // Ethnic wear
  'Section6', // women toptab
  'Section7', //Women Indian Banner
  // 'Section8', //Gallery grid
  // 'Section9', //empty
  'Section10', //Banner
  'Section11', //Western Wears
  'Section12', //women tops toptab
  'Section13', //carousel
  'Section14', //Collections
  // 'Section15', //empty
  // 'Section16', //empty
  // 'Section17', //empty
];

export const LandingPageFurniture = [
  'Section1', // Top Swipper
  'Section2', //Apparel highlight
  'Section3', //Duppatta highlight
  'Section4', // jewellery highlight
  'Section5', // Ethnic wear
  'Section6', // women toptab
  // 'Section7', //empty
  // 'Section8', //empty
  // 'Section9', //empty
  'Section10', //Banner
  // 'Section11', //Empty
  // 'Section12', //Empty
  'Section13', //carousel
  'Section14', //Collections
  // 'Section15', //empty
  // 'Section16', //empty
  // 'Section17', //empty
];

export const LandingPagePersonalCare = [
  'Section1', // Top Swipper
  'Section2', //Apparel highlight
  'Section3', //Duppatta highlight
  'Section4', // jewellery highlight
  'Section5', // not present
  'Section6', // personalcare toptab
  'Section7', //single image
  // 'Section8', //empty
  // 'Section9', //empty
  // 'Section10', //empty
  // 'Section11', //not present
  // 'Section12', //Empty
];
