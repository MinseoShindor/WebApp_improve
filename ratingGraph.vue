<template>
<header>
    <h2>평점 별 회원 현황</h2>
    <div class ="rating" style="flex">
        <div class="rating5">
        <h3>5점 {{res5Data}}건</h3>
        </div>

        <div class="rating4">
        <h3>4점 {{res4Data}}건 </h3>
        </div>

        <div class="rating3">
        <h3>3점 {{res3Data}}건</h3>
        </div>

        <div class="rating2">
        <h3>2점 {{res2Data}}건 </h3>
        </div>

        <div class="rating1">
        <h3>1점 {{res1Data}}건 </h3>
        </div>

    </div>
</header>
</template>


<script>
import axios from 'axios'
export default {
    data: function() {
        return { //1점부터 5점까지 각 데이터 별 결과값
            res1Data: 0,
            res2Data: 0,
            res3Data: 0,
            res4Data: 0,
            res5Data: 0
        }
    },
    created() {
        this.getRateData();
    },
    methods: {
        getRateData: function() {
            axios.get("http://localhost:5000/rating")
            .then((res) => {
            this.res1Data = res.data[4];
            this.res2Data = res.data[3];
            this.res3Data = res.data[2];
            this.res4Data = res.data[1];
            this.res5Data = res.data[0];
            })
        }
    }
}
</script>


<style>
</style>