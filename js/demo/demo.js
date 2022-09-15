const obj = {
    cat1 : '2',
    'cat2' : function name(value){
        console.log(value)
    },
    'cat3' : {
        'cat4': {
            'cat5' : [1,2,4,5,6,7]
        }
    }
}

function log(value){
    console.log(value)
}
console.log(typeof obj?.cat3?.cat4?.cat5?.[6] === 'undefined')
// log(Number(true))
// log(true)
// obj.cat2?.('1')
// log(obj?.cat1)
if(obj?.cat1){
    log(obj.cat1)
}
