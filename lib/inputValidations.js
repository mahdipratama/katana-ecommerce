export const name_validation = {
  name: 'name',
  label: 'name',
  type: 'text',
  id: 'name',
  placeholder: 'Name',
  validation: {
    required: {
      value: true,
      message: 'Please input your name',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
};

export const email_validation = {
  name: 'email',
  label: 'email address',
  type: 'email',
  id: 'email',
  placeholder: 'Email',
  validation: {
    required: {
      value: true,
      message: 'Please input your email',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'email is not valid',
    },
  },
};

export const city_validation = {
  name: 'city',
  label: 'City',
  type: 'text',
  id: 'city',
  placeholder: 'City',
  validation: {
    required: {
      value: true,
      message: 'Please input your city',
    },
  },
};

export const postal_validation = {
  name: 'postal',
  label: 'Postal Code',
  type: 'number',
  id: 'postal',
  placeholder: 'Postal Code',
  validation: {
    required: {
      value: true,
      message: 'Postal code is required',
    },
  },
};

export const address_validation = {
  name: 'address',
  label: 'Address',
  type: 'text',
  id: 'address',
  placeholder: 'Address',
  validation: {
    required: {
      value: true,
      message: 'Please input your address',
    },
  },
};

export const country_validation = {
  name: 'country',
  label: 'Country',
  type: 'text',
  id: 'country',
  placeholder: 'country',
  validation: {
    required: {
      value: true,
      message: 'Please input your country',
    },
  },
};
