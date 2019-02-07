<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2"><slot/></div>
      </div>
    </div>
    <Footer />
  </div>
</template>