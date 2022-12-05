import eel
import db


eel.init("web")

@eel.expose
def create_table(json_string):
    "Retorna objeto tabela que foi criada"
    resposta = db.create_table(json_string=json_string)
    return resposta

eel.start("index.html")
