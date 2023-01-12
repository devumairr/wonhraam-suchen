import React from 'react';
import sidebarImg1 from '../../public/assets/images/sidebarImg1.png';
import calender from '../../public/assets/images/calender.png';
import PostPreview from '../PostPreview';
interface IProps {}

const Sidebar: React.FC<IProps> = () => {
  const postDetails = {
    id: 1,
    title: 'Heading',
    date: 'Saturday 12, 2021',
    previewText: "Lorem Ipsum is simply dummy text the printing an typesetting industry. Lorem Ipsum has been the industry's standard dummy...",
    imgUrl: sidebarImg1,
    calenderImg: calender,
  };

  return (
    <div className='bg-[#f6f6f6]'>
      <h4 className='text-h4 sm:text-h4-sm md:text-h4-md lg:text-h4-lg p-7 pb-0 font-bold'>Latest Posts</h4>
      {Array.from({ length: 4 }).map((_, index) => {
        return <PostPreview key={index} {...(index === 3 ? { ...postDetails, hideBottomDivider: true } : { ...postDetails })} />;
      })}
    </div>
  );
};

export default Sidebar;
