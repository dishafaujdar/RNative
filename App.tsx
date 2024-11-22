import {SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import Propass from './components/Password-generator/Propass';


const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <Propass />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
