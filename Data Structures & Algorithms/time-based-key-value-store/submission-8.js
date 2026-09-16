class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if(!this.keyStore.has(key)) this.keyStore.set(key, []);
        this.keyStore.get(key).push([value, timestamp]);
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const arr = this.keyStore.get(key);
        let res;
        if(arr) {
            let l = 0, r = arr.length - 1, m;
            while(l <= r) {
                m = Math.floor((l + r) / 2);
                const time = arr[m][1];
                if(time <= timestamp) {
                    res = arr[m][0];
                    l = m + 1;
                } else {
                    r = m - 1;
                }
            }
            return res ?? "";
        }
        return "";
    }
}
