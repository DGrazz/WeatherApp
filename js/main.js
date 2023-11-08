const { createApp } = Vue

import { getTiempo } from "./communicationManager.js";

createApp({
    data() {
        return {
            location: [],
            current: [],
        }
    },
    methods: {

        
    },
    created() {
        getTiempo().then(data => {
            this.location = data.location;
            this.current = data.current;
            console.log(this.location);
            console.log(this.current);
        });
    }

   


}).mount('#app')