// Best time to buy and sell stock.

// TC - O(n) | SC - O(1)

function maxProfit(arrayOfStockPrices) {
    let profit = 0;
    let low = Infinity;
    for (let i = 0; i < arrayOfStockPrices.length; i++) {
        if (arrayOfStockPrices[i] < low)
            low = arrayOfStockPrices[i];
        profit = Math.max(profit, arrayOfStockPrices[i] - low)
    }
    return profit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); //5
console.log(maxProfit([7, 6, 4, 3, 1])); // 0



/*
if(arrayOfStockPrices===[]){
        return 0;
    }
    let profit=0;
    let i=0;
    while(i<arrayOfStockPrices.length-1){
        let cp=arrayOfStockPrices[i];
        let j=i+1;
        while(j<arrayOfStockPrices.length){
            let sp=arrayOfStockPrices[j]
            profit=Math.max(profit,sp-cp);
            j++;
        }
        i++;
    }
    return profit;
*/