// 새로운 지점 추가시 
// 1. '지점명목록'에 지점명 추가
// 2. 이미지 파일 목록에 새 지점의 사진 추가 
// ex) var 새지점 = ['이미지경로', '이미지경로', '이미지경로']

// **주의사항 에러가 난다면 확인!
// : 따옴표('')와 콤마(,)의 자리가 중요합니다! 
//   띄어쓰기 인식 X
//   맨 앞에 숫자 오면 에러



var 선택한지점명 = '봉선점';
// 맨 처음 보여지는 지점

var 지점명목록 = ['봉선점','2호점'];
// 지점명 목록에 추가하면 목록에 자동으로 추가

var 지점주소 = {
    봉선점 : '봉선2로 41 3층 (스카이빌딩)',
}


// 이미지 파일 목록
// 갯수대로 슬라이드 자동 생성
var 이미지목록 = {
    봉선점 : [
        './img/bongseon/1.jpg',
        './img/bongseon/2.jpg',
        './img/bongseon/3.jpg',
        './img/bongseon/4.jpg',
        './img/bongseon/5.jpg',
        './img/bongseon/6.jpg',
        './img/bongseon/7.jpg',
        './img/bongseon/8.jpg',
        './img/bongseon/9.jpg',
        './img/bongseon/10.jpg',
        './img/bongseon/11.jpg',
        './img/bongseon/12.jpg',
        './img/bongseon/13.jpg',
        './img/bongseon/14.jpg',
    ],
    오픈예정 :[
        './img/ready.jpg',
        './img/ready.jpg',
        './img/ready.jpg',
        './img/ready.jpg'
    ],
    // 새 지점 추가 시 예시
    
    // 새지점 : [
    //     '이미지1',
    //     '이미지2',
    //     '이미지3',
    //     '이미지4',
    //     '이미지5',
    //     '이미지6',
    // ];
}



