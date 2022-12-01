import {
  View,
  Text,
  Dimensions,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {image} from '../../../assets/images';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import {Colors} from '../../../assets/Colors';
const width = Dimensions.get('window').width;

export default function PDP_Compare() {
  return (
    <ScrollView contentContainerStyle={Styles.mainScrollView}>
      <View style={{width: width / 2}}>
        <ImageBackground
          source={image.BeautyCarousel}
          style={{width: width / 2.03, height: 360}}></ImageBackground>
        <View style={Styles.contentContainerLeft}>
          <View style={Styles.ProductDetails}>
            <Text style={Styles.titleName}>
              Cotton Viscose Blue Hand Block Print Short Kurta
            </Text>
            <View style={Styles.currBox}>
              <Text style={Styles.currPrice}>800</Text>
              <Text style={Styles.currDis}>800</Text>
              <Text style={Styles.currOff}>800</Text>
            </View>
            <View style={Styles.btnBox}>
              <TouchableOpacity style={Styles.heartBox}>
                <MaterialCommunityIcons
                  name="cards-heart-outline"
                  color={Colors.primarycolor}
                  size={22}
                />
              </TouchableOpacity>
              <TouchableOpacity style={Styles.detailBtn}>
                <Text>View details</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={Styles.wholeDetails}>
            <View style={Styles.pointsBox}>
              <Text style={Styles.point}>Kaftan sizes available</Text>
              <Text style={Styles.pointData}>XS, S, M, L</Text>
            </View>
            <View style={Styles.pointsBox}>
              <Text style={Styles.point}>Craft</Text>
              <Text style={Styles.pointData}>Hand Block Print</Text>
            </View>
            <View style={Styles.pointsBox}>
              <Text style={Styles.point}>Occasion</Text>
              <Text style={Styles.pointData}>
                Daily wear, work at home or a casual brunch
              </Text>
            </View>
            <View style={Styles.pointsBox}>
              <Text style={Styles.point}>Style notes</Text>
              <View style={Styles.pointList}>
                <Text style={Styles.pointDot}>{'\u2B24'}</Text>
                <Text style={Styles.pointData}>
                  Pair with skinny jeans or trousers
                </Text>
              </View>
              <View style={Styles.pointList}>
                <Text style={Styles.pointDot}>{'\u2B24'}</Text>
                <Text style={Styles.pointData}>
                  Accessorize with simple jewellery
                </Text>
              </View>
            </View>
            <View style={Styles.pointsBox}>
              <Text style={Styles.point}>Material & Fit</Text>
              <View style={Styles.pointList}>
                <Text style={Styles.pointDot}>{'\u2B24'}</Text>
                <Text style={Styles.pointData}>90% cotton 10% viscose</Text>
              </View>
              <View style={Styles.pointList}>
                <Text style={Styles.pointDot}>{'\u2B24'}</Text>
                <Text style={Styles.pointData}>Regular fit</Text>
              </View>
              <View style={Styles.pointList}>
                <Text style={Styles.pointDot}>{'\u2B24'}</Text>
                <Text style={Styles.pointData}>3/4 sleeves</Text>
              </View>
            </View>
            <View style={Styles.pointsBox}>
              <Text style={Styles.point}>Wash & Care</Text>
              <View style={Styles.pointList}>
                <Text style={Styles.pointDot}>{'\u2B24'}</Text>
                <Text style={Styles.pointData}>Machine wash, cold</Text>
              </View>
              <View style={Styles.pointList}>
                <Text style={Styles.pointDot}>{'\u2B24'}</Text>
                <Text style={Styles.pointData}>
                  Wash dark colours separately
                </Text>
              </View>
              <View style={Styles.pointList}>
                <Text style={Styles.pointDot}>{'\u2B24'}</Text>
                <Text style={Styles.pointData}>Do not dry clean</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{width: width / 2}}>
        <ImageBackground
          source={image.BeautyCarousel}
          style={{
            width: width / 2.03,
            height: 360,
            alignSelf: 'flex-end',
          }}>
          <Entypo
            name="circle-with-cross"
            color={Colors.textcolor}
            size={30}
            style={Styles.crossIcon}
          />
          <View style={Styles.IconsContainer}>
            <TouchableOpacity>
              <AntDesign
                name="leftcircle"
                color={Colors.primarycolor}
                size={30}
                style={Styles.crossIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign
                name="rightcircle"
                color={Colors.primarycolor}
                size={30}
                style={Styles.crossIcon}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={Styles.contentContainerRight}>
          <View style={Styles.ProductDetails}>
            <Text style={Styles.titleName}>
              Cotton Viscose Blue Hand Block Print Short Kurta
            </Text>
            <View style={Styles.currBox}>
              <Text style={Styles.currPrice}>800</Text>
              <Text style={Styles.currDis}>800</Text>
              <Text style={Styles.currOff}>800</Text>
            </View>
            <View style={Styles.btnBox}>
              <TouchableOpacity style={Styles.heartBox}>
                <MaterialCommunityIcons
                  name="cards-heart-outline"
                  color={Colors.primarycolor}
                  size={22}
                />
              </TouchableOpacity>
              <TouchableOpacity style={Styles.detailBtn}>
                <Text>View details</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={Styles.wholeDetails}>
            <View style={Styles.pointsBox}>
              <Text style={Styles.point}>Kaftan sizes available</Text>
              <Text style={Styles.pointData}>XS, S, M, L</Text>
            </View>
            <View style={Styles.pointsBox}>
              <Text style={Styles.point}>Craft</Text>
              <Text style={Styles.pointData}>Hand Block Print</Text>
            </View>
            <View style={Styles.pointsBox}>
              <Text style={Styles.point}>Occasion</Text>
              <Text style={Styles.pointData}>
                Daily wear, work at home or a casual brunch
              </Text>
            </View>
            <View style={Styles.pointsBox}>
              <Text style={Styles.point}>Style notes</Text>
              <View style={Styles.pointList}>
                <Text style={Styles.pointDot}>{'\u2B24'}</Text>
                <Text style={Styles.pointData}>
                  Pair with skinny jeans or trousers
                </Text>
              </View>
              <View style={Styles.pointList}>
                <Text style={Styles.pointDot}>{'\u2B24'}</Text>
                <Text style={Styles.pointData}>
                  Accessorize with simple jewellery
                </Text>
              </View>
            </View>
            <View style={Styles.pointsBox}>
              <Text style={Styles.point}>Material & Fit</Text>
              <View style={Styles.pointList}>
                <Text style={Styles.pointDot}>{'\u2B24'}</Text>
                <Text style={Styles.pointData}>90% cotton 10% viscose</Text>
              </View>
              <View style={Styles.pointList}>
                <Text style={Styles.pointDot}>{'\u2B24'}</Text>
                <Text style={Styles.pointData}>Regular fit</Text>
              </View>
              <View style={Styles.pointList}>
                <Text style={Styles.pointDot}>{'\u2B24'}</Text>
                <Text style={Styles.pointData}>3/4 sleeves</Text>
              </View>
            </View>
            <View style={Styles.pointsBox}>
              <Text style={Styles.point}>Wash & Care</Text>
              <View style={Styles.pointList}>
                <Text style={Styles.pointDot}>{'\u2B24'}</Text>
                <Text style={Styles.pointData}>Machine wash, cold</Text>
              </View>
              <View style={Styles.pointList}>
                <Text style={Styles.pointDot}>{'\u2B24'}</Text>
                <Text style={Styles.pointData}>
                  Wash dark colours separately
                </Text>
              </View>
              <View style={Styles.pointList}>
                <Text style={Styles.pointDot}>{'\u2B24'}</Text>
                <Text style={Styles.pointData}>Do not dry clean</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
