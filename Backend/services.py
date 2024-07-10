import json

def calculate_goals_score(goals):
    return goals * 30

def calculate_yellow_cards_penalty(yellow_cards):
    return yellow_cards * -5

def calculate_shots_score(shots):
    return shots * 5

def get_scores():
    scores = []
    total_score = 0
    with open('matches.json') as f:
        matches = json.load(f)
    for match in matches:
        goals_score = calculate_goals_score(match['goals'])
        yellow_cards_penalty = calculate_yellow_cards_penalty(match['yellow_cards'])
        shots_score = calculate_shots_score(match['shots'])
        
        match_score = goals_score + yellow_cards_penalty + shots_score
        total_score += match_score
        
        scores.append({
            'team': match['team'],
            'goals_score': goals_score,
            'yellow_cards_penalty': yellow_cards_penalty,
            'shots_score': shots_score,
            'match_score': match_score
        })
    return {'scores': scores, 'totalScore': total_score}