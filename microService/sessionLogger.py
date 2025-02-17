from flask import Flask, request, jsonify
from pymongo import MongoClient
import datetime
import json
import os
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)

MONGO_URI = os.getenv('MONGOURL')
client = MongoClient(MONGO_URI)
db = client["game_leaderboard"]
session_collection = db["game_sessions"]
LOG_FILE = "game_sessions.log"
@app.route("/log-session", methods=["POST"])
def log_session():
    try:
        data = request.get_json()

        if not data.get("user") or not data.get("score"):
            return jsonify({"message": "Missing required fields"}), 400

        data["timestamp"] = datetime.datetime.utcnow().isoformat()

        with open(LOG_FILE, "a") as log_file:
            log_file.write(json.dumps(data) + "\n")

        session_collection.insert_one(data)

        return jsonify({"message": "Game session logged successfully"}), 201

    except Exception as e:
        return jsonify({"message": "Error logging session", "error": str(e)}), 500


if __name__ == "__main__":
    app.run(port=5001, debug=True)
