import React from 'react';
import {Dimensions, Image, ScrollView, Text, View} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';
import {image} from '../../../../../assets/images';
import LegacyCompo from '../LegacyCompo';

const Years60 = () => {
  const legacyData = [
    {
      image: image.legacy2,
      description:
        'Launched in 1960 by John Bissell, an American businessman, in Delhi',
    },
    {
      image: image.legacy1,
      description:
        'Launched in 1960 by John Bissell, an American businessman, in Delhi',
    },
  ];
  return (
    <ScrollView style={{backgroundColor: Colors.backgroundColor}}>
      <View
        style={{
          height: Dimensions.get('window').width,
          width: Dimensions.get('window').width,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={image.Year60Logo}
          style={{
            height: Dimensions.get('window').width - 50,
            width: Dimensions.get('window').width - 50,
          }}></Image>
      </View>
      <Text
        style={{
          fontSize: 16,
          fontFamily: Fonts.Assistant400,
          color: Colors.textcolor,
          marginHorizontal: 10,
        }}>
        Founded in 1960 by John Bissell to market the diverse craft traditions
        of India, Fabindia started out as a company exporting home furnishings.
        The first Fabindia retail store was opened in Greater Kailash, New Delhi
        fifteen years later.
      </Text>
      <LegacyCompo data={legacyData} />
      <Text
        style={{
          fontSize: 16,
          fontFamily: Fonts.Assistant400,
          color: Colors.textcolor,
          marginHorizontal: 10,
          marginVertical: 15,
        }}>
        By the early eighties, Fabindia was already known for garments made from
        hand woven and hand printed fabrics. The non-textile range was added in
        2000, while organic foods, which formed a natural extension of
        Fabindia’s commitment to traditional techniques and skills was added in
        2004, with personal care products following in 2006. Handcrafted
        jewellery was introduced in 2008.
      </Text>
      <Image source={image.banner3} style={{height: 240}} />
      <Text
        style={{
          fontSize: 16,
          fontFamily: Fonts.Assistant400,
          color: Colors.textcolor,
          marginHorizontal: 10,
          marginVertical: 15,
        }}>
        Today, with a pan-India presence, Fabindia is the largest private
        platform for products that derive from traditional crafts and knowledge.
        A large proportion of these are sourced from villages across India where
        the company works closely with the artisans, providing various inputs
        including design, quality control, access to finance and raw materials.
      </Text>
      <Text
        style={{
          fontSize: 16,
          fontFamily: Fonts.Assistant400,
          color: Colors.textcolor,
          marginHorizontal: 10,
          marginVertical: 15,
        }}>
        Fabindia’s endeavour is to bring customers a choice of products – and
        lifestyle – that offers an alternative to the mass-produced, while
        creating sustainable livelihoods in the rural sector.
      </Text>
    </ScrollView>
  );
};
export default Years60;
