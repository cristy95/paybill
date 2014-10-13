from dosql import *
import cgi
try:
    import json
except ImportError:
    import simplejson as json

def index(req, PLDT_acct_num):

  PLDT_acct_num = cgi.escape(PLDT_acct_num)

  x = doSql()
  rets = x.execqry("select * from get_balance(" + PLDT_acct_num + ");", False)

  result = []
  for ret in rets:
    stringed = map(str, ret)
    result.append(stringed)

  return json.dumps(result)
