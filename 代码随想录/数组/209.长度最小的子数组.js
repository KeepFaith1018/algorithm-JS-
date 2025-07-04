/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {

    // 使用双指针
    let res = Number.MAX_VALUE;
    for(let i =0;i<nums.length;i++){
        let sum = nums[i]
        if(sum >= target){
            res = 1;
            continue
        }

        for(let j = i+1;j<nums.length;j++){
            sum += nums[j]
            if(sum >= target){
                res = Math.min(j-i+1,res);
                break;
            }
        }
    }
    return res === Number.MAX_VALUE?0:res;
};