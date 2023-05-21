const collections = [
    {
        "index": 1,
        "title": "5K",
        "imgBack": "https://i.pinimg.com/564x/2e/a7/19/2ea719181ee83844c413d9b94644faf2.jpg",
        "imgFront": "https://i.pinimg.com/564x/1a/2b/59/1a2b59aa2291b2643ff78196a8981625.jpg"
    },
    {
        "index": 2,
        "title": "Full Đen",
        "imgBack": "https://i.pinimg.com/564x/5d/4f/47/5d4f47c4155b21246f6247200adb2c74.jpg",
        "imgFront": "https://i.pinimg.com/564x/ef/18/b2/ef18b2add4c7ded256810416e770ca63.jpg"
    },
    {
        "index": 3,
        "title": "Mafia Ú Oà",
        "imgBack": "https://i.pinimg.com/564x/0e/27/be/0e27be04711026b7e623352cbc1fe557.jpg",
        "imgFront": "https://i.pinimg.com/564x/20/2a/fd/202afd94ccdd1911682e59d91962d46c.jpg"
    },
    {
        "index": 4,
        "title": "MaTrix",
        "imgBack": "https://i.pinimg.com/564x/3f/14/c2/3f14c214d49570883d45a12812762572.jpg",
        "imgFront": "https://i.pinimg.com/564x/a5/d0/dd/a5d0dd3e3f925939c14b7c93d06c85a6.jpg"
    },
    {
        "index": 5,
        "title": "Thiên Thần Bóng Tối",
        "imgBack": "https://i.pinimg.com/564x/e7/e2/ef/e7e2efcb31a2941ca0c7bdd692af2e6f.jpg",
        "imgFront": "https://i.pinimg.com/564x/dd/e7/e3/dde7e33945bf478b10ec6ad23f07bc16.jpg"
    },
    {
        "index": 6,
        "title": "Yang Lake",
        "imgBack": "https://i.pinimg.com/564x/d3/71/54/d3715470fe58ff5728be26d489e59695.jpg",
        "imgFront": "https://i.pinimg.com/564x/7e/fc/c0/7efcc0c07efac522ae05389a41f1e62a.jpg"
    },
    {
        "index": 7,
        "title": "Đám Tang",
        "imgBack": "https://i.pinimg.com/564x/8e/c6/6f/8ec66fc9de53539313003976eb23106f.jpg",
        "imgFront": "https://i.pinimg.com/564x/97/d4/f8/97d4f869c4eff53c45b6ff8133962ec5.jpg"
    },
    {
        "index": 8,
        "title": "Ngựa Vằn",
        "imgBack": "https://i.pinimg.com/564x/97/83/bd/9783bdd056d5adad9f5beb494478a30f.jpg",
        "imgFront": "https://i.pinimg.com/564x/87/3d/bc/873dbca1809e4469941e868a0c8cf72a.jpg"
    },
    {
        "index": 9,
        "title": "Len Đen",
        "imgBack": "https://i.pinimg.com/564x/2b/ff/54/2bff5435a1e68dc12683daf863de0456.jpg",
        "imgFront": "https://i.pinimg.com/564x/62/8b/b6/628bb6cac93e3603644aec79de373d37.jpg"
    },
    {
        "index": 10,
        "title": "Jacket Da",
        "imgBack": "https://i.pinimg.com/564x/83/e9/c2/83e9c2564b670654813140cb37b10f2d.jpg",
        "imgFront": "https://i.pinimg.com/564x/60/57/8a/60578a2113a99c3dae25d68e7d3beb40.jpg"
    },
    {
        "index": 11,
        "title": "Nghim Túc",
        "imgBack": "https://i.pinimg.com/564x/0d/40/d9/0d40d9b5956c2f356608778f81fb7007.jpg",
        "imgFront": "https://i.pinimg.com/564x/19/85/ea/1985ea23e1b662876ed4d7704d0caaea.jpg"
    },
    {
        "index": 12,
        "title": "Trốn Nợ Mùa World Cup",
        "imgBack": "https://i.pinimg.com/564x/7f/cb/ed/7fcbedaa7f3fe05f4d45829953de7ccd.jpg",
        "imgFront": "https://i.pinimg.com/564x/b3/be/da/b3bedac1eda5da37d8e7a44cc6559f2d.jpg"
    },
    {
        "index": 13,
        "title": "Áo Karo",
        "imgBack": "https://i.pinimg.com/564x/60/66/ac/6066ac3cb4925e72e2b9cd726d2fdeaa.jpg",
        "imgFront": "https://i.pinimg.com/564x/d9/30/f4/d930f459f090b5b52de0645cd6ec9a9d.jpg"
    },
    {
        "index": 14,
        "title": "Vé Số",
        "imgBack": "https://i.pinimg.com/564x/69/f6/91/69f691806c128aa511a2fb143815e60e.jpg",
        "imgFront": "https://i.pinimg.com/564x/87/12/4a/87124aa011570b73dd5ad36d2b97774d.jpg"
    },
    {
        "index": 17,
        "title": "",
        "imgBack": "https://i.pinimg.com/564x/75/8f/4a/758f4a6cdabe3fdfde527fee852bdf42.jpg",
        "imgFront": "https://i.pinimg.com/564x/c4/79/3c/c4793c2e8b19e9cbbf5fe9b5327f5bb3.jpg"
    },
    {
        "index": 16,
        "title": "",
        "imgBack": "https://i.pinimg.com/564x/4f/35/9f/4f359f52e08a4e2d0560634942ef6b8d.jpg",
        "imgFront": "https://i.pinimg.com/564x/45/dd/f0/45ddf0c600714f688b6d5d7f4bfd8782.jpg"
    },
    {
        "index": 18,
        "title": "Trắng Đen",
        "imgBack": "https://i.pinimg.com/564x/7a/73/ea/7a73ea540a9576e46f8b38c80f644ee4.jpg",
        "imgFront": "https://i.pinimg.com/564x/1b/66/e1/1b66e14322912de0ed0b12f877a22f10.jpg"
    },
    {
        "index": 20,
        "title": "Lấp Lánh",
        "imgBack": "https://i.pinimg.com/564x/82/ad/ab/82adab8eb8bdd943f5d6cfe3240e1458.jpg",
        "imgFront": "https://i.pinimg.com/564x/da/4a/ea/da4aea0294288c2a279ca8a863faca65.jpg"
    },
    {
        "index": 19,
        "title": "Bad Gơ & Gút Boiz",
        "imgBack": "https://i.pinimg.com/564x/c4/3d/37/c43d379697434609cb668aa72958b946.jpg",
        "imgFront": "https://i.pinimg.com/564x/73/2c/23/732c23d8f34efb54bbbb4e06477e9708.jpg"
    },
    {
        "index": 28,
        "title": "Cấp Bar",
        "imgBack": "https://i.pinimg.com/564x/ea/a3/fc/eaa3fc7b0be1fcfe739904de267034c1.jpg",
        "imgFront": "https://i.pinimg.com/564x/ae/8d/b7/ae8db752c4552eaaba0695cf3ae3ab8a.jpg"
    },
    {
        "index": 22,
        "title": "Học Sinh Ngoan",
        "imgBack": "https://i.pinimg.com/564x/57/2c/64/572c6443360dab013f6c8318d284c3ef.jpg",
        "imgFront": "https://i.pinimg.com/564x/ef/e1/04/efe104fe4f1d543c4a1cbcf185e8f2bf.jpg"
    },
    {
        "index": 25,
        "title": "Đại Học",
        "imgBack": "https://i.pinimg.com/564x/9d/b3/2d/9db32d83525796ee4203b6b9e43cd565.jpg",
        "imgFront": "https://i.pinimg.com/564x/bb/0e/1e/bb0e1e1acbcc24c987b50237b16c3ec7.jpg"
    },
    {
        "index": 27,
        "title": "Cấp High",
        "imgBack": "https://i.pinimg.com/564x/4f/9d/00/4f9d0002dab2fbeb4b86a06fdac7ed9e.jpg",
        "imgFront": "https://i.pinimg.com/564x/a5/1f/4b/a51f4b2f5324876b965b33fc64850785.jpg"
    },
    {
        "index": 30,
        "title": "Tiểu Học",
        "imgBack": "https://i.pinimg.com/564x/fc/80/40/fc8040697d84f5190f0cc4c3561ec08c.jpg",
        "imgFront": "https://i.pinimg.com/564x/83/02/34/830234a70098afa1cec581d205b43857.jpg"
    },
    {
        "index": 29,
        "title": "Học Lại",
        "imgBack": "https://i.pinimg.com/564x/78/be/da/78beda54d3537e2d8dce94894cc99492.jpg",
        "imgFront": "https://i.pinimg.com/564x/54/5c/e9/545ce94427a02524fd8f35751822e85e.jpg"
    },
    {
        "index": 31,
        "title": "Mẫu Giáo",
        "imgBack": "https://i.pinimg.com/564x/93/a4/ef/93a4ef9ebf61956837a15c0332fd027a.jpg",
        "imgFront": "https://i.pinimg.com/564x/f9/ae/69/f9ae695fd80fdf52c8c4be3142225e9e.jpg"
    },
    {
        "index": 34,
        "title": "Couple Cam",
        "imgBack": "https://i.pinimg.com/564x/b2/74/d1/b274d1a7510f30bd3a815b8eeb8183ec.jpg",
        "imgFront": "https://i.pinimg.com/564x/df/e0/ca/dfe0cad6c40483950db2ee2459eacbdb.jpg"
    },
    {
        "index": 35,
        "title": "Nâu",
        "imgBack": "https://i.pinimg.com/564x/39/62/16/396216a851070608a2504713c39b3a20.jpg",
        "imgFront": "https://i.pinimg.com/564x/47/e6/e9/47e6e9a10cdf1835dbd3b5dd5f4ee7bc.jpg"
    },
    {
        "index": 33,
        "title": "Quýt",
        "imgBack": "https://i.pinimg.com/564x/2a/d6/c6/2ad6c6e8c48045883636e71b466139e8.jpg",
        "imgFront": "https://i.pinimg.com/564x/49/6c/0e/496c0e8c3aa5fc0c0992fcbbb912c40b.jpg"
    },
    {
        "index": 93,
        "title": "Áo Phao",
        "imgBack": "https://i.pinimg.com/564x/85/54/60/85546053ae909c7d410445cd7f0feb6b.jpg",
        "imgFront": "https://i.pinimg.com/564x/3f/ad/9b/3fad9b480e4bd1614828df3b0ca33c7d.jpg"
    },
    {
        "index": 43,
        "title": "Đua Khum??",
        "imgBack": "https://i.pinimg.com/564x/dd/bd/86/ddbd86545ddc0179cfd08bbd74925f70.jpg",
        "imgFront": "https://i.pinimg.com/564x/1f/98/8d/1f988df6ae1aa3e2387dedfa7d68ea92.jpg"
    },
    {
        "index": 46,
        "title": "Meow",
        "imgBack": "https://i.pinimg.com/564x/7f/f9/fc/7ff9fcbbfca59c878f1a2767f78cf50f.jpg",
        "imgFront": "https://i.pinimg.com/564x/f7/2f/4f/f72f4f2c9d071eb1b94f8b0f9f4d4daf.jpg"
    },
    {
        "index": 45,
        "title": "Đi Bụi",
        "imgBack": "https://i.pinimg.com/564x/e8/2f/42/e82f42899d46d1882010181c9bade661.jpg",
        "imgFront": "https://i.pinimg.com/564x/92/de/fe/92defe884bbb104adf0375ef929d16fc.jpg"
    },
    {
        "index": 54,
        "title": "Rân Trơi",
        "imgBack": "https://i.pinimg.com/564x/97/ab/e7/97abe72bd3b7c7ace46c6f59c3feac2d.jpg",
        "imgFront": "https://i.pinimg.com/564x/73/18/67/73186762cc04160622e85b75c25322c6.jpg"
    },
    {
        "index": 47,
        "title": "Mickey",
        "imgBack": "https://i.pinimg.com/564x/85/92/2a/85922aadc427b5273af1c639d9793825.jpg",
        "imgFront": "https://i.pinimg.com/564x/b0/94/78/b094780405847c78db428ac359c4d7ec.jpg"
    },
    {
        "index": 44,
        "title": "",
        "imgBack": "https://i.pinimg.com/564x/7a/49/b0/7a49b030ce5ea22f827794c79f46d989.jpg",
        "imgFront": "https://i.pinimg.com/564x/a1/3a/77/a13a77674090ab93afd75d12385e1a2e.jpg"
    },
    {
        "index": 37,
        "title": "",
        "imgBack": "https://i.pinimg.com/564x/18/c7/83/18c7838c5be8a24e1d966b7271d43c18.jpg",
        "imgFront": "https://i.pinimg.com/564x/ba/7c/3f/ba7c3f37b4dd3289c1b6b8377c5076e9.jpg"
    },
    {
        "index": 38,
        "title": "Biển đỏ",
        "imgBack": "https://i.pinimg.com/564x/89/d7/2d/89d72d49a6005494025a35ad5ef5476e.jpg",
        "imgFront": "https://i.pinimg.com/564x/66/c6/d4/66c6d49aacaeeef7c9e3591015d503d2.jpg"
    },
    {
        "index": 39,
        "title": "Biển Xanh",
        "imgBack": "https://i.pinimg.com/564x/1e/0a/99/1e0a996bf1673add996e9a85e5e208b3.jpg",
        "imgFront": "https://i.pinimg.com/564x/8d/b2/0e/8db20e1a010686610e99aa37c4b6b4bc.jpg"
    },
    {
        "index": 40,
        "title": "",
        "imgBack": "https://i.pinimg.com/564x/26/f6/38/26f638e3cf415d44618e428891848ae3.jpg",
        "imgFront": "https://i.pinimg.com/564x/08/d4/0f/08d40f0e5514481539d5921f02f8e2b7.jpg"
    },
    {
        "index": 41,
        "title": "Quần Karo",
        "imgBack": "https://i.pinimg.com/564x/47/18/e3/4718e3471a2f024b3ee2263f9d3e9e70.jpg",
        "imgFront": "https://i.pinimg.com/564x/76/b9/3c/76b93c26a8a850ef939722ea43b9a16c.jpg"
    },
    {
        "index": 42,
        "title": "Áo Thun",
        "imgBack": "https://i.pinimg.com/564x/e9/06/4b/e9064b1d77be9a24efde13bdacaf6b2b.jpg",
        "imgFront": "https://i.pinimg.com/564x/7e/b1/c4/7eb1c47f53054bef62d4d7df20c22213.jpg"
    },
    {
        "index": 103,
        "title": "Áo Bò",
        "imgBack": "https://i.pinimg.com/564x/17/71/47/1771471e9bdb228a6fecfbbd943ba331.jpg",
        "imgFront": "https://i.pinimg.com/564x/3f/48/5e/3f485efed45ff15ebeb5defb3c27ee9f.jpg"
    },
    {
        "index": 102,
        "title": "Set Bò",
        "imgBack": "https://i.pinimg.com/564x/9b/79/98/9b7998b818fa3dd20c7285012a168612.jpg",
        "imgFront": "https://i.pinimg.com/564x/7f/66/da/7f66da3a77bbebeed2ba2404da99e7c8.jpg"
    },
    {
        "index": 101,
        "title": "Basic",
        "imgBack": "https://i.pinimg.com/564x/60/ee/d3/60eed3db819c3835facacfdaa8eb586c.jpg",
        "imgFront": "https://i.pinimg.com/564x/7a/a7/5b/7aa75b6368e66676ce6e97c7d97b7584.jpg"
    },
    {
        "index": 100,
        "title": "Au đi sừn",
        "imgBack": "https://i.pinimg.com/564x/7b/d5/56/7bd5562543d6c92df35db039bc81a367.jpg",
        "imgFront": "https://i.pinimg.com/564x/96/89/1e/96891e0dc3978d0ab07eb9d0b5efadc3.jpg"
    },
    {
        "index": 106,
        "title": "Túi Chéo",
        "imgBack": "https://i.pinimg.com/564x/7f/ea/05/7fea053ae9bbc366a2fdf4b9b60a9650.jpg",
        "imgFront": "https://i.pinimg.com/564x/6a/4f/e7/6a4fe740ff3cd7a60a15ae1531d5eac4.jpg"
    },
    {
        "index": 104,
        "title": "Rich Kid",
        "imgBack": "https://i.pinimg.com/564x/c3/a8/6e/c3a86e6ad5807234c8137d7329aa513e.jpg",
        "imgFront": "https://i.pinimg.com/564x/54/8a/d3/548ad3802a7125fad5f1a5aa0d2c5627.jpg"
    },
    {
        "index": 99,
        "title": "Dạo Phố",
        "imgBack": "https://i.pinimg.com/564x/70/7c/2c/707c2c05e568a9c830089d13d8577d8b.jpg",
        "imgFront": "https://i.pinimg.com/564x/e1/a9/a0/e1a9a0f18e7b45ee25da68a30c290f1d.jpg"
    },
    {
        "index": 52,
        "title": "Phi Công",
        "imgBack": "https://i.pinimg.com/564x/5b/27/12/5b2712830ef4e60bb8774d2f016c4380.jpg",
        "imgFront": "https://i.pinimg.com/564x/23/e6/e4/23e6e4b3bb5cf65405c179606ffa94df.jpg"
    },
    {
        "index": 49,
        "title": "Xanh Lá",
        "imgBack": "https://i.pinimg.com/564x/b2/a5/60/b2a5606674117dee3a232fdb4de728cf.jpg",
        "imgFront": "https://i.pinimg.com/564x/75/82/a5/7582a5ec45fb189c3bb2b01de9870a99.jpg"
    },
    {
        "index": 50,
        "title": "Jogger Xanh",
        "imgBack": "https://i.pinimg.com/564x/7b/66/88/7b6688cdd0171e8674e75b3136d6d2a7.jpg",
        "imgFront": "https://i.pinimg.com/564x/f8/11/f4/f811f491f3f78dbd9a0f612dd1ebeecd.jpg"
    },
    {
        "index": 53,
        "title": "Tím Xanh",
        "imgBack": "https://i.pinimg.com/564x/02/3a/b9/023ab93eb7f41ec081d65743929f3aa8.jpg",
        "imgFront": "https://i.pinimg.com/564x/a3/ae/a9/a3aea97489c726103f0dd04d2c145be1.jpg"
    },
    {
        "index": 48,
        "title": "Lắm Màu",
        "imgBack": "https://i.pinimg.com/564x/a6/69/86/a6698628ac95dda5b643150db7f281d1.jpg",
        "imgFront": "https://i.pinimg.com/564x/b0/40/db/b040db4ddb9a7c3b3f38da4b60f47835.jpg"
    },
    {
        "index": 66,
        "title": "",
        "imgBack": "https://i.pinimg.com/564x/bc/92/4b/bc924b94aea35dc1a0c621adff6fe01d.jpg",
        "imgFront": "https://i.pinimg.com/564x/5e/20/05/5e2005c560c8d480b111bc45052490d9.jpg"
    },
    {
        "index": 65,
        "title": "",
        "imgBack": "https://i.pinimg.com/564x/e0/ff/d7/e0ffd73b02b4ad7beeb2143c8e009849.jpg",
        "imgFront": "https://i.pinimg.com/564x/18/1b/e1/181be1296eaaa1fbe3ab2d007bf4995e.jpg"
    },
    {
        "index": 64,
        "title": "Hoa Hồng Phấn",
        "imgBack": "https://i.pinimg.com/564x/64/c1/e7/64c1e79001881a44ccdb97c775b72210.jpg",
        "imgFront": "https://i.pinimg.com/564x/0a/01/0a/0a010afc01b651335b7a307adbe24f9a.jpg"
    },
    {
        "index": 58,
        "title": "7 Sắc Cầu Vồng",
        "imgBack": "https://i.pinimg.com/564x/f8/97/97/f8979782491077b033e416f76a0df9ae.jpg",
        "imgFront": "https://i.pinimg.com/564x/28/65/83/286583c37624fd1b4d0b8998bb900e05.jpg"
    },
    {
        "index": 63,
        "title": "Áo Hoa",
        "imgBack": "https://i.pinimg.com/564x/4b/69/ff/4b69ffcee8c1ecf3b59cbc6da1ca3b9e.jpg",
        "imgFront": "https://i.pinimg.com/564x/0a/40/3c/0a403cc3d1dfaa951796f105277075db.jpg"
    },
    {
        "index": 60,
        "title": "Pet",
        "imgBack": "https://i.pinimg.com/564x/81/0e/bc/810ebcb1c2f76546c0c9808155395394.jpg",
        "imgFront": "https://i.pinimg.com/564x/28/a8/19/28a819efd0c956f23c62acf5532ce210.jpg"
    },
    {
        "index": 85,
        "title": "Vest Karo",
        "imgBack": "https://i.pinimg.com/564x/b3/67/30/b36730faadc90ae1cf5f1cd8944bc84f.jpg",
        "imgFront": "https://i.pinimg.com/564x/cd/36/2b/cd362bff08a53db4e19d2ebafa2e8fce.jpg"
    },
    {
        "index": 86,
        "title": "",
        "imgBack": "https://i.pinimg.com/564x/f3/73/fc/f373fc564279622c38be65feb8bd0d64.jpg",
        "imgFront": "https://i.pinimg.com/564x/c9/6b/d5/c96bd5325d9d491499b9c2629452b736.jpg"
    },
    {
        "index": 87,
        "title": "",
        "imgBack": "https://i.pinimg.com/564x/2f/d0/2c/2fd02cf9ed1fdf3319b3e0408c372bd3.jpg",
        "imgFront": "https://i.pinimg.com/564x/82/66/9d/82669d71c52545ceac01e559a8f8c6ff.jpg"
    },
    {
        "index": 90,
        "title": "Cá Xợợợợợợ",
        "imgBack": "https://i.pinimg.com/564x/1e/a4/aa/1ea4aa99618b74d1b8db329c025b4cf3.jpg",
        "imgFront": "https://i.pinimg.com/564x/71/88/16/7188167ff82fdbedabd176477552c3e0.jpg"
    },
    {
        "index": 89,
        "title": "Cô Rể Chú Dâu",
        "imgBack": "https://i.pinimg.com/564x/f8/ab/23/f8ab237e8233156b179cae896be0d406.jpg",
        "imgFront": "https://i.pinimg.com/564x/c4/9f/98/c49f98fa90958da2f7eeaf24c90a309b.jpg"
    },
    {
        "index": 88,
        "title": "Vest Hồng",
        "imgBack": "https://i.pinimg.com/564x/31/4e/4e/314e4eb52338f3812f9b108b64689056.jpg",
        "imgFront": "https://i.pinimg.com/564x/8a/ed/12/8aed1275c4435078f05d07d7403be4be.jpg"
    },
    {
        "index": 67,
        "title": "Thỏ",
        "imgBack": "https://i.pinimg.com/564x/31/b4/5b/31b45bb5b2c83fbe1969e4a4ee755a19.jpg",
        "imgFront": "https://i.pinimg.com/564x/b1/24/b2/b124b228a23ce6832ae0813034055840.jpg"
    },
    {
        "index": 68,
        "title": "Xóiiiiii",
        "imgBack": "https://i.pinimg.com/564x/d7/de/b9/d7deb9c0eb0e415a4b2c2feeab64073f.jpg",
        "imgFront": "https://i.pinimg.com/564x/d6/76/13/d67613d7b0849a76693797849a75a9a0.jpg"
    },
    {
        "index": 69,
        "title": "Chồn",
        "imgBack": "https://i.pinimg.com/564x/f8/d2/a4/f8d2a4d92b31ff9510c52dc2357e0950.jpg",
        "imgFront": "https://i.pinimg.com/564x/ab/23/29/ab2329210db38f9301d22313bde41dc0.jpg"
    },
    {
        "index": 70,
        "title": "Chẻ Chou",
        "imgBack": "https://i.pinimg.com/564x/94/21/e1/9421e13077613876fee1558a4539e8c0.jpg",
        "imgFront": "https://i.pinimg.com/564x/8d/34/31/8d343131639b408f8844b25367d3474d.jpg"
    },
    {
        "index": 71,
        "title": "King & Queen Version 1",
        "imgBack": "https://i.pinimg.com/564x/aa/6a/a5/aa6aa5cf974c2e39c63ca780afcbaaa4.jpg",
        "imgFront": "https://i.pinimg.com/564x/12/b6/04/12b6044ca5b30d6aeb66897df7962d9c.jpg"
    },
    {
        "index": 72,
        "title": "King & Queen Version 2",
        "imgBack": "https://i.pinimg.com/564x/04/04/45/0404455db5f486efb45c2568294d5610.jpg",
        "imgFront": "https://i.pinimg.com/564x/ac/98/fb/ac98fbf249c00916a68a6ae83b4ccfba.jpg"
    },
    {
        "index": 73,
        "title": "Hàn Cuốc",
        "imgBack": "https://i.pinimg.com/564x/0b/92/f9/0b92f933aadcb727d4fbb64d81b9956f.jpg",
        "imgFront": "https://i.pinimg.com/564x/e7/0a/81/e70a814e1125a6ccb4becafd63cc51f4.jpg"
    },
    {
        "index": 74,
        "title": "Ninja School",
        "imgBack": "https://i.pinimg.com/564x/7a/dd/da/7adddad25c3e973039eec0a18af5ff0f.jpg",
        "imgFront": "https://i.pinimg.com/564x/a3/b3/b1/a3b3b199981102b03ca3ba8a6918f547.jpg"
    },
    {
        "index": 75,
        "title": "Ninja",
        "imgBack": "https://i.pinimg.com/564x/8d/05/ce/8d05cefe0fa490a8f54b8ab010d72878.jpg",
        "imgFront": "https://i.pinimg.com/564x/28/ac/a2/28aca2a302bc92175a7981aba3d432ab.jpg"
    },
    {
        "index": 78,
        "title": "",
        "imgBack": "https://i.pinimg.com/564x/2c/ca/9d/2cca9db564ef82c612ed8df8a1f07709.jpg",
        "imgFront": "https://i.pinimg.com/564x/04/b9/71/04b971ecff71075f3644f9ef9d8e2c44.jpg"
    },
    {
        "index": 77,
        "title": "T-Rex",
        "imgBack": "https://i.pinimg.com/564x/6c/c9/5e/6cc95e172a2a266edb58484f3e2f36e5.jpg",
        "imgFront": "https://i.pinimg.com/564x/a4/38/24/a43824fa3245300cae775b50b7d7e230.jpg"
    },
    {
        "index": 76,
        "title": "Baby Shark",
        "imgBack": "https://i.pinimg.com/564x/df/e3/26/dfe32675700a7d934a52de236e8541f8.jpg",
        "imgFront": "https://i.pinimg.com/564x/80/e6/46/80e6462c7550b740e32ada098fc70ac2.jpg"
    },
    {
        "index": 79,
        "title": "Black 6",
        "imgBack": "https://i.pinimg.com/564x/44/87/84/448784f50984f5335b1bc010be6d3120.jpg",
        "imgFront": "https://i.pinimg.com/564x/3c/3b/6d/3c3b6d67830e494028c9b73e4ba74bdd.jpg"
    },
    {
        "index": 80,
        "title": "Rằn Ri",
        "imgBack": "https://i.pinimg.com/564x/d1/c0/4b/d1c04b7d0bca4ca6ab2fa079fb8c19cb.jpg",
        "imgFront": "https://i.pinimg.com/564x/66/bd/58/66bd5893ad2258d0cc7ce5cf510ed69d.jpg"
    },
    {
        "index": 81,
        "title": "",
        "imgBack": "https://i.pinimg.com/564x/08/08/52/0808529debea5380bf6d6f3f47f629c5.jpg",
        "imgFront": "https://i.pinimg.com/564x/f0/b7/50/f0b75029bdd50c18e5a962c12ec9099c.jpg"
    },
    {
        "index": 82,
        "title": "",
        "imgBack": "https://i.pinimg.com/564x/92/7f/2e/927f2ee6bed5d192d7a730418a75fb78.jpg",
        "imgFront": "https://i.pinimg.com/564x/f3/53/c3/f353c30c848d4fb2405f37ab47c5dafa.jpg"
    },
    {
        "index": 83,
        "title": "Hổ Páo",
        "imgBack": "https://i.pinimg.com/564x/13/ae/be/13aebee73a15139c2d947f2a9fe8b288.jpg",
        "imgFront": "https://i.pinimg.com/564x/88/e6/4b/88e64b0c6a2866975817bca2001cc4b4.jpg"
    },
    {
        "index": 84,
        "title": "Sweater Đen",
        "imgBack": "https://i.pinimg.com/564x/0a/91/0e/0a910ede62188c431f066be2ef657901.jpg",
        "imgFront": "https://i.pinimg.com/564x/a6/a8/bd/a6a8bd11efdecf865c1ba85afdd9b687.jpg"
    },
    {
        "index": 95,
        "title": "",
        "imgBack": "https://i.pinimg.com/564x/48/66/0d/48660dc5b9cac55d5d220a0bccc2f8b4.jpg",
        "imgFront": "https://i.pinimg.com/564x/9c/48/23/9c4823355a271df46c5811a22be75ba0.jpg"
    },
    {
        "index": 96,
        "title": "",
        "imgBack": "https://i.pinimg.com/564x/11/9c/79/119c7928259868129dd7699d53b24833.jpg",
        "imgFront": "https://i.pinimg.com/564x/b3/76/0f/b3760f4f67f8d0507001ac7d92dbf3c1.jpg"
    },
    {
        "index": 94,
        "title": "",
        "imgBack": "https://i.pinimg.com/564x/95/25/47/95254714872b2dd9aeaf39946a6a73f5.jpg",
        "imgFront": "https://i.pinimg.com/564x/e1/c4/e0/e1c4e0c282adf1e61cce820c5f3572d7.jpg"
    },
    {
        "index": 97,
        "title": "Màu Mè",
        "imgBack": "https://i.pinimg.com/564x/c4/02/cb/c402cb9101598703b43734a08fce6a3e.jpg",
        "imgFront": "https://i.pinimg.com/564x/12/1a/31/121a31c1f9f2ca05b4cedf3fe7618797.jpg"
    },
    {
        "index": 98,
        "title": "Xanh Chúi",
        "imgBack": "https://i.pinimg.com/564x/e3/f1/52/e3f1528a7a3e5acf0d4911b3d68e709b.jpg",
        "imgFront": "https://i.pinimg.com/564x/37/c7/8e/37c78e538c2a13c83616fe5e2a7d4ace.jpg"
    },
    {
        "index": 36,
        "title": "Zịt Zàng",
        "imgBack": "https://i.pinimg.com/564x/00/65/65/00656537c8d0cfa920e0c73acd3f9a0e.jpg",
        "imgFront": "https://i.pinimg.com/564x/67/9a/7f/679a7fd0b2b12345f146229dcdba97fb.jpg"
    },
    {
        "index": 56,
        "title": "Mặt Thộn",
        "imgBack": "https://i.pinimg.com/564x/44/80/68/448068373e904db3761321e560b5a798.jpg",
        "imgFront": "https://i.pinimg.com/564x/bc/43/dd/bc43dd171e523d69a491fff31c411693.jpg"
    },
    {
        "index": 55,
        "title": "",
        "imgBack": "https://i.pinimg.com/564x/bd/8b/85/bd8b85ab3caef1fbaca2f889c5d06b5a.jpg",
        "imgFront": "https://i.pinimg.com/564x/87/14/1e/87141e983fab7f72c8c443295ee0dbdc.jpg"
    },
    {
        "index": 92,
        "title": "",
        "imgBack": "https://i.pinimg.com/564x/2d/8a/3c/2d8a3c3c790ec17f96d12be6fae0f12f.jpg",
        "imgFront": "https://i.pinimg.com/564x/db/c8/dd/dbc8dd4c05a96c9535f18b5889aa6d9f.jpg"
    },
    {
        "index": 91,
        "title": "Hoodie",
        "imgBack": "https://i.pinimg.com/564x/25/a8/7b/25a87bd9a71a1fcc69215e5992a42cc9.jpg",
        "imgFront": "https://i.pinimg.com/564x/85/54/b4/8554b4d5835f235a507532d73dc6dc3c.jpg"
    },
    {
        "index": 62,
        "title": "Đồ Ngủ",
        "imgBack": "https://i.pinimg.com/564x/12/4b/6b/124b6b140ae1dac91f74d771501a88b1.jpg",
        "imgFront": "https://i.pinimg.com/564x/e4/b0/6f/e4b06f788923832d885606180b1ee01b.jpg"
    },
    {
        "index": 61,
        "title": "Quý Ông & Quý Bà",
        "imgBack": "https://i.pinimg.com/564x/0e/4d/df/0e4ddf64a4401be021c9071623a19b47.jpg",
        "imgFront": "https://i.pinimg.com/564x/05/09/6f/05096f0df0ebc7004e7b2a57f595d9fb.jpg"
    },
    {
        "index": 59,
        "title": "Buồn Ngủ",
        "imgBack": "https://i.pinimg.com/564x/84/88/b6/8488b6a8e9b893de891f329213600991.jpg",
        "imgFront": "https://i.pinimg.com/564x/64/4d/45/644d45c0c5f750836e9bd88b7333a977.jpg"
    },
    {
        "index": 15,
        "title": "",
        "imgBack": "https://i.pinimg.com/564x/f7/fa/12/f7fa12ba891c8b33d16772e2b3076fb7.jpg",
        "imgFront": "https://i.pinimg.com/564x/d9/fe/c3/d9fec30b93a8cc04372bdf8cfae89e08.jpg"
    },
    {
        "index": 105,
        "title": "",
        "imgBack": "https://i.pinimg.com/564x/61/84/b9/6184b9c43f241893ac3a03f1b2610079.jpg",
        "imgFront": "https://i.pinimg.com/564x/7a/3d/90/7a3d9077b1f4a1182da9949731d3c850.jpg"
    },
    {
        "index": 32,
        "title": "",
        "imgBack": "https://i.pinimg.com/564x/3b/02/2d/3b022ddd8f24b88f61c3e0210545c360.jpg",
        "imgFront": "https://i.pinimg.com/564x/a1/b0/1b/a1b01b16c49f87707b519d05298111ea.jpg"
    },
    {
        "index": 57,
        "title": "",
        "imgBack": "https://i.pinimg.com/564x/5d/38/9d/5d389d5a630e3200e4db088a969d6d94.jpg",
        "imgFront": "https://i.pinimg.com/564x/22/28/c9/2228c910b038486c9bd612e7741945e4.jpg"
    },
    {
        "index": 51,
        "title": "",
        "imgBack": "https://i.pinimg.com/564x/5f/d6/21/5fd6214cb4246375e2f1e02cb1f7d40d.jpg",
        "imgFront": "https://i.pinimg.com/564x/e7/96/20/e796205890d0604b9e8598ae05c1f68c.jpg"
    },
    {
        "index": 26,
        "title": "",
        "imgBack": "https://i.pinimg.com/564x/9e/05/c9/9e05c9117039636d524210e29e7b8664.jpg",
        "imgFront": "https://i.pinimg.com/564x/f1/ae/de/f1aede0d875c9689509000d9d52d55de.jpg"
    },
    {
        "index": 23,
        "title": "",
        "imgBack": "https://i.pinimg.com/564x/15/24/94/15249460dbc89cfe0d50a926cf3affe9.jpg",
        "imgFront": "https://i.pinimg.com/564x/26/0f/18/260f18c31193c6e1a91b99689e913ae7.jpg"
    },
    {
        "index": 24,
        "title": "",
        "imgBack": "https://i.pinimg.com/564x/94/92/e4/9492e46bc750224b60f670588184bdcc.jpg",
        "imgFront": "https://i.pinimg.com/564x/f7/cb/b0/f7cbb0f01afc7e8674e0db59852f3ea1.jpg"
    },
    {
        "index": 21,
        "title": "",
        "imgBack": "https://i.pinimg.com/564x/11/81/b4/1181b4259a4871518d172faa7d4a2189.jpg",
        "imgFront": "https://i.pinimg.com/564x/ab/d0/d3/abd0d3378319810781734572ae97312a.jpg"
    }
]



let countt = collections.length;
let pureCounterEl = document.querySelector('.cpl-img');
pureCounterEl.setAttribute('data-purecounter-end', countt);
const el = document.getElementById("list-imgcpl")
const sortedCollections = collections.sort((a, b) => a.index - b.index);
for (let i = 0; i < collections.length; i++) {
    const title = collections[i].title ? `Bộ sưu tập số ${collections[i].index} - ${collections[i].title}` : `Bộ sưu tập số ${collections[i].index}`;
    el.innerHTML +=
        `<div class='col-lg-4 col-md-6 portfolio-item filter-cpl'>
                  <div class='portfolio-wrap'>
                    <img class='img-fluid img-back' src='${collections[i].imgBack}' alt='' title='${title}'>
                    <img class='img-fluid img-front' src='${collections[i].imgFront}' alt='' title='${title}'>
                  </div>
                </div>`;
}