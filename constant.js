import ImageColors from 'react-native-image-colors';
import React, {useEffect, useState} from 'react';
import {image} from './assets/images';
export const useDebounce = value => {
  const [dbValue, setDbvalue] = useState();
  useEffect(() => {
    const timer = setTimeout(() => {
      setDbvalue(dbValue);
    }, 1000);
    return () => clearTimeout(timer);
  }, [value]);
  return dbValue;
};
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
export const StoreDetails = [
  'Description',
  'Specifications',
  'Additional Details',
];
export const AboutUsTab = [
  'About us',
  'Our vision & mission',
  'Values & Guiding Principles',
];
export const ProductOrderdata = ['Items Ordered & Delivery Details', 'Payment'];
export const StoreLocateTab = ['India', 'International'];
export const ExchangeProduct = [
  'All',
  'Cotton',
  'Silk',
  'Linen',
  'Cotton Silk',
  'Viscose',
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
  let string = str?.split('/');
  return string;
};
export const hasWidth = str => {
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
export const giftCardTabs = ['My Gift Card', 'Add Gift Card', 'Send Gift Card'];

export const HomePageSection = [
  // 'Section2', //category
  // 'Section1', // Top Swipper
  // 'Section3', //Women new high
  // 'Section4', // women carousel
  'Section5', // women Tab
  // 'Section6', // Empty
  // 'Section7', //men new high
  // 'Section8', //men carousel
  'Section9', // 9 repeat men tab
  // 'Section9A', // 9A kid new high
  // 'Section9B', // 9B  kid carousel
  'Section9C', // 9C  kid tab
  // 'Section10', // offer long card
  // 'Section11', //Interior
  // 'Section12', //Empty
  // 'Section13', // home livin new high
  // 'Section14', // home livin Carousel
  'Section15', // home livin tab
  // 'Section16', //Empty
  // 'Section17', //Empty
  // 'Section18', //Empty
  // 'Section19', // tea carousel
  // 'Section20', // Empty
  // 'Section21', //video ART_ARTIST
  // 'Section22', //legacy
  // 'Section23', // not available in our figma
];

export const LandingPageL1Women = [
  // 'Section1', // Top Swipper
  // 'Section2', //Apparel highlight
  // 'Section3', //Duppatta highlight
  // 'Section4', // jewellery highlight
  // 'Section5', // Ethnic wear
  'Section6', // women toptab
  // 'Section7', //Women Indian Banner
  // 'Section8', //Gallery grid
  // // 'Section9', //empty
  // 'Section10', //Banner
  // 'Section11', //Western Wears
  'Section12', //women tops toptab
  // 'Section13', //carousel
  // 'Section14', //Collections
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
  'Section8', //Gallery grid
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
  // 'Section1', // Top Swipper
  // 'Section2', //Apparel highlight
  // 'Section3', //Duppatta highlight
  // 'Section4', // jewellery highlight
  // 'Section5', // Ethnic wear
  'Section6', // women toptab
  // 'Section7', //Women Indian Banner
  // 'Section8', //Gallery grid
  // 'Section9', //empty
  // 'Section10', //Banner
  // 'Section11', //Western Wears
  'Section12', //women tops toptab
  // 'Section13', //carousel
  // 'Section14', //Collections
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

export const LandingPageL1Kids = [
  // 'Section1', // Top Swipper
  // 'Section2', // infants highlight
  // 'Section3', // girls highlight
  // 'Section4', // Boys highlight
  // 'Section5', // Shop by category
  'Section6', // Kids toptab
  // 'Section7', // Kids bright banner
  // 'Section8', // Gallery grid
  // 'Section9', // empty
  // 'Section10', // Banner 50% off
  // 'Section11', // Top sellers
  'Section12', // kids cloths toptab
  // 'Section13', // carousel
  // 'Section14', // Collections
  // 'Section15', // empty
  // 'Section16', // empty
  // 'Section17', // empty
];
export const LandingPageL1Gifting = [
  'Section1',
  'Section2',
  'Section3',
  'Section4',
];

export const LandingPageL1Food = [
  'Section1', // Top Swipper
  'Section2', // Essentials highlight
  'Section3', // Snacks highlight
  'Section4', // condiments highlight
  'Section5', // Shop by category
  'Section6', // FabTitleCMSTabContainer
  'Section7', // Take a bite banner
  // // 'Section8', // Gallery grid
  // // 'Section9', // empty
  'Section10', // Banner snaks
  'Section11', // Condiments
  'Section12', // empty
  'Section13', // carousel
  'Section14', // Collections
  // 'Section15', // empty
  // 'Section16', // empty
  // 'Section17', // empty
];
export const data = [
  {
    id: 0,
    title: 'New Arrivals',
    description: 'Jacket,Sweater,Sweatshirt',
    category: [
      {
        name: 'All in New Arrivals',
      },
      {
        name: 'Women',
      },
      {
        name: 'Men',
      },
      {
        name: 'Kids',
      },

      {
        name: 'Home & Living',
      },
      {
        name: 'Furniture',
      },
      {
        name: 'Personal Care',
      },
      {
        name: 'Food',
      },
    ],
  },
  {
    id: 1,
    title: 'Women',
    description: 'Jacket,Sweater,Sweatshirt',
    category: [
      {
        name: 'All in Women',
      },
      {
        name: 'Ethnic Wear',
        subcategory: [
          {title: 'Kurtas'},
          {title: 'Kurtis'},
          {title: 'Dupattas'},
          {title: 'Saris & Blouses'},
          {title: 'Churidars & Salwars'},
          {title: 'Pants, Palazzos & Skirts'},
          {title: 'Indian Sets'},
          {title: 'Shawls'},
        ],
      },
      {
        name: 'Western Wear',
        subcategory: [
          {title: 'Dresses & Jumpsuits'},
          {title: 'Tops,Shirts &tunics'},
          {title: 'Pants & Palazzos '},
          {title: 'Skirts & Shorts'},
          {title: 'Sets'},
          {title: 'Outerwear'},
        ],
      },

      {
        name: 'Sleepwear',
        subcategory: [
          {title: 'Kaftans'},
          {title: 'Night Suits'},
          {title: 'Shorts & Pyjamas'},
        ],
      },
      {
        name: 'Accessories',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Jewellery',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Footwear',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
    ],
  },
  {
    id: 2,
    title: 'Men',
    description: 'Jacket,Sweater,Sweatshirt',
    category: [
      {
        name: 'All in Women',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Saris & Blouses',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Ethnic Wear',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Fusion Wear',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },

      {
        name: 'Jewellery',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Maternity Wear',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Sleepwear',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Footwear',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Accessories',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
    ],
  },
  {
    id: 3,
    description: 'Jacket,Sweater,Sweatshirt',
    title: 'Kids',
    category: [
      {
        name: 'All in Women',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Saris & Blouses',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Ethnic Wear',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Fusion Wear',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },

      {
        name: 'Jewellery',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Maternity Wear',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Sleepwear',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Footwear',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Accessories',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
    ],
  },
  {
    id: 4,
    description: 'Jacket,Sweater,Sweatshirt',
    title: 'Home & Living',
    category: [
      {
        name: 'All in Women',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Saris & Blouses',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Ethnic Wear',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Fusion Wear',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },

      {
        name: 'Jewellery',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Maternity Wear',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Sleepwear',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Footwear',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Accessories',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
    ],
  },
  {
    id: 5,
    description: 'Jacket,Sweater,Sweatshirt',
    title: 'Furniture',
    category: [
      {
        name: 'All in Women',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Saris & Blouses',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Ethnic Wear',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Fusion Wear',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },

      {
        name: 'Jewellery',
        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Maternity Wear',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Sleepwear',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Footwear',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
      {
        name: 'Accessories',

        subcategory: [{title: 'vicky'}, {title: 'vicky'}, {title: 'vicky'}],
      },
    ],
  },
  {
    id: 6,
    description: 'Jacket,Sweater,Sweatshirt',
    title: 'Personal Care',
    category: [
      {
        name: 'All in Women',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Saris & Blouses',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Ethnic Wear',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Fusion Wear',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },

      {
        name: 'Jewellery',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Maternity Wear',

        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Sleepwear',

        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Footwear',

        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Accessories',

        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
    ],
  },
  {
    id: 7,
    description: 'Jacket,Sweater,Sweatshirt',
    title: 'Food',
    category: [
      {
        name: 'All in Women',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Saris & Blouses',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Ethnic Wear',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Fusion Wear',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },

      {
        name: 'Jewellery',
        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Maternity Wear',

        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Sleepwear',

        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Footwear',

        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
      {
        name: 'Accessories',

        subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
      },
    ],
  },
  // {
  //   id: 8,
  //   description: 'Jacket,Sweater,Sweatshirt',
  //   title: 'Food',
  //   category: [
  //     {
  //       name: 'All in Women',
  //       subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
  //     },
  //     {
  //       name: 'Saris & Blouses',
  //       subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
  //     },
  //     {
  //       name: 'Ethnic Wear',
  //       subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
  //     },
  //     {
  //       name: 'Fusion Wear',
  //       // subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
  //     },

  //     {
  //       name: 'Jewellery',
  //       subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
  //     },
  //     {
  //       name: 'Maternity Wear',
  //       subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
  //     },
  //     {
  //       name: 'Sleepwear',
  //       subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
  //     },
  //     {
  //       name: 'Footwear',
  //       subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
  //     },
  //     {
  //       name: 'Accessories',
  //       subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
  //     },
  //   ],
  // },
  // {
  //   id: 9,
  //   description: 'Jacket,Sweater,Sweatshirt',
  //   title: 'Collections',
  //   category: [
  //     {
  //       name: 'All in Women',
  //       subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
  //     },
  //     {
  //       name: 'Saris & Blouses',
  //       subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
  //     },
  //     {
  //       name: 'Ethnic Wear',
  //       subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
  //     },
  //     {
  //       name: 'Fusion Wear',
  //       subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
  //     },

  //     {
  //       name: 'Jewellery',
  //       subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
  //     },
  //     {
  //       name: 'Maternity Wear',

  //       subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
  //     },
  //     {
  //       name: 'Sleepwear',

  //       subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
  //     },
  //     {
  //       name: 'Footwear',

  //       subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
  //     },
  //     {
  //       name: 'Accessories',

  //       subcategory: [{title: 'title'}, {title: 'title'}, {title: 'title'}],
  //     },
  //   ],
  // },
];
export const FabFamilyTabData = [
  'About FabFamily',
  'Benefits',
  'Membership',
  'Refer a friend',
];
// Section1=FabResponsiveBannerCarouselComponent
//Section2=FabCollectionBannerCarouselComponent
// Section3=FabCMSTabParagraphContainer
// Section4=FabCollectionSpaceBannerCarouselComponent
//Section5=FabCMSTabParagraphContainer
// Section6=FabCollectionBannerCarouselComponent

//Section7=FabWeddingPageSection7TabContainer
// Section8=FabCollectionBannerCarouselComponent
// Section9=FabCMSTabParagraphContainer
// 10=blank
// Section11=FabCollectionBannerCarouselComponent
// Section12=FabCMSTabParagraphContainer
// Section13=blank
export const ShopByCollections = [
  'Section1',
  'Section2',
  'Section3',
  'Section4',
  'Section5',
  'Section6',
  'Section7',
  'Section8',
  'Section9',
  'Section11',
  'Section12',
];
// Section1=FabResponsiveBannerCarouselComponent
// Section2=FabCollectionBannerCarouselComponent
// Section3=FabCMSTabParagraphContainer
// Section4=FabCollectionSpaceBannerCarouselComponent,
// Section5=FabCMSTabParagraphContainer
// Section6=FabCollectionBannerCarouselComponent
//Section7=FabCMSTabParagraphContainer
// Section8=FabCollectionBannerCarouselComponent
//Section9=FabCMSTabParagraphContainer
export const FestiveCollections = [
  'Section1',
  'Section2',
  'Section3',
  'Section4',
  'Section5',
  'Section6',
  'Section7',
  'Section8',
  'Section9',
];
