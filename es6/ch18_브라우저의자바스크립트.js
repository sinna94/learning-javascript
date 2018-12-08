//문서객체모델 DOM (Document Object Model)

//get 메소드
document.getElementById();
document.getElementsByClassName();
document.getElementsByTagName();

//DOM 요소 조작
textContent     // HTML 태그를 모두 제고하고 순수한 텍스트 데이터만 제공
innerHTML       // HTML 태그를 그대로 제공, HTML 수정

//CSS 스타일 요소로 부르기
document.querySelectorAll('.class');

//새 DOM 요소 만들기
document.createElement('p');

//데이터속성
//HTML 요소에 임의의 데이터를 추가할 수 있음
//브라우저는 이 데이터를 완전히 무시하므로 
//자바스크립트에서 쉽게 요소에 관한 정보를 읽거나 수정할 수 있음

/*
    HTML 은 계층적이므로 이벤트를 한 곳에서만 처리해야 하는 것은 아님
    버튼을 클릭했을 때 버튼 자체 또는 버튼의 부모 또는 그 부모의 부모에서 처리해도 됨
    이벤트에 응답할 기회늰 어떤 순서로 주어지는가?
    캡처링(capturing) : 가장 먼 조상부터 시작하는 방법
    버블링(bubbling) : 이벤트가 일어난 요소에서 시작해 거슬로 올라가는 방법

    이벤트 핸들러가 어떻게 호출될지 영향을 주는 세가지 방법
    1. preventDefault : 이벤트를 취소한다. 
    취소된 이벤트는 계속 전달 되지만 
    defaultPrevented 프로퍼티가 true로 바뀐 채 전달됨

    2. stopPropagation : 이벤트를 현재 요소에서 끝내고 더는 전달되지 않게 막는다.

    3. stopImmediatePropagation : 다른 이벤트 핸들러, 
    현재 요소에 연결된 핸들러도 동작하지 않게 막는다.

*/