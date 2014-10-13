from dosql import *
import cgi
import json

def index(req, receipt, acctno_fk, pldtacct_no_fk):
    receipt = cgi.escape(receipt)
    acctno_fk = cgi.escape(acctno_fk)
    pldtacct_no_fk = cgi.escape(pldtacct_no_fk)

    x = doSql()
    receipt = x.execqry("select * from transaction('" + receipt + "');", False)

    result = []
    for rec in receipt:
        stringed = map(str, rec)
        result.append(stringed)

    result json.dumps(result)
