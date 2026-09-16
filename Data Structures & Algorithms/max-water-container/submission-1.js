class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let currentArea;
        let l = 0;
        let r = heights.length - 1;

        while(l < r) {
            currentArea = Math.min(heights[l], heights[r]) * (r - l);
            if(currentArea > maxArea) maxArea = currentArea;
            if(heights[l] <= heights[r]) l++;
            else r--;
        }

        return maxArea
    }
}
