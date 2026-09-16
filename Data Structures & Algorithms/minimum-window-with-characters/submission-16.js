class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t.length > s.length || t.length === 0) return '';
        let map = new Map(), cmap = new Map();
        let matches = 0, l = 0, r = 0;
        let res = '', window = '';

        for(let i = 0; i < t.length; i++) {
            map.set(t[i], 1 + (map.get(t[i]) || 0));
        }

        while (r < s.length) {
            if(matches < t.length) {
                window += s[r];
                cmap.set(s[r], 1 + (cmap.get(s[r]) || 0));
                if(map.has(s[r]) && cmap.get(s[r]) <= map.get(s[r])) matches++;
                r++;
            }

            while(matches === t.length) {
                res = res && res.length < window.length ? res : window;
                cmap.set(s[l], cmap.get(s[l]) - 1);
                if(cmap.get(s[l]) < map.get(s[l])) matches--;
                window = window.slice(1);
                l++;
            }
        }

        return res;
    }
}
