import React from 'react';
import BaseBlockContent from '@sanity/block-content-to-react';

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case 'h1':
          return <h1 className="text-3xl">{props.children}</h1>;

        case 'h2':
          return <h2 className="text-3xl">{props.children}</h2>;

        case 'h3':
          return <h3 className="text-2xl">{props.children}</h3>;

        case 'h4':
          return <h4 className="text-xl">{props.children}</h4>;

        case 'blockquote':
          return <blockquote>{props.children}</blockquote>;

        default:
          return <p>{props.children}</p>;
      }
    },
  },
};

const BlockContent = ({ blocks }) => (
  <BaseBlockContent blocks={blocks} serializers={serializers} />
);

export default BlockContent;
