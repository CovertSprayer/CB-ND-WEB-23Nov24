const elem = $('h1');
// const elem = $('#special-para');
// const elem = $('.fav');

// console.log(elem);
// console.log(elem[0]);

// elem[0].style.color = "red";
// elem.style.color = "red";
// elem.css("color", "red");

$(elem[0]).css("color", "red");

$(elem[0]).text("Hi there!");
$(elem[1]).html("<i>Hi there!</i>");

console.log($("img").attr("width"));  
// $("img").attr("width", 200);


$(elem[1]).addClass("one")
$(elem[1]).removeClass("one")
// console.log($(elem[1]).hasClass("one"))

const styles = {
  color: "green",
  border: "2px solid green",
  fontSize: "18px"
}

$('li').parent().css(styles)
// console.log($('li').parent().next())
// console.log($('li').parent().prev())
// console.log($('li').parent().children())

const p = $("<p>");
p.text("Some random text!");

// console.log(elem[0])
// $(elem[0]).after(p);
// $(elem[0]).before(p);
// $("ul").prepend(p);
// $("ul").append(p);
$("ul").remove();
