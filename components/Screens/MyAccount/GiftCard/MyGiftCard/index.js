import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Pressable,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {image} from '../../../../../assets/images';
import {Styles} from './styles';

function MygiftCard() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView contentContainerStyle={Styles.container}>
      {/* <View style={Styles.imagebox}> */}
      <Image style={Styles.stretch} source={image.fabgiftcard} />
      {/* </View> */}
      <View
        style={[
          Styles.txtContainer,
          {borderBottomWidth: 1, borderBottomColor: '#EDEDED', marginTop: 13},
        ]}>
        <Text style={Styles.totalBalanceTxt}>Total Balance:</Text>
        <View>
          <Text style={Styles.amountTxt}>
            <Text style={Styles.priceicon}>₹</Text> 0
          </Text>
        </View>
      </View>

      <View style={Styles.txtContainer}>
        <Text style={Styles.cardTxt}>Card Number:</Text>
        <View>
          <Text style={Styles.amountTxt}>4990 7456 9779 7467</Text>
        </View>
      </View>
      <TouchableOpacity
        style={Styles.viewHistory}
        onPress={() => setModalVisible(true)}>
        <Text style={Styles.viewhistorytext}>View History</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={Styles.modalShadow}>
          <View style={Styles.modalMainView}>
            <View style={Styles.headingView}>
              <Text style={Styles.historytxt}>History</Text>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Icon name="close-circle-outline" size={25} color="gray" />
              </Pressable>
            </View>
            <View style={Styles.transactionView}>
              <Text style={Styles.modalTextTwo}>Transaction</Text>
              <Text style={Styles.modalTextTwo}>Credit</Text>
              <Text style={Styles.modalTextTwo}>Debit</Text>
              <Text style={Styles.modalTextTwo}>Status</Text>
            </View>
            <View style={Styles.walletCreateViewOne}>
              <View style={Styles.boxDimension}>
                <Text style={Styles.wallettext}>Wallet create</Text>
                <View style={{marginTop: 5}}>
                  <Text style={Styles.modalTextThree}>FabIndia</Text>
                  <Text style={Styles.modalTextThree}>2021-08-05T18:24:58</Text>
                </View>
              </View>
              <Text style={Styles.wallettext}>+ ₹ 1500</Text>
              <Text style={Styles.wallettext}>-</Text>
              <Text style={Styles.wallettext}>Success</Text>
            </View>
            <View style={Styles.walletCreateViewOne}>
              <View style={Styles.boxDimension}>
                <Text style={Styles.wallettext}>Wallet create</Text>
                <View style={{marginTop: 5}}>
                  <Text style={Styles.modalTextThree}>FabIndia</Text>
                  <Text style={Styles.modalTextThree}>2021-08-05T18:24:58</Text>
                </View>
              </View>

              <Text style={Styles.wallettext}>+ ₹ 1500</Text>
              <Text style={Styles.wallettext}>-</Text>
              <Text style={Styles.wallettext}>Success</Text>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

export default MygiftCard;
