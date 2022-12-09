import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';
import {image} from '../../../../../assets/images';

const Certification = () => {
  return (
    <ScrollView style={{padding: 10, backgroundColor: Colors.backgroundColor}} contentContainerStyle={{paddingBottom:20}} >
      <View>
        <Text
          style={{
            color: Colors.textcolor,
            fontSize: 16,
            fontFamily: Fonts.Assistant700,
            lineHeight: 20,
            marginVertical: 10,
          }}>
          Fabindia's Food Products
        </Text>
        <Text
          style={{
            color: Colors.textcolor,
            fontSize: 16,
            fontFamily: Fonts.Assistant400,
            lineHeight: 20,
            marginVertical: 15,
          }}>
          Our food products have been certified as organic. Here’s what each of
          the symbols mean -
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <View style={{width: '18%'}}>
          <Image
            source={image.OrganicCertified}
            style={{height: 50, width: 50}}
          />
        </View>
        <View style={{width: '80%'}}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: Fonts.Assistant400,
              color: Colors.textcolor,
            }}>
            Products displaying our Green logo are{' '}
            <Text style={{fontFamily: Fonts.Assistant700}}>
              ‘Fully Certified’ Organic.
            </Text>
            All processes, from growing to preparing to packing have been done
            according to National and International standards, verified by
            accredited agencies.
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <View style={{width: '18%'}}>
          <Image
            source={image.ConversionCertified}
            style={{height: 50, width: 50}}
          />
        </View>
        <View style={{width: '80%'}}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: Fonts.Assistant400,
              color: Colors.textcolor,
            }}>
            Products displaying our Green logo are{' '}
            <Text style={{fontFamily: Fonts.Assistant700}}>
              ‘In Conversion’.
            </Text>
            All processes, from growing to preparing to packing have been done
            according to National and International standards, verified by
            accredited agencies.
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{width: '18%'}}>
          <Image
            source={image.NaturalCertified}
            style={{height: 50, width: 50}}
          />
        </View>
        <View style={{width: '80%'}}>
          <Text
            style={{
              fontSize: 14,
              fontFamily: Fonts.Assistant400,
              color: Colors.textcolor,
            }}>
            Products displaying our Green logo are{' '}
            <Text style={{fontFamily: Fonts.Assistant700}}>‘Natural.</Text> All
            processes, from growing to preparing to packing have been done
            according to National and International standards, verified by
            accredited agencies.
          </Text>
        </View>
      </View>
      <View
        style={{
          height: 1,
          backgroundColor: '#D8D8D8',
          marginVertical: 15,
        }}></View>
      <View>
        <Text
          style={{
            color: Colors.textcolor,
            fontSize: 16,
            fontFamily: Fonts.Assistant700,
            lineHeight: 20,
            marginVertical: 10,
          }}>
          National & International Standards
        </Text>
        <Text
          style={{
            color: Colors.textcolor,
            fontSize: 16,
            fontFamily: Fonts.Assistant400,
            lineHeight: 20,
            marginVertical: 15,
          }}>
          In India, there are a handful of certifying agencies accredited by
          NPOP. Farmers and producers must register with one of these agencies,
          who will in turn verify whether NPOP standards have been met.
        </Text>
        <Text
          style={{
            color: Colors.textcolor,
            fontSize: 16,
            fontFamily: Fonts.Assistant400,
            lineHeight: 20,
            marginVertical: 15,
          }}>
          National & International Standards India's organic certification
          standards are set by the National Programme for Organic Production
          (NPOP), which are based on standards set by the International
          Federation of Organic Agriculture (IFOAM).
        </Text>
        <Text
          style={{
            color: Colors.textcolor,
            fontSize: 16,
            fontFamily: Fonts.Assistant400,
            lineHeight: 20,
            marginVertical: 15,
          }}>
          For certified Organic products, look for a certified agency's logo,
          for example SGS, and NPOP's India Organic logo.
        </Text>
      </View>
      <View style={{flexDirection:"row"}}>
        <Image source={image.SgsLogo} style={{height:100, width:100}} />
        <Image source={image.OrganicLogo} style={{height:100, width:100, marginLeft:10}} />
      </View>
    </ScrollView>
  );
};
export default Certification;
