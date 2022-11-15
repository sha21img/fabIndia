import {
  View,
  Text,
  Modal,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../../assets/Colors';
import Fonts from '../../../assets/fonts';

export default function Footer({oos}) {
  const [modalVisible, setModalVisible] = useState(false);
  openStock = () => setModalVisible(true);
  return (
    <>
      <View style={Styles.container}>
        <TouchableOpacity style={Styles.heartBox}>
          <MaterialCommunityIcons
            name="cards-heart-outline"
            color={Colors.primarycolor}
            size={26}
          />
        </TouchableOpacity>
        {oos ? (
          <TouchableOpacity style={Styles.cartBox}>
            <Text style={Styles.cartText}>Add to cart</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => openStock()} style={Styles.cartBox}>
            <Text style={Styles.cartText}>Notify me</Text>
          </TouchableOpacity>
        )}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={Styles.mainContainer}>
          <View style={Styles.centeredView}>
            <Text>ssddfsdfdg</Text>
            <Text>ssddfsdfdg</Text>
            <Text>ssddfsdfdg</Text>
            <Text>ssddfsdfdg</Text>
            <Text>ssddfsdfdg</Text>
            <Text>ssddfsdfdg</Text>
          </View>
        </View>
      </Modal>
    </>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  mainContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  centeredView: {
    marginTop: 'auto',
    width: '100%',
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  heartBox: {
    borderWidth: 1.5,
    borderRadius: 50,
    borderColor: Colors.primarycolor,
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBox: {
    backgroundColor: Colors.primarycolor,
    padding: 12,
    width: '85%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartText: {
    color: 'white',
    fontFamily: Fonts.Assistant400,
    fontSize: 16,
  },
});
