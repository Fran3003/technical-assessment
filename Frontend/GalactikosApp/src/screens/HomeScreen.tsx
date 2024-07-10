import React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
    Home: undefined;
    Scores: undefined;
};

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen: React.FC = () => {
    const navigation = useNavigation<HomeScreenNavigationProp>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Galactikos</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Scores')} style={styles.button}>
                <Text style={styles.text}>Go to Scores</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#000',
    },
    button: {
        backgroundColor: '#8E3A38',
        padding: 10,
        borderRadius: 5,
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default HomeScreen;