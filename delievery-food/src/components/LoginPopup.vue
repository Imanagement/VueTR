<script setup>
import { useModalStore } from '@/stores/modal'
const modalStore = useModalStore()

</script>
<template>
  <div class="modal-auth" v-if="modalStore.showLoginModalWindow">
    <div class="modal-dialog modal-dialog-auth">
      <button class="close-auth" @click="modalStore.changeLoginVisibility()">&times;</button>
      <form id="logInForm">
        <fieldset class="modal-body">
          <legend class="modal-title">Авторизация</legend>
          <label class="label-auth">
            <span>Логин</span>
            <input id="login" type="text">
          </label>
          <label class="label-auth">
            <span>Пароль</span>
            <input id="password" type="password">
          </label>
        </fieldset>
        <!-- /.modal-body -->
        <div class="modal-footer">
          <div class="footer-buttons">
            <button class="button button-primary button-login" type="submit">Войти</button>
          </div>
        </div>
      </form>
      <!-- /.modal-footer -->
    </div>
		<!-- /.modal-dialog -->
	</div>
</template>