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



// 이미지 파일 목록
이미지목록 = {
    봉선점 : [
        'https://swiperjs.com/demos/images/nature-1.jpg',
        'https://swiperjs.com/demos/images/nature-2.jpg',
        'https://swiperjs.com/demos/images/nature-3.jpg',
        'https://swiperjs.com/demos/images/nature-4.jpg',
        'https://swiperjs.com/demos/images/nature-5.jpg',
        'https://swiperjs.com/demos/images/nature-6.jpg',
    ],
    오픈예정 :[
        'https://swiperjs.com/demos/images/nature-6.jpg',
        'https://swiperjs.com/demos/images/nature-6.jpg',
        'https://swiperjs.com/demos/images/nature-6.jpg',
        'https://swiperjs.com/demos/images/nature-6.jpg',
        'https://swiperjs.com/demos/images/nature-6.jpg',
        'https://swiperjs.com/demos/images/nature-6.jpg',
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



