import React from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { TabBarBottom, TabNavigator } from 'react-navigation';

import Colors from '../constants/Colors';
import CryptoScreen from '../screens/CryptoScreen';
import HomeScreen from '../screens/HomeScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Crypto: {
      screen: CryptoScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-information-circle${focused ? '' : '-outline'}`
                : 'ios-information-circle';
            break;
          case 'Crypto':
            iconName = 'logo-bitcoin';
            break;
          case 'Settings':
            iconName =
              Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options';
        }
        return (
          <Icon
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
  }
);
