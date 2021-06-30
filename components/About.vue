<template>
  <section class="about">
    <div class="top-section">
      <div class="content-wrapper container">
        <h3 class="subtitle"> <div>BPLAY</div>
        <div>GAME</div></h3>
        <h2 class="title"><div>WHO WE ARE?</div></h2>
        <p class="text">BPlay was founded in 2015 by a group of highly skilled professionals with over 15 years of experience in the iGaming industry. Today we are an international company with more than 100 employees and have operations in Malta, Ukraine, Romania, Norway, India, Myanmar and Taiwan...</p>
      </div>
      <div class="img-wrapper container">
        <img src="../static/img/About/maps.png" alt="maps">
      </div>
    </div>
    <div class="bottom-section">
      <div class="img-wrapper">
      </div>
      <div class="label-item container">
        <div class="item">
          <h3 class="red">15</h3>
          <h3>YEARS</h3>
          <p>of experience in the <span class="red">iGaming</span></p>
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
      this.$gsap.from('.about .text', {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        delay: 0.5,
        ease: 'Power1.easeInOut',
        scrollTrigger: {
          trigger: '.about .title',
          // markers: true,
          // pin: true,
          // start: "center center", // when the top of the trigger hits the top of the viewport
          end: "+=50", // end after scrolling 500px beyond the start
          
        }
      })
      this.$gsap.from('.about .title div, .about .subtitle div', {
        y: 50,
        stagger: 0.1,
        delay: 0.5,
        ease: 'Power1.easeInOut',
        scrollTrigger: {
          trigger: '.about .title',
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
.about .content-wrapper {
  text-align: center;
  max-width: 820px;
  margin: 0 auto;
}
.about .top-section .img-wrapper img {
  width: 100%;
  height: auto;
}
.about .bottom-section {
  position: relative;
  top: 0;
  background-image: url("../static/img/About/banner.png");
  background-attachment: fixed;
  height: 400px;
}
.about .bottom-section .img-wrapper img {
  width: 100%;
}
.about .bottom-section .label-item .item {
  position: absolute;
  top: 0;
  padding: 20px;
  text-align: center;
  background-color: rgba(21, 22, 30, 0.9);
}
.about .bottom-section .label-item *{margin: 0 auto;}
.about .bottom-section .label-item h3:first-child {font-size: 120px;font-weight: bold;}
.about .bottom-section .label-item h3:last-child {font-size: 72px;font-weight: normal;}
.about .bottom-section .label-item p {
  max-width: 150px;
}
</style>
