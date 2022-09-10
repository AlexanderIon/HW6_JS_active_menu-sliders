const menu_main = document.getElementsByClassName('menu_main')
// console.log(menu_main)
const menu_item = Array.from(menu_main[0].querySelectorAll('li'))
const sub_menu_arr = new Array();
for (let i = 0;i<menu_item.length;i++){
    if (menu_item[i].querySelector('ul') !== null ){
        sub_menu_arr.push(menu_item[i])
        menu_item[i].querySelector('a').onclick = ()=>{           
            console.log(menu_item[i].querySelector(".menu_active"))
            if (menu_item[i].querySelector(".menu_active") !==null){
                menu_item[i].querySelector(".menu_active").className = "menu menu_sub "
            }
        

            return false
        }
            
        
    }

}





sub_menu_arr.map(element => element.onclick = ()=>{
    
    sub_menu_arr.map(element =>  {
        if (element.querySelector('.menu_active') !== null){
            element.querySelector('.menu_active').className ='menu menu_sub'
          
        }
        
    }
    )
     
    if (element.querySelector('ul').className == "menu menu_sub") {
        element.querySelector('ul').classList.add('menu_active')
        console.log("fffF")
        // return false

        
    
    }
    else{
        element.querySelector('ul').className = "menu menu_sub"
    } 

    
   
    
    
}
)