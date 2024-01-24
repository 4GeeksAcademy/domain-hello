
//Arrays//
let initial=["your","git","meta","open","nitro"];
let midle=["space","book","tube","hub","earth"];
let domain=["inter.net","matr.ix","doma.in",".exe"];

//Domain Array//
let FullArray=[];
//fors anidados//
for (let i = 0; i < initial.length; i++) {
    for (let m = 0; m < midle.length; m++) {
        for (let d = 0; d < domain.length; d++) {
            let FullDomain=initial[i]+midle[m]+domain[d];
            FullArray.push(FullDomain);
            
           
            
        }     
    }    
}
console.log(FullArray);

 