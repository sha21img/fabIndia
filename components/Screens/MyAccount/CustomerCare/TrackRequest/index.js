import {View, Text, ScrollView} from 'react-native';
import React from 'react';
export default function TrackRequest() {
  return (
    <ScrollView contentContainerStyle={Styles.conatiner}>
      {[0, 0, 0].map(item => {
        return (
          <>
            <View style={Styles.mainbox}>
              <Text style={Styles.ticketnumber}>Ticket ID 0000031476-01</Text>
              <View style={{paddingVertical: 15}}>
                <Text style={Styles.issuetext}>Issue</Text>
                <View style={Styles.statusbox}>
                  <Text style={Styles.statustext}>
                    When will I get my cashback
                  </Text>
                  <Text style={Styles.progresstext}>In Progress</Text>
                </View>
                <Text style={Styles.datetimetext}>17 Sep 2018 2:00 PM</Text>
              </View>
            </View>
          </>
        );
      })}
    </ScrollView>
  );
}
