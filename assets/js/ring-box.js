const ringBox = [
    {
        "index": "1",
        "srcr1": "https://i.ibb.co/5v26tKF/1.png",
        "srcr2": "https://i.ibb.co/bLrQP4n/2.png",
        "srcr3": "https://i.ibb.co/vww52mr/3.png",
        "titler1": "♥ Cặp đôi mới cưới ♥",
        "titler2": "♥ Nhẫn Kính Tim Gấu Dingdong ♥",
        "titler3": "♥ Nhẫn sao, vĩnh cửu, My Destiny ♥"
    }/*,
    {
        "index": "2",
        "srcr1": "https://i.pinimg.com/564x/7e/ac/cd/7eaccd35fca1b4e2063dd95fafc85d2c.jpg",
        "srcr2": "https://i.pinimg.com/564x/d0/d8/79/d0d87953194dc8016c6e3bf594a5a590.jpg",
        "srcr3": "https://i.pinimg.com/564x/ab/6c/d8/ab6cd8ad826653b93b5f0225b4bd5325.jpg",
        "titler1": "♥ Cặp đôi thuyền biển ♥",
        "titler2": "♥ Cặp đôi gió mây ♥",
        "titler3": "♥ Iris ♥",
    },
    {
        "index": "3",
        "srcr1": "https://i.pinimg.com/564x/96/f5/33/96f533209748ed2f507f2f04060fe63b.jpg",
        "srcr2": "https://i.pinimg.com/564x/a9/97/68/a9976888fdfe997b7904d7b39a164c20.jpg",
        "srcr3": "https://i.pinimg.com/564x/b7/d4/75/b7d475e4ac3a47f386b4e0f41b374597.jpg",
        "titler1": "♥ Cặp đôi Vàng ♥",
        "titler2": "♥ Cặp đôi Kim cương ♥",
        "titler3": "♥ Cặp đôi vĩnh cửu ♥"
    },
    {
        "index": "4",
        "srcr1": "https://i.pinimg.com/564x/8e/fb/12/8efb12b3285e7ff05b174ac2a7003930.jpg",
        "srcr2": "https://i.pinimg.com/564x/c7/b7/1e/c7b71ee8ed51136aa29acbb78ca79ba3.jpg",
        "srcr3": "https://i.pinimg.com/564x/da/27/91/da2791878b80efeb02741dc755456b47.jpg",
        "titler1": "♥ Cặp đôi bạc ♥",
        "titler2": "♥ Cặp đôi mặn nồng ♥",
        "titler3": "♥ Cặp đôi hạnh phúc ♥"
    },
    {
        "index": "5",
        "srcr1": "https://i.pinimg.com/564x/37/ea/2a/37ea2a05c45c7d54f5ef37f4bb8a6065.jpg",
        "srcr2": "https://i.pinimg.com/564x/11/6d/13/116d13e9f2c5a198ceed19711dbf151e.jpg",
        "srcr3": "https://i.pinimg.com/564x/9a/4c/73/9a4c73e85f7ef6f91920944c8d2ada71.jpg",
        "titler1": "♥ Nhẫn Ruby Hexagon ♥",
        "titler2": "♥ Cặp đôi trăng sao ♥",
        "titler3": "♥ Nhẫn Đôi cánh Pinky ♥"
    },
    {
        "index": "6",
        "srcr1": "https://i.pinimg.com/564x/28/f7/86/28f78649ba656444b5582f4825a363cb.jpg",
        "srcr2": "https://i.pinimg.com/564x/b1/b0/29/b1b029f2ea24dbd8be238a6d11f60607.jpg",
        "srcr3": "https://i.pinimg.com/564x/ac/97/9f/ac979f3457f6c90b561e51d456f35795.jpg",
        "titler1": "♥ Nhẫn Trái tim ROSÉ ♥",
        "titler2": "♥ Nhẫn Nhịp đập trái tim ♥",
        "titler3": "♥ Nhẫn Sailor Heart ♥"
    },
    {
        "index": "7",
        "srcr1": "https://i.pinimg.com/564x/39/4c/3c/394c3ce2274c378fe0bf476f648994f9.jpg",
        "srcr2": "https://i.pinimg.com/564x/7b/6b/b4/7b6bb4d31f37ab20c628719454cedbfa.jpg",
        "srcr3": "https://i.pinimg.com/564x/85/00/60/850060e894bb34f77fb5516cf4b73479.jpg",
        "titler1": "♥ Nhẫn Purple Flower ♥",
        "titler2": "♥ Nhẫn Cưới hoa tình yêu ♥",
        "titler3": "♥ Nhẫn Lan vàng trong đêm ♥"
    },
    {
        "index": "8",
        "srcr1": "https://i.pinimg.com/564x/6b/8a/19/6b8a1988a96d7c0fbc337080609efada.jpg",
        "srcr2": "https://i.pinimg.com/564x/bf/63/49/bf6349a79bde1725fd785649b9e9bccf.jpg",
        "srcr3": "https://i.pinimg.com/564x/f0/48/90/f04890bb3abdee0e8bdaed57712b5347.jpg",
        "titler1": "",
        "titler2": "♥ Nhẫn Hoa cỏ may ♥",
        "titler3": "♥ Nhẫn Pinky Flower ♥"
    },
    {
        "index": "9",
        "srcr1": "https://i.pinimg.com/564x/88/b2/cf/88b2cf3aed4ed9930b5deebb94e190a7.jpg",
        "srcr2": "https://i.pinimg.com/564x/9d/50/11/9d5011878bf5fca329f3b83efbca458f.jpg",
        "srcr3": "https://i.pinimg.com/564x/96/57/11/9657118f6c462af23ed5fe1414f1fbb1.jpg",
        "titler1": "♥ Nhẫn Shapire vô tình ♥",
        "titler2": "♥ Nhẫn Mắt mèo đá xanh ♥",
        "titler3": "♥ Nhẫn Black Galaxy ♥"
    }*/
];

let soluongX = ringBox.length;
const addring = document.getElementById("listring");
const sortedringbox = ringBox.sort((a, b) => a.index - b.index);
for (let i = 0; i < soluongX; i++) {
    addring.innerHTML +=
        `<div class="col-lg-3 ring-box mb-5" data-aos='fade-right'>
            <div class='ring-details justify-content-between'>
                <img class='ring-1-3' src ='${ringBox[i].srcr1}' alt='' title='${ringBox[i].titler1}'>
                <img src ='${ringBox[i].srcr2}' alt='' title='${ringBox[i].titler2}'>
                <img class='ring-1-3' src ='${ringBox[i].srcr3}' alt='' title='${ringBox[i].titler3}'>
            </div>
            <img src='assets/img/cpl/base.png' class='base' alt="">
        </div>`
}


var ringBoxes = document.querySelectorAll('.ring-box');

ringBoxes.forEach(function (box) {
    var ringDetails = box.querySelector('.ring-details');
    var baseElement = box.querySelector('.base');

    ringDetails.querySelectorAll('img').forEach(function (image) {
        image.addEventListener('mouseover', function () {
            baseElement.style.filter = 'brightness(100%)';
        });

        image.addEventListener('mouseout', function () {
            baseElement.style.filter = 'brightness(70%)';
        });
    });
});
