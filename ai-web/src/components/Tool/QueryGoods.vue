<template>
    <div class="goods-container">
        <p class="title">为你推荐以下相关的旅行套餐，官方严选</p>
        <div class="goods-list">
            <div class="goods-item">
                <img src="https://q7.itc.cn/q_70/images03/20240511/ca7461116bbc47078f1a618050c0cb39.png" alt="">

                <p class="goods-title text-show">商品标题</p>
                <p class="goods-price">￥123.00</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.goods-container {
    background-color: #ffffff;
    border-radius: 4px;
    padding: 7px;

    .title {
        color: darkorchid;
        font-weight: bold;
    }

    .goods-list {
        overflow-x: auto;
        display: flex;
        gap: 7px;
        padding-top: 7px;

        .goods-item {
            width: 130px;
            background: #f3f3f3;
            border-radius: 4px;
            display: flex;
            flex-direction: column;
            flex-shrink: 0;

            img {
                width: 100%;
                height: 140px;
                object-fit: cover;
                border-radius: 4px;
            }

            .goods-title {
                font-size: 15px;
                font-weight: bold;
                line-height: 1.4;
                margin: 6px;
            }

            .goods-price {
                padding: 0 6px 6px 6px;
                color: red;
                font-weight: bold;
                margin-top: auto;
            }
        }
    }
}

.text-show {
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-1ine-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>
