


import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);


export default {
    requestTitleData: (context) => {
        if (context.state.titleData.length === 0) {
            Vue.http.get('https://jsonplaceholder.typicode.com/photos').then(response => {
                context.commit("setTitleData", response.data.slice(0, 10));
            },
            error1 => {
                console.log(error1);
            })
        }
    },
    requestImageData: (context) => {
        if (context.state.imageData.length === 0) {
            Vue.http.get('https://jsonplaceholder.typicode.com/photos').then(response => {
                context.commit("setImageData", response.data.slice(0, 10));
            },
            error2 => {
                console.log(error2);
            })
        }
    }
}