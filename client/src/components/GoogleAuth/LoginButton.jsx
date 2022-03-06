import React from 'react';
import { Button, Center, Text } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../../components/AuthContext/AuthContext';

const clientId =
  '239925913331-dqji28sfdg9b9k0dva4n71ilmdf87m37.apps.googleusercontent.com';

function LoginButton() {
  const authContext = useAuth();

  const handleSignIn = async () => {
    await authContext.googleAuth.signIn();
  };

  return (
    <div>
      <Button
        w={'full'}
        variant={'outline'}
        leftIcon={<FcGoogle />}
        onClick={handleSignIn}
      >
        <Center>
          <Text>Sign in with Google</Text>
        </Center>
      </Button>
    </div>
  );
}

export default LoginButton;
