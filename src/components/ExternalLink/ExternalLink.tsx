import React from 'react';
interface Props {
  url: string;
  children: string;
}
const ExternalLink = ({ url, children }: Props) => {
  return (
    <a href={url} target="_blank" rel="nofollow noopener">
      {children}
    </a>
  );
};

export default ExternalLink;
