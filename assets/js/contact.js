$(document).ready(function () {
    $("#buttonOnHeader1").click(() => {
        if  (($(".dropDownForButtonOnHeader1").css("display")=="block") ){
            $(".dropDownForButtonOnHeader1").css("display", "none");

        }
            else{
                $(".dropDownForButtonOnHeader1").css("display", "block");
            $(".dropDownForButtonOnHeader2").css("display", "none");


            }
    });
    $("#buttonOnHeader2").click(() => {
        if  ($(".dropDownForButtonOnHeader2").css("display")=="block"){
            $(".dropDownForButtonOnHeader2").css("display", "none");

        }
            else{
                $(".dropDownForButtonOnHeader2").css("display", "block");
            $(".dropDownForButtonOnHeader1").css("display", "none");


            }
    });

    $('.sliderİnSection1').slick({
        autoplay : true,
        arrows : false,
        draggable : false,
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
          {
            
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });

      

  $('.responsiveSliderForContactSectionFirst').slick({
    dots: false,
    infinite: false,
    autoplay: true,
    speed: 500,
    autoplaySpeed : 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  

});
window.onscroll =function(){
    var header = document.getElementById('headerTop');
    if(document.body.scrollTop>5 || document.documentElement.scrollTop>5){
        header.style.position= 'fixed';
        header.style.top = '0';
    }
    else{
        header.style.position= 'fixed';
        header.style.top = '40px';
        document.querySelector("#mainContact #first").style.marginTop="80px";

       
    }
}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("mySidenav").style.padding = "60px 10px";
  $('#mySidenav').show('#mySidenav');
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.padding = "0";
  $('#overlay').hide('0');
}
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

$('#menu-toggle').click(function(e) {
  e.preventDefault();
  $('#mySidenav').toggleClass('toggled');
  $('#overlay').toggle();
});


$('#overlay').click(function() {
  $('#overlay').hide('200');
  $('#mySidenav').hide('#mySidenav');
});
$("#iconUserI").click(() => {
  if ($(".userDropDown").css("display") == "none") {
    $(".userDropDown").css("display", "block");

  }
  else {
    $(".userDropDown").css("display", "none");
     }
});

const modal = document.querySelector("dialog")

document.querySelector(".search input").addEventListener("click", () => {
  modal.showModal();
  document.querySelector('body').classList.add("blur")
});

const closeBtns = document.querySelectorAll(".close");

closeBtns.forEach( (btn) => {
  btn.addEventListener("click", () => {
    console.log("You clicked a button inside the modal.  I'll close now.");
    document.querySelector('body').classList.remove("blur");
    modal.close();
  })
});

// Close dialog
const dialog = document.querySelector("dialog");
dialog.addEventListener("click", ( event ) => {
  if (event.target === dialog) {
    modal.close();
    document.querySelector('body').classList.remove("blur");
  }

});
window.addEventListener("load", (e) => {
  dialogDemo();
});

function dialogDemo() {
  const modal = new Modal({
    heading: "A good paragraph!",
    contents: `A good example of a paragraph contains a topic sentence, details and a conclusion.`
  });
  submit.onclick = (e) => {
    modal.toggleModal();
  };
  [closeModal, cancelModal, continueModal].forEach((element) => {
    element.onclick = (e) => {
      modal.toggleModal();
    };
  });
}

function Modal(options) {
  modalHeading.textContent = options.heading ?? "Modal Heading";
  modalContents.innerHTML = options.contents ?? "Modal Contents.";

  this.closeModal = function () {
    modal.close();
  };

  this.openModal = function () {
    modal.showModal();
  };

  this.toggleModal = function () {
    modal.open ? this.closeModal() : this.openModal();
  };

  return this;
}

// generates add to cart funtionality for popUpAddToBasket,

let popUpAddToBasket = document.getElementById("popUpAddToBasket");

let popUpAddToBasketItemsData = [
  {
    id: 1,
    name: "Media Remote",
    price: 29.99,
    del: 49.99,
    description: "Bass Meets Clarity",
    img: "assets/images/product-09.png",

  },
  {
    id: 2,
    name: "Media Remote",
    price: 29.99,
    del: 49.99,
    description: "Bass Meets Clarity",
    img: "assets/images/product-09.png",

  },
  {
    id: 3,
    name: "Media Remote",
    price: 29.99,
    del: 49.99,
    description: "Bass Meets Clarity",
    img: "assets/images/product-09.png",

  }
 
]
let basketForPopUp = [];

let generatePopUpAddToBasket = () => {
  return (popUpAddToBasket.innerHTML = popUpAddToBasketItemsData.map((x) => {
    let { id, name, del, price, description, img } = x
    return `

    <div id= product-id-${id} class="boxForPopUp">
                        <div class="row">
                            <div class="col-lg-4 col-4 col-sm-4 col-md-4">
                                <a href="productvariation1.html">
                                <img src="${img}" alt=""> </a>
                                </a>
                            </div>
                            <div class="col-lg-7 col-7 col-sm-7 col-md-7  middlePart">
                                <div class="iconOntop">
                                    <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star"></i><span>100+ <span class="review">Reviews</span></span>
    
                                </div>
                                <div class="mediaRemote">
                                <a class="ahrefForText" href="productvariation1.html">${name}</a>
    
                                </div>
                                <div class="price">
                                    
                                    <span>$${price} <del>$${del}</del></span>
                                </div>
                                
                            </div>
                            <div class="col-lg-1 col-1 col-md-1 col-sm-1 d-flex align-items-center flex-wrap cartAndHeart">
                            <div onclick="addToCart(${id})" class="addToCartBox"><p><i class="fa-solid fa-cart-shopping"></i></p></div>
                                <i class="fa-regular fa-heart"></i>
                            </div>
                        </div>
                     </div>
                          
      `;
  }).join(""));
}
generatePopUpAddToBasket();


let addToCart = (id) => {
  let selectedItem = id;
  let search = basket.find((x) => x.id === selectedItem.id);
  if (search === undefined) {
    basket.push({
      id: selectedItem.id,
      item: 1,
    });

  }
  else {
    search.item += 1;
  }
  console.log(basket);

  update(selectedItem.id);
};
let update = (id) => {
  let search = basket.find((x) => x.id === id);
  calculation();
}
let calculation = () => {
  let cartIcon = document.getElementById("countBacket");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);

}