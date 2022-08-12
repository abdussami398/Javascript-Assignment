// QUESTION 1

function reverse() {
    var inpnum = document.getElementById("Number-1").value;
    var inp_rev = inpnum.toString().split("").reverse().join("");
    var res = `The Result is ${inp_rev}`
    document.getElementById("demo").innerHTML = res
}



// QUESTION 2

function palindrome() {
    var word = document.getElementById("Word-1").value;
    var capitalize = word.toLowerCase()
    var word_rev = capitalize.split("").reverse().join("")

    if (capitalize === word_rev) {
        var res_1 = `${word} is  palindrome`;
        document.getElementById("demo-2").innerHTML = res_1
    } else {
        var res_2 = `${word} is not palindrome`;
        document.getElementById("demo-2").innerHTML = res_2
    }
}



//QUESTION 3

function combine() {
    var combination = document.getElementById("Word-2").value
    list_of_string = new Array()
    for (i = 0; i < combination.length; i++) {
        for (j = 0; j < combination.length + 1; j++) {
            list_of_string.push(combination.slice(i, j))
        }
    }
    var res_3 = `The Combinations of ${combination} are: (${list_of_string})`
    document.getElementById("demo-3").innerHTML = res_3

}




// QUESTION 4
function alphaorder() {
    var arrange = document.getElementById("Word-3").value
    var order = arrange.split("").sort().join("")
    var res_4 = `The Arange order of "${arrange}" is: ${order}`

    document.getElementById("demo-4").innerHTML = res_4
}




// QUESTION 5

// function upletter() {
//     var input = document.getElementById("Word-4").value
//     var arr1 = input.split("")
//     var newarr = new Array()
//     var i;

//     for (var i = 0; i < arr1.length; i++) {
//         var check = newarr.push(arr1[i].charAt(0))

//     }


// var res_5 = `The answer of ${input} is ${farray.join("")}`

// document.getElementById("demo-5").innerHTML = res_5

// }


function uppercase() {
    var str = document.getElementById("Word-4").value
    var array1 = str.split(' ');
    var newarray1 = [];

    for (var x = 0; x < array1.length; x++) {
        newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    var joi = newarray1.join(' ');

    var res_5 = `The answer of ${str} is ${joi}`

    document.getElementById("demo-5").innerHTML = res_5

}



// QUESTION 6


// function long() {
//     var string1 = document.getElementById("Word-5")
//     var stro = string1.split(" ");
//     var longest = 0;
//     var word = null;
//     for (var i = 0; i <= stro.length - 1; i++) {
//         if (longest < stro[i].length) {
//             longest = stro[i].length;
//             word = stro[i];

//         }
//         var res_6    = `The answer of ${string1} is ${word}`

//         document.getElementById("demo-6").innerHTML = res_6
        
//     }
// }



function longestWord(string) {
    string = prompt("Enter Value to find longest Word in Sentence")
    var str = string.split(" ");
    var longest = 0;
    var word = null;
    str.forEach(function(str) {
        if (longest < str.length) {
            longest = str.length;
            word = str;
        }
    });
    return word;
}
console.log(`The Answer of Question 6 is ${longestWord()}`);






// Question 7


function vowel_count(str12)
{ 
  str12 = prompt("Type any value to find vowel count")  
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str12.length ; x++)
  {
    if (vowel_list.indexOf(str12[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(`The vowel count in this word are ${vowel_count()}`);






// QUESTION 8

function test_prime(n)
{
   n = prompt("Find Entered prime Number or not")
  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(`The entered number is Prime number: ${test_prime()}`);






// QUESTION 9

function detect_data_type(value)
{
var dtypes = [Function, RegExp, Number, String, Boolean, Object], x, len;
    
if (typeof value === "object" || typeof value === "function") 
    {
     for (x = 0, len = dtypes.length; x < len; x++) 
     {
            if (value instanceof dtypes[x])
            {
                return dtypes[x];
            }
      }
    }
    
    return typeof value;
}
console.log(detect_data_type(12));
console.log(detect_data_type('w3resource'));
console.log(detect_data_type(false));



// Question 10


function Second_Greatest_Lowest(arr_num)
{
  arr_num.sort(function(x,y)
           {
           return x-y;
           });
  var uniqa = [arr_num[0]];
  var result = [];
  
  for(var j=1; j < arr_num.length; j++)
  {
    if(arr_num[j-1] !== arr_num[j])
    {
      uniqa.push(arr_num[j]);
    }
  }
    result.push(uniqa[1],uniqa[uniqa.length-2]);
  return result.join(',');
  }

console.log(Second_Greatest_Lowest([1,2,3,4,5]));


