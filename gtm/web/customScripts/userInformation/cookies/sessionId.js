function() {

// Set cookie expiration in days
var session = 1/48;

// Create DMTRN_SessionID if tere is none
if (!CookiesApi.get('DMTRN_SessionID')) {
 CookiesApi.set('DMTRN_SessionID', {{User Information - Generator - Session ID}}, {
   domain: '.domotron.com',
   expires: session
});
}

// Return Session ID
 return CookiesApi.get('DMTRN_SessionID');

}
