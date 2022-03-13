var a=[123, false, true, "salom", null, true];

for (i=0; i<a.length; i++){
    if(typeof a[i]==="boolean"){
        delete a[i];
    }
}

console.log(a);