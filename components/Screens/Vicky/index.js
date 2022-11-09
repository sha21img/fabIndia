import * as React from 'react';
import {View, useWindowDimensions, Text, ScrollView} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

const FirstRoute = () => <View style={{flex: 1, backgroundColor: 'cyan'}} />;

const SecondRoute = () => (
  <>
    <View style={{flex: 1, backgroundColor: '#673ab7'}}></View>
  </>
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function Vicky() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <ScrollView style={{flex: 1, backgroundColor: 'green'}}>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          //   initialLayout={initialLayout}
          style={{flex: 1}}
        />
      </ScrollView>
    </View>
  );
}
