from get_balance import index
import unittest

class Get_balance_Test(unittest.TestCase):
  def runTest(get_balance):
  """Get Balance Test """
  get_balance.failUnless(index('1') == 2000.0, "Fail")

def suite():
  suite_=unittest.TestSuite()
  suite_.AddTest(Get_balance_Test())
  return suite_

runner = unittest.TextTextRunner()
test_suite = suite()
runner.run(test_suite)
