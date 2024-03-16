import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/ui/NavBar';
import MainPage from './components/pages/MainPage';
import SignUp from './components/pages/authPages/SignUpPage';
import './styles.css';
import LoginPage from './components/pages/authPages/LoginPage';
import PrivateRoute from './components/hocs/PrivateRoute';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { userCheckThunk } from './redux/slices/user/userThunk';
import Loader from './components/hocs/Loader';
import GirlPage from './components/pages/girlPages/GirlPage';
import CreateGirlCard from './components/ui/girlUI/createGirlCard';

function App(): JSX.Element {
  const user = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    void dispatch(userCheckThunk());
  }, []);

  return (
    <Loader isLoading={user.status === 'loading'}>
      <>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/girls/:id" element={<GirlPage />} />
          <Route path='/createGirlCard' element={<CreateGirlCard />} />
          <Route element={<PrivateRoute redirect="/" isAllowed={user.status === 'guest'} />}>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Routes>
      </>
    </Loader>
  );
}

export default App;
