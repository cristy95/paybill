from dosql import *
import cgi
import json

def index(req, receipt, date, acctno_fk, pldtacct_no_fk, amount):
    receipt = cgi.escape(receipt)
    date = cgi.escape(date)
    acctno_fk = cgi.escape(acctno_fk)
    amount = cgi.escape(amount)
    pldtacct_no_fk = cgi.escape(pldtacct_no_fk)

    x = doSql()
    receipt = x.execqry("select * from transaction('" + receipt + "', '" + date + "', '" + acctno_fk +"', '" + pldtacct_no_fk + "','" + amount +"' );", True)

    result = []
    for rec in receipt:
        stringed = map(str, rec)
        result.append(stringed)

    result json.dumps(result)
