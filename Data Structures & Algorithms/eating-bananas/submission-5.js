class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1, r, m, hours, max = piles[0], result;
        for(let i = 0; i < piles.length; i++) {
            const curr = piles[i];
            if(curr > max) max = curr;
        }

        r = max;

        while(l <= r) {
            m = Math.floor((l+r)/2);
            hours = 0;
            
            for(let i = 0; i < piles.length; i++) {
                hours += Math.ceil(piles[i]/m);
            }
            if(hours <= h) {
                result = m;
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        return result;
    }
}
