/*DOM 그리기*/
var examples = [
  "C(H('','\n\
  div\n\
    h1#hello Hello H template!\n\
    a[href=https://www.marpple.com] Marpple Go!\n\
    h3[style=\"color:red\"] 나는 한정판이다.'));",

  "C(H('','\n\
  textarea\n\
    |동해물과 백두산이\n\
    |마르고 닳도록\n\
  textarea.\n\
    \n\
    애국가를 입력해주세요.\n\
  span 오구야'));",

  "C(person, H('user','\n\
        div.!{user.company}!\n\
          h3 My name is {{user.name}}\n\
          h3 {{user.age}} years old.\n\
          h5 {{user.comment}}\n\
          h5 {{{user.comment}}}\n\
        '));",

  "C(H('','\n\
          h3 I am smart.\n\
//          h3 I am dummy.\n\
          h3 I like cheeseburger\n\
/*          h3 and pizza\n\
          h3 and chicken\n\
          h3 and french-fried\n\
          h3 and.. every food*/\n\
          h4 I am honest.\n\
          '));",

  "C(songs, H('songs', '\n\
    h3 Sing Street OST\n\
    ul\n\
      {{{C(songs, ', function (songs) {*\\n\
        return C.map(songs, function (song, i) {*\\n\
          return '<li>' + (i + 1) + '. ' + song + '</li>';*\\n\
        }).join('');*\\n\
      }, ')}}}'));",

  "C(songs, H('songs', '\n\
    h3 Sing Street OST\n\
    ul\n\
      !{C(songs, ', H.each('song, i', '\n\
      li {{i+1}}. {{song}}'), ')}!'));",

  "C(post, S('p', \"update posts set body = '{{p.body}}' where id = {{p.id}};\"));"
];

var ex_ary = [
  {
    title: "Basic",
    detail: "id, class, attribute",
    comment: "`H` 함수를 사용하여 id와 class 등 다양한 속성을 지정할 수 있습니다."
  },
  {
    title: "Paragraph",
    detail: "`.` 혹은 `|` 사용하기",
    comment: "`.` 혹은 `|` 를 사용하여 개행을 포함한 문단을 작성할 수 있습니다."
  },
  {
    title: "Data",
    detail: "`!{}!`, `<<>>`, `<<<>>>`",
    comment: "`!{}!`, `<<>>`, `<<<>>>`을 사용하여 데이터를 치환할 수 있습니다.",
    data: "var person = { name: 'Cojamm',*\\n\
               age: 32,*\\n\
               company: 'marpple',*\\n\
               comment:'<em>하이</em>' };"
  },
  {
    title: "Comments",
    detail: "`//`, `/* */`",
    comment: "`//`와 `/* */`를 사용하여 주석 처리를 할 수 있습니다."
  },
  {
    title: "Function1",
    detail: "",
    comment: "`!{}!`, `<<>>`, `<<<>>>`을 사용하여 함수를 실행할 수 있습니다.",
    data:
      "var songs = [*\\n\
          'The Riddle Of The Model',*\\n\
          'Up',*\\n\
          'To Find You',*\\n\
          'A Beautiful Sea',*\\n\
          'Drive It Like You Stole It',*\\n\
          'Up (Bedroom Mix)',*\\n\
          'Girls',*\\n\
          'Brown Shoes' ];"
  },
  {
    title: "Function2",
    detail: "`H.each`",
    comment: "",
    data:
      "var songs = [*\\n\
          'The Riddle Of The Model',*\\n\
          'Up',*\\n\
          'To Find You',*\\n\
          'A Beautiful Sea',*\\n\
          'Drive It Like You Stole It',*\\n\
          'Up (Bedroom Mix)',*\\n\
          'Girls',*\\n\
          'Brown Shoes' ];"
  },
  {
    title: "S",
    detail: "",
    comment: "`S` 함수는 `H` 템플릿 함수와 비슷하나, SQL문과 같은 일반 문자열을 다룰 때 사용 할 수 있습니다.",
    data: "var post = {id: 5, body: 'foo bar'};"
  }
];


/*
* H
*
* */


C([H('','\
    div.container#try_H\
      h1 TRY H\
      div.try_sections\
        {{{C(ex_ary, ', H.each('ex', '\
        div.section.!{ex.title}!#_!{ex.title}!\
          div.section_header\
            h2 {{ex.title}} <span class=detail>{{ex.detail}}</span>\
            p \
              |{{ex.comment}}\
          div.section_body.!{ex.title}!\
            div.s_test\
              h3 Test Code\
                button.btn.run_btn[title="Ctrl + Enter"].!{ex.title}!#!{ex.title}! Run\
              textarea.input.data[!{ex.data ? void 0 : "hidden"}!] {{ex.data}}\
              textarea.input.code **here**\
            div.s_result\
              h3 Results\
              div.output.dom\
        '), ')}}}\
    div.left\
      div.sidebar\
        div.link\
          ul\            li\
              a[href=#_Basic] Basic\
            li \
              a[href=#_Paragraph] Paragraph\
            li \
              a[href=#_Data] Data\
            li \
              a[href=#_Comments] Comments\
            li \
              a[href=#_Function1] Function1\
            li \
              a[href=#_Function2] Function2\
            li \
              a[href=#_S] S\
        div.setting\
          ul\
            li TAB size\
              form.tab_size\
                input#tab2[type=radio name="tab" value=2 checked]\
                  label[for=tab2] 2\
                input#tab4[type=radio name="tab" value=4]\
                  label[for=tab4] 4\
            li\
            li\
              button.btn["disabled"] Run \
              <small> `(Ctrl + Enter)`</small>\
        div.attr_info\
          ul \
            b Color Sheet\
            li\
            li.border-red .border-red\
            li.border-yellow .border-yellow\
            li.border-blue .border-blue\
            li.border-green .border-green\
            li\
            li.bg-red .bg-red\
            li.bg-yellow .bg-yellow\
            li.bg-blue .bg-blue\
            li.bg-green .bg-green\
            li\
            li#txt-white #txt-white\
            li#txt-black #txt-black\
    '),
  function(v) { // 이쁘게 출력
    var i = 0;
    return v.replace(/(&#x60;|`)(.*?)\1/g, "<code class='chip'>$2</code>")
      .replace(/&lt;&lt;&lt;(.*?)&gt;&gt;&gt;/g,'{{{$1}}}').replace(/&lt;&lt;(.*?)&gt;&gt;/g,'{{$1}}')
      .replace(/\*\*here\*\*/g, function() { return examples[i++].replace(/(\n)/g, '\\$1'); })
      .replace(/\*\\n/g, "\n");
  },
  $,
  B.M('appendTo', 'body')]);


/*DOM 제어*/
$(document).ready(function() {
  var $data_input = $('.s_test > .input.data'),
    $code_input = $('.s_test > .input.code');

  C.each($data_input, function(ele) {
    if (!ele.hidden)
      return replaceCodeMirror(ele);
  });

  C.each($code_input, function(ele) {
    return replaceCodeMirror(ele);
  });

  function replaceCodeMirror(ele) {
    return CodeMirror(function(elt) {
      elt.className += " " + ele.className;
      ele.parentNode.replaceChild(elt, ele);
    }, {
      mode: "javascript",
      value: ele.value,
      theme: "monokai",
      tabSize: 0
    });
  }

  var user_tab_size = 2;
  $('.setting > ul > li > .tab_size').on('change', function(e) {
    user_tab_size = C.parseInt($(':radio[name="tab"]:checked').val());

    var $code_inputs = $('.section_body .s_test > .code');

    C.each($code_inputs, function(code_input) {
      var code = $(code_input).find('.CodeMirror-scroll .CodeMirror-code').text();
      code = user_tab_size == 4 ? code.replace(/  /g, "    ") : code.replace(/    /g, "  ");

      CodeMirror(function(elt) {
        elt.className += " input code";
        code_input.parentNode.replaceChild(elt, code_input);
      }, {
        mode: "javascript",
        theme: "monokai",
        tabSize: 0,
        value: code.replace(new RegExp('((\\/\\*|\\/\\/)?'+TABS()+')', 'g'), '\n$1')
      });
    });

    key_event();
    console.log(user_tab_size + "%c tab 설정 완료!", "color:green;");
  });

  $('.run_btn').on('click', function(e) {

    var $section = $('.section' + '.' + e.target.id),
      $data = $section.find('.s_test > .input.data .CodeMirror-scroll .CodeMirror-code'),
      $code = $section.find('.s_test > .input.code .CodeMirror-scroll .CodeMirror-code'),
      $dom = $section.find('.s_result > .dom');

    var data = $data.text() ? $data[0].innerText : "",
      code = $code[0].innerText.replace(/;\s*$/, "");

    try {
      $dom.html((new Function(data + "; return (" + code + ");"))());
      console.log(e.target.id + "%c 코드 실행!", "color:green;");
      $dom.css("border", "3px solid #1abc9c").animate({ borderColor:'#1abc9c' }, 900, function(){ $(this).css("borderColor", "#ccc"); });
    } catch (e) {
      $dom.html(e).css('border', '3px solid #e74c3c');
      console && console.error && console.error('Syntax Error...');
    }
  }).click();

  function TAB() { return "( {" + user_tab_size + "}|\\t)"; };
  function TABS() { return TAB() + "+"; };

  /*Key event handler*/
  key_event();
  function key_event() {
    var key_cache = {};
    $('.s_test > .data textarea, .s_test > .code textarea').keydown(function(e) {
      var T = user_tab_size == 2 ? "  " : "    ";

      key_cache[e.which] = true;
      if (key_cache[9]) { // tab was pressed
        var start = this.selectionStart;
        var end = this.selectionEnd;

        var $this = $(this);
        var value = $this.val();

        $this.val(value.substring(0, start) + T + value.substring(end));

        this.selectionStart = this.selectionEnd = start + user_tab_size;
        e.preventDefault();
      } else if (key_cache[13] && key_cache[17]) {
        $(e.target.parentNode.parentNode.parentNode).find('.run_btn').click();
        delete key_cache[13]; delete key_cache[17];
      }

    });
    $('.s_test > .data textarea, .s_test > .code textarea').keyup(function(e) { delete key_cache[e.which]; });
    $(document).keyup(function(e) { delete key_cache[e.which]; });
  }
});