class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const arr = [];
        let current;
        for (let i = 0; i < s.length; i++) {
            switch(s[i]) {
                case '(':
                case '{':
                case '[':
                    arr.push(s[i]);
                    break;
                case ')':
                    if(arr.pop() === '(') {
                        break;
                    } else return false;
                case '}':
                    if(arr.pop() === '{') {
                        break;
                    } else return false;
                case ']':
                    if(arr.pop() === '[') {
                        break;
                    } else return false;
            }

        }
        return !arr.length;
    }
}
