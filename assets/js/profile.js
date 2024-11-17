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
      "icon":"assets/images/following.svg",
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

  const postsData = `[
    {
      "image":"assets/images/post1.png"
    },
    {
      "image":"assets/images/post2.png"
    },
    {
      "image":"assets/images/post3.png"
    },
    {
      "image":"assets/images/post4.png"
    },
    {
      "image":"assets/images/post5.png"
    },
    {
      "image":"assets/images/post6.png"
    }
  ]`

  const storyData = `[
    {
      "name":"Story 1",
      "image":"assets/images/story1.png"
    },
    {
      "name":"Story 2",
      "image":"assets/images/story2.png"
    },
    {
      "name":"Story 3",
      "image":"assets/images/story3.png"
    },
    {
      "name":"Story 4",
      "image":"assets/images/story4.png"
    },
    {
      "name":"Story 5",
      "image":"assets/images/story5.png"
    },
    {
      "name":"Story 6",
      "image":"assets/images/story6.png"
    },
    {
      "name":"Story 7",
      "image":"assets/images/story7.png"
    }
  ]`

  const suggestData = `[
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
  ]`

  let limit = 4;

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

  $array = JSON.parse(postsData);
  $html = "";
  $array.forEach((data, idx) => {
    $html += '<img src="'+ data.image+'" alt="post"  class="w-full"/>'
  });
  $(".box-posts").html($html);

  $array = JSON.parse(storyData);
  $html = "";
  $array.forEach((data, idx) => {
    $html += '<div class="inline-block snap-start text-center mr-4"><img src="'+ data.image+'" alt="story"/><span class="text-sm font-bold">'
    $html += data.name + '</span></div>'
  });
  $(".box-story").html($html);



  $(".btn-see-all").on("click", function(){
    limit = 999;
    drawSuggest()
  })

  function drawSuggest(){
    $array = JSON.parse(suggestData);
    $html = "";
    $array.forEach((data, idx) => {
      if(idx<limit){
      $html += '<div class="border pt-4 relative rounded-md w-40 inline-block snap-start mr-4"><button class="absolute top-2 right-2">'
      $html += '<img src="assets/images/icons/ic_close.svg" alt="close icon" /></button><div class="flex flex-col items-center justify-center px-2 py-5 gap-4"><img src="'
      $html += data.image + '" alt="user img" /><div class="flex flex-col items-center justify-center"><span class="font-bold text-sm">'
      $html += data.name + '</span><div class="flex items-center gap-2 "><span class="text-xs">' 
      $html += '</div></div><button class="w-full rounded-md bg-red-500 text-center text-white font-bold text-md py-1">Follow</button></div></div>'
      }
    });
    $(".box-suggest").html($html);
  }

  drawSuggest()
});