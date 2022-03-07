import {fangHunter,fangPerms} from "./fanghunter.js"
let isVampire=(number)=>{//function which verifies if a number is a vampire one or not
    if(number.toString().length%2==1) return false;
    let [[bool],[fangs]]=fangHunter(number)
    return bool;
}
//Currently it can find the 8 first vampire numbers but not more ! next update'll be released soon
let vampireHunter=(i,j)=>{ //a function to list vampire numbers either it list the n first ones or the n vampire numbers in a range a,b : a<n<b
    let tab=[]
    if(j==undefined){
        j=i
        i=0;
        for(let found=0;found<j;i++){
            if(isVampire(i)){
                tab.push(i)
                found++
            }
        }
    }
   else{
        for(;i<=j;i++){
            if(isVampire(i)) tab.push(i)
        }
    }
    return tab.length==0?"None":tab;
}
//console.log(vampireHunter(8)) //shows the 8 first vampire numbers
console.log(vampireHunter(0,200000)) //shows the vampire numbers between 0 and 200000 that it can find
