import React from 'react';
import {View, ScrollView, Text} from 'react-native';
import {image} from '../../../../assets/images';
import StoriesCard from '../../../Common/StoriesCard';
import SummerGalary from '../../../Common/SummerGalary';

const WomenCategory = () => {
  const StoriesCardData = [
    {
      Image: image.womenStoryCardPic,
      description: 'Tanya pairs out Dabu printed kurta with a chanderi dupatta',
    },
  ];
  const SummerGalaryData = [
    {image: image.womenPhoto1, name: 'Saris'},
    {image: image.womenPhoto2, name: 'Saris'},
    {image: image.womenPhoto3, name: 'Saris'},
    {image: image.womenPhoto4, name: 'Saris'},
    {image: image.womenPhoto1, name: 'Saris'},
    {image: image.womenPhoto2, name: 'Saris'},
  ];
  return (
    <ScrollView>
      <SummerGalary data={SummerGalaryData} title='Summer prints' subtitles='Keep it cool this summer' />
      <StoriesCard data={StoriesCardData} />
    </ScrollView>
  );
};
export default WomenCategory;
