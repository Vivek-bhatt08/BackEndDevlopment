class OrderBook {
    constructor(symbol) {
        this.symbol = symbol;
        this.bids = [];
        this.ask = [];
        this.currentPrice = null;
        this.trades = [];
    }

    _sort(side) {
        if (side === "BUY") {
            this.bids.sort((a, b) => b.price - a.price || a.timeStamp - b.timeStamp);
        } else {
            this.ask.sort((a, b) => a.price - b.price || a.timeStamp - b.timeStamp);
        }
    }

    placeorder(price, quantity, type, side, userName) {
        let newOrder = {
            symbol: this.symbol,
            orderId: Math.floor(Math.random() * 10000),
            side: side,
            type: type,
            price: Number(price),
            originalQty: Number(quantity),
            executedQty: 0,
            remainingQty: Number(quantity),
            user: userName,
            timeStamp: Date.now()
        };

        if (newOrder.type === "LIMIT") {
            let result = this._LimitMatch(newOrder);
            if (result.remainingQty > 0) {
                if (result.side === "BUY") {
                    this.bids.push(result);
                } else {
                    this.ask.push(result);
                }
                this._sort(result.side);
            }
        } else {
            let result = this._MarketMatch(newOrder);
        }
    }

    _LimitMatch(order) {
        if (order.side === "BUY") {
            let askArr = this.ask;
            while (order.remainingQty > 0 && askArr.length > 0) {
                let top = askArr[0];
                if (top.price <= order.price) {
                    let tradeQty = Math.min(top.remainingQty, order.remainingQty);

                    order.executedQty += tradeQty;
                    order.remainingQty -= tradeQty;
                    top.executedQty += tradeQty;
                    top.remainingQty -= tradeQty;

                    if (top.remainingQty === 0) askArr.shift();
                } else break;
            }
        } else if (order.side === "SELL") {
            let bidArr = this.bids;
            while (order.remainingQty > 0 && bidArr.length > 0) {
                let top = bidArr[0];
                if (top.price >= order.price) {
                    let tradeQty = Math.min(top.remainingQty, order.remainingQty);

                    order.executedQty += tradeQty;
                    order.remainingQty -= tradeQty;
                    top.executedQty += tradeQty;
                    top.remainingQty -= tradeQty;

                    if (top.remainingQty === 0) bidArr.shift();
                } else break;
            }
        } else {
            return "Invalid order side";
        }

        return order;
    }

    _MarketMatch(order) {
        // (for now same as _LimitMatch)
        return this._LimitMatch(order);
    }
}

// test
let BTCUSD = new OrderBook("BTC_USD");

BTCUSD.placeorder(100, 5, "LIMIT", "BUY", "Vivek JR");
BTCUSD.placeorder(101, 5, "LIMIT", "BUY", "Vivek JR 2");
BTCUSD.placeorder(99, 5, "LIMIT", "BUY", "Vivek JR 3");

console.log(BTCUSD);

// BTCUSD.placeorder()

//homwork --> Market Match 
