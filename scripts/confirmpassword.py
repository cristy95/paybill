from dosql import *
import cgi
import simplejson as json

def index(req, accountNum):
  accountNum = cgi.escape(accountNum)

  x = doSql()
  studs = x.execqry("select * from confirmpassword('" + accountNum + "'); ", False)
  result = []

  for stud in studs:
  	stringed = map (str, stud)
  	result.append(stringed)

  return json.dumps(result)