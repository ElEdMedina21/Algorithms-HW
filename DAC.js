function DivideAndConquerSort(array,l,r){
    if(l>=r){
        return;
    }
    let m = l+ parseInt((r-l)/2);
    DivideAndConquerSort(array,l,m);
    DivideAndConquerSort(array,m+1,r);
    Merge(array,l,m,r);    
}

function Merge(array,l,m,r){
    let n1 = m-l+1;
    let n2 = r-m;

    let leftArray = new Array(n1);
    let rightArray = new Array(n2);

    for(let i = 0; i<n1; i++){
        leftArray[i] = array[l+i]
    }
    for(let j = 0; j<n2; j++){
        rightArray[j] = array[m+j+1]
    }

    let i = 0;
    let j = 0;
    let k = l;

    while(i<n1 && j<n2){
        if(leftArray[i]<=rightArray[j]){
            array[k]=leftArray[i];
            i++;
        }
        else{
            array[k]=rightArray[j];
            j++;
        }
        k++;
    }
    while(i<n1){
        array[k] = leftArray[i]
        i++
        k++
    }
    while(j<n2){
        array[k]=rightArray[j]
        j++
        k++
    }
}

let arr = [12, 11, 13, 5, 6, 7]
console.log(arr)
DivideAndConquerSort(arr,0,arr.length-1)
console.log(arr)
