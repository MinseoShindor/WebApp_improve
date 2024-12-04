<template>
<header>
    <h2>경력 별 회원 현황</h2>
    <h3>1년이하 => {{resUnder1Data.count}}건</h3>
    <h3>1년초과 3년이하 => {{res1to3Data.count}}건</h3>
    <h3>3년초과 5년이하 => {{res3to5Data.count}}건</h3>
    <h3>5년초과 10년이하 => {{res5to10Data.count}}건</h3>
    <h3>10년초과 => {{resUp10Data.count}}건</h3>
</header>
</template>


<script>
import axios from 'axios'
export default {
    data: function() {
        return { //경력별 데이터 결과
            
            resUnder1Data: '경력별',
            res1to3Data: '',
            res3to5Data: '',
            res5to10Data: '',
            resUp10Data: ''
        }
    },
    created() {
        this.getExData();
    },
    methods: {
        getExData: function() {
            axios.get("http://localhost:5000/")
            .then((res) => {
            // console.log(res.data);
            this.resUnder1Data = res.data[0];
            this.res1to3Data = res.data[1];
            this.res3to5Data = res.data[2];
            this.res5to10Data = res.data[3];
            this.resUp10Data = res.data[4];
        })
        }
    }
}
</script>


<style>
</style>