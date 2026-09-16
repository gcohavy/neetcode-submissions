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
            console.log('Current char: ' + char);

            if(map.has(char)) {
                cmap.set(char, 1 + (cmap.get(char) || 0));

                if(cmap.get(char) > map.get(char)) {
                    console.log('CHARACTER LIMIT EXCEEDED: ' + char);
                    do {
                        cmap.set(s2[l], cmap.get(s2[l]) - 1);
                        l++;
                        console.log('Decremented ' + s2[l] + ' to ' + cmap.get(s2[l]));
                        
                    } while(s2[l - 1] !== char && l < r);
                    
                    console.log('Process complete. Char: ' + cmap.get(char));
                }
                r++;
            } else {
                cmap.clear();
                r++;
                l = r;
            }

            for (const [key, value] of cmap) {
                console.log(key, value);
            }
            console.log('L/R: ' + l + '/' + r);
            if(r - l == s1.length) return true;
        }

        return false;
    }
}
