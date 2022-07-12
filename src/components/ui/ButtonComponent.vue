<template>
  <button class="btn" type="submit">
    <span> <slot></slot> + </span>
  </button>
</template>

<style lang="scss" scoped>
$btnHeight: 30px;
$borderRadius: 10px;
@keyframes buttonAnimation {
  from {
    width: 0px;
    border-radius: 0;
  }
  to {
    width: 100%;
    border-radius: $borderRadius;
  }
}
span {
  z-index: 4;
}
.btn {
  position: relative;
  min-width: 20px;
  width: 50%;
  height: $btnHeight;
  background-color: #42f59b;
  color: white;
  border: none;
  border-radius: $borderRadius;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: "";
    top: 0;
    position: absolute;
    height: $btnHeight;
    background-color: #c242f5;
    opacity: 0.4;
    animation: buttonAnimation 3s infinite;
  }
}
</style>
