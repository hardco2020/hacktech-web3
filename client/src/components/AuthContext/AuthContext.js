import { createContext, useContext, useState } from 'react';
import { GoogleLogin, useGoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from '../../utils/refreshTokenSetup';

const AuthContext = createContext({
  user: {},
  googleAuth: () => {},
  update: () => {},
  auth: false,
});

const clientId =
  '239925913331-dqji28sfdg9b9k0dva4n71ilmdf87m37.apps.googleusercontent.com';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [auth, setAuth] = useState(false);

  const onSuccess = (res) => {
    console.log('[Login success] currentUser: ', res.profileObj);
    console.log('full res: ', res);

    setUser({
      firstName: res.profileObj.givenName,
      lastName: res.profileObj.familyName,
      email: res.profileObj.email,
      imageUrl: res.profileObj.imageUrl,
      token: res.tokenObj.id_token,
    });

    // TODO: fix later
    // refreshTokenSetup(res).then((token) => {
    //   setUser({ ...user, firstName: 'hello' });
    //   setUser({ ...user, token: token });
    //   console.log('user: ', user);
    // });
  };

  const onFailure = (res) => {
    console.log('[Login failed] res: ', res);
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
    uxMode: 'redirect',
    redirectUri: 'http://localhost:3000/profile',
  });

  const update = (modifiedUser) => setUser({ ...user, modifiedUser });

  const value = {
    user: user,
    googleAuth: { signIn: signIn },
    update: update,
    auth: auth,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
