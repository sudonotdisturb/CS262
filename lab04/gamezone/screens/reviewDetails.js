import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function ReviewDetails({ route, navigation }) {
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.reviewText}>{ route.params.title }</Text>
            <Text style={globalStyles.reviewText}>{ route.params.body }</Text>
            <Text style={globalStyles.reviewText}>{ route.params.rating }</Text>
        </View>
    );
}
