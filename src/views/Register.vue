<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div class="card card-signin my-5">
                    <div class="card-body">
                        <h5 class="card-title text-center">Sign In</h5>
                        <form class="form-signin">
                            <div class="form-label-group">
                                <input
                                    type="text"
                                    id="inputFirstName"
                                    class="form-control"
                                    placeholder="First Name"
                                    required
                                    autofocus
                                />
                                <label for="inputEmail">First name</label>
                            </div>
                            <div class="form-label-group">
                                <input
                                    type="email"
                                    id="inputEmail"
                                    class="form-control"
                                    placeholder="Email address"
                                    required
                                />
                                <label for="inputEmail">Email address</label>
                            </div>

                            <div class="form-label-group">
                                <input
                                    type="password"
                                    id="inputConfirmPassword"
                                    class="form-control"
                                    placeholder="Confirm Password"
                                    required
                                />
                                <label for="inputPassword">Confirm Password</label>
                            </div>
                            <div class="form-label-group">
                                <input
                                    type="password"
                                    id="inputPassword"
                                    class="form-control"
                                    placeholder="Password"
                                    required
                                />
                                <label for="inputPassword">Password</label>
                            </div>

                            <button
                                class="btn btn-lg btn-primary btn-block text-uppercase"
                                type="submit"
                            >Sign Up</button>
                        </form>
                    </div>
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