/***********************************************
> deleteHeader by Kian-LEEN
> Fake Location: California, USA - Modified by KhanhLN
***********************************************/	

const version = 'V1.0.3';

function setHeaderValue(e,a,d){var r=a.toLowerCase();r in e?e[r]=d:e[a]=d}

var modifiedHeaders = $request.headers;

// === Xóa ETag để buộc server trả response đầy đủ ===
setHeaderValue(modifiedHeaders, "X-RevenueCat-ETag", "");

// === Fake Location: Los Angeles, California, USA ===
setHeaderValue(modifiedHeaders, "Accept-Language", "en-US,en;q=0.9");
setHeaderValue(modifiedHeaders, "X-Forwarded-For", "172.58.142.1");
setHeaderValue(modifiedHeaders, "CF-IPCountry", "US");
setHeaderValue(modifiedHeaders, "X-Client-Locale", "en_US");
setHeaderValue(modifiedHeaders, "X-Client-Timezone", "America/Los_Angeles");
setHeaderValue(modifiedHeaders, "X-Storefront-Country", "US");
setHeaderValue(modifiedHeaders, "X-AppStore-Country", "US");
setHeaderValue(modifiedHeaders, "X-Client-Country", "US");
setHeaderValue(modifiedHeaders, "X-Client-Region", "US");
setHeaderValue(modifiedHeaders, "X-Custom-Location", "34.0522,-118.2437");

$done({ headers: modifiedHeaders });
