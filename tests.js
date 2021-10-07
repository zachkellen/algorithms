function maskify(cc) {
    let returnStr = "";
    if (cc.length < 5) {
        return cc;
    } else {
        for (let i = 0; i < cc.length; i++) {
            if (cc.length - i < 5) {
                returnStr += cc[i];
            } else{
                returnStr += "#";
            }
        }

    }

    return returnStr;
}

console.log(maskify('4556364607935616'))