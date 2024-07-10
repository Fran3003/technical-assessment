import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
    totalScore: number;
}

const TotalScoreCard: React.FC<Props> = ({ totalScore }) => {
    return (
        <View style={styles.totalCard}>
            <Text style={styles.title}>Total Score: </Text>
            <Text style={styles.text}>{totalScore}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    totalCard: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#8E3A38',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        alignSelf: 'center',
        width: '90%',
        borderWidth: 1,
        borderBottomWidth: 4,
    },
    title: {
        fontSize: 15,
        color: '#000',
        alignSelf: 'center',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#000',
        alignSelf: 'center',
    }
});

export default TotalScoreCard;