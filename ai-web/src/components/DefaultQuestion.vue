<template>
    <div class="default-question">
        <div class="kefu-area">
            <img src="@/assets/kefu.png" alt="">
            <p>云游宝</p>
        </div>
        <div class="kefu-content">
            <span class="tips">你可以这样问我</span>
            <div class="customer-service-list">
                <img src="@/assets/wenti.png" alt="">
                <p>你好</p>
            </div>
        </div>
        <div class="kefu-footer">
            <img src="@/assets/huanyihuan.png" alt="">
            <p>换一换</p>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.default-question {
    .kefu-area {
        display: flex;
        align-items: center;

        img {
            object-fit: cover;
            width: 35px;
            height: 35px;
            margin-right: 8px;
        }

        p {
            font-size: 14px;
        }
    }

    .kefu-content {
        background-color: #fff;
        margin: 10px 0;
        padding: 10px;
        border-radius: 0 10px 10px 10px;

        .tips {
            font-size: 16px;

        }

        .customer-service-list {
            display: flex;
            align-items: center;
            background-color: #f2f4ff;
            border-radius: 40px;
            margin-top: 10px;
            padding: 5px 7px;

            img {
                width: 25px;
                height: 25px;
                object-fit: cover;
            }

            p {
                font-size: 14px;
                padding-left: 14px;
            }
        }

    }

    .kefu-footer {
        display: inline-flex;
        align-items: center;
        background-color: #a8abb0;
        border-radius: 40px;
        padding: 4px 7px;

        img {
            width: 20px;
            height: 20px;

        }

        p {
            font-size: 14px;
            padding-left: 7px;
            color: #ffffff;
        }
    }
}
</style>
