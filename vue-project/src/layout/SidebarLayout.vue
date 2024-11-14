<template>
  <aside class="sidebar">
    <nav>
      <ul>
        <li><router-link to="/" class="v-link">홈</router-link></li>
        <li><router-link to="/login" class="v-link">로그인</router-link></li>
        <li><router-link to="/about" class="v-link">소개</router-link></li>
        <li><router-link to="/contact" class="v-link">연락처</router-link></li>
      </ul>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'SidebarLayout',
};
</script>

<style scoped>
.sidebar {
  background-color: #2c3e50; /* 어두운 배경색 */
  color: #ecf0f1; /* 텍스트 색상 흰색 */
  padding: 20px;
  width: 200px; /* 사이드바 넓이 설정 */
  height: 100%;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1); /* 약간의 그림자 효과 */
}

.sidebar nav {
  display: flex;
  flex-direction: column;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar li {
  margin: 15px 0; /* 항목 간의 간격을 더 넓게 설정 */
}

.sidebar a {
  color: #ecf0f1; /* 기본 텍스트 색상 */
  text-decoration: none; /* 링크 밑줄 제거 */
  font-size: 17px; /* 텍스트 크기 */
  font-weight: bold; /* 텍스트 굵게 */
  transition: background-color 0.3s ease; /* 배경색 변경 시 부드러운 효과 */
  padding: 10px;
  border-radius: 5px; /* 모서리 둥글게 */
}

.sidebar a:hover {
  background-color: #34495e; /* 호버 시 배경색 변경 */
}

.sidebar a:active {
  background-color: #1abc9c; /* 클릭 시 활성화 배경색 */
}
</style>