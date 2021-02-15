var i=1;
var j=1;

for(i=1;i<5;i++){
  var word1 = prompt('첫 제시어');
    for(j=1;j<5;j++){
      var word2 = prompt('대답 단어');
        if(word1.charAt(word1.length-1) === word2.charAt(0)){
          console.log("맞습니다");
          break;

        }else{
          console.log("틀렸습니다.");
          console.log("맞는단어 입력해주세요.");
          continue;
        }

    }<!--두번째 for문-->
    console.log(i+"라운드");
}<!--첫번째 for문-->
