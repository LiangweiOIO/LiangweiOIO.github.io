<template>

  <div class="menu">
    <span class="menu-circle"></span>
    <a href="#" class="menu-link">
      <span class="menu-icon">
        <span class="menu-line menu-line-1"></span>
        <span class="menu-line menu-line-2"></span>
        <span class="menu-line menu-line-3"></span>
      </span>
    </a>
  </div>

  <div class="menu-overlay">

    <router-link class="router-change" to="/">Home</router-link>
    <router-link class="router-change" to="/project">Project</router-link>
    <router-link class="router-change" to="/design">Design</router-link>

  </div>

</template>

<script scoped>
import $ from 'jquery'

export default {
  name: 'mymenu',
  mounted() {
    this.unfold();
    this.fold();
    this.animation();
  },
  methods: {

    unfold() {
      $(".menu-link").click(function (e) { // $(".menu-link") 标签选择器
        e.preventDefault();
        $(".menu").toggleClass("open");
        $(".menu-overlay").toggleClass("open");
      });
    },
    fold() { //如果已存在则删除之
      $(".router-change").click(function (e) {
        e.preventDefault();
        $(".menu").toggleClass("open");
        $(".menu-overlay").toggleClass("open");
      });


    }

  },
  watch() {


  }
}

</script>

<style scoped>
.menu {
  position: absolute;
  top: 20px;
  left: 20px;
  height: 46px;
  width: 46px;
}

.menu-circle {
  background-color: #FF685D;
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 50%;
  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 1000;
}

.menu:hover .menu-circle {
  transform: scale(1.5);
}

.menu-link {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1002;
}

.menu-icon {
  position: absolute;
  width: 20px;
  height: 14px;
  margin: auto;
  left: 0;
  top: 0;
  right: 0;
  bottom: 1px;
}

.menu-line {
  background-color: #333;
  height: 2px;
  width: 100%;
  border-radius: 2px;
  position: absolute;
  left: 0;
  transition: all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.menu-line-1 {
  top: 0;
}

.menu-line-2 {
  top: 0;
  bottom: 0;
  margin: auto;
}

.menu-line-3 {
  bottom: 0;
}


.menu-overlay {
  background-color: #FF685D;
  color: #333;
  height: 100%;
  width: 100%;
  position: fixed;
  opacity: 0;
  visibility: hidden;
  text-align: center;
  transition: opacity 0.2s ease-in-out;
  z-index: 1001;
}

.menu.open .menu-line-1 {
  transform: translateY(7px) translateY(-50%) rotate(-135deg);
}

.menu.open .menu-line-2 {
  opacity: 0;
}

.menu.open .menu-line-3 {
  transform: translateY(-7px) translateY(50%) rotate(135deg);
}

.menu.open .menu-circle {
  transform: scale(60);
}

.menu-overlay.open {
  opacity: 1;
  visibility: visible;
  transition-delay: 0.03s;
}


.menu-overlay a {
  color: #333;
  font-weight: 600;
  font-size: 32px;
  padding: 2%;
  margin: 25% 1% 0;
  display: inline-block;
}

.router-change {
  color: #333;
  font-weight: 600;
  font-size: 32px;
  padding: 2%;
  margin: 25% 1% 0;
  display: inline-block;
}
</style>

