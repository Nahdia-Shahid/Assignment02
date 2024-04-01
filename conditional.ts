//Q#1
var num:number=56;
if (num%2==0){
    console.log(num,"is an even number");
} else{
    console.log(num," is an odd number");
}
if (num>0){
    console.log(num," is a positive number");
} else if (num<0){
    console.log(num," is negative number");
} else{
    console.log(num,"is zero");
}
if (num%2==0 && num%3==0){
    console.log(num," is divisible by both 2 and 3");
}else if (num%2==0){
    console.log(num,"is divisible by 2");
}else if(num%3==0){
    console.log(num,"is divisible by 3");
}else {
    console.log(num,"is not divisible by either 2 or 3");
}
//Q#2
var age:number=21;
var nationality:string="Pakistani";
if(age>=18){
    if(nationality=="Pakistani"){
        console.log("You are eligible to vote");
    }
} else{
    console.log("Please obtain a valid ID to vote");
}
//Q#3
var user_age:number=3;
if(user_age>=0 && user_age<=12){
    console.log("The user is a child");
} else if(user_age>=13 && user_age<=19){
    console.log("The user is a teenager");
} else if(user_age>=20 && user_age<=59){
    console.log("The user is an adult");
} else {
    console.log("The user is a senior citizen")
}
//Q#4
var month:number=6;
if (month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
    console.log("The number of days are 31");
} else if (month==2){
    console.log("The number of days are 28");
} else if(month==4 || month==6 || month==9 || month==11){
    console.log("The number of days are 30");
}else{
    console.log("Invalid input");
}
//Q#5
var year:number=2000;
if(year%4==0){
    if(year%100==0){
        if(year%40==0){
            console.log("Year is a leap year");
        }else{
            console.log("Year is not a leap year");
        }
    }else{
        console.log("Year is not a leap year");
    }
}else{
    console.log("Year is not a leap year");
}