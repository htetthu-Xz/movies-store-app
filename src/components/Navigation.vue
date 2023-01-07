<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-d">
        <RouterLink to="/">
            <div class="navbar-brand">
                <img src="../../public/xicon.png" alt=""  />
            </div>
        </RouterLink>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" style="max-height: 100px;">
                <!-- 
                    <a class="" href="#">Home </a>
                -->
                <RouterLink to="/">
                    <li class="nav-item active">
                        <div class="nav-link">
                            Home    
                            <span class="sr-only">(current)</span>
                        </div>
                    </li> 
                </RouterLink>
                <RouterLink to="/popular">
                    <li class="nav-item">
                        <div class="nav-link">
                            Popular    
                        </div>
                    </li> 
                </RouterLink>
                <RouterLink to="/drama-series">
                    <li class="nav-item">
                        <div class="nav-link">
                            Drama Series    
                        </div>
                    </li> 
                </RouterLink>
                <li class="nav-item dropdown">
                        <div class="nav-link dropdown-toggle" role="button" data-toggle="dropdown" aria-expanded="false">
                            Tv Series
                        </div>
                    <ul class="dropdown-menu">
                        <RouterLink to="/k_drama">
                            <li>
                                <div class="dropdown-item">
                                    K Drama
                                </div>
                            </li>
                        </RouterLink>
                        <RouterLink to="/comedy">
                            <li>
                                <div class="dropdown-item">
                                    Comedy
                                </div>
                            </li>
                        </RouterLink>
                        <RouterLink to="/on_tv">
                            <li>
                                <div class="dropdown-item">
                                    On Tv
                                </div>
                            </li>
                        </RouterLink>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>

</template>
<style scoped>

    .d-flex input {
        background-color: rgb(15 23 42);
        border-radius: 10px;
        outline: none;
        color: #fff;
        outline-offset: none;
    }
    .bg-d {
        background-color: #04413f;
    }
    .navbar-brand img {
        width: 45px;
        height: 40px;
        margin-right: 30px;
        margin-left: 20px;
    }
    .collapse li {
        margin-right: 20px;
    }

    nav{
        color: #fff;
    }
    .dropdown ul {
        max-width: 138px;
    }
</style>