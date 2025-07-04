/**
 * 滑动窗口的思路，固定的是尾指针。
 * 先相加得到大于等于target的sum,固定尾指针，然后移动start指针，减去nums[start],直到小于target，跳出循环。 
 */
var minSubArrayLen = function(target, nums) {
    let start, end
    start = end = 0
    let sum = 0
    let len = nums.length
    let ans = Infinity
    
    while(end < len){
        sum += nums[end];
        while (sum >= target) {
            ans = Math.min(ans, end - start + 1);
            sum -= nums[start];
            start++;
        }
        end++;
    }
    return ans === Infinity ? 0 : ans
};