<template>
  <div class="gradient m-0 h-full bg-[#e493d0]"></div>
</template>

<!--
There is no need to use tailwindcss here
-->
<style scoped>
.gradient {
  animation: 10s movement linear infinite;
  background-image: radial-gradient(
      closest-side,
      rgba(67, 145, 247, 1),
      rgba(67, 145, 247, 0)
    ),
    radial-gradient(closest-side, rgba(30, 83, 217, 1), rgba(30, 83, 217, 0)),
    radial-gradient(closest-side, rgba(51, 170, 224, 1), rgba(51, 170, 224, 0)),
    radial-gradient(closest-side, rgba(41, 128, 185, 1), rgba(41, 128, 185, 0)),
    radial-gradient(closest-side, rgba(41, 128, 185, 1), rgba(41, 128, 185, 0));
  background-repeat: no-repeat;
  background-position: -80vmax -80vmax, 60vmax -30vmax, 10vmax 10vmax,
    -30vmax -10vmax, 50vmax 50vmax;
  background-size: 130vmax 130vmax, 80vmax 80vmax, 90vmax 90vmax,
    110vmax 110vmax, 90vmax 90vmax;
}

.gradient::after {
  position: fixed;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  content: "";
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

@keyframes movement {
  0%,
  100% {
    background-size: 130vmax 130vmax, 80vmax 80vmax, 90vmax 90vmax,
      110vmax 110vmax, 90vmax 90vmax;
    background-position: -80vmax -80vmax, 60vmax -30vmax, 10vmax 10vmax,
      -30vmax -10vmax, 50vmax 50vmax;
  }
  25% {
    background-size: 100vmax 100vmax, 90vmax 90vmax, 100vmax 100vmax,
      90vmax 90vmax, 60vmax 60vmax;
    background-position: -60vmax -90vmax, 50vmax -40vmax, 0 -20vmax,
      -40vmax -20vmax, 40vmax 60vmax;
  }
  50% {
    background-size: 80vmax 80vmax, 110vmax 110vmax, 80vmax 80vmax,
      60vmax 60vmax, 80vmax 80vmax;
    background-position: -50vmax -70vmax, 40vmax -30vmax, 10vmax 0,
      20vmax 10vmax, 30vmax 70vmax;
  }
  75% {
    background-size: 90vmax 90vmax, 90vmax 90vmax, 100vmax 100vmax,
      90vmax 90vmax, 70vmax 70vmax;
    background-position: -50vmax -40vmax, 50vmax -30vmax, 20vmax 0,
      -10vmax 10vmax, 40vmax 60vmax;
  }
}
</style>
