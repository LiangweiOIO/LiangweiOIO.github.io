<template>
    <div>
        <div id="aboutme" class="container" style="display: block;">
            <div id="wrapper" class="wrapper" style="padding:0px 40px;">

                <div>
                    <img class="myimg" src="../images/me.jpg">
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
                        majoring in Remote sensing science and technology. I am now a research assistant in <span
                            class="under"><a href="https://hkust-cival.com/">CIVIL lab</a></span>.
                    </p>
                    <p>
                        Currently, I'm an incoming <span class="under">Data Science and Analytics</span> PhD student (23
                        Fall) in the Hong Kong University of Science and Technology (Guangzhou). I am supervised by Prof.
                        Tsung Fugee and co-supervised by Prof. Zeng Wei. In the future, I will explore and conduct research
                        in the field of "industry + visualization."
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
    min-height: 95vh;
    margin: 0 auto;
    vertical-align: middle;
}

.wrapper {
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 20px;
    box-sizing: border-box;
}

.myimg {
    overflow: hidden;
    width: 300px;
    height: auto;
    min-width: 200px;
}

.info {
    text-align: left;
    line-height: 2;
    color: black;
    max-width: 740px;
    width: 100%;
    /* 新添加的代码 */
    box-sizing: border-box;
    /* 新添加的代码 */
    margin-top: 20px;
}

@media screen and (min-width: 768px) {
    .wrapper {
        flex-direction: row;
    }

    .myimg {
        margin-right: 80px;
    }

    .info {
        margin-top: 0;
    }
}

.under {
    text-decoration: underline;
}

a {
    color: #5ba689;
}
</style>
