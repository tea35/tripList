import sqlite3

def create_tables():
    conn = sqlite3.connect('./backend/database/triplist.db')  # SQLite DB ファイルに接続
    cursor = conn.cursor()

    # SQL スクリプトをまとめる
    sql_script = '''
    CREATE TABLE IF NOT EXISTS members (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS triplist (
        user TEXT UNIQUE NOT NULL,
        location_name TEXT NOT NULL,
        location_latitude REAL,
        location_longitude REAL,
        date TEXT UNIQUE NOT NULL,
        trip_id INTEGER PRIMARY KEY AUTOINCREMENT
    );

    CREATE TABLE IF NOT EXISTS checklist (
        checklist_id INTEGER,
        item_name TEXT NOT NULL,
        item_num INTEGER,
        check_bool INTEGER
    );
    '''

    # スクリプトをまとめて実行
    cursor.executescript(sql_script)

    conn.commit()
    conn.close()
    print("2つのテーブルをまとめて作成しました！")
