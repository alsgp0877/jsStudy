//js 0307
//구구단 구현
// 컴퓨터가 랜덤한 문제를 낸다 -> 내가 답을 입력한다 -> 답이 맞는가? 아닌가?
//Math.random()을 이용한다.
for(var i=0;i<5;i++){//for문안에 랜덤숫자 안넣어주면 랜덤 숫자 안받아옴 ㅋㅋ

var 숫자1 = Math.floor(Math.random()*9) + 1;
var 숫자2 = Math.floor(Math.random()*9) + 1;
var 문제 = 숫자1 * 숫자2;
var 문제1 = String(숫자1)+String('*')+String(숫자2);
//변수도 가져가면서 문자형으로 만들어야하는데 1)계속 연산이 되거나 아니면 2) ''안에 넣어주면 연산이 안되거나..
//결국 string으로 다째긴 함..
//console.log(문제1);

    var word1 = prompt(문제1);//답 입력 변수
    //제로초님 코드
    //var 답1 = prompt(String(숫자1)+'곱하기'+ String(숫자2));
    word1 = Number(word1);//prompt는 string형이기 때문에 숫자로써 써주기 위해서는 형변환해야함..까다로운것..

    if(문제 === word1){
      console.log("맞습니다");//답이 맞았을때도 문제내는것을 반복 but 다른걸로도 갈 수 있음 ㅇㅇ
      continue;
    }else{
      console.log("틀렸습니다");//console말고 alert로 내도 바로 창이 떠서 시각적으로 괜찮을 수 있음 
      continue;//답이 틀렸을때는 문제내는것을 계속 반복
    }
}
