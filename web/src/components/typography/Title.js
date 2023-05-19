import React from 'react';
import { SectionTitleStyles } from '../../styles/typography/SectionTitleStyles';

export const Title = ({ children, tag, ...props }) => (
  <SectionTitleStyles as={tag} {...props}>
    {children}
  </SectionTitleStyles>
);
