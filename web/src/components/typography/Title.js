import React from 'react';
import { SectionTitleStyles } from '../../styles/typography/SectionTitleStyles';

export const SectionTitle = ({ children, tag, ...props }) => (
  <SectionTitleStyles as={tag} {...props}>
    {children}
  </SectionTitleStyles>
);
