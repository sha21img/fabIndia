import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Styles} from './styles';
import Chip from '../../Common/Chip';
const data1 = [
  {name: 'Men’s Kurta'},
  {name: 'Shirts'},
  {name: 'Kidswear'},
  {name: 'Bed Linen'},
  {name: 'Cushion covers'},
  {name: 'Pillow'},
  {name: 'Chairs'},
  {name: 'Study table'},
  {name: 'Curtains'},
];
const Tags = () => {
  const [active, setActive] = useState('');
  const handleClick = data => {
    setActive(data);
  };
  return data1.map(item => (
    <Chip title={item.name} handleClick={handleClick} active={active} />
  ));
};

export default Tags;
