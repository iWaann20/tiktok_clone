$(document).ready(function () {


  const users = `[
    {
      "name":"Rais",
      "image":"assets/images/akun.png",
      "type":"new",
      "content":"new notification",
      "time":"1 hours ago"
    },
    {
      "name":"Egy",
      "image":"assets/images/akun.png",
      "type":"new",
      "content":"new notification",
      "time":"1 hours ago"
    },
    {
      "name":"Adit",
      "image":"assets/images/akun.png",
      "type":"new",
      "content":"new notification",
      "time":"2 hours ago"
    },
    {
      "name":"Arya",
      "image":"assets/images/akun.png",
      "type":"new",
      "content":"new notification",
      "time":"3 hours ago"
    },
    {
      "name":"Yehezkiel",
      "image":"assets/images/akun.png",
      "type":"new",
      "content":"new notification",
      "time":"3 hours ago"
    },
    {
      "name":"Dimas",
      "image":"assets/images/akun.png",
      "type":"new",
      "content":"new notification",
      "time":"3 hours ago"
    },
    {
      "name":"Yanto",
      "image":"assets/images/akun.png",
      "type":"new",
      "content":"new notification",
      "time":"3 hours ago"
    },
    {
      "name":"Agus",
      "image":"assets/images/akun.png",
      "type":"new",
      "content":"new notification",
      "time":"3 hours ago"
    },
    {
      "name":"Valtino",
      "image":"assets/images/akun.png",
      "type":"new",
      "content":"new notification",
      "time":"3 hours ago"
    },
    {
      "name":"Icun",
      "image":"assets/images/akun.png",
      "type":"new",
      "content":"new notification",
      "time":"3 hours ago"
    },
    {
      "name":"Ardan",
      "image":"assets/images/akun.png",
      "type":"new",
      "content":"new notification",
      "time":"3 hours ago"
    },
    {
      "name":"Nanda",
      "image":"assets/images/akun.png",
      "type":"new",
      "content":"new notification",
      "time":"3 hours ago"
    }
  ]`

  $array = JSON.parse(users);
  $html = "";
  let rand = 0;
  $array.forEach((data,idx)=>{
    rand = parseInt(Math.random()*10%5)
    $html += '<div class="flex py-2 justify-between items-center px-2 sm:mx-8"><div class="flex items-center gap-4"><img src="'
    $html += data.image + '" alt="user avatar"/><div class="flex flex-col"><p class="text-sm font-bold">'
    $html += data.name + '<span class="font-normal"> '+ data.content + '</span></p><span class="text-sm">'
    $html += data.time + '</span></div></div>'
    if(idx<3){
      $html += '<button><img src="assets/images/icons/badge_new.svg" alt="notif icon" />'
    }
    else if(idx%(rand) == 0){
      $html += '<button class="px-2 sm:px-8 py-2 border-red-500 border rounded-md text-xs sm:text-sm font-bold text-red-500">Follow'
    }
    else if(idx%(rand) == 1){
      $html += '<button><img src="assets/images/icons/ic_video.svg" alt="notif icon" />'
    }
    else{
      $html += '<button>'
    }
    $html += '</button></div>'
  })

  $(".box-notification").html($html);

});