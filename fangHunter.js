//Given a 8 digit vampire Number , you must find its fangs

/*A number n with 2k  digits is called vampire there exists two numbers  x  and  y  of  k  digits each
such that n=x*y  and that x  and y  together have the same digits of  n.
Moreover, to exclude numbers which can be trivially obtained from smaller ones, x  and  y  cannot end both in 0.*/

let fangHunter=(vampire)=>{ //function to hunt a given vampire number's fangs next we will try a less restricted fangHunter
    let tab=[];
    for(let i=1234;i<=9876;i++)
        if(vampire%i==0) tab.push(i.toString()) //we get a list of all of the numbers who divide the vampire

    for(let i=0;i<tab.length;i++)
        for(let j=i+1;j<tab.length;j++)
            if(Number(tab[i])*Number(tab[j])==vampire) //simple application of the "fang" definition 
                return tab[i]+" "+tab[j];
        return false
}
console.log(fangHunter(13269258))
/*
We'll try to code a vampireHunter and a less restricted fangHunter soon :)
*/
