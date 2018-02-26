function isNumeric(s) {
   return s.search(/^[+-]?\d+(\.\d*)?[Ee]{1}[+-]?\d+$/) === 0 || s.search(/^[+-]?\d+(\.\d*)?$/) === 0
}