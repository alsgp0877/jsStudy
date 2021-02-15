var word='제로초'
while(true){
  var newword = prompt(word);
  if(word[word.length-1] === newword[0]){
    word = newword;
  }else{
    alert("끝말잇기 실패");
  }
}
