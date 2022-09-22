// Remove First and Last Character
    function removeChar(str) {
        const a = str.split("");
        let r = "";
        for (let i = 1; i < a.length - 1; i++) r += a[i];
        return r;
    }

    function removeChar(str){
        //You got this!
        str1 = str.split('');
        str1.shift();
        str1.pop();
        return str1.join('');
    };
    function removeChar(str) {
        return str.slice(1, -1);
    }