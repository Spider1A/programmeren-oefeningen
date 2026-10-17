let fina =0;
let even= 0;
let resultaateven= 0;
for(let vraag =0;vraag<10 ;vraag++){

    let i=parseFloat(await userInput.question("wat is jouw cijfer ? "));

    if(i% 2 == 0){
         resultaateven += i;
        

    }else if(i % 2== 1){
        fina+=i
        
        

    }else{
        even +=resultaateven

    

}
}
console.log(fina)
console.log(even)

process.exit();
