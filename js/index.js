const category_list = [
                        [
                            "Thingan",
                            "Malaysia",
                            "Singapore",
                            "Indo 3RF",
                            "VIP Martin",
                            "SK Martin (Brown)",
                            "SK Martin (Yellow)",
                            "Nyaung Ywit Linen",
                            "808 Martin (Brown)",
                            "808 Martin (Yellow)",
                            "808 Martin (Red)",
                            "PPT 1000 (Brown)",
                            "PPT 1000 (Yellow)",
                            "PPT 1000 (Yellow-Orange)",
                            "333 BM (Brown)",
                            "333 BM (Yellow)",
                            "PPT 4500 (SPC)",
                            "PPT 5000 (KPE) (Brown)",
                            "PPT 5000 (KPE) (Yellow)",
                            "101 BM",
                            "AAA super key",
                            "909 BM Tencel",
                            "Egypt",
                            "Paris",
                            "USA",
                            "BURBERRY"
                        ], 
                        ['Shoe', 'A1', 'A2', 'A3'], 
                        ['Thabate']
                    ]

const lookup_item_byid = new Map();





const category =  document.getElementById("inven_master_list_id")

function populate_data_by_id(id, data_display) {
    let item = lookup_item_byid.get(id);
    if (item) {
        data_display.textContent = item.id
    }
}




function render_list(){
    category.innerHTML = ""

    for (let j = 0; j < category_list.length; j++) {
        let item_category = document.createElement("div")
        item_category.tabIndex = 0
        item_category.classList.add("inven_category")
        item_category.textContent = category_list[j][0]
        item_category.id = `cate_${category_list[j][0]}`
        category.appendChild(item_category)
        // Create a div to hold the items in this category
        if(category_list[j].length> 1){
            for(let i = 1; i < category_list[j].length-1; i++ ){
                let item = document.createElement("div")
                item.textContent = category_list[j][i]
                item.tabIndex = 0
                item.classList.add("inven_item")    
                document.getElementById(`cate_${category_list[j][0]}`).appendChild(item)
                let id = `${String(j+1).padStart(2, "0")}${String(i).padStart(2, "0")}`;
                item.dataset.data_id = id
                let x_manager = new ItemManager(id, item.textContent);
                lookup_item_byid.set(id, x_manager);
            }
        }
    }
}
render_list()

data_display = document.getElementById("data_display_id")

const items = document.querySelectorAll(".inven_item")
category_list.forEach(item_name => {
    let item_category = document.getElementById(`cate_${item_name[0]}`);
    let children = item_category.querySelectorAll(".inven_item");
    // Add click event listener to the ITEMS in category
    item_category.addEventListener("click", function() {
        children.forEach(child => {
            child.classList.toggle("show"); 
            child.addEventListener("click", (event)=>{
                event.stopPropagation()
                data_display.textContent = lookup_item_byid.get(child.dataset.data_id).get_report_string()
                //populate the data display with the item's data
                populate_data_by_id(child.dataset.data_id, data_display);
            })
        });
    });
});

console.log(lookup_item_byid);


