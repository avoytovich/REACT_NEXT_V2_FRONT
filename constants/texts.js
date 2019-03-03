module.exports = {
  cardholder: {
    profile: {
      title: 'Profile info',
      signature: 'Customer',
      email: 'may.murray@hotmail.com',
      phone: '+1 888-452-1505',
      addition: [
        {
          title: 'First Name',
          value: 'Anna',
        },
        {
          title: 'Surname',
          value: 'Doe',
        },
        {
          title: 'Date Of Birth',
          value: '11-17-1988',
        },
        {
          title: 'Address',
          value: '14350 60th St North Clearwater 33760',
        },
        {
          title: 'Carta Client ID',
          value: '123456789',
        },
      ],
    },
    card: {
      title: 'Card Information',
      addition: [
        {
          title: 'Card Pan',
          value: '*5467',
        },
        {
          title: 'Product Code',
          value: '001',
        },
        {
          title: 'Expiry Date',
          value: '04/2024',
        },
        {
          title: 'PIN Status',
          value: 'Unblocked',
        },
      ],
      extra_addition: [
        {
          title: 'HJ Card ID',
          value: '13000009',
        },
        {
          title: 'Card Status',
          value: 'Activated',
        },
      ],
    },
    jar: {
      title: 'Jar Information',
      addition: [
        {
          title: 'Balance',
          value: '£2000.00',
        },
        {
          title: 'Funds',
          value: '£1456.13',
        },
      ],
    },
  },
};
