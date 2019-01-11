const audio = [
  {
    artist: "Rabbi Kraznianski",
    title: "The Rambam",
    url: "https://s3.amazonaws.com/torahcourses.com/audio/rambam.mp3",
    description: " ",
  },
  {
    artist: "Rabbi Kraznianski",
    title: "Toldos",
    url: "https://s3.amazonaws.com/torahcourses.com/audio/Rabbi_krav_toldus.mp3",
    description: " ",
  },
  {
    artist: "Rabbi Kraznianski",
    title: "Vayera",
    url: "https://s3.amazonaws.com/torahcourses.com/audio/Rabbi_kraz_vaera.mp3",
    description: " ",
  },
  {
    artist: "Rabbi Kraznianski",
    title: "Yud Tes Kislev",
    url: "https://s3.amazonaws.com/torahcourses.com/audio/Rabbi_Kraz_pre_Yud_tes_kisslev.mp3",
    description: " ",
  },
  {
    artist: "Rabbi Kraznianski",
    title: "Lech Lecha",
    url: "https://s3.amazonaws.com/torahcourses.com/audio/Rabbi_kraz_lechlecha.mp3",
    description: " ",
  },
  {
    artist: "Rabbi Kraznianski",
    title: "succos",
    url: "https://s3.amazonaws.com/torahcourses.com/audio/Rabbi_kraz_suchos.mp3",
    description: " ",
  },
  {
    artist: "Rabbi Kraznianski",
    title: "Rush Hashana",
    url: "https://s3.amazonaws.com/torahcourses.com/audio/Rabbi_kraz_rush_hashana.mp3",
    description: " ",
  },
  {
    artist: "Rabbi Kraznianski",
    title: "Ki Savo",
    url: "https://s3.amazonaws.com/torahcourses.com/audio/Rabbi_kraz_ke_savo.mp3",
    description: " ",
  },
  {
    artist: "Rabbi Kraznianski",
    title: "Ki Savo",
    url: "https://s3.amazonaws.com/torahcourses.com/audio/Rabbi_kraz_chai_elul_ke_savo.mp3",
    description: " ",
  },
  {
    artist: "Rabbi Kraznianski",
    title: "Ki Seitzei",
    url: "https://s3.amazonaws.com/torahcourses.com/audio/Rabbi_kraz_ke_tetze.mp3",
    description: " ",
  },
  {
    artist: "Rabbi Kraznianski",
    title: "Ki Seitzei",
    url: "https://s3.amazonaws.com/torahcourses.com/audio/Rabbi_kraz_rushashana_ke_tzetze.mp3",
    description: " ",
  },
  {
    artist: "Rabbi Kraznianski",
    title: "Shoftim",
    url: "https://s3.amazonaws.com/torahcourses.com/audio/Rabbi_kraz_shuftim.mp3",
    description: " ",
  },
  {
    artist: "Rabbi Kraznianski",
    title: "Shoftim",
    url: "https://s3.amazonaws.com/torahcourses.com/audio/Rabbi_kraz_shuftim_2.mp3",
    description: " ",
  },
  {
    artist: "Rabbi Kraznianski",
    title: "Vaeschanan",
    url: "https://s3.amazonaws.com/torahcourses.com/audio/Rabbi_kraz_veschanun.mp3",
    description: " ",
  },
  {
    artist: "Rabbi Kraznianski",
    title: "Vayeishev",
    url: "https://s3.amazonaws.com/torahcourses.com/audio/vayeshev.mp3",
    description: " ",
  },
  {
    artist: "Rabbi Kraznianski",
    title: "Miketz",
    url: "https://s3.amazonaws.com/torahcourses.com/audio/meketz.mp3",
    description: " ",
  },
  {
    artist: "Rabbi Kraznianski",
    title: "Miketz",
    url: "https://s3.amazonaws.com/torahcourses.com/audio/meketz_2.mp3",
    description: " ",
  },
  {
    artist: "Rabbi Kraznianski",
    title: "Vayechi",
    url: "https://s3.amazonaws.com/torahcourses.com/audio/vayechi.mp3",
    description: " ",
  },
  {
    artist: "Rabbi Kraznianski",
    title: "Vayechi",
    url: "https://s3.amazonaws.com/torahcourses.com/audio/vayechi_2.mp3",
    description: " ",
  },
  {
    artist: "Rabbi Kraznianski",
    title: "Vayechi",
    url: "https://s3.amazonaws.com/torahcourses.com/audio/Vayechi_3.mp3",
    description: " ",
  },
  {
    artist: "Rabbi Kraznianski",
    title: "Kebud Av",
    url: "https://s3.amazonaws.com/torahcourses.com/audio/kebud_av.mp3",
    description: " ",
  },
];



let container = document.querySelector('#myUL');
let strArticles = "";

audio.forEach((x) => {

  strArticles += '<article">' +
    '<li>' +
    '<div class="cont">' +
    '<h3>' + x.title + '</h3>' +
    '<time id="artist">' + 'By: ' + x.artist + '</time>' +
    '</div>' +
    '<audio class="audio" controls="controls">' +
        '<source id="url" src="' + x.url + '" type="audio/mp3">' +
      '</audio>' +
    '</li>' +
  '</article>';
});

container.innerHTML = strArticles;


function myFunction() {
  var input, filter, ul, li, h3, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
    h3 = li[i].getElementsByTagName("h3")[0];
    txtValue = h3.textContent || h3.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function expand() {
  $(".search-slid-circle").toggleClass("close");
  $(".input").toggleClass("square");
  if ($('.search-slid-circle').hasClass('close')) {
    $('.input').focus();
  } else {
    $('.input').blur();
  }
}
$('.search-slid-circle').on('click', expand);


$('audio').mediaelementplayer({
  features: ['playpause', 'progress', 'current', 'tracks', 'fullscreen']
});
