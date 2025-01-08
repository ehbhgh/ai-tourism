<template>
   <div class="content">
      <!-- 顶部区域 -->
      <ChatHeader/>
      <DefaultQuestion/>
      <ChatMessage/>
   </div>
</template>
<script setup lang="ts">
import ChatHeader from '@/components/ChatHeader.vue';
import DefaultQuestion from '@/components/DefaultQuestion.vue';
import ChatMessage from '@/components/ChatMessage.vue';
</script>



<style scoped lang="scss">
.content {
   padding: 0 15px 190px 15px;
}
</style>