/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Box, AppBar, Toolbar, IconButton, Button, Link } from '@mui/material';
import { pink } from '@mui/material/colors';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import SvgIcon from '@mui/material/SvgIcon';
import { Link as NavLink, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { userLogoutThunk } from '../../redux/slices/user/userThunk';

function HomeIcon(props: SvgIconProps): JSX.Element {
  const navigate = useNavigate();

  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function NavBar(): JSX.Element {
  const navigate = useNavigate();
  const user = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  const links =
    user.status === 'logged'
      ? [{ path: '/', pageName: 'Главная' }]
      : [
          { path: '/', pageName: 'Главная' },
          { path: '/signup', pageName: 'Регистрация' },
          { path: '/login', pageName: 'Вход' },
        ];

  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar position="static">
        <Toolbar style={{ display: 'flex', justifyContent: 'flex-start', gap: '80px' }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1, ml: 4 }}
            onClick={() => navigate('/')}
          >
            <HomeIcon sx={{ color: pink[500], fontSize: 40 }} />
          </IconButton>
          {links.map((link, i) => (
            <Link
              component={NavLink}
              key={link.pageName}
              to={link.path}
              sx={{
                color: 'white',
                fontFamily: 'Comic Sans MS, Comic Sans, cursive',
                cursor: 'pointer',
                mr: i === 0 ? '700px' : 0,
                textDecoration: 'none',
              }}
            >
              {link.pageName}
            </Link>
          ))}
          {user.status === 'logged' && (
            <>
              <Button
                sx={{
                  marginRight: '100px',
                  fontFamily: 'Comic Sans MS, Comic Sans, cursive',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  '&.MuiButtonBase-root:hover': {
                    bgcolor: 'transparent',
                  },
                }}
                color="inherit"
                onClick={() => navigate('/createGirlCard')}
              >
                Создать анкету
              </Button>
              <Button
                sx={{
                  marginRight: '100px',
                  fontFamily: 'Comic Sans MS, Comic Sans, cursive',
                  cursor: 'pointer',
                  '&.MuiButtonBase-root:hover': {
                    bgcolor: 'transparent',
                  },
                }}
                color="inherit"
                onClick={() => {
                  void dispatch(userLogoutThunk());
                  // navigate('/');
                }}
              >
                Выйти
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
