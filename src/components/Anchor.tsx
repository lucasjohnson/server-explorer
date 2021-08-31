import React from 'react';
import { GoMarkGithub } from 'react-icons/go';

interface AnchorProps {
  title: string;
  url: string;
  className: String;
}

const Anchor: React.FC<AnchorProps> = ({ title, url, className }) => (
  <a
    className={className}
    href={url}
    title={`${title} opens in new tab`}
    target="_blank"
    rel="noopener noreferrer"
  >
    <GoMarkGithub />
  </a>
);

export default Anchor;
