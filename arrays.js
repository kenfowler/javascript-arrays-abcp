var chocolateBars = [ 'snickers', 'hundred grand', 'kitkat', 'skittles' ]
function addElementToBeginningOfArray(array, element) {
  return [element,...array]
}
function destructivelyAddElementToBeginningOfArray(array,element) {
  var foo = [element,...array]
  array = foo
  return array
}