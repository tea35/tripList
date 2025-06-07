from flask import Blueprint, request, jsonify
import sqlite3
import os

#* 最終的に統合するのでブループリントで作る
get_triplist_bp = Blueprint('get_triplist', __name__)

#! バグ防止のために絶対パスを使う
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
db_path = os.path.join(BASE_DIR, '../triplist.db')

@get_triplist_bp.route('/triplist', methods=['GET'])
def get_triplist():
    user = request.args.get('user')  # 例: /triplist?user=user1@example.com

    if not user:
        return jsonify({'error': 'Not user'}), 400

    conn = sqlite3.connect(db_path)
    cur = conn.cursor()

    cur.execute(
    '''
        SELECT triplist.*
        FROM triplist
        INNER JOIN members ON members.email = triplist.user
        WHERE members.email = ?;
    ''', (user,))

    conn.close()
    
    return jsonify({'message': 'get triplist'}), 201

'''
curl -X POST http://127.0.0.1:5000/get_triplist \
    -H "Content-Type: application/json" \
    -d '{"user": "alice@example.com"}'
'''
