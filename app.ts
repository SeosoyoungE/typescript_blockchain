type WordList={
  [key:string]:string
}

class Word{
  public term:string
  public def:string
  constructor(term:string,def:string){
      this.term=term
      this.def=def
  }
}

class Dict{
  private wordList:WordList
  constructor(){this.wordList={}}

  add(word:Word):void{
      if(!this.wordList[word.term]){
          this.wordList[word.term]=word.def;
          console.log(`${word.term} added`)
      }else{
          console.log("already exists")
      }
  }
  get(term:string):string{
      return this.wordList[term];
  }
  delete(word:Word):void{
      if(this.wordList[word.term]){
          delete this.wordList[word.term]
          console.log(`${word.term} word deleted`)

      }else{
          console.log("not exists")
      }
  }
  update(word:Word):void{
      if(this.wordList[word.term]){
          this.wordList[word.term]=word.def;
          console.log("1 word updated")

      }else{
          console.log("not exists")
      }
  }
  showAll():void{
      console.log(`<dictionary showAll> total= ${Object.keys(this.wordList).length}`)
      Object.keys(this.wordList).forEach((i)=>{
          console.log(`${i}: ${this.wordList[i]}`);
      })
  }
  count():number{
      return Object.keys(this.wordList).length;
  }
  upsert(word:Word):void{
      this.wordList[word.term]=word.def;
  }
  exists(word:Word){
      if(this.wordList[word.term]){
          console.log("this is here");
      }else{
          console.log("not exists")
      }
  }
  bulkAdd(words:Word[]):void{
      var i=0;
      words.forEach((word)=>{
          if(!this.wordList[word.term]){
              this.wordList[word.term]=word.def;
              i++
          }else{
              console.log(`${word.term} is already exists`)
          }
      })
      console.log(`Total of ${i} word added`);
  }
  bulkDelete(words:Word[]):void{
      var i=0;
      words.forEach((word)=>{
          if(this.wordList[word.term]){
              delete this.wordList[word.term]
              i++
          }else{
              console.log(`${word.term} is not exists`)
          }
      })
      console.log(`Total of ${i} word deleted`);
  }
  }
}

console.log("---------------start")

//new parameter
const dict=new Dict();
const kimchWord=new Word("kimch","김치");
const eggWord=new Word("egg","달걀")


//test

//dict.add(kimchWord);
//dict.add(eggWord);
// console.log(dict);

// console.log(dict.get("kimch"));

// dict.delete(kimchWord);
// console.log(dict);

//dict.showAll();

//console.log(dict.count());

// dict.bulkAdd([kimchWord,eggWord]);
// dict.showAll();

// dict.delete(kimchWord);
// dict.bulkDelete([kimchWord,eggWord]);

// dict.showAll();
console.log("---------------closed")
