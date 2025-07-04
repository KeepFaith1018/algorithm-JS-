/**
 * 思路
 * 1. 首先肯定是定义三个变量，start，end，mid
 * 2. 确定区间是左闭右开还是左闭右闭
 * 3. 注意while循环是在上面的区间内进行循环
 */
var search = function(nums, target) {
    let start = 0,end = nums.length-1,mid = 0
    // 左闭右闭
    // while(start <= end){
    //     // 位运算，向右移，向下取整
    //     mid =  (start+end) >> 1;
    //     if(nums[mid] == target){
    //         return mid;
    //     }else if(nums[mid] > target){
    //         end = mid-1;
    //     }else{
    //         start = mid+1
    //     }
    // }

    // 左闭右开
    // 特别的 end的大小需要修改 end = nums.length,因为是 左闭右开
    end = nums.length
        while(start < end){
        // 位运算，向右移，向下取整
        mid =  (start+end) >> 1;
        if(nums[mid] == target){
            return mid;
        }else if(nums[mid] > target){
            end = mid;
        }else{
            start = mid+1
        }
    }
    return -1
};
console.log(search([-1,0,3,5,9,12],9))
