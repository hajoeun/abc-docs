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





'<div id=try_H class="container" ><h1 >TRY H</h1><div class="set_sections" ><h4 >Settings</h4><div class="settings" ><div id=tab_set ><label >Select TAB size</label><form class="tab_size" ><input type=radio name="tab" value=2 checked >2<input type=radio name="tab" value=4 >4</form></div><div id=css_set ><label >Select Library</label><form class="library" ><input type=checkbox value=bootstrap >Bootstrap<input type=checkbox value=jqeury >jQuery</form></div></div><div id=about_this_page ><h5 >Try H 활용법</h5><p >`Ctrl + Enter`로 실행할 수 있습니다.</p></div></div><div class="try_sections" >Error: ReferenceError: hidden is not definedError: ReferenceError: hidden is not defined<div class="section data" ><div class="section_header" ><h3 >Data <small>&#x60;!{}!&#x60;, &#x60;&lt;&lt;&gt;&gt;&#x60;, &#x60;&lt;&lt;&lt;&gt;&gt;&gt;&#x60;</small></h3><p >&#x60;!{}!&#x60;, &#x60;&lt;&lt;&gt;&gt;&#x60;, &#x60;&lt;&lt;&lt;&gt;&gt;&gt;&#x60;을 사용하여 데이터를 치환할 수 있습니다.</p></div><div class="section_body row data" ><div class="col-md-6 s_test" ><h4 >Test Code<button id=data class="btn btn-sm btn-success run_btn data" >Run</button></h4><textarea class="input data"  >var person = { name: &#x27;Cojamm&#x27;, age: 32, company: &#x27;marpple&#x27;, comment:&#x27;&lt;em&gt;하이&lt;/em&gt;&#x27; };</textarea><textarea class="input code" >**here**</textarea></div><div class="col-md-6 s_result" ><h4 >Results</h4><div class="output dom" ></div></div></div></div>Error: ReferenceError: hidden is not defined<div class="section function" ><div class="section_header" ><h3 >Function <small></small></h3><p ></p></div><div class="section_body row function" ><div class="col-md-6 s_test" ><h4 >Test Code<button id=function class="btn btn-sm btn-success run_btn function" >Run</button></h4><textarea class="input data"  >var songs = [          &#x27;The Riddle Of The Model&#x27;,          &#x27;Up&#x27;,          &#x27;To Find You&#x27;,          &#x27;A Beautiful Sea&#x27;,          &#x27;Drive It Like You Stole It&#x27;,          &#x27;Up (Bedroom Mix)&#x27;,          &#x27;Girls&#x27;,          &#x27;Brown Shoes&#x27;];</textarea><textarea class="input code" >**here**</textarea></div><div class="col-md-6 s_result" ><h4 >Results</h4><div class="output dom" ></div></div></div></div><div class="section s" ><div class="section_header" ><h3 >S <small></small></h3><p >&#x60;S&#x60; 함수는 &#x60;H&#x60; 템플릿 함수와 비슷하나, SQL문과 같은 일반 문자열을 다룰 때 사용 할 수 있습니다.</p></div><div class="section_body row s" ><div class="col-md-6 s_test" ><h4 >Test Code<button id=s class="btn btn-sm btn-success run_btn s" >Run</button></h4><textarea class="input data"  >var post = {id: 5, body: &#x27;foo bar&#x27;}</textarea><textarea class="input code" >**here**</textarea></div><div class="col-md-6 s_result" ><h4 >Results</h4><div class="output dom" ></div></div></div></div></div></div>'

'<div id=try_H class="container" ><h1 >TRY H</h1><div class="set_sections" ><h4 >Settings</h4><div class="settings" ><div id=tab_set ><label >Select TAB size</label><form class="tab_size" ><input type=radio name="tab" value=2 checked >2<input type=radio name="tab" value=4 >4</form></div><div id=css_set ><label >Select Library</label><form class="library" ><input type=checkbox value=bootstrap >Bootstrap<input type=checkbox value=jqeury >jQuery</form></div></div><div id=about_this_page ><h5 >Try H 활용법</h5><p >`Ctrl + Enter`로 실행할 수 있습니다.</p></div></div><div class="try_sections" ><div class="section basic" ><div class="section_header" ><h3 >Basic <small>id, class, attribute</small></h3><p >&#x60;H&#x60; 함수를 사용하여 id와 class 등 다양한 속성을 지정할 수 있습니다.</p></div><div class="section_body row basic" ><div class="col-md-6 s_test" ><h4 >Test Code<button id=basic class="btn btn-sm btn-success run_btn basic" >Run</button></h4><textarea class="input data" hidden ></textarea><textarea class="input code" >**here**</textarea></div><div class="col-md-6 s_result" ><h4 >Results</h4><div class="output dom" ></div></div></div></div><div class="section paragraph" ><div class="section_header" ><h3 >Paragraph <small>&#x60;.&#x60; 혹은 &#x60;|&#x60; 사용하기</small></h3><p >&#x60;.&#x60; 혹은 &#x60;|&#x60; 를 사용하여 개행을 포함한 문단을 작성할 수 있습니다.</p></div><div class="section_body row paragraph" ><div class="col-md-6 s_test" ><h4 >Test Code<button id=paragraph class="btn btn-sm btn-success run_btn paragraph" >Run</button></h4><textarea class="input data" hidden ></textarea><textarea class="input code" >**here**</textarea></div><div class="col-md-6 s_result" ><h4 >Results</h4><div class="output dom" ></div></div></div></div><div class="section data" ><div class="section_header" ><h3 >Data <small>&#x60;!{}!&#x60;, &#x60;&lt;&lt;&gt;&gt;&#x60;, &#x60;&lt;&lt;&lt;&gt;&gt;&gt;&#x60;</small></h3><p >&#x60;!{}!&#x60;, &#x60;&lt;&lt;&gt;&gt;&#x60;, &#x60;&lt;&lt;&lt;&gt;&gt;&gt;&#x60;을 사용하여 데이터를 치환할 수 있습니다.</p></div><div class="section_body row data" ><div class="col-md-6 s_test" ><h4 >Test Code<button id=data class="btn btn-sm btn-success run_btn data" >Run</button></h4><textarea class="input data" hidden >var person = { name: &#x27;Cojamm&#x27;, age: 32, company: &#x27;marpple&#x27;, comment:&#x27;&lt;em&gt;하이&lt;/em&gt;&#x27; };</textarea><textarea class="input code" >**here**</textarea></div><div class="col-md-6 s_result" ><h4 >Results</h4><div class="output dom" ></div></div></div></div><div class="section comments" ><div class="section_header" ><h3 >Comments <small>&#x60;//&#x60;, &#x60;/* */&#x60;</small></h3><p >&#x60;//&#x60;와 &#x60;/* */&#x60;를 사용하여 주석 처리를 할 수 있습니다.</p></div><div class="section_body row comments" ><div class="col-md-6 s_test" ><h4 >Test Code<button id=comments class="btn btn-sm btn-success run_btn comments" >Run</button></h4><textarea class="input data" hidden ></textarea><textarea class="input code" >**here**</textarea></div><div class="col-md-6 s_result" ><h4 >Results</h4><div class="output dom" ></div></div></div></div><div class="section function" ><div class="section_header" ><h3 >Function <small></small></h3><p ></p></div><div class="section_body row function" ><div class="col-md-6 s_test" ><h4 >Test Code<button id=function class="btn btn-sm btn-success run_btn function" >Run</button></h4><textarea class="input data" hidden >var songs = [          &#x27;The Riddle Of The Model&#x27;,          &#x27;Up&#x27;,          &#x27;To Find You&#x27;,          &#x27;A Beautiful Sea&#x27;,          &#x27;Drive It Like You Stole It&#x27;,          &#x27;Up (Bedroom Mix)&#x27;,          &#x27;Girls&#x27;,          &#x27;Brown Shoes&#x27;];</textarea><textarea class="input code" >**here**</textarea></div><div class="col-md-6 s_result" ><h4 >Results</h4><div class="output dom" ></div></div></div></div><div class="section s" ><div class="section_header" ><h3 >S <small></small></h3><p >&#x60;S&#x60; 함수는 &#x60;H&#x60; 템플릿 함수와 비슷하나, SQL문과 같은 일반 문자열을 다룰 때 사용 할 수 있습니다.</p></div><div class="section_body row s" ><div class="col-md-6 s_test" ><h4 >Test Code<button id=s class="btn btn-sm btn-success run_btn s" >Run</button></h4><textarea class="input data" hidden >var post = {id: 5, body: &#x27;foo bar&#x27;}</textarea><textarea class="input code" >**here**</textarea></div><div class="col-md-6 s_result" ><h4 >Results</h4><div class="output dom" ></div></div></div></div></div></div>


