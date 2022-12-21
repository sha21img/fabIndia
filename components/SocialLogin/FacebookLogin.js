import {
  AccessToken,
  GraphRequest,
  LoginManager,
  GraphRequestManager,
} from 'react-native-fbsdk-next';
export const FacebookLogin = props => {
  LoginManager;
  LoginManager.logInWithPermissions(['public_profile', 'email']).then(
    function (result) {
      if (result.isCancelled) {
        alert('Login cancelled');
      } else {
        AccessToken.getCurrentAccessToken().then(data => {
          let accessToken = data.accessToken;
          const responseInfoCallback = (error, result) => {
            if (error) {
              console.log(error);
            } else {
              console.log('122result123456789', result);
              let userData = Object.assign(
                {},
                {
                  api_key: accessToken,
                  id: result.id,
                  name: result.name,
                  photo: result.picture.data.url,
                  email: result.email,
                  type: 'regular',
                  role: 'facebook',
                  phone: null,
                  phone_prefix: null,
                },
              );
              console.log('demo12345678', userData);
              const isSuccess = setData(Labels.userDataId, userData);
              if (isSuccess) {
                console.log('naviagteeee');
                props.navigation.navigate('MainScreens', {userData: userData});
              } else {
                console.log('errorr');
                //   onError([Messages.codeErrorMessage]);
              }
            }
          };
          const infoRequest = new GraphRequest(
            '/me',
            {
              accessToken: accessToken,
              parameters: {
                fields: {
                  string: 'email,name,first_name,middle_name,last_name,picture',
                },
              },
            },
            responseInfoCallback,
          );
          // Start the graph request.
          new GraphRequestManager().addRequest(infoRequest).start();
        });
      }
    },
    function (error) {
      alert('Login fail with error: ' + error);
    },
  );
};
