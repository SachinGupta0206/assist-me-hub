(function ($) {
  ("use strict");

  $(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: "scroll",
  });

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  // loader
  var loader = function () {
    setTimeout(function () {
      if ($("#ftco-loader").length > 0) {
        $("#ftco-loader").removeClass("show");
      }
    }, 1);
  };
  loader();

  var carousel = function () {
    $(".carousel-testimony").owlCarousel({
      center: false,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplaySpeed: 1000,
      autoplayHoverPause: true,
      items: 3,
      margin: 30,
      stagePadding: 0,
      nav: true,
      dots: true,
      navText: [
        '<span class="ion-ios-arrow-back">',
        '<span class="ion-ios-arrow-forward">',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });
  };
  carousel();

  $("nav .dropdown").hover(
    function () {
      var $this = $(this);
      // 	 timer;
      // clearTimeout(timer);
      $this.addClass("show");
      $this.find("> a").attr("aria-expanded", true);
      // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
      $this.find(".dropdown-menu").addClass("show");
    },
    function () {
      var $this = $(this);
      // timer;
      // timer = setTimeout(function(){
      $this.removeClass("show");
      $this.find("> a").attr("aria-expanded", false);
      // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
      $this.find(".dropdown-menu").removeClass("show");
      // }, 100);
    },
  );

  $("#dropdown04").on("show.bs.dropdown", function () {
    console.log("show");
  });

  // scroll
  var scrollWindow = function () {
    $(window).scroll(function () {
      var $w = $(this),
        st = $w.scrollTop(),
        navbar = $(".ftco_navbar"),
        sd = $(".js-scroll-wrap");

      if (st > 150) {
        if (!navbar.hasClass("scrolled")) {
          navbar.addClass("scrolled");
        }
      }
      if (st < 150) {
        if (navbar.hasClass("scrolled")) {
          navbar.removeClass("scrolled sleep");
        }
      }
      if (st > 350) {
        if (!navbar.hasClass("awake")) {
          navbar.addClass("awake");
        }

        if (sd.length > 0) {
          sd.addClass("sleep");
        }
      }
      if (st < 350) {
        if (navbar.hasClass("awake")) {
          navbar.removeClass("awake");
          navbar.addClass("sleep");
        }
        if (sd.length > 0) {
          sd.removeClass("sleep");
        }
      }
    });
  };
  scrollWindow();

  var counter = function () {
    $("#section-counter, .hero-wrap, .ftco-counter").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("ftco-animated")
        ) {
          var comma_separator_number_step =
            $.animateNumber.numberStepFactories.separator(",");
          $(".number").each(function () {
            var $this = $(this),
              num = $this.data("number");
            console.log(num);
            $this.animateNumber(
              {
                number: num,
                numberStep: comma_separator_number_step,
              },
              7000,
            );
          });
        }
      },
      { offset: "95%" },
    );
  };
  counter();

  var contentWayPoint = function () {
    var i = 0;
    $(".ftco-animate").waypoint(
      function (direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("ftco-animated")
        ) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function () {
            $("body .ftco-animate.item-animate").each(function (k) {
              var el = $(this);
              setTimeout(
                function () {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn ftco-animated");
                  } else if (effect === "fadeInLeft") {
                    el.addClass("fadeInLeft ftco-animated");
                  } else if (effect === "fadeInRight") {
                    el.addClass("fadeInRight ftco-animated");
                  } else {
                    el.addClass("fadeInUp ftco-animated");
                  }
                  el.removeClass("item-animate");
                },
                k * 50,
                "easeInOutExpo",
              );
            });
          }, 100);
        }
      },
      { offset: "95%" },
    );
  };
  contentWayPoint();

  // magnific popup
  $(".image-popup").magnificPopup({
    type: "image",
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: "mfp-no-margins mfp-with-zoom", // class to remove default margin from left and right side
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true,
    },
    zoom: {
      enabled: true,
      duration: 300, // don't foget to change the duration also in CSS
    },
  });

  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false,
  });

  $('[data-toggle="popover"]').popover();
  $('[data-toggle="tooltip"]').tooltip();

  var goHere = function () {
    $(".mouse-icon").on("click", function (event) {
      event.preventDefault();

      $("html,body").animate(
        {
          scrollTop: $(".goto-here").offset().top,
        },
        500,
        "easeInOutExpo",
      );

      return false;
    });
  };
  goHere();

  $(function () {
    $(".progress").each(function () {
      var value = $(this).attr("data-value");
      var left = $(this).find(".progress-left .progress-bar");
      var right = $(this).find(".progress-right .progress-bar");

      if (value > 0) {
        if (value <= 50) {
          right.css(
            "transform",
            "rotate(" + percentageToDegrees(value) + "deg)",
          );
        } else {
          right.css("transform", "rotate(180deg)");
          left.css(
            "transform",
            "rotate(" + percentageToDegrees(value - 50) + "deg)",
          );
        }
      }
    });

    function percentageToDegrees(percentage) {
      return (percentage / 100) * 360;
    }
  });
  // Right-click and keyboard shortcuts are now enabled for development
  // Uncomment below to disable in production:

  // document.addEventListener("contextmenu", function (e) {
  //   e.preventDefault();
  // });

  // document.addEventListener("keydown", function (e) {
  //   if (
  //     e.keyCode === 123 || // F12
  //     (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) || // Ctrl+Shift+I or J
  //     (e.ctrlKey && (e.keyCode === 85 || e.keyCode === 83)) // Ctrl+U or Ctrl+S
  //   ) {
  //     e.preventDefault();
  //   }
  // });
  // ====Form Submit =====
  // Using FormSubmit.co - Free form backend service

  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Get form values
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var service = document.getElementById("service").value;
      var message = document.getElementById("message").value;

      // Validate form fields (simple check)
      if (!name || !email || !service || !message) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "All fields are required!",
        });
        return;
      }
      const loadingAlert = Swal.fire({
        title: "Sending...",
        text: "Please wait while we send your message.",
        allowOutsideClick: false,
        onBeforeOpen: () => {
          Swal.showLoading(); // Display loading indicator
        },
        showConfirmButton: false, // Hide the confirm button
      });

      // Create FormData object
      var formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("service", service);
      formData.append("message", message);

      // Send using fetch API to FormSubmit
      fetch("https://formsubmit.co/ajax/Support@assistmehub.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          loadingAlert.close();

          // Check if form needs activation
          if (
            data.success === "false" &&
            data.message &&
            data.message.includes("Activation")
          ) {
            Swal.fire({
              icon: "info",
              title: "Almost There! 📧",
              html: "We've sent an activation email to <strong>Support@assistmehub.com</strong><br><br>Please check your email and click the 'Activate Form' link to complete setup.<br><br><small>Check spam folder if you don't see it.</small>",
              confirmButtonText: "Got it!",
            }).then(function () {
              document.getElementById("contactForm").reset();
            });
          } else if (data.success === "true" || data.success === true) {
            Swal.fire({
              icon: "success",
              title: "Thank You!",
              text: "Your message has been sent successfully!",
            }).then(function () {
              document.getElementById("contactForm").reset();
            });
          } else {
            throw new Error("Form submission failed");
          }
        })
        .catch((error) => {
          loadingAlert.close();
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong. Please try again.",
          });
          console.error("Error sending form:", error);
        });
    });

  // Additional testimonial carousel initialization
  $(document).ready(function () {
    if ($(".carousel-testimony").length) {
      console.log("Initializing testimonial carousel...");
      $(".carousel-testimony").owlCarousel({
        center: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplaySpeed: 1000,
        autoplayHoverPause: true,
        items: 3,
        margin: 30,
        stagePadding: 0,
        nav: true,
        dots: true,
        navText: [
          '<span class="ion-ios-arrow-back"></span>',
          '<span class="ion-ios-arrow-forward"></span>',
        ],
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          },
        },
      });
    }
  });
})(jQuery);
