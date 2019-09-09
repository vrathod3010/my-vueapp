<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div class="card mt-5">
                    <article class="card-body">
                        <router-link class="float-right btn btn-outline-primary" to="/login">Sign in</router-link>
                        <h4 class="card-title mb-4 mt-1">Sign up</h4>
                        <form>
                            <div class="form-group">
                                <label>Your first name</label>
                                <input
                                    name="fistname"
                                    class="form-control"
                                    placeholder="First name"
                                    type="text"
                                />
                            </div>
                            <div class="form-group">
                                <label>Your last name</label>
                                <input
                                    name="lastname"
                                    class="form-control"
                                    placeholder="Last name"
                                    type="text"
                                />
                            </div>
                            <div class="form-group">
                                <label>Your email</label>
                                <input
                                    name="email"
                                    class="form-control"
                                    placeholder="Email"
                                    type="email"
                                />
                            </div>
                            <!-- form-group// -->
                            <div class="form-group">
                                <label>Your password</label>
                                <input
                                    class="form-control"
                                    placeholder="******"
                                    name="password"
                                    type="password"
                                />
                            </div>
                            <!-- form-group// -->
                            <div class="form-group">
                                <label>Confirm password</label>
                                <input
                                    class="form-control"
                                    placeholder="******"
                                    name="confirmPassword"
                                    type="password"
                                />
                            </div>
                            <!-- form-group// -->

                            <div class="form-group">
                                <button type="submit" class="btn btn-primary btn-block">Sign up</button>
                            </div>
                            <!-- form-group// -->
                        </form>
                    </article>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>