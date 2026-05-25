@extends('index')

@section('title', 'bookgram')

@section('content')
    <div class="container">
        <div class="login">
            <div class="images d-none d-lg-block">
                <div class="frame">
                    <img src="/Assets/images/home-phones.png" alt="picutre frame">
                </div>
                <div class="sliders">
                    <div id="carouselExampleSlidesOnly" class="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="/Assets/images/screenshot1.png" class="d-block" alt="screenshot1">
                            </div>
                            <div class="carousel-item">
                                <img src="/Assets/images/screenshot2.png" class="d-block" alt="screenshot2">
                            </div>
                            <div class="carousel-item">
                                <img src="/Assets/images/screenshot3.png" class="d-block" alt="screenshot3">
                            </div>
                            <div class="carousel-item">
                                <img src="/Assets/images/screenshot4.png" class="d-block" alt="screenshot4">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content">
                <div class="log-on border_insc">
                    <div class="logo">
                        <img src="/Assets/images/logo.png" alt="Instagram logo">
                    </div>
                    <form>
                        <div>
                            <input type="email" name="email" id="emai" placeholder="e-mail">
                        </div>
                        <div>
                            <input type="password" name="password" id="password" placeholder="password">
                        </div>
                    </form>
                    <a href="/home">
                        <button class="log_btn">
                            Log in
                        </button>
                    </a>
                    <div class="other-ways">
                        <div class="seperator">
                            <span class="ligne"></span>
                            <span class="ou">OR</span>
                            <span class="ligne"></span>
                        </div>
                        <div class="facebook-connection">
                            <a href="#">
                                <img src="/Assets/images/facebook.png" alt="facebook icon">
                                Log in with Facebook
                            </a>
                        </div>
                        <div class="forget-password">
                            <a href="#">
                                Forgot password?
                            </a>
                        </div>
                    </div>
                </div>
                <div class="sing-up border_insc">
                    <p>
                        Don\'t have an account?
                        <a href="/signup">Sign up</a>
                    </p>
                </div>
                <div class="download">
                    <p>Get the app.</p>
                    <div>
                        <img src="/Assets/images/google_play_icon.png" alt="download app from google play">
                        <img src="/Assets/images/microsoft-icon.png" alt="download app from microsoft">
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
