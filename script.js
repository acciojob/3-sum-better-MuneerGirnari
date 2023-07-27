function threeSum(arr, target) {
// write your code here
    arr.sort((a,b)=>a-b);
    let dif = Number.MAX_VALUE;
    for(let i=0;i<arr.length-2;i++){
        let j = i+1;
        let k = arr.length-1;
        while(j<k){
            let sum = arr[i]+arr[j]+arr[k];
            if(Math.abs(target-sum)<Math.abs(target-dif)){
                dif=sum;
            }
            if(sum<target){
                j++;
            }
            else if(sum>target){
                k--;
            }
            else{
                return dif;
            }
        }
    }
    return dif;
}

module.exports = threeSum;
