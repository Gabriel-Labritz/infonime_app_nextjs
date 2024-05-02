import { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from '../../features/user/userSlice';
import { GiHamburgerMenu } from 'react-icons/gi';
import HeaderMobile from '../HeaderMobile/HeaderMobile';
import Link from 'next/link';
import * as Styled from './styles';

export function Header() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
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
    <Styled.HeaderNav>
      <nav className={`nav-container`}>
        <GiHamburgerMenu
          size={30}
          title="Menu"
          onClick={() => setMenuIsVisible(!menuIsVisible)}
        />

        <HeaderMobile isVisible={menuIsVisible} />

        <Styled.Logo>
          <Link href={`/home`}>
            <img src="/images/logo_052b647f68.png" alt="Crunchyroll" />
          </Link>
        </Styled.Logo>
        {!userName ? (
          <Styled.Login onClick={handleSignInWithGoogleAccount}>
            <span>Login</span>
          </Styled.Login>
        ) : (
          <>
            <Styled.NavMenu>
              <Link href={`/home`}>
                <span>Home</span>
              </Link>

              <Link href={`/mylist`}>
                <span>Minha Lista</span>
              </Link>

              <Link href={`/search`}>
                <span>Buscar</span>
              </Link>
            </Styled.NavMenu>

            <Styled.SignOut>
              <Styled.UserImg src={userPhoto} />
              <Styled.DropDown onClick={handleSignInWithGoogleAccount}>
                <span>Sair</span>
              </Styled.DropDown>
            </Styled.SignOut>
          </>
        )}
      </nav>
    </Styled.HeaderNav>
  );
}
