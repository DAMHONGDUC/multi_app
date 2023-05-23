import React from 'react';
import {Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        flex: 1,
      }}>
      <Text style={{color: '#f00', fontSize: 20}}>ENV</Text>
    </View>
  );
}

export default App;
