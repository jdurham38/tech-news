import React, { useState } from 'react';
import styled from '@emotion/styled';
import { CONFIG } from 'site.config';
import Modal from './Modal';
import PrivacyPolicy from './PrivacyPolicy'; 
import TermsAndConditions from './TermsAndConditions';

const d = new Date();
const y = d.getFullYear();
const from = +CONFIG.since;

type Props = {
  className?: string;
};

const Footer: React.FC<Props> = ({ className }) => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <StyledWrapper className={className}>
      <a
        href={`https://github.com/${CONFIG.profile.github}`}
        target="_blank"
        rel="noreferrer"
      >
        © {CONFIG.profile.name} {from === y || !from ? y : `${from} - ${y}`}
      </a>
      <Links>
        <a href="/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a>
        <a href="/terms-and-conditions" target="_blank" rel="noreferrer">Terms and Conditions</a>
      </Links>

      <Modal show={showPrivacyPolicy} onClose={() => setShowPrivacyPolicy(false)}>
        <PrivacyPolicy />
      </Modal>

      <Modal show={showTerms} onClose={() => setShowTerms(false)}>
        <TermsAndConditions />
      </Modal>
    </StyledWrapper>
  );
};

export default Footer;

const StyledWrapper = styled.div`
  a {
    margin-top: 0.75rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: ${({ theme }) => theme.colors.gray10};
  }
`;

const Links = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;

const LinkButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.gray10};
  cursor: pointer;
  text-decoration: underline;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;
