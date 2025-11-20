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
            this.bids.sort((a, b) => {
                if (a.price !== b.price) {
                    return b.price - a.price; // higher price first
                }
                return a.timeStamp - b.timeStamp; // earlier first
            });
        } else {
            this.ask.sort((a, b) => {
                if (a.price !== b.price) {
                    return a.price - b.price; // lower price first
                }
                return a.timeStamp - b.timeStamp;
            });
        }
    }

    placeOrder(price, quantity, type, side, userName) {
        let newOrder = {
            symbol: this.symbol,
            orderId: Math.floor(Math.random() * 1000000),
            side: side,
            type: type,
            price: price !== null ? Number(price) : null,
            originalQty: quantity,
            executedQty: 0,
            remainingQty: quantity,
            user: userName,
            timeStamp: Date.now()
        };

        let trades = [];

        if (newOrder.type === "LIMIT") {
            let [order, trade] = this._LimitMatch(newOrder, trades);

            if (order.remainingQty > 0) {
                if (order.side === "BUY") {
                    this.bids.push(order);
                } else {
                    this.ask.push(order);
                }
                this._sort(order.side);
            }

            if (trade && trade.length > 0) {
                this.trades = [...this.trades, ...trade];
            }

            return { book: this.getBookSnapShot(), trade, order };

        } else if (newOrder.type === "MARKET") {
            let [order, trade] = this._MarketMatch(newOrder, trades);

            if (trade && trade.length > 0) {
                this.trades = [...this.trades, ...trade];
            }

            if (order.remainingQty > 0) {
                console.log(`Order partially filled: executed ${order.executedQty}, cancelled ${order.remainingQty}`);
            } else {
                console.log(`Order fully filled: executed ${order.executedQty}`);
            }

            return { book: this.getBookSnapShot(), trade, order };
        }
    }

    _LimitMatch(order, trade) {
        if (order.side === "BUY") {
            let askArr = this.ask;

            while (order.remainingQty > 0 && askArr.length > 0) {
                let top = askArr[0];
                if (top.price <= order.price) {
                    let buyQty = Math.min(top.remainingQty, order.remainingQty);
                    this.currentPrice = top.price;
                    trade.push([buyQty, top.price]);

                    // Update order and top
                    order.executedQty += buyQty;
                    order.remainingQty -= buyQty;
                    top.executedQty += buyQty;
                    top.remainingQty -= buyQty;

                    if (top.remainingQty === 0) {
                        askArr.shift();
                    }
                } else {
                    break;
                }
            }
            return [order, trade];
        } 
        else if (order.side === "SELL") {
            let bidArr = this.bids;

            while (order.remainingQty > 0 && bidArr.length > 0) {
                let top = bidArr[0];
                if (top.price >= order.price) {
                    let sellQty = Math.min(top.remainingQty, order.remainingQty);
                    this.currentPrice = top.price;
                    trade.push([sellQty, top.price]);

                    order.executedQty += sellQty;
                    order.remainingQty -= sellQty;
                    top.executedQty += sellQty;
                    top.remainingQty -= sellQty;

                    if (top.remainingQty === 0) {
                        bidArr.shift();
                    }
                } else {
                    break;
                }
            }
            return [order, trade];
        } 
        else {
            throw new Error("Invalid order side");
        }
    }

    _MarketMatch(order, trade) {
        if (order.side === "BUY") {
            let askArr = this.ask;

            while (order.remainingQty > 0 && askArr.length > 0) {
                let top = askArr[0];
                let filledQty = Math.min(order.remainingQty, top.remainingQty);
                this.currentPrice = top.price;
                trade.push([filledQty, top.price]);

                order.executedQty += filledQty;
                order.remainingQty -= filledQty;
                top.executedQty += filledQty;
                top.remainingQty -= filledQty;

                if (top.remainingQty === 0) {
                    askArr.shift();
                }
            }
            return [order, trade];
        } 
        else if (order.side === "SELL") {
            let bidArr = this.bids;

            while (order.remainingQty > 0 && bidArr.length > 0) {
                let top = bidArr[0];
                let filledQty = Math.min(order.remainingQty, top.remainingQty);
                this.currentPrice = top.price;
                trade.push([filledQty, top.price]);

                order.executedQty += filledQty;
                order.remainingQty -= filledQty;
                top.executedQty += filledQty;
                top.remainingQty -= filledQty;

                if (top.remainingQty === 0) {
                    bidArr.shift();
                }
            }
            return [order, trade];
        } 
        else {
            throw new Error("Invalid order side");
        }
    }

    getPrice() {
        return this.currentPrice;
    }

    getBookSnapShot() {
        return {
            ask: this.ask.map(a => [a.price, a.remainingQty]),
            bids: this.bids.map(b => [b.price, b.remainingQty])
        };
    }

    getLatestTrade() {
        return this.trades;
    }
}

// Example Usage
// let BTCUSDOrderBook = new OrderBook("BTC_USD");

// BTCUSDOrderBook.placeOrder(100, 5, "LIMIT", "BUY", "Vinay");
// BTCUSDOrderBook.placeOrder(101, 10, "LIMIT", "BUY", "Vivek");
// BTCUSDOrderBook.placeOrder(99, 5, "LIMIT", "BUY", "Vansh");

// console.log("Book after buys:", BTCUSDOrderBook.getBookSnapShot());
// console.log("Trades:", BTCUSDOrderBook.getLatestTrade());

// BTCUSDOrderBook.placeOrder(102, 5, "LIMIT", "SELL", "Vinay");
// BTCUSDOrderBook.placeOrder(103, 5, "LIMIT", "SELL", "Vinay");
// BTCUSDOrderBook.placeOrder(104, 5, "LIMIT", "SELL", "Vinay");

// console.log("Book after sells:", BTCUSDOrderBook.getBookSnapShot());
// console.log("Trades:", BTCUSDOrderBook.getLatestTrade());

// BTCUSDOrderBook.placeOrder(101, 3, "LIMIT", "SELL", "Vinay");
// console.log("Current Price:", BTCUSDOrderBook.getPrice());

// BTCUSDOrderBook.placeOrder(null, 10, "MARKET", "BUY", "Vinay");
// console.log("Final Price:", BTCUSDOrderBook.getPrice());
// console.log("Final Book:", BTCUSDOrderBook.getBookSnapShot());
// console.log("All Trades:", BTCUSDOrderBook.getLatestTrade());

module.exports = OrderBook;
