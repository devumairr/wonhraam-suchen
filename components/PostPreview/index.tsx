import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface IProps {
  id: number;
  title: string;
  date: string;
  previewText: string;
  imgUrl: StaticImageData;
  calenderImg: StaticImageData;
  hideBottomDivider?: boolean;
}

const PostPreview: React.FC<IProps> = ({ id, title, date, previewText, imgUrl, calenderImg, hideBottomDivider }) => {
  return (
    <>
      <div className='p-6'>
        <h6 className='text-h5 sm:text-h5-sm md:text-h5-md lg:text-h5-lg font-bold'>{title}</h6>
        <div className='flex items-center'>
          <Image className='object-none' src={calenderImg} alt='date-icon' width={40} height={40} />
          <p className='gradientText'>{date}</p>
        </div>
        <p className='!text-xs mb-3 text-lightBlack'>{previewText}</p>
        <div className='relative h-[200px] rounded-xl overflow-hidden'>
          <Image src={imgUrl} alt={title} fill className=' object-cover' />
        </div>
      </div>
      {!hideBottomDivider && <div className='divider'></div>}
    </>
  );
};

export default PostPreview;
