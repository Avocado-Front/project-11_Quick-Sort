// Quick Sort is one of the way in sorting the Numbers

let list = []

for(let c=1;c<10;c++){
    let num = Number(prompt('Type 10 Numbers:'))
    list.push(num)
    console.log(list);
}

for(let i=0;i<list.length;i++){
    let cursor = list[i]
    let pos = i
    while(pos > 0 && list[pos-1] > cursor){
        list[pos] = list[pos-1]
        pos = pos - 1 
    }
    list[pos] = cursor
}
alert(list)