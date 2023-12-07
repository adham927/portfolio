import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import skills from './SkillsData'
import SkillCard from './SkillCard';
import RightArrowIcon from '../assets/images/right-arrow.png';
import LeftArrowIcon from '../assets/images/left-arrow.png';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md'
import { ScrollMenu } from "react-horizontal-scrolling-menu";



// One item component
// selected prop will be passed
const skillItem = ({ text }) => {
  return <div>{text}</div>;
};

// All items component
// Important! add unique key
export const SkillMenu = (skillsData) =>
  skillsData.map((item) => {
    const { name } = item;

    return <skillItem text={name} key={name} />;
  });

  const Arrow = ({ text, className }) => {
    return <div className={className}>{text}</div>;
  };
  
  const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
  const ArrowRight = Arrow({ text: ">", className: "arrow-next" });
  
  const HorizontalScrollBar = () => {
  
    const menu = SkillMenu(skills);
  
    return (
      <div className="App">
        <ScrollMenu
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
        >
        {menu}
        </ScrollMenu>
      </div>
    );
  };
  
  export default HorizontalScrollBar;