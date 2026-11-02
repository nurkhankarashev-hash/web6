$(document).ready(function() {
    console.log("jQuery is ready!");

    $("h1").css("color", "#2563eb");
    $("#greeting").text("Welcome to My Portfolio!");
    $(".headline").css("font-weight", "bold");

    $("#lightBtn").click(function() {
        $("body").removeClass("dark");
    });

    $("#darkBtn").click(function() {
        $("body").addClass("dark");
    });

    $("#hideBtn").click(function() {
        $("#status").hide();
    });

    $("#showBtn").click(function() {
        $("#status").show();
    });

    $("#toggleBtn").click(function() {
        $("#status").toggle();
    });

    $("#fadeInBtn").click(function() {
        $("#gallery img").stop(true, true).fadeIn();
    });

    $("#fadeOutBtn").click(function() {
        $("#gallery img").stop(true, true).fadeOut();
    });

    $("#fadeToggleBtn").click(function() {
        $("#gallery img").stop(true, true).fadeToggle();
    });

    $(".panelTitle").click(function() {
        $("#" + $(this).attr("data-panel")).stop(true, true).slideToggle();
    });

    $("#slideUpBtn").click(function() {
        $(".panel").stop(true, true).slideUp();
    });

    $("#slideDownBtn").click(function() {
        $(".panel").stop(true, true).slideDown();
    });

    $("#addBtn").click(function() {
        const skill = $("#newSkill").val().trim();
        if (skill !== "") {
            $("<li>").text(skill).appendTo("#skillList");
            $("#newSkill").val("");
        }
    });

    $("#prependBtn").click(function() {
        const skill = $("#newSkill").val().trim();
        if (skill !== "") {
            $("<li>").text(skill).prependTo("#skillList");
            $("#newSkill").val("");
        }
    });

    $("#removeBtn").click(function() {
        $("#skillList li:last").remove();
    });

    $("#changeLinkBtn").click(function() {
        $("#socialLink").attr("href", "https://jquery.com").text("Visit jQuery");
    });

    $("#nameInput, #emailInput").on("input", function() {
        $("#liveName").text($("#nameInput").val());
        $("#liveEmail").text($("#emailInput").val());
    });

    let animated = false;
    $("#animateBtn").click(function() {
        animated = !animated;
        $(".bar").each(function() {
            const width = animated ? $(this).attr("data-width") : "0%";
            $(this).stop().animate({width: width}, 700);
        });
    });
});
