from flask import Blueprint, jsonify
from services import calculate_goals_score, calculate_yellow_cards_penalty, calculate_shots_score, get_scores

scores_bp = Blueprint('scores', __name__)

@scores_bp.route('/', methods=['GET'])
def scores():
    scores_data = get_scores()
    return jsonify(scores_data)