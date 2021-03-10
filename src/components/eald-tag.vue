<template>
  <div>
    <div class="flex flex-row mx-2 my-2">
      <div class="rounded-md px-3 py-3" :class="c" role="button" @click="proxy">
        <span class="text-white font-bold">
          <slot></slot>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    c:{
      default: "bg-indigo-500"
    },
    t:{

    }
  },
  methods:{
    proxy(){
      if(this.t){
        this.t()
      }
    }
  }
};
</script>

<style>
</style>