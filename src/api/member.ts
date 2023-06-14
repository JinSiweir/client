const Api = {
  queryOrderSoverseas: '',
};

export const queryOrderSoverseas = (params: any) => {
  console.log(Api.queryOrderSoverseas, params);

  const data = [
    {
      id: 117,
      user_id: 2108,
      seller_id: 2106,
      order_code: '20230530-16391260',
      total: '$265.98',
      order_date: '16:39:12 30-05-2023',
      payment_status: 'paid',
      delivery_status: 'delivered',
      pickup_status: 'picked',
      name: 'SimpliSafe Wireless Outdoor Security Camera,1080p, Motion only',
      thumbnail_img: 'https://m.media-amazon.com/images/I/5154TF+P5EL._AC_SL1500_.jpg',
      shipping_cost: '$0.00',
      profit_amount: '$75.99',
      pickup_amount: '$189.99',
      pickup_amount_nogsh: 189.99,
      fuhao: '$',
      kuaidicode: 'CO20230538949319',
    },
    {
      id: 191,
      user_id: 2203,
      seller_id: 2231,
      order_code: '20230530-16391260',
      total: '$122.98',
      order_date: '16:39:12 30-05-2023',
      payment_status: 'paid',
      delivery_status: 'delivered',
      pickup_status: 'picked',
      order_detail: [
        {
          id: 146,
          product_id: 19278,
          seller_id: 2106,
          quantity: 1,
          price: '$122.98',
          product: {
            id: 19278,
            name: 'Haha Wireless Outdoor Security Camera,1080p, Motion only',
            thumbnail_img: 'https://m.media-amazon.com/images/I/5154TF+P5EL._AC_SL1500_.jpg',
            product_translations: [],
            taxes: [],
          },
        },
      ],
      shipping_cost: '$0.00',
      profit_amount: '$20.99',
      pickup_amount: '$20.99',
      pickup_amount_nogsh: 20.99,
      fuhao: '$',
      kuaidicode: 'CO20230538949319',
    },
  ];

  return new Promise<any>((resolve) => {
    resolve({
      list: data,
      total: 0,
    });
  });
};
