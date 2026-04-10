/***********************************************
> deleteHeader by Kian-LEEN
***********************************************/	

const version = 'V1.0.3';

function setHeaderValue(e,a,d){var r=a.toLowerCase();r in e?e[r]=d:e[a]=d}

var modifiedHeaders = $request.headers;

// === Xóa ETag để buộc server trả response đầy đủ ===
setHeaderValue(modifiedHeaders, "X-RevenueCat-ETag", "");


$done({ headers: modifiedHeaders });
