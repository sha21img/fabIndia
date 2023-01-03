import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import Fonts from '../../../../../assets/fonts';

const LegacyCompo = ({data, heading}) => {
  return (
    <>
      <View style={{padding: 10}}>
        {!!heading ? (
          <Text
            style={{
              color: '#4A4A4A',
              fontFamily: Fonts.Assistant700,
              fontSize: 18,
              lineHeight: 24,
              marginVertical: 16,
            }}>
            Our legacy
          </Text>
        ) : (
          ''
        )}
      </View>
      <ScrollView
        horizontal
        style={{backgroundColor: '#F8F6F5', paddingVertical: 20}}>
        {data.map(item => {
          return (
            <View style={{width: 170, marginLeft: 20}}>
              <Image source={item.image} style={{height: 180, width: 170}} />
              <View style={{padding: 10}}>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: Fonts.Assistant400,
                    lineHeight: 18,
                  }}>
                  {item.description}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </>
  );
};

export default LegacyCompo;
