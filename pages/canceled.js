import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { BsBagXFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';

const Canceled = () => {
  const { setShowCart } = useStateContext();

  return (
    <div className="cancel-wrapper">
      <Head>
        <title>Order Canceled - JS Mastery Store</title>
      </Head>
      <div className="cancel">
        <p className="icon">
          <BsBagXFill />
        </p>
        <h2>Payment Canceled</h2>
        <p className="email-msg">Your transaction was not completed and you have not been charged.</p>
        <p className="description">
          Forgot to add something or need more time? Your cart items are still saved.
          <br />
          If you encountered any problems during payment, please reach out to
          <a className="email" href="mailto:order@example.com">
            order@example.com
          </a>
        </p>
        <div className="btn-container" style={{ display: 'flex', flexDirection: 'column', gap: '15px', alignItems: 'center', width: '100%', maxWidth: '400px', marginTop: '30px' }}>
          <button 
            type="button" 
            className="btn" 
            style={{ margin: 0 }}
            onClick={() => setShowCart(true)}
          >
            Review Cart
          </button>
          <Link href="/">
            <button 
              type="button" 
              className="btn" 
              style={{ margin: 0, backgroundColor: '#324d67' }}
            >
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Canceled;
