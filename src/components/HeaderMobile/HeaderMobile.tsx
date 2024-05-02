import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectUserName,
  setUserLoginDetails,
  setSignOutState,
} from '../../features/user/userSlice';
import Link from 'next/link';

import * as Styled from './styles';

export type HeaderMobileProps = {
  isVisible: boolean;
};

export default function HeaderMobile({ isVisible }: HeaderMobileProps) {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const { push } = useRouter();

  const setUser = useCallback(
    (user) => {
      dispatch(
        setUserLoginDetails({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        }),
      );
    },
    [dispatch],
  );

  const handleSignInWithGoogleAccount = async () => {
    if (!userName) {
      const provider = await new GoogleAuthProvider();

      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          setUser(user);
          push('/home');
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else if (userName) {
      signOut(auth)
        .then(() => {
          dispatch(setSignOutState());
          push('/');
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [userName, setUser]);

  return (
    <Styled.NavMenuMobile isVisible={isVisible}>
      {!userName ? (
        <Styled.Login onClick={handleSignInWithGoogleAccount}>
          <span>Login</span>
        </Styled.Login>
      ) : (
        <>
          <nav>
            <small>Navegar</small>
            <Link href={`/home`}>
              <span>Home</span>
            </Link>

            <Link href={`/mylist`}>
              <span>Minha Lista</span>
            </Link>

            <Link href={`/search`}>
              <span>Buscar</span>
            </Link>
          </nav>
        </>
      )}
    </Styled.NavMenuMobile>
  );
}
