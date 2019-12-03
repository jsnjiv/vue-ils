var page1App = new Vue({
    el: '#page1App',
    vuetify: new Vuetify(),
    data: {
        dialog: false,
        dates: ['2019-12-01', '2019-12-20'],
        menu2: false,
        files: []
    },
    methods: {
        openModal() {
            this.dialog = true;
        },
        openPicker() {
            this.$refs.programaticOpen.showCalendar();
        },
        init() {
            // axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => console.log(res));
        },
        uploadFile() {
            let formData = new FormData();
            for (let i = 0; i < this.files.length; i++) {
                let file = this.files[i];
                formData.append('files', file);
            };
            let self = this;
            axios.post('http://127.0.0.1:3000/api/file/upload',
                    formData, {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                ).then(function(data) {
                    console.log('SUCCESS!!  ' + JSON.stringify(data));
                    self.files = [];
                })
                .catch(function(error) {
                    console.log('Error!!  ' + JSON.stringify(error.response));
                });
        }
    },
    components: {
        vuejsDatepicker
    },
    computed: {
        dateRangeText() {
            return this.dates.join(' - ')
        }
    },
    mounted() {
        this.init()
    }
});