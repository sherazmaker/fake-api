// Import the express and fetch libraries
const express = require("express");
const axios = require("axios");

const app = express();

app.post("/v3/public/oauth/token", (req, res) => {
  result = {
    access_token:
      "12345678.O1zLuwveeKjpIqCQFfmR-PaMMpBmagH6DljRAkK9qt05OtRKiANJOyZlMx3WQ_o2FdComQGuoiAWy3dxyGI4Ke_76PR",
    token_type: "Bearer",
    expires_in: 3600,
    refresh_token:
      "12345678.JNGIJtvLmwfDMhlYoOJl8aLR1BWottyHC6yhNcET-eC7RogSR5e1GTIXGrgrelWZalvh3YvvyLfKYYqvymd-u37Sjtx",
  };

  res.send(JSON.stringify(result));
});

// GET SHOP LISTING
app.get(`/v3/application/shops/987654321/listings`, (req, res) => {
  result = {
    listing_id: 1,
    user_id: 1,
    shop_id: 1,
    title: "string",
    description: "string",
    state: "active",
    creation_timestamp: 946684800,
    ending_timestamp: 946684800,
    original_creation_timestamp: 946684800,
    last_modified_timestamp: 946684800,
    state_timestamp: 946684800,
    quantity: 0,
    shop_section_id: 1,
    featured_rank: 0,
    url: "string",
    num_favorers: 0,
    non_taxable: true,
    is_customizable: true,
    is_personalizable: true,
    personalization_is_required: true,
    personalization_char_count_max: 0,
    personalization_instructions: "string",
    listing_type: true,
    tags: ["string"],
    materials: ["string"],
    shipping_profile_id: 1,
    processing_min: 0,
    processing_max: 0,
    who_made: "i_did",
    when_made: "made_to_order",
    is_supply: true,
    item_weight: 0,
    item_weight_unit: "oz",
    item_length: 0,
    item_width: 0,
    item_height: 0,
    item_dimensions_unit: "in",
    is_private: true,
    style: ["string"],
    file_data: "string",
    has_variations: true,
    should_auto_renew: true,
    language: "string",
    price: {
      amount: 0,
      divisor: 0,
      currency_code: "string",
    },
    taxonomy_id: 0,
  };
  res.send(JSON.stringify(result));
});

//GET LISTING PORDUCT
app.get(`/v3/application/shops/987654321/receipts`, (req, res) => {
  result = {
    receipt_id: 1,
    receipt_type: 0,
    seller_user_id: 1,
    seller_email: "user@example.com",
    buyer_user_id: 1,
    buyer_email: "user@example.com",
    name: "string",
    first_line: "string",
    second_line: "string",
    city: "string",
    state: "string",
    zip: "string",
    status: "paid",
    formatted_address: "string",
    country_iso: "string",
    payment_method: "string",
    payment_email: "string",
    message_from_seller: "string",
    message_from_buyer: "string",
    message_from_payment: "string",
    is_paid: true,
    is_shipped: true,
    create_timestamp: 946684800,
    update_timestamp: 946684800,
    gift_message: "string",
    grandtotal: {
      amount: 0,
      divisor: 0,
      currency_code: "string",
    },
    subtotal: {
      amount: 0,
      divisor: 0,
      currency_code: "string",
    },
    total_price: {
      amount: 0,
      divisor: 0,
      currency_code: "string",
    },
    total_shipping_cost: {
      amount: 0,
      divisor: 0,
      currency_code: "string",
    },
    total_tax_cost: {
      amount: 0,
      divisor: 0,
      currency_code: "string",
    },
    total_vat_cost: {
      amount: 0,
      divisor: 0,
      currency_code: "string",
    },
    discount_amt: {
      amount: 0,
      divisor: 0,
      currency_code: "string",
    },
    gift_wrap_price: {
      amount: 0,
      divisor: 0,
      currency_code: "string",
    },
    shipments: [
      {
        receipt_shipping_id: 1,
        shipment_notification_timestamp: 946684800,
        carrier_name: "string",
        tracking_code: "string",
      },
    ],
    transactions: [
      {
        transaction_id: 1,
        title: "string",
        description: "string",
        seller_user_id: 1,
        buyer_user_id: 1,
        create_timestamp: 946684800,
        paid_timestamp: 946684800,
        shipped_timestamp: 946684800,
        quantity: 0,
        listing_image_id: 1,
        receipt_id: 1,
        is_digital: true,
        file_data: "string",
        listing_id: 1,
        transaction_type: "string",
        product_id: 1,
        sku: "string",
        price: {
          amount: 0,
          divisor: 0,
          currency_code: "string",
        },
        shipping_cost: {
          amount: 0,
          divisor: 0,
          currency_code: "string",
        },
        variations: [
          {
            property_id: 0,
            value_id: 0,
            formatted_name: "string",
            formatted_value: "string",
          },
        ],
        shipping_profile_id: 1,
        min_processing_days: 1,
        max_processing_days: 1,
        shipping_method: "string",
        shipping_upgrade: "string",
        expected_ship_date: 946684800,
      },
    ],
  };
  res.send(JSON.stringify(result));
});

const port = 4000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
