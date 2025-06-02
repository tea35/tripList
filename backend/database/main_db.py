from flask import Flask
from create_db import create_tables
from api.register_API import register_bp
from api.login_API import login_bp
from api.add_triplist_API import add_triplist_bp
from api.add_item_API import add_item_bp

app = Flask(__name__)

# Blueprintを登録
app.register_blueprint(register_bp)
app.register_blueprint(login_bp)
app.register_blueprint(add_triplist_bp)
app.register_blueprint(add_item_bp)


if __name__ == '__main__':
    create_tables()
    app.run(debug=True, port=5000)
