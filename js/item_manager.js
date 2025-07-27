class Item {
    constructor(price, fees, quantity, date) {
        this.price = price;
        this.fees = fees;
        this.quantity = quantity;
        this.date = date;
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

    sell_item(item, buy_price, quant, date){
        if (item.quantity >= quant){
            
        }
        else{
            console.log("not enough in inventory to sell")
        }
    }

    get_report_string() {
        let report = `ID: ${this.id}\tName: ${this.name}\nCount: ${this.count}`;
        console.log(report);
        return report;
    }


    display_css(display){
        display.textContent = this.get_report_string()
    }
}