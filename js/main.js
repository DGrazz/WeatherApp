const { createApp } = Vue

// import { getTiempo } from "./communicationManager.js";

createApp({
    data() {
        return {
            cityName: "",
            location: {},
            current: {},
        }
    },
    methods: {

        searchCity() {
            
            if (this.cityName) {
                this.fetchCity(this.cityName);
            }else{
                console.log("No hay ciudades para buscar");
            }
        },

        async fetchCity() {
            try {
                const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${this.cityName}`;
                const options = {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': 'a8765e05femsha073d3056235332p1971b0jsnf31f19a1e1e4',
                        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                    }
                }
                const response = await fetch(url, options);
                const result = await response.json();
                this.location = result.location;
                this.current = result.current;
            } catch (error) {
                console.error(error);
            }
        },

    },
    created() {
        // getTiempo().then(data => {
        //     this.location = data.location;
        //     this.current = data.current;
        //     console.log(this.location);
        //     console.log(this.current);
        // });
    }




}).mount('#app')