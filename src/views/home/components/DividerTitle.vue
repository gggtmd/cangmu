<script setup>
const props = defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="title">
    <hr class="hr">
    <div class="title-text">{{props.text}}</div>
  </div>
</template>

<style scoped lang="scss">
.title {
  margin: 40px auto 40px;
  text-align: center;
  position: relative;

  .hr {
    height: 1px;
    border: none;
    border-top: 1px dotted #d0d0d0;
  }

  .title-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0 45px;
    background-color: #fff;
    font-size: 30px;
    color: #333;
  }
}
</style>
