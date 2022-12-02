import eel
import sqlite3

con = sqlite3.connect("sistema_python.db")
cur = con.cursor()
res = cur.execute("SELECT name FROM sqlite_master")

print(res.fetchone())

eel.init("web")

@eel.expose
def login():
    return eel.BOTTLE_ROUTES

eel.start("index.html")
