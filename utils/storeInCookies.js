export function storeInCookie(jwtToken, refreshToken,refreshTokenExpire){
   
        const options = { path: '/' };
        const formattedExpireDate = new Date(refreshTokenExpire).toUTCString();
      
        document.cookie = `jwt=${jwtToken}; path=${options.path}`;
        document.cookie = `refreshToken=${refreshToken}; expires=${formattedExpireDate}; path=${options.path}`;
      
}