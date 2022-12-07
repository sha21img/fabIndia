import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Colors} from '../../../../../assets/Colors';
import {image} from '../../../../../assets/images';
import {AboutUsTab} from '../../../../../constant';
import CommonTopTab from '../../../../Common/CommonTopTab';
import LegacyCompo from '../LegacyCompo';
import {Styles} from './style';

const screenObj = {
  'About us': () => AboutUsCompo(),
  'Our vision & mission': () => VissionMission(),
  'Values & Guiding Principles': () => Principles(),
};

const AboutUsCompo = item => {
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
    <>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: Colors.backgroundColor,
        }}>
        <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
          <Text style={Styles.AboutText}>
            Fabindia is India's largest private platform for products that are
            made from traditional techniques, skills and hand-based processes.
          </Text>
          <Text style={Styles.AboutText}>
            Fabindia links over 55,000 craft based rural producers to modern
            urban markets, thereby creating a base for skilled, sustainable
            rural employment, and preserving India's traditional handicrafts in
            the process.
          </Text>
          <Text style={Styles.AboutText}>
            Fabindia's products are natural, craft based, contemporary, and
            affordable.
          </Text>
        </View>
        <View style={{borderTopWidth: 1, borderTopColor: '#D8D8D8'}}>
          <LegacyCompo data={legacyData} heading />
        </View>
      </ScrollView>
    </>
  );
};

const VissionMission = item => {
  return (
    <>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: Colors.backgroundColor,
          flex: 1,
        }}>
        <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
          <Text style={Styles.VissionHeading}>Our vision</Text>
          <Text style={Styles.VissionBodyText}>
            At Fabindia we celebrate India, and endeavour to bring all that we
            love about India to customers around the world.
          </Text>
          <View style={Styles.HorizontalLine}></View>
        </View>
        <View style={{paddingHorizontal: 10}}>
          <Text style={Styles.VissionHeading}>Our mission</Text>
          <Text style={Styles.VissionBodyText}>
            We will harness the transformative power of a well-run business
            committed to profitable growth in support of Fabindia’s Vision.{' '}
          </Text>
          <Text style={Styles.VissionBodyText}>
            We will strengthen and support our community of customers,
            designers, artisans, farmers, makers and entrepreneurs inspired by
            India.
          </Text>
          <Text style={Styles.VissionBodyText}>
            We will give our customers products that delight them by
            interpreting our rich heritage and traditional knowledge, while
            protecting the natural environment.
          </Text>
          <View style={Styles.HorizontalLine}></View>
        </View>
      </ScrollView>
    </>
  );
};

const Principles = item => {
  return (
    <>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: Colors.backgroundColor,
          flex: 1,
        }}>
        <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
          <Text style={Styles.VissionHeading}>Our vision</Text>
          <Text style={Styles.VissionBodyText}>
            At Fabindia we celebrate India, and endeavour to bring all that we
            love about India to customers around the world.
          </Text>
          <View style={Styles.HorizontalLine}></View>
        </View>
        <View style={{paddingHorizontal: 10}}>
          <Text style={Styles.VissionHeading}>Our mission</Text>
          <Text style={Styles.VissionBodyText}>
            We will harness the transformative power of a well-run business
            committed to profitable growth in support of Fabindia’s Vision.{' '}
          </Text>
          <Text style={Styles.VissionBodyText}>
            We will strengthen and support our community of customers,
            designers, artisans, farmers, makers and entrepreneurs inspired by
            India.
          </Text>
          <Text style={Styles.VissionBodyText}>
            We will give our customers products that delight them by
            interpreting our rich heritage and traditional knowledge, while
            protecting the natural environment.
          </Text>
          <View style={Styles.HorizontalLine}></View>
        </View>
      </ScrollView> 
    </>
  );
};

const AboutUs = () => {
  const dataMap = AboutUsTab.map(item => ({
    title: item,
    card: screenObj[item],
  }));
  return (
    <ScrollView style={{flex: 1, backgroundColor: Colors.backgroundColor}}>
      <CommonTopTab data={dataMap} />
    </ScrollView>
  );
};

export default AboutUs;
