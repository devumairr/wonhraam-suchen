import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const Button = dynamic(() => import('../../components/Button'), {
  suspense: true,
});
const RangeInput = dynamic(() => import('../../components/RangeInput'), {
  suspense: true,
});

interface IProps {}

const FindSection: React.FC<IProps> = () => {
  const [searchType, setSeachType] = useState('sale');

  return (
    <section className='max-w-7xl mx-auto relative -mt-32'>
      <div className=' w-max mx-auto rounded-t-2xl bg-white p-1 pb-0'>
        <button
          onClick={() => setSeachType('rent')}
          className={`${
            searchType === 'rent' ? 'active-btn' : ''
          } px-7 py-2 rounded-t-2xl`}
        >
          For Rent
        </button>
        <button
          onClick={() => setSeachType('sale')}
          className={`${
            searchType === 'sale' ? 'active-btn' : ''
          } px-7 py-2  rounded-t-2xl`}
        >
          For Sale
        </button>
      </div>
      <div style={{border: '1px solid #EBEBEB'}} className='mw-full mx-auto py-8  bg-white'>
        <div className='max-w-3xl mx-auto px-5'>
          <h2 className='text-h1 font-bold'>Find real estate</h2>
          <div className='inputs-container grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <div className=' input-group'>
                <label htmlFor='select-place'>Place</label>
                <select
                  name='select-place'
                  id='select-place'
                  placeholder='Search Place'
                >
                  <option value='0'>0</option>
                  <option value='1'>1</option>
                  <option value='2'>2</option>
                </select>
              </div>
              <RangeInput
                label='Price Range'
                placeholder1='$500'
                placeholder2='$1000'
              />
            </div>

            <div>
              <RangeInput label='Space' placeholder1='50' placeholder2='500' />
              <RangeInput label='Rooms' placeholder1='50' placeholder2='500' />
            </div>
          </div>
          <Button fullWidth text='Search' />
        </div>
      </div>
    </section>
  );
};

export default FindSection;
