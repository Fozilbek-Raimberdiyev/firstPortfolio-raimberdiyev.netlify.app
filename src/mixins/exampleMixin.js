export const exampleMixin = {
    data() {
        return {
            // channels: [],
        }
    },
    methods : {
        // async getChannels() {
        //     try{
        //         let res = await fetch("https://api.mediabay.uz/v2/channels/channels");
        //         let resJson = await res.json();
        //         this.channels = resJson;
        //     }
        //     catch(e) {
        //         console.log(e)
        //     }
        // }
        sayHi() {
            console.log("Assalomu alaykum")
        }
    },
    mounted() {
        this.sayHi()
    }
}