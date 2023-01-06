import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import SimpleAccordian from '../../../Common/SimpleAccordian';
import Fonts from '../../../../assets/fonts';
import {Colors} from '../../../../assets/Colors';

export default function FAQ(props) {
  const menuItem = [
    {
      id: 1,
      name: '1.Is Fabindia An Indian Company?',
      subItem:
        'Yes. Fabindia is a registered private limited Indian company - Fabindia Overseas Private Limited. Fabindia has a chain of retail stores in India, a store in Rome-Italy, Dubai-UAE, Bahrain, Qatar and a US based office, which wholesales a collection of Home Textiles to various stores across the US.',
    },
    {
      id: 2,
      name: "2. Where Is Fabindia's Head Office Located?",
      subItem:
        'Yes. Fabindia is a registered private limited Indian company - Fabindia Overseas Private Limited. Fabindia has a chain of retail stores in India, a store in Rome-Italy, Dubai-UAE, Bahrain, Qatar and a US based office, which wholesales a collection of Home Textiles to various stores across the US.',
    },
    {
      id: 3,
      name: '3. Where Can I Buy Fabindia Products In India?',
      subItem:
        'Yes. Fabindia is a registered private limited Indian company - Fabindia Overseas Private Limited. Fabindia has a chain of retail stores in India, a store in Rome-Italy, Dubai-UAE, Bahrain, Qatar and a US based office, which wholesales a collection of Home Textiles to various stores across the US.',
    },
    {
      id: 4,
      name: '4. Are Fabindia Products Available Internationally?',
      subItem:
        'Yes. Fabindia is a registered private limited Indian company - Fabindia Overseas Private Limited. Fabindia has a chain of retail stores in India, a store in Rome-Italy, Dubai-UAE, Bahrain, Qatar and a US based office, which wholesales a collection of Home Textiles to various stores across the US.',
    },
    {
      id: 5,
      name: '5. Are Gift Vouchers Available At The Stores?',
      subItem:
        'Yes. Fabindia is a registered private limited Indian company - Fabindia Overseas Private Limited. Fabindia has a chain of retail stores in India, a store in Rome-Italy, Dubai-UAE, Bahrain, Qatar and a US based office, which wholesales a collection of Home Textiles to various stores across the US.',
    },
  ];
  const aboutItem = [
    {
      id: 1,
      name: '1.Where Are Your Manufacturing Facilities Located?',
      subItem:
        'Fabindia does not have a company owned production unit. Our mission has always been to work with village-based artisans across India employing their regional textile skills and specialities. This commitment has helped preserve the traditional crafts of India and created employment opportunities in rural areas.',
    },
    {
      id: 2,
      name: '2. Are All Fabindia Products Handmade?',
      subItem:
        'Fabindia does not have a company owned production unit. Our mission has always been to work with village-based artisans across India employing their regional textile skills and specialities. This commitment has helped preserve the traditional crafts of India and created employment opportunities in rural areas.',
    },
    {
      id: 3,
      name: '3. Do Fabindia Sizes Conform To International Norms?',
      subItem:
        'Fabindia does not have a company owned production unit. Our mission has always been to work with village-based artisans across India employing their regional textile skills and specialities. This commitment has helped preserve the traditional crafts of India and created employment opportunities in rural areas.',
    },
    {
      id: 4,
      name: '4. What Are The Advantages Of Handloom Fabrics?',
      subItem:
        'Fabindia does not have a company owned production unit. Our mission has always been to work with village-based artisans across India employing their regional textile skills and specialities. This commitment has helped preserve the traditional crafts of India and created employment opportunities in rural areas.',
    },
  ];
  const shopingItem = [
    {
      id: 1,
      name: '1.How Do I Shop Online?',
      subItem:
        'Please refer to our How To Shop page which walks you through the shopping process.',
    },
    {
      id: 2,
      name: '2. How Will I Know If You Have Received My Order?',
      subItem:
        'Please refer to our How To Shop page which walks you through the shopping process.',
    },
    {
      id: 3,
      name: '3. How Do I Check My Order Status?',
      subItem:
        'Please refer to our How To Shop page which walks you through the shopping process.',
    },
    {
      id: 4,
      name: '4. Is It Safe To Use My Credit Card Online At Fabindia.Com?',
      subItem:
        'Please refer to our How To Shop page which walks you through the shopping process.',
    },
    {
      id: 5,
      name: '5. What If An Item Is Out Of Stock?',
      subItem:
        'Please refer to our How To Shop page which walks you through the shopping process.',
    },
    {
      id: 6,
      name: '6. Do I Have To Sign Up For A Fabindia Account To Buy Something At Fabindia.Com?',
      subItem:
        'Please refer to our How To Shop page which walks you through the shopping process.',
    },
  ];

  const redeem = `This E-gift card is denominated in Indian Rupees (INR). This E-Gift Card is valid for one year from the date of issue. This is not a negotiable instrument like cash or cash equivalent. This E-Gift Card is freely transferable and redeemable for any product/merchandise at any participating store of Fabindia in India, unless otherwise specified at the point of sale. Redeemable only on presentation by the bearer at all Fabindia Stores in India except airport stores and Fabindia website for logged in users under Gift Card as payment mode ( NOTE: Fabindia E-Gift Card is currently not redeemable on Fabindia mobile app) This E-Gift Card once issued cannot be cancelled or refunded. The E-Gift Card has to be redeemed in full and partial redemption will not be allowed. This E-Gift Card will be immediately activated at the time of purchase. Purchases exceeding the value of this E-Gift Card should be settled by cash/ credit card. This E-Gift card can neither be redeemed for cash or credit nor any unutilized balance would be refunded. This E- Gift Card can be redeemed only once. This E-Gift Card is redeemable only during the validity period and the validity shall not be extended under any circumstances. This E-Gift card will not be replaced or its value refunded, if lost. No duplicate will be issued if this gift voucher is defaced and rendered unusable for any reason. E-Gift Cards are normally delivered instantly. But sometimes due to system issues, the delivery can be delayed up-to 24 hours. Returns or refunds are not permitted on products purchased using E-Gift cards. No other discount or promotional offer will be allowed to be combined with purchases made using this gift voucher. No returns and no refunds on gift cards, E- gift cards and gift vouchers shipped by www.woohoo.in. Please check the refund policy at http://www.woohoo.in/faq for further details. Any dispute arising out of or related to this gift voucher shall be subject to the jurisdiction of the courts at Delhi.`;
  const Preloaded = `Open to all customers aged 18 or above. Offer is on from 7th Jan 2022 to 29th Jan 2022. Points are valid till 29th Jan 2022. 500 Bonus points have been preloaded into the customers fabfamily account. No minimum purchase required. Points can be redeemed in multiple purchases as long as the promotion is ongoing. Points will expire once the promotion is over. This offer is only valid for a specific group of customers. Eligible customers would have received communication on their registered mobile number. Customers’s mobile phone number would be his / her unique identification number for the promotion eligibility subject to such member agreeing to the same. The offer is valid for transactions done in store and online. A customer will receive the 500 Bonus points for this offer only once. Two offers cannot be combined in a single purchase. The member shall present his membership acceptance message for all transactions & activities including but not limited to points accumulation, redemptions & discounts. The membership points, benefits & privileges are non-transferable & may only be used by the member. Fabindia will not be held responsible for any transactions made on a lost or stolen membership. Management reserves the right to cancel the membership or to cancel or amend any provision at any time without prior notice.`;
  const Points = `Open to all customers aged 18 or above. This offer is only valid for a specific group of customers. Eligible customers would have received communication on their registered mobile number. Offer is on from 7th Jan 2022 to 29th Jan 2022. Points are valid for 3 months from date of receiving them in your fabfamily account. Member’s mobile phone number would be his / her unique identification number for the promotion eligibility subject to such member agreeing to the same. Shoppers will earn 5x points on their Fabindia purchases. Earning concept-Base point + 4x. No minimum purchase required. Not applicable on discounted pieces. The offer is valid for transactions done in store and online. Points will be automatically credited in shoppers fabfamily account post verification. A member can avail this offer multiple times during the promotion period. Two offers cannot be combined in a single purchase. The membership points, benefits & privileges are non-transferable & may only be used by the member. The member shall present his membership acceptance message for all transactions & activities including but not limited to points accumulation, redemptions & discounts. Fabindia will not be held responsible for any transactions made on a lost or stolen membership. Management reserves the right to cancel the membership or to cancel or amend any provision at any time without prior notice.`;
  const Campaign = `Open to all customers aged 18 or above. Offer is on from 7th Jan 2022 to 29th Jan 2022. Customers will earn bonus points on a minimum spend. Points are valid for 3 months from date of receiving them in your fabfamily account. The minimum purchase amount has to be achieved in one invoice. This offer is only valid for a specific group of customers. Eligible customers would have received communication on their registered mobile number. Member’s mobile phone number would be his / her unique identification number for the promotion eligibility subject to such member agreeing to the same. The offer is valid for transactions done in store and online. Each customer can avail this promotion only once during the offer period. Two offers cannot be combined in a single purchase. The membership points, benefits & privileges are non-transferable & may only be used by the member. The member shall present his membership acceptance message for all transactions & activities including but not limited to points accumulation, redemptions & discounts. Fabindia will not be held responsible for any transactions made on a lost or stolen membership. Management reserves the right to cancel the membership or to cancel or amend any provision at any time without prior notice.`;
  return (
    <ScrollView
      style={{
        paddingVertical: 20,
        paddingHorizontal: 15,
        backgroundColor: 'white',
      }}
      contentContainerStyle={{paddingBottom: 40}}>
      <Text
        style={{
          fontSize: 18,
          fontFamily: Fonts.Assistant700,
          lineHeight: 18,
          color: Colors.textcolor,
        }}>
        About Fabindia
      </Text>
      {menuItem.map(item => {
        return (
          <View key={Math.random() * 724436357}>
            <SimpleAccordian
              {...props}
              title={item.name}
              category={item.subItem}
              bodyData={true}
            />
          </View>
        );
      })}
      <Text
        style={{
          fontSize: 18,
          fontFamily: Fonts.Assistant700,
          lineHeight: 18,
          color: Colors.textcolor,
          marginTop: 40,
        }}>
        About our products
      </Text>
      {aboutItem.map(item => {
        return (
          <View key={Math.random() * 72698357}>
            <SimpleAccordian
              {...props}
              title={item.name}
              category={item.subItem}
              bodyData={true}
            />
          </View>
        );
      })}
      <Text
        style={{
          fontSize: 18,
          fontFamily: Fonts.Assistant700,
          lineHeight: 18,
          color: Colors.textcolor,
          marginTop: 40,
        }}>
        Shopping
      </Text>
      {shopingItem.map(item => {
        return (
          <View key={Math.random() * 72996357}>
            <SimpleAccordian
              {...props}
              title={item.name}
              category={item.subItem}
              bodyData={true}
            />
          </View>
        );
      })}
      <Text
        style={{
          fontSize: 18,
          fontFamily: Fonts.Assistant700,
          lineHeight: 18,
          color: Colors.textcolor,
          marginTop: 40,
        }}>
        Redeeming E-Gift Cards T&C
      </Text>
      <View>
        {redeem.split('. ').map(txt => {
          return (
            <Text
              key={Math.random() * 726357}
              style={{
                fontSize: 16,
                fontFamily: Fonts.Assistant400,
                lineHeight: 24,
                color: Colors.textcolor,
                marginTop: 15,
              }}>
              ▪ {txt}
            </Text>
          );
        })}
        <Text
          style={{
            fontSize: 18,
            fontFamily: Fonts.Assistant700,
            lineHeight: 18,
            color: Colors.textcolor,
            marginTop: 25,
          }}>
          500 Preloaded Bonus Points T&Cs
        </Text>
        {Preloaded.split('. ').map(txt => {
          return (
            <Text
              key={Math.random() * 726357}
              style={{
                fontSize: 16,
                fontFamily: Fonts.Assistant400,
                lineHeight: 24,
                color: Colors.textcolor,
                marginTop: 15,
              }}>
              ▪ {txt}
            </Text>
          );
        })}
        <Text
          style={{
            fontSize: 18,
            fontFamily: Fonts.Assistant700,
            lineHeight: 18,
            color: Colors.textcolor,
            marginTop: 25,
          }}>
          5X Points Offer T&Cs
        </Text>
        {Points.split('. ').map(txt => {
          return (
            <Text
              key={Math.random() * 726357}
              style={{
                fontSize: 16,
                fontFamily: Fonts.Assistant400,
                lineHeight: 24,
                color: Colors.textcolor,
                marginTop: 15,
              }}>
              ▪ {txt}
            </Text>
          );
        })}
        <Text
          style={{
            fontSize: 18,
            fontFamily: Fonts.Assistant700,
            lineHeight: 18,
            color: Colors.textcolor,
            marginTop: 25,
          }}>
          Bonus Campaign With Minimum Purchase T&Cs
        </Text>
        {Campaign.split('. ').map(txt => {
          return (
            <Text
              key={Math.random() * 726357}
              style={{
                fontSize: 16,
                fontFamily: Fonts.Assistant400,
                lineHeight: 24,
                color: Colors.textcolor,
                marginTop: 15,
              }}>
              ▪ {txt}
            </Text>
          );
        })}
      </View>
    </ScrollView>
  );
}
