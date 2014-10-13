from dosql import *
import cgi
import json

def index(req, date,  amount, pldtacct_no_fk, acctno_fk):
    acctno_fk = cgi.escape(acctno_fk)
    amount = cgi.escape(amount)
    pldtacct_no_fk = cgi.escape(pldtacct_no_fk)
    x = doSql()
    receipt = x.execqry("select * from create_transaction('" + amount +"', '" + pldtacct_no_fk + "', '" + acctno_fk +"');", True)

    result = []
    for rec in receipt:
        stringed = map(str, rec)
        result.append(stringed)

    return json.dumps(result)
