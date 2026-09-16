class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let arr = [];
        let max = 0, width = 0;

        for(let i = 0; i < heights.length; i++) {
            const curr = heights[i];
            while(arr.length && arr[arr.length-1][0] >= curr) {
                const last = arr[arr.length-1];
                width += last[1];
                max = Math.max(max, last[0] * width);
                arr.pop();
            }
            arr.push([curr, 1 + width]);
            width = 0;
        }

        while(arr.length) {
            const last = arr[arr.length-1];
            width += last[1];
            max = Math.max(max, last[0] * width);
            arr.pop();
        }

        return max;
    }
}
