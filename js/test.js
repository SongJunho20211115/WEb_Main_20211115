var jb = 'hi';
var a = 1;
var b;
b = 5;

if (true) {
  let c = 'let접근';
  var c_1 = 'var접근';
}
//console.log(c);//Error?
console.log(c_1);

let d = 5;
//let d='값 재할당';//Error?
console.log(d);

const e = '상수1접근';
//e=5;
//const f//Error?
console.log(e);

//마우스//
document.getElementById('search_btn').addEventListener('click', search_message);

function search_message() {
  alert('검색을 수정합니다!');
}
