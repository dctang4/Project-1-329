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

    projects.forEach(obj => {
        const $card = $("<div class='card'>");
        const $project = $("<h3 class='project'>").text(obj.project);
        const $liveurl = $(`<a href=${obj.liveurl} class='btn btn-secondary liveurl'>`).text("Link");
        const $giturl = $(`<a href=${obj.giturl} class='btn btn-secondary giturl'>`).text("Github");
        const $image = $(`<img src=./pics/${obj.image} class='image'>`);
        const $description = $("<p class='description'>").text(obj.description)

        const $links = $("<div class='links'>");
        $links.append($liveurl, $giturl,)
        $card.append($project, $image, $description, $links)
        $("div#project-cards").append($card)
    });





    /////////////////////////////////////////////////
    // 
    /////////////////////////////////////////////////
})

// .catch in case of an error
.catch((error) => {
    console.error(error)
})