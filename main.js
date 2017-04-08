//********************************
//OBJECT OF INFORMATION FOR DOM
//********************************

var famousPeople = [
	{
  		title: "Physicist",
  		name: "Galileo",
  		quote: "You cannot teach a man anything; you can only help him find it within himself.",
  		image: "https://lh6.googleusercontent.com/proxy/KslJRLWPfutqk1hYNKU8tp0X0nV1sXqDXxJOB2hJOvu_YldS0otUDFI_FOCM7b92ypH9GEugPGrtOJHjR2NTgct24PxtXjRHu86UrNpGRKtRH4-cm5_zvnG4ilI=s0-d",
  		lifespan: {
    		birth: 1564,
    		death: 1642
  		}
	}, {
		title: "Philosopher",
  		name: "Aristotle",
  		quote: "It is the mark of an educated mind to be able to entertain a thought without accepting it.",
  		image: "http://www.thefamouspeople.com/profiles/images/aristotle-17.jpg",
  		lifespan: {
    		birth: "384 BC",
    		death: "322 BC"
  		}
	}, {
		title: "Theologian",
  		name: "Erasmus",
  		quote: "When I get a little money I buy books; and if any is left I buy food and clothes.",
  		image: "http://kingofwallpapers.com/erasmus/erasmus-001.jpg",
  		lifespan: {
    		birth: 1466,
    		death: 1536
  		}
	}
];

//WRITES THE ABOVE SET OF DATA INTO THE DOM
for (let x = 0; x < famousPeople.length; x++) {
	$("div#personList").append(`<div class="col-sm-6 col-md-4 thumbnail">
			<img src="${famousPeople[x].image}">
			<div class="caption">
				<h3>${famousPeople[x].name}</h3>
				<h5>Birth: ${famousPeople[x].lifespan.birth}</h6>
				<h5>Death: ${famousPeople[x].lifespan.death}</h6>
				<p>${famousPeople[x].quote}</p>
			</div>
		</div>
	`);
}


//********************************
//For every even numbered element, have a light yellow background.
//For every odd numbered element, have a light blue background.
//********************************

$("#personList .thumbnail:nth-child(odd)").addClass("yellowBackground");
$("#personList .thumbnail:nth-child(even)").addClass("blueBackground");

//********************************
//On selection - input field should be on focus
//pull info to input and allow for editing
//********************************

//GRABS SELECTED CARD'S INFO AND INPUTS IT IN INPUT FIELD FOR USER TO EDIT
function originalText(personCard){
	var quoteText = $(personCard).find("p").html();
	$("#userInput").focus();
	$("#userInput").val(quoteText);
}
//REPLACES TEXT IN DIV WITH INPUT VALUES LETTER BY LETTER
function editText(personCard) {
	$("#userInput").keyup(function(){
		var newText = $("#userInput").val();
		$(".border").find("p").html(newText);
	});
}

//********************************
//Add a border around the person card
//that is clicked on
//********************************

var allSibs = $(".thumbnail").children();

$(allSibs).click(function(e){
	//RESETS TO NO BORDERS TO PREVENT MULTIPLE SELECTIONS
	$(".thumbnail").removeClass("border"); 

	//ADD CLASS TO CLICKED ITEM CARD
	var targetEl = e.target
	var parentEl = $(targetEl).parentsUntil("div#personList", ".thumbnail").addClass("border");

	//EVENTS FOR EDITING SELECTED CARD
	originalText(parentEl);
	editText(parentEl);
});


//ENTER KEY EVENT - CLEARS INPUT FIELD AND REMOVES FOCUS - meant to "save" the new data in the DOM
$(document).keypress(function(e) {
	if (e.which == 13) {
    	$("#userInput").val("").blur();
	}
});















