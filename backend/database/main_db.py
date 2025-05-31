from flask import Flask
from api.register_API import register_bp
from api.login_API import login_bp

app = Flask(__name__)

# Blueprintを登録
app.register_blueprint(register_bp)
app.register_blueprint(login_bp)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
