<template>
    <div class="footer">
        <div class="footer-item">
            <RouterLink to="/">
                <div class="logo">
                    <img src="../../public/xicon.png" alt="" class="logo-img mt-3">
                    <span>Move Store</span>
                </div>
            </RouterLink>
        <div class="copyright mt-3">
            Copyright &copy; 2023 Movies Store App By Htet Thu.
        </div>
            <div class="left">
                <div class="contact-us mt-4">
                    <button> Contact Us</button>
                </div>
                <div class="get-app mt-4">
                    <span>
                        Get app?
                    </span>
                    <span class="ml-2 play">
                        <i class="ri-google-play-line"></i> 
                    </span>
                    <span class="ml-2 window">
                        <i class="ri-windows-fill"></i> 
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.footer {
    background-color: #213343;
    width: 100%;
    height: auto;
    padding: 10px;
}

.logo-img {
    width: 40px;
    height: 40px;
    margin: 0 auto;
}

.get-app {
    display: flex;
    justify-content: space-around;
    color: #b3aeae;
}

.footer-item {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
}

.logo {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    color: #b3aeae;
    padding: 10px;
    cursor: pointer;
}

.play {
    color: #01875f;
    cursor: pointer;
}

.window {
    color: #357EC7;
    cursor: pointer;
}

.contact-us button {
    background-color: transparent;
    padding: 10px;
    border: 1px solid;
    border-color: rgb(95, 158, 160);
    border-radius: 5px;
    margin-top: 10px;
    color: #b1b1b1;
}

.contact-us button:hover {
    background-color: rgb(1, 31, 37);
    color: rgb(176, 169, 169);
    transition: 0.4s;
}

.left {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.copyright {
    color: #b1b1b1;
    text-align: center;
}

@media (max-width: 374px) {
    .logo-img {
        width: 30px;
        height: 30px;
        margin: 0 auto;
    }
    .logo span {
        font-size: 13px;
    }
    .copyright {
        color: #b1b1b1;
        text-align: left;
        font-size: 13px;
    }
    .contact-us button {
        background-color: transparent;
        padding: 6px;
        border: 1px solid;
        border-color: rgb(95, 158, 160);
        border-radius: 5px;
        margin-top: 10px;
        color: #b1b1b1;
        font-size: 15px;
    }
    .play {
        color: #01875f;
        cursor: pointer;
        font-size: 13px;
    }
    .window {
        color: #357EC7;
        cursor: pointer;
        font-size: 13px;
    }
    .get-app span {
        font-size: 13px;
    }
    .footer-item {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
    }
}
</style>