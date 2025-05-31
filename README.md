# TripList

> [!WARNING]
> **コマンドのパスはMac用なのでWindowsの場合は適宜変更してください**

## 環境構築

### 設定ファイルを使う場合

```
conda env create -n triplist -f config/env_triplist.yaml
```

### 初めから作る場合

Python環境構築

```
conda create -n triplist python=3.10
```

環境起動

```
conda activate triplist
```

Flaskのインストール

```
pip install flask flask-cors
```

```
pip install flask-sqlalchemy flask-migrate
```

### 動作確認

```
python3 backend/sample.py
```

## データベース関連

### SQLiteの設定

- [SQLite公式](https://www.sqlite.org/download.html)から`sqlite-tools-win-x64-3490200.zip`をインストールする
  
- 展開して中のファイルを全て`database`ディレクトリに移動する

```
.
└── triplist
    └── backend
        └── database
            ├── sqldiff.exe
            ├── sqlite3_analyzer.exe
            ├── sqlite3_rsync.exe
            └── sqlite3.exe
```

### 会員情報のデータベースを作る

```
sqlite3 backend/database/triplist.db < backend/database/create_triplistdb.sql
```

## API関連

### Flaskサーバー起動方法

**Mac**
```
python3 backend/database/main_db.py
```

**Windows**
```
python backend/database/main_db.py
```

### API検証方法

> [!IMPORTANT]
> Flaskサーバー起動時に使ったターミナルとは別のターミナルで行う

#### 会員登録用API

```
curl -X POST http://127.0.0.1:5000/register \
    -H "Content-Type: application/json" \
    -d '{"email":"test@example.com", "password":"secret"}'
```

#### ログイン用API

```
curl -X POST http://127.0.0.1:5000/login \
    -H "Content-Type: application/json" \
    -d '{"email":"test@example.com", "password":"secret"}'
```