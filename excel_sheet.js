var titleToNumber = function(s) {
    const alphabet = {
        A:1,
        B:2,
        C:3,
        D:4,
        E:5,
        F:6,
        G:7,
        H:8,
        I:9,
        J:10,
        K:11,
        L:12,
        M:13,
        N:14,
        O:15,
        P:16,
        Q:17,
        R:18,
        S:19,
        T:20,
        U:21,
        V:22,
        W:23,
        X:24,
        Y:25,
        Z:26
    }
    var result = 0;
    var arrayOfS = s.split('');
    for (var index = 0; index < arrayOfS.length; index++) {
        result += alphabet[arrayOfS[index]] * Math.pow(26, arrayOfS.length - 1 - index);
        console.log(index)
    }
    return result;
};


// var titleToNumber = function(s) {
//     const store = {A:1,B:2,C:3,D:4,E:5,F:6,G:7,H:8,I:9,J:10,K:11,L:12,M:13,N:14,O:15,P:16,Q:17,R:18,S:19,T:20,U:21,V:22,W:23,X:24,Y:25,Z:26}
//     let output = 0;
//     const arr = s.split('')
//     for (let i = 0; i < arr.length; i++) {
//         output += store[arr[i]] * Math.pow(26, arr.length - 1 - i)
//     }
//     return output;
// };

console.log(titleToNumber("ZY"))

var word = "AB"
console.log(word.length)

console.log(Math.pow(26, 0));