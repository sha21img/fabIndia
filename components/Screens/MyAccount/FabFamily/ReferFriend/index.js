import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CartIcon from 'react-native-vector-icons/EvilIcons';
import CloseIcon from 'react-native-vector-icons/Ionicons';
import {Styles} from './styles';
import CommonButton from '../../../../Common/CommonButton';
import {Colors} from '../../../../../assets/Colors';
import {image} from '../../../../../assets/images';

function ReferFriend() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <ScrollView contentContainerStyle={Styles.container}>
        <View style={Styles.headingTextView}>
          <Text style={Styles.headingText}>
            'Join Fabfamily to get exclusive benefits!'
          </Text>
        </View>
        {[0, 0, 0].map(item => {
          return (
            <>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: 20,
                }}>
                <View style={{width: '17%'}}>
                  <Image source={image.referfriend1} />
                </View>
                <View style={{width: '70%'}}>
                  <Text>Refer your friend by sharing your unique code</Text>
                </View>
              </View>
            </>
          );
        })}

        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Text style={Styles.termsAndConditions}>View Terms & Conditions</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={Styles.modalShadow}>
            <Text>oijhu</Text>
            {/* <View style={Styles.modalMainView}>
              <View style={Styles.headingView}>
                <Text style={Styles.modalHeadingTxt}>Terms & Conditions</Text>
                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <CloseIcon
                    name="close-circle-outline"
                    size={25}
                    color="gray"
                  />
                </Pressable>
              </View>
              <View style={Styles.modalTxtView}>
                <Text style={Styles.modalTxtOne}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  nisl diam justo, est viverra. Feugiat velit at non id hac
                  ipsum fusce vitae ornare. Purus eu feugiat vel cursus id
                  imperdiet scelerisque adipiscing. Auctor mauris at ultrices
                  felis. Scelerisque augue ligula et faucibus. Dictum non nunc
                  arcu nullam quam velit nunc, massa, nullam. Sed diam elementum
                  elit vel. Ut at cras porta bibendum dignissim.
                </Text>
                <Text style={Styles.modalTxtTwo}>
                  Turpigins venenatis id mauris, diam, pellentesque adipiscing
                  feugiat purus est. Scelerisque amet, ut enim vestibulum. Dui,
                  sit posuere vel nunc vitae. Ac turpis a, ac amet, scelerisque
                  posuere praesent ut fermentum. Aliquam dui vel, arcu dolor
                  eget integer malesuada habitasse.
                </Text>
              </View>
            </View> */}
          </View>
        </Modal>
      </ScrollView>

      <View
        style={{
          padding: 12,
          backgroundColor: '#FDFDFD',
          elevation: 5,
        }}>
        <CommonButton
          backgroundColor="#BDBDBD"
          txt="Join FabFamily"
          customViewStyle={{
            backgroundColor: Colors.primarycolor,
          }}
        />
      </View>
    </>
  );
}

export default ReferFriend;
