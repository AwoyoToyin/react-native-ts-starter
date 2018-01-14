/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import RootNavigation from './navigation/RootNavigation';
import Store from './store';

// tslint:disable-next-line:no-empty-interface
export interface Props { }

// tslint:disable-next-line:no-empty-interface
export interface State {
  isLoadingComplete: boolean;
}

export default class App extends Component<{}> {
  state = {
    isLoadingComplete: false,
  };

  render() {
    return (
      <Provider store={Store}>
        <View style={styles.container}>
          {/* {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />} */}
          <RootNavigation />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  statusBarUnderlay: {
    height: 10,
    backgroundColor: 'rgb(166, 206, 241)',
  },
});
