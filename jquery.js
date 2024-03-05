// $(".course-details-area .accordion .card-body ul li ").on(
//   "click",
//   function (e) {
//     e.preventDefault();
//     $(".bootcamp_accordion_section .expandable-content").slideUp();
//     $(".toggleContent").removeClass("active");
//     if (!$(this).find(".toggleContent").hasClass("active")) {
//       $(this).find(".toggleContent").addClass("active");
//       $(this).find(".expandable-content").slideDown();
//     }
//   }
// );

// tabs



// About Slick Slider
$(".slick-carousel").slick({
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
  swipeToSlide: true,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});

// Read More
$(document).ready(function () {
  $("#read_more").click(function () {
    var elem = $("#read_more").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#read_more").text("Read Less");
      $("#text").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#read_more").text("Read More");
      $("#text").slideUp();
    }
  });
});
// Swiper Slider

//Bootcamp Modules Expandable Content

// Initialize tooltips
var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
