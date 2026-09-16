class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;
        let l = 0, r = 0;
        let char;
        let map = new Map(), cmap = new Map();

        for(let i = 0; i < s1.length; i++) {
            map.set(s1[i], 1 + (map.get(s1[i]) || 0));
        }

        while(r < s2.length) {
            char = s2[r];

            if(map.has(char)) {
                cmap.set(char, 1 + (cmap.get(char) || 0));

                if(cmap.get(char) > map.get(char)) {
                    do {
                        cmap.set(s2[l], cmap.get(s2[l]) - 1);
                        l++;
                    } while(s2[l - 1] !== char && l < r);
                }
                r++;
            } else {
                cmap.clear();
                r++;
                l = r;
            }
            
            if(r - l == s1.length) return true;
        }

        return false;
    }
}
