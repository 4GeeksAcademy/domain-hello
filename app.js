
//Arrays//
let initial = ["you", "git","nitro"];
let midle = ["space", "tube","hub"];
let domain = ["internet", "matrix", "puedes"];
let extension = [".com", ".es"];

// Domain Array//
let FullArray = [];

// Fors anidados//
for (let i = 0; i < initial.length; i++) {
    for (let m = 0; m < midle.length; m++) {
        for (let d = 0; d < domain.length; d++) {
            for (let h = 0; h < extension.length; h++) {
                let domainName;
                let extensionHack = extension[h].replace(".", "");
                if (domain[d].endsWith(extensionHack)) {
                    let modifiedDomain = domain[d].slice(0, -extensionHack.length);
                    domainName = initial[i] + midle[m] + modifiedDomain + extension[h];
                } else {
                    domainName = initial[i] + midle[m] + domain[d] + extension[h];
                }
                FullArray.push(domainName);
            }
        }
    }
}
console.log(FullArray);
