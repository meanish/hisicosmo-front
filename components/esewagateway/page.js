import React, { useEffect, useState } from 'react';
import CryptoJS from 'crypto-js';

const EsewaPayment = () => {
  const [totalAmount, setTotalAmount] = useState('100');
  const [transactionUuid, setTransactionUuid] = useState('');
  const [productCode, setProductCode] = useState('EPAYTEST');
  const [signature, setSignature] = useState('');
  const secret = '8gBm/:&EnhH.1/q';

  useEffect(() => {
    const generateSignature = () => {
      const currentTime = new Date();
      const formattedTime =
        currentTime.toISOString().slice(2, 10).replace(/-/g, '') +
        '-' +
        currentTime.getHours() +
        currentTime.getMinutes() +
        currentTime.getSeconds();

      setTransactionUuid(formattedTime);

      const message = `total_amount=${totalAmount},transaction_uuid=${formattedTime},product_code=${productCode}`;
      const hash = CryptoJS.HmacSHA256(message, secret);
      const hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

      setSignature(hashInBase64);
    };

    generateSignature(); // Run once on component mount and whenever dependencies change
  }, [totalAmount, productCode]);

  const handleSubmit = (e) => {
    e.preventDefault();

    e.target.submit();
  };

  return (
    <form
      action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
      method="POST"
      onSubmit={handleSubmit}
      target="_blank"
    >
      <table>
        <tbody>


          <tr>
            <td>
              <input
                id="amount"
                name="amount"
                value="100"
                className="form"
                required type="hidden"
              
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
                required type="hidden"
              
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
                required type="hidden"
              
                onChange={(e) => setTotalAmount(e.target.value)}
              />
            </td>
          </tr>

          <tr>
            <td>
              <input
                id="transaction_uuid"
                name="transaction_uuid"
                value={transactionUuid}
                className="form"
                required type="hidden"
              
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
                required type="hidden"
              
                onChange={(e) => setProductCode(e.target.value)}
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
                required type="hidden"
              
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
                required type="hidden"
              
              />
            </td>
          </tr>

          <tr>
            <td>
              <input
                id="success_url"
                name="success_url"
                value="https://vumi-front.vercel.app/"
                className="form"
                required type="hidden"
              
              />
            </td>
          </tr>

          <tr>
            <td>
              <input
                id="failure_url"
                name="failure_url"
                value="https://facebook.com"
                className="form"
                required type="hidden"
              
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
                required type="hidden"
              
              />
            </td>
          </tr>

          <tr>
            <td>
              <input
                id="signature"
                name="signature"
                value={signature}
                className="form"
                required type="hidden"
              
              />
            </td>
          </tr>

          <tr>
            <td>
              <input
                id="secret"
                name="secret"
                value={secret}
                className="form"
                required type="hidden"
              
                readOnly
              />
            </td>
          </tr>
        </tbody>
      </table>
      <input
        value="Pay with eSewa"
        type="submit"
        className="button"
        style={{
          display: 'block',
          backgroundColor: '#60bb46',
          cursor: 'pointer',
          color: '#fff',
          border: 'none',
          padding: '5px 10px',
        }}
      />
    </form>
  );
};

export default EsewaPayment;
