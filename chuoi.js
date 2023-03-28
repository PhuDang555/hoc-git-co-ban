console.log("Emoji concatenation");
console.log('\uD83D\uDC69 + \u200D\u2764\uFE0F\u200D = \uD83D\uDC69\u200D\u2764\uFE0F\u200D');
console.log("");
console.log("Does not work for all combinations");
console.log('\uD83D\uDE00 + \u200D\u2764\uFE0F\u200D = \uD83D\uDE00\u200D\u2764\uFE0F\u200D');
console.log("");
console.log("Works also with base character");
console.log('\u0065 + \u0301 = \u0065\u0301');


let mystring = "fdgdfgdfgdf";
let arrayString = mystring.split('');
console.log(arrayString);
//> [ '2021', '07', '19' ]

let mystr = '56789abc345de12345';
let split_str = mystr.replace(/[^a-z]/g, '');
console.log(split_str);
 //> 5678934512345

 let el = mystr.match(/[^0-9]/g)[0];
 let ev = mystr.substring(0);
 console.log(ev);

 
let org_str = 'aiueo';
function daochuoi(){
    let chuoi = '';
    for(let i = org_str.length-1; i>=0;i--){
        chuoi += org_str[i];
    }
    return chuoi;
}

console.log(daochuoi(org_str));

let str = "I love you and our son";
let sub = "o";

console.log(str.split(sub).length-1);
//>4

let myarray = [5,2,3,1,4];
myarray.sort((a,b)=>b-a);

console.log(myarray);//>[ 1, 2, 3, 4, 5 ]


/*Tạo hàm tìm vị trí cuối cùng của phần tử x trong mảng JavaScript*/
function find_last_x(array, x){
    for (let i=0; i < array.length;i++){
        if (array[i]==x){
            return i;
        }
    }    
}

let array = [5, 4, 6, 7, 2, 8, 7, 3];

console.log(find_last_x(array, 6));
console.log(find_last_x(array, 7));


/*Tạo hàm đếm số phần tử giống nhau trong mảng JavaScript*/
function take_duplicate_element(array){
    let result = [];
    let count = 0;

    for (let i = 0; i < array.length; ++i) {
        for (let j = i+1 ; j < array.length; ++j) {
            if (array[i] == array[j]) { 
            //Tìm thấy phần tử giống nhau thì thêm vào mảng kết quả
            result.push(array[i]);
            ++ count;
            }
        }
    }
    console.log(result);
    console.log( "So phan tu giong nhau: " + result.length);
   
}


let array1 = [1,2,3,3,2,5]; 
let array2 = [1,1,2,3,2,5,5,8,9,6]; 

//đếm số phần tử giống nhau trong mảng JavaScript
take_duplicate_element(array1);
take_duplicate_element(array2);

/*tạo hàm tìm phần tử xuất hiện nhiều nhất trong mảng JavaScript*/
function array_unique(array){
    array.sort();

    let max =[0,0];

    //Sử dụng vòng lặp for để lọc ra các phần tử xuất hiện nhiều hơn 1 lần
    //So sánh số lần xuất hiện và thay đổi max khi cần.
    let count =1;
    for (let i = array.length-1; i > 0; --i) {
        if (array[i] == array[i-1]) ++count; //Thấy phần tử trùng nhau thì tiếp tục đếm
        else{
             //So sánh số lần xuất hiện với max[1] 
             if (max[1] < count){ 
                  //Nếu tìm thấy phần tử xuất hiện nhiều hơn thì gán phần tử vào max[0]
                  //Và gán số lần xuất hiện vào max[1]
                  max[0] = array[i];
                  max[1] = count;   
             }
        }
    }
    console.log( "Phần tử "+max[0]+" xuất hiện nhiều nhất với "+max[1]+" lần");
}


let array = [ 7, 2, 6, 7, 4, 9, 8 ];


//Tìm phần tử xuất hiện nhiều nhất trong mảng JavaScript
array_unique(array);


/*tạo hàm tìm phần tử xuất hiện nhiều nhất trong mảng JavaScript*/
function array_unique(array){
    array.sort();

    let max =0;

    //Sử dụng vòng lặp for để lọc ra các phần tử xuất hiện nhiều hơn 1 lần
    //So sánh số lần xuất hiện và thay đổi max khi cần.
    let count =1;
    for (let i = array.length-1; i > 0; --i) {
        if (array[i] == array[i-1]) ++count; //Thấy phần tử trùng nhau thì tiếp tục đếm
        else{
             //So sánh số lần xuất hiện với max[1] 
             if (max < count){ 
                  //Nếu tìm thấy phần tử xuất hiện nhiều hơn thì gán phần tử vào max[0]
                  //Và gán số lần xuất hiện vào max
                  max= array[i];   
             }
        }
    }
    console.log( "Phần tử "+max);
}


let array = [ 7, 2, 6, 7, 4, 9, 8 ];


//Tìm phần tử xuất hiện nhiều nhất trong mảng JavaScript
array_unique(array);



let array = [-5, 4.1, 0 , 1, -2 ,9 , 7.2,-8];

function check_chanle(n){
    let flag =1;
    if(n%2 == 0){
        flag = 0;
    }
    return flag;
}

const le =[];
const chan = [];

for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if(check_chanle(element)==0) {chan.push(element);
    
    }else le.push(element);
    
}

console.log(chan);
console.log(le);

/*Tạo hàm kiểm tra số âm số dương*/
function check_negative_positive_number(n){
    //flag = -1 => số âm
    //flag =  0 =>  số 0
    //flag =  1 => số dương

    let flag = 0;
    if (n >0 ) flag = 1;
    else if (n<0) flag = -1;
    return flag;
}

//Khởi tạo mảng cần tách ra các số âm dương
let array = [-5, 4, 0 , 1, -2 ,9 , 7,-8];

//Khai báo mảng kết quả chứa mảng âm và mảng số dương
let negative_array = [];
let positive_array = [];

//Sử dụng vòng lặp, kiểm tra số âm số dương và thêm vào mảng kết quả tương ứng
for (let i = 0; i < array.length; i++){
    if (check_negative_positive_number(array[i]) === -1)  negative_array.push(array[i]);
    else if (check_negative_positive_number(array[i]) === 1) positive_array.push(array[i])
}

//In mảng kết quả
console.log(negative_array);
console.log(positive_array);

function bubbleSort(array) {
    var size = array.length;
  
    // run loops two times: one for walking throught the array
    // and the other for comparison
    for (var i = 0; i < size - 1; i++) {
      for (var j = 0; j < size - i - 1; j++) {
  
        // To sort in descending order, change > to < in this line.
        if (array[j] > array[j + 1]) {
  
          // swap if greater is at the rear position
          var temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  }
  
  var arr = [3, 5, -2, 14, -9, 30];
  bubbleSort(arr);
  console.log(arr);


const findNumber = (num) => (func)=>{
    const result =[];
    for(let i =0 ; i <=num ; i++) {
        if(func(i)) result.push(i)
    }
    return result
}

const v1  = findNumber(10)

const v2 = v1((number)=> number % 2 ==0)

console.log(v2)

const pFunc = () => 
    new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello')}
        ,0)
})

const handle = async ()=>{
    try {
        const p = await pFunc()
        console.log(p)
    } catch (error) {
        console.log(error)
    } finally {
        console.log("hello cac ban")
    }
}

handle()