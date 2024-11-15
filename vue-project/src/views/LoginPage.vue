<template>
  <main>
    <div class="login-container">
      <h2>로그인</h2>
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="input-group">
          <label for="email">이메일</label>
          <input
            autocomplete="off"
            type="text"
            id="email"
            v-model="email"
            placeholder="이메일을 입력하세요"
          />
        </div>
        <div class="input-group">
          <label for="password">비밀번호</label>
          <input
            type="text"
            id="password"
            v-model="password"
            placeholder="비밀번호를 입력하세요"
          />
        </div>
        <div class="errMsg">
          {{ errMsg }}
        </div>
        <button type="submit" class="login-button">로그인</button>
      </form>
    </div>
  </main>
</template>

<script>
export default {
  name: 'LoginPage',
  layout: null,
  data() {
    return {
      email: '',
      password: '',
      errMsg: ''
    };
  },
  methods: {
    handleLogin() {
      if(this.email == '') { this.errMsg = '이메일을 입력해주세요'; return; }
      if(this.password == '') { this.errMsg = '비밀번호를 입력해주세요.'; return; }
    },
  },
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.login-form .input-group {
  margin-bottom: 15px;
}

.login-form label {
  display: block;
  font-weight: bold;
}

.login-form input {
  width: 100%;
  padding: 10px;
  font-size: 14px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.login-button {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}

.login-button:hover {
  background-color: #45a049;
}

.errMsg {
  text-align: center;
  color: red;
}

</style>