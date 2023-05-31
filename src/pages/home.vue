<template>
    <div>
        <div id="aboutme" class="container" style="display: block;">
            <div id="wrapper" class="wrapper" style="padding:0px 40px;">

                <div class="myimg">
                    <img src="../images/me.jpg" width="300">
                </div>

                <div class="info">
                    <h2 style="color: #5BA689; font-family:'Helvetica','myfont' ">
                        <strong>Liangwei Wang</strong>
                        😃 王梁炜
                    </h2>
                    <p>
                        🌏Remote sensing &amp GIS; 💻Front-End; 📐Design
                    </p>
                    <p>
                        Welcome and thank you for visiting my site! I am a senior student at Sun Yat-sen University
                        majoring in Remote sensing science and technology. I am now a research assistant in <span class="under"><a href="https://hkust-cival.com/">CIVIL lab</a></span>. 
                    </p>
                    <p>
                        Currently, I'm an incoming <span class="under">Data Science and Analytics</span> PhD student (23 Fall) in the Hong Kong University of Science and Technology (Guangzhou). I am supervised by Prof. Tsung Fugee and co-supervised by Prof. Zeng Wei. In the future, I will explore and conduct research in the field of "industry + visualization."
                    </p>
                    <p>
                        <!-- My research interests include Digital Image Processing, WebGIS, Data Visualization. -->
                    </p>
                    <p style="margin-block-start:0em; margin-block-end:0em">
                        <strong>Contact: </strong>
                        liangweioio27@gmail.com
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

.myimg {
    display: inline-block;
    vertical-align:middle;
    /* border-radius: 5%; */
    width: 280px;
    /* height: 280px; */
    overflow: hidden;
}

.under{
    text-decoration: underline;
}

a{
    color: #5ba689;
}
</style>