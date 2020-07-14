# AP_Portal_Prototype

AP_Portal 2.0 웹 페이지 제작
     - prototype-borad-write.html --- 게시판 글쓰기
     - prototype-board-read.html --- 게시판 읽기
     - prototype-board.html --- 게시판 글 목록
     - prototype-draft.html --- 임시 보관함
     - prototype-templete.html --- AP Portal 1.0 연결할 페이지

## 7. 13일 변경 사항
1. 전체적인 변경 사항
     - 모바일, 아이패드 환경 UI 개선
     - 모바일로 변경 시 메뉴 버튼 사라짐 해결
     - 날짜 데이터 표현 기획대로 변경

2. prototype-board-read
     - Top 키 구현
     - 수정 버튼 icon 변경

3. prototype-board-write
     - summernote -> code view 삭제
     - assets/js/pages/demo.summernote.js 의 summernote 부분 추가 및 변경

4.  prototype-templete
     - iframe을 통한 포털 연결 페이지 구현

5. prototype-borad
     - 공지사항 tbody 다시 생성

6.  prototype-draft
     - 없음


* 발견된 문제점
   - navi와 vertical bar 간의 background color 색상이 일치하지 않음