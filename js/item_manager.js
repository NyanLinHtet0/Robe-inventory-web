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


    add_inventory_ui(display){
        const button_element = document.createElement("button")
        button_element.textContent = "Add Item"
        button_element.classList.add("add_item_button")
        button_element.id = "add_item_button"
        display.appendChild(button_element)
        let input_form = createPopupUI(display)
        button_element.addEventListener("click", function(){
            if(button_element.textContent == "Back"){
                button_element.textContent = "Add Item"
            }
            else{
                button_element.textContent = "Back"
            }
            input_form.classList.toggle("show")
        })
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
        this.add_inventory_ui(display)

        const item_input = document.createElement("div");
    }
}



function createPopupUI(display) {
    // Create Add Item button


    // Create modal container
    const add_item_form = document.createElement("div");
    add_item_form.id = "itemModal";
    
    
    // Create modal content
    const content = document.createElement("div");
    content.className = "modal-content";

    // Form
    const form = document.createElement("form");
    form.id = "itemForm";
    form.className = "item-form";
    form.innerHTML = `
        <label>Quantity:</label>
        <input type="number" id="itemQuantity" required>
        <label>Price:</label>
        <input type="number" id="itemPrice" step="0.01" required>
        <label>Fee:</label>
        <input type="number" id="itemFee" step="0.01">
        <label>Date:</label>
        <input type="date" id="itemDate" required>
        <button type="submit">Submit</button>
    `;
    content.appendChild(form);
    add_item_form.appendChild(content);
    add_item_form.classList.add("add_item_form");
    display.appendChild(add_item_form);
    

    // Form submission
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const q = document.getElementById("itemQuantity").value;
        const p = document.getElementById("itemPrice").value;
        const f = document.getElementById("itemFee").value || 0;
        const d = document.getElementById("itemDate").value;

        console.log({ q, p, f, d });

        add_item_form.style.display = "none";
        form.reset();
    });

    return add_item_form
}