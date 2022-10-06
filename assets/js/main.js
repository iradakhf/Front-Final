$(document).ready(function () {
  $("#buttonOnHeader1").click(() => {
    if (($(".dropDownForButtonOnHeader1").css("display") == "block")) {
      $(".dropDownForButtonOnHeader1").css("display", "none");

    }
    else {
      $(".dropDownForButtonOnHeader1").css("display", "block");
      $(".dropDownForButtonOnHeader2").css("display", "none");


    }
  });
  
  $("#buttonOnHeader2").click(() => {
    if ($(".dropDownForButtonOnHeader2").css("display") == "block") {
      $(".dropDownForButtonOnHeader2").css("display", "none");

    }
    else {
      $(".dropDownForButtonOnHeader2").css("display", "block");
      $(".dropDownForButtonOnHeader1").css("display", "none");


    }
  });

  $("#iconUserI").click(() => {
    if ($(".userDropDown").css("display") == "none") {
      $(".userDropDown").css("display", "block");

    }
    else {
      $(".userDropDown").css("display", "none");
       }
  });
 


  $('.sliderİnSection1').slick({
    autoplay: true,
    arrows: false,
    draggable: false,
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

  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "10/18/",
      birthday = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {
        const now = new Date().getTime(),
          distance = countDown - now;

        (document.getElementById("days").innerText = Math.floor(distance / day)),
          (document.getElementById("hours").innerText = Math.floor(
            (distance % day) / hour
          )),
          (document.getElementById("minutes").innerText = Math.floor(
            (distance % hour) / minute
          )),
          (document.getElementById("seconds").innerText = Math.floor(
            (distance % minute) / second
          ));

        if (distance < 0) {
          document.getElementById("headline").innerText = "It's the presentation day!";
          document.getElementById("countdown").style.display = "none";
          document.getElementById("content").style.display = "block";
          clearInterval(x);
        }
      }, 0);
  })();
  $('.responsiveSliderForSection2').slick({

    dots: false,
    infinite: true,
    prevArrow: $('#rightOneOnCountDownIndex #leftArrow'),
    nextArrow: $('#rightOneOnCountDownIndex #rightArrow'),
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
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
  $('.responsiveSliderForSection3').slick({
    dots: false,
    infinite: true,
    prevArrow: $('#rightOneOnCountDownIndex #secondleftArrow'),
    nextArrow: $('#rightOneOnCountDownIndex #secondrightArrow'),
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      }
    ]
  });
  $('.responsiveSliderForSection4').slick({
    dots: false,
    infinite: true,
    prevArrow: $('#rightOneOnCountDownIndex #thirdleftArrow'),
    nextArrow: $('#rightOneOnCountDownIndex #thirdrightArrow'),
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
  $('.responsiveSliderForSection6').slick({
    prevArrow: $('#rightOneOnCountDownIndex #fourthleftArrow'),
    nextArrow: $('#rightOneOnCountDownIndex #fourthrightArrow'),
    rows: 2,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
  $('.seventhSlider').slick({
    prevArrow: $('#rightOneOnCountDownIndex #seventhleftArrow'),
    nextArrow: $('#rightOneOnCountDownIndex #seventhrightArrow'),
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
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
  $('.responsiveSliderForSection8').slick({
    dots: false,
    infinite: true,
    prevArrow: $('#rightOneOnCountDownIndex #eighthleftArrow'),
    nextArrow: $('#rightOneOnCountDownIndex #eighthrightArrow'),
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  });
  $('.responsiveSliderForContactSectionFirst').slick({
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
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
 
}

function Modal(options) {

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
function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += " " + cls;
}

function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
      var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
      ele.className = ele.className.replace(reg, ' ');
  }
}

//Add event from js the keep the marup clean
function init() {
  document.getElementById("open-menu").addEventListener("click", toggleMenu);
  document.getElementById("body-overlay").addEventListener("click", toggleMenu);
}


//The actual fuction
function toggleMenu() {
  var ele = document.getElementsByTagName('body')[0];
  if (!hasClass(ele, "menu-open")) {
      addClass(ele, "menu-open");
  } else {
      removeClass(ele, "menu-open");
  }
}

//Prevent the function to run before the document is loaded
document.addEventListener('readystatechange', function() {
  if (document.readyState === "complete") {
      init();
  }
});
var trapScroll;

(function($){  
  
  trapScroll = function(opt){
    
    var trapElement;
    var scrollableDist;
    var trapClassName = 'trapScroll-enabled';
    var trapSelector = '.trapScroll';
    
    var trapWheel = function(e){
      
      if (!$('body').hasClass(trapClassName)) {
        
        return;
        
      } else {  
        
        var curScrollPos = trapElement.scrollTop();
        var wheelEvent = e.originalEvent;
        var dY = wheelEvent.deltaY;

        // only trap events once we've scrolled to the end
        // or beginning
        if ((dY>0 && curScrollPos >= scrollableDist) ||
            (dY<0 && curScrollPos <= 0)) {

          opt.onScrollEnd();
          return false;
          
        }
        
      }
      
    }
    
    $(document) 
      .on('wheel', trapWheel)
      .on('mouseleave', trapSelector, function(){
        
        $('body').removeClass(trapClassName);
      
      })
      .on('mouseenter', trapSelector, function(){   
      
        trapElement = $(this);
        var containerHeight = trapElement.outerHeight();
        var contentHeight = trapElement[0].scrollHeight; // height of scrollable content
        scrollableDist = contentHeight - containerHeight;
        
        if (contentHeight>containerHeight)
          $('body').addClass(trapClassName); 
      
      });       
  } 
  
})($);

var preventedCount = 0;
var showEventPreventedMsg = function(){  
  $('#mousewheel-prevented').stop().animate({opacity: 1}, 'fast');
}
var hideEventPreventedMsg = function(){
  $('#mousewheel-prevented').stop().animate({opacity: 0}, 'fast');
}
var addPreventedCount = function(){
  $('#prevented-count').html('prevented <small>x</small>' + preventedCount++);
}

trapScroll({ onScrollEnd: addPreventedCount });
$('.trapScroll')
  .on('mouseenter', showEventPreventedMsg)
  .on('mouseleave', hideEventPreventedMsg);      
$('[id*="parent"]').scrollTop(100);
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












// generates add to cart funtionality for responsiveSliderForSection4,
//i have named them in the same way as they were in index html.
let responsiveSliderForSection4 = document.getElementById("responsiveSliderForSection4");


let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateResponsiveSliderForSection4 = () => {
  return (responsiveSliderForSection4.innerHTML = responsiveSliderForSection4ItemsData.map((x) => {
    let { id, name, del, price, description, img } = x
    return `
  
 <div id= product-id-${id} class="imgBoxes">
    <a href="productvariation1.html">
 
        <img src="${img}" alt="">
    </a>
    <div class="star mb-2">
        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
            class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i
            class="fa-solid fa-star"></i><span>(64)</span>
    </div>
    <a class="ahrefForText" href="productvariation1.html">${name}</a>
    <span>$${price} <del>$${del}</del></span>
 
    <div class="addToCartPartOnImage">
        <div class="row justify-content-between">
            <div class="col-lg-2 col-2 col-md-2 col-sm-2 addToCartIcons"><i
                    class="fa-regular fa-heart"></i></div>
            <div onclick="addToCart(${id})" class="col-lg-7 col-7 col-md-7 col-sm-7 addToCartBox"><p
                    >Add to Cart</p></div>
            <div class="col-lg-2 col-2 col-md-2 col-sm-2  addToCartIcons"><i
                    class="fa-solid fa-eye"></i></div>
        </div>
    </div>
 
 </div>
    `;
  }).join(""));
}


generateResponsiveSliderForSection4();




// generates add to cart funtionality for responsiveSliderForSection6,
//i have named them in the same way as they were in index html.
let responsiveSliderForSection6 = document.getElementById("responsiveSliderForSection6");




let generateResponsiveSliderForSection6 = () => {
  return (responsiveSliderForSection6.innerHTML = responsiveSliderForSection6ItemsData.map((x) => {
    let { id, name, del, price, description, img } = x
    return `

    <div id= product-id-${id} class="imgBoxes">
      <a href="productvariation1.html">

        <img src="${img}" alt=""> </a>
      <a class="ahrefForText" href="productvariation1.html">${name}</a>
      <span>$${price} <del>$${del}</del></span>
      <h6><i class="fa-solid fa-circle-dot lightPink"></i><i
        class="fa-solid fa-circle pink"></i><i class="fa-solid fa-circle purp"></i></h6>
      <div class="salePartOnImage">
        20% OFF
      </div>
      <div class="addToCartPartOnImage">
        <div class="row justify-content-between">
          <div class="col-lg-2 col-2 col-md-2 col-sm-2 addToCartIcons"><i
            class="fa-regular fa-heart"></i></div>
          <div onclick="addToCart(${id})" class="col-lg-7 col-7 col-md-7 col-sm-7 addToCartBox"><p
            href="#">Add to Cart</p></div>
          <div class="col-lg-2 col-2 col-md-2 col-sm-2  addToCartIcons"><i
            class="fa-solid fa-eye"></i></div>
        </div>
      </div>

    </div>



    `;
  }).join(""));
}
generateResponsiveSliderForSection6();


// generates add to cart funtionality for responsiveSliderForSection2,
//i have named them in the same way as they were in index html.
let responsiveSliderForSection2 = document.getElementById("responsiveSliderForSection2");


let generateResponsiveSliderForSection2 = () => {
  return (responsiveSliderForSection2.innerHTML = responsiveSliderForSection2ItemsData.map((x) => {
    let { id, name, del, price, description, img } = x
    return `
    <div id= product-id-${id} class="imgBoxes text-center">
    <a href="productvariation1.html">
    
    <img src="${img}" alt=""> 

    </a>
    <a class="ahrefForText" href="productvariation1.html">${name}</a>
    <span><del>$${del}</del> $${price}</span>

    <div class="salePartOnImage">
        20% OFF
    </div>
    <div class="addToCartPartOnImage">
        <div class="row justify-content-between">
            <div class="col-lg-2 col-2 col-md-2 col-sm-2 addToCartIcons"><i
                    class="fa-regular fa-heart"></i></div>
                    <div onclick="addToCart(${id})" class="col-lg-7 col-7 col-md-7 col-sm-7 addToCartBox"><p
                    >Add to Cart</p></div>
            <div class="col-lg-2 col-2 col-md-2 col-sm-2  addToCartIcons"><i
                    class="fa-solid fa-eye"></i></div>
        </div>
    </div>
    
    </div>
      `;
  }).join(""));
}
generateResponsiveSliderForSection2();

// generates add to cart funtionality for responsiveSliderForSection8,
//i have named them in the same way as they were in index html.
let responsiveSliderForSection8 = document.getElementById("responsiveSliderForSection8");




let generateResponsiveSliderForSection8 = () => {
  return (responsiveSliderForSection8.innerHTML = responsiveSliderForSection8ItemsData.map((x) => {
    let { id, name, del, price, description, img } = x
    return `

    <div id= product-id-${id} class="imageAndSubtitilesOnEighth">
                                <div class="row">
                                    <div class="col-lg-12">
                                    <a href="productvariation1.html">

                                    <img src="${img}" alt=""> </a>
                                    </div>
                                    <div class="col-lg-12 text-center">
                                        <h6><i class="fa-solid fa-circle-dot lightPink"></i><i
                                            class="fa-solid fa-circle pink"></i><i class="fa-solid fa-circle purp"></i></h6>
                                        <h5>
                                        <a class="ahrefForText" href="productvariation1.html">${name}</a>
                                        </h5>
                                        <span><del>$${del}</del>$${price}</span>
                                        <div class="addToCartPartOnImage">
                                            <div class="row justify-content-between">
                                                <div class="col-lg-2 col-2 col-md-2 col-sm-2 addToCartIcons"><i
                                                        class="fa-regular fa-heart"></i></div>
                                                        <div onclick="addToCart(${id})" class="col-lg-7 col-7 col-md-7 col-sm-7 addToCartBox"><p
                                                        href="#">Add to Cart</p></div>
                                                <div class="col-lg-2 col-2 col-md-2 col-sm-2  addToCartIcons"><i
                                                        class="fa-solid fa-eye"></i></div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
      `;
  }).join(""));
}
generateResponsiveSliderForSection8();

// generates add to cart funtionality for popUpAddToBasket,

let popUpAddToBasket = document.getElementById("popUpAddToBasket");



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
  } else {
    search.item += 1;
  }

  console.log(basket);
  update(selectedItem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};

/**
 * ! To update the digits of picked items on each item card
 */

 let update = (id) => {
  let search = basket.find((x) => x.id === id);
  // document.getElementById(id).innerHTML = search.item;
  calculation();
};

/**
 * ! To calculate total amount of selected Items
 */

let calculation = () => {
  let cartIcon = document.getElementById("countBacket");
  cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
};

calculation();
