class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const arr = [];
        for (let i = 0; i < s.length; i++) {
            switch(s[i]) {
                case '(':
                case '{':
                case '[':
                    arr.push(s[i]);
                    continue;
                case ')':
                    if(arr.pop() === '(') {
                        continue;
                    }
                    return false;
                case '}':
                    if(arr.pop() === '{') {
                        continue;
                    }
                    return false;
                case ']':
                    if(arr.pop() === '[') {
                        continue;
                    }
                    return false;
            }

        }
        return !arr.length;
    }
}
