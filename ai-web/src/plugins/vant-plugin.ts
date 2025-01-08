import { Button, Calendar, Icon, Image as VanImage, Uploader, Field, CellGroup, Picker, Popup, NavBar } from 'vant';  // 按需引入 Vant 组件
import { App } from 'vue';

const components = [Button, Calendar, Icon, VanImage, Uploader, Field, CellGroup, Picker, Popup, NavBar];  // 组件列表

export default {
  install(app: App) {
    // 遍历组件列表并注册
    components.forEach(component => {
      app.component(component.name!, component);
    });
  }
};
