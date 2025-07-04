/**
 * 要求使用o（n）的时间来解决，那么需要使用另外的空间来获得时间了
 * 观察数组，它平方后的数据顺序，肯定是从外向内减小的趋势，使用双指针来解决
 * 
 */
var sortedSquares = function(nums) {
    const ans= [];
    let left = 0,
        right = nums.length - 1;

    while (left <= right) {
        // 右侧的元素不需要取绝对值，nums 为非递减排序的整数数组
        // 在同为负数的情况下，左侧的平方值一定大于右侧的平方值
        if (Math.abs(nums[left]) > nums[right]) {
            
            ans.unshift(nums[left] ** 2);
            left++;
        } else {
            ans.unshift(nums[right] ** 2);
            right--;
        }
    }

    return ans;
};