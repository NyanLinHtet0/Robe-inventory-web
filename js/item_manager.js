class Item {
    constructor(price, fees, quantity, date) {
        this.price = price;
        this.fees = fees;
        this.quantity = quantity;
        this.date = date;
        this.sold = 0;
        this.sell_list = [];
    }

    sell_item(price, quantity, date) {
        if (this.quantity >= this.sold + quantity) {
            this.sold += quantity;
            this.sell_list.push({ quantity, price, date });
            if (this.quantity === this.sold) {
                this.sold = -1;
            }
            return true;
        } else {
            // Not enough stock
            return false;
        }
    }

    get_cost_per_item() {
        return this.price + this.fees;
    }

    get_total_cost() {
        return this.get_cost_per_item() * this.quantity;
    }

    display() {
        console.log(`Date: ${this.date}`);
        console.log(`Item info: (${this.quantity} x ${this.price + this.fees} (${this.price} + ${this.fees}))`);
        console.log(`Total cost: ${this.get_total_cost().toFixed(2)}`);
        console.log(`Total Sold: ${this.sold}`);
        if (this.sold === -1) {
            this.sell_list.forEach(item => {
                console.log(`Quantity: ${item.quantity}, Price: ${item.price}, Date: ${item.date}`);
            });
        }
    }
}

class ItemManager {
    constructor(id, name) {
        this.inven = [];
        this.sold_items = [];
        this.count = 0;
        this.id = id;
        this.name = name;
    }

    add_item(item) {
        if (item.quantity > 0) {
            this.count += item.quantity;
            this.inven.push(item);
        }
    }

    sell_item(sell_price, quantity, date) {
        if (this.count >= quantity) {
            let sell_quant = quantity;
            for (let item of this.inven) {
                if (sell_quant === 0) break;

                let avail_quantity = item.quantity - item.sold;
                if (sell_quant >= avail_quantity) {
                    item.sell_item(sell_price, avail_quantity, date);
                    sell_quant -= avail_quantity;
                } else {
                    item.sell_item(sell_price, sell_quant, date);
                    sell_quant = 0;
                }
            }
        } else {
            console.log("Not enough inventory");
        }
    }

    get_report_string() {
        let report = `ID: ${this.id}\tName: ${this.name}\tCount: ${this.count}`;
        console.log(report);
        return report;
    }
}