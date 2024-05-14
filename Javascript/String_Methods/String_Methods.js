//  String Method
/*
String Length           ==> count the String Length
String slice            ==>
String Substring        ==>
String Substr           ==>
String Replace          ==>     
String ReplaceAll       ==>
String toUpperCase      ==> Sting convert in UpperCase(VIJAY)
String toLowerCase      ==> Sting convert in LowerCase(vijay)
String Concat           ==> two string Murge
String trim             ==> remove All Space
String trimStart        ==> remove All Space to Start
String trimEnd          ==> remove All Space to End
String PadStart         ==> add to icone in start => (####123456)
String PadEnd           ==> add to icone in End   => (123456####)
String CharAt           ==>
String CharCodeAt       ==>
String Split            ==>

*/

// length
// let arr="javascript";
// let txt = arr.length;
// console.log(txt);   // 10

// slice
// let arr = "banana,kiwi,apple,orange,mango";
// let txt = arr.slice(12,17);
// console.log(txt);    // APPLE

// subString
// let arr = 'javascript is most popular programing language';
// // let txt = arr.substring(11);     // is most popular programing language
// let txt = arr.substring(11,26);     // is most popular
// console.log(txt);    

//   SubStr
// let arr = "banana,kiwi,apple,orange,mango";
// let txt = arr.substr(7);     // kiwi,apple,orange,mango
// console.log(txt);


// string replace
// let arr = " i am abhishek sharma";
// let txt = arr.replace('abhishek', 'rohit');
// console.log(txt);     //  i am rohit sharma

// String replaceAll
// let arr = 'hello surat welcome to surat';
// let txt = arr.replaceAll('surat','dubai');
// console.log(txt);   // hello dubai welcome to dubai

//string strim
// let arr = '           hello surat , how are you';
// let txt = arr.trim();    // remove space
// console.log(txt);        // hello surat , how are you


//string strimStart
// let arr = '           hello surat , how are you';
// let txt = arr.trimStart();     // remove space to the start
// console.log(txt);             //  hello surat , how are you


// string strimEnd
// let arr = '    hello  surat           ';
// let txt = arr.trimEnd();
// console.log(txt);    //     hello  surat


// string Padstart
let arr = '1234567890';
let txt = arr.padStart(4,"*");
console.log(txt);
