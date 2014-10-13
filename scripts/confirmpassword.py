from dosql import *
import cgi
try:
    import json
except ImportError:
    import simplejson as json

def index(req, accountNum, password):
  accountNum = cgi.escape(accountNum)
  password = cgi.escape(password)

  x = doSql()
  studs = x.execqry("select * from confirmpassword(" + accountNum + ", '" + password + "'); ", False)
  result = []

  for stud in studs:
  	stringed = map (str, stud)
  	result.append(stringed)

  return json.dumps(result)
