<!DOCTYPE html>
<html>
<head>
    <title>ND Travel</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .navbar {
            background-color: #333;
            overflow: hidden;
        }
        .navbar a {
            float: left;
            display: block;
            color: #f2f2f2;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
        }
        .navbar a:hover {
            background-color: #ddd;
            color: black;
        }
        .container {
            padding: 20px;
        }
        .hero {
            position: relative;
            text-align: center;
            color: black;
        }
        .hero img {
            width: 100%;
            height: auto;
        }
        .hero-text {
            position: absolute;
            top: 80%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: white;
        }
        .button {
            background-color: #333;
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            border-radius: 12px;
        }
        .button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="navbar">
        <a href="#home">Trang chủ</a>
        <a href="#about">Giới thiệu</a>
        <a href="#tours">Tour du lịch</a>
        <a href="#news">Tin tức</a>
        <a href="#faqs">FAQs</a>
        <a href="#contact">Liên hệ</a>
    </div>
    <div class="container">
        <div class="hero">
            <img src="./img/Du_lich_2.jpg" alt="ND Travel">
            <div class="hero-text">
                <h1>Du lịch cùng ND TRAVEL</h1>
                <p>Vinh hạnh của chúng tôi là mang đến cho bạn những chuyến đi đáng nhớ.</p>
                <a href="#tours" class="button">Khám phá các Tour</a>
            </div>
        </div>
    </div>
    <script src="https://cdn.botpress.cloud/webchat/v2.2/inject.js"></script>
    <script src="https://files.bpcontent.cloud/2024/10/27/18/20241027185508-HM843ZTB.js"></script>
</body>
</html>
