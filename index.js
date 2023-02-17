var api_key='cbd63b098d901258b96c96847a805e06';
async function wheatherApi(final) {
    var res_data = fetch('https://restcountries.com/v3.1/all')
    // console.log(res_data)
    var api_prom = await res_data
    // console.log(api_prom)
    var api_response = api_prom.json()
    var final_api = await api_response
    // console.log(final_api)

    for (let i of final_api) {
        var first_parent = document.querySelector('.fparent')
        first_parent.classList.add('.parent_style')
        var deg=i.latlng;
        var lat=deg[0] ;
        var lng=deg[1];
        // console.log(lat)
        // console.log(lng)

        //container_creation
        parent_div = document.createElement('div')
        parent_div.classList.add("container")
        parent_div.style.display = 'inline-block'
        parent_div.setAttribute('lat',lat)
        parent_div.setAttribute('lng',lng)

        //    console.log(i.continents)

        //country_name
        var country_name = document.createElement('p')
        country_name.classList.add('bg')
        country_name.innerText = i.continents
        parent_div.append(country_name)
        //    console.log(country_name)

        // country_flag
        var country_flag = document.createElement('img')
        country_flag.classList.add('flag_style')
        country_flag.setAttribute('src', i.flags.png)
        parent_div.append(country_flag)

        // latlon
        var lat_lon = document.createElement('p')
        lat_lon.innerText = i.latlng
        parent_div.append(lat_lon)

        //country_code
        var capital = document.createElement('p')
        capital.innerText = i.capital
        parent_div.append(capital)

        // weather_code
        var para =document.createElement('p')
        para.innerText= final;
        parent_div.append(para)

        // button
        var button_weather = document.createElement('button')
        button_weather.setAttribute('onclick','api2(this)')
        button_weather.innerText='weather'
        parent_div.append(button_weather)
      
        // final append
        first_parent.append(parent_div)
    }
}
wheatherApi()

async function api2(e){
   console.log(e)
   console.log(e.parentElement)
   var gett =e.parentElement
   var lat=gett.getAttribute('lat')
   var lng=gett.getAttribute('lng')
   var weather_api=fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api_key}`)
   var out1= await weather_api
   var res= out1.json()
   var result= await res
   console.log(result.weather[0].description)
   function final(){
    return result.weather[0].description
   }
   final()
  

}
api2(final)



