import './lib/lib';
import $ from './lib/lib';


$('button').on("click", function(){
    $(this).toggleClass('active');
});


$("button").addAttribute("data-num", 8).removeAttribute("data-num");
$("button").toggleAttribute("data-collapse");