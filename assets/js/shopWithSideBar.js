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
        infinite: true,
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
    infinite: true,
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
        document.querySelector("#mainContact #first").style.marginTop="90px";

       
    }
}
$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;
		var links = this.el.find('.link');
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}
  
	Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
    $this = $(this),
    $next = $this.next();
    
		$next.slideToggle();
		$this.parent().toggleClass('open');
		
	}	
  

	var accordion = new Accordion($('#accordion'), false);
  $( function() {
	$('#price-range').slider({
		range: true,
		min: 0,
		max: 1000,
		values: [0, 1000],
		slide: function(event, ui) {
			$('#price-min').val(ui.values[0]);
			$('#price-max').val(ui.values[1]);
		}
	});
});
// Rubberband Input
const rubberIpts = document.querySelectorAll(".rubber-ipt");

for (var i = 0; i < rubberIpts.length; i++) {
    const rubberRange = rubberIpts[i].querySelector(".rubber-ipt-range");
    const rubberMin = rubberIpts[i].querySelector(".rubber-ipt-min");
    const rubberMax = rubberIpts[i].querySelector(".rubber-ipt-max");
    var initialMousePosMin;
    var initialMousePosMax;


// Rubber Minimum
    rubberMin.style.left = '0px'
    function dragTargetMin(dragOffsetMin) {
        rubberMin.style.left = `${dragOffsetMin}px`;
    }
    function getDragOffsetMin(e) {
        if (initialMousePosMin == null) {
            initialMousePosMin = e.clientX;
        }
        var mousePos = e.clientX;
        var dragOffsetMin = mousePos - initialMousePosMin;
        var rubberMinMax = 200 + (parseInt(rubberMax.style.left, 10)) - 10;

        if (dragOffsetMin < 0){dragOffsetMin = 0}
        else if (dragOffsetMin > rubberMinMax) {
            dragOffsetMin = rubberMinMax;
        };
        if (dragOffsetMin > 190) {
            dragOffsetMin = 190;
        }

        dragTargetMin(dragOffsetMin);
        updateRubberRangeMin(dragOffsetMin);
        getMinPrice(dragOffsetMin);
    }

    function SetDragStartMin(e) {
        document.addEventListener("mousemove", getDragOffsetMin);
    }
    function stopDragMin() {
        document.removeEventListener("mousemove", getDragOffsetMin);
    }

    rubberMin.addEventListener("mousedown", SetDragStartMin);
    document.addEventListener("mouseup", stopDragMin);


// Rubber Maximum
    rubberMax.style.left = '0px'
    function dragTargetMax(dragOffsetMax) {
        rubberMax.style.left = `${dragOffsetMax}px`;
    }
    function getDragOffsetMax(e) {
        if (initialMousePosMax == null) {
            initialMousePosMax = e.clientX;
        }
        var mousePos = e.clientX;
        var dragOffsetMax = mousePos - initialMousePosMax;
        var rubberMaxMin = (parseInt(rubberMin.style.left, 10) - 200 + 10);

        if (dragOffsetMax > 0){dragOffsetMax = 0}
        else if (dragOffsetMax < rubberMaxMin) {
            dragOffsetMax = rubberMaxMin;
        };
        if (dragOffsetMax < -190) {
            dragOffsetMax = -190;
        };

        dragTargetMax(dragOffsetMax);
        updateRubberRangeMax(dragOffsetMax);
        getMaxPrice(dragOffsetMax);
    }

    function SetDragStartMax() {
        document.addEventListener("mousemove", getDragOffsetMax);
    }
    function stopDragMax() {
        document.removeEventListener("mousemove", getDragOffsetMax);
    }

    rubberMax.addEventListener("mousedown", SetDragStartMax);
    document.addEventListener("mouseup", stopDragMax);


// Update Range between Min and Max

    rubberRange.style.width = '200px';
    function updateRubberRangeMin(dragOffsetMin){
        rubberRange.style.left = `${dragOffsetMin}px`;

        var rubberRangeWidth = 200 - ((parseInt(rubberMax.style.left, 10)) * -1) - dragOffsetMin;
        if (rubberRangeWidth <= 0) {
            rubberRangeWidth = 0;
        }
        rubberRange.style.width = `${rubberRangeWidth}px`;
    }
    function updateRubberRangeMax(dragOffsetMax){
        var rubberRangeWidth = 200 - parseInt(rubberMin.style.left, 10) - (dragOffsetMax * -1);
        if (rubberRangeWidth <= 0) {
            rubberRangeWidth = 0;
        }
        rubberRange.style.width = `${rubberRangeWidth}px`;
    }

// Update price range

    const minPrice = rubberIpts[i].querySelector(".rubber-value-min");
    const maxPrice = rubberIpts[i].querySelector(".rubber-value-max");

    var RubberMinPrice = 0;
    var RubberMaxPrice = 3000;

    function getMinPrice(dragOffsetMin) {
        rubberMinPrice = ((RubberMaxPrice/200) * dragOffsetMin) + (((RubberMinPrice - ((RubberMinPrice/200) * dragOffsetMin))));
        minPrice.innerHTML = `Price : $ ${rubberMinPrice}`

    }
    function getMaxPrice(dragOffsetMax) {
        rubberMaxPrice = ((RubberMaxPrice/200) * (dragOffsetMax + 200)) + ((RubberMinPrice - ((RubberMinPrice/200) * (dragOffsetMax + 200))));
        maxPrice.innerHTML = `${rubberMaxPrice}`

    }
};


});


// generates add to cart funtionality for img section,
//i have named them in the same way as they were in shop with side bar html.
let imgSection = document.getElementById("imgSection");

let imgSectionItemsData = [
  {
    id: 1,
    name: "3D Wireless Headset",
    price: 30,
    del: 30,
    description: "3D Wireless Headset",
    img: "assets/images/product-01.png",

  },
  {                              
                                      
    id: 2,
    name: "Media remote",
    price: 40,
    del: 50,
    description: "Leather Hand Bag",
    img: "assets/images/product-02.png",

  },
  {
    id: 3,
    name: "HD camera",
    price: 45,
    del: 60,
    description: "Guys Bomber Jacket",
    img: "assets/images/product-03.png",

  },
  {
                       
    id: 4,
    name: "PS Remote Control",
    price: 50,
    del: 60,
    description: "Full A-Line Dress",
    img: "assets/images/product-04.png",

  },
  {
    id: 5,
    name: "Level RGB",
    price: 38,
    del: 50,
    description: "PS Remote Control",
    img: "assets/images/product-05 (1).png",

  },
  {
    id: 6,
    name: "level 20 RGB",
    price: 25,
    del: 40,
    description: "Leather Hand Bag",
    img: "assets/images/product-06.png",

  },
  {
    id: 7,
    name: "Logitech Streamcam",
    price: 15,
    del: 20,
    description: "Guys Bomber Jacket",
    img: "assets/images/product-07 (1).png",

  },
  {
    id: 8,
    name: "Bass Meets Clarity",
    price: 60,
    del: 80,
    description: "Full A-Line Dress",
    img: "assets/images/product-08 (1).png",

  },
  {
    id:9,
    name: "Media remote",
    price: 40,
    del: 50,
    description: "Leather Hand Bag",
    img: "assets/images/product-02.png",

  }
 
]

let basket2 = [];

let generateimgSection = () => {
  return (imgSection.innerHTML = imgSectionItemsData.map((x) => {
    let { id, name, del, price, description, img } = x
    return `
    <div id= product-id-${id} class="col-lg-4 col-6 col-sm-6 col-md-6 imgBoxes">
    <a href="productvariation1.html">
    <img src="${img}" alt=""> </a>

    </a>
    <a class="ahrefForText" href="productvariation1.html">${name}</a>

    <span>$${price} <del>$${del}</del></span>


<div class="salePartOnImage">
30% OFF
</div>                                       
 <div class="addToCartPartOnImage">
        <div class="row justify-content-between">
            <div class="col-lg-2 col-2 col-md-2 col-sm-2 addToCartIcons"><i class="fa-regular fa-heart"></i></div>
            
            <div onclick="addToCart(${id})" class="col-lg-7 col-7 col-md-7 col-sm-7 addToCartBox"><p
                                                      >Add to Cart</p></div>

            <div class="col-lg-2 col-2 col-md-2 col-sm-2 addToCartIcons"><i class="fa-solid fa-eye"></i></div>
        </div>
    </div>

</div>
                                       
    
      `;
  }).join(""));
}


let addToCart = (id) => {
  let selectedItem = id;
  let search = basket2.find((x) => x.id === selectedItem.id);
  if (search === undefined) {
    basket2.push({
      id: selectedItem.id,
      item: 1,
    });
    
  }
  else {
    search.item += 1;
  }
  console.log(basket2);
  
  update(selectedItem.id);
};
let update = (id) => {
  let search = basket2.find((x) => x.id === id);
  calculation();
}
let calculation = () => {
  let cartIcon = document.getElementById("countBacket");
  cartIcon.innerHTML = basket2.map((x) => x.item).reduce((x, y) => x + y, 0);
  
}                   
generateimgSection();

	
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


