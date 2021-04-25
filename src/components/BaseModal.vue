<template>
  <div>
    <div
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <slot></slot>
    </div>
    <div class="opacity-25 fixed inset-0 z-40 bg-black" />
  </div>
</template>
