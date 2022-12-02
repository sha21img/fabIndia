import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import { Colors } from '../../../../../assets/Colors';
import Fonts from '../../../../../assets/fonts';
import {image} from '../../../../../assets/images';

const FabIndiaSchools = () => {
  return (
    <ScrollView style={{backgroundColor:Colors.backgroundColor, flex:1}}>
      <Image source={image.SchoolGirls} style={{height: 262}} />
      <View style={{padding:15}}>
        <Text style={{fontSize:16, fontFamily:Fonts.Assistant400, color:Colors.textcolor}}>
          The Fabindia School is a co-ed private school for pre-school through
          Class XII, located in Bali, Rajasthan. Starting with 11 students in
          1992, today there are near 500 students with over 50% female
          enrollment. The school emphasizes a holistic approach to education,
          offering extensive extra curricular programs along with comprehensive
          academic courses.
        </Text>
        <Text style={{fontSize:16, marginVertical:15,fontFamily:Fonts.Assistant400, color:Colors.textcolor}}>To know more, visit <Text style={{color:Colors.primarycolor}}> our website</Text></Text>
      </View>
    </ScrollView>
  );
};
export default FabIndiaSchools;
