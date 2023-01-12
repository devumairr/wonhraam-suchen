import React from 'react';

interface IProps {}

const FindTenatesAndBuyers: React.FC<IProps> = () => {
  return (
    <div className='mb-10'>
      <h2 className='text-h2 sm:text-h2-sm  md:text-h2-md lg:text-h2-lg mb-10'>
        Find Tenants or <span className='gradientText'> Buyers Quickly</span>
      </h2>
      <div className='bg-[#f6f6f6] rounded-2xl px-7 py-12'>
        <h4 className=' text-h4 sm:text-h4-sm md:text-h4-md lg:text-h4-lg pb-6'>Search your Local Area</h4>
        <p className='text-descriptionColor mb-6'>Place a real estate ad on immowelt.de now and your ad will automatically appear on immonet.de and on over 100 top portals such as Zeit Online, Spiegel Online, meinestadt.de and many more. So you can quickly find the right buyer or tenant.</p>

        <ul className='find-tanets-section-list'>
          <li>even more inquiries with your ad on immowelt.de and immonet.de</li>
          <li>47 million visits per month on immowelt.de and immonet.de(measurement Google Analytics, January 2017)</li>
          <li>Simple ad creation: your real estate ad is online in just a few steps </li>
          <li>secure payment: by invoice, direct debit, credit card, PayPal or IMMEDIATE transfer from €19.90 in</li>
        </ul>
      </div>
    </div>
  );
};

export default FindTenatesAndBuyers;
