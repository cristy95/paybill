from dosql import *
import cgi
import json

def index(req, transactnum):
    transactnum = cgi.escape(transactnum)

    x = doSql()
    receipt = x.execqry("select * from get_transaction(" + transactnum + ");",  'False')

    result = []
    for rec in receipt:
        stringed = map(str, rec)
        result.append(stringed)

    return json.dumps(result)
