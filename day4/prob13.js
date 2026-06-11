//13번 문제
function makeNumberRows(n){
	for(let i = 1; i<=n; i++){
        let nums = "";

		for(let j = 0; j<n; j++){
			nums += i;
		}
        console.log(nums);
	}
}