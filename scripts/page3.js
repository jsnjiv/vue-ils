var intervalId = '';
var page3App = new Vue({
    el: "#page3App",
    vuetify: new Vuetify(),
    data: {
        counter: 0
    },
    methods: {
        init() {
            let self = this;
            intervalId = setInterval(function() {
                self.counter++;
                console.log("Time:::" + self.counter);
            }, 1000)
        }
    },
    mounted() {
        this.init();
    },
    beforeDestroy() {
        // alert('Main Vue destroyed');
        this.counter++;
        // alert(this.counter)
    },
    destroyed() {
        // alert("Distroyed");
        this.counter++;
        // alert(this.counter)
    }
});

setTimeout(function() {
    page3App.$destroy(true);
    page3App = null;
    clearInterval(intervalId);
}, 5000);

// var mainID = document.getElementById("page3-container");
// for (let i = 0; i < 100; i++) {
//     let tag = document.createElement('v-app');
//     let id = `page${i+1}App`;
//     tag.setAttribute("id", id);
//     mainID.appendChild(tag);


//     id = new Vue({
//         el: `#${id}`,
//         vuetify: new Vuetify(),
//         data: {}
//     });

//     setTimeout(function() {
//         id.$destroy();
//         id.$el.remove();
//         id = null;
//         console.log("Clearing App:::" + i + "  " + (i * 1000) / 2);
//     }, (i * 1000) / 2);
// }