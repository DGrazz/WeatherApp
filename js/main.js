const { createApp } = Vue

createApp({
    data() {
        return {
            cityName: "",
            location: {},
            current: {},
            isDay: true,

            jsonLocation: {},
            jsonCurrent: {},
        }
    },
    methods: {

        async searchCity() {
            if (this.cityName) {
                await this.fetchCity(this.cityName);
                this.updateIsDay();
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
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        },

        updateIsDay() {
            if (this.current.is_day == 1) {
                this.isDay = true;
            }else{
                this.isDay = false;
            }
        },

    },
    created() {
        
    },





}).mount('#app')