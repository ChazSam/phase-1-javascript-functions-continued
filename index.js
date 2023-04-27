// code your solution here
function saturdayFun(x = 'roller-skate'){
    return `This Saturday, I want to ${x}!`
}

function mondayWork(y = 'go to the office'){
    return `This Monday, I will ${y}.`;
}

function wrapAdjective(s="*"){
   return function (z="special"){
    return `You are ${s}${z}${s}!`

   }
}