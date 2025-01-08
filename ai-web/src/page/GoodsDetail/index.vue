<template>
    <div class="goods-detail">
        <van-nav-bar title="商品详情" left-arrow fixed placeholder />
        <div v-for="(item, index) in goodsDetailsData" :key="index">
            <img class="cover-image" :src="item.coverImage" alt="" />
            <div class="price-and-title">
                <p class="goods-price">¥{{ item.price }}/人</p>
                <p class="goods-title">{{ item.contentTitle }}</p>
            </div>
            <div class="goods-details">
                <p class="goods-describe">产品特色</p>
                <img v-for="(item_a, index_a) in item.productImages" :key="index_a" :src="item_a" alt="" />
            </div>
            <div class="submit">
                <van-button type="primary" block>立即报名</van-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// 存储商品详情数据
const goodsDetailsData = ref([
    {
        coverImage: "https://img0.baidu.com/it/u=2815511817,1802185152&fm=253&fmt=auto&app=120&f=JPEG?w=500&h=500",
        price: 120,
        contentTitle: "闲来垂钓",
        productImages: ["https://q2.itc.cn/q_70/images03/20240815/17c65bf71aa346749c26e341d9096a1c.jpeg"]
    },

]);

</script>

<style scoped lang="scss">
.goods-detail {
    padding-bottom: 100px;

    .cover-image {
        width: 100%;
        max-height: 300px;
        object-fit: cover;
    }

    .price-and-title {
        background-color: #ffffff;
        margin: 10px;
        padding: 10px;
        border-radius: 10px;

        .goods-price {
            font-size: 22px;
            color: red;
            padding-bottom: 10px;
        }

        .goods-title {
            font-size: 19px;
        }
    }

    .goods-details {
        background-color: #ffffff;
        margin: 10px;
        border-radius: 10px;
        padding: 10px;

        .goods-describe {
            padding-bottom: 10px;
            font-weight: bold;
        }

        img {
            width: 100%;
        }
    }

    .submit {
        background-color: #ffffff;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 10px 20px 20px 20px;
    }
}
</style>