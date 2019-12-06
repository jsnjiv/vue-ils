var page3App = new Vue({
    el: "#page4container",
    data: {
        loading: false,
        name: '',
        age: '',
        accept: '',
        time: '10:17',
        timeWithSeconds: '10:17:03',
        date: '2019/12/10'
    },
    methods: {
        trigger() {
            const bar = this.$refs.bar;
            bar.start();
            this.timer = setTimeout(() => {
                if (this.$refs.bar) {
                    this.$refs.bar.stop()
                }
            }, 10000)
        },
        simulateProgress() {
            this.loading = !this.loading;
        },
        onSubmit() {
            if (this.accept !== true) {
                this.$q.notify({
                    color: 'red-5',
                    textColor: 'white',
                    icon: 'warning',
                    message: 'You need to accept the license and terms first'
                })
            } else {
                this.$q.notify({
                    color: 'green-4',
                    textColor: 'white',
                    icon: 'cloud_done',
                    message: 'Submitted'
                })
            }
        },

        onReset() {
            this.name = null
            this.age = null
            this.accept = false
            this.loading = false
        }
    },
    mounted() {
        // this.init();
    }
});