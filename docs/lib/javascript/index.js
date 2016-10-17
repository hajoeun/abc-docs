/**
 * Created by marpple on 2016. 10. 17..
 */

/*Functions List variable declaration*/
var funcs = _.filter(_.keys(F), function(val) { return val !== 'F' && val !== 'G' });

/*Section Data declaration*/
var section_data = {
  A : {
    func : {
      title : 'A',
      usage : 'A()',
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
      usage : 'B(args..., function)',
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
          ds: '`B.extend`은 객체들의 키와 값을 추가하는 함수를 만듭니다.',
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
        usage : 'B.filter(iteratee)',
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
        usage : 'B.reject(iteratee)',
        egs : [{
          ds: '`B.reject`는 list를 순회하며 조건에 맞는 요소를 제외하고 나머지를 추출하는 함수를 만듭니다.',
          cd: "\
                  |var res = C(users, B.reject(function(val) { return val.age > 30; }));\
                  |console.log(res); // [{ name: 'PJ', age: 28 }, { name: 'HA', age: 25 }, { name: 'JE', age: 27 }]"}]
      },
      find : {
        title : 'find',
        usage : 'B.find(iteratee)',
        egs : [{
          ds: '`B.find`는 list를 순회하며 조건에 맞는 값 하나를 반환하는 함수를 만듭니다.',
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
                  |C(obj, B.findKey(function(val) { return val == 'JE'; })); // 'JE'"}]
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
        usage : 'findIndex(), find_index(), find_i()',
        egs : [{
          ds: '',
          cd: "\
                  |\
                  |\
          "}]
      },
      tap : {
        title : 'tap',
        usage : 'findIndex(), find_index(), find_i()',
        egs : [{
          ds: '',
          cd: "\
                  |\
                  |\
          "}]
      },
      boomerang : {
        title : 'boomerang',
        usage : 'findIndex(), find_index(), find_i()',
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
          ds: '',
          cd: "\
                  |var delay1s = B.delay(1000)\
                  |delay1s(function() { console.log('Hi~'); }) // 1초 후에 \"Hi~\" 출력"}]
      },
      notice : {
        title : 'notice',
        usage : 'B.notice(), B.noti(), B.Noti()',
        egs : [{
          ds: '',
          cd: "\
                  |\
                  |\
          "}]
      },

    }
  },
  H : {
    func : {
      title : 'H',
      usage : 'H(\'value\', H template code)',
      egs : [{
        ds: "`H`는 HTML 템플릿을 쉽게 만들 수 있도록 돕습니다.",
        cd: "\
                  |function() {\
                  |__return arguments;\
                  |}"}, {
        ds : "이렇게도 사용할 수 있습니다.",
        cd : "\
                  |function() {\
                  |__return arguments[0];\
                  |}"}]
    },
    methods: {
      TAB_SIZE :
      {
        title : 'TAB_SIZE',
        usage : 'H.TAB_SIZE()',
        egs : [{
          ds: "이 함수는 ~하는 함수 입니다.",
          cd: "\
                  |function() {\
                  |__return arguments;\
                  |}"}]
      },
      each :
      {
        title : 'each',
        usage : 'H.each()',
        egs : [{
          ds: "이 `H.each`함수는 ~하는 함수 입니다.",
          cd: "\
                  |function() {\
                  |__return arguments;\
                  |}"}, {
          ds : "이렇게도 사용할 수 있습니다.",
          cd : "\
                  |function() {\
                  |__return arguments[0];\
                  |}"}]
      }
    }
  }
};

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
              {{{C(_.keys(!{func}!), "!{func}!", ', H.each("method, k, l, func", '\
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
           div {{{H('', replace_(section))()}}}\
          "), ')}}}\
    '),
  $,
  B.M('appendTo', 'body')]);

C([
  H('', '\
      a.btn.btn-sm.btn-info.pull-right#go_template[type=button href=template.html target=blank] try\
    '),
  $,
  B.M('appendTo', 'div#H .func_title small')
]);

/*General functions*/
function section_bulider(temp_section) {
  return _.map(_.keys(temp_section), function(key) {

    var section_values = _.values(temp_section[key]);
    var func = section_values[0],
      methods = section_values[1];

    return ['\
            div.outer_section#'+key+'\
              h3.func_title '+func.title+' \
                small '+func.usage+'\
              p '+func.egs[0].ds+'\
              pre\
                '+func.egs[0].cd+'\
              p '+func.egs[1].ds+'\
              pre\
                '+func.egs[1].cd]
      .concat(_.map(methods, function(method) {
        return ['\
              div.inner_section#'+key+'_'+method.title+'\
                h4.method_title '+key+'.'+method.title+' \
                  small '+method.usage]
          .concat(_.map(method.egs, function(eg) {
            return ['\
                p '+eg.ds+'\
                pre.prettyprint\
                  '+eg.cd]
          })).join('');
      })).join('');
  });
}

function replace_(str) {
  return str.replace(/\|(_+)/g, function(m, u) { return "|" + u.replace(/_/g, '&nbsp;'); }).replace(/`(.*?)`/g, '<code>$1</code>');
}

function update_section_list(str) {
  if (!str) return $('#list_bar li').show();

  var reg = new RegExp(str, "i");

  var $func_li = _.filter($('ul.func_list > li'), function(func){
    return $(func).attr('data').match(reg) ? !$('ul.func_list li').show() : true;
  });

  var res = _.map($func_li, function(li) { //메소드 조사
    var $li = $(li);
    return li.innerText.match(reg) ? (function() {
      $li.show();
      return $li.children('ul')[0].childNodes; })() : $li.hide();
  });

  _.each(res, function(li) {
    if (li) {
      _.each(li, function (inner_li) { return inner_li.innerText.match(reg) ? $(inner_li).show() : $(inner_li).hide(); });
    }

  });
}


/*Event listener functions*/
// search function
$('#search').keyup(function(e) {
  update_section_list($(e.target).val());
});

// focus effect
$('#list_bar li a').on('click', function(e) {
  var $section = $(e.target.href.match(/#([A-Z])(_([a-z]+))?/)[0]);

  (function() {
    if (!$section[0].style.boxShadow) $section[0].style.boxShadow = "#ccc 0 0 1px";

    var depth = parseInt($section[0].style.boxShadow.match(/([0-9]*)px$/)[1]) + 5;

    // shadow on
    if (depth < 70) {
      $section.css('box-shadow', ' #ccc 0 0 '+ depth +'px');
      _.delay(arguments.callee, 30);
    }
    else {
      $section.css('box-shadow', '#ccc 0 0 '+ depth +'px');
      // shadow off
      (function() {
        var depth = parseInt($section[0].style.boxShadow.match(/([0-9]*)px$/)[1]) - 10;
        if (depth > 0) {
          $section.css('box-shadow', '#ccc 0 0 '+ depth +'px');
          _.delay(arguments.callee, 30);
        } else {
          $section.css('box-shadow', '#ccc 0 0 0px');
        }
      })();
    }
  })();

});


$(document).ready(function() {
  $('pre').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});