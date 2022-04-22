<template>
  <div class="row">
    <div class="col-md-6 offset-md-3">
      <div class="container">
        <div class="heading">
          <h3>{{ $t('signIn') }}</h3>
          <hr />
        </div>
        <form>
          <div class="form-group">
            <label>{{ $t('userName') }}</label>
            <input type="text" class="form-control" v-model="username" />
          </div>

          <div class="form-group">
            <label>{{ $t('password') }}</label>
            <input type="password" class="form-control" v-model="password" />
          </div>

        <div>
         <input class="form-check-input mt-0" type="checkbox" id="check" required value=""/>
         <span>{{ $t('rememberMe') }}</span>
        </div>

          <div class="my-3">
            <button @click="loginUser" type="submit" class="btn btn-primary">{{ $t('signIn') }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>