import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Fonts from '../../../assets/fonts';
import { Colors } from '../../../assets/Colors';

const NewArrivals = ({ props, menNewArrivals = [], womenNewArrivals = [] }) => {
    return (
        <>
            <View style={{ paddingVertical: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>New Arrivals in Women</Text>

                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {
                        props.navigation.navigate('LandingPageSaris_Blouses', {
                            title: 'new-women-products',
                            code: 'new-women-products',
                            status: false,
                        });
                    }}>
                    <Text style={{ fontSize: 14, color: Colors.primarycolor }}>View All</Text>
                </TouchableOpacity>
            </View>

            {womenNewArrivals?.map(item => {
                return (
                    <TouchableOpacity
                        key={item?.code}
                        onPress={() =>
                            props.navigation.navigate('ProductDetailed', {
                                productId: item.code
                            })
                        }
                        style={{ paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#EDEDED' }}>

                        <Text style={{ fontSize: 16, fontFamily: Fonts.Assistant400, color: Colors.textcolor }}>{item?.name}</Text>
                        <Text style={{ fontSize: 14, fontFamily: Fonts.Assistant400, color: Colors.textcolor }}>{item?.price?.formattedValue}</Text>
                    </TouchableOpacity>
                );
            })}

            <View style={{ paddingVertical: 16, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#000' }}>New Arrivals in Men</Text>

                <TouchableOpacity
                    activeOpacity={0.9}
                    onPress={() => {
                        props.navigation.navigate('LandingPageSaris_Blouses', {
                            title: 'new-men-products',
                            code: 'new-men-products',
                            status: false,
                        });
                    }}>
                    <Text style={{ fontSize: 14, color: Colors.primarycolor }}>View All</Text>
                </TouchableOpacity>
            </View>

            {menNewArrivals?.map(item => {
                return (
                    <TouchableOpacity
                        key={item?.code}
                        onPress={() =>
                            props.navigation.navigate('ProductDetailed', {
                                productId: item.code
                            })
                        }
                        style={{ paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#EDEDED' }}>

                        <Text style={{ fontSize: 16, fontFamily: Fonts.Assistant400, color: Colors.textcolor }}>{item?.name}</Text>
                        <Text style={{ fontSize: 14, fontFamily: Fonts.Assistant400, color: Colors.textcolor }}>{item?.price?.formattedValue}</Text>
                    </TouchableOpacity>
                );
            })}
        </>
    )
}

export default NewArrivals;
