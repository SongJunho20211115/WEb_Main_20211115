const search_message = () => {
  const c = '검색을 수행합니다';
  alert(c);
};
document.getElementById('search_btn').addEventListener('click', search_message);
// function search_message() {
// alert('검색합니다');
// }

function googleSearch() {
  // 검색어로 설정
  const searchTerm = document.getElementById('search_input').value;
  const googleSearchurl =
    'https://www.google.com/search?q=${encodeURIComponent(searchTerm)}';
  // 세 창에서 구글 검색을 수행
  window.open(googleSearchurl, '_blank');
  return false;
}
