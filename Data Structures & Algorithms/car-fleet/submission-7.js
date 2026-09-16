class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        if(!position.length) return 0;

        let counter = 0;
        let arr = [];
        const res = [];

        for(let i = 0; i < position.length; i++) {
            arr.push([position[i], speed[i]]);
        }
        arr.sort((a,b) => b[0] - a[0]);

        console.log(arr);

        for(let i = 0; i < arr.length; i++) {
            const time = this.getTime(target, arr[i])
            console.log('Current time: ' + time + '. and last time: ' + res.length ?? res[res.length - 1])
            if(!res.length || time > res[res.length - 1]) {
                res.push(time);
            }
        }

        return res.length;
    }

    getTime(target, ps) {
        return (target - ps[0]) / ps[1];
    }
}
