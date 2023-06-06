<template>
  <t-form
    ref="form"
    :class="['item-container', `register-${'email'}`]"
    :data="formData"
    :rules="FORM_RULES"
    label-width="0"
    @submit="onSubmit"
  >
    <t-form-item name="email">
      <t-input v-model="formData.email" type="text" size="large" placeholder="请输入您的邮箱">
        <template #prefix-icon>
          <t-icon name="mail" />
        </template>
      </t-input>
    </t-form-item>
    <t-form-item name="saleacc">
      <t-input v-model="formData.saleacc" type="text" size="large" placeholder="请输入卖家账号">
        <template #prefix-icon>
          <t-icon name="user" />
        </template>
      </t-input>
    </t-form-item>
    <t-form-item name="password">
      <t-input
        v-model="formData.password"
        size="large"
        :type="showPsw ? 'text' : 'password'"
        clearable
        placeholder="请输入登录密码"
      >
        <template #prefix-icon>
          <t-icon name="lock-on" />
        </template>
        <template #suffix-icon>
          <t-icon :name="showPsw ? 'browse' : 'browse-off'" @click="showPsw = !showPsw" />
        </template>
      </t-input>
    </t-form-item>
    <t-form-item name="confirmPassword">
      <t-input
        v-model="formData.confirmPassword"
        size="large"
        :type="showCofPsw ? 'text' : 'password'"
        clearable
        placeholder="请输入确认密码"
      >
        <template #prefix-icon>
          <t-icon name="lock-on" />
        </template>
        <template #suffix-icon>
          <t-icon :name="showCofPsw ? 'browse' : 'browse-off'" @click="showCofPsw = !showCofPsw" />
        </template>
      </t-input>
    </t-form-item>
    <t-form-item>
      <t-button block size="large" type="submit"> 注册 </t-button>
    </t-form-item>
  </t-form>
</template>

<script setup lang="ts">
import { FormRule, MessagePlugin } from 'tdesign-vue-next';
import { ref } from 'vue';

const INITIAL_DATA = {
  email: '',
  password: '',
  confirmPassword: '',
  register_type: 'overseas',
  saleacc: '',
};

const validatePassword = () => {
  if (!formData.value.confirmPassword) {
    return {
      result: false,
      message: '确认密码必填',
    };
  }
  if (formData.value.confirmPassword !== formData.value.password) {
    return {
      result: false,
      message: '两次密码不一样',
    };
  }
  return {
    result: true,
    message: '',
    // result: true
    // message: string;
    // type?: 'error' | 'warning' | 'success';
  };
};
const FORM_RULES: Record<string, FormRule[]> = {
  email: [
    { required: true, message: '邮箱必填', type: 'error' },
    { email: true, message: '请输入正确的邮箱', type: 'warning' },
  ],
  password: [{ required: true, message: '密码必填', type: 'error' }],
  confirmPassword: [{ validator: validatePassword }],
  saleacc: [{ required: true, message: '绑定卖家账号', type: 'error' }],
};

const form = ref();
const formData = ref({ ...INITIAL_DATA });

const showPsw = ref(false);
const showCofPsw = ref(false);
const emit = defineEmits(['registerSuccess']);

const onSubmit = ({ validateResult }) => {
  if (validateResult === true) {
    MessagePlugin.success('注册成功');
    emit('registerSuccess');
  }
};
</script>

<style lang="less" scoped>
@import url('../index.less');
</style>
