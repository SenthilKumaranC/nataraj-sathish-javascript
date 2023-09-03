function printId(id){
   console.log(id)
}
setTimeout(() =>{
    console.log(1)
},2000)
const sdsd = ()=>{
    return () => console.log("dfdfd")
}
setTimeout(sdsd(),2000)

function hocIsGreater(requiredLen) {
    return  (input)=>{
        return !!input && input.length > requiredLen
    }
}
function IsGreaterThan5(input,requiredLen){
    return !!input && input.length > requiredLen
}

function IsGreaterThan5(input){
    return !!input && input.length > 5
}

function IsGreaterThan5(input){
    return !!input && input.length > 10
}