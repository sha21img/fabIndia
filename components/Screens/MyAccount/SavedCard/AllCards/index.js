import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Styles from './styles';
import {image} from '../../../../../assets/images';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../../../../assets/Colors';
import CommonButton from '../../../../Common/CommonButton';
import {useNavigation} from '@react-navigation/native';
export default function AllCards() {
  const navigation = useNavigation();
  const [cardList, setCardList] = useState([0]);
  return (
    <>
      <ScrollView style={Styles.mainContainer}>
        {cardList.length ? (
          <>
            {cardList.map(item => {
              return (
                <>
                  <View style={Styles.cardContainer}>
                    <View>
                      <View style={Styles.titleBox}>
                        <Text style={Styles.title}>Credit Card</Text>
                        <Text style={Styles.title1}>
                          Card Number 4300 XXXX XXXX 9111
                        </Text>
                      </View>
                      <View style={Styles.titleBox}>
                        <Text style={Styles.title}>Name on Card</Text>
                        <Text style={Styles.title1}>Tanya Singh</Text>
                      </View>
                      <View style={Styles.titleBox}>
                        <Text style={Styles.title}>Validity</Text>
                        <Text style={Styles.title1}>02/24</Text>
                      </View>
                    </View>
                    <View style={Styles.iconContainer}>
                      <TouchableOpacity>
                        <MaterialCommunityIcons
                          name="dots-vertical"
                          color={Colors.textcolor}
                          size={20}
                          style={Styles.menuIcon}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity>
                        <Image
                          source={image.ArtistImg3}
                          style={Styles.cardType}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </>
              );
            })}
            <TouchableOpacity
              onPress={() => navigation.navigate('AddCard')}
              style={Styles.addContainer}>
              <Ionicons
                name="md-add-circle"
                color={Colors.primarycolor}
                size={24}
              />
              <Text style={Styles.addCardText}>Add a new card</Text>
            </TouchableOpacity>
          </>
        ) : (
          <Text style={Styles.noCardText}>You don’t have any cards saved!</Text>
        )}
      </ScrollView>
      {cardList.length ? null : (
        <TouchableOpacity
          onPress={() => navigation.navigate('AddCard')}
          style={Styles.btnBox}>
          <CommonButton
            txt="Add a credit / debit card"
            customViewStyle={{
              backgroundColor: Colors.primarycolor,
              width: '100%',
              alignSelf: 'center',
            }}
          />
        </TouchableOpacity>
      )}
    </>
  );
}
