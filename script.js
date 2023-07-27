function threeSum(arr, target) {
// write your code here
    let [i,j,k] = [0,1,2];
    let dif = Integter.MAX_VALUE;
    while(i<=arr.length-3){
        while(j<=arr.length-2 && k<=arr.length-1){
            let sum = arr[i]+arr[j]+arr[k];
            let ans = target - sum < dif? sum : dif;
            j++;
            k++;
        }
        i++;
    }
    return ans;
}

module.exports = threeSum;
