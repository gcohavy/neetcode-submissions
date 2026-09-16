class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let max = 0;
        let maxI = 0;
        for(let i = 0; i < height.length; i++) {
            if (height[i] > max) {
                max = height[i];
                maxI = i;
            }
        }
        let currentWallL = 0, currentWallR = 0, currentCupLeft = 0, currentCupRight = 0, total = 0;
        for(let i = 0; i <= maxI; i++) {
            if(height[i] >= currentWallL) {
                currentWallL = height[i];
                total += currentCupLeft;
                currentCupLeft = 0;
            } else {
                currentCupLeft += currentWallL - height[i];
            }
        }
        for(let r = height.length - 1; r >= maxI; r--) {
            if(height[r] >= currentWallR) {
                currentWallR = height[r];
                total += currentCupRight;
                currentCupRight = 0;
            } else {
                currentCupRight += currentWallR - height[r];
            }
        }

        return total;
    }
}
