import {MatchScore} from '../screens/ScoresScreen';

const apiUrl = 'http://10.0.2.2:5000/scores';

export const fetchScores = async (): Promise<{
  scores: MatchScore[];
  totalScore: number;
}> => {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching scores');
  }
};
