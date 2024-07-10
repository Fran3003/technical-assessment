import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { MatchScore } from '../screens/ScoresScreen';


const ScoreCard: React.FC<MatchScore> = ({ team, goals_score, match_score, shots_score, yellow_cards_penalty }) => {
    return (

        <View style={styles.card}>
            <View style={[styles.container, { width: '50%' }]}>
                <Text style={styles.title}>Team: </Text>
                <Text style={styles.text}>{team}</Text>
            </View>
            <View style={[styles.container, { width: '45%' }]}>
                <Text style={styles.title}>Goals Scored: </Text>
                <Text style={styles.text}>{goals_score}</Text>
            </View>
            <View style={[styles.container, { width: '100%' }]}>
                <Text style={styles.title}>Yellow Cards Penalty: </Text>
                <Text style={styles.text}>{yellow_cards_penalty}</Text>
            </View>
            <View style={[styles.container, { width: '45%' }]}>
                <Text style={styles.title}>Shots Scored: </Text>
                <Text style={styles.text}>{shots_score}</Text>
            </View>
            <View style={[styles.container, { width: '45%' }]}>
                <Text style={styles.title}>Match Score: </Text>
                <Text style={styles.text}>{match_score}</Text>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    card: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'space-between',
        backgroundColor: '#3E797C',
        padding: 20,
        marginVertical: 8,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        alignSelf: 'center',
        width: '90%',
        height: 250,
        borderBottomWidth: 4,
        borderEndWidth: 4,
    },
    container: {
        paddingHorizontal: 5,
        paddingVertical: 5,
        justifyContent: 'space-around',
        borderWidth: 1,
        height: '30%',
        borderRadius: 5,
        borderEndWidth: 5,
        backgroundColor: '#c3c3c3',
    },
    title: {
        fontSize: 15,
        color: '#000',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#000',
    },
});

export default ScoreCard;