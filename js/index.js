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


const category =  document.getElementById("inven_master_list_id")


async function render_list(){
    category.innerHTML = ""
    category_list.forEach(item_name => {
        let item_category = document.createElement("div")
        item_category.tabIndex = 0
        item_category.classList.add("inven_category")
        item_category.textContent = item_name[0]
        item_category.id = `cate_${item_name[0]}`
        category.appendChild(item_category)

        if(item_name.length> 1){
            for(let i = 1; i < item_name.length-1; i++ ){
                let item = document.createElement("div")
                item.textContent = item_name[i]
                item.tabIndex = 0
                item.classList.add("inven_item")    
                document.getElementById(`cate_${item_name[0]}`).appendChild(item)
            }
        }        
    })
}
render_list()

const items = document.querySelectorAll(".inven_item")
category_list.forEach(item_name => {
    let item_category = document.getElementById(`cate_${item_name[0]}`);
    let children = item_category.querySelectorAll(".inven_item");

    item_category.addEventListener("click", function() {
        children.forEach(child => {
            child.classList.toggle("show"); 
            child.addEventListener("click", (event)=>{
                event.stopPropagation();
            })
        });
    });
});

