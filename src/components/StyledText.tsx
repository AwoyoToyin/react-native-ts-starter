import React, { Component } from 'react';
import { Text } from 'react-native';

interface Props {
    style: any;
}

export class MonoText extends Component<Props> {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
  }
}
