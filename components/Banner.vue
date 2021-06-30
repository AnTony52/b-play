<template>
  <section class="banner">
    <h1 class=""><div> <span>CASINO</span> </div>
    <div><span>PLAYGAME</span></div> </h1>
    <img class="banner-img" src="~/static/img/Banner/banner.png" alt="">
  </section>
</template>

<script>
export default {
  mounted() {
    this.$gsap.from("h1 span", { yPercent: 100, duration: 1, delay: 1, stagger: 0.1, ease: 'Power1.easeInOut', })
  }
}
</script>

<style>
.banner {
  position: relative;
}
.banner-img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.banner h1 {
  position: absolute;
  top: 50vh;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  
  font-size: 72px;
  font-weight: bold;
  text-align: center;
  max-width: 450px;
}
.banner h1 * {
  font-size: 72px;
  font-weight: bold;
  overflow: hidden;
}
.banner h1 span {
  display: block;
}
@media screen and (max-width: 767px) {
  .banner h1 {
    top: 50%;
  }
}
</style>
