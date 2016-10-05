G.users = {

};

function add (a, b) { return a + b; };

C([10, 20, 30], 10, [B.remove]);
C([10, 20, 30], [B.remove(10)]);
C([10, 20, 30], 20, [B.remove]);

C(10, [function(v) {return MR(v, 20)}, console.log()])


C([10, 20, 30, 40],
  [
    sum
  ]);


C('hi', 10, 20, [B.args(1, 2), function(a, b) { return a + b; }]);
var keys = B.map([C.args1, I]);
var values = B.map([B.args(0), I]);


C.unset = function(obj, key) {
  var val = obj[key];
  delete obj[key];
  return MR(val, key, obj);
};
