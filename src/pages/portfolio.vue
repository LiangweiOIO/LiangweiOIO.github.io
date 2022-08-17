<template>
    <div>
        <div id="project" class="container" style="display: block;">
            <div id="wrapper" style="padding:40px;">
                <p>I like to do some graphic design. Here are the design projects I am mainly responsible for. </p>
                <!-- 项目 -->
                <h2 style="font-family:'Helvetica','myfont';margin-top:30px;">
                    🌱<strong>University Anniversary Series</strong>
                </h2>


                <div class="content" style="width: 1130px;">
                    <div class="image" style="">
                        <img src="../images/map.jpg" width="100%">
                        <!-- <iframe src="../images/map.pdf" height="100%" width="100%"></iframe> -->
                        <!-- <object data="../images/map.pdf" height="100%" width="100%"></object> -->
                        <!-- <embed src="../images/map.pdf" type="application/pdf" width="1000"> -->
                    </div>
                    <div class="image" style="">
                        <img src="../images/photo.png" height="600px" style="padding:3px">
                        <img src="../images/cover.jpg" height="600px" style="padding:3px">
                    </div>

                </div>

                <h2 style="font-family:'Pattaya','myfont';margin-top:30px;">
                    🌱<strong>Stamping through Mathematics</strong>
                </h2>

                <!-- 其他项目 -->
                <div class="content" style="width: 1130px;">
                    <div class="image" style="">
                        <img src="../images/stamp.jpg" width="100%">
                    </div>
                </div>

                <h2 style="font-family:'Pattaya','myfont';margin-top:30px;">
                    🌱<strong>Winter Solstice Festival</strong>
                </h2>

                <!-- 其他项目 -->
                <div class="content" style="width: 1130px;">
                    <div class="image" style="">
                        <img src="../images/dongzhi.jpg" width="100%">
                    </div>
                </div>

                <h2 style="font-family:'Pattaya','myfont';margin-top:30px;">
                    🌱<strong>UI design for Polar Studies Program</strong>
                </h2>

                <!-- 其他项目 -->
                <div class="content" style="width: 1130px;">
                    <div class="image" style="">
                        <img src="../images/website.jpg" width="100%">
                    </div>
                </div>

                <h2 style="font-family:'Pattaya','myfont';margin-top:30px;">
                    🌱<strong>Campus Cultural Creation</strong>
                </h2>

                <!-- 其他项目 -->
                <div class="content" style="width: 1130px;">
                    <div class="image" style="">
                        <img src="../images/badge.png" width="100%">
                    </div>
                </div>
            </div>
            <el-backtop :right="100" :bottom="100" />
        </div>

    </div>
</template>

<script scoped>

</script>

<style scoped>
.container {
    width: 1190px;
    margin: 0px auto;
}

.content {
    overflow: hidden;
    /* background: #FFF8F4; */
    padding: 30px;
    text-align: center;
}
</style>