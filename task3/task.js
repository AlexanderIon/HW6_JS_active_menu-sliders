
const img_sladers = Array.from(document.querySelectorAll(".slider__item"))
for (let i =0;i<img_sladers.length;i++){
    console.log(img_sladers[i].className)
}


const sliders =Array.from(document.querySelectorAll(".slider__arrow"))

for (let i = 0;i<sliders.length;i++){
    sliders[i].onclick = ()=>{
        if (sliders[i].textContent == ">" ){
            const activ_img = img_sladers.findIndex((element) =>element.className == "slider__item slider__item_active")
            if (activ_img < img_sladers.length-1 ){
                // activ_img = 1 + 1
                img_sladers[activ_img].className = "slider__item"
                img_sladers[activ_img+1].className = "slider__item slider__item_active"     
            }
            else if (activ_img == img_sladers.length -1){
                // activ_img = 0
                img_sladers[activ_img].className = "slider__item"
                img_sladers[0].className =  "slider__item slider__item_active" 
            }

            console.log(activ_img,img_sladers.length -1 )
        }
        else {
            const activ_img = img_sladers.findIndex((element) =>element.className == "slider__item slider__item_active")
            if (activ_img > 0){
                img_sladers[activ_img].className = "slider__item"
                img_sladers[activ_img-1].className = "slider__item slider__item_active"
            }
            else if (activ_img == 0){
                img_sladers[activ_img].className = "slider__item"
                img_sladers[img_sladers.length-1].className = "slider__item slider__item_active"
            }
            console.log("prev")
        }
        
    }
}

// const salary = [1200, 3350, 1620, 4000]

// console.log(salary[0])
// console.log(salary[-1])



