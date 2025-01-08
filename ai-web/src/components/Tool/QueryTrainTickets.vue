<template>
  <div class="result-item">
    <div >
      <p class="query-time">9:00</p>
      <p class="station-name">昆明南</p>
    </div>
    <div class="train-run-number">
      <p>2小时30分</p>
      <p>D7689</p>
    </div>
    <div>
      <p class="query-time">10:00</p>
      <p class="station-name">丽江</p>
    </div>
    <div>
      <p class="product-price">￥123</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.result-item {
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 7px 0;
  margin-top: 4px;
  border-top: 1px solid #f6f8fa;
  .query-time {
    font-weight: bold;
    font-size: 17px;
  }
  .station-name {
    font-weight: bold;
    font-size: 14px;
  }
  .train-run-number {
    p {
      font-size: 13px;
      color: #666697;
    }
  }
  .product-price {
    font-size: 17px;
    font-weight: bold;
    color: #006ff6;
  }
}
</style>
