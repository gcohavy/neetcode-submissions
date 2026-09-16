class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const minStack = this.minStack;
        const length = minStack.length;
        this.stack.push(val);
        let newMin;
        if (length) {
            const min = minStack[length - 1];
            newMin = val < min ? val : min;
        } else newMin = val;
        minStack.push(newMin);
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1];
    }
}
