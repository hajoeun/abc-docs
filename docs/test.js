all : { // B.all의 결과는 배열인데, 뒤에 함수가 더 있으면 그 배열이 펼쳐져서 들어감
  title : 'all',
    usage : 'B.all(function...)',
    egs : [{
    ds: '`B.all`은 복수의 함수에 동일한 매개변수를 전달하는 함수를 만듭니다.',
    cd: "\
                  |C(1, 5, [\
                  |____B.all(\
                  |________function (a, b) { return a + b; },\
                  |________[function (a, b) { return a - b; }, function (a) { return a * a; }],\
                  |________function (a, b) { return MR(a, b); }\
                  |____),\
                  |____function (a, b, c, d) { console.log(a, b, c, d); }]); // 6, 16, 1, 5"}]
}