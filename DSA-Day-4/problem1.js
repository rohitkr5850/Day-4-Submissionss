/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    let bag = "";
    for(let i = 0; i < s.length; i++){
        let ch = s[i];
        if((ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9')){
            bag += ch;
        }
    }
    let rev = "";
    for(let i = bag.length - 1; i >= 0; i--){
        rev += bag[i];
    }
    return bag === rev;
};