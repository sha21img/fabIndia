import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Linking,
  Dimensions,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {Styles} from './styles';
import InputText from '../../../Common/InputText';
import CommonButton from '../../../Common/CommonButton';
import {Colors} from '../../../../assets/Colors';
import Fonts from '../../../../assets/fonts';
import {image} from '../../../../assets/images';

export default function ContactUs() {
  const [text, setText] = React.useState('');
  const [user, setUser] = useState({
    email: '',
    name: '',
    subject: '',
    description: '',
  });

  const emailHandler = text => {
    setUser({...user, email: text});
  };
  const NameHandler = text => {
    setUser({...user, name: text});
  };
  const subjectHandler = text => {
    setUser({...user, subject: text});
  };
  const discriptionNameHandler = text => {
    setUser({...user, description: text});
  };

  const changePasswordHandler = () => {
    Alert.alert('user', user.email);
  };
  const reset = () => {
    setUser({email: '', name: '', subject: '', description: ''});
  };
  cons;
  return (
    <>
      <ScrollView contentContainerStyle={Styles.container}>
        <View
          style={{
            width: '100%',
          }}>
          <Text
            style={{
              fontSize: 28,
              fontFamily: Fonts.PlayfairDisplay700,
              color: Colors.textcolor,
            }}>
            Contact Us
          </Text>
          <Text
            style={{
              lineHeight: 22,
              fontSize: 16,
              paddingRight: 5,
              fontFamily: Fonts.Assistant400,
              color: Colors.textcolor,
              paddingVertical: 5,
            }}>
            If you have a question or a comment, please call us{' '}
            <Text style={Styles.mobileNo}>
              {' '}
              +91 8010488888 (9:30 am to 5:30 pm. Monday to Sunday.){' '}
            </Text>{' '}
            or email us at{' '}
            <Text
              onPress={() => Linking.openURL('mailto:support@fabindia.net')}
              style={Styles.email}>
              support@fabindia.net{' '}
            </Text>{' '}
            or use the form below to contact us.
          </Text>
          <Text
            style={{
              lineHeight: 22,
              fontSize: 16,
              paddingRight: 5,
              fontFamily: Fonts.Assistant400,
              color: Colors.textcolor,
              paddingVertical: 5,
            }}>
            For ant concerns regarding loyalty points, pleease call us at{' '}
            <Text style={Styles.mobileNo}>
              {' '}
              1800-100-1212 (10:00 am to 7:00 pm. Monday to Sunday.){' '}
            </Text>{' '}
            or email us at{' '}
            <Text
              onPress={() => Linking.openURL('mailto:fabfamily@fabindia.net')}
              style={Styles.email}>
              fabfamily@fabindia.net
            </Text>
          </Text>
        </View>
        <InputText
          label={'Email*'}
          onChangeText={text => emailHandler(text)}
          value={user.email}
          customStyle={{marginTop: 30, paddingHorizontal: 0}}
        />
        <InputText
          label={'Name*'}
          onChangeText={text => NameHandler(text)}
          value={user.name}
          customStyle={{marginTop: 30, paddingHorizontal: 0}}
        />
        <InputText
          label={'Subject'}
          onChangeText={text => subjectHandler(text)}
          value={user.subject}
          customStyle={{marginTop: 30, paddingHorizontal: 0}}
        />

        {/* <View style={Styles.textAreaContainer}> */}
        <InputText
          placeholder="Description*"
          placeholderTextColor="#979797"
          onChangeText={text => discriptionNameHandler(text)}
          value={user.description}
          numberOfLines={4}
          multiline={true}
          underlineColor="transparent"
          activeUnderlineColor="transparent"
          customStyle={{
            marginTop: 30,
            textAlignVertical: 'top',
            borderWidth: 1,
            borderColor: '#EDEDED',
          }}
        />
        <Text
          style={{
            fontSize: 18,
            fontFamily: Fonts.Assistant400,
            color: Colors.textcolor,
            paddingVertical: 10,
          }}>
          Attachment
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              paddingVertical: 5,
              paddingHorizontal: 10,
              borderRadius: 5,
              backgroundColor: '#E5E5E5',
              borderColor: 'black',
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontFamily: Fonts.Assistant400,
                color: Colors.textcolor,
              }}>
              Choose File
            </Text>
          </TouchableOpacity>
          {false ? (
            <Text
              style={{
                fontSize: 18,
                fontFamily: Fonts.Assistant400,
                color: Colors.textcolor,
                paddingHorizontal: 10,
              }}>
              File name
            </Text>
          ) : (
            <Text
              style={{
                fontSize: 18,
                fontFamily: Fonts.Assistant400,
                color: Colors.textcolor,
                paddingHorizontal: 10,
              }}>
              No file chosen
            </Text>
          )}
        </View>
        <Text
          style={{
            fontSize: 16,
            fontFamily: Fonts.Assistant400,
            color: Colors.textcolor,
            paddingTop: 20,
            paddingBottom: 5,
          }}>
          Each of your file(s) can be up to 20MB in size.
        </Text>
        <View style={{flexDirection: 'row', paddingVertical: 5}}>
          <CommonButton
            backgroundColor="#BDBDBD"
            txt="Submit"
            disable={!(!!user.name && !!user.email && !!user.description)}
            handleClick={() => submitForm()}
            customViewStyle={{
              backgroundColor:
                !!user.name && !!user.email && !!user.description
                  ? Colors.primarycolor
                  : '#D4D4D4',
              width: '30%',
              borderWidth: 1,
              borderColor: Colors.primarycolor,
            }}
          />
          <CommonButton
            backgroundColor="#BDBDBD"
            txt="Reset"
            btntxtColor={Colors.primarycolor}
            customViewStyle={{
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: Colors.primarycolor,
              width: '30%',
              marginHorizontal: 15,
              color: Colors.primarycolor,
            }}
            handleClick={() => reset()}
          />
        </View>
        <Text
          style={{
            fontSize: 16,
            fontFamily: Fonts.Assistant400,
            color: Colors.textcolor,
            lineHeight: 22,
            paddingVertical: 5,
          }}>
          If you are looking for a Fabindia store near you, please use our{' '}
          <Text
            style={{
              fontSize: 16,
              fontFamily: Fonts.Assistant400,
              color: Colors.primarycolor,
              lineHeight: 22,
              paddingVertical: 5,
            }}>
            Stores page.
          </Text>
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: Fonts.Assistant400,
            color: Colors.textcolor,
            lineHeight: 22,
            paddingVertical: 5,
          }}>
          If you or your company is interested in entering into a business
          relationship with us, please visit our Business Enquiries page.
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: Fonts.Assistant400,
            color: Colors.textcolor,
            lineHeight: 22,
            paddingVertical: 5,
          }}>
          We look forward to being of service.
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: Fonts.Assistant400,
            color: Colors.textcolor,
            lineHeight: 22,
            paddingVertical: 5,
          }}>
          We endeavour to answer all questions within 48 hours.
        </Text>
        <Text
          style={{
            fontSize: 24,
            fontFamily: Fonts.PlayfairDisplay700,
            color: Colors.textcolor,
            paddingVertical: 5,
          }}>
          Grievances (For online purchase only)
        </Text>
        <Text
          style={{
            lineHeight: 22,
            fontSize: 16,
            paddingRight: 5,
            fontFamily: Fonts.Assistant400,
            color: Colors.textcolor,
            paddingVertical: 5,
          }}>
          Important : <Text style={Styles.mobileNo}> Grievance cell </Text> must
          be approached post contacting the 'Customer Support' of Fabindia where
          desired resolution were not served.
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: Fonts.Assistant400,
            color: Colors.textcolor,
            lineHeight: 22,
            paddingVertical: 10,
          }}>
          Any direct communication to Grievance cell will be redirected to
          'Customer support' for further assistance
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: Fonts.Assistant400,
            color: Colors.textcolor,
            lineHeight: 22,
            paddingTop: 10,
          }}>
          All Grievances related to the purchase or services shall be addressed
          to Mr. Shyamal Majhi (Grievance officer)
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: Fonts.Assistant400,
            color: Colors.textcolor,
            paddingBottom: 2,
            paddingTop: 4,
          }}>
          1. Write us to{' '}
          <Text
            onPress={() => Linking.openURL('mailto:Grievances@fabindia.net')}
            style={Styles.email}>
            Grievances@fabindia.net
          </Text>
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: Fonts.Assistant400,
            color: Colors.textcolor,
            paddingBottom: 4,
            paddingTop: 2,
          }}>
          2. Call{' '}
          <Text
            onPress={() => Linking.openURL('tel:80104 88888')}
            style={Styles.email}>
            80104 88888
          </Text>{' '}
          (timings 9am to 6pm Monday to Saturday)
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: Fonts.Assistant400,
            color: Colors.textcolor,
            lineHeight: 22,
            paddingTop: 10,
          }}>
          *The officer will get back to the customer within 3 business days of
          reporting an issue
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: Fonts.Assistant400,
            color: Colors.textcolor,
            lineHeight: 22,
            paddingTop: 5,
          }}>
          *Every grievance will be provided with a complaint/ticket no. which
          can used to track the status of the grievance
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: Fonts.Assistant400,
            color: Colors.textcolor,
            lineHeight: 22,
            paddingTop: 5,
          }}>
          *Redress or closure to a grievance might take around one month from
          the date of receipt of complaint
        </Text>
      </ScrollView>
    </>
  );
}
