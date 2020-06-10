<style>
  .awm-hero {
    /* background-image: url(/herobg.png); */
    height: 400px;
    background-position: calc(100% + 100px) -180px;
    background-repeat: no-repeat;
  }
  .awm-hero-message {
    width: 440px;
    top: 80px;
    position: relative;
  }

  h1 {
    font-size: 40px;
    line-height: 1;
    margin: 0;
    font-family: "HelveticaNeue-CondensedBold";
    text-transform: uppercase;
  }

  h3 {
    text-transform: uppercase;
    font-size: 28px;
    font-family: "HelveticaNeue-CondensedBold";
    color: var(--primary-color);
    margin: 0;
    padding: 0;
    line-height: 1;
  }

  @media only screen and (max-width: 768px) {
    .awm-hero {
      background-image: none;
      height: auto;
      margin-bottom: 50px;
    }
    .awm-hero-message {
      margin: 0 auto;
      width: 100%;
      top: 20px;
    }
  }
</style>

<section id="Hero" class="awm-hero">
  <div class="awm-hero-message">
    <h1>Adam Webster</h1>
    <h3>Designer and Front-end Developer</h3>
    <p>
      I specialize in designing and coding responsive, accessible websites using
      technologies such as
      <strong>Wordpress, React</strong>
      and
      <strong>Svelte</strong>.
    </p>
    <p>  I also design logos, business card and other marketing materials.</p>
  </div>
</section>
