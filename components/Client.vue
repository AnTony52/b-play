<template>
  <section class="client container text-center">
    <h3 class="subtitle"><div>BPLAY</div>
    <div>GAME</div></h3>
    <h2 class="title"><div>OUR CLIENTS</div></h2>
    <div class="client-list">
      <img src="../static/img/Client/9.png" alt="client-item">
      <img src="../static/img/Client/12.png" alt="client-item">
      <img src="../static/img/Client/16.png" alt="client-item">
      <img src="../static/img/Client/bet365.png" alt="client-item">
      <img src="../static/img/Client/betfair.png" alt="client-item">
      <img src="../static/img/Client/betway.png" alt="client-item">
      <img src="../static/img/Client/bwin.png" alt="client-item">
      <img src="../static/img/Client/williamhill.png" alt="client-item">
      <img src="../static/img/Client/1.png" alt="client-item">
      <img src="../static/img/Client/2.png" alt="client-item">
      <img src="../static/img/Client/5.png" alt="client-item">
      <img src="../static/img/Client/6.png" alt="client-item">
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
      this.$gsap.from('.client-list img', {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        delay: 0.5,
        ease: 'Power1.easeInOut',
        scrollTrigger: {
          trigger: '.client .title',
          // markers: true,
          // pin: true,
          // start: "center center", // when the top of the trigger hits the top of the viewport
          end: "+=50", // end after scrolling 500px beyond the start
          
        }
      })
      this.$gsap.from('.client .title div, .client .subtitle div', {
        y: 50,
        stagger: 0.1,
        delay: 0.5,
        ease: 'Power1.easeInOut',
        scrollTrigger: {
          trigger: '.client .title',
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

<style>
.client {
  padding: 200px 0 0;
}
.client h2 {
  margin-bottom: 40px;
}
.client .client-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}
.client .client-list img {
  width: calc(20% - 20px);
}
</style>
