class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const n = matrix[0].length - 1;
        let l = 0, r = matrix.length - 1;
        let m;

        while(l <= r) {
            m = (l + r) >> 1;
            const curr = matrix[m];
            const first = curr[0], last = curr[n];

            if(first === target || last === target) return true;

            if(first < target) {
                if(last > target) {
                    break;
                }
                l = m + 1;
            } else {
                r = m - 1;
            }
        }

        const arr = matrix[m];
        l = 0;
        r = n;

        while(l <= r) {
            m = (l + r) >> 1;
            if(arr[m] < target) {
                l = m + 1;
            } else if (arr[m] > target) {
                r = m - 1;
            } else {
                return true
            }
        }

        return false;
    }
}
