$("#addTodo").click(function () {
    const inputTodo = $("input").val();
    const listItem = $("<li><input type='checkbox'>" + inputTodo + "</li>");

    listItem.css({
        "opacity": "0",
        "transform": "translateY(20px)",
    });

    $("#todoList").append(listItem);
    listItem.animate({
        opacity: 1,
        translateY: 0
    }, 500); 
    
    $("input").val("");
});

  
$(document).on("change", "input[type=checkbox]", function () {
    if ($(this).is(":checked")) {
      $(this).parent().css("text-decoration", "line-through");
      $(this).parent().css("color", "#ccc");
    } else {
      $(this).parent().css("text-decoration", "none");
      $(this).parent().css("color", "#000");
    }
});

$(document).on("change", "input[type=checkbox]", function() {
    if($(this).is(":checked")) {
        $(this).parent().css("text-decoration", "line-through");
        $(this).parent().css("color", "#ccc");
    } else {
        $(this).parent().css("text-decoration", "none");
        $(this).parent().css("color", "#000");
    }
});

