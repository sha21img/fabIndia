import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  ImageBackground,
  Dimensions,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../../assets/Colors';
import Carousel from 'react-native-reanimated-carousel';
import Home from '../Home';
import Menu from '../Menu';
import Search from '../Search';
import HomeStack from '../HomeStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyAccount from '../MyAccount';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import {image} from '../../../assets/images';
import {data} from '../../../constant';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import SearchResult from '../Search/SearchResult';
import FabFamily from '../MyAccount/FabFamily';
import CategorySection from '../CategorySection';
import HomeHeader from '../Home/HomeHeader';
import Fonts from '../../../assets/fonts';
import {BaseURL2, getComponentData, logout} from '../../Common/Helper';
import AccordianMenu from './AccordianMenu';
import {useIsFocused} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {CommonActions} from '@react-navigation/native';
// import WomenCategory from '../Home/WomenCategory';
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function useForceUpdate() {
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update state to force render
  // An function that increment 👆🏻 the previous state like here
  // is better than directly setting `value + 1`
}

const DrawerContent = () => {
  let menuList = [
    {
      children: [],
      title: 'Orders',
      landingPage: 'MyOrder',
    },
    {
      children: [],
      title: 'FabFamily',
      landingPage: 'FabFamily',
    },
    {
      categories: [
        {
          children: [
            {
              children: [],
              title: 'Women',
              landingPage: '/shop/new-women-products',
            },
            {
              children: [],
              title: 'Men',
              landingPage: '/shop/new-men-products',
            },
            {
              children: [],
              title: 'Kids',
              landingPage: '/shop/new-kids-products',
            },
            {
              children: [],
              title: 'Home & Living',
              landingPage: '/shop/new-home-living',
            },
            {
              children: [],
              title: 'Furniture',
              landingPage: '/shop/new-furniture',
            },
            {
              children: [],
              title: 'Personal Care',
              landingPage: '/shop/new-personal-care',
            },
            {
              children: [],
              title: 'Food',
              landingPage: '/shop/new-food',
            },
          ],
          title: 'New Arrivals',
          image:
            'https://apisap.fabindia.com//medias/hp-sec1-mob-9dec22-1-rep1.jpg?context=bWFzdGVyfHJvb3R8NjUzNzZ8aW1hZ2UvanBlZ3xoMWEvaDZiLzkxMjM2MDkzNzg4NDYvaHAtc2VjMS1tb2ItOWRlYzIyLTEtcmVwMS5qcGd8ZDkyMGMxZWFlZTIwNzU4N2I3MGJlZjk4MzQyZjliNjQ1YjU5YjdiZmI3NzNiMzgwZWUxZjU4M2YxZTllYWY2ZA',
        },
        {
          children: [
            {
              children: [],
              title: 'All in Women',
              landingPage: '/shop/women-products',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Kurtas',
                  landingPage: '/clothing/women-kurtas',
                },
                {
                  children: [],
                  title: 'Kurtis',
                  landingPage: '/clothing/women-kurtis',
                },
                {
                  children: [],
                  title: 'Dupattas',
                  landingPage: '/clothing/women-dupattas',
                },
                {
                  children: [],
                  title: 'Saris & Blouses',
                  landingPage: '/clothing/women-saris-blouses',
                },
                {
                  children: [],
                  title: 'Churidars & Salwars',
                  landingPage: '/clothing/women-churidars-salwars',
                },
                {
                  children: [],
                  title: 'Pants, Palazzos & Skirts',
                  landingPage: '/clothing/women-pants-palazzos-skirts',
                },
                {
                  children: [],
                  title: 'Indian Sets',
                  landingPage: '/clothing/women-indian-sets',
                },
                {
                  children: [],
                  title: 'Shawls',
                  landingPage: '/clothing/women-shawls',
                },
                {
                  children: [],
                  title: 'Jackets',
                  landingPage: '/clothing/women-ethnic-jackets',
                },
              ],
              title: 'Ethnic Wear',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Dresses & Jumpsuits',
                  landingPage: '/clothing/women-dresses-jumpsuits',
                },
                {
                  children: [],
                  title: 'Tops, Shirts & Tunics',
                  landingPage: '/clothing/women-tops-shirts-tunics',
                },
                {
                  children: [],
                  title: 'Pants & Palazzos',
                  landingPage: '/clothing/women-pants-palazzos',
                },
                {
                  children: [],
                  title: 'Skirts & Shorts',
                  landingPage: '/clothing/women-skirts-shorts',
                },
                {
                  children: [],
                  title: 'Sets',
                  landingPage: '/clothing/women-sets',
                },
                {
                  children: [],
                  title: 'Outerwear',
                  landingPage: '/clothing/women-outerwear',
                },
              ],
              title: 'Western Wear',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Kaftans',
                  landingPage: '/clothing/women-kaftans',
                },
                {
                  children: [],
                  title: 'Night Suits',
                  landingPage: '/clothing/women-night-suits',
                },
                {
                  children: [],
                  title: 'Shorts & Pyjamas',
                  landingPage: '/clothing/women-shorts-pyjamas',
                },
              ],
              title: 'Sleepwear',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Bags, belts & wallets',
                  landingPage: '/shop/women-bags-belts-wallets',
                },
                {
                  children: [],
                  title: 'Hair Accessories',
                  landingPage: '/shop/women-hair-accessories',
                },
                {
                  children: [],
                  title: 'Masks',
                  landingPage: '/shop/women-masks',
                },
                {
                  children: [],
                  title: 'Stoles & Scarves',
                  landingPage: '/shop/women-stoles-scarves',
                },
                {
                  children: [],
                  title: 'Winter Accessories',
                  landingPage: '/shop/women-winter-accessories',
                },
              ],
              title: 'Accessories',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Silver Jewellery',
                  landingPage: '/shop/women-silver-jewellery',
                },
                {
                  children: [],
                  title: 'Fashion Jewellery',
                  landingPage: '/shop/women-fashion-jewellery',
                },
              ],
              title: 'Jewellery',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Jutties',
                  landingPage: '/shop/women-jutties',
                },
                {
                  children: [],
                  title: 'Chappals',
                  landingPage: '/shop/women-chappals',
                },
                {
                  children: [],
                  title: 'Shoes',
                  landingPage: '/shop/women-shoes',
                },
              ],
              title: 'Footwear',
            },
          ],
          title: 'Women',
          image:
            'https://apisap.fabindia.com//medias/hp-sec1-mob-9dec22-1-rep1.jpg?context=bWFzdGVyfHJvb3R8NjUzNzZ8aW1hZ2UvanBlZ3xoMWEvaDZiLzkxMjM2MDkzNzg4NDYvaHAtc2VjMS1tb2ItOWRlYzIyLTEtcmVwMS5qcGd8ZDkyMGMxZWFlZTIwNzU4N2I3MGJlZjk4MzQyZjliNjQ1YjU5YjdiZmI3NzNiMzgwZWUxZjU4M2YxZTllYWY2ZA',
        },
        {
          children: [
            {
              children: [],
              title: 'All in Men',
              landingPage: '/shop/men-products',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Kurtas',
                  landingPage: '/clothing/men-kurtas',
                },
                {
                  children: [],
                  title: 'Nehru Jackets',
                  landingPage: '/clothing/men-nehru-jackets',
                },
                {
                  children: [],
                  title: 'Churidars & Pyjamas',
                  landingPage: '/clothing/men-churidars-pyjamas',
                },
                {
                  children: [],
                  title: 'Salwars & Dhotis',
                  landingPage: '/clothing/men-salwars-dhotis',
                },
                {
                  children: [],
                  title: 'Sherwanis & Sets',
                  landingPage: '/clothing/men-sherwanis-sets',
                },
                {
                  children: [],
                  title: 'Shawls',
                  landingPage: '/clothing/men-shawls',
                },
              ],
              title: 'Ethnic Wear',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Shirts',
                  landingPage: '/clothing/men-shirts',
                },
                {
                  children: [],
                  title: 'Pants',
                  landingPage: '/clothing/men-pants',
                },
                {
                  children: [],
                  title: 'Shorts',
                  landingPage: '/clothing/men-shorts',
                },
                {
                  children: [],
                  title: 'Jackets',
                  landingPage: '/clothing/men-jackets',
                },
              ],
              title: 'Western Wear',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Stoles',
                  landingPage: '/shop/men-stole',
                },
              ],
              title: 'Accessories',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Jutties',
                  landingPage: '/shop/men-jutties',
                },
                {
                  children: [],
                  title: 'Chappals',
                  landingPage: '/shop/men-chappals',
                },
                {
                  children: [],
                  title: 'Sandals',
                  landingPage: '/shop/men-sandals',
                },
              ],
              title: 'Footwear',
            },
            {
              children: [],
              title: 'Custom Kurtas',
              landingPage: '/custom-kurta',
            },
          ],
          title: 'Men',
          image:
            'https://apisap.fabindia.com//medias/hp-sec1-mob-9dec22-1-rep1.jpg?context=bWFzdGVyfHJvb3R8NjUzNzZ8aW1hZ2UvanBlZ3xoMWEvaDZiLzkxMjM2MDkzNzg4NDYvaHAtc2VjMS1tb2ItOWRlYzIyLTEtcmVwMS5qcGd8ZDkyMGMxZWFlZTIwNzU4N2I3MGJlZjk4MzQyZjliNjQ1YjU5YjdiZmI3NzNiMzgwZWUxZjU4M2YxZTllYWY2ZA',
        },
        {
          children: [
            {
              children: [],
              title: 'All In Kids',
              landingPage: '/shop/kids-products',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Kurtas',
                  landingPage: '/clothing/boys-kurtas',
                },
                {
                  children: [],
                  title: 'Jackets',
                  landingPage: '/clothing/ethnic-boys-jackets',
                },
                {
                  children: [],
                  title: 'Churidar, Pyjama & Dhotis',
                  landingPage: '/clothing/boys-churidars-pyjamas-dhotis',
                },
                {
                  children: [],
                  title: 'Sets',
                  landingPage: '/clothing/ethnic-boys-sets',
                },
              ],
              title: 'Boys Ethnic Wear',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Shirt & Short Kurta',
                  landingPage: '/clothing/boys-shirts-short-kurtas',
                },
                {
                  children: [],
                  title: 'Pants & Shorts',
                  landingPage: '/clothing/boys-pants-shorts',
                },
                {
                  children: [],
                  title: 'Sets',
                  landingPage: '/clothing/western-boys-sets',
                },
                {
                  children: [],
                  title: 'Jackets',
                  landingPage: '/clothing/western-boys-jackets',
                },
                {
                  children: [],
                  title: 'Sleepwear',
                  landingPage: '/clothing/boys-sleepwear',
                },
              ],
              title: 'Boys Western Wear',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Kurtas',
                  landingPage: '/clothing/girls-kurtas',
                },
                {
                  children: [],
                  title: 'Ethnic Sets',
                  landingPage: '/clothing/girls-ethnic-sets',
                },
              ],
              title: 'Girl Ethnic Wear',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Dress & Jumpsuits',
                  landingPage: '/clothing/women-dresses-jumpsuits',
                },
                {
                  children: [],
                  title: 'Tops & T-Shirts',
                  landingPage: '/clothing/girls-tops-t-shirts',
                },
                {
                  children: [],
                  title: 'Shorts & Skirts',
                  landingPage: '/clothing/girls-shorts-skirts',
                },
                {
                  children: [],
                  title: 'Leggings',
                  landingPage: '/clothing/girls-leggings',
                },
                {
                  children: [],
                  title: 'Sets',
                  landingPage: '/clothing/girls-sets',
                },
                {
                  children: [],
                  title: 'Sleepwear',
                  landingPage: '/clothing/girls-sleepwear',
                },
              ],
              title: 'Girls Western Wear',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Kurtas',
                  landingPage: '/clothing/infant-boys-kurtas',
                },
                {
                  children: [],
                  title: 'Sets',
                  landingPage: '/clothing/infant-boys-sets',
                },
                {
                  children: [],
                  title: 'Churidar, Pyjama & Dhotis',
                  landingPage: '/clothing/infant-boys-churidars-pyjamas-dhotis',
                },
                {
                  children: [],
                  title: 'Shirts & Short Kurtas',
                  landingPage: '/clothing/infant-boys-shirts-short-kurtas',
                },
              ],
              title: 'Infant Boys',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Dresses',
                  landingPage: '/clothing/infant-girls-dresses',
                },
                {
                  children: [],
                  title: 'Sets',
                  landingPage: '/clothing/infant-girls-sets',
                },
              ],
              title: 'Infant Girls',
            },
            {
              children: [],
              title: 'Footwear',
              landingPage: '/shop/kids-footwear',
            },
          ],
          title: 'Kids',
          image:
            'https://apisap.fabindia.com//medias/hp-sec1-mob-9dec22-1-rep1.jpg?context=bWFzdGVyfHJvb3R8NjUzNzZ8aW1hZ2UvanBlZ3xoMWEvaDZiLzkxMjM2MDkzNzg4NDYvaHAtc2VjMS1tb2ItOWRlYzIyLTEtcmVwMS5qcGd8ZDkyMGMxZWFlZTIwNzU4N2I3MGJlZjk4MzQyZjliNjQ1YjU5YjdiZmI3NzNiMzgwZWUxZjU4M2YxZTllYWY2ZA',
        },
        {
          children: [
            {
              children: [],
              title: 'All in Home & Living',
              landingPage: '/shop/home-living',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Bedcovers',
                  landingPage: '/home/bedcovers',
                },
                {
                  children: [],
                  title: 'Bedsheets',
                  landingPage: '/home/bedsheets',
                },
                {
                  children: [],
                  title: 'Dohars',
                  landingPage: '/home/dohars',
                },
                {
                  children: [],
                  title: 'Dohars & Quilts',
                  landingPage: '/home/duvets-quilts',
                },
                {
                  children: [],
                  title: 'Pillow Covers',
                  landingPage: '/clothing/women-pants-palazzos',
                },
                {
                  children: [],
                  title: 'Throws',
                  landingPage: '/home/throws',
                },
              ],
              title: 'Bed linen',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Cushions',
                  landingPage: '/home/cushion',
                },
                {
                  children: [],
                  title: 'Cushion Covers',
                  landingPage: '/home/cushion-covers',
                },
                {
                  children: [],
                  title: 'Bolster Covers',
                  landingPage: '/home/bolster-covers',
                },
                {
                  children: [],
                  title: 'Floor Cushions',
                  landingPage: '/home/floor-cushions',
                },
                {
                  children: [],
                  title: 'Chair Pads',
                  landingPage: '/home/chair-pads',
                },
              ],
              title: 'Cushions',
            },
            {
              children: [],
              title: 'Curtains',
              landingPage: '/home/curtains',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Shower Curtains & Caps',
                  landingPage: '/home/shower-curtains-caps',
                },
                {
                  children: [],
                  title: 'Bath Accessories',
                  landingPage: '/home/bath-accessories',
                },
                {
                  children: [],
                  title: 'Towels',
                  landingPage: '/home/towels',
                },
                {
                  children: [],
                  title: 'Bath Mats',
                  landingPage: '/home/bath-mats',
                },
              ],
              title: 'Bath',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Table Lamps',
                  landingPage: '/home/table-lamps',
                },
                {
                  children: [],
                  title: 'Floor Lamps',
                  landingPage: '/home/floor-lamps',
                },
                {
                  children: [],
                  title: 'Hanging & Wall Lamps',
                  landingPage: '/home/hanging-wall-lamps',
                },
                {
                  children: [],
                  title: 'Lampshades',
                  landingPage: '/home/lampshades',
                },
                {
                  children: [],
                  title: 'String Lights',
                  landingPage: '/home/string-lights',
                },
              ],
              title: 'Lighting',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Dinner & Servewares',
                  landingPage: '/home/dinner-serveware',
                },
                {
                  children: [],
                  title: 'Drinkware',
                  landingPage: '/home/drinkware',
                },
                {
                  children: [],
                  title: 'Kitchenware',
                  landingPage: '/home/kitchenware',
                },
                {
                  children: [],
                  title: 'Bakeware',
                  landingPage: '/home/bakeware',
                },
                {
                  children: [],
                  title: 'Kitchen Linen',
                  landingPage: '/home/kitchen-linen',
                },
                {
                  children: [],
                  title: 'Table Linen',
                  landingPage: '/home/table-linen',
                },
                {
                  children: [],
                  title: 'Dining Accessories',
                  landingPage: '/home/dining-accessories',
                },
                {
                  children: [],
                  title: 'Table Accessories',
                  landingPage: '/home/table-accessories',
                },
                {
                  children: [],
                  title: 'Cups, Mugs & Tumblers',
                  landingPage: '/home/mugs',
                },
              ],
              title: 'Kitchen & Dining',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Candles & Candle Stands',
                  landingPage: '/home/candles-candle-stands',
                },
                {
                  children: [],
                  title: 'Incense & Fragrances',
                  landingPage: '/home/incense-fragrances',
                },
                {
                  children: [],
                  title: 'Diyas,Lamps & Lanterns',
                  landingPage: '/home/diyas-lamps-lanterns',
                },
                {
                  children: [],
                  title: 'Vases',
                  landingPage: '/home/vases',
                },
                {
                  children: [],
                  title: 'Photo Frames',
                  landingPage: '/home/photo-frames',
                },
                {
                  children: [],
                  title: 'Clocks',
                  landingPage: '/home/clocks',
                },
                {
                  children: [],
                  title: 'Accents',
                  landingPage: '/home/decor-accents',
                },
                {
                  children: [],
                  title: 'Hardware',
                  landingPage: '/home/hardware',
                },
                {
                  children: [],
                  title: 'Mirrors & Wall Art',
                  landingPage: '/home/mirrors-wall-art',
                },
                {
                  children: [],
                  title: 'Garden',
                  landingPage: '/home/garden',
                },
              ],
              title: 'Home Decor',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Durries & Runners',
                  landingPage: '/home/durries-runners',
                },
                {
                  children: [],
                  title: 'Door Mats',
                  landingPage: '/home/door-mats',
                },
                {
                  children: [],
                  title: 'Seating',
                  landingPage: '/home/seating',
                },
                {
                  children: [],
                  title: 'Yoga Mats',
                  landingPage: '/home/yoga-mats',
                },
              ],
              title: 'Floor Coverings',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Stationery',
                  landingPage: '/home/stationery',
                },
                {
                  children: [],
                  title: 'Games & Toys',
                  landingPage: '/home/games-toys',
                },
                {
                  children: [],
                  title: 'Gift Packaging',
                  landingPage: '/home/gift-packaging',
                },
                {
                  children: [],
                  title: 'Travel',
                  landingPage: '/home/travel',
                },
              ],
              title: 'Accessories',
            },
            {
              children: [],
              title: 'Gifting',
              landingPage: '/collection/gifting-ideas-home-living',
            },
          ],
          title: 'Home & Living',
          image:
            'https://apisap.fabindia.com//medias/hp-sec1-mob-9dec22-1-rep1.jpg?context=bWFzdGVyfHJvb3R8NjUzNzZ8aW1hZ2UvanBlZ3xoMWEvaDZiLzkxMjM2MDkzNzg4NDYvaHAtc2VjMS1tb2ItOWRlYzIyLTEtcmVwMS5qcGd8ZDkyMGMxZWFlZTIwNzU4N2I3MGJlZjk4MzQyZjliNjQ1YjU5YjdiZmI3NzNiMzgwZWUxZjU4M2YxZTllYWY2ZA',
        },
        {
          children: [
            {
              children: [],
              title: 'All in Furniture',
              landingPage: '/shop/furniture',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Tables',
                  landingPage: '/furniture/dining-tables',
                },
                {
                  children: [],
                  title: 'Sofas',
                  landingPage: '/furniture/sofas',
                },
                {
                  children: [],
                  title: 'Chairs',
                  landingPage: '/furniture/living-chairs',
                },
                {
                  children: [],
                  title: 'Cabinets',
                  landingPage: '/furniture/cabinets',
                },
                {
                  children: [],
                  title: 'Consoles',
                  landingPage: '/furniture/consoles',
                },
                {
                  children: [],
                  title: 'Benches',
                  landingPage: '/furniture/benches',
                },
                {
                  children: [],
                  title: 'Room Partitions',
                  landingPage: '/furniture/room-partitions',
                },
                {
                  children: [],
                  title: 'Ottomans & Stools',
                  landingPage: '/furniture/ottomans-stools',
                },
                {
                  children: [],
                  title: 'Day Beds & Sofa Cum Beds',
                  landingPage: '/furniture/day-beds-sofa-cum-beds',
                },
                {
                  children: [],
                  title: 'Entairtainment units',
                  landingPage: '/furniture/entertainment-units',
                },
                {
                  children: [],
                  title: 'Shoe Racks',
                  landingPage: '/furniture/shoe-racks',
                },
              ],
              title: 'Living',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Beds',
                  landingPage: '/furniture/beds',
                },
                {
                  children: [],
                  title: 'Bedside Tables',
                  landingPage: '/furniture/bedside-tables',
                },
                {
                  children: [],
                  title: 'Wardrobes',
                  landingPage: '/furniture/wardrobes',
                },
                {
                  children: [],
                  title: 'Drawers',
                  landingPage: '/furniture/drawers',
                },
              ],
              title: 'Bedroom',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Chairs',
                  landingPage: '/furniture/dining-chairs',
                },
                {
                  children: [],
                  title: 'Tables',
                  landingPage: '/furniture/dining-tables',
                },
                {
                  children: [],
                  title: 'Bar Furniture',
                  landingPage: '/furniture/bar-furniture',
                },
              ],
              title: 'Dinning',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Mirrors',
                  landingPage: '/furniture/mirrors',
                },
                {
                  children: [],
                  title: 'Dining Accents',
                  landingPage: '/furniture/dining-accents',
                },
                {
                  children: [],
                  title: 'Organisers',
                  landingPage: '/furniture/organisers',
                },
                {
                  children: [],
                  title: 'Trunks',
                  landingPage: '/furniture/trunks',
                },
                {
                  children: [],
                  title: 'Coat Stands & Hangers',
                  landingPage: '/furniture/coat-stands-hangers',
                },
                {
                  children: [],
                  title: 'Shelves & Racks',
                  landingPage: '/furniture/shelves-racks',
                },
              ],
              title: 'Accents',
            },
            {
              children: [],
              title: 'Outdoor Furniture',
              landingPage: '/furniture/outdoor-furniture',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Rockers',
                  landingPage: '/furniture/rockers',
                },
              ],
              title: 'Kids Furniture',
            },
            {
              children: [],
              title: 'Interior Design Studio',
              landingPage: '/interior-designpage',
            },
          ],
          title: 'Furniture',
          image:
            'https://apisap.fabindia.com//medias/hp-sec1-mob-9dec22-1-rep1.jpg?context=bWFzdGVyfHJvb3R8NjUzNzZ8aW1hZ2UvanBlZ3xoMWEvaDZiLzkxMjM2MDkzNzg4NDYvaHAtc2VjMS1tb2ItOWRlYzIyLTEtcmVwMS5qcGd8ZDkyMGMxZWFlZTIwNzU4N2I3MGJlZjk4MzQyZjliNjQ1YjU5YjdiZmI3NzNiMzgwZWUxZjU4M2YxZTllYWY2ZA',
        },
        {
          children: [
            {
              children: [],
              title: 'All in Personal Care',
              landingPage: '/shop/personal-care',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Bathing Bars',
                  landingPage: '/beauty/bathing-bars',
                },
                {
                  children: [],
                  title: 'Hand & Body Lotions',
                  landingPage: '/beauty/hand-body-lotions',
                },
                {
                  children: [],
                  title: 'Hand & Body Wash',
                  landingPage: '/beauty/hand-body-wash',
                },
                {
                  children: [],
                  title: 'Hand & Foot Creams',
                  landingPage: '/beauty/hand-foot-creams',
                },
                {
                  children: [],
                  title: 'Body Butter',
                  landingPage: '/beauty/body-butter',
                },
                {
                  children: [],
                  title: 'Body Oil',
                  landingPage: '/beauty/body-oil',
                },
              ],
              title: 'Bath & Body',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Face Creams',
                  landingPage: '/beauty/face-creams',
                },
                {
                  children: [],
                  title: 'Face Washes',
                  landingPage: '/beauty/face-washes',
                },
                {
                  children: [],
                  title: 'Face Scrubs',
                  landingPage: '/beauty/face-scrubs',
                },
                {
                  children: [],
                  title: 'Face Packs',
                  landingPage: '/beauty/face-packs',
                },
                {
                  children: [],
                  title: 'Lip Butter',
                  landingPage: '/beauty/lip-butter',
                },
                {
                  children: [],
                  title: 'Toners',
                  landingPage: '/beauty/toners',
                },
                {
                  children: [],
                  title: 'Sunscreens',
                  landingPage: '/beauty/sunscreens',
                },
                {
                  children: [],
                  title: 'Undereye Gels',
                  landingPage: '/beauty/undereye-gels',
                },
                {
                  children: [],
                  title: 'Cleansing Milk & Gels',
                  landingPage: '/beauty/cleansing-milk-gels',
                },
                {
                  children: [],
                  title: 'Others',
                  landingPage: '/beauty/others',
                },
                {
                  children: [],
                  title: 'Sunscreen',
                  landingPage: '/beauty/sunscreens',
                },
              ],
              title: 'Face',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Shampoos',
                  landingPage: '/beauty/shampoos',
                },
                {
                  children: [],
                  title: 'Conditioners',
                  landingPage: '/beauty/conditioners',
                },
                {
                  children: [],
                  title: 'Hair Oils',
                  landingPage: '/beauty/hair-oils',
                },
                {
                  children: [],
                  title: 'Hair Masks & Henna',
                  landingPage: '/beauty/hair-masks-henna',
                },
              ],
              title: 'Hair',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Body Sprays',
                  landingPage: '/beauty/body-sprays',
                },
                {
                  children: [],
                  title: 'Perfume Oils',
                  landingPage: '/beauty/perfume-oils',
                },
                {
                  children: [],
                  title: 'Essential Oils',
                  landingPage: '/beauty/essential-oil',
                },
                {
                  children: [],
                  title: 'Perfumes',
                  landingPage: '/beauty/perfumes',
                },
              ],
              title: 'Fragrance & Oils',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Hand Cleansing Gels',
                  landingPage: '/beauty/hand-cleansing-gels',
                },
                {
                  children: [],
                  title: 'Makeup',
                  landingPage: '/beauty/makeup',
                },
              ],
              title: 'Essentials',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Clean & Moisturized Skin',
                  landingPage: '/collection/clean-moisturized-skin',
                },
                {
                  children: [],
                  title: 'Acne Free & Clear Skin',
                  landingPage: '/collection/acne-free-clear-skin',
                },
              ],
              title: 'By Concern - Skin',
            },
            {
              children: [],
              title: 'Gifting',
              landingPage: '/beauty/gifting',
            },
          ],
          title: 'Personal Care',
          image:
            'https://apisap.fabindia.com//medias/hp-sec1-mob-9dec22-1-rep1.jpg?context=bWFzdGVyfHJvb3R8NjUzNzZ8aW1hZ2UvanBlZ3xoMWEvaDZiLzkxMjM2MDkzNzg4NDYvaHAtc2VjMS1tb2ItOWRlYzIyLTEtcmVwMS5qcGd8ZDkyMGMxZWFlZTIwNzU4N2I3MGJlZjk4MzQyZjliNjQ1YjU5YjdiZmI3NzNiMzgwZWUxZjU4M2YxZTllYWY2ZA',
        },
        {
          children: [
            {
              children: [],
              title: 'All In Food',
              landingPage: '/shop/food',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Herbs',
                  landingPage: '/food/herbs',
                },
                {
                  children: [],
                  title: 'Pickles & Chutneys',
                  landingPage: '/food/pickles-chutneys',
                },
                {
                  children: [],
                  title: 'Salad Dressings & Vinegars',
                  landingPage: '/food/salad-dressings-vinegars',
                },
                {
                  children: [],
                  title: 'Sauces',
                  landingPage: '/food/sauces',
                },
                {
                  children: [],
                  title: 'Seasonings',
                  landingPage: '/food/seasonings',
                },
              ],
              title: 'Condiments',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Oil, Ghee & Butter',
                  landingPage: '/food/oil-ghee-butter',
                },
                {
                  children: [],
                  title: 'Rice, Flour, Grains & Pulses',
                  landingPage: '/food/rice-flour-grains-pulses',
                },
                {
                  children: [],
                  title: 'Sweeteners',
                  landingPage: '/food/sweeteners',
                },
                {
                  children: [],
                  title: 'Health Supplements',
                  landingPage: '/food/health-supplements',
                },
                {
                  children: [],
                  title: 'Spices & Masalas',
                  landingPage: '/food/spices-masalas',
                },
              ],
              title: 'Essentials',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Tea',
                  landingPage: '/food/tea',
                },
                {
                  children: [],
                  title: 'Coffee',
                  landingPage: '/food/coffee',
                },
              ],
              title: 'Beverages',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Dried Fruits, Nuts & Seeds',
                  landingPage: '/food/dried-fruits-nuts-seeds',
                },
                {
                  children: [],
                  title: 'Powdered Drink & Soup Mixes',
                  landingPage: '/food/powdered-drinks-soup-mixes',
                },
                {
                  children: [],
                  title: 'Pasta & Noodles',
                  landingPage: '/food/pasta-noodles',
                },
                {
                  children: [],
                  title: 'Snacks & Health Bars',
                  landingPage: '/food/snacks-health-bars',
                },
                {
                  children: [],
                  title: 'Breakfast Cereals',
                  landingPage: '/food/breakfast-cereals',
                },
                {
                  children: [],
                  title: 'Cookies & Biscottis',
                  landingPage: '/food/cookies-biscottis',
                },
                {
                  children: [],
                  title: 'Ready to Cook',
                  landingPage: '/food/ready-to-cook',
                },
              ],
              title: 'Snacks & Instant Food',
            },
            {
              children: [
                {
                  children: [],
                  title: 'Conserves & Marmalades',
                  landingPage: '/food/conserves-marmalades',
                },
                {
                  children: [],
                  title: 'Jellies & Crushes',
                  landingPage: '/food/jellies-crushes',
                },
              ],
              title: 'Preserves',
            },
            {
              children: [],
              title: 'Gift Sets',
              landingPage: '/food/gift-sets',
            },
          ],
          title: 'Food',
          image:
            'https://apisap.fabindia.com//medias/hp-sec1-mob-9dec22-1-rep1.jpg?context=bWFzdGVyfHJvb3R8NjUzNzZ8aW1hZ2UvanBlZ3xoMWEvaDZiLzkxMjM2MDkzNzg4NDYvaHAtc2VjMS1tb2ItOWRlYzIyLTEtcmVwMS5qcGd8ZDkyMGMxZWFlZTIwNzU4N2I3MGJlZjk4MzQyZjliNjQ1YjU5YjdiZmI3NzNiMzgwZWUxZjU4M2YxZTllYWY2ZA',
        },
      ],
      children: [],
      title: 'Shop By Categories',
      landingPage: 'CategorySection',
    },
    {
      children: [
        {
          children: [],
          title: 'Wedding',
          landingPage: '/wedding',
        },
        {
          children: [],
          title: 'Gifting',
          landingPage: '/collection/gift-set',
        },
        {
          children: [],
          title: 'Festive',
          landingPage: '/festive',
        },
        {
          children: [],
          title: 'Summer',
          landingPage: '/collection/summer',
        },
        {
          children: [],
          title: 'Indigo',
          landingPage: '/collection/indigo',
        },
        {
          children: [],
          title: 'Indian Spring',
          landingPage: '/collection/indian-spring',
        },
        {
          children: [],
          title: 'Everyday Living',
          landingPage: '/collection/everyday-living',
        },
      ],
      title: 'Shop By Collection',
    },
    {
      children: [
        {
          children: [],
          title: 'NUIndian',
          landingPage: '/collection/nuindian',
        },
        {
          children: [],
          title: 'FabNu',
          landingPage: '/fabnu',
        },
        {
          children: [],
          title: 'Fabessentials',
          landingPage: '/collection/fabessentials',
        },
      ],
      title: 'Shop By Brand',
    },
    {
      children: [
        {
          children: [],
          title: 'Women',
          landingPage: '/shop/sale-women-products',
        },
        {
          children: [],
          title: 'Men',
          landingPage: '/shop/sale-men-products',
        },
        {
          children: [],
          title: 'Kids',
          landingPage: '/shop/sale-kids-products',
        },
        {
          children: [],
          title: 'Home & Living',
          landingPage: '/shop/sale-home-living',
        },
        {
          children: [],
          title: 'Furniture',
          landingPage: '/shop/sale-furniture',
        },
        {
          children: [],
          title: 'Personal Care',
          landingPage: '/shop/sale-personal-care',
        },
      ],
      title: 'Sale',
    },
    {
      children: [
        {
          children: [],
          title: 'Custom Kurtas',
          landingPage: '/custom-kurta',
        },
        {
          children: [],
          title: 'Interior Design Studio',
          landingPage: '/interior-designpage',
        },
      ],
      title: 'Services',
    },
    {
      children: [],
      title: 'Gift Cards',
      landingPage: 'GiftCard',
    },
    {
      children: [],
      title: 'FAQs',
      landingPage: 'FAQ',
    },
    {
      children: [],
      title: 'Contact Us',
      landingPage: 'ContactUs',
    },
  ];
  const forceUpdate = useForceUpdate();
  const dispatch = useDispatch();
  const focus = useIsFocused();
  const [listData, setListData] = useState();
  const [userProfileData, setUserProfileData] = useState();
  const navigation = useNavigation();
  const Profile = async () => {
    const token = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(token);
    if (getToken.isCheck) {
      navigation.navigate('MyAccount', {
        screen: 'MyAccounts',
      });
    } else {
      navigation.navigate('MyAccount', {
        screen: 'Login_Register',
      });
    }
  };
  const checkOrder = async () => {
    const token = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(token);
    if (getToken.isCheck) {
      navigation.navigate('MyOrder');
    } else {
      navigation.navigate('MyAccount', {
        screen: 'Login_Register',
      });
    }
  };
  const checkFabFamily = async () => {
    const token = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(token);
    if (getToken.isCheck) {
      navigation.navigate('MyAccount', {screen: 'FabFamily'});
    } else {
      navigation.navigate('MyAccount', {screen: 'FabFamily'});
    }
  };
  const shownData = data => {
    let filtered = data.filter(item => {
      return (
        item.title == 'Shop By Collection' ||
        item.title == 'Shop By Brand' ||
        item.title == 'Sale' ||
        item.title == 'Services' ||
        item.title == 'Gift Cards' ||
        item.title == 'FAQs' ||
        item.title == 'Contact Us'
      );
    });
    setListData(filtered);
  };
  const categoryList = async () => {
    const response = await getComponentData(
      `cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=FabHamBurgerComponent&lang=en&curr=INR`,
    );
    shownData(response.component[0].navigationNode.children);
  };
  const getProfiledata = async () => {
    const get = await AsyncStorage.getItem('generatToken');
    const getToken = JSON.parse(get);
    const response = await fetch(`${BaseURL2}/users/current?lang=en&curr=INR`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${getToken?.token_type} ${getToken?.access_token}`,
        Accept: 'application/json',
      },
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        setUserProfileData(res);
      })
      .catch(errors => {
        if (errors.response.status == 401) {
          logout(dispatch);
        }
      });
  };
  useEffect(() => {
    categoryList();
  }, []);
  useEffect(() => {
    getProfiledata();
  }, [focus]);
  return (
    <ScrollView style={{flex: 1}}>
      <TouchableOpacity
        activeOpacity={0.95}
        onPress={() => Profile()}
        style={{
          backgroundColor: '#352535',
          justifyContent: 'center',
          paddingHorizontal: 20,
          paddingBottom: 10,
          paddingTop: 25,
        }}>
        <View
          style={{
            backgroundColor: '#fff',
            height: 55,
            width: 55,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            marginVertical: 10,
          }}>
          {userProfileData?.name ? (
            <Text style={{fontSize: 30, color: '#CDCDCD'}}>
              {userProfileData?.name?.match(/\b(\w)/g).join('')}
            </Text>
          ) : (
            <Ionicons name="person" size={30} />
          )}
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          {userProfileData?.name ? (
            <Text
              style={{
                color: '#fff',
                fontFamily: Fonts.Assistant700,
                fontSize: 16,
              }}>
              {userProfileData?.name}
            </Text>
          ) : (
            <Text
              style={{
                color: '#fff',
                fontFamily: Fonts.Assistant700,
                fontSize: 16,
              }}>
              Log in . Sign Up
            </Text>
          )}
          <Ionicons name="md-chevron-forward-sharp" color="#fff" size={16} />
        </View>
      </TouchableOpacity>
      <FlatList
        data={menuList}
        keyExtractor={item => <></>}
        renderItem={({item, index}) => <AccordianMenu data={item} />}
      />
    </ScrollView>
  );
};
const DrawerComponent = () => {
  return (
    <>
      <Drawer.Navigator
        initialRouteName={'HomeStack'}
        backBehavior={'history'}
        drawerContent={DrawerContent}
        defaultStatus={'closed'}
        screenOptions={{
          header: () => false,
          // drawerStyle: {
          //   width: 400,
          // },
          swipeEnabled: Platform.OS == 'android' ? false : true,
        }}>
        <Drawer.Screen name="HomeStack" component={HomeStack} />
        <Drawer.Screen name="CategorySection" component={CategorySection} />
      </Drawer.Navigator>
    </>
  );
};
const InitialSearch = () => {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SearchResult"
        component={SearchResult}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default function MainScreen(props) {
  // console.log(props);
  const [auth, setAuth] = useState();

  return (
    <Tab.Navigator
      initialRouteName="DrawerComponent"
      screenOptions={{
        tabBarStyle: {
          paddingTop: 5,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          textAlign: 'center',
          // paddingBottom: 5,
        },

        // headerShown: false,
        tabBarHideOnKeyboard: true,

        // header: p => <Header />,
        // tabBarLabel: () => {
        //   return null;
        // },
      }}>
      <Tab.Screen
        name="DrawerComponent"
        component={DrawerComponent}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarActiveTintColor: Colors.primarycolor,
          tabBarIcon: ({focused}) => (
            <TouchableOpacity
              onPress={() => {
                () =>
                  props.navigation.dispatch(
                    CommonActions.reset({
                      index: 1,
                      routes: [{name: 'Home'}],
                    }),
                  );
              }}>
              <Entypo
                name="home"
                size={20}
                color={focused ? Colors.primarycolor : Colors.inactiveicon}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name="CategorySection"
        component={CategorySection}
        options={{
          tabBarLabel: 'Categories',
          tabBarActiveTintColor: Colors.primarycolor,
          header: props => (
            <HomeHeader
              {...props}
              homeheader={null}
              searchVisible={null}
              headertext="Categories"
            />
          ),
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="ios-grid-outline"
              color={focused ? Colors.primarycolor : Colors.inactiveicon}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="InitialSearch"
        {...props}
        component={InitialSearch}
        options={{
          headerShown: false,
          tabBarLabel: 'Search',
          tabBarActiveTintColor: Colors.primarycolor,
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="ios-search-outline"
              color={focused ? Colors.primarycolor : Colors.inactiveicon}
              size={20}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          headerShown: false,
          tabBarLabel: 'Account',
          tabBarActiveTintColor: Colors.primarycolor,
          tabBarIcon: ({focused}) => (
            <TouchableOpacity
              onPress={
                () =>
                  props.navigation.dispatch(
                    CommonActions.reset({
                      index: 0,
                      routes: [
                        {name: 'MyAccount'},
                        // {
                        //   name: 'MyAccounts',
                        // },
                      ],
                    }),
                  )
                // props.navigation.navigate('MyAccount', {
                //   screen: 'MyAccounts',
                // })
              }>
              <MaterialCommunityIcons
                name="account-outline"
                color={focused ? Colors.primarycolor : Colors.inactiveicon}
                size={20}
              />
            </TouchableOpacity>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
