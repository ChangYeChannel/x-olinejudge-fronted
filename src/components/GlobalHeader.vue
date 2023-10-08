<template>
  <!--栅格组件-->
  <a-row id="globalHeader" style="margin-bottom: 16px" align="center">
    <!--菜单栏-->
    <a-col flex="auto">
      <a-menu
        mode="horizontal"
        :selected-keys="selectKeys"
        @menu-item-click="doMenuClick"
      >
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div class="title-bar">
            <img class="logo" src="../assets/oj-logo.svg" />
            <div class="title">X-OlineJudge</div>
          </div>
        </a-menu-item>
        <a-menu-item v-for="item in routes" :key="item.path"
          >{{ item.name }}
        </a-menu-item>
      </a-menu>
    </a-col>

    <!--用户信息栏-->
    <a-col flex="100px">
      <div>{{ store.state.user?.loginUser?.userName ?? "未登录" }}</div>
    </a-col>
  </a-row>
</template>

<script setup lang="ts">
import { routes } from "../router/routes";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import { useStore } from "vuex";

// 路由组件
const router = useRouter();
// 全局变量
const store = useStore();

// todo 测试(需删除)
setTimeout(() => {
  store.dispatch("user/getLoginUser", {
    userName: "Asyncore",
    role: "user",
  });
}, 3000);

// 默认主页
const selectKeys = ref(["/"]);
// 路由跳转更新后，将跳转后的状态同步更新到菜单栏，以便实现菜单栏高亮
router.afterEach((to, from, failure) => {
  selectKeys.value = [to.path];
});
// 菜单跳转
const doMenuClick = (key: string) => {
  router.push({
    path: key,
  });
};
</script>

<style scoped>
.title-bar {
  display: flex;
  align-content: center;
}

.title {
  color: #444;
  margin-left: 16px;
}

.logo {
  height: 48px;
}
</style>
