<template>
<header>
<h2>해결 건수 별 회원현황</h2>
    <h3>5건이하 => {{resUnder5Data.count}}건</h3>
    <h3>5건초과 10건이하 => {{res5to10Data.count}}건</h3>
    <h3>10건초과 15건이하 => {{res10to15Data.count}}건</h3>
    <h3>5건초과 10건이하 => {{res15to20Data.count}}건</h3>
    <h3>10건초과 => {{resUp20Data.count}}건</h3>
</header>
</template>


<script>
import axios from 'axios'
export default {
    data: function() {
        return {
            resUnder5Data: 0,
            res5to10Data: 0,
            res10to15Data: 0,
            res15to20Data: 0,
            resUp20Data: 0
        }
    },
    created() {
        this.getResultData();
    },
    methods: {
        getResultData : function() {
            axios.get("http://localhost:5000/result")
            .then((res) => {
            // console.log(res.data);
            this.resUnder5Data = res.data[0];
            this.res5to10Data = res.data[1];
            this.res10to15Data = res.data[2];
            this.res15to20Data = res.data[3];
            this.resUp20Data = res.data[4];
        })
        }
    }
}
</script>


<style>
</style>