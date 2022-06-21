let url = "https://api.covid19api.com/total/country/south-africa"

function run() {
  fetch(url).then((result) => result.json()).then((data) => {
    for (let value of data) {
      console.log("the number of active cases is" + value.Active + " and confirmed cases " + value.Confirmed)
    }
  }).catch((error) => {
    console.log("data not fond")
    console.log(error)
  })
}