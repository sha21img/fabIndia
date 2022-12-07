import {View, Text, ImageBackground, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {image} from '../../../assets/images';
import Fonts from '../../../assets/fonts';
import CommonTopTab from '../../Common/CommonTopTab';
import {StoreLocateTab} from '../../../constant';
import InputText from '../../Common/InputText';
import {TextInput} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import Styles from './style';
export default function StoreLocator() {
  const CardCompo = item => {
    const [city, setCity] = useState('');
    return (
      <View
        style={Styles.mainView}>
        <View style={{}}>
          <InputText
            theme={{roundness: 60}}
            customStyle={Styles.input}
            value={city}
            label="Search for city"
            onChangeText={pass => setCity(pass)}
            right={
              <TextInput.Icon
                name={() => (
                  <Feather name={'search'} color={'#903233'} size={20} />
                )}
              />
            }
          />
        </View>

        <View style={Styles.locView}>
          <Entypo name={'location-pin'} color={'#903233'} size={25} />
          <Text style={Styles.loctxt}>Use your current location</Text>
        </View>
      </View>
    );
  };
  const PaymentPage = () => {
    return (
      <View>
        <Text>jfdfbhdh</Text>
      </View>
    );
  };
  const screenObj = {
    India: CardCompo,
    International: PaymentPage,
  };
  const dataMap = StoreLocateTab.map(item => ({
    title: item,
    card: screenObj[item],
  }));

  return (
    <ScrollView
      contentContainerStyle={Styles.container}>
      <ImageBackground
        resizeMode="stretch"
        key={Math.random() * 1099900}
        style={Styles.imgback}
        source={image.fabshow}>
        <View
          style={Styles.blurbox}>
          <Text
            style={Styles.blurtxt}>
            Continue your fab experience at a store near you
          </Text>
        </View>
      </ImageBackground>
      <View
        style={Styles.secondDiv}>
        <Text
          style={Styles.secondtxt}>
          Some of our stores will remain temporarily closed as per the
          government regulations during lockdown.
        </Text>
      </View>
      <View style={{padding: 15, backgroundColor: 'white'}}>
        <Text
          style={Styles.nearest}>
          Find your nearest store
        </Text>
      </View>
      <CommonTopTab data={dataMap} />
    </ScrollView>
  );
}
