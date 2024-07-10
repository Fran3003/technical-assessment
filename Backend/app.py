from flask import Flask
from routes import scores_bp
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

app.register_blueprint(scores_bp, url_prefix='/scores')

if __name__ == '__main__':
    app.run(debug=True)