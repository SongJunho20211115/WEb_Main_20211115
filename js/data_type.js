// 자바에서는 6개의 원시 타입 으로
//number,string,boolean,null,undifined+object(객체)
//

let number = 5;
let str = '문자열 입력';
let prime = 1.5123;
let is_ok = true;
let is_not = false;
let undefi = 15; //변수 이름만 선언,초기화 x
let empty = null; // 비어있음

console.log(undefi, empty);

const sym1 = Symbol('test'); //심볼 함수로 값 생성
let SymbolVar1 = sym1; //변수 초기화

const airline = ['비행기', 320, 'airbus', ['V1', true]];
// 다양한 데이터 배열

//빈객체 생성
const obj1 = {};

//속성을 추가하여 객체 생성
const obj2 = {
  name: 'John Doe',
  age: 30,
  isMale: true,
};

console.log(SymbolVar1.toString()); //문자열 변환 출력
console.log(obj1, obj2, airline); //여러개 동시 출력

const users = new Map(); //사용자 정보 Map 객체 생성
users.set('user1', {
  //사용자 정보 추가
  id: 1,
  password: 'password123',
});

users.set('user2', {
  id: 2,
  password: 'password456',
});

//Mao 객체의 모든 사용자 정보 반복 출력
for (const [username, user] of users) {
  console.log('사용자 이름:${username}', 'ID:${user.id}');
  console.log('비밀번호:${user.password}');
}

//set 객체 활용(예),이름만 저장할때 set 객체 생성
const usernames = new Set();

usernames.add('user1'); //사용자 이름 추가
usernames.add('user2');

//set객체의 모든사용자 이름 반복출력
for (const username of usernames) {
  console.log('시용자 이름:${username}');
}
