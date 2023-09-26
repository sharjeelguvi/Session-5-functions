//----------------------------sending http request ------------------------------------------

// let xhr = new XMLHttpRequest();

// xhr.open('GET','https://fakestoreapi.com/products',true)

// xhr.onload = function(){
//     if(xhr.status===200){ //checking if server has send proper request
//         let response = JSON.parse(xhr.responseText); //parse the json
////         console.log(response) //formatted array data
//         let filteredArray = [] ;
//         for(let i=0;i<response.length;i++){
//             let element = response[i] //element
//             if(element.category==="women's clothing"){
//                 //array.push is a method to push data into array
//                 filteredArray.push(element)
//             }
////             console.log("index and array",i,filteredArray)
//         }
        
//     }else{
////         console.log("Error") //throww
//     }
// }

// //send the request
// xhr.send()


//---------------------------sending http request ------------------------------------------
// let string = "ABKLJAUOJWOER"
//// console.log(string.length)

// let text = "APPLE, BANANA, KIWI, BANANA";

// let smallString="Hello"
//// console.log(text.slice(7,13)) //(beginning and end) // n to n-1
//// console.log(text.slice(7)) // n to length-1
//// console.log(text.length)
//// console.log(text.slice(-12,-5))

// //substring
// //substring we cannot use negative index but it's similar to slice
//// console.log(smallString.slice(-5,-1)) //n-1 to n just for negative notation
//// console.log(smallString.substring(0,3)) //n to n-1
//// console.log(text.substring(7))

//// console.log(text.replace("BANANA","MANGO")) //most usefull method

//// console.log(text.replaceAll("BANANA","MANGO")) //most usefull method

//// console.log(smallString.toUpperCase())
//// console.log(text.toLowerCase())

//// console.log(text.concat(" ",smallString))

// let anotherString = "World"
// let newString = smallString + " " + anotherString;
// let text1 = "              Hello world" //most usefull method
//// console.log(text1.trim())
//// console.log(smallString.charAt(1)) //indexing starts from 0
// smallString[0]="Y"
//// console.log(smallString[2])

//// console.log(text.split(",")) //most usefull method

////console.log(smallString)


let array = [1,2,4,5]
//console.log(array.length)
//console.log(array.toString())
let poppedElement = array.pop()
array.push(poppedElement)
//console.log(array,poppedElement)

let shift = array.shift()
//console.log(shift,array)

let unshift = array.unshift(10,20)
//console.log(array,unshift)

array[0]=100; //for array it works and for string it doesn't
array[array.length] = 25
let arr = delete array[8]
//console.log(array)


let array2 = [5,6,7,8]
//console.log(array.concat(array2))

const newArr = [[{name:"he"}],[{name:"h"}],[{name:"q"}]]
//console.log(newArr)

let stringArray = ["Banana","Orange","Apple","Mango"]
let result = stringArray.splice(2,1,"Lemon","Kiwi") //result is the element which was removed and stringArray is the actual array on which computation or operation was done
//console.log(stringArray,result)

let newArr1 = [5,4,3,2,1]
let n = newArr1.sort();
//console.log(n,newArr1)

//search for slice on your own and practice it

//functions-----------------------
//one is paramater and one is argument
    function add(num1,num2){ //num1 and num2 paramters
        //write some code;
        let arr1 = [1,2,4]
        let arr2 = [4,5,6]
        let sum = arr1 + arr2
        return sum;
    }

    let value = add(1,3); //1,3 arguments

    //O notation - time complexity
    
    
    let sum = 1
    //arrow function
    //iife
    let variable = (num)=>{
        sum = sum + num 
        
        console.log(sum)
    }
    variable(1)

    
    
    


//functions-----------------------

//assignment - see for time complexity of functions and loops























































