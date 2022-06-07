//variables
var big_img = document.querySelector('.big-img');
var addClass_1 = document.getElementById("A");
var addClass_2 = document.getElementById("B");
var addClass_3 = document.getElementById("C");
var addClass_4 = document.getElementById("D");
var borderImg_1 =document.getElementById('border-img1');
var borderImg_2 =document.getElementById('border-img2');
var borderImg_3 =document.getElementById('border-img3');
var borderImg_4 =document.getElementById('border-img4');

var big_img_ = document.querySelector('.big-img_');
var addClass_1_ = document.getElementById("A_");
var addClass_2_ = document.getElementById("B_");
var addClass_3_ = document.getElementById("C_");
var addClass_4_ = document.getElementById("D_");
var borderImg_1_ =document.getElementById('border-img1_');
var borderImg_2_ =document.getElementById('border-img2_');
var borderImg_3_ =document.getElementById('border-img3_');
var borderImg_4_ =document.getElementById('border-img4_');

var number =document.querySelector(".number");
var nbre = 0;
var cart = document.querySelector(".cart-compter");
var modal = document.querySelector("#modal");
var cartbody = document.querySelector(".modal-cart-body");
var cartproduct = document.querySelector(".cart-product");
var emptycart = document.querySelector(".empty");
var carttitle = document.querySelector(".bloc-text-title");
var unitprice = document.querySelector(".normal-price"); 
var btnshow = document.querySelector(".btn-checkout");
var iconminus = document.querySelector(".icon-minus")
var iconplus = document.querySelector(".icon-plus")
var prevnext = 0;
var prevnext_ = 0;
var zoom = document.getElementById("zoom");
var disable_button = 0;
var svgclose = document.querySelector(".svg-close");
var svgnext = document.querySelector(".svg-next");
var svgprev = document.querySelector(".svg-prev");
/*image_id = [
    {img: 'images/image-product-1.jpg', id: 'A'},
    {img: 'images/image-product-2.jpg', id: 'B'},
    {img: 'images/image-product-3.jpg', id: 'C'},
    {img: 'images/image-product-4.jpg', id: 'D'}
];*/

//gestion menu mobile
function openMenu() {
    document.getElementById("menuClose").style.width = "70%";
}
  
function closeMenu() {
    document.getElementById("menuClose").style.width = "0%";
}

//Changement d'image 
function selectImage_1() {    
    big_img.src = "images/image-product-1.jpg";
    addClass_1.classList.add("img-style");
    borderImg_1.classList.add("border-style");
    addClass_2.classList.remove("img-style");
    borderImg_2.classList.remove("border-style");
    addClass_3.classList.remove("img-style");
    borderImg_3.classList.remove("border-style");
    addClass_4.classList.remove("img-style");
    borderImg_4.classList.remove("border-style");
 }; 

 function selectImage_2() {    
    big_img.src = "images/image-product-2.jpg";
    addClass_1.classList.remove("img-style");
    borderImg_1.classList.remove("border-style");
    addClass_2.classList.add("img-style");
    borderImg_2.classList.add("border-style");
    addClass_3.classList.remove("img-style");
    borderImg_3.classList.remove("border-style");
    addClass_4.classList.remove("img-style");
    borderImg_4.classList.remove("border-style");
 }; 

 function selectImage_3() {    
    big_img.src = "images/image-product-3.jpg";
    addClass_1.classList.remove("img-style");
    borderImg_1.classList.remove("border-style");
    addClass_2.classList.remove("img-style");
    borderImg_2.classList.remove("border-style");
    addClass_3.classList.add("img-style");
    borderImg_3.classList.add("border-style");
    addClass_4.classList.remove("img-style");
    borderImg_4.classList.remove("border-style");
}; 
 function selectImage_4() {    
    big_img.src = "images/image-product-4.jpg";
    addClass_1.classList.remove("img-style");
    borderImg_1.classList.remove("border-style");
    addClass_2.classList.remove("img-style");
    borderImg_2.classList.remove("border-style");
    addClass_3.classList.remove("img-style");
    borderImg_3.classList.remove("border-style");
    addClass_4.classList.add("img-style");
    borderImg_4.classList.add("border-style");
 };

//Changement d'image  zoom slide
function selectImage_1_() {    
    big_img_.src = "images/image-product-1.jpg";
    addClass_1_.classList.add("img-style");
    borderImg_1_.classList.add("border-style");
    addClass_2_.classList.remove("img-style");
    borderImg_2_.classList.remove("border-style");
    addClass_3_.classList.remove("img-style");
    borderImg_3_.classList.remove("border-style");
    addClass_4_.classList.remove("img-style");
    borderImg_4_.classList.remove("border-style");
 }; 

 function selectImage_2_() {    
    big_img_.src = "images/image-product-2.jpg";
    addClass_1_.classList.remove("img-style");
    borderImg_1_.classList.remove("border-style");
    addClass_2_.classList.add("img-style");
    borderImg_2_.classList.add("border-style");
    addClass_3_.classList.remove("img-style");
    borderImg_3_.classList.remove("border-style");
    addClass_4_.classList.remove("img-style");
    borderImg_4_.classList.remove("border-style");
 }; 

 function selectImage_3_() {    
    big_img_.src = "images/image-product-3.jpg";
    addClass_1_.classList.remove("img-style");
    borderImg_1_.classList.remove("border-style");
    addClass_2_.classList.remove("img-style");
    borderImg_2_.classList.remove("border-style");
    addClass_3_.classList.add("img-style");
    borderImg_3_.classList.add("border-style");
    addClass_4_.classList.remove("img-style");
    borderImg_4_.classList.remove("border-style");
}; 
 function selectImage_4_() {    
    big_img_.src = "images/image-product-4.jpg";
    addClass_1_.classList.remove("img-style");
    borderImg_1_.classList.remove("border-style");
    addClass_2_.classList.remove("img-style");
    borderImg_2_.classList.remove("border-style");
    addClass_3_.classList.remove("img-style");
    borderImg_3_.classList.remove("border-style");
    addClass_4_.classList.add("img-style");
    borderImg_4_.classList.add("border-style");
 };

 //slides next
 function nextSlide() {
    if (prevnext == 0) {
        selectImage_2();
        prevnext = prevnext + 1;
    } 
    else if (prevnext == 1) {
        selectImage_3();
        prevnext = prevnext + 1;
    } 
    else if (prevnext == 2) {
        selectImage_4();
        prevnext = prevnext + 1;
    } 
 }

 //slide previous
 function prevSlide() {
    if (prevnext == 3) {
        selectImage_3();
        prevnext = prevnext - 1;
    } 
    else if (prevnext == 2) {
        selectImage_2();
        prevnext = prevnext - 1;
    } 
    else if (prevnext == 1) {
        selectImage_1();
        prevnext = prevnext - 1;
    } 
 }

  //slides next zoom
  function nextSlide_() {
    if (prevnext_ == 0) {
        selectImage_2_();
        prevnext_ = prevnext_ + 1;
    } 
    else if (prevnext_ == 1) {
        selectImage_3_();
        prevnext_ = prevnext_ + 1;
    } 
    else if (prevnext_ == 2) {
        selectImage_4_();
        prevnext_ = prevnext_ + 1;
    } 
 }

 //slide previous zoom
 function prevSlide_() {
    if (prevnext_ == 3) {
        selectImage_3_();
        prevnext_ = prevnext_ - 1;
    } 
    else if (prevnext_ == 2) {
        selectImage_2_();
        prevnext_ = prevnext_ - 1;
    } 
    else if (prevnext_ == 1) {
        selectImage_1_();
        prevnext_ = prevnext_ - 1;
    } 
 }


 //choix nombre de produit(incrementation decrementation)
 function FonctionPlus() {
    nbre +=1;
    number.innerHTML = nbre;
 }
 function FonctionMinus() {
     if (nbre >0 ) {
         nbre -= 1;
        number.innerHTML = nbre;
     }else number.innerHTML = 0;
    
 }

 
 //ajout de produit au panier
 function FonctionCart() {
    if (nbre > 0) {
        if (cart.innerHTML == "") {
            cart.innerHTML = nbre;  
        }else {
            let cartnumber = parseInt(cart.innerHTML);
            cart.innerHTML = nbre + cartnumber;    
        }
       addElement();
    }
 }

 //ajouter des produits au panier
 function addElement() {

    let newimg = document.createElement("img");
    newimg.classList = "new-img";
    newimg.src = "images/image-product-1.jpg";
    newimg.style.width = "45px";
    newimg.style.borderRadius = "8px";

    let newdiv = document.createElement("div");
    newdiv.style.color = "hsl(220, 14%, 75%)";

    let newtitle = document.createElement("h1");
    newtitle.innerHTML = carttitle.innerHTML;

    let newpara = document.createElement("p");

    let newprice_u = document.createElement("span");
    newprice_u.innerHTML = unitprice.innerHTML+ " " + "x" + " "+ number.innerHTML+ " " ;

    let newprice = document.createElement("span");
    let cartnumber = parseInt(number.innerHTML);
    let cartprice = parseInt(unitprice.innerHTML.slice(1,unitprice.length));
    newprice.innerHTML = "$" + (cartprice * cartnumber).toFixed(2);
    newprice.style.color = "hsl(0, 0%, 0%)";
    newprice.style.fontWeight = "700";
    
    var icondelete = document.createElement("img");
    icondelete.src = "images/icon-delete.svg";
    icondelete.style.height = "100%";

    newpara.appendChild(newprice_u);
    newpara.appendChild(newprice);
    newdiv.appendChild(newtitle);
    newdiv.appendChild(newpara);

    if (emptycart.innerHTML =! "") {
        emptycart.innerHTML = "";
        emptycart.style.height = "0px";
        btnshow.style.display = "block";
        cartbody.style.paddingBottom = "20px";
    }
    let contentcart = document.createElement("div");
    contentcart.style.display = "flex";
    contentcart.style.alignItems = "center";
    contentcart.style.justifyContent = "center";
    contentcart.style.justifyContent = "space-between";
    contentcart.style.paddingTop = "20px";

    contentcart.appendChild(newimg);
    contentcart.appendChild(newdiv);
    contentcart.appendChild(icondelete);

    cartproduct.appendChild(contentcart);

 }

 // afficher le panier
 function cartOnclick() {
    modal.classList.toggle("show");
    disable_button = disable_button + 1;
    if (disable_button %2 !=0 ) {
        let btndisabled = document.querySelector(".btn-add");
        btndisabled.disabled = true;
        btndisabled.style.opacity = "0.5";
        iconplus.style.opacity = "0.5";
        iconminus.style.opacity = "0.5";
    } else{
        let btndisabled = document.querySelector(".btn-add");
        btndisabled.disabled = false;
        btndisabled.style.opacity = "1";
        iconplus.style.opacity = "1";
        iconminus.style.opacity = "1";
    }
    console.log(disable_button);
 } 
 //afficher le silde des images 
 function zoomImage() {
    if (window.matchMedia("(min-width: 685px)").matches) {
        zoom.style.display = "block";
      } else {
        zoom.style.display = "none";
      }
    
 }
 //cacher le slide des images
 function zoomHide() {
    zoom.style.display = "none";
 }
 // fonction d evènement souris
 function changeSVGClose() {
     svgclose.src = "images/icon-close-hover.svg";
     
 }
 function changeSVGClose_() {
    svgclose.src = "images/icon-close-white.svg";
    
}
function changeSVGNext() {
    svgnext.src = "images/icon-next-hover.svg";
    
}
function changeSVGNext_() {
   svgnext.src = "images/icon-next.svg";
   
}
function changeSVGPrev() {
    svgprev.src = "images/icon-previous-hover.svg";
    
}
function changeSVGPrev_() {
   svgprev.src = "images/icon-previous.svg";
   
}