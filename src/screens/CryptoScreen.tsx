import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { connect } from 'react-redux';

import FetchCoinData from '../store/actions/FetchCoinData';
import CoinCard from '../components/CoinCard';

interface Props {
    FetchCoinData;
    crypto;
}

class CryptoScreen extends Component<Props> {
    static navigationOptions = {
        title: 'CryptoCurrency',
    };

    componentWillMount() {
        this.props.FetchCoinData();
    }

    renderCoinCards() {
        const { crypto } = this.props;
        return crypto.data.map((coin) =>
            <CoinCard
                key={coin.name}
                coin_name={coin.name}
                symbol={coin.symbol}
                price_usd={coin.price_usd}
                percent_change_24h={coin.percent_change_24h}
                percent_change_7d={coin.percent_change_7d}
            />
        );
    }

    render() {
        const { crypto } = this.props;
        const { contentContainer } = styles;

        if (crypto.isFetching) {
            return (
                <View>
                    <Spinner
                        visible={crypto.isFetching}
                        textContent={'Loading...'}
                        textStyle={{ color: '#253145' }}
                        animation='fade'
                    />
                </View>
            );
        }

        return (
            <ScrollView contentContainerStyle={contentContainer}>
                {this.renderCoinCards()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingBottom: 100,
        paddingTop: 55
    }
});

function mapStateToProps(state) {
    return {
        crypto: state.crypto
    };
}

export default connect(mapStateToProps, { FetchCoinData })(CryptoScreen);
