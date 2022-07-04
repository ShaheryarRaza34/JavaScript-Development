/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/






function checkCashRegister(price, cash, cid) {
  const lookUp={
    "PENNY":1,
    "NICKEL":5,
    "DIME":10,
    "QUARTER":25,
    
    "ONE":100,
    "FIVE":500,
    "TEN":1000,
    "TWENTY":2000,
    "ONE HUNDRED":100000
  }
  let change = cash*100-price*100;
  console.log(change);
  let status='';
  let outputChange=[];
  let totalchange=change;
  let totalMoney=0;
  let reversecid=cid.filter(elem=>elem[1]!==0).reverse();
  
  for(let i=0; i<reversecid.length;i++){
    let currDenomination=reversecid[i][0];
    let availableMoney= reversecid[i][1]*100;
    totalMoney+=availableMoney;
    let amount =0;
    while(change>=lookUp[currDenomination]&& availableMoney>0){
      amount+=lookUp[currDenomination];
      change-=lookUp[currDenomination];
      availableMoney-=lookUp[currDenomination];
      }
      if(amount!==0){
        outputChange.push([currDenomination,amount/100]);
      }
  };
  if (change>0){
    status='INSUFFICIENT_FUNDS';
    outputChange=[];

  }
  else if(change==0 && totalchange==totalMoney){
    status='CLOSED';
    outputChange=cid;
  }
  else{
    status = 'OPEN';

  }
  return{'status':status,'change':outputChange};
    
  
}
