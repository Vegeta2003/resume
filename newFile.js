//scroll script
const navigation=
  document.querySelector(".vertical_bar");

  const navigationHeight=
    navigation.offsetHeight;

    document.documentElement.style.setProperty(
        "--scroll-padding",
        navigationHeight + "px"
    );

//loading script
    $('body').append('<div style = "" class = "loader"> <div class="loading">  </div> </div>')
    $(window).on('load',function(){
      setTimeout(removeLoading, 2000);
    });
    function removeLoading() {
      $(".loader").fadeOut(1000, function() {
        $(".loader").remove();
      });
    }
  
  
  //navigation script
    var hamburger = document.querySelector(".hamburger");
    var wrapper = document.querySelector(".wrapper");
    var backdrop = document.querySelector(".backdrop");
    hamburger.addEventListener("click", function(){
      wrapper.classList.add("active")
    }) 

    backdrop.addEventListener("click", function(){
      wrapper.classList.remove("active")
    }) 