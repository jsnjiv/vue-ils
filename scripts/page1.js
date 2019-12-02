var page1App = new Vue({
    el: '#page1App',
    vuetify: new Vuetify(),
    data: {
        showContent: false,
        dialog: false,
        dates: ['2019-12-01', '2019-12-20'],
        menu2: false
    },
    methods: {
        openModal() {
            this.dialog = true;
        },
        openPicker() {
            this.$refs.programaticOpen.showCalendar();
        },
        init() {
            this.showContent = true;
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