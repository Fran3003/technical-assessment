import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ScoreCard from '../components/ScoreCard';
import TotalScoreCard from '../components/TotalScoreCard';
import { fetchScores } from '../utils/api';

export interface MatchScore {
    team: string;
    goals_score: number;
    match_score: number;
    shots_score: number;
    yellow_cards_penalty: number;
}

const ScoresScreen: React.FC = () => {
    const [scores, setScores] = useState<MatchScore[]>([]);
    const [totalScore, setTotalScore] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchScores();
                setScores(data.scores);
                setTotalScore(data.totalScore);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const renderItem = ({ item }: { item: MatchScore }) => (
        <ScoreCard
            team={item.team}
            goals_score={item.goals_score}
            match_score={item.match_score}
            shots_score={item.shots_score}
            yellow_cards_penalty={item.yellow_cards_penalty}
        />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={scores}
                renderItem={renderItem}
                keyExtractor={(item) => item.team}
                ListFooterComponent={<TotalScoreCard totalScore={totalScore} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ScoresScreen;