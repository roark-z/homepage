$(document).ready(function(){
    let titleText = $('#pageName').text().trim()
    if(titleText == "home")
        $("#title").hide().fadeIn(2000)

    highlightButton();

    $('#pageName').hide()
  });

function highlightButton() {
    let titleText = $('#pageName').text().trim()

    // Highlight the button

    $("#"+titleText).css("color", "#e0d0f0");
    
    // Enable hovering for all other buttons
    
    let a = ["home", "about", "projects", "contact"]

    a.forEach(function(item, index) {
        console.log(item)
        // highlight purple on hover
        if(titleText !== item) {
            console.log("appen")
            $('#'+item).hover(function() {
                $(this).animate({color: "#e0d0f0"}, 200, 'linear');
            }, function() {
                $(this).animate({color: '#ffffff'}, 200, 'linear');
            });
        }

        // highlight pink on mousedown
        $('#'+item).mousedown(function() {
            $(this).animate({color: "#ffaacc"}, 200, 'linear');
        });
    });

    a.forEach(function(item, index) {
        if(item == 'home') {
            $('#'+item).click(function() {
                window.location = "index.html"})
        } else {
            $('#'+item).click(function() {
                window.location = item + ".html"})
        }
    });
}