var breedImage = $("#breed-image");
var dropdown = $("#dog-breeds");
var allowSubmit = true;
var breed;

$.get("https://dog.ceo/api/breeds/list/all", function (data) {
    let dogBreeds = data.message;
    for (let breed in dogBreeds) {
        dropdown.append('<option value="' + breed + '">' + breed + '</option>');
    }
});


$("form button").click( function(e){

	 e.preventDefault();
breed= dropdown.val();

 myfun(breed);
});


function myfun(breed){
	 let url = "https://dog.ceo/api/breed/" + breed + "/images/random";

    $("#breed-image img").remove();

    $.get(url,function(data){

    let imageUrl=data.message;

    $('<img>',{
    	src:imageUrl,
    	height:'100%',
    	width:'100%'
    }).appendTo('#breed-image');



    });
}

$("#next a").click(function (e) {
    e.preventDefault();
    if (breed !== undefined) {
        myfun(breed);
    }
});