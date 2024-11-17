$(document).ready(function () {
  const people = `[
    {
      "name":"Rais",
      "image":"assets/images/akun.png"
    },
    {
      "name":"Egy",
      "image":"assets/images/akun.png"
    },
    {
      "name":"Diaz",
      "image":"assets/images/akun.png"
    },
    {
      "name":"Arya",
      "image":"assets/images/akun.png"
    },
    {
      "name":"Dimas",
      "image":"assets/images/akun.png"
    },
    {
      "name":"Yehezkiel",
      "image":"assets/images/akun.png"
    },
    {
      "name":"Adit",
      "image":"assets/images/akun.png"
    },
    {
      "name":"Yanto",
      "image":"assets/images/akun.png"
    }
  ]`;


  let mobileMenu = false;
  $index = 0;
  $array = JSON.parse(people);
  $html = "";
  $array.forEach((data) => {
    $html += '<div class="flex gap-2 items-center cursor-pointer">';
    $html += '<a href="profile.html" class="w-12 h-12 flex items-center">';
    $html += '<img src="' + data.image + '" alt="avatar" />';
    $html += '</a>';
    $html += '<span class="text-black text-xl">' + data.name + '</span>';
    $html += '</div>';
  });  
  $("#user-list").html($html);

  $(".menu-button").on("click", function(){
    mobileMenu = !mobileMenu;
    $("#menu-icon").attr("src",!mobileMenu?"assets/images/menu.svg":"assets/images/close.svg")
    toggleMobileMenu()
  })
  
  function toggleMobileMenu(){
    mobileMenu?$("#menu-mobile").css("display","flex"):$("#menu-mobile").hide()
  }
  function updateImage(){
    $("#frame").attr("src",imageList[$index]);
  }

  let menuopen = false

  $(".btn-menu").on("click", function(){
    menuopen = !menuopen
    if(menuopen){
      $(".toggle-menu").removeClass("hidden")
      $(".icon-menu").attr("src","assets/images/icons/angle_up.svg")
    }
    else{
      $(".toggle-menu").addClass("hidden")
      $(".icon-menu").attr("src","assets/images/icons/angle_down.svg")
    }
  })
});
