import eel

eel.init("web")

@eel.expose
def nova_tabela():
    return eel.BOTTLE_ROUTES

eel.start("index.html")
