const phones = (() => {
    const products = [
        {
            img: './assets/img/product/ph1.png',
            name: 'Nhẫn Bạc STYLE By LUX XM00H000047',
            price: '695.000 đ',
            markerList: ['hot', 'new'],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph2.png',
            name: 'Nhẫn Vàng 18K đính đá Ruby LUX Sắc Xuân RBXMY000832',
            price: '10.650.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph3.png',
            name: 'Nhẫn vàng đính đá STYLE By LUX XM00X000009',
            price: '765.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph4.png',
            name: 'Nhẫn cưới Kim cương Vàng 18K LUX Vàng Son DD00Y000883',
            price: '8.450.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph5.png',
            name: 'Nhẫn Kim Cương Vàng Trắng 18K B10141',
            price: '21.950.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph6.png',
            name: 'Nhẫn vàng đính đá PNJSilver The Language of Flowers XMXMY000020',
            price: '950.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph7.png',
            name: 'Nhẫn vàng đính đá Disney|LUX Minnie ZTXMH000003',
            price: '1.750.000 đ',
            markerList: ['hot', 'new'],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph8.png',
            name: 'Nhẫn bạc PNJSilver Friendzone Breaker NHXMK000007',
            price: '550.000đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph9.png',
            name: 'Nhẫn Kim Cương Vàng Trắng 18K LUX DDDDC000630',
            price: '48.950.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph10.png',
            name: 'Nhẫn Vàng 18K đính đá CZ LUX XM00Y000837',
            price: '7.100.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph11.png',
            name: 'Nhẫn bạc đính ngọc trai PNJSilver Her Time PFXMK000023',
            price: '850.000đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph12.png',
            name: 'Nhẫn Vàng 18K đính đá CZ LUX XM00Y000841',
            price: '2.950.000 đ',
            markerList: ['hot', 'new'],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph13.png',
            name: 'Nhẫn Vàng trắng 14K đính đá Ruby LUX Phượng Hoàng RBXMW000103',
            price: '7.550.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph14.png',
            name: 'Nhẫn Vàng 10K đính đá ECZ LUX Mystery XM00C000003',
            price: '2.490.000đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph15.png',
            name: 'Nhẫn nam Vàng 10K đính đá ECZ LUX XMXMC000014',
            price: '8.950.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph16.png',
            name: 'Nhẫn Vàng trắng 10K đính đá ECZ LUX Xmas ZTMXW000015',
            price: '2.890.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph17.png',
            name: 'Nhẫn Vàng trắng 14K đính đá Ruby LUX Phượng Hoàng RBXMW000103',
            price: '7.550.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph18.png',
            name: 'Nhẫn Vàng 10K đính đá ECZ LUX Mystery XM00C000003',
            price: '2.490.000đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph19.png',
            name: 'Nhẫn nam Vàng 10K đính đá ECZ LUX XMXMC000014',
            price: '8.950.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph20.png',
            name: 'Nhẫn Vàng trắng 10K đính đá ECZ LUX Xmas ZTMXW000015',
            price: '2.890.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        //sdasd
        {
            img: './assets/img/product/ph21.png',
            name: 'Nhẫn Bạc STYLE By LUX XM00H000047',
            price: '695.000 đ',
            markerList: ['hot', 'new'],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph22.png',
            name: 'Nhẫn Vàng 18K đính đá Ruby LUX Sắc Xuân RBXMY000832',
            price: '10.650.000 đ',
            markerList: ['hot', 'new'],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph23.png',
            name: 'Nhẫn bạc đính đá STYLE By LUX XM00X000009',
            price: '765.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph24.png',
            name: 'Nhẫn cưới Kim cương Vàng 18K LUX Vàng Son DD00Y000883',
            price: '8.450.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph25.png',
            name: 'Nhẫn Kim Cương Vàng Trắng 18K B10141',
            price: '21.950.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph26.png',
            name: 'Nhẫn vàng đính đá PNJSilver The Language of Flowers XMXMY000020',
            price: '950.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph27.png',
            name: 'Nhẫn vàng đính đá Disney|LUX Minnie ZTXMH000003',
            price: '1.750.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph28.png',
            name: 'Nhẫn vàng PNJSilver Friendzone Breaker NHXMK000007',
            price: '550.000đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph29.png',
            name: 'Nhẫn Kim Cương Vàng Trắng 18K LUX DDDDC000630',
            price: '48.950.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph30.png',
            name: 'Nhẫn Vàng 18K đính đá CZ LUX XM00Y000837',
            price: '7.100.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph31.png',
            name: 'Nhẫn vàng đính ngọc trai PNJSilver Her Time PFXMK000023',
            price: '850.000đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph32.png',
            name: 'Nhẫn Vàng 18K đính đá CZ LUX XM00Y000841',
            price: '2.950.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph33.png',
            name: 'Nhẫn Vàng trắng 14K đính đá Ruby LUX Phượng Hoàng RBXMW000103',
            price: '7.550.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph34.png',
            name: 'Nhẫn Vàng 10K đính đá ECZ LUX Mystery XM00C000003',
            price: '2.490.000đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph35.png',
            name: 'Nhẫn nam Vàng 10K đính đá ECZ LUX XMXMC000014',
            price: '8.950.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph36.png',
            name: 'Nhẫn Vàng trắng 10K đính đá ECZ LUX Xmas ZTMXW000015',
            price: '2.890.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph37.png',
            name: 'Nhẫn Vàng trắng 14K đính đá Ruby LUX Phượng Hoàng RBXMW000103',
            price: '7.550.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph38.png',
            name: 'Nhẫn Vàng 10K đính đá ECZ LUX Mystery XM00C000003',
            price: '2.490.000đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph39.png',
            name: 'Nhẫn nam Vàng 10K đính đá ECZ LUX XMXMC000014',
            price: '8.950.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph40.png',
            name: 'Nhẫn Vàng trắng 10K đính đá ECZ LUX Xmas ZTMXW000015',
            price: '2.890.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph1.png',
            name: 'Nhẫn Bạc STYLE By LUX XM00H000047',
            price: '695.000 đ',
            markerList: ['hot', 'new'],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph2.png',
            name: 'Nhẫn Vàng 18K đính đá Ruby LUX Sắc Xuân RBXMY000832',
            price: '10.650.000 đ',
            markerList: ['hot', 'new'],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph3.png',
            name: 'Nhẫn bạc đính đá STYLE By LUX XM00X000009',
            price: '765.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph4.png',
            name: 'Nhẫn cưới Kim cương Vàng 18K LUX Vàng Son DD00Y000883',
            price: '8.450.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph5.png',
            name: 'Nhẫn Kim Cương Vàng Trắng 18K B10141',
            price: '21.950.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph6.png',
            name: 'Nhẫn bạc đính đá PNJSilver The Language of Flowers XMXMY000020',
            price: '950.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph7.png',
            name: 'Nhẫn bạc đính đá Disney|LUX Minnie ZTXMH000003',
            price: '1.750.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph8.png',
            name: 'Nhẫn bạc PNJSilver Friendzone Breaker NHXMK000007',
            price: '550.000đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph9.png',
            name: 'Nhẫn Kim Cương Vàng Trắng 18K LUX DDDDC000630',
            price: '48.950.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph10.png',
            name: 'Nhẫn Vàng 18K đính đá CZ LUX XM00Y000837',
            price: '7.100.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph11.png',
            name: 'Nhẫn bạc đính ngọc trai PNJSilver Her Time PFXMK000023',
            price: '850.000đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph12.png',
            name: 'Nhẫn Vàng 18K đính đá CZ LUX XM00Y000841',
            price: '2.950.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph13.png',
            name: 'Nhẫn Vàng trắng 14K đính đá Ruby LUX Phượng Hoàng RBXMW000103',
            price: '7.550.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph14.png',
            name: 'Nhẫn Vàng 10K đính đá ECZ LUX Mystery XM00C000003',
            price: '2.490.000đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph15.png',
            name: 'Nhẫn nam Vàng 10K đính đá ECZ LUX XMXMC000014',
            price: '8.950.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph16.png',
            name: 'Nhẫn Vàng trắng 10K đính đá ECZ LUX Xmas ZTMXW000015',
            price: '2.890.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph17.png',
            name: 'Nhẫn Vàng trắng 14K đính đá Ruby LUX Phượng Hoàng RBXMW000103',
            price: '7.550.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph18.png',
            name: 'Nhẫn Vàng 10K đính đá ECZ LUX Mystery XM00C000003',
            price: '2.490.000đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph19.png',
            name: 'Nhẫn nam Vàng 10K đính đá ECZ LUX XMXMC000014',
            price: '8.950.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph20.png',
            name: 'Nhẫn Vàng trắng 10K đính đá ECZ LUX Xmas ZTMXW000015',
            price: '2.890.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph21.png',
            name: 'Nhẫn Bạc STYLE By LUX XM00H000047',
            price: '695.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph22.png',
            name: 'Nhẫn Vàng 18K đính đá Ruby LUX Sắc Xuân RBXMY000832',
            price: '10.650.000 đ',
            markerList: ['hot', 'new'],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph23.png',
            name: 'Nhẫn bạc đính đá STYLE By LUX XM00X000009',
            price: '765.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph24.png',
            name: 'Nhẫn cưới Kim cương Vàng 18K LUX Vàng Son DD00Y000883',
            price: '8.450.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph25.png',
            name: 'Nhẫn Kim Cương Vàng Trắng 18K B10141',
            price: '21.950.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph26.png',
            name: 'Nhẫn bạc đính đá PNJSilver The Language of Flowers XMXMY000020',
            price: '950.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph27.png',
            name: 'Nhẫn bạc đính đá Disney|LUX Minnie ZTXMH000003',
            price: '1.750.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph28.png',
            name: 'Nhẫn bạc PNJSilver Friendzone Breaker NHXMK000007',
            price: '550.000đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph29.png',
            name: 'Nhẫn Kim Cương Vàng Trắng 18K LUX DDDDC000630',
            price: '48.950.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph30.png',
            name: 'Nhẫn Vàng 18K đính đá CZ LUX XM00Y000837',
            price: '7.100.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph31.png',
            name: 'Nhẫn bạc đính ngọc trai PNJSilver Her Time PFXMK000023',
            price: '850.000đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph32.png',
            name: 'Nhẫn Vàng 18K đính đá CZ LUX XM00Y000841',
            price: '2.950.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph33.png',
            name: 'Nhẫn Vàng trắng 14K đính đá Ruby LUX Phượng Hoàng RBXMW000103',
            price: '7.550.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph34.png',
            name: 'Nhẫn Vàng 10K đính đá ECZ LUX Mystery XM00C000003',
            price: '2.490.000đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph35.png',
            name: 'Nhẫn nam Vàng 10K đính đá ECZ LUX XMXMC000014',
            price: '8.950.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph36.png',
            name: 'Nhẫn Vàng trắng 10K đính đá ECZ LUX Xmas ZTMXW000015',
            price: '2.890.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph37.png',
            name: 'Nhẫn Vàng trắng 14K đính đá Ruby LUX Phượng Hoàng RBXMW000103',
            price: '7.550.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph38.png',
            name: 'Nhẫn Vàng 10K đính đá ECZ LUX Mystery XM00C000003',
            price: '2.490.000đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph39.png',
            name: 'Nhẫn nam Vàng 10K đính đá ECZ LUX XMXMC000014',
            price: '8.950.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
        {
            img: './assets/img/product/ph40.png',
            name: 'Nhẫn Vàng trắng 10K đính đá ECZ LUX Xmas ZTMXW000015',
            price: '2.890.000 đ',
            markerList: [],
            linkProduct: 'product__de.html',
        },
    ];

    return {
        render() {
            const htmlPhone = products.map(product => {
                return `
                <div class="col l-3 l-4-m m-4 c-6 container__product">
                    <div class="container-product__item">
                        <div class="container-product__item-heading">
                            <img class="container-product__item-img" src="${product.img}">
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
                    </div>
                </div>
                `;
            });
            document.querySelector('.phone-products').innerHTML = htmlPhone.join('');
        },
        init() {
            this.render();
        }
    }
})();
phones.init();