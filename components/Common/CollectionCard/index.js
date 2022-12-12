import React, {useEffect, useState} from 'react';
import {ImageBackground, ScrollView, TouchableOpacity} from 'react-native';
import {getComponentData} from '../Helper';
import {Styles} from './style';

const CollectionCard = props => {
  const {data = {}} = props;
  const [collectionCardData, setCollectionCardData] = useState([]);
  useEffect(() => {
    getCollectionsIds();
  }, []);
  const getCollectionsIds = async () => {
    const bannerId = data.banners;
    getCarauselData(bannerId);
  };
  const getCarauselData = async bannerId => {
    const splitBannerId = bannerId.split(' ').join(',');
    const response = await getComponentData(
      `cms/components?fields=DEFAULT&currentPage=0&pageSize=5&componentIds=${splitBannerId}&lang=en&curr=INR`,
    );
    setCollectionCardData(response.component);
  };
  return (
    <>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
          backgroundColor: 'white',
        }}>
        {collectionCardData.map(item => {
          const newCode = item.urlLink;
          let splitURL = newCode.split('/');
          splitURL = splitURL[splitURL.length - 1];

          const title = item.title || item.name;
          console.log(
            'splitURLsplitURLsplitURLsplit...URLsplitURLsplitURLsplitURLsplitURLsplitURLsplitURLsplitURLsplitURLsplitURLsplitURLsplitURLsplitURL',
            title,
          );

          return (
            <TouchableOpacity
              onPress={
                // () => console.log('splitURL', splitURL)
                () =>
                  props.navigation.navigate('LandingPageSaris_Blouses', {
                    // code: splitURL,
                    code: splitURL.split('?')[0],
                    title: title,
                  })
              }>
              <ImageBackground
                style={Styles.container}
                source={{
                  uri: `https://apisap.fabindia.com/${item?.media?.url}`,
                }}
                // source={item.image}
              >
                {/* <LinearGradient
        colors={[item.color, 'transparent']}
        start={{x: 0.5, y: 0.5}}
        style={{
          position: 'absolute',
          top: 0,
          height: 140,
          width: '100%',
        }}></LinearGradient>
      <View style={Styles.headingContainer}>
        <Text style={Styles.heading}>{item.heading}</Text>
        <Text style={Styles.text}>{item.text}</Text>
      </View>
      <TouchableOpacity style={Styles.exploreNowBox}>
        <Text style={Styles.exploreNowText}>Shop now</Text>
      </TouchableOpacity> */}
              </ImageBackground>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </>
  );
};
export default CollectionCard;
