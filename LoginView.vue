<template>
  <div id="login_root" class="text-center">
    <main class="form-signin">
        <form>
            <img class="mb-4" src="./assets/logo.png" alt="" width="72" height="57">
            <h1 class="h3 mb-3 fw-normal">LOGIN</h1>

            <div class="form-floating">
            <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">사용자ID</label>
            </div>

            <div class="form-floating">
            <input type="password" class="form-control" id="floatingPassword" placeholder="1234">
            <label for="floatingPassword">비밀번호</label>
            </div>

            <div class="checkbox mb-3">
            <label>
                <input type="checkbox" value="remember-me">기억하기
            </label>
            </div>

            <button class="w-100 btn btn-lg btn-primary" type="submit">로그인</button>
            <p class="mt-5 mb-3 tex-muted">&copy; 2017-2021</p>
        </form>
    </main>
        
    </div>
</template>