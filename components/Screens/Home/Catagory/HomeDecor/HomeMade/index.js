import {View, Text, ImageBackground, Dimensions} from 'react-native';
import React from 'react';
import {Styles} from './styles';
import {image} from '../../../../../../assets/images';
const dimension = Dimensions.get('window');

const HomeMade = () => {
  return (
    <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
      <View style={{marginRight: 10}}>
        <ImageBackground
          key={Math.random() * 6776}
          resizeMode="cover"
          style={{
            height: 190,
            width: dimension.width / 2.2,
            marginBottom: 10,
          }}
          source={image.homedecorceramic}>
          <View style={[Styles.txtbox]}>
            <Text style={Styles.imagetxt}>Ceramic</Text>
          </View>
        </ImageBackground>
        <ImageBackground
          key={Math.random() * 6776}
          resizeMode="cover"
          style={{
            height: 390,
            width: dimension.width / 2.2,
          }}
          source={image.homedecorrattan}>
          <View style={Styles.txtbox}>
            <Text style={Styles.imagetxt}>Rattan</Text>
          </View>
        </ImageBackground>
      </View>
      <View>
        <ImageBackground
          key={Math.random() * 6776}
          resizeMode="cover"
          style={{
            height: 190,
            width: dimension.width / 2.2,
            marginBottom: 10,
          }}
          source={image.homedecormetal}>
          <View style={Styles.txtbox}>
            <Text style={Styles.imagetxt}>Metal</Text>
          </View>
        </ImageBackground>
        <ImageBackground
          key={Math.random() * 6776}
          resizeMode="cover"
          style={{
            height: 190,
            width: dimension.width / 2.2,
            marginBottom: 10,
          }}
          source={image.homedecorwood}>
          <View style={Styles.txtbox}>
            <Text style={Styles.imagetxt}>Wood</Text>
          </View>
        </ImageBackground>
        <ImageBackground
          key={Math.random() * 6776}
          resizeMode="cover"
          style={{
            height: 190,
            width: dimension.width / 2.2,
          }}
          source={image.homedecorcloth}>
          <View style={Styles.txtbox}>
            <Text style={Styles.imagetxt}>Cloth</Text>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
};

export default HomeMade;
