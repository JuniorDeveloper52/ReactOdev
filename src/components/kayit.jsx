import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button, FormControl, FormControlLabel, FormLabel, Typography, Container, Grid, Select, InputLabel, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
    <Container maxWidth="sm" style={{ marginTop: '20px' }}>
      <Typography variant="h4" align="left" gutterBottom>
        Kayıt Ol
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Controller
              name="firstName"
              control={control}
              rules={{ required: 'First name is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  error={!!errors.firstName}
                  helperText={errors.firstName && errors.firstName.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="lastName"
              control={control}
              rules={{ required: 'Last name is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  error={!!errors.lastName}
                  helperText={errors.lastName && errors.lastName.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="email"
              control={control}
              rules={{
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address'
                }
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  variant="outlined"
                  fullWidth
                  error={!!errors.email}
                  helperText={errors.email && errors.email.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="telefon"
              control={control}
              rules={{ required: 'Telefon Numarası is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Telefon Numarası"
                  variant="outlined"
                  fullWidth
                  error={!!errors.telefon}
                  helperText={errors.telefon && errors.telefon.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="password"
              control={control}
              rules={{ required: 'Password is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  error={!!errors.password}
                  helperText={errors.password && errors.password.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl variant="standard" fullWidth>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Controller
                name="gender"
                control={control}
                rules={{ required: 'Gender is required' }}
                render={({ field }) => (
                  <Select
                    {...field}
                    labelId="gender-label"
                    id="gender"
                    error={!!errors.gender}
                  >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                  </Select>
                )}
              />
              {errors.gender && <span>{errors.gender.message}</span>}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl variant="standard" fullWidth>
              <InputLabel id="birth-year-label">Birth Year</InputLabel>
              <Controller
                name="birthYear"
                control={control}
                rules={{ required: 'Birth Year is required' }}
                render={({ field }) => (
                  <Select
                    {...field}
                    labelId="birth-year-label"
                    id="birthYear"
                    error={!!errors.birthYear}
                  >
                    <MenuItem value={1995}>1995</MenuItem>
                    <MenuItem value={1996}>1996</MenuItem>
                    <MenuItem value={1997}>1997</MenuItem>
                    <MenuItem value={1998}>1998</MenuItem>
                    <MenuItem value={1999}>1999</MenuItem>
                    <MenuItem value={2000}>2000</MenuItem>
                    <MenuItem value={2001}>2001</MenuItem>
                    <MenuItem value={2002}>2002</MenuItem>
                    <MenuItem value={2003}>2003</MenuItem>
                    <MenuItem value={2004}>2004</MenuItem>
                    <MenuItem value={2005}>2005</MenuItem>
                  </Select>
                )}
              />
              {errors.birthYear && <span>{errors.birthYear.message}</span>}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="inherit" fullWidth>
              Kaydol
            </Button>
            <Grid container justifyContent="space-between">
                <Grid item xs={6}>
                  <div className='kayitol-2' >
                    <Link as={Link} to="/kayit2" style={{textDecoration:"none",color:"black"}}>
                      Kayıt 2
                    </Link>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <div className='kayitol-3'>
                    <Link as={Link} to="/kayit3" style={{textDecoration:"none",color:"black"}}>
                      Kayıt 3
                    </Link>
                  </div>
                </Grid>
              </Grid>
                
          </Grid>
        </Grid>
      </form>
    </Container>
    
    </div>

  );
};

export default RegisterForm;
