//1 get method
let title = document.getElementById('title');
console.log(title);
title.textContent = '헬스 3대 요소';

let items = document.getElementsByClassName('item');
console.log(items);
console.log('스쿼트:', items[0]);
console.log('벤치:', items[1]);
console.log('데드리프트:', items[2]);

let liList = document.getElementsByTagName('li');
console.log(liList);

// 2HTML 요소 쿼리
