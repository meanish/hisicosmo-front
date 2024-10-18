import React, { useEffect, useState } from 'react';

const EsewaPayment = ({ props }) => {
  const { totalAmount, productCode } = props

  const secret = '8gBm/:&EnhH.1/q';




  const handleSubmit = (e) => {
    e.preventDefault();

    e.target.submit();
  };

  return (
    <form
      action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
      method="POST"
      onSubmit={handleSubmit}
      id="esewaForm"
    >
      <table>
        <tbody>


          <tr>
            <td>
              <input
                id="amount"
                name="amount"
                value={totalAmount}
                className="form"
                required
                type="hidden"
              />
            </td>
          </tr>

          <tr>
            <td>
              <input
                id="tax_amount"
                name="tax_amount"
                value="0"
                className="form"
                required
                type="hidden"


              />
            </td>
          </tr>

          <tr>
            <td>
              <input
                id="total_amount"
                name="total_amount"
                value={totalAmount}
                className="form"
                required
                type="hidden"

              />
            </td>
          </tr>

          <tr>
            <td>
              <input
                id="transaction_uuid"
                name="transaction_uuid"
                value=""
                className="form"
                required
                type="hidden"


              />
            </td>
          </tr>

          <tr>
            <td>
              <input
                id="product_code"
                name="product_code"
                value={productCode}
                className="form"
                required
                type="hidden"


              />
            </td>
          </tr>

          <tr>
            <td>
              <input
                id="product_service_charge"
                name="product_service_charge"
                value="0"
                className="form"
                required
                type="hidden"


              />
            </td>
          </tr>

          <tr>
            <td>
              <input
                id="product_delivery_charge"
                name="product_delivery_charge"
                value="0"
                className="form"
                required
                type="hidden"


              />
            </td>
          </tr>

          <tr>
            <td>
              <input
                id="success_url"
                name="success_url"
                value=""
                className="form"
                required
                type="hidden"


              />
            </td>
          </tr>

          <tr>
            <td>
              <input
                id="failure_url"
                name="failure_url"
                value={`${process.env.NEXT_PUBLIC_HiSi_Server}/add_cart`}
                className="form"
                required
                type="hidden"


              />
            </td>
          </tr>

          <tr>
            <td>
              <input
                id="signed_field_names"
                name="signed_field_names"
                value="total_amount,transaction_uuid,product_code"
                className="form"
                required
                type="hidden"


              />
            </td>
          </tr>

          <tr>
            <td>
              <input
                id="signature"
                name="signature"
                value=""
                className="form"
                required
                type="hidden"


              />
            </td>
          </tr>

          <tr>
            <td>
              <input
                id="secret"
                name="secret"
                value={`${process.env.NEXT_PUBLIC_ESEWA_KEY}`}
                className="form"
                required
                type="hidden"

                readOnly
              />
            </td>
          </tr>
        </tbody>
      </table>

    </form>
  );
};

export default EsewaPayment;
