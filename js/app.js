///////////////////////////////////////////////////
// Get data from Google Sheets
///////////////////////////////////////////////////

$.ajax("https://spreadsheets.google.com/feeds/list/1gG9ADNvPO4dN1fL4r-pTxV-QYtfJ_8SZyhzLTCyNzq8/1/public/full?alt=json")

// .then for when the data arrives
.then((data) => {
    console.log(data)

    // Map over the data to generate a simplier data
    const projects = data.feed.entry.map((item) => {
        return {
            project: item.gsx$project.$t,
            liveurl: item.gsx$liveurl.$t,
            giturl: item.gsx$giturl.$t,
            image: item.gsx$image.$t,
            description: item.gsx$description.$t,
        }
    })

    console.log(projects)


    /////////////////////////////////////////////////
    // jquery to render your project
    /////////////////////////////////////////////////

    // loop over each object in the projects array and create a project card for each object
    projects.forEach(obj => {
        // create a parent tag to house the tags that have the components that make up the card
        const $card = $("<div class='card'>");

        // create a tag for the project name
        const $project = $("<h3 class='project'>").text(obj.project);

        // create a tag that links to the project live url
        const $liveurl = $(`<a href=${obj.liveurl} class='btn btn-secondary liveurl' target='_blank' rel='noopener noreferrer'>`).text("App");

        // create a tag that links to the github project repository
        const $giturl = $(`<a href=${obj.giturl} class='btn btn-secondary giturl' target='_blank' rel='noopener noreferrer'>`).text("Github");

        // create an image tag of the project nested within an a tag that links to the project live url
        const $image = $(`<a class='img-link' href=${obj.liveurl} target='_blank' rel='noopener noreferrer'> <img src=${obj.image} class='image' alt='image of ${obj.project} project'/> </a>`);

        // create a tage with the description of the project
        const $description = $("<p class='description'>").text(obj.description)

        // create a parent tag to house the tags with the links
        const $links = $("<div class='links'>");

        // apend the tags to their parent's
        $links.append($liveurl, $giturl,)
        $card.append($project, $image, $description, $links)
        $("#project-cards").append($card)
    });

    /////////////////////////////////////////////////
    // 
    /////////////////////////////////////////////////
})

// .catch in case of an error
.catch((error) => {
    console.error(error)
})


// Quick way to add animate__animated class to all the titles
$(".title").addClass("animate__animated")


////////////////////////////////////////////
// Click body to make drop down menu co
////////////////////////////////////////////

const $button = $("button.navbar-toggler");
const $divNavCollapse = $("div.collapse");
console.log($divNavCollapse.hasClass("show"))

$("main").on("click", (event) => {
    if ($divNavCollapse.hasClass("show")) {
        $divNavCollapse.removeClass("show")
        $button.addClass("collapsed")
        $button.removeAttr("aria-expanded")
        $button.attr("aria-expanded", "false")
    }
})


////////////////////////////////////////////
// Contact submit - Eventlistener
////////////////////////////////////////////

const url = "https://2ik6a1yzjl.execute-api.us-east-2.amazonaws.com/dev/messages"

const handleSubmit = (newMessaage) => {
    fetch(url, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
            body: JSON.stringify(newMessaage)
    })
    .then(() => getSongs())
}

const $form = $("form");
const $name = $("input[name='name']");
const $email = $("input[name='email']");
const $message = $("textarea.message");
const $thanks = $("<div id='thanks'>").css({
    "text-align": "center",
    "font-weight": "bold",
    "color": "white",
    "padding": "10px"
});

$form.on("submit", (event) => {
    event.preventDefault();  // prevent default refresh
    $thanks.empty();  // empty the tag of previous contact info

    const message = {
        "name": $name.val(),
        "email": $email.val(),
        "message": $message.val()
    }

    // only print text on the page when there is both a name and email input.
    if ($name.val() !==  "" && $email.val() !== "" && $message.val() !== "") {
        $thanks.text(`Thanks ${$name.val()} for reaching out.  
        I'll email you back at ${$email.val()} as soon as possible!`);
        $("#contact").append($thanks);
        handleSubmit(message)
        // $thanks
    }
    // reset the input value
    $name.val("");
    $email.val("");
    $message.val("");
})