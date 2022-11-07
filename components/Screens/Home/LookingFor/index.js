import {View, Text} from 'react-native';
import React from 'react';
import Chip from '../../../Common/Chip';
import {Styles} from './styles';

const lookingForData = [
  'I need a new study table',
  "I'm having people over for dinner",
  "I'm looking for comfortable clothes",
  'I need kids clothes',
  'I need a study table',
];
export default function LookingFor({active}) {
  return (
    <>
      <View style={Styles.container}>
        <Text style={Styles.heading}>What are you looking for?</Text>
        <View style={Styles.chipBox}>
          {lookingForData.map(item => {
            return (
              <>
                <Chip
                  title={item}
                  handleClick={() => handleClick(item)}
                  active={active}
                />
              </>
            );
          })}
        </View>
      </View>
    </>
  );
}
