/* global , alert */
"use strict";

var out = document.getElementById('output'),
    btn = document.getElementsByClassName('btn'),
    a858 = "* 858 * card number # __________ (Charge the card)<br/>",
    a8581 = "* 858 * 1 * Mared Card # __________ (Mared Card Minutes)<br/>",
    a8582 = "* 858 * 2 * Mared Card # __________ (Mared Card flex)<br/>",
    a8583 = "* 858 * Mared Card # __________ (Mared Card in general)<br/>",//end charge
    b055 = "* 055 * 0 # __________ (Cancel the call tone)<br/>",
    b142 = "* 14 * 2 * song code # __________ (set a call tone)<br/>",
    b05500 = "* 055 * 00 song code # __________ (subscribe the call tone)<br/>",
    b0551 = "* 055 * 1 # __________ (Start Call tone Shuffle)<br/>",
    b0552 = "* 055 * 2 # __________ (Cancel call tone Shuffle)<br/>",
    b0559 = "* 055 * 9 # __________ (Stop Hearing a call tone without cancel it)<br/>", // end call tone
    c45 = "* 7 # __________ (Black List)<br/>",
    c457 = "* 45 # __________ (white List)<br/>",
    c453 = "* 7 * Phone number # __________ (Add number to Black List)<br/>",
    c454 = "* 7 * 4 * Phone number # __________ (Remove number Black List)<br/>",// end B & W list
    d878 = "* 878 # __________ (Show My Phone Number)<br/>",
    d14 = "* 014 # __________ (Massage has all services)<br/>",
    d60 = "* 60 # __________ (Know your Consumption)<br/>",
    dcmk = "* 707 #  /// * 888 * 3 # __________ (CMK service)<br/>",
    d9001 = "* 9001 # __________ (End of call Notification)<br/>",
    d1010 = "* 1010 # __________ (Know your Balance)<br/>",
    d3 = "* 3 # /// * 868 * 3 #__________ (slfne shokran)<br/>",
    d2002 = "* 2002 # __________ (3la el nota)<br/>",
    d111 = "# Phone Number __________ (adf3le shokran)<br/>",
    d505 = "* 505 * phone Number # __________ (klmne shokran Voda)<br/>",
    d506 = "* 506 * MSISDN # __________ (klmne shokran Xnet)<br/>",
    d868 = "* 868 * 2 * phone Number * LE # __________ (balance Transfer)<br/>", // end services
    e67 = "** 67 * 777 # __________ (Start Call Divert Bussy)<br/>",
    e671 = "## 67 # __________ (cancel Call Divert Bussy)<br/>",
    e62 = "** 62 * 777 # __________ (Start call Divert Not Reachable)<br/>",
    e621 = "## 62 # __________ (Cancel Call Divert Not Reachable)<br/>",
    e61 = "** 61 * 777 # __________ (Start Call Divert No Reply)<br/>",
    e611 = "## 61 # __________ (Cancel Call Divert No Reply)<br/>",
    e21 = "** 21 * 777 # __________ (Start call Divert No condition)<br/>",
    e211 = "## 21 # __________ (cancel call Divert No Condition)<br/>",
    e004 = "** 004 * 777 # __________ (Start Call Divert All Condition)<br/>",
    e0041 = "# 004 # __________ (Cancel Call Divert All Condition)<br/>", // end Divert
    f1 = "* 858 * 1 # __________ ( Over Scratch)<br/>",
    f7 = "* 7 * 7 # __________ (Don't receive sms)<br/>",//end sms & scratch
    g5055 = "* 5055 * 1 # __________ (subscribe international phone service)<br/>",
    g50552 = "* 5055 * 2 # __________ (subscribe international phone service monthly)<br/>",
    g101 = "* 101 # __________ (Postpaid phone calls with charge cards)<br/>",
    g888 = "* 888 * 5 # __________ (Start Roaming)<br/>",
    g236 = "* 236 # __________ (to chack the roaming service)<br/>",
    g202 = "* 202 # __________ (subscribe roaming service daily or weekly)<br/>",
    g102 = "* 102 # __________ (phone Roaming calls with Charge Cards)<br/>",
    g20210 = "* 202 * 10 # __________ (roaming rate KSA)<br/>", // end world & roaming
    h880 = "* 880 # __________ (Subscribe any Rate)<br/>",
    h14 = "* 14 # __________ (ry7 balk 14)<br/>",
    h5 = "* 880 * 5 # __________ (7kawy twl el nhar)<br/>",
    h6 = "* 880 * 6 # __________ (7kawy twl el yom)<br/>",
    h7 = "* 880 * 7 # __________ (flex el yomy)<br/>",
    h11 = "* 880 * 11 # __________ (flex el esbo3y)<br/>",
    h225 = "* 225 # __________ (Renewal)<br/>",
    hf20 = "* 020 # __________ (Flex 20)<br/>",
    hf30 = "* 030 # __________ (Flex 30)<br/>",
    hf50 = "* 050 # __________ (Flex 50)<br/>",
    hf70 = "* 070 # __________ (Flex 70)<br/>",
    hf90 = "* 090 # __________ (Flex 90)<br/>",
    hh8801 = "* 880 * 1 # __________ (1 LE 7rkat el yomy)<br/>",
    hh8802 = "* 880 * 2 # __________ (2 LE 7rkat el yomy)<br/>",
    hh8803 = "* 880 * 3 # __________ (15 LE 7rkat el shahre)<br/>",
    hh8804 = "* 880 * 4 # __________ (25 LE 7rakat el shahre)<br/>",
    h8555 = "* 8555 # __________ (Easy Hakawy)<br/>", // end Rate
    j14 = "* 14 * 1 # __________ ( MI Rya7 Balak)<br/>",
    j9 = "* 880 * 9 # __________ ( Stop MB from Flexes)<br/>",
    j28 = "* 880 * 28 # __________ (Subscribe Cross net Limit)<br/>",
    j29 = "* 880 * 29 # __________ (renewal - change - cancel cross net Limit)<br/>",
    j51 = "* 880 * 51 # __________ (Cancel Free What's App)<br/>",
    j52 = "* 880 * 52 # __________ (Subscribe Free What's App)<br/>",
    j34 = "* 880 * 34 # __________ (Cancel Auto Repurchase)<br/>",
    j23 = "* 880 * 23 # __________ (Subscribe MI Limit)<br/>",
    j24 = "* 880 * 24 # __________ (renewal - change - cancel MI Limit)<br/>",
    j22 = "* 880 * 22 # /// * 999 # __________ (subscribe Super Flex)<br/>",
    j130 = "* 880 * 130 # __________ (without Roll over 30 day)<br/>",
    j03 = "* 880 * 03 # __________ (3 LE Flex Extra)<br/>",
    j05 = "* 880 * 05 # __________ (5 LE Flex Extra)<br/>",
    j10 = "* 880 * 010 # __________ (10 LE Flex Extra)<br/>",
    jtt = "* 880 * MSISDN * flexes # __________ (Flex Transfer)<br/>",
    j5000 = "* 5000 # __________ (Control the max limit International calls from Flexes)<br/>",
    j5 = "# 5 * __________ (Control Flex Coins)<br/>",
    j0 = "* 880 * 0 # __________ (Benefits of New Tariff Harakat)<br/>",
    j2 = "* 888 * 2 # __________ (Free Bee Harakat)<br/>",
    j881 = "* 88 * 1 # __________ (0.5 LE Voice Daily add ons Harakat)<br/>",
    j882 = "* 88 * 2 # __________ (1 LE Voice Daily add ons Harakat)<br/>",
    j885 = "* 88 * 5 # __________ (1 LE MI Daily add ons Harakat)<br/>",
    j884 = "* 88 * 4 # __________ (0.5 LE sms daily add ons Harakat)<br/>",
    j886 = "* 88 * 6 # __________ (3 LE Voice Monthly Harakat)<br/>",
    j887 = "* 88 * 7 # __________ (5 LE Voice Monthly Harakat)<br/>",
    j888 = "* 88 * 8 # __________ (10 LE Voice Monthly Harakat)<br/>",
    j889 = "* 88 * 9 # __________ (3 LE sms Monthly Harakat)<br/>", // end Rate Services
    k20 = "* 20 # __________ (Subscribe IN)<br/>",
    k53 = "* 53 # __________ (1 LE IN Daily)<br/>",
    k56 = "* 56 # __________ (1.5 LE IN Daily)<br/>",
    k94 = "* 94 # __________ (25 LE IN Monthly)<br/>",
    k95 = "* 95 # __________ (40 LE IN Monthly)<br/>",
    k96 = "* 96 # __________ (65 LE IN Monthly)<br/>",
    k97 = "* 97 # __________ (85 LE IN Monthly)<br/>",
    k9 = "* 20 * 9 # __________ (Stop Min & sms for X net)<br/>", //end IN
    m012 = "* 0 * 12 # __________ (Info about Joker)<br/>",
    m0 = "* 0 # __________ (start Joker)<br/>",
    m01 = "* 0 * 1 # __________ (Joker MB)<br/>",
    m02 = "* 0 * 2 # __________ (Joker Minutes)<br/>",
    m03 = "* 0 * 3 # __________ (Joker Social & Music)<br/>",// end Joker
    n8881 = "* 888 * 1 # __________ (the Last Bill)<br/>",
    n8882 = "* 888 * 2 # __________ (the last month Bill)<br/>",
    n881 = "* 881 # /// * 8821 # __________ (pay the Bill by charge card)<br/>",
    n41 = "* 41 # __________ (Info about Family system)<br/>",
    n1001 = "* 1001 # __________ (Red Welcome Voice Add ons)<br/>",
    n30 = "* 2000 * 30 # __________ (30 Red MI Add ons)<br/>",
    n45 = "* 2000 * 45 # __________ (45 Red MI Add ons)<br/>",
    n60 = "* 2000 * 60 # __________ (60 Red MI Add ons)<br/>",
    n75 = "* 2000 * 75 # __________ (75 Red MI Add ons)<br/>",
    n100 = "* 2000 * 100 # __________ (100 Red MI Add ons)<br/>",
    n150 = "* 2000 * 150 # __________ (150 Red MI Add ons)<br/>",
    n250 = "* 2000 * 250 # __________ (250 Red MI Add ons)<br/>",
    n400 = "* 2000 * 400 # __________ (400 Red MI Add ons)<br/>", // end red
    o2828 = "* 2828 # __________ ( Info USB Internet)<br/>",
    o8884 = "* 888 * 4 # __________ (Android Internet SMS)<br/>",
    o9 = "* 2000 * 9 # /// * 2000 # __________ (my Internet usage)<br/>",
    o8 = "* 2000 * 8 # __________ (Stop Roll over)<br/>",
    o80 = "* 2000 * 80 # /// * 2080 # __________ (80 LE MI Bundle)<br/>",
    o40 = "* 2000 * 40 # /// * 2040 # __________ (40 LE MI Bundle)<br/>",
    o20 = "* 2000 * 20 # /// * 2020 # __________ (20 LE MI Bundle)<br/>",
    o10 = "* 2000 * 10 # /// * 2010 # __________ (10 LE MI Bundle)<br/>",
    o5 = "* 2000 * 5 # /// * 2005 # __________ (5 LE MI Bundle)<br/>",
    o0 = "* 2000 * 0 # __________ ( MI Bundle)<br/>",
    o55 = "* 2000 * 55 # __________ ( 150 MB renewal add ons)<br/>",
    o155 = "* 2000 * 155 # __________ ( 150 MB Not Renewal add ons)<br/>",
    o510 = "* 2000 * 510 # __________ ( Throtting renewal add ons)<br/>",
    o1510 = "* 2000 * 1510 # __________ ( Throtting Not renewal add ons)<br/>",
    o1 = "* 2000 * 01 # __________ ( 1 H unlimited add ons)<br/>",
    o3 = "* 2000 * 03 # __________ ( 3 H unlimited add ons)<br/>",
    o6 = "* 2000 * 01 # __________ ( 6 H unlimited add ons)<br/>",
    o21 = "* 2000 * 21 # __________ ( daily social add ons)<br/>",
    o27 = "* 2000 * 27 # __________ ( weekly social add ons)<br/>",
    o230 = "* 2000 * 230 # __________ ( monthly social renewal add ons)<br/>",
    o2300 = "* 2000 * 2300 # __________ ( monthly social not renewal add ons)<br/>",
    o00 = "* 2000 * 00 # __________ ( subscibe net add ons)<br/>",
    o31 = "* 2000 * 31 # __________ ( daily video add ons)<br/>",
    o37 = "* 2000 * 37 # __________ ( Weekly Video add ons)<br/>",
    o330 = "* 2000 * 330 # __________ ( Monthly Video renewal add ons)<br/>",
    o3300 = "* 2000 * 01 # __________ ( monthly Video not Renewal add ons)<br/>",
    o41 = "* 2000 * 41 # __________ ( daily music add ons)<br/>",
    o47 = "* 2000 * 47 # __________ ( weekly music add ons)<br/>",
    o430 = "* 2000 * 430 # __________ ( montly music renewal add ons)<br/>",
    o4300 = "* 2000 * 4300 # __________ ( monthly music not renewal add ons)<br/>",// end net
    r0 = "* 2222 * 0 # __________ ( Black Berry Bundle)<br/>",
    r1 = "* 2222 * 1 # __________ ( Daily Unlimited Black Berry)<br/>",
    r21 = "* 2222 * 21 # __________ ( monthly Unlimited Black Berry)<br/>",
    r2 = "* 2222 * 2 # __________ ( Daily Chat Black Berry)<br/>",
    r22 = "* 2222 * 22 # __________ ( Monthly Chat Black Berry)<br/>",
    r3 = "* 2222 * 3 # __________ ( Daily Mail Black Berry)<br/>",
    r23 = "* 2222 * 23 # __________ ( Monthly Mail Black Berry)<br/>",
    r7 = "* 2222 * 7 # __________ ( Quota Black Berry)<br/>";
    
    btn[0].onclick = function () {
        out.innerHTML = "<p>" + a858 + a8581 + a8582 + a8583 +"</p>";
    };

    btn[1].onclick = function () {
        out.innerHTML = "<p>" + b055 + b142 + b05500 + b0551 + b0552 + b0559 +"</p>";
    };

    btn[2].onclick = function () {
        out.innerHTML = "<p>" + c45 + c457 + c453 + c454 +"</p>";
    };

    btn[3].onclick = function () {
        out.innerHTML = "<p>" + d878 + d14 + d60 + dcmk + d9001 + d506 + d868 + d1010 + d3 + d2002 + d111 + d505 +"</p>";
    };

    btn[4].onclick = function () {
        out.innerHTML = "<p>" + e67 + e671 + e62 + e621 + e61 + e611 + e21 + e211 + e004 + e0041 +"</p>";
    };

    btn[5].onclick = function () {
        out.innerHTML = "<p>" + f1 +f7 +"</p>";
    };

    btn[6].onclick = function () {
        out.innerHTML = "<p>" + g5055 + g50552 + g101 + g888 + g236 + g202 + g102 + g20210 +"</p>";
    };

    btn[7].onclick = function () {
        out.innerHTML = "<p>" + h880 + h14 + h5 + h6 + h7 + h11 + h225 + hf20 + hf30 + hf50 + hf70 + hf90 + hh8801 + hh8802 + hh8803 + hh8804 + h8555 +"</p>";
    };

    btn[8].onclick = function () {
        out.innerHTML = "<p>" + j14 + j9 + j28 + j29 + j51 + j52 + j34 + j23 + j24 + j22 + j130 + j03 + j05 + j10 + jtt + j5000 + j5 + j0 + j2 + j881 + j882 + j885 + j884 + j886 + j887 + j888 + j889 +"</p>";
    };

    btn[9].onclick = function () {
        out.innerHTML = "<p>" + k20 + k53 + k56 + k94 + k95 + k96 + k97 + k9 +"</p>";
    };

    btn[10].onclick = function () {
        out.innerHTML = "<p>" + m012 + m0 + m01 + m02 + m03 +"</p>";
    };

    btn[11].onclick = function () {
        out.innerHTML = "<p>" + n8881 + n8882 + n881 + n41 + n1001 + n30 + n45 + n60 + n75 + n100 + n150 + n250 + n400 +"</p>";
    };

    btn[12].onclick = function () {
        out.innerHTML = "<p>" + o2828 + o8884 + o9 + o8 + o80 + o40 + o20 + o10 + o5 +o0 + o55 + o155 + o510 + o1510 + o1 + o3 + o6 + o21 + o27 + o230 + o2300 + o00 + o31 + o37 + o330 + o3300 + o41 + o47 + o430 + o4300 +"</p>";
    };

    btn[13].onclick = function () {
        out.innerHTML = "<p>" + r0 + r1 + r21 + r2 + r22 + r3 + r23 + r7 +"</p>";
    };



            