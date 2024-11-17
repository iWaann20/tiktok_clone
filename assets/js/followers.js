$(document).ready(function () {

  const categoryData = `[
    {
      "title":"Home",
      "icon":"assets/images/home.svg",
      "link":"index.html"
    },
    {
      "title":"Explore",
      "icon":"assets/images/explore.svg",
      "link":"explorer.html"
    },
    {
      "title":"Followers",
      "icon":"assets/images/follower_active.svg",
      "link":"followers.html"
    },
    {
      "title":"Following",
      "icon":"assets/images/following.svg",
      "link":"following.html"
    },
    {
      "title":"Live",
      "icon":"assets/images/live.png"
    }
  ]`;

  const users = `[
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
  ]`
 
  $index = 0;
  $array = JSON.parse(categoryData);
  $html = "";
  $array.forEach((data, idx) => {
    $html +=
      '<div ><a href="' +
      data.link +
      '" class="flex gap-3 items-center cursor-pointer"><img src="';
    $html += data.icon + '" class="w-6" alt="side icon"/>';
    $html += '<span class="text-lg hover:text-red-500 text-black font-bold">';
    $html += data.title + "</span></a></div>";
  });
  $(".category-list").html($html);

  $array = JSON.parse(users);
$html = "";
$array.forEach((data,idx)=>{
  $html += '<div class="flex items-center justify-between gap-4 cursor-pointer"><img src="'
  $html += data.image + '" alt="avatar" class="w-10 h-10 rounded-full"><span class="text-black text-md font-bold">'
  $html += data.name + '</span><button class="rounded-md btn-follow bg-red-500 px-2 sm:px-4 md:px-8 py-1" data-follow=true>Follow</button></div>'
})


  $(".list-container").html($html);

  $(".btn-follow").on("click", function(){
    if($(this).data('follow')){
      $(this).html('Unfollow')
      $(this).removeClass('bg-red-500')
      $(this).addClass('border border-red-500 text-red-500')
      $(this).data('follow', false)
    }
    else{
      $(this).html('Follow')
      $(this).removeClass('border border-red-500 text-red-500')
      $(this).addClass('bg-red-500')
      $(this).data('follow', true)
    }
  })
});
