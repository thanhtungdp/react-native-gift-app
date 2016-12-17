import {postFetch, getFetch, putFetch} from '../utils/fetch';
import {AUTH_API} from '../config';
const url = AUTH_API;

export function getUrl(path) {
    return url + '/' + path;
}

export function getCategories() {
    const images = [
        'http://sv1.upsieutoc.com/2016/12/07/christmas.png',
        'http://sv1.upsieutoc.com/2016/12/07/my-love.png',
        'http://sv1.upsieutoc.com/2016/12/07/birthday.png',
        'http://sv1.upsieutoc.com/2016/12/07/memory.png',
        'http://sv1.upsieutoc.com/2016/12/07/family.png',
        'http://sv1.upsieutoc.com/2016/12/07/teacher.png',
        'http://sv1.upsieutoc.com/2016/12/07/like-gift.png',
    ];

    const categories = [
        {_id: 1, featuredImage: images[0], name: "Christmas"},
        {_id: 2, featuredImage: images[1], name: "Your love"},
        {_id: 3, featuredImage: images[2], name: "Birthday"},
        {_id: 4, featuredImage: images[3], name: "Memory"},
        {_id: 5, featuredImage: images[4], name: "Family"},
        {_id: 6, featuredImage: images[5], name: "Teacher"},
        {_id: 7, featuredImage: images[6], name: "Any one", horizontal: true},
    ];
    return new Promise((resolve, reject) => {
        resolve({
            data: categories,
            pagination: {}
        });
    })
}

export function getProducts(categoryId) {
    const products = [
        {
            _id: 1, name: 'Bánh nhân đậu xanh sửa',
            featuredImage: 'http://sv1.upsieutoc.com/2016/12/10/cake-1.png',
            featuredImageGroup: [
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/15562a.png'},
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/2ab635.png'},
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/3fdf04.png'},
            ],
            price: 3000
        },
        {
            _id: 2, name: 'Gấu teddy beer',
            featuredImage: 'http://sv1.upsieutoc.com/2016/12/10/cake-2.png',
            featuredImageGroup: [
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/15562a.png'},
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/2ab635.png'},
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/3fdf04.png'},
            ],
            price: 3000
        },
        {
            _id: 3, name: 'Socola đậu phộng',
            featuredImage: 'http://sv1.upsieutoc.com/2016/12/10/cake-3.png',
            featuredImageGroup: [
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/15562a.png'},
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/2ab635.png'},
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/3fdf04.png'},
            ],
            price: 3000
        },
        {
            _id: 4, name: 'Áo thun ngắn tay',
            featuredImage: 'http://sv1.upsieutoc.com/2016/12/10/cake-4.png',
            featuredImageGroup: [
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/15562a.png'},
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/2ab635.png'},
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/3fdf04.png'},
            ],
            price: 3000
        },
        {
            _id: 5, name: 'Hoa vô thường',
            featuredImage: 'http://sv1.upsieutoc.com/2016/12/10/cake-5.png',
            featuredImageGroup: [
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/15562a.png'},
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/2ab635.png'},
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/3fdf04.png'},
            ],
            price: 3000
        },
        {
            _id: 6, name: 'Siêu bánh bộ 3',
            featuredImage: 'http://sv1.upsieutoc.com/2016/12/10/cake-6.png',
            featuredImageGroup: [
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/15562a.png'},
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/2ab635.png'},
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/3fdf04.png'},
            ],
            price: 3000
        },
        {
            _id: 7, name: 'Bánh nhân đậu xanh sửa',
            featuredImage: 'http://sv1.upsieutoc.com/2016/12/10/cake-1.png',
            featuredImageGroup: [
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/15562a.png'},
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/2ab635.png'},
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/3fdf04.png'},
            ],
            price: 3000
        },
        {
            _id: 8, name: 'Gấu teddy beer',
            featuredImage: 'http://sv1.upsieutoc.com/2016/12/10/cake-2.png',
            featuredImageGroup: [
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/15562a.png'},
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/2ab635.png'},
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/3fdf04.png'},
            ],
            price: 3000
        },
        {
            _id: 9, name: 'Socola đậu phộng',
            featuredImage: 'http://sv1.upsieutoc.com/2016/12/10/cake-3.png',
            featuredImageGroup: [
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/15562a.png'},
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/2ab635.png'},
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/3fdf04.png'},
            ],
            price: 3000
        },
        {
            _id: 10, name: 'Áo thun ngắn tay',
            featuredImage: 'http://sv1.upsieutoc.com/2016/12/10/cake-4.png',
            featuredImageGroup: [
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/15562a.png'},
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/2ab635.png'},
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/3fdf04.png'},
            ],
            price: 3000
        },
        {
            _id: 11, name: 'Hoa vô thường',
            featuredImage: 'http://sv1.upsieutoc.com/2016/12/10/cake-5.png',
            featuredImageGroup: [
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/15562a.png'},
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/2ab635.png'},
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/3fdf04.png'},
            ],
            price: 3000
        },
        {
            _id: 12, name: 'Siêu bánh bộ 3',
            featuredImage: 'http://sv1.upsieutoc.com/2016/12/10/cake-6.png',
            featuredImageGroup: [
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/15562a.png'},
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/2ab635.png'},
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/3fdf04.png'},
            ],
            price: 3000
        },

    ]
    return new Promise((resolve, reject) => {
        resolve({
            data: products,
            pagination: {}
        });
    })
}

export function getProduct(producId) {
    return new Promise((resolve, reject) => {
        const product = {
            _id: 1, name: 'Bánh nhân đậu xanh sửa',
            featuredImage: 'http://sv1.upsieutoc.com/2016/12/10/cake-1.png',
            featuredImageGroup: [
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/15562a.png'},
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/2ab635.png'},
                {originalUrl: 'http://sv1.upsieutoc.com/2016/12/07/3fdf04.png'},
            ],
            price: 3000
        }
        resolve(product);
    })
}

export function getOrders() {
    const orders = [
        {
            id: 1,
            name: 'Bánh nhân đậu xánh sửa',
            featuredImage: 'http://sv1.upsieutoc.com/2016/12/10/cake-1.png',
            price: 3000,
            success: true
        },
        {
            id: 2,
            name: 'Socala đậu phộng',
            featuredImage: 'http://sv1.upsieutoc.com/2016/12/10/cake-2.png',
            price: 3000,
            processing: true
        },
        {
            id: 3,
            name: 'Gấu teddy beer',
            featuredImage: 'http://sv1.upsieutoc.com/2016/12/10/cake-3.png',
            price: 3000,
            shipping: true
        },
        {id: 4, name: 'Áo thun ngắn tay', featuredImage: 'http://sv1.upsieutoc.com/2016/12/10/cake-4.png', price: 3000},
        {id: 5, name: 'Hoa vô thường', featuredImage: 'http://sv1.upsieutoc.com/2016/12/10/cake-5.png', price: 3000},
        {id: 6, name: 'Siêu bánh bộ 3', featuredImage: 'http://sv1.upsieutoc.com/2016/12/10/cake-6.png', price: 3000}
    ];
    return new Promise((resolve, reject) => {
        resolve({
            data: orders,
            pagination: {}
        })
    })
}

export function getOrder(orderId) {
    return new Promise((resolve, reject) => {
        resolve({
            name: 'Gửi tới ABC',
            products: [
                {
                    _id: 1,
                    name: 'Bánh nhân đậu xánh sửa',
                    featuredImage: 'http://sv1.upsieutoc.com/2016/12/10/cake-1.png',
                    price: 3000
                },
                {
                    _id: 2,
                    name: 'Socala đậu phộng',
                    featuredImage: 'http://sv1.upsieutoc.com/2016/12/10/cake-2.png',
                    price: 3000
                },
            ],
            receiverInfo: {
                name: 'Phan Thanh Tùng',
                phone: '0165 223 7832',
                address: '78 Trần Văn Kỷ, quận Bình THạnh, TP HCM',
                time: 'demo',
                message: 'Cô từ từ đi tới trước mặt anh, ngẩng đầu cùng với ánh mắt cực kỳ thuần khiết nhìn anh, chân thành mà ẩn hàm xin lỗi. Cô khom lưng thật thấp hướng anh bái một cái, cuối cùng cúi đầu nói: “Thật xin lỗi, em không thể cưới một người đàn ông mà em không yêu.”',
            },
            cardInfo: {
                number: '',
                expires: '',
                ccv: '',
                lastName: '',
                firstName: ''
            }
        })
    })
}

export default {
    getCategories,
    getProducts,
    getProduct,
    getOrders,
    getOrder
}