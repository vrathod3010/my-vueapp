<template>
    <article>
        <header>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner" role="listbox">
                    <!-- Slide One - Set the background image for this slide in the line below -->
                    <div
                        class="carousel-item active"
                        style="background-image: url('https://source.unsplash.com/RCAhiGJsUUE/1920x1080')"
                    >
                        <div class="carousel-caption d-none d-md-block">
                            <h3 class="display-4">First Slide</h3>
                            <p class="lead">This is a description for the first slide.</p>
                        </div>
                    </div>
                    <!-- Slide Two - Set the background image for this slide in the line below -->
                    <div
                        class="carousel-item"
                        style="background-image: url('https://source.unsplash.com/wfh8dDlNFOk/1920x1080')"
                    >
                        <div class="carousel-caption d-none d-md-block">
                            <h3 class="display-4">Second Slide</h3>
                            <p class="lead">This is a description for the second slide.</p>
                        </div>
                    </div>
                    <!-- Slide Three - Set the background image for this slide in the line below -->
                    <div
                        class="carousel-item"
                        style="background-image: url('https://source.unsplash.com/O7fzqFEfLlo/1920x1080')"
                    >
                        <div class="carousel-caption d-none d-md-block">
                            <h3 class="display-4">Third Slide</h3>
                            <p class="lead">This is a description for the third slide.</p>
                        </div>
                    </div>
                </div>
                <a
                    class="carousel-control-prev"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="prev"
                >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a
                    class="carousel-control-next"
                    href="#carouselExampleIndicators"
                    role="button"
                    data-slide="next"
                >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </header>

        <div class="container">
            <!-- Page Content -->
            <section class="py-5">
                <div class="container">
                    <h1 class="font-weight-light">Half Page Image Slider</h1>
                    <p class="lead">
                        The background images for the slider are set directly in the HTML using inline CSS. The images in this snippet are from
                        <a
                            href="https://unsplash.com"
                        >Unsplash</a>!
                    </p>
                </div>
            </section>
            <hr class="mt-2 mb-5" />
            <section class="py-5">
                <div class="container">
                    <h1 class="font-weight-light">Gallery</h1>
                </div>
            </section>

            <div class="row py-5 text-center text-lg-left">
                <div class="col-lg-3 col-md-4 col-6">
                    <a href="#" class="d-block mb-4 h-100">
                        <img
                            class="img-fluid img-thumbnail"
                            src="https://source.unsplash.com/sesveuG_rNo/400x300"
                            alt
                        />
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <a href="#" class="d-block mb-4 h-100">
                        <img
                            class="img-fluid img-thumbnail"
                            src="https://source.unsplash.com/AvhMzHwiE_0/400x300"
                            alt
                        />
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <a href="#" class="d-block mb-4 h-100">
                        <img
                            class="img-fluid img-thumbnail"
                            src="https://source.unsplash.com/2gYsZUmockw/400x300"
                            alt
                        />
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <a href="#" class="d-block mb-4 h-100">
                        <img
                            class="img-fluid img-thumbnail"
                            src="https://source.unsplash.com/EMSDtjVHdQ8/400x300"
                            alt
                        />
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <a href="#" class="d-block mb-4 h-100">
                        <img
                            class="img-fluid img-thumbnail"
                            src="https://source.unsplash.com/8mUEy0ABdNE/400x300"
                            alt
                        />
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <a href="#" class="d-block mb-4 h-100">
                        <img
                            class="img-fluid img-thumbnail"
                            src="https://source.unsplash.com/G9Rfc1qccH4/400x300"
                            alt
                        />
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <a href="#" class="d-block mb-4 h-100">
                        <img
                            class="img-fluid img-thumbnail"
                            src="https://source.unsplash.com/aJeH0KcFkuc/400x300"
                            alt
                        />
                    </a>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <a href="#" class="d-block mb-4 h-100">
                        <img
                            class="img-fluid img-thumbnail"
                            src="https://source.unsplash.com/p2TQ-3Bh3Oo/400x300"
                            alt
                        />
                    </a>
                </div>
            </div>

            <h1 class="my-4">
                Page Heading
                <small>Secondary Text</small>
            </h1>

            <div class="row">
                <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div class="card h-100">
                        <a href="#">
                            <img class="card-img-top" src="http://placehold.it/700x400" alt />
                        </a>
                        <div class="card-body">
                            <h4 class="card-title">
                                <a href="#">Project One</a>
                            </h4>
                            <p
                                class="card-text"
                            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur eum quasi sapiente nesciunt? Voluptatibus sit, repellat sequi itaque deserunt, dolores in, nesciunt, illum tempora ex quae? Nihil, dolorem!</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div class="card h-100">
                        <a href="#">
                            <img class="card-img-top" src="http://placehold.it/700x400" alt />
                        </a>
                        <div class="card-body">
                            <h4 class="card-title">
                                <a href="#">Project Two</a>
                            </h4>
                            <p
                                class="card-text"
                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div class="card h-100">
                        <a href="#">
                            <img class="card-img-top" src="http://placehold.it/700x400" alt />
                        </a>
                        <div class="card-body">
                            <h4 class="card-title">
                                <a href="#">Project Three</a>
                            </h4>
                            <p
                                class="card-text"
                            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quisquam, error quod sed cumque, odio distinctio velit nostrum temporibus necessitatibus et facere atque iure perspiciatis mollitia recusandae vero vel quam!</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                    <div class="card h-100">
                        <a href="#">
                            <img class="card-img-top" src="http://placehold.it/700x400" alt />
                        </a>
                        <div class="card-body">
                            <h4 class="card-title">
                                <a href="#">Project Four</a>
                            </h4>
                            <p
                                class="card-text"
                            >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- /.row -->

       
    </article>
</template>

<script>
// @ is an alias to /src

export default {
    name: "home"
};
</script>


<style>
.carousel-item {
    height: 65vh;
    min-height: 350px;
    background: no-repeat center center scroll;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
</style>