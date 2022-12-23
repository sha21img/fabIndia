import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Styles from './styles';
import {image} from '../../../../../assets/images';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from '../../../../../assets/Colors';
import CommonButton from '../../../../Common/CommonButton';
import {useNavigation} from '@react-navigation/native';
export default function PendingProductList() {
  const navigation = useNavigation();
  const [cardList, setCardList] = useState([0, 0]);
  return (
    <>
      <ScrollView style={Styles.mainContainer}>
        {cardList.length ? (
          <>
            {cardList.map(item => {
              return (
                <>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('PendingProductDetails')}
                    style={Styles.cardContainer}>
                    <View style={Styles.textContainerIcon}>
                      <Text style={Styles.orderDate}>10 July 2021</Text>
                      <Entypo
                        name="chevron-right"
                        color={Colors.textcolor}
                        size={16}
                      />
                    </View>
                    <View style={Styles.textContainer}>
                      <Text style={Styles.title}>3 items</Text>
                      <View style={Styles.line} />
                      <Text style={Styles.title1}>Order ID: FAB-64573259</Text>
                    </View>
                    <View style={Styles.textContainer}>
                      <Text style={Styles.title}>Amount due</Text>
                      <Text style={Styles.title2}>` 2,400.00</Text>
                    </View>
                    <View style={Styles.textContainer}>
                      <Text style={Styles.pendingText}>Payment pending</Text>
                    </View>
                  </TouchableOpacity>
                </>
              );
            })}
          </>
        ) : (
          <>
            <Text style={Styles.noProductText}>
              Payments of all your orders have been processed!
            </Text>
          </>
        )}
      </ScrollView>
    </>
  );
}
