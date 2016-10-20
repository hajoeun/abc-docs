/*Functions List variable declaration*/
var funcs = C.filter(C.keys(F), function(val) { return val !== 'F' && val !== 'G' });

/*Section Data declaration*/
var section_data = {
  A : {
    func : {
      title : 'A',
      usage : 'A([args...], function), A([args...], [function...])',
      egs : [{
        ds: '`A`는 `apply`와 비슷합니다. 배열이나 객체를 사용할 수 있습니다.',
        cd: '\
                  |function add(a, b) {\
                  |__return a + b; \
                  |}\
                  |\
                  |var r1 = A([20,2], add);\
                  |console.log(r1); // 22'}, {
        ds : '왼쪽에서 오른쪽, 위에서 아래로 읽는게 편안합니다. 그래서 `A`는 인자와 함수 사용에 대한 방향을 바꾸었습니다.',
        cd : '\
                  |function minus(a, b) {\
                  |__return a - b;\
                  |}\
                  |\
                  |var r2 = A([20, 5], function() {\
                  |__return A(arguments, minus);\
                  |});\
                  |console.log(r2); // 15'}]
    },
    methods: {}
  },
  B : {
    func : {
      title : 'B',
      usage : 'B(args..., function), B(args..., [functions...])',
      egs : [{
        ds: '`B`는 `this`를 제외한 `bind`라고 생각하면 쉽습니다. 혹은 underscore의 `_.partial`과 유사합니다.',
        cd: '\
                  |var f2 = B(X, 10, minus);\
                  |var r2 = f2(20);\
                  |\
                  |console.log(r2); // 10\
                  |\
                  |function minus2(a, b, c, d) {\
                  |__return a - b - c - d;\
                  |}\
                  |\
                  |var f3 = B(4, X, X, 1, minus2);\
                  |var r3 = f3(3, 2);\
                  |console.log(r3); // -2'}, {
        ds : '`B`를 `X`와 함께 사용해보세요. `X`를 통해 이후 실행시에 받게될 인자의 자리를 지정해둘 수 있습니다.',
        cd : '\
                  |var f2 = B(X, 10, minus);\
                  |var r2 = f2(20);\
                  |\
                  |console.log(r2); // 10\
                  |\
                  |function minus2(a, b, c, d) {\
                  |__return a - b - c - d;\
                  |}\
                  |\
                  |var f3 = B(4, X, X, 1, minus2);\
                  |var r3 = f3(3, 2);\
                  |console.log(r3); // -2'}]
    },
    methods: {
      args : {
        title : 'args',
        usage : 'B.args(index)',
        egs : [{
          ds: '`B.args`는 인덱스 값에 맞춰 매개변수의 값을 반환하는 함수를 만듭니다.',
          cd: '\
                  |var arg0 = B.args(0);\
                  |var r1 = arg0(10, 20, 30);\
                  |console.log(r1); // 10\
                  |\
                  |var arg3 = B.args(3);\
                  |var r2 = arg3(10, 20, 30, 40);\
                  |console.log(r2); // 40\
                  |\
                  |var arg0_3 = B.args(0, 3);\
                  |var r3 = arg0_3(10, 20, 30, 40);\
                  |console.log(r3); // [10, 40]\
                  |\
                  |C(\'hi\', 10, 20, [B.args(1, 2), function(a, b) { return a + b; }]);\
                  |var keys = B.map([B.args(1), I]);\
                  |var values = B.map([B.args(0), I]);'}]
      },
      remove : {
        title : 'remove',
        usage : 'B.remove(value)',
        egs : [{
          ds: '`B.remove`는 최초로 발견한 값 하나를 제거하는 함수를 만듭니다. (배열을 위한 unset)',
          cd: '\
                  |var r1 = C([10, 20, 30], [B.remove(10), B.args(2)]);\
                  |console.log(r1); // [20, 30]'}]
      },
      unset : {
        title : 'unset',
        usage : 'B.unset(key) -> function(obj)',
        egs : [{
          ds: '`B.unset`은 key와 그 값을 제거하는 함수를 만듭니다. (배열을 위한 remove)',
          cd: '\
                  |-----------------------------------\
                  |-----------------------------------'}]
      },
      set : {
        title : 'set',
        usage : 'B.set(key, value) -> f',
        egs : [{
          ds: '`B.set`은 key, value로 이루어진 객체를 만드는 함수를 만듭니다. (이 함수에 또다른 객체를 넣어 실행하면 그 함수에 추가됩니다.)-원본바뀜',
          cd: '\
                  |-----------------------------------\
                  |-----------------------------------'}]
      },
      extend : {
        title : 'extend',
        usage : 'B.extend(object...) (이 함수에 다른요소가 더해질 객체(target)를 넣음)',
        egs : [{
          ds: '`B.extend`은 객체들의 키와 값을 추가(확장)하는 함수를 만듭니다.',
          cd: "\
                  |var user = { name: 'JE'};\
                  |C(user, B.extend({ age: 27 }));\
                  |console.log(user); // { name: 'JE', age: 27 }"}]
      },
      defaults : {
        title : 'defaults',
        usage : 'B.defaults(object...)',
        egs : [{
          ds: '`B.defauls`는 원본 객체의 값을 변경하지 않고 확장(extend)하는 함수를 만듭니다.',
          cd: "\
                  |var user = { name: 'JE', age:27 }\
                  |C(user, B.defaults({ age: 32 }, { gender: 'M' }));\
                  |console.log(user) // { name: 'JE', age: 27 , gender: 'M' }"}]
      },
      select : {
        title : 'select',
        usage : 'B.select(selector)',
        egs : [{
          ds: '`B.select`은 뭐하는거야?',
          cd: '\
                  |-----------------------------------\
                  |-----------------------------------'}]
      },
      indent : {
        title : 'indent',
        usage : 'B.indent(function...)',
        egs : [{
          ds: 'indent',
          cd: "\
                  |var res = 1;;\
                  |console.log(res);"}]
      },
      args_pass : {
        title : 'args_pass',
        usage : 'B.args_pass(function)',
        egs : [{
          ds: '`B.args_pass`는 arguments객체를 그대로 뱉는 함수를 만듭니다.',
          cd: "\
                  |var res = C(10, 20, 30, B.args_pass(function(){ console.log(arguments); }))\
                  |console.log(res); // [10 20 30]"}]
      },
      // 깊은 값은 안가져옴
      val : {
        title : 'val',
        usage : 'B.val(key), B.V(key), B.v(key)',
        egs : [{
          ds: '`B.val`는 key를 찾아 그 값을 출력하는 함수를 만듭니다.',
          cd: "\
                  |var res = C({ movie: 'Sing Street', song: 'Up' }, B.val('song'))\
                  |console.log(res); // Up"}]
      },
      method : {
        title : 'method',
        usage : 'B.method(method name), B.M(method name), B.m(method name), ',
        egs : [{
          ds: '`B.method`는 객체가 가지고 있는 메소드를 호출하는 함수를 만듭니다.',
          cd: "\
                  |var theme = { color: 'yellow', get_color : function() { return this.color; } }\
                  |var res = C(theme, B.method('get_color'));\
                  |console.log(res); // yellow\
                  |\
                  |var user = { name: 'HA', sayName: function() { console.log('My name is ' + this.name + '!'); } };\
                  |C(user, B.M('sayName')); // My name is HA!"}]
      },
      map : {
        title : 'map',
        usage : 'B.map(iteratee)',
        egs : [{
          ds: '`B.map`은 list를 매핑해주는 함수를 만듭니다.',
          cd: "\
                  |function add10(val) { return val + 10; }\
                  |var res = C([1, 2, 3], B.map(add10));\
                  |console.log(res); // [11, 12, 13]"}]
      },
      all : { // B.all의 결과는 배열인데, 뒤에 함수가 더 있으면 그 배열이 펼쳐져서 들어감
        title : 'all',
        usage : 'B.all(function...)',
        egs : [{
          ds: '`B.all`은 여려 개의 함수에 같은 인자를 넘겨서 multiple results로 결과를 반환하는 함수를 만듭니다.',
          cd: "\
                  |var res = C('Hello', B.all(\
                  |_________function(str) { return str + ', Bonjour.'; }, \
                  |_________function(str) { return str + ', Nihao.'; },\
                  |_________function(str) { return str + ', 안녕하세요.'; })); \
                  |console.log(res) // ['Hello, Bonjour.', 'Hello, Nihao.', 'Hello, 안녕하세요.']\
                  |\
                  |var greeting = 'Hello';\
                  |C(greeting, [B.all(\
                  |__________________function(str) { return str + ', Bonjour.'; }, \
                  |__________________function(str) { return str + ', Nihao.'; },\
                  |__________________function(str) { return str + ', 안녕하세요.'; }),\
                  |_____________function(f1, f2, f3){ return arguments; },\
                  |_____________B.each(function(val) { console.log(val); })\
                  ]);"}]
      },
      spread : {
        title : 'spread',
        usage : 'B.spread(function...)',
        egs : [{
          ds: '`B.spread`는 여러 개의 함수에 인자를 하나씩 나눠주고 배열로 결과를 반환하는 함수를 만듭니다.',
          cd: "\
                  |var res = C('Bonjour', 'Nihao', '안녕하세요', B.spread(\
                  |_________function(str) { return 'Hello, ' + str; }, \
                  |_________function(str) { return 'Hello, ' + str; },\
                  |_________function(str) { return 'Hello, ' + str; })); \
                  |console.log(res) // ['Hello, Bonjour.', 'Hello, Nihao.', 'Hello, 안녕하세요.']"}]
      },
      reduce : {
        title : 'reduce',
        usage : 'B.reduce(iteratee)',
        egs : [{
          ds: '`B.reduce`는 list를 순회하며 단일 값으로 합친 결과를 반환하는 함수를 만듭니다.',
          cd: "\
                  |var res = C([1,2,3,4,5], B.reduce(function(memo, val) { return memo + val; }))\
                  |console.log(res); // 15"}]
      },
      each : {
        title : 'each',
        usage : 'B.each(iteratee)',
        egs : [{
          ds: '`B.each`는 list의 각 요소를 iteratee 함수로 실행하는 함수를 만듭니다.',
          cd: "\
                  |var res = C([1, 2, 3], B.each(function(val) { console.log(val); })); // 1, 2, 3\
                  |console.log(res); // [1, 2, 3]"}]
      },
      filter : {
        title : 'filter',
        usage : 'B.filter(predicate)',
        egs : [{
          ds: '`B.filter`는 list를 순회하며 조건에 맞는 요소만 추출하는 함수를 만듭니다.',
          cd: "\
                  |var users = [{ name: 'CJ', age: 32 },\
                  |_____________{ name: 'PJ', age: 28 },\
                  |_____________{ name: 'BJ', age: 32 },\
                  |_____________{ name: 'HA', age: 25 },\
                  |_____________{ name: 'JE', age: 27 },\
                  |_____________{ name: 'JM', age: 32 }]\
                  |var res = C(users, B.filter(function(val) { return val.age > 30; }));\
                  |console.log(res); // [{ name: 'CJ', age: 32 }, { name: 'BJ', age: 32 }, { name: 'JM', age: 32 }]"}]
      },
      reject : {
        title : 'reject',
        usage : 'B.reject(predicate)',
        egs : [{
          ds: '`B.reject`는 list를 순회하며 조건에 맞는 요소를 제외하고 나머지를 추출하는 함수를 만듭니다.',
          cd: "\
                  |var res = C(users, B.reject(function(val) { return val.age > 30; }));\
                  |console.log(res); // [{ name: 'PJ', age: 28 }, { name: 'HA', age: 25 }, { name: 'JE', age: 27 }]"}]
      },
      find : {
        title : 'find',
        usage : 'B.find(predicate)',
        egs : [{
          ds: '`B.find`는 list를 순회하며 조건에 맞는 값 하나를 찾아 반환하는 함수를 만듭니다.',
          cd: "\
                  |var res = C(users, B.find(function(val) { return val.age === 32; }));\
                  |console.log(res); // { name: 'CJ', age: 32 }"}]
      },
      findKey : {
        title : 'findKey',
        usage : 'findKey(predicate), find_key(predicate)',
        egs : [{
          ds: '`B.findKey`는 특정 값을 가지고 있는 키를 반환하는 함수를 만듭니다.',
          cd: "\
                  |var obj = { name: 'JE', age: 27 }\
                  |C(obj, B.findKey(function(val) { return val == 'JE'; })); // 'name'"}]
      },
      findIndex : {
        title : 'findIndex',
        usage : 'findIndex(predicate), find_index(predicate), find_i(predicate)',
        egs : [{
          ds: '`B.findIndex`는 특정 값을 가지고 있는 인덱스를 반환하는 함수를 만듭니다.',
          cd: "\
                  |var ary = [10, 20, 30]\
                  |C(ary, B.findIndex(function(val) { return val == 30; })); // 2"}]
      },
      some : {
        title : 'some',
        usage : 'B.some(predicate)',
        egs : [{
          ds: '`B.some`은 특정 조건에 부합하는 값이 하나라도 존재하는지 판단하여 true/false를 반환하는 함수를 만듭니다.',
          cd: "\
                  |var res1 = C([1,2,3,4], B.some(function(val) { return val%2 == 0; }));\
                  |console.log(res1); // true\
                  |\
                  |var res2 = C([1,3,5,7,9], B.some(function(val) { return val%2 == 0; }));\
                  |console.log(res2); // false"}]
      },
      every : {
        title : 'every',
        usage : 'B.every(predicate)',
        egs : [{
          ds: '`B.every`는 모든 요소가 특정 조건에 부합하는지 판단하여 true/false를 반환하는 함수를 만듭니다.',
          cd: "\
                  |var res1 = C([1,2,3,4], B.every(function(val) { return val%2 == 0; }));\
                  |console.log(res1); // false\
                  |\
                  |var res2 = C([2,4,6,8], B.every(function(val) { return val%2 == 0; }));\
                  |console.log(res2); // true"}]
      },
      uniq : {
        title : 'uniq',
        usage : 'B.uniq(iteratee)',
        egs : [{
          ds: '`B.uniq`는 iteratee 결과가 유일한 값을 가지는 요소들을 배열 형태로 반환하는 함수를 만듭니다.',
          cd: "\
                  |var res = C([1,2,2,2,3,3,4,5,5], B.uniq(function(val) { return val+10; }));\
                  |console.log(res); //[1,2,3,4,5]"}]
      },
      tap : {
        title : 'tap',
        usage : 'B.tap(iteratee..)',
        egs : [{
          ds: '',
          cd: "\
                  |var res = C([10,20,30], [function(ary) { console.log(ary); return ary; },\
                  |_________________________B.tap(function(a) { console.log(a); /*return ary[0]*/}),\
                  |_________________________function(a) { console.log(a); return a; }]);"}]
      },
      boomerang : {
        title : 'boomerang',
        usage : 'B.boomerang()',
        egs : [{
          ds: '',
          cd: "\
                  |\
                  |\
          "}]
      },
      is : {
        title : 'is',
        usage : 'B.is(value)',
        egs : [{
          ds: '`B.is`는 주어진 value 값과 일치하는지 비교하는 함수를 만듭니다.',
          cd: "\
                  |var res = C([10, 20, 30], [B.findIndex(function(val) { return val == 100; }), \
                  |___________________________B.is(-1)]);\
                  |console.log(res); // true"}]
      },
      isnt : {
        title : 'isnt',
        usage : 'B.isnt(value)',
        egs : [{
          ds: '`B.isnt`는 주어진 value 값과 일치하지 않는지 비교하는 함수를 만듭니다.',
          cd: "\
                  |var res = C([10, 20, 30], [B.findIndex(function(val) { return val == 100; }), \
                  |___________________________B.isnt(-1)]);\
                  |console.log(res); // false"}]
      },
      delay : {
        title : 'delay',
        usage : 'B.delay(function, time)',
        egs : [{
          ds: 'sa',
          cd: "\
                  |var delay1s = B.delay(1000)\
                  |delay1s(function() { console.log('Hi~'); }) // 1초 후에 \"Hi~\" 출력"}]
      },
      notice : {
        title : 'notice',
        usage : 'B.notice(), B.noti(), B.Noti()',
        egs : [{
          ds: 'ss',
          cd: "\
                  |\
                  |\
          "}]
      }

    }
  },
  C : {
    func : {
      title : 'C',
      usage : 'C(args..., function), A(args..., [function...])',
      egs : [{
        ds: '`C`는 this를 제외한 `call`이라고 생각하면 쉽습니다.',
        cd: '\
                  |function minus(a, b) {\
                  |__return a - b; \
                  |}\
                  |\
                  |var r1 = A(20,10, minus);\
                  |console.log(r1); // 10'}]
    },
    methods: {
      isArguments :
      {
        title : 'isArguments',
        usage : 'C.isArguments(object)',
        egs : [{
          ds: "`C.isArguments`는 arguments 객체를 판별하는 함수입니다.",
          cd: "\
                  |(function() { return C.isArguments(arguments); })([1,2,3]) // true\
                  |\
                  |C.isArguments([1,2,3]) // false"}]
      },
      isFunction :
      {
        title : 'isFunction',
        usage : 'C.isFunction(object)',
        egs : [{
          ds: "`C.isFunction`은 함수를 판별하는 함수입니다.",
          cd: "\
                  |C.isFunction(C.map) // true"}]
      },
      isString :
      {
        title : 'isString',
        usage : 'C.isString(object), C.is_string(object)',
        egs : [{
          ds: "`C.isString`은 문자열을 판별하는 함수입니다.",
          cd: "\
                  |C.isString('Hello ABC!') // true"}]
      },
      isNumber :
      {
        title : 'isNumber',
        usage : 'C.isNumber(object)',
        egs : [{
          ds: "`C.isNumber`는 숫자를 판별하는 함수입니다.",
          cd: "\
                  |C.isNumber(10 * 2) // true"}]
      },
      isDate :
      {
        title : 'isDate',
        usage : 'C.isDate(object)',
        egs : [{
          ds: "`C.isDate`는 날짜 객체를 판별하는 함수입니다.",
          cd: "\
                  |C.isDate(new Date()) // true"}]
      },
      isRegExp :
      {
        title : 'isRegExp',
        usage : 'C.isRegExp(object)',
        egs : [{
          ds: "`C.isRegExp`는 정규표현식을 판별하는 함수입니다.",
          cd: "\
                  |C.isRegExp(/.*?/) // true"}]
      },
      isError :
      {
        title : 'isError',
        usage : 'C.isError(object)',
        egs : [{
          ds: "`C.isError`는 에러 객체를 판별하는 함수입니다.",
          cd: "\
                  |try { \
                  |__throw new TypeError('Syntax error');\
                  |} catch (e) {\
                  |__C.isError(e); // true\
                  |}"}]
      },
      isObject :
      {
        title : 'isObject',
        usage : 'C.isObject(object), C.is_object(object)',
        egs : [{
          ds: "`C.isObject`는 객체를 판별하는 함수입니다.",
          cd: "\
                  |C.isObject({}); // true\
                  |C.isObject(123); // false"}]
      },
      has:
      {
        title : 'has',
        usage : 'C.has(object, key)',
        egs : [{
          ds: "`C.has`는 객체가 특정 키를 가지고 있는지 판별하는 함수입니다.",
          cd: "\
                  |C.has({a:10, b:20, c:30}, 'b'); // true\
                  |C.has({a:10, b:20, c:30}, 'd'); // false"}]
      },
      keys:
      {
        title : 'keys',
        usage : 'C.keys(object)',
        egs : [{
          ds: "`C.keys`는 객체가 가진 키들을 배열로 반환하는 함수입니다.",
          cd: "\
                  |var res = C.keys({a:10, b:20, c:30});\
                  |console.log(res); // ['a', 'b', 'c']"}]
      },
      isArrayLike:
      {
        title : 'isArrayLike',
        usage : 'C.isArrayLike(list), C.is_array_like(list)',
        egs : [{
          ds: "`C.isArrayLike`는 유사 배열을 판별하는 함수입니다.",
          cd: "\
                  |(function() { return C.isArrayLike(arguments); })(1, 2, 3) // true\
                  |C.isArrayLike([1, 2, 3]); // true\
                  |C.isArrayLike({a: 1, b: 2}); // false"}]
      },
      rest:
      {
        title : 'rest',
        usage : 'C.rest(array)',
        egs : [{
          ds: "`C.rest`는 배열에서 첫번째 요소를 제외한 나머지 값을 반환하는 함수입니다.",
          cd: "\
                  |var res = C.rest([1, 2, 3, 4]);\
                  |console.log(res); // [2, 3, 4]"}]
      },
      values:
      {
        title : 'values',
        usage : 'C.values(object)',
        egs : [{
          ds: "`C.values`는 객체가 가지는 프로퍼티 값을 배열로 반환하는 함수입니다.",
          cd: "\
                  |var res = C.values({ name: 'HA', age: 25, gender: 'F' });\
                  |console.log(res); // ['HA', 25, 'F']"}]
      },
      toArray:
      {
        title : 'toArray',
        usage : 'C.toArray(list), C.to_array(list)',
        egs : [{
          ds: "`C.toArray`는 arguments 객체를 배열로 변환하는 함수입니다.",
          cd: "\
                  |(function(){ return C.toArray(arguments).slice(1); })(1, 2, 3, 4) // [2, 3, 4]"}]
      },
      object:
      {
        title : 'object',
        usage : 'C.object(list, list)',
        egs : [{
          ds: "`C.object`는 배열을 객체로 변환하는 함수입니다.",
          cd: "\
                  |C.object(['a','b','c'], [1, 2, 3]); // {a: 1, b: 2, c: 3}"}]
      },
      escape:
      {
        title : 'escape',
        usage : 'C.escape(string)',
        egs : [{
          ds: "`C.escape`는 특수한 문자열을 엔티티 값으로 치환하는 함수입니다.",
          cd: "\
                  |var res = C.escape('HA & JE');\
                  |console.log(res); // 'HA &amp; JE'"}] // HTML에 그리면 'HA & JE'로 나옴..
      },
      uniqueId:
      {
        title : 'uniqueId',
        usage : 'C.uniqueId(string), C.unique_id(string)',
        egs : [{
          ds: "`C.uniqueId`는 유니크한 아이디 값을 생성하는 함수입니다.",
          cd: "\
                  |var res = C.uniqueId('mp_');\
                  |console.log(res); // mp_4"}]
      },
      isArray:
      {
        title : 'isArray',
        usage : 'C.isArray(object), C.is_array(object)',
        egs : [{
          ds: "`C.isArray`는 배열을 판별하는 함수입니다.",
          cd: "\
                  |(function() { return C.isArray(arguments); })(1, 2, 3) // false\
                  |C.isArray([1, 2, 3]) // true"}]
      },
      wrapArray:
      {
        title : 'wrapArray',
        usage : 'C.wrapArray(value), C.wrap_arr(value)',
        egs : [{
          ds: "`C.wrapArray`는 매개변수를 배열로 감싸 반환하는 함수입니다.",
          cd: "\
                  |var res = C.wrapArray({a: 1, b: 2, c: 3});\
                  |console.log(res); // [{a: 1, b: 2, c: 3}]"}]
      },
      lambda:
      {
        title : 'lambda',
        usage : 'C.lambda(string)',
        egs : [{
          ds: "`C.lambda`는 문자열로 람다 함수(화살표 함수)를 생성하여 반환하는 함수입니다.",
          cd: "\
                  |var add10 = C.lambda('x => x + 10');\
                  |var res = add10(4);\
                  |console.log(res); // 14"}]
      },
      extend:
      {
        title : 'extend',
        usage : 'C.extend(object, sources...)',
        egs : [{
          ds: "`C.extend`는 첫번째 매개변수로 전달된 객체에 소스로 전달된 객체를 덧붙여 객체를 확장하는 함수입니다.",
          cd: "\
                  |var res = C.extend({a:10}, {b:20}, {c:20, d:30});\
                  |console.log(res); // {a: 10, b: 20, c: 20, d: 30}"}]
      },
      defaults:
      {
        title : 'defaults',
        usage : 'C.defaults(object, sources...)',
        egs : [{
          ds: "`C.defaults`는 원본 객체의 값을 변경하지 않고 객체를 확장하는 함수입니다.",
          cd: "\
                  |var res = C.defaults({a:10}, {b:20}, {a:20, c:30});\
                  |console.log(res); // {a: 10, b: 20, c: 30}"}]
      },
      clone:
      {
        title : 'clone',
        usage : 'C.clone(object)',
        egs : [{
          ds: "`C.clone`는 얕은 복사로 객체의 사본을 만드는 함수입니다.",
          cd: "\
                  |var user1 = { name: 'JE', age: 27 };\
                  |var user2 = C.clone(user1);\
                  |user2.name = 'HA'\
                  |console.log(user1.name, user2.name); // 'JE' 'HA'"}]
      },
      method:
      {
        title : 'method',
        usage : 'C.method(object, string)',
        egs : [{
          ds: "`C.method`는 객체가 가진 메소드를 실행하는 함수입니다.",
          cd: "\
                  |var user1 = { name: 'HA', sayName: function() { console.log(this.name); } };\
                  |C.method(user1, 'sayName'); // HA"}]
      },
      args:
      {
        title : 'args',
        usage : 'C.args(value...)',
        egs : [{
          ds: "`C.args`는 arguments 객체를 반환하는 함수입니다.",
          cd: "\
                  |var res = C.args(1, 2, 3);\
                  |console.log(res); // [1, 2, 3]"}]
      },
      arr_or_args_to_arr: // 이름에 통일성이 없는데...
      {
        title : 'arr_or_args_to_arr',
        usage : 'C.arr_or_args_to_arr(list)',
        egs : [{
          ds: "`C.arr_or_args_to_arr`는 배열 혹은 arguments 객체를 배열로 변환하는 함수입니다.",
          cd: "\
                  |var res1 = (function(arr) { return C.arr_or_args_to_arr(arr); })([1, 2, 3]);\
                  |console.log(res1); // [1, 2, 3]\
                  |\
                  |var res2 = (function(arr) { return C.arr_or_args_to_arr(arguments); })([1, 2, 3]);\
                  |console.log(res2); // [[1, 2, 3]]"}]
      },
      val:
      {
        title : 'val',
        usage : 'C.val(object, key), C.v(object, string)',
        egs : [{
          ds: "`C.val`은 객체가 가진 키에 맞는 프로퍼티를 반환하는 함수입니다.",
          cd: "\
                  |var user1 = { name: 'HA', age: 25 };\
                  |var res = C.val(user1, 'name');\
                  |console.log(res); // 'HA'"}]
      },
      argsN:
      {
        title : 'argsN',
        usage : 'C.args0(values...), C.args1(values...), C.args2(values...), C.args3(values...), C.args4(values...)',
        egs : [{
          ds: "`C.argsN`은 인자로 전달 받은 값들 중 N-1번째에 해당하는 값을 반환하는 함수입니다.",
          cd: "\
                  |var res0 = C.args0(10, 20, 30);\
                  |console.log(res0); // 10\
                  |\
                  |var res2 = C.args2(10, 20, 30);\
                  |console.log(res2); // 30"}]
      },
      set:
      {
        title : 'set',
        usage : 'C.set(object, key, value | function)',
        egs : [{
          ds: "`C.set`은 새로운 키와 값을 객체에 추가하는 함수입니다.",
          cd: "\
                  |var student1 = { name: 'JE' };\
                  |C.set(student1, 'score', 80); \
                  |console.log(student1) // { name: 'JE', score: 80 }\
                  |\
                  |C.set(student1, 'grade', function(obj) { return obj.score > 90 ? 'A' : 'B';}); \
                  |console.log(student1) // { name: 'JE', score: 80, grade: 'B' }"}]
      },
      unset:
      {
        title : 'unset',
        usage : 'C.unset(object, key)',
        egs : [{
          ds: "`C.unset`은 객체에서 특정 키의 프로퍼티를 삭제하는 함수입니다.",
          cd: "\
                  |var student1 = { name: 'JE', score: 80, grade: 'B' };\
                  |C.set(student1, 'grade'); \
                  |console.log(student1) // { name: 'JE', score: 80, grade: undefined }"}]
      },
      remove:
      {
        title : 'remove',
        usage : 'C.remove(array, value)',
        egs : [{
          ds: "`C.remove`는 배열에서 원하는 값을 삭제하는 함수입니다.",
          cd: "\
                  |var nums = [10, 20, 30, 40];\
                  |C.remove(nums, 30); \
                  |console.log(nums) // [10, 20, 40]"}]
      },
      pop:
      {
        title : 'pop',
        usage : 'C.pop(array)',
        egs : [{
          ds: "`C.pop`은 배열에서 마지막 요소를 삭제하는 함수입니다.",
          cd: "\
                  |var nums = [10, 20, 30, 40];\
                  |C.pop(nums); \
                  |console.log(nums) // [10, 20, 30]"}]
      },
      shift:
      {
        title : 'shift',
        usage : 'C.shift(array)',
        egs : [{
          ds: "`C.shift`은 배열에서 처음 요소를 삭제하는 함수입니다.",
          cd: "\
                  |var nums = [10, 20, 30, 40];\
                  |C.shift(nums); \
                  |console.log(nums) // [20, 30, 40]"}]
      },
      push:
      {
        title : 'push',
        usage : 'C.push(array, value | function)',
        egs : [{
          ds: "`C.push`는 배열의 마지막에 새로운 요소를 추가하는 함수입니다.",
          cd: "\
                  |var nums = [10, 20, 30];\
                  |C.push(nums, 40); \
                  |console.log(nums) // [10, 20, 30, 40]"}]
      },
      unshift:
      {
        title : 'unshift',
        usage : 'C.unshift(array, value | function)',
        egs : [{
          ds: "`C.unshift`는 배열의 처음에 새로운 요소를 추가하는 함수입니다.",
          cd: "\
                  |var nums = [20, 30, 40];\
                  |C.unshift(nums, 10); \
                  |console.log(nums) // [10, 20, 30, 40]"}]
      },
      select:
      {
        title : 'select',
        usage : 'C.select(object, string), C.sel(object, string)',
        egs : [{
          ds: "`C.select`는 객체의 탐색을 쉽게 만들어주는 함수입니다. 탐색의 대상이 되는 객체와 탐색의 경로가 되는 문자열을 인자로 받습니다.",
          cd: "\
                  |var users = [\
                  |__{\
                  |____id: 1,\
                  |____name: 'BJ',\
                  |____post_count: 2,\
                  |____posts: [\
                  |______{ id: 2, body: '하이2', comments: [{ id: 1, body: '코멘트1' }, { id: 2, body: '코멘트2' }] },\
                  |______{ id: 1, body: '하이', comments: [{ id: 3, body: '코멘트3' }] },\
                  |______{ id: 4, body: '하이4', comments: [{ id: 4, body: '코멘트4' }, { id: 5, body: '코멘트5' }] }\
                  |____]\
                  |__},\
                  |__{\
                  |____id: 2,\
                  |____name: 'PJ',\
                  |____post_count: 1,\
                  |____posts: [\
                  |______{ id: 3, body: '하이3', comments: [] }\
                  |____]\
                  |__}\
                  |];\
                  |console.log(\
                  |C.select(users, '0 -> name'), // BJ\
                  |C.select(users, '($.id==2) -> name'), // PJ\
                  |C.select(users, '($.id==2) -> posts -> 0 -> body'), // 하이3\
                  |C.select(users, '($.post_count>1) -> posts -> ($.comments.length > 1)')\
                  |// { id: 2, body: '하이2', comments: [{ id: 1, body: '코멘트1' }, { id: 2, body: '코멘트2' }] }\
                  |);"}]
      },
      
      flatten : {
        title : 'flatten',
        usage : 'C.flatten(array, option?, index?)',
        egs : [{
          ds: '`C.flatten`는 배열 안의 값을 펼쳐 단일 배열을 반환합니다. option true로 주는 경우, 1회만 flatten을 실행합니다.',
          cd: "\
                  |var r1 = C.flatten([1, [2, 3, [4]]])\
                  |console.log(r1); // [1, 2, 3, 4]\
                  |var r2 = C.flatten([1, [2, 3, [4]]], true)\
                  |console.log(r2); // [1, 2, 3, [4]]"}]
      },

      each : {
        title : 'each',
        usage : 'C.each(list, iteratee)',
        egs : [{
          ds: '`C.each`는 list를 순회하며 iteratee함수를 실행합니다.',
          cd: "\
                  |var res = C.each([1, 2, 3], function(val) { console.log(val); }); // 1, 2, 3\
                  |console.log(res); // [1, 2, 3]"}]
      },
      map : {
        title : 'map',
        usage : 'C.map(list, iteratee)',
        egs : [{
          ds: '`C.each`는 list를 순회하며 iteratee함수를 실행하고, 그 결과를 배열로 반환합니다..',
          cd: "\
                  |function add10(val) { return val + 10; }\
                  |var res = C.map([1, 2, 3], add10);\
                  |console.log(res); // [11, 12, 13]"}]
      },
      reduce : {
        title : 'reduce',
        usage : 'C.reduce(list, iteratee)',
        egs : [{
          ds: '`C.reduce`는 list를 순회하며 iteratee함수를 실행하고, 단일 값으로 합친 결과를 반환합니다.',
          cd: "\
                  |var res = C.reduce([1,2,3,4,5], function(memo, val) { return memo + val; })\
                  |console.log(res); // 15"}]
      },
      filter : {
        title : 'filter',
        usage : 'C.filter(list, predicate)',
        egs : [{
          ds: '`C.filter`는 list를 순회하며 조건에 맞는 요소만 추출하여 배열로 반환합니다.',
          cd: "\
                  |var users = [{ name: 'CJ', age: 32 },\
                  |_____________{ name: 'PJ', age: 28 },\
                  |_____________{ name: 'C.', age: 32 },\
                  |_____________{ name: 'HA', age: 25 },\
                  |_____________{ name: 'JE', age: 27 },\
                  |_____________{ name: 'JM', age: 32 }]\
                  |var res = C.filter(users, function(val) { return val.age > 30; });\
                  |console.log(res); // [{ name: 'CJ', age: 32 }, { name: 'C.', age: 32 }, { name: 'JM', age: 32 }]"}]
      },
      reject : {
        title : 'reject',
        usage : 'C.reject(list, predicate)',
        egs : [{
          ds: '`C.reject`는 list를 순회하며 조건에 맞는 요소를 제외하고 나머지를 추출하여 반환합니다.',
          cd: "\
                  |var res = C.reject(users, function(val) { return val.age > 30; });\
                  |console.log(res); // [{ name: 'PJ', age: 28 }, { name: 'HA', age: 25 }, { name: 'JE', age: 27 }]"}]
      },
      find : {
        title : 'find',
        usage : 'C.find(list, predicate)',
        egs : [{
          ds: '`C.find`는 list를 순회하며 조건에 맞는 값 하나를 찾아 반환합니다.',
          cd: "\
                  |var res = C.find(users, function(val) { return val.age === 32; });\
                  |console.log(res); // { name: 'CJ', age: 32 }"}]
      },
      findKey : {
        title : 'findKey',
        usage : 'findKey(list, predicate), find_key(list, predicate)',
        egs : [{
          ds: '`C.findKey`는 특정 값을 가지고 있는 키를 반환합니다.',
          cd: "\
                  |var obj = { name: 'JE', age: 27 }\
                  |C.findKey(obj, function(val) { return val == 'JE'; }); // 'name'"}]
      },
      findIndex : {
        title : 'findIndex',
        usage : 'findIndex(list, predicate), find_index(list, predicate), find_i(list, predicate)',
        egs : [{
          ds: '`C.findIndex`는 특정 값을 가지고 있는 인덱스를 반환합니다.',
          cd: "\
                  |var ary = [10, 20, 30]\
                  |C.findIndex(ary, function(val) { return val == 30; }); // 2"}]
      },
      some : {
        title : 'some',
        usage : 'C.some(list, predicate)',
        egs : [{
          ds: '`C.some`은 특정 조건에 부합하는 값이 하나라도 존재하는지 판단하여 true/false를 반환합니다.',
          cd: "\
                  |var res1 = C.some([1,2,3,4], function(val) { return val%2 == 0; });\
                  |console.log(res1); // true\
                  |\
                  |var res2 = C.some([1,3,5,7,9], function(val) { return val%2 == 0; });\
                  |console.log(res2); // false"}]
      },
      every : {
        title : 'every',
        usage : 'C.every(list, predicate)',
        egs : [{
          ds: '`C.every`는 모든 요소가 특정 조건에 부합하는지 판단하여 true/false를 반환합니다.',
          cd: "\
                  |var res1 = C.every([1,2,3,4], function(val) { return val%2 == 0; });\
                  |console.log(res1); // false\
                  |\
                  |var res2 = C.every([2,4,6,8], function(val) { return val%2 == 0; });\
                  |console.log(res2); // true"}]
      },
      uniq : {
        title : 'uniq',
        usage : 'C.uniq(list, iteratee)',
        egs : [{
          ds: '`C.uniq`는 iteratee 결과가 유일한 값을 가지는 요소들을 배열 형태로 반환합니다.',
          cd: "\
                  |var res = C.uniq([1,2,2,2,3,3,4,5,5], function(val) { return val+10; });\
                  |console.log(res); //[1,2,3,4,5]"}]
      },

      add : {
        title : 'add',
        usage : 'C.add(value...), C.add([value...])',
        egs : [{
          ds: '`C.add`는 모든 값의 합을 구합니다.',
          cd: '\
                  |var res = C.add(1,2,3);\
                  |console.log(res); // 6'}]
      },

      sub : {
        title : 'sub',
        usage : 'C.sub(value...), C.sub([value...])',
        egs : [{
          ds: '`C.sub`는 첫번째 값에서 나머지 값들를 뺀 결과를 구합니다.',
          cd: '\
                  |var res = C.sub(10,3,2,1);\
                  |console.log(res); // 4'}]
      },
      mod : {
        title : 'mod',
        usage : 'C.mod([value...])',
        egs : [{
          ds: '`C.mod`는 첫번째 값에서 다음 값을 나눈 나머지를 반환합니다.',
          cd: ''}]
      },

      mul : {
        title : 'mul',
        usage : 'C.mul([value...])',
        egs : [{
          ds: '`C.mul`는 모든 값의 곱을 구합니다.',
          cd: ''}]
      },

      div : {
        title : 'div',
        usage : 'C.div([value...])',
        egs : [{
          ds: '`C.not`는 첫번째 값에서 다음 값을 나눈 결과를 반환합니다.',
          cd: ''}]
      },

      parseInt : {
        title : 'parseInt',
        usage : 'C.parseInt(data)',
        egs : [{
          ds: '`C.parseInt`는 데이터를 숫자 형태로 변환합니다.',
          cd: '\
                  |var res = C.parseInt("123") + 2;\
                  |console.log(res); // 125'}]
      },
      parseIntAll : {
        title : 'parseIntAll',
        usage : 'C.parseIntAll(data...), C.parseIntAll([data...])',
        egs : [{
          ds: '`C.C.parseIntAll`은 data들을 숫자 형태로 변환한 결과를 배열로 반환합니다.',
          cd: '\
                  |var res = C.parseIntAll("123", "43", "15");\
                  |console.log(res); // [123, 43, 15]'}]
      },

      iadd : {
        title : 'iadd',
        usage : 'C.iadd(value...), C.iadd([value...])',
        egs : [{
          ds: '`C.iadd`는 value를 숫자로 변환 후, 모든 값의 합을 구합니다.',
          cd: '\
                  |var res = C.iadd("100px","20px");\
                  |console.log(res); // 120'}]
      },
      isub : {
        title : 'isub',
        usage : 'C.isub(value...), C.isub([value...])',
        egs : [{
          ds: '`C.isub`는 value를 숫자로 변환 후, 첫번째 값에서 나머지 값을 뺀 결과를 구합니다.',
          cd: '\
                  |var res = C.isub("100px","30px");\
                  |console.log(res); // 70'}]
      },

      not : {
        title : 'not',
        usage : 'C.not(value)',
        egs : [{
          ds: '`C.not`는 falsy 값(0, false, null, undefined, "" 등)인 것을 판별합니다.',
          cd: '\
                  |var r1 = C.not([100, 2]);\
                  |var r2 = C.not(undefined);\
                  |console.log(r1, r2); // false, true'}]
      },

      nnot : {
        title : 'nnot',
        usage : 'C.nnot(value)',
        egs : [{
          ds: '`C.nnot`는 falsy 값(0, false, null, undefined, "" 등)이 아닌 것을 판별합니다.',
          cd: '\
                  |var r1 = C.nnot([100, 2]);\
                  |var r2 = C.nnot(undefined);\
                  |console.log(r1, r2); // true, false'}]
      },

      and : {
        title : 'and',
        usage : 'C.and(data...), C.and([data...])',
        egs : [{
          ds: '`C.and`는 data가 모두 true값을 의미하는지 팔별합니다.',
          cd: '\
                  |var r1 = C.and(10, "foo", true);\
                  |var r2 = C.and(10, "bar", 0);\
                  |console.log(r1, r2); // true false'}]
      },

      or : {
        title : 'or',
        usage : 'C.or(data...), C.or([data...])',
        egs : [{
          ds: '`C.or`는 data 중 하나라도 true값을 의미하는지 판별합니다.',
          cd: '\
                  |var r1 = C.or(10, "foo", undefined);\
                  |var r2 = C.or(0, "", null);\
                  |console.log(r1, r2); // true false'}]
      },

      eq : {
        title : 'eq',
        usage : 'C.eq(data...), C.eq([data...])',
        egs : [{
          ds: '`C.eq`는 data값이 모두 하나로 일치하는 판별합니다. ( == 비교 )',
          cd: ''}]
      },
      neq : {
        title : 'neq',
        usage : 'C.neq(data...), C.neq([data...])',
        egs : [{
          ds: '`C.neq`는 data값이 모두 하나로 일치하지 않는지 판별합니다. ( != 비교 )',
          cd: ''}]
      },
      seq : {
        title : 'seq',
        usage : 'C.seq(data...), C.seq([data...])',
        egs : [{
          ds: '`C.seq`는 data값이 모두 하나로 일치하는 판별합니다. ( === 비교 )',
          cd: ''}]
      },

      sneq : {
        title : 'sneq',
        usage : 'C.sneq(data...), C.sneq([data...])',
        egs : [{
          ds: '`C.sneq`는 data값이 모두 하나로 일치하지 않는지 판별합니다. ( !== 비교 )',
          cd: ''}]
      },

      log : {
        title : 'log',
        usage : 'C.log(data...)',
        egs : [{
          ds: '`C.log`는 data를 로그창에 출력합니다. console.log와 똑같은 역할을 합니다.',
          cd: '\
                  |var val = "출력해 주세요";\
                  |C.log(val); // 출력해 주세요\
                  |console.log(val); // 출력해 주세요'}]
      },
      error : {
        title : 'error',
        usage : 'C.error(message)',
        egs : [{
          ds: '`C.error`는 message를 로그창에 에러 타입으로 출력합니다. console.error와 똑같은 역할을 합니다.',
          cd: '\
                  |var err = "에러입니다!";\
                  |C.error(err); // 에러입니다!\
                  |console.error(err); // 에러입니다!'}]
      },
      hi : {
        title : 'hi',
        usage : 'C.hi(datas...)',
        egs : [{
          ds: '`C.hi`는 data를 로그창에 차례대로 출력한 후, 다음 함수에게 반환합니다.(파이프라인 중, 테스트 함수로 유용합니다.)',
          cd: '\
                  |var res = C(101, 201, 300, [C.hi, \
                  |________________function(a, b, c) { \
                  |___________________console.log("출력", a, b, c); }]); // 101 201 300\
                  |console.log(res); // 101, 201, 300'}]
      },

      notice : {
        title : 'notice',
        usage : 'C.notice(), C.noti(), C.Noti',
        egs : [{
          ds: '`B.args`는 인덱스 값에 맞춰 매개변수의 값을 반환하는 함수를 만듭니다.',
          cd: '\
                  |var arg0 = B.args(0);\
                  |var r1 = arg0(10, 20, 30);\
                  |console.log(r1); // 10'}]
      },
      removeByIndex : {
        title : 'removeByIndex',
        usage : 'C.removeByIndex(index), C.remove_by_index(index)',
        egs : [{
          ds: '`C.removeByIndex`는 배열 중 인덱스에 해당하는 값을 제거합니다.',
          cd: '\
                  |var ary = [10, 20, 30, 40];\
                  |C.removeByIndex(ary, 2);\
//                  |var res = C.removeByIndex(ary, 2);\
//                  |console.log(res); // 2\
                  |console.log(ary); // [10, 20, 40]'}]
      },
      test : {
        title : 'test',
        usage : 'C.test()',
        egs : [{
          ds: '`C.test`는 ',
          cd: '\
                  |var arg0 = B.args(0);\
                  |var r1 = arg0(10, 20, 30);\
                  |console.log(r1); // 10'}]
      },
      toMR : {
        title : 'toMR',
        usage : 'C.toMR([args...])',
        egs : [{
          ds: '`C.toMR`은 배열로 감싸진 매개변수들을 펼쳐서 리턴(multi-return)합니다.',
          cd: '\
                  |var ary = [11, 12, 13]\
                  |C(ary, [ C.toMR, \
                  |_________function(a, b, c) { console.log(a, b, c); } ])// 11, 12, 13'}]
      }
    }
  },

  H : {
    func : {
      title : 'H',
      usage : 'H(\'value\', H template code)',
      egs : [{
        ds: "`H`는 HTML 템플릿을 쉽게 만들 수 있도록 돕습니다.",
        cd: "\
                  |C(H('','\n\
                  |__div\n\
                  |____h1#hello Hello H template!\n\
                  |____a[href=https://www.marpple.com] Marpple Go!\n\
                  |____h3[style=\"color:red\"] 나는 한정판이다.'));"}, {
        ds : "데이터를 다룰 수 있습니다.",
        cd : "\
                  |C({ name: 'HA' }, H('user','\n\
                  |____________div\n\
                  |______________p.user_name _{user.name}_'));"}]
    },
    methods: {
      TAB_SIZE :
      {
        title : 'TAB_SIZE',
        usage : 'H.TAB_SIZE(size)',
        egs : [{
          ds: "`H.TAB_SIZE`는 템플릿을 작성할 때 사용될 탭의 크기를 설정하는 함수입니다. (default: 2)",
          cd: "\
                  |H.TAB_SIZE(4); // 탭 사이즈 4는 스페이스 4개와 같습니다."}]
      },
      each :
      {
        title : 'each',
        usage : 'H.each(\'data\', \'template\')',
        egs : [{
          ds: "`H.each`는 반복되는 템플릿 패턴을 쉽게 표현하기 위한 함수입니다.",
          cd: "\
                  |var songs = [\
                  |________'The Riddle Of The Model',\
                  |________'Up',\
                  |________'To Find You',\
                  |________'A Beautiful Sea',\
                  |________'Drive It Like You Stole It',\
                  |________'Up (Bedroom Mix)',\
                  |________'Girls',\
                  |________'Brown Shoes' ];\
                  |\
                  |C(songs, H('songs', '\n\
                  |____h3 Sing Street OST\n\
                  |____ul\n\
                  |______{{{C(songs, ', H.each('song, i', '\n\
                  |______li _{i+1}_. _{song}_'), ')}}}'));"}]
      }
    }
  },


  J : {
    func : {
      title : 'J',
        usage : 'J(value)',
        egs : [{
        ds: "`J`는 특정 값만 반환하는 함수를 만듭니다.",
        cd: "\
                    |var just10 = J(10);\
                    |console.log(just10()); // 10"}]
    },
    methods: {
      true :
      {
        title : 'true',
          usage : 'J.true(), J.t()',
        egs : [{
        ds: "`J.true`는 무조건 true를 반환합니다.",
        cd: "\
                    |J.true(); // true"}]
      },
      false :
      {
        title : 'false',
          usage : 'J.false(), J.f()',
        egs : [{
        ds: "`J.false`는 무조건 false를 반환합니다.",
        cd: "\
                    |J.false(); // false"}]
      },
      noop :
      {
        title : 'noop',
          usage : 'J.noop(), J.u()',
        egs : [{
        ds: "`J.noop`는 무조건 undefined를 반환합니다.",
        cd: "\
                    |J.noop(); // undefined"}]
      }
    }
  },

  MR: {
    func : {
      title : 'MR',
        usage : 'MR(value...)',
        egs : [{
        ds: "`MR`는 복수의 값을 반환합니다.(Multi Return)",
        cd: "\
                    |A([1,2,3],\
                    |______[\
                    |________function(a, b, c) {\
                    |__________return MR(a, b + c);\
                    |________},\
                    |________function(x, y) {\
                    |__________console.log(x, y); // 1, 5\
                    |________}\
                    |______]);"}]
    },
    methods: {}
  },

  S : {
    func : {
      title : "S",
      usage : "S('var name...', source)",
      egs : [{
        ds: "`S`는 source를 data 값에 따라 동적으로 치환하는 함수를 만듭니다. 데이터베이스 쿼리문을 생성할 때 유용합니다.",
        cd: "\
                  |var p_id = 5, p_body = 'I like it.'\
                  |var res = C(p_body, p_id, S('body, id', 'update posts set body = \"_{body}_\" where id = _{id}_;'));\
                  |console.log(res); // update posts set body = \"I like it.\" where id = 5; "}]},

    method: {
      each : {
        title : "each",
        usage : "S.each('var name...', iterate source)",
        egs : [{
          ds: "`S.each`는 source를 data값에 따라 동적으로 치환하는 함수를 만듭니다.",
          cd: "\
                  |var ary = [1, 9, 13];\
                  |var res = C(ary, S.each('id', 'delete from Posts where id = _{id}_; '))\
                  |console.log(res); // delete from Posts where id = 1; delete from Posts where id = 9; delete from Posts where id = 13; "
        }]
      }
    }

  },

  X : {
    func : {
      title : "X",
      usage : "B(args.., X, args..., function)",
      egs : [{
        ds: "`X`는 함수를 bind 할 때, 나중에 받을 인자의 자리를 지정해 줍니다.",
        cd: "\
                  |function minus(a, b) { return a-b; }\
                  |var f = B(X, 5, minus)\
                  |var res = f(15);\
                  |console.log(res); // 10"}]
    },
    method: {
      this: {
        title : "this",
        usage : "X.this(), X.context()",
        egs : [{
          ds: "`X.this`는 X객체의 this(context)를 반환합니다.",
          cd: ""}]
      }
    }

  },









  IF : {
    func : {
      title : "IF",
      usage : "IF([condition...], [function...]), IF().ELSE(), IF().ELSEIF().ELSE()",
      egs : [{
        ds: "`X`는 함수를 bind 할 때, 나중에 받을 인자의 자리를 지정해 줍니다.",
        cd: "\
                  |C(5, 0,\
                  |__IF(I, f1 // function I(v) { return v; }\
                  |__).ELSEIF(function(a, b) {\
                  |____return a < b \
                  |____},\
                  |____function(a, b) {\
                  |______console.log(a);\
                  |____}\
                  |__).ELSE(f2));\
                  |// f1"}]
    },
    method: {}

  }

};

console.time();
/*HTML Rendering*/
C(funcs, [H('funcs','\
    div.bar#bar_wrapper\
      div#logo\
        h3 ABC JS \
          br\
          small Functional JavaScript\
      div#list_bar\
        div.input-group\
          input.form-control#search[type=text placeholder=Search]\
          span.input-group-addon\
            span.glyphicon.glyphicon-search\
        ul.func_list\
          {{{C(funcs, ', H.each('func', '\
          li[data=!{func}!]\
            h4\
              a[href=#!{func}!] !{func}!\
            ul.method_list.!{func}!\
              {{{C(C.keys(G[func]), func, ', H.each("method, k, l, func", '\
              li[data=!{method}!]\
                a[href=#!{func}!_!{method}!] !{method}!'), ')}}}'
),')}}}\
      div#about_us\
        p Mapple ©\
        ul\
          li\
            a[href=http://www.marpple.com] Marpple\
          li\
            a[href=https://github.com/marpple/abc-functional-javascript] Repository\
          li\
            a[href=https://github.com/cojamm2/functional-javascript/wiki] Book\
    div.container\
      div#section_container\
          {{{C(G.sections = section_bulider(section_data), ', H.each("section", "\
           div !{replace_(section)}!\
          "), ')}}}\
    '),
  function(v) { return v.replace(/_\{(.*?)\}_/g, '{{$1}}').replace(/_\{\{(.*?)\}\}_/g, '{{{$1}}}').replace(/!_(.*?)_!/g, '!{$1}!'); },
  $,
  B.M('appendTo', 'body')]);

C([
  H('', '\
      a.btn.btn-sm.btn-info.pull-right#go_template[type=button href=template.html target=blank] try\
    '),
  $,
  B.M('appendTo', 'div#H .func_title small')
]);
console.timeEnd();

/*General functions*/
function section_bulider(temp_section) {
  return C.map(C.keys(temp_section), function(key) {

    var section_values = C.values(temp_section[key]);
    var func = section_values[0],
      methods = section_values[1];

    return ['\
            div.outer_section#'+key+'\
              h3.func_title '+func.title+'\
                small ' + func.usage
    + C.map(func.egs, function(eg) {
      return  '\
              p ' + eg.ds + (eg.cd ? '\
              pre.javascript ' + eg.cd : '');
    }).join('')]
      .concat(C.map(methods, function(method) {
        return ['\
              div.inner_section#'+key+'_'+method.title+'\
                h4.method_title '+key+'.'+method.title+' \
                  small '+method.usage]
          .concat(C.map(method.egs, function(eg) {
            return ['\
                p '+eg.ds+ (eg.cd ? '\
                pre.javascript\
                  '+eg.cd : '')]
          })).join('');
      })).join('');
  });
}

function replace_(str) {
  return str.replace(/\|(_+)/g, function(m, u) { return "|" + u.replace(/_/g, '&nbsp;'); }).replace(/`(.*?)`/g, '<code>$1</code>').replace(/(\n)/g, '\\$1');
}

function update_section_list(str) {
  if (!str) return $('#list_bar li').show();

  var reg = new RegExp(str, "i"); // 우리는 정규표현식으로 검색해도 검색 됨 ^0^

  var $func_li = C.filter($('ul.func_list > li'), function(func){
    return $(func).attr('data').match(reg) ? !$('ul.func_list > li').show() : true;
  });

  C.each($func_li, function(li) {
    var $li = $(li);
    if (!li.innerText.match(reg)) return !$li.hide();

    var $methods = $li.children('.method_list').children('li');
    C.each($methods, function(m) {
      m.innerText.match(reg) ? $(m).show() : $(m).hide();
    });

    return $li.show();
  });
}


$(document).ready(function() {

  $('pre').each(function(i, block) {
    hljs.highlightBlock(block);
  });

  /*Event listener functions*/
  // search function
  $('#search').keyup(function(e) {
    update_section_list($(e.target).val());
  });

  // focus effect
  $('#list_bar li a').on('click', function(e) {

    //console.log(e.target.href);
    //var $section = $(e.target.href.match(/#[A-Z]+\$?(_\w+)?$/)[0]);
    var $section = $(e.target.href.match(/#[\w]+\$?$/)[0]);

    if (!$section[0]) return;

    (function() {
      if (!$section[0].style.boxShadow) $section[0].style.boxShadow = "#ccc 0 0 1px";

      var depth = C.iadd($section[0].style.boxShadow.match(/([0-9]*)px$/)[1], 5);

      // shadow on
      if (depth < 70) {
        $section.css('box-shadow', ' #ccc 0 0 '+ depth +'px');
        setTimeout(arguments.callee, 30);
      }
      else {
        $section.css('box-shadow', '#ccc 0 0 '+ depth +'px');
        // shadow off
        (function() {
          var depth = C.isub($section[0].style.boxShadow.match(/([0-9]*)px$/)[1], 10);
          if (depth > 0) {
            $section.css('box-shadow', '#ccc 0 0 '+ depth +'px');
            setTimeout(arguments.callee, 30);
          } else {
            $section.css('box-shadow', '#ccc 0 0 0px');
          }
        })();
      }
    })();
  });

});