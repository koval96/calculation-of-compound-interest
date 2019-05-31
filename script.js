new Vue({
    el: "#app",
    data: {
        money: 0,
        result: false,
        deposit: "",
        percent: "",
        time: "",
        rub: 0,
        currency: "RUB",
        rub_transfer_show: false,
        usd_transfer_show: false,
        currency1: ""
    },
    methods: {
        calculation: function(){
            this.currency1 = this.currency;
            this.result = true;
            this.rub = this.deposit
            for(let i = 0;i<this.time;i++){
                this.rub = Number((this.rub * this.percent / 100) + Number(this.rub));
            }
            let res = Math.round(this.rub);
            this.money = res;

            if(this.currency1 == "RUB"){
                this.usd_transfer_show = true;
                this.rub_transfer_show = false;
            }
            else if (this.currency1 == "USD"){
                this.rub_transfer_show = true;
                this.usd_transfer_show = false;
            }
        },
        rub_transfer: function(){
            this.money = this.money * 65,53;
            this.currency1 = "RUB";
            this.rub_transfer_show = false;
            this.usd_transfer_show = true;
        },
        usd_transfer: function(){
            this.money = Math.round(this.money / 65,53);
            this.currency1 = "USD";
            this.usd_transfer_show = false;
            this.rub_transfer_show = true;
        }
    }
});