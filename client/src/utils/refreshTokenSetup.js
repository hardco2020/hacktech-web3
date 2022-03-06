export const refreshTokenSetup = (res) => {
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 6 * 60) * 1000;
  //   let refreshTiming = 5000;

  const refreshToken = async (resolve) => {
    const newAuthRes = await res.reloadAuthResponse();
    refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
    // console.log('newAuthRes: ', newAuthRes);
    // console.log('new auth token: ', newAuthRes.id_token);
    resolve(newAuthRes.id_token);
  };

  var promise = new Promise((resolve, reject) => {
    setTimeout(refreshToken(resolve), refreshTiming);
  });

  return promise;
};
