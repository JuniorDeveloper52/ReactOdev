import React from 'react';
import { TextInput, Button, Paper, Container,  } from '@mantine/core';

const LoginPage = () => {
  return (
    <Container size="xs" style={{ marginTop: '100px', marginBottom:"250px" }}>
      <Paper padding="lg">
        <h2 style={{ marginBottom: '20px' }}>Giriş Yap</h2>
        <form>
          <TextInput label="E-posta" placeholder="E-posta adresinizi girin" />
          <TextInput
            type="password"
            label="Şifre"
            placeholder="Şifrenizi girin"
            style={{ marginTop: '15px' }}
          />
          <Button
            type="submit"
            color="dark"
            backgroundColor="gradient"
            
            style={{ marginTop: '20px', width: '100%' }}
          >
            Giriş Yap
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default LoginPage;
