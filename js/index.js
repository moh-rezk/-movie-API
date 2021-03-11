
import { Apis } from './apis.js'
let apiFun = new Apis();
import { Validation } from './regex.js';
let valid = new Validation();




let MenuBarWidht = $('.nav-bar-menu').outerWidth(true);
$('.nav-bar-menu').css({ left: `-${MenuBarWidht}` })
$('.nav-bar-head').css({ left: '0px' });

let divPostion = $('.fa-times').css('display');

$('.fa-align-justify').click(function () {



    $('.nav-bar-menu').animate({ left: '0px' }, 500)
    $('.nav-bar-head').animate({ left: `${MenuBarWidht}` }, 500, function () {

        $('.item1,.item2,.item3,.item4,.item5,.item6').animate({ opacity: 1, paddingTop: '25px' }, 1000)
        $('.fa-times').show(500)
        $('.fa-align-justify').hide(500);
    });





})

$('.fa-times').click(function () {

    $('.item1,.item2,.item3,.item4,.item5,.item6').animate({ opacity: 0, paddingTop: '250px' }, 400, function () {

        $('.nav-bar-menu').animate({ left: `-${MenuBarWidht}` }, 500)
        $('.nav-bar-head').animate({ left: '0px' }, 500);
        $('.fa-align-justify').show(500);
        $('.fa-times').hide(500);
    });





});

$('#email').keyup(function () {

    valid.checkEmail()


})

$('#password').keyup(function () {

    valid.checkPassword($('#password'))


});

$('#rePassword').keyup(function () {

    valid.checkPassword($('#rePassword'))
})

$('#phone').keyup(function () {

    valid.checkPhone($('#phone'))
})




$('#age').keyup(function () {

    valid.checkage($('#age'))
})


$('#name').keyup(function () {

    valid.checkName($(this))
})





$('.item6').click(function () {

    let topcontact = $('#contact').offset().top;
    $('html,body').animate({ scrollTop: topcontact }, 2000);


})

let urlObj = {

    searchURL: "https://api.themoviedb.org/3/search/movie?query=mad&api_key=4c69f7a3534cfa0d3664b6e1f78b2bf1&language=en-US&include_adult=false",

    trendingURL: "https://api.themoviedb.org/3/trending/all/day?api_key=4c69f7a3534cfa0d3664b6e1f78b2bf1",
    latestURL: "https://api.themoviedb.org/3/movie/latest?api_key=4c69f7a3534cfa0d3664b6e1f78b2bf1",
    popularURL: "https://api.themoviedb.org/3/movie/popular?api_key=4c69f7a3534cfa0d3664b6e1f78b2bf1",
    topratedURL: "https://api.themoviedb.org/3/movie/top_rated?api_key=4c69f7a3534cfa0d3664b6e1f78b2bf1",
    upcomingURL: "https://api.themoviedb.org/3/movie/upcoming?api_key=4c69f7a3534cfa0d3664b6e1f78b2bf1",
    NowURL: "https://api.themoviedb.org/3/movie/now_playing?api_key=4c69f7a3534cfa0d3664b6e1f78b2bf1",
    Url: "https://api.themoviedb.org/3/movie/now_playing?api_key=4c69f7a3534cfa0d3664b6e1f78b2bf1",
}

$('.item1').click(function () {


    apiFun.getData(urlObj.NowURL);

});

$('.item2').click(function () {


    apiFun.getData(urlObj.popularURL);

});


$('.item3').click(function () {


    apiFun.getData(urlObj.topratedURL);

});

$('.item4').click(function () {


    apiFun.getData(urlObj.trendingURL);

});


$('.item5').click(function () {


    apiFun.getData(urlObj.upcomingURL);

});

$('#search').keyup(function () {
    let wordSearch = $('#search').val();

    if (wordSearch.length > 1) {

      //  let sURL = `https://api.themoviedb.org/3/search/movie?query=${wordSearch}&api_key=4c69f7a3534cfa0d3664b6e1f78b2bf1&language=en-US&include_adult=false`;

      let sURL=`https://api.themoviedb.org/3/search/multi?api_key=4c69f7a3534cfa0d3664b6e1f78b2bf1&language=en-US&query=${wordSearch}&page=1&include_adult=false` ;
      apiFun.getData(sURL);
    }


})


$('#movieSearch').keyup(function () {
    let wordSearch = $('#movieSearch').val();

    if (wordSearch.length > 1) {

       let sURL = `https://api.themoviedb.org/3/search/movie?query=${wordSearch}&api_key=4c69f7a3534cfa0d3664b6e1f78b2bf1&language=en-US&include_adult=false`;

     
      apiFun.getData(sURL);
    }


})

