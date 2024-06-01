/**
 * DOM : HTML 및 XML 문서의 구조화된 표현으로, 프로그래밍 언어가 문서의 콘텐츠, 구조 및 스타일을
 *       동적으로 조작할 수 있도록 하는 인터페이스를 제공한다.
 *       자바스크립트는 DOM을 사용해서 웹 페이지를 동적으로 변경할 수 있다.
 */

const number = document.querySelector('#number');
const increase = document.querySelector('#increase');
const decrease = document.querySelector('#decrease');

increase.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current + 1;
}

decrease.onclick = () => {
    const current = parseInt(number.innerText, 10);
    number.innerText = current - 1;
}