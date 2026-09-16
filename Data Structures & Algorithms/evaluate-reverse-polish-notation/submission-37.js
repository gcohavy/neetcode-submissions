class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        let result;

        for(let i = 0; i < tokens.length; i++) {
            const num = +tokens[i];
            if(tokens.length === 1) return num;

            if(!Number.isNaN(num)) {
                stack.push(num);
                continue;
            }

            const operator = tokens[i];
            const var2 = stack[stack.length - 1];
            const var1 = stack[stack.length - 2];
            stack.pop();
            stack.pop();
            console.log(var1 + operator + var2 + ' = ');
            switch (operator) {
                case '+':
                    stack.push(var1 + var2);
                    continue;
                case '-':
                    stack.push(var1 - var2);
                    continue;
                case '*':
                    stack.push(var1 * var2);
                    continue;
                case '/':
                    stack.push(Math.trunc(var1 / var2));
                    continue;
                default:
                    continue;
            }
        }
        return stack[0];
    }
}
