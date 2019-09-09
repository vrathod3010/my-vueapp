<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div class="card mt-5">
                    <article class="card-body">
                        <router-link
                            class="float-right btn btn-outline-primary"
                            to="/register"
                        >Sign up</router-link>
                        <h4 class="card-title mb-4 mt-1">Sign in</h4>
                        <form>
                            <div class="form-group">
                                <label>Your email</label>
                                <input name class="form-control" placeholder="Email" type="email" />
                            </div>
                            <!-- form-group// -->
                            <div class="form-group">
                                <a class="float-right" href="#">Forgot?</a>
                                <label>Your password</label>
                                <input class="form-control" placeholder="******" type="password" />
                            </div>
                            <!-- form-group// -->
                            <div class="form-group">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" /> Save password
                                    </label>
                                </div>
                                <!-- checkbox .// -->
                            </div>
                            <!-- form-group// -->
                            <div class="form-group">
                                <button type="submit" class="btn btn-primary btn-block">Sign in</button>
                            </div>
                            <!-- form-group// -->
                        </form>
                    </article>
                </div>
                <!-- card.// -->
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>