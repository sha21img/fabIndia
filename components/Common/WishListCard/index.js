import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import Fonts from '../../../assets/fonts';
import Card3 from '../Card3';
import {Styles} from './style';

import {useSelector} from 'react-redux';
import {cartDetail, wishlistDetail} from '../../../Common/Helper/Redux/actions';
export default function WishListCard(props) {
  const {cartReducer} = useSelector(state => state);
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: '#FFFFFF',
          flexGrow: 1,
        }}>
        <Text style={Styles.txt1}>
          It's never too late to add to your cart!
        </Text>
        {/* <View style={{backgroundColor: '#F6F6F6', paddingHorizontal: 15}}>
          <Text style={Styles.txt2}>6 products</Text>
        </View> */}

        <View style={Styles.mainView}>
          {cartReducer?.WishListDetail?.wishListData?.map(item => {
            return (
              <Card3
                customViewStyle={{marginBottom: 15}}
                item={item.item}
                {...props}
              />
            );
          })}
        </View>
      </ScrollView>
    </>
  );
}
