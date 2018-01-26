import React from 'react';
import { Header } from 'react-native-elements';

const AppBar = ({ title = 'Home' }) => (
  <Header
    leftComponent={{ icon: 'menu', color: '#fff' }}
    centerComponent={{ text: title, style: { color: '#fff' } }}
    rightComponent={{ icon: 'home', color: '#fff' }}
  />
);

export default AppBar;
