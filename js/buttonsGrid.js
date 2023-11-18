function rotate() {
    console.log('hello');
    a = [1,2,3,6,9,8,7,4];
    
    final = fun(parseInt(document.getElementById('btn1').innerHTML), a);
    new_final = [final[0]];
    new_final = new_final.concat(final.reverse());
    let i;
    for(i = 0; i < a.length; i++) {
        document.getElementById("btn" + a[i]).innerHTML = new_final[i];
    }
}

function fun(start, a) {
	firstTime = false;
	secondTime = false;
	let final = [];
	i = a.length - 1;
	while(true) {
        console.log(i);
		if(a[i] == start && firstTime) {
            final.push(start);
			secondTime = true;
			break;
        }
		else if(a[i] == start && !firstTime)
			firstTime = true;
		else if(firstTime)
			final.push(a[i]);
		i--;
		if(i < 0)
			i = a.length - 1;
    }
    return final;
}
