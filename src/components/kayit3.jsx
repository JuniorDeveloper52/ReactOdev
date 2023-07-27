import React from 'react';
import { Link } from 'react-router-dom';
import { useForm, isNotEmpty, isEmail, isInRange, hasLength, matches } from '@mantine/form'
import { Button, Group, TextInput, NumberInput, Box,Grid,Col} from '@mantine/core';


export default function Demo() {
  const form = useForm({
    initialValues: {
      isim: '',
      meslek: '',
      email: '',
      FavoriRenk: '',
      Yas: 18,
    },

    validate: {
      isim: hasLength({ min: 2, max: 10 }),
      meslek: isNotEmpty(),
      email: isEmail(),
      FavoriRenk: matches(/^#([0-9a-f]{3}){1,2}$/),
      Yas: isInRange({ min: 18, max: 99 }),
    },
  });

  return (
    <Box className='mt-5 ' component="form" maw={400} mx="auto" onSubmit={form.onSubmit(() => {})}>
      <h1>Kayıt Ol</h1>
      <Grid gutter="md">
      <Col span={6}>
      <TextInput label="İsim" placeholder="İsim" withAsterisk {...form.getInputProps('isim')} />
      </Col>
      <Col span={6}>
      <TextInput label="Soyad" placeholder="Soyad" withAsterisk {...form.getInputProps('Soyad')} />
      </Col>
      </Grid>
      <TextInput
        label="Meslek"
        placeholder="Meslek"
        withAsterisk
        mt="md"
        {...form.getInputProps('meslek')}
      />
      <TextInput
        label="Email"
        placeholder="Email"
        withAsterisk
        mt="md"
        {...form.getInputProps('email')}
      />
      
        <TextInput
          type='email'
          label="Kullanıcı Adı"
          placeholder="Kullanıcı Adı"
          withAsterisk
          mt="md"
          {...form.getInputProps('Kullanıcı Adı')}
        />
        <TextInput
          type='password'
          label="Şifre"
          placeholder="Yeni Şifre"
          withAsterisk
          mt="md"
          {...form.getInputProps('Şifre')}
        />
      <NumberInput
        label="Yaş"
        placeholder="Yaş"
        withAsterisk
        mt="md"
        {...form.getInputProps('yas')}
      />

      <Group position="right" mt="md">
        <Button type="submit">Kayıt Ol</Button>
      </Group>

      <Link as={Link} to="/kayit">Geri Dön</Link>
    </Box>
  );
}