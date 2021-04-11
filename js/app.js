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







    /////////////////////////////////////////////////
    // 
    /////////////////////////////////////////////////
})

// .catch in case of an error
.catch((error) => {
    console.error(error)
})