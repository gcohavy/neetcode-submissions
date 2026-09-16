class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let max = 0, l = prices[0];
        for(let i = 1; i < prices.length; i++) {
            if(prices[i] < l) l = prices[i];
            if(prices[i] - l > max) max = prices[i] - l;
        }
        return max;
    }
}
