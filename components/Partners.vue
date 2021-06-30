<template>
  <section class="partners container">
    <div class="row">
      <div class="col-lg-6 left-side">
        <!-- <img src="" alt="layer" class="layer"> -->
        <img src="../static/img/Partners/image.png" alt="image" class="image">
      </div>
      <div class="col-lg-6 right-side">
        <div class="content-wrapper">
          <h3 class="subtitle">
            <div class="">BPLAY</div>
            <div class="">GAME</div>
          </h3>
          <h2 class="title"> <div class="">PARTNERS</div> </h2>
          <p class="text">As a BPlay client you will benefit from content from more than 20 top tier providers. Based on your casino’s concept and targeted markets, we will tailor the perfect portfolio of games to offer to your players.</p>
          <div class="partner-list">
            <div class="item">
              <img src="../static/img/Partners/sbtech.png" alt="partner-item">
              <img src="../static/img/Partners/iovation.png" alt="partner-item">
              <img src="../static/img/Partners/seon.png" alt="partner-item">
              <img src="../static/img/Partners/hogaming.png" alt="partner-item">
              <img src="../static/img/Partners/vivo.png" alt="partner-item">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.animateOnScroll()
  },
  methods: {
    animateOnScroll() {
      this.$gsap.from('.partners .text, .partners img', {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        delay: 0.5,
        ease: 'Power1.easeInOut',
        scrollTrigger: {
          trigger: '.partners .title',
          // markers: true,
          // pin: true,
          // start: "center center", // when the top of the trigger hits the top of the viewport
          end: "+=50", // end after scrolling 500px beyond the start
          
        }
      })
      this.$gsap.from('.partners .title div, .partners .subtitle div', {
        y: 50,
        stagger: 0.1,
        delay: 0.5,
        ease: 'Power1.easeInOut',
        scrollTrigger: {
          trigger: '.partners .title',
          // markers: true,
          // pin: true,
          // start: "center center", // when the top of the trigger hits the top of the viewport
          end: "+=50", // end after scrolling 500px beyond the start
          
        }
      })
    }
  }
}
</script>

<style scoped>
.partners.container {
  position: relative;
  padding-top: 40px;
}
.partners .col-lg-6 {
}
.partners .left-side {
  min-height: 700px;
}
.partners .left-side img {
  position: absolute;
  top: 0;
  right: 10px;
  width: 50vw;
}
.partners .right-side .content-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
.partners .right-side .item {display: flex;flex-wrap: wrap;justify-content: center;gap: 20px;} 
.partners .right-side .item img {
  width: 30%;
}
@media screen and (max-width: 767px) {
  .partners .left-side {min-height: 500px;}
  .partners .left-side img {
    position: absolute; width: 100%;margin-left: -15px;top: 50%;transform: translateY(-50%);
    }
  .partners .row {flex-direction: column-reverse;}
}
</style>
 