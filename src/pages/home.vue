<template>
    <div>
        <div id="aboutme" class="container" style="display: block;">
            <div id="wrapper" class="wrapper" style="padding:0px 40px;">

                <div style="display: inline-block;vertical-align:middle;">
                    <img src="../images/me.jpg" width="280">
                </div>

                <div class="info" style="">
                    <h2 style="color: #5BA689; font-family:'Helvetica','myfont' ">
                        <strong>Liangwei Wang</strong>
                        😃 王梁炜
                    </h2>
                    <p>
                        🌏Remote sensing &amp GIS; 💻Front-End; 📐Design
                    </p>
                    <p>
                        Welcome and thank you for visiting my site! I am a senior student at Sun Yat-sen University
                        majoring in Remote sensing science and technology.
                    </p>
                    <!-- <p>
                        My research interests include Digital Image Processing, WebGIS, Data Visualization, and UX. My
                        current study is mainly about designing algorithms to detect geographical phenomena, while I am
                        more inclined to study a subject that concerns more with humanities and cities in the future.
                    </p>-->
                    <p>
                        My research interests include Digital Image Processing, WebGIS, Data Visualization.
                    </p>
                    <p style="margin-block-start:0em; margin-block-end:0em">
                        <strong>Contact: </strong>
                        wanglw27@mail2.sysu.edu.cn
                    </p>
                </div>


                <!-- <hr style="margin-top: 60px;"> -->
                <!-- <div id="awards" style="display: inline-block;vertical-align:middle">
                    <p>Jun, 2022 - Frist Prize of National Geomatics College Students' innovation and Entrepreneurship
                        Programming Competition🎉</p>
                    <p>Dec, 2020 - Frist Prise of The 6th National Lidar Academic Conference Unmanned Vehicle High
                        Precision Map Competition🎉
                    </p>
                </div> -->
            </div>

        </div>

    </div>
</template>

<script scoped>

</script>

<style scoped>
.container {
    /* position: absolute; */
    width: 1190px;
    height: 95vh;
    margin: 0px auto;
    vertical-align: middle;
}

.wrapper {
    height: 90vh;
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
}

.info {
    display: inline-block;
    vertical-align: middle;
    margin-left: 80px;
    text-align: left;
    line-height: 2;
    color: black;
    max-width: 740px;
}
</style>