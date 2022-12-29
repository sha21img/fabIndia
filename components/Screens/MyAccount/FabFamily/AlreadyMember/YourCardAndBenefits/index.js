import React, {useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {Styles} from './styles';
import {image} from '../../../../../../assets/images';
import ProgressBar from 'react-native-progress/Bar';
import {Colors} from '../../../../../../assets/Colors';
import Fonts from '../../../../../../assets/fonts';
import CommonButton from '../../../../../Common/CommonButton';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import DropDownPicker from 'react-native-dropdown-picker';

function YourCardAndBenefits(props, item) {
  const {loyalityTier} = item;
  console.log('item loyality tier props', loyalityTier);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'January', value: 'january'},
    {label: 'February', value: 'february'},
  ]);

  return (
    <ScrollView contentContainerStyle={Styles.container}>
      <View style={Styles.cardView}>
        <Image style={Styles.card} source={image.fabIndiaDebitCard} />
        <View style={Styles.containerViewOne}>
          <Text style={Styles.tierTxt}>Tier</Text>
          <View>
            <ProgressBar
              progress={0.39}
              width={375}
              color="#750000"
              style={Styles.progressBarStyle}
            />
          </View>
          <View style={Styles.tierContainer}>
            <View style={Styles.goldView}>
              <Text style={Styles.goldTxt}>GOLD</Text>
            </View>
            <View style={Styles.platinumView}>
              <Text style={Styles.platinumTxt}>PLATINUM</Text>
            </View>
          </View>
          <View style={{paddingVertical: 10}}>
            <Text style={Styles.upgradeTierTxtOne}>
              Shop for{' '}
              <Text style={Styles.upgradeTierTxtTwo}>
                ₹ 75000 to upgrade
                <Text style={Styles.upgradeTierTxtOne}> to next tier</Text>
              </Text>
            </Text>
          </View>

          <Text style={Styles.tierBenefitsHeadingTxt}>
            {loyalityTier.tierClass} Tier Benefits
          </Text>

          <Text style={Styles.tierBenefitsTxtOne}>
            • Redeeming points for discounts at Fabindia stores or on the app,
            or on www.fabindia.com
          </Text>
          <Text style={Styles.tierBenefitsTxtTwo}>
            • Redeeming points for curated experiences brought to you by
            Fabindia
          </Text>
          <Text style={Styles.tierBenefitsTxtThree}>
            • Invitations to Sale preview events
          </Text>
          <Text style={Styles.tierBenefitsTxtFour}>
            • Invitations to collection launch events
          </Text>
        </View>
      </View>
      <View style={Styles.containerViewTwo}>
        <DropDownPicker
          containerStyle={Styles.dropDownStyleOne}
          style={Styles.dropDownStyleTwo}
          dropDownContainerStyle={Styles.dropDownContainerStyle}
          open={open}
          value={value} //genderValue
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder="Select date range "
          // onOpen={onGenderOpen}
          onChangeValue={item => console.log('hihih', item)}
          zIndex={3000}
          zIndexInverse={1000}
        />
        <View style={Styles.buttonView}>
          <CommonButton
            backgroundColor="balck"
            txt="Account Summary"
            // width='48%'
            customViewStyle={Styles.buttonOne}
          />
          <CommonButton
            backgroundColor="black"
            txt="Experiences"
            btntxtColor="#4A4A4A"
            customViewStyle={Styles.buttonTwo}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default YourCardAndBenefits;
