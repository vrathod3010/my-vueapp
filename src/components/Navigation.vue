/* eslint-disable */
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">SafeZone</router-link>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">About</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >Login</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <router-link class="nav-link" to="/login">Login</router-link>

                        <div class="dropdown-divider"></div>
                        <router-link class="nav-link" to="/register">Register</router-link>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >More</a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <router-link class="nav-link" to="/browse">Browse</router-link>

                        <div class="dropdown-divider"></div>
                        <router-link class="nav-link" to="/checkout">Checkout</router-link>
                        <div class="dropdown-divider"></div>
                        <router-link class="nav-link" to="/products">Products</router-link>
                        <div class="dropdown-divider"></div>
                        <router-link class="nav-link" to="/product/1">Product</router-link>
                    </div>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                />
                <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>