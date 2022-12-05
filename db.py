import pandas as pd
import json
import os
import time

if os.path.isdir("db") == False:
    os.mkdir("./db")
    time.sleep(1)

def create_table(json_string):
    "json_string = '{'table_name':['col_1','col_2']}'"
    table_list = os.listdir("db")

    json_dict = json.loads(json_string)

    for chave in json_dict:

        table_name = chave
        table_fields = json_dict[chave]
    
    if table_name not in table_list:

        df_table = {}
        for col in table_fields:
            df_table.update({col:[]})

        retorno = df_table

        df_table = pd.DataFrame(data=df_table)
        df_table.to_csv(f"db/{table_name}.csv",";",index=False)
    
    if table_name in table_list:

        retorno = "Tabela ja existe !"

    return retorno

if __name__=='__main__':
    create_table()
