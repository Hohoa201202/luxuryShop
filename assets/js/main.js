const phones = (() => {
    const products = [
        {
            img: './assets/img/product/h1.png',
            name: 'Nhẫn Vàng 18K đính đá Ruby LUX Phượng Hoàng L2298',
            price: '16.600.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
            linkGuarantee: '#',
        },
        {
            img: './assets/img/product/h2.png',
            name: 'Nhẫn Vàng 14K đính đá Topaz LUX L0987',
            price: '5.739.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
            linkGuarantee: '#',
        },
        {
            img: './assets/img/product/h3.png',
            name: 'Nhẫn Vàng 18K đính đá Citrine LUX Sắc Xuân L3248',
            price: '18.650.000 đ',
            markerList: ['hot', 'new'],
            linkProduct: 'product__de.html',
            linkGuarantee: '#',
        },
        {
            img: './assets/img/product/h4.png',
            name: 'Nhẫn Vàng 18K đính đá Citrine LUX L4246',
            price: '22.450.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
            linkGuarantee: '#',
        },
        {
            img: './assets/img/product/h5.png',
            name: 'Nhẫn Vàng 18K đính đá Ruby LUX RBXMY000306',
            price: '12.950.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
            linkGuarantee: '#',
        },
        {
            img: './assets/img/product/h6.png',
            name: 'Nhẫn Vàng 18k đính đá Ruby LUX RBXMY000994',
            price: '14.950.000 đ',
            markerList: ['hot', 'new'],
            linkProduct: 'product__de.html',
            linkGuarantee: '#',
        },
        {
            img: './assets/img/product/h7.png',
            name: 'Nhẫn Vàng 14K đính đá Ruby Snow White L8001',
            price: '8.750.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
            linkGuarantee: '#',
        },
        {
            img: './assets/img/product/h8.png',
            name: 'Nhẫn Vàng trắng 10K đính đá ECZ LUX Frozen L0923',
            price: '5.550.000đ',
            markerList: [],
            linkProduct: 'product__de.html',
            linkGuarantee: '#',
        },
        {
            img: './assets/img/product/h9.png',
            name: 'Nhẫn Bạc STYLE By LUX L0003',
            price: '8.950.000 đ',
            markerList: ['hot', 'new'],
            linkProduct: 'product__de.html',
            linkGuarantee: '#',
        },
        {
            img: './assets/img/product/h10.png',
            name: 'Nhẫn Vàng trắng 14K đính đá Sapphire LUX L0050',
            price: '12.100.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
            linkGuarantee: '#',
        },
    ];

    const banners = [
        {
            img: './assets/img/banner/banner1.jpg',
            link: '#'
        },
        {
            img: './assets/img/banner/banner2.jpg',
            link: '#'
        },
        {
            img: './assets/img/banner/banner3.jpg',
            link: '#'
        },
    ];

    let currentBanner = 0;
    const prevBtn = document.querySelector('.phone-banner__btn-prev');
    const nextBtn = document.querySelector('.phone-banner__btn-next');
    let firstBanner;
    let bannerPaginationBtns;
    let setTimeChangeBanner;

    return {
        render() {
            const htmlPhone = products.map(product => {
                return `
                <div class="col l-2-4 l-3-m m-4 c-6 container__product">
                    <div class="container-product__item">
                        <div class="container-product__item-heading">
                            <img class="container-product__item-img container-product__item-img-home" src="${product.img}">
                            <div class="container-product-guarantee">
                                <a href=${product.linkProduct} class="container-product__item-link">
                                    <div class="container-product-guarantee__heading">
                                        <i class="container-product-guarantee__heading-icon far fa-gem"></i>
                                        <h3 class="container-product-guarantee__heading-text">LUXURY Care</h3>
                                    </div>
                                    <ul class="container-product-guarantee__list">
                                        <li class="container-product-guarantee__item">BH sản phẩm vĩnh viễn.</li>
                                        <li class="container-product-guarantee__item">Đổi mới 15 ngày đầu tiên</li>
                                        <li class="container-product-guarantee__item">Hỗ trợ thu cũ đổi mới.</li>
                                        <li class="container-product-guarantee__item">Miễn phí vệ sinh sản phẩm trọn đời.</li>
                                    </ul>
                                </a>
                                <a href=${product.linkGuarantee} class="container-product-guarantee__btn">BH vĩnh viễn</a>
                            </div>
                        </div>
                        <div class="container-product__item-wrap">
                            <div class="container-product__item-info">
                                <a href=${product.linkProduct} class="container-product__item-name">
                                    ${product.name}
                                </a>
                            </div>
                            <div class="container-product__item-buy">
                                <span class="container-product__item-price">
                                    ${product.price}
                                </span>
                            </div>
                            <div class="container-product__item-buy">
                                <a href=${product.linkProduct} class="container-product__item-btn">MUA</a>
                            </div>
                        </div>
                        <ul class="container-product__item-gifts-list">
                            <li class="container-product__item-gift">
                                1. Tặng: 
                                <span class="container-product__item-gift--highlight">
                                    Voucher mua hàng trị giá 500K
                                </span>
                                khi mua từ 2 sản phẩm
                            </li>
                            <li class="container-product__item-gift">
                                2. Giảm: 
                                <span class="container-product__item-gift--highlight">
                                    200K
                                </span>
                                áp dụng khi thanh toán bằng  
                                <span class="container-product__item-gift--highlight">
                                    MasterCard
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                `;
            }).join('');

            document.querySelector('.phone-products').innerHTML = htmlPhone;

            const percent = 100 / banners.length;
            const bannerPaginations = [];
            const htmlBanner = banners.map((banner, index) => {
                let first = '';
                if (index === 0) {
                    first = 'banner--first';
                    bannerPaginations.push(`<div data-set="${percent*index}%" class="phone-banner-pagination__item active"></div>`);
                } else {
                    bannerPaginations.push(`<div data-set="-${percent*index}%" class="phone-banner-pagination__item"></div>`);
                }
                return `
                    <a href=${banner.link} class="banner__link ${first}" style="width: ${percent}%">
                        <img src=${banner.img} alt="Banner ${index + 1}" class="banner__img">
                    </a>
                `
            }, '').join('');

            document.querySelector('.phone-banner__list').innerHTML = htmlBanner;
            document.querySelector('.phone-banner__list').style.width = `${banners.length * 100}%`;
            document.querySelector('.phone-banner-pagination').innerHTML = bannerPaginations.join('');
        },
        handleBanner() {
            const _this = this;
            firstBanner = document.querySelector('.banner--first');
            bannerPaginationBtns = document.querySelectorAll('.phone-banner-pagination__item');

            prevBtn.onclick = () => {
                this.prevBanner();
                this.autoChangeBanner(true);
            }

            nextBtn.onclick = () => {
                this.nextBanner();
                this.autoChangeBanner(true);
            }

            bannerPaginationBtns.forEach(function(btn, index) {
                btn.onclick = () => {
                    currentBanner = index;
                    firstBanner.style.marginLeft = bannerPaginationBtns[currentBanner].dataset.set;
                    document.querySelector('.phone-banner-pagination__item.active').classList.remove('active');
                    bannerPaginationBtns[currentBanner].classList.add('active');
                    _this.autoChangeBanner(true);
                }
            });
        },
        prevBanner() {
            currentBanner -= 1;
            if (currentBanner < 0) {
                currentBanner = banners.length - 1;
            };
            firstBanner.style.marginLeft = bannerPaginationBtns[currentBanner].dataset.set;
            document.querySelector('.phone-banner-pagination__item.active').classList.remove('active');
            bannerPaginationBtns[currentBanner].classList.add('active');
        },
        nextBanner() {
            currentBanner += 1;
            if (currentBanner > banners.length - 1) {
                currentBanner = 0;
            };
            firstBanner.style.marginLeft = bannerPaginationBtns[currentBanner].dataset.set;
            document.querySelector('.phone-banner-pagination__item.active').classList.remove('active');
            bannerPaginationBtns[currentBanner].classList.add('active');
        },
        autoChangeBanner(isClick) {
            const _this = this;
            if (isClick) {
                clearInterval(setTimeChangeBanner);
                setTimeChangeBanner = setInterval(function() {
                    _this.nextBanner();
                }, 3000);
            } else {  
                setTimeChangeBanner = setInterval(function() {
                    _this.nextBanner();
                }, 3000);
            }
        },
        init() {
            this.render();
            this.handleBanner();
            this.autoChangeBanner();
        }
    }
})();

phones.init();