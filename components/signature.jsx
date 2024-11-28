import React from 'react';

export default function Signature() {
  return (
    <div
      style={{
        bottom: '1rem',
        margin: '0',
        padding: '0',
        position: 'fixed',
        right: '1rem',
        zIndex: '9999',
      }}
    >
      <a
        href='https://github.com/dieggoyz'
        rel='noopener noreferrer'
        target='_blank'
        style={{
          color: '#8a93a0',
          fontFamily: 'monospace',
          fontSize: '.875rem',
          lineHeight: '1.25rem',
          margin: 0,
          padding: 0,
          textDecoration: 'none',
          zIndex: 9999,
        }}
      >
        〆 dieggoyz
      </a>
    </div>
  );
}
