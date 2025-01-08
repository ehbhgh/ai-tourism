<template>
    <div class="input-area">
        <!-- <van-uploader class="upload-image" v-model="fileList" :max-count="1" preview-size="60" disabled /> -->
        <div class="btn-area">
            <van-button type="default" size="small">查询火车票</van-button>
            <van-button type="default" size="small">查询天气</van-button>
            <van-uploader>
                <van-button size="small" type="default">图片问答</van-button>
            </van-uploader>
            <van-button type="default" size="small">一键投诉</van-button>
        </div>
        <div class="input-box-area">
            <img src="@/assets/qingchu.png" alt="">
            <van-field class="input-content" v-model="message" type="textarea" maxlength="100" show-word-limit
                placeholder="请输入查询内容" :border="false" />
            <van-button class="send-btn" type="default" size="small">发送</van-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
let message: string = ""
const fileList = ref([{ url: "" }]);
</script>

<style scoped lang="scss">
.input-area {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;

    .btn-area {
        display: flex;
        align-items: center;

        .van-button {
            margin: 0 0 15px 15px;
        }

    }

    .input-box-area {
        background-color: #ffffff;
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        padding-top: 5px;

        img {
            width: 27px;
            height: 27px;
            margin: 0 10px;
        }

        .input-content {
            background-color: #f8f9fd;
            flex: 1;
            border-radius: 10px;
            padding: 6px;
        }

        .send-btn {
            border: none;
            font-size: 15px;
            color: #3a71e8;
            font-weight: bold;
            margin: 0 5px;
        }
    }
}

::v-deep(.van-uploader__wrapper--disabled) {
    opacity: inherit;

    .van-uploader__preview {
        background-color: #ffffff;
    }
}
</style>
