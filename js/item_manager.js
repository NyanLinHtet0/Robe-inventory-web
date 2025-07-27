class Item {
    constructor(price, quantity, date) {
        this.price = price;
        this.quantity = quantity;
        this.date = date;
    }

    get_cost_per_item() {
        return this.price;
    }

    display() {
        console.log(`Date: ${this.date}`);
        console.log(`Item info: (${this.quantity} x ${this.price + this.fees} (${this.price} + ${this.fees}))`);
        console.log(`Total cost: ${this.get_total_cost().toFixed(2)}`);
    }
}

class Buy_Item extends Item {
    constructor(price, quantity, date, fee) {
        super(price, quantity, date, fee);
        this.fee = fee;
    }

    get_cost_per_item() {
        return this.price + this.fees;
    }

    get_total_cost() {
        return this.get_cost_per_item() * this.quantity;
    }

    display() {
        console.log(`Date: ${this.date}`);
        console.log(`Item info: (${this.quantity} x ${this.buy_price + this.fees} (${this.buy_price} + ${this.fees}))`);
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
        let report = `ID: ${this.id}\tName: ${this.name}\tCount: ${this.count}`;
        return report;
    }


    display_css(display){
        display.textContent = this.get_report_string()
        const table = document.createElement("table");
        // Create thead
        const thead = document.createElement("thead");
        const tfoot = document.createElement("tfoot");
        const headRow = document.createElement("tr");
        ["Date", "In", "Out", "Remaining"].forEach(headerText => {
            const th = document.createElement("th");
            th.textContent = headerText;
            headRow.appendChild(th);    
        });
        thead.appendChild(headRow);
        table.appendChild(thead);

        // Create empty tbody
        const tbody = document.createElement("tbody");
        table.appendChild(tbody);
        table.appendChild(tfoot);

        //add table to child
        display.appendChild(table)


        const item_input = document.createElement("div");
    }
}