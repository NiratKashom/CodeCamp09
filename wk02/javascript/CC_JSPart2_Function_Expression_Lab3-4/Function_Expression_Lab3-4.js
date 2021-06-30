// lab 3
let input = prompt('input role')
function checkPermission (role, yes, no) {
  if ( role === "ADMIN") yes();
  else no();
};
function canAccess() {
  alert('ACCESS GRANTED');
};
function notAccess() {
  alert('ACCESS DENIED');
};

checkPermission(input, canAccess, notAccess);

// lab 4
