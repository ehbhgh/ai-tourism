<template>
    <div class="container">
        <div class="chat-message">
            <div class="user-message">
                <p>用户发送文本</p>
            </div>
            <div class="send-message">
                <van-image width="120px" radius="5" fit="cover" height="120px"
                    src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
            </div>
        </div>

        <div class="ai-message">
            <!-- <div class="mark-text">大模型回复</div> -->
            <div class="mark-text">
                <Loading/>
            </div>
            <QueryTrainTickets/>
            <QueryWeather/>
            <QueryGoods/>
            <InputArea/>
        </div>

    </div>


</template>

<script setup lang="ts">
import Loading from './Loading.vue';
import QueryTrainTickets from './Tool/queryTrainTickets.vue';
import QueryWeather from './Tool/QueryWeather.vue';
import QueryGoods from './Tool/QueryGoods.vue';
import InputArea from './InputArea.vue';
</script>

<style scoped lang="scss">
.container {
    .chat-message {
        display: flex;
        flex-direction: column;

        @keyframes fadeUp {
            0% {
                transform: translateY(20px);
                opacity: 0;
            }

            100% {
                transform: translateY(0);
                opacity: 1;
            }
        }

        .user-message {
            margin-top: 15px;
            max-width: 70%;
            align-self: flex-end;
            opacity: 1;
            transform: translateY(20px);
            animation: fadeUp 0.2s ease-in-out forwards;

            p {
                font-size: 16px;
                line-height: 1.5;
                background-color: #3a71e8;
                border-radius: 10px 0 10px 10px;
                color: #fff;
                padding: 5px;
            }
        }

        .send-message {
            display: flex;
            flex-direction: column;

            .van-image {
                align-self: flex-end;
                margin-top: 4px;
            }
        }
    }

    .ai-message {
        margin-top: 15px;
        align-self: flex-start;
        .mark-text{
            font-size: 16px;
            line-height: 1.5;
            background-color: #ffffff;
            border-radius: 0 10px 10px 10px;
            padding: 4px;
            color: #333333;
            display: inline-block;
        }
    }

}
</style>
