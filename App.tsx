import React from 'react';
import {Text, View} from 'react-native';
import Config from 'react-native-config';

function App(): JSX.Element {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
      }}>
      <Text style={{color: '#f00', fontSize: 20}}>{Config.ENV}</Text>
    </View>
  );
}

export default App;
