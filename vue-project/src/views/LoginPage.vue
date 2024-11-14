<template>
  <div class="login-container">
    <h2>로그인</h2>
    <form @submit.prevent="handleLogin" class="login-form">
      <div class="input-group">
        <label for="email">이메일</label>
        <input
          autocomplete="off"
          type="email"
          id="email"
          v-model="email"
          placeholder="이메일을 입력하세요"
          required
        />
      </div>
      <div class="input-group">
        <label for="password">비밀번호</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="비밀번호를 입력하세요"
          required
        />
      </div>
      <button type="submit" class="login-button">로그인</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      // 로그인 로직 (예: API 요청 등)
      console.log('이메일:', this.email);
      console.log('비밀번호:', this.password);
      
      // 로그인 성공 후 추가 로직 (예: 페이지 이동)
      // 예: this.$router.push('/home');
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
}

.login-button:hover {
  background-color: #45a049;
}
</style>