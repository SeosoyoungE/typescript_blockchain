var Word = /** @class */ (function () {
    function Word(term, def) {
        this.term = term;
        this.def = def;
    }
    return Word;
}());
var Dict = /** @class */ (function () {
    function Dict() {
        this.wordList = {};
    }
    Dict.prototype.add = function (word) {
        if (!this.wordList[word.term]) {
            this.wordList[word.term] = word.def;
            console.log("".concat(word.term, " added"));
        }
        else {
            console.log("already exists");
        }
    };
    Dict.prototype.get = function (term) {
        return this.wordList[term];
    };
    Dict.prototype.delete = function (word) {
        if (this.wordList[word.term]) {
            delete this.wordList[word.term];
            console.log("".concat(word.term, " word deleted"));
        }
        else {
            console.log("not exists");
        }
    };
    Dict.prototype.update = function (word) {
        if (this.wordList[word.term]) {
            this.wordList[word.term] = word.def;
            console.log("1 word updated");
        }
        else {
            console.log("not exists");
        }
    };
    Dict.prototype.showAll = function () {
        var _this = this;
        console.log("<dictionary showAll> total= ".concat(Object.keys(this.wordList).length));
        Object.keys(this.wordList).forEach(function (i) {
            console.log("".concat(i, ": ").concat(_this.wordList[i]));
        });
    };
    Dict.prototype.count = function () {
        return Object.keys(this.wordList).length;
    };
    Dict.prototype.upsert = function (word) {
        this.wordList[word.term] = word.def;
    };
    Dict.prototype.exists = function (word) {
        if (this.wordList[word.term]) {
            console.log("this is here");
        }
        else {
            console.log("not exists");
        }
    };
    Dict.prototype.bulkAdd = function (words) {
        var _this = this;
        var i = 0;
        words.forEach(function (word) {
            if (!_this.wordList[word.term]) {
                _this.wordList[word.term] = word.def;
                i++;
            }
            else {
                console.log("".concat(word.term, " is already exists"));
            }
        });
        console.log("Total of ".concat(i, " word added"));
    };
    Dict.prototype.bulkDelete = function (words) {
        var _this = this;
        var i = 0;
        words.forEach(function (word) {
            if (_this.wordList[word.term]) {
                delete _this.wordList[word.term];
                i++;
            }
            else {
                console.log("".concat(word.term, " is not exists"));
            }
        });
        console.log("Total of ".concat(i, " word deleted"));
    };
    return Dict;
}());
console.log("---------------start");
//new parameter
var dict = new Dict();
var kimchWord = new Word("kimch", "김치");
var eggWord = new Word("egg", "달걀");
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
console.log("---------------closed");
