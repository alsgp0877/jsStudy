/* 별모양 찍어보기 0217
*
**
***
****
*****
*/
//사전에 c언어로 짜본 로작
#include<stdio.h>

void main(){

	int i=0;
	int j=0;

	for(i=1;i<6;i++){
		for(j=1;j<=i;j++){
			printf("*");
		}
		printf("\n");
	}
}

//js 버전 0218
//이게 왜 되죠?...
/*
String.prototype.repeat()
메서드는 문자열을 '주어진 횟수만큼 반복'해 붙인 새로운 문자열을 반환합니다.
str.repeat(count)
ex) 'abc'.repeat(2) //'abcabc'
*/
for(var i=1; i<6;i++){
    console.log('*'.repeat(i));
}


/* 별모양 찍어보기
*****
****
***
**
*
*/

//사전에 c언어로 짜보기
#include<stdio.h>

void main(){

	int i=0;
	int j=0;

	for(i=1;i<6;i++){
		for(j=1;j<=6-i;j++){
			printf("*");
		}
		printf("\n");
	}
}

//js버전
//왜 안되나 싶었는데 부등호 잘못쓰고있었다..존나 피곤한가ㅏ..
for(var i=5; i>=1;i--){
    console.log('*'.repeat(i));
}

/* 별모양 찍어보기 0219
*****
 ****
  ***
   **
    *
*/
//c언어
#include<stdio.h>

void main(){

	int i=0;
	int j=0;

	for(i=1;i<=6;i++){
		for(j=1;j<=i;j++){
			printf(" ");
		}
		for(j=1;j<=6-i;j++){
			printf("*");
		}
		printf("\n");
	}
}

//js
//string 타입이라서 문자열 붙이듯 '+'을 써줘야 한다.
for(var i=1; i<=5;i++){
    console.log(' '.repeat(i)+'*'.repeat(6-i));
}

/* 별모양 찍어보기 0220
*********
 *******
  *****
   ***
    *
*/
//c언어
//확실히 c언어로 로직을 이해하고 나서 간단한 함수를 이용하는게 코딩이 쉽다
//그냥 냅다 repeat쓰려니까 잘안된다..
//왼쪽 정렬 -> 가운데 정렬 할때 양쪽을 1/2로 나눠서 해야한다고 첨엔 생각함..ㅋ

#include<stdio.h>

void main(){

	int i=0;
	int j=0;

	for(i=1;i<=5;i++){//총 5번 반복
		for(j=1;j<=i;j++){
			printf("-");
		}
/* 처음에 생각한 방식
		for(j=1;j<=i/2;j++){
			printf("-");
		}
*/
		for(j=1;j<=11-(i*2);j++){//2개씩 작아지는 코드
			printf("*");
		}
		for(j=1;j<=i;j++){
			printf("-");
		}
		printf("\n");
	}
}

//js
for(var i=1; i<=5;i++){
    console.log('-'.repeat(i)+'*'.repeat(11-(2*i)));
}

/* 계속 막힌 방식
별은 찍히는데 공백은 계속 이상하케 늘어난다..
하지만 for문은 하나만 쓰고자 하는데 어쩌지..
'+' '-' 쓰면 당연히 1씩 증감인데 ㅋㅋㅋ왜 곱하기 할생각안함?ㅠㅋㅋ
for(var i=1; i<=9; i=i+2){
    console.log('-'.repeat(i)+'*'.repeat(10-i));
}
*/


/* 별모양 찍어보기 0221
     *
    **
   ***
  ****
 *****
*/

//c언어 ver
#include<stdio.h>

void main(){

	int i=0;
	int j=0;

	for(i=1;i<=6;i++){
		for(j=1;j<=6-i;j++){
			printf("-");
		}
		for(j=1;j<=i;j++){
			printf("*");
		}
		printf("\n");
	}
}

//js내일

/* 별모양 찍어보기 0222 숫자는 안맞지만 대충 이런느낌으로 나옴
     *
    ***
   *****
  *******
 *********
*/
//c언어 ver
#include<stdio.h>

void main(){

	int i=0;
	int j=0;

	for(i=1;i<=5;i++){//총 5번 반복
		for(j=1;j<=5-i;j++){
			printf("-");
		}
		for(j=1;j<i*2;j++){//1이 포함되야되는데...j<i*2 1포함 j<=i*2 2포함 j<i*3 2포함 j<=i*3 3포함
			printf("*");
		}
		printf("\n");
	}
}

//js 내일
