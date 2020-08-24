import React from 'react';
import { View, StatusBar, Text, Modal } from 'react-native';
import Tooltip from './components/Tooltip';

// import Tooltip from './components/Tooltip';

const App: React.FC = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#6e6e6e" />
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignContent: 'space-between',
          backgroundColor: 'green',
        }}
      >
        <Text>Desconto</Text>
        <Tooltip />
        <Text>R$10,00</Text>
      </View>
    </View>
  </>
);

export default App;
