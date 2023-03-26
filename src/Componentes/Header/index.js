import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <h1><Link to={'/'}>Thecblog</Link></h1>
      <h2><Link to={'/'}>Home</Link></h2>
    </Container>
  );
}