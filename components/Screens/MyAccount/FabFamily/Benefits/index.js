import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CartIcon from 'react-native-vector-icons/EvilIcons';
import {Styles} from './styles';
import {image} from '../../../../../assets/images';
import LinearGradient from 'react-native-linear-gradient';
import CommonButton from '../../../../Common/CommonButton';
import {Colors} from '../../../../../assets/Colors';
const width = Dimensions.get('window').width;
const data = [
  {
    title: 'Tier',
    tier: [
      {
        name: 'Bronze',
      },
      {
        name: 'Silver',
      },
      {
        name: 'Gold',
      },
      {
        name: 'Platinum',
      },
      {
        name: 'Black',
      },
    ],
  },
  {
    title: 'Points Earned On Shopping(% on spend)',
    tier: [
      {name: '1%'},
      {name: '2%'},
      {name: '3%'},
      {name: '5%'},
      {name: '10%'},
    ],
  },
  {
    title:
      'Eligible Rupee Spend / year(You will beupgraded when you reach the eligibility spend of the next tier)',
    tier: [
      {name: 'NA'},
      {name: '20,000'},
      {name: '50,000'},
      {name: '1,00,000'},
      {name: '2,00,000'},
    ],
  },
  {
    title: 'Benefits',
    tier: [
      {
        name: 'Access to curated ',
        // name1: '',
        // name2: '',
        // name3: '',
        // name4: '',
        // name5: '',
        // name6: '',
      },
      {
        name: `Access to curated `,
        name1: 'Preview to launch of collection',
        // name2: '',
        // name3: '',
        // name4: '',
        // name5: '',
        // name6: '',
      },
      {
        name: 'Access to curated ',
        name1: 'Preview to launch of collection',
        name2: 'Preview to sale',
        // name3: '',
        // name4: '',
        // name5: '',
        // name6: '',
      },
      {
        name: 'Access to curated ',
        name1: 'Preview to launch of collection',
        name2: 'Preview to sale',
        name3: 'Shopping by appointment',
        // name4: '',
        // name5: '',
        // name6: '',
      },
      {
        name: 'Access to curated ',
        name1: 'Preview to launch of collection',
        name2: 'Preview to sale',
        name3: 'Shopping by appointment',
        name4: 'Shop from home (Excludingfurniture)',
        name5: 'Extended exchange period',
        name6: 'Relationship Manager',
      },
    ],
  },
];
function Benefits() {
  return (
    <>
      <ScrollView
        style={{flexGrow: 1, backgroundColor: '#fff'}}
        scrollEnabled={true}>
        <View style={Styles.txtMainView}>
          {/* <Text style={Styles.txtOne}>
            We value every occasion where we interact with you. Your thoughts
            and feedback matter as do your friends and family. Earn Bonous
            points for each of below actions.
          </Text>
          <Text style={Styles.txtTwo}>
            • Up to 7 points{' '}
            <Text style={Styles.txtThree}>for every ₹ 100 spend</Text>
          </Text>
          <Text style={Styles.txtTwo}>
            • Up to 200 points{' '}
            <Text style={Styles.txtThree}>on profile completion</Text>
          </Text>
          <Text style={Styles.txtTwo}>
            • Up to 300 points{' '}
            <Text style={Styles.txtThree}>when you refer friend</Text>
          </Text>*/}
          <Text style={Styles.txtEight}>TIERS OF JOY</Text>
          <View style={{marginTop: 15}}>
            <Text style={Styles.benefitstext}>
              With enriched incentives, bespoke privileges and the opportunity
              to earn increasing amounts of Fabcoins – in our stores and on our
              website – at every step of your journey.
            </Text>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            backgroundColor: '#fff',
            marginBottom: 20,
          }}
          horizontal>
          <View
            style={{
              flexDirection: 'column',
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
              backgroundColor: 'red',
            }}>
            {data.map(item => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    backgroundColor: '#fff',
                  }}>
                  <View
                    style={{
                      padding: 15,
                      minHeight: 80,
                      width: width / 3,
                      justifyContent: 'center',
                    }}>
                    <Text>{item.title}</Text>
                  </View>
                  {item.tier.map(it => {
                    return (
                      <View
                        style={{
                          minHeight: 80,
                          width: width / 3,
                          backgroundColor: item.title.includes('Benefits')
                            ? '#f3efe6'
                            : item.title.includes('Points')
                            ? '#f3efe6'
                            : '#f9f7f2',
                          marginRight: 2,
                          justifyContent: 'flex-start',
                          padding: 15,
                        }}>
                        <Text>{it.name}</Text>
                        {it.name1 ? (
                          <>
                            <Text style={{paddingTop: 10}}>{it.name1}</Text>
                            <Text style={{paddingTop: 10}}>{it.name2}</Text>
                            <Text style={{paddingTop: 10}}>{it.name3}</Text>
                            <Text style={{paddingTop: 10}}>{it.name4}</Text>
                            <Text style={{paddingTop: 10}}>{it.name5}</Text>
                            <Text style={{paddingTop: 10}}>{it.name6}</Text>
                          </>
                        ) : (
                          <></>
                        )}
                      </View>
                    );
                  })}
                  {/* <View
                    style={{
                      backgroundColor: 'cyan',
                      flexDirection: 'row',
                    }}>
                    <Text>mkj</Text>
                  </View> */}
                </View>
              );
            })}
            {/* <View style={{flexDirection: 'row', backgroundColor: 'cyan'}}>
              {data.map(it => {
                it.tier.map(it => {
                  return <Text>{it.name}</Text>;
                });
              })}
            </View> */}
          </View>
        </ScrollView>
      </ScrollView>
      {/* <View style={{padding: 12, backgroundColor: '#FDFDFD', elevation: 5}}>
        <CommonButton
          backgroundColor="#BDBDBD"
          txt="Become a member"
          customViewStyle={{
            backgroundColor: Colors.primarycolor,
          }}
        />
      </View> */}
    </>
  );
}

export default Benefits;
