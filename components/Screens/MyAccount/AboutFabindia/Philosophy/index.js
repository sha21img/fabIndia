import React from 'react';
import {ScrollView, Text} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';

const Philosophy = () => {
  return (
    <ScrollView style={{padding:10, backgroundColor:Colors.backgroundColor}}>
      <Text
        style={{
          color: Colors.textcolor,
          fontSize: 16,
          fontFamily: Fonts.Assistant400,
          lineHeight: 20,
          marginVertical: 10,
        }}>
        Fabindia was founded with the strong belief that there was a need for a
        vehicle for marketing the vast and diverse craft traditions of India and
        thereby help fulfil the need to provide and sustain employment. We blend
        indigenous craft techniques with contemporary designs to bring aesthetic
        and affordable products to today’s consumers.
      </Text>
      <Text
        style={{
          color: Colors.textcolor,
          fontSize: 16,
          fontFamily: Fonts.Assistant400,
          lineHeight: 20,
          marginVertical: 10,
        }}>
        Our endeavour is to provide customers with hand crafted products which
        help support and encourage good craftsmanship.
      </Text>
      <Text
        style={{
          color: Colors.textcolor,
          fontSize: 16,
          fontFamily: Fonts.Assistant400,
          lineHeight: 20,
          marginVertical: 10,
        }}>
        Our products are sourced from all over India. Fabindia works closely
        with artisans by providing various inputs including design, quality
        control, access to raw materials and production coordination. The vision
        continues to be to maximize the handmade element in our products,
        whether it is handwoven textiles, hand block printing, hand embroidery
        or handcrafting home products.
      </Text>
      <Text
        style={{
          color: Colors.textcolor,
          fontSize: 16,
          fontFamily: Fonts.Assistant400,
          lineHeight: 20,
          marginVertical: 10,
        }}>
        View Fabindia's commitment to creating jobs in the rural sector at the
        Clinton Global Initiative Annual Meeting - 2007.
      </Text>
    </ScrollView>
  );
};
export default Philosophy;
