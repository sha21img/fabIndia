import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import image from '../../../assets/images';
import {getComponentData, imageURL} from '../Helper';
import Fonts from '../../../assets/fonts';
import {Colors} from '../../../assets/Colors';
const width = Dimensions.get('window').width;

export default function InteriorSubSection(props) {
  const {data} = props;
  const [imgActive1, setImgActive1] = React.useState(0);
  const [newHighlights, setNewHighlights] = React.useState([]);

  const getNewHighlightIds = async () => {
    const bannerId = data.banners;
    getNewHighlightData(bannerId);
  };
  const getNewHighlightData = async bannerId => {
    const splitBannerId = bannerId?.split(' ').join(',');
    const response = await getComponentData(
      `cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );
    console.log('response.dattttttttttttttttttttttttttttttttt', response);
    setNewHighlights(response?.component);
  };
  React.useEffect(() => {
    getNewHighlightIds();
  }, []);

  return (
    <>
      {data.title == 'INTERIOR DESIGN SERVICES' ? (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row', width: '100%'}}>
            {newHighlights.map(el => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('InteriorCatagory');
                  }}
                  style={{
                    marginLeft: 20,
                  }}>
                  <Image
                    source={{uri: `${imageURL}${el.media?.desktop?.url}`}}
                    style={{
                      height: width / 1.3,
                      width: width / 1.8,
                    }}
                  />
                  <Text>{el.title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      ) : null}
      {data.title == 'WHY IDS' ? (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row', width: '100%'}}>
            {newHighlights.map(el => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('InteriorCatagory');
                  }}
                  style={{
                    marginLeft: 20,
                    width: width / 1.8,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: width / 1.8,
                  }}>
                  <Image
                    source={{uri: `${imageURL}${el.media?.desktop?.url}`}}
                    style={{
                      height: width / 1.3,
                      width: width / 1.8,
                      //   height: 120,
                      //   width: 120,
                    }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      ) : null}
      {data.title == 'OUR REACH' ? (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row', width: '100%'}}>
            {newHighlights.map(el => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('InteriorCatagory');
                  }}
                  style={{
                    marginLeft: 20,
                    width: width / 1.8,
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: width / 1.8,
                  }}>
                  <Image
                    source={{uri: `${imageURL}${el.media?.desktop?.url}`}}
                    style={{
                      height: width / 1.3,
                      width: width / 1.8,
                      //   height: 120,
                      //   width: 120,
                    }}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      ) : null}
      {data.title == 'MEET OUR HAPPY CUSTOMER' ? (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={{flexDirection: 'row', width: '100%'}}>
            {newHighlights.map(el => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.navigate('InteriorCatagory');
                  }}
                  style={{
                    marginLeft: 20,
                  }}>
                  <View
                    style={{
                      borderBottomWidth: 10,
                      borderBottomColor: Colors.primarycolor,
                    }}>
                    <Image
                      source={{uri: `${imageURL}${el.media?.desktop?.url}`}}
                      style={{
                        height: width / 1.3,
                        width: width / 1.8,
                      }}
                    />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      ) : null}
    </>
  );
}
