// ========= ID ========= //
const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'Locket': ['Gold']
};
// =========   Phần cố định  ========= // 
// =========  Fake Location: California, USA - Modified by KhanhLN ========= //
var ua=$request.headers["User-Agent"]||$request.headers["user-agent"],obj=JSON.parse($response.body);obj.Attention="Chúc mừng bạn! Vui lòng không bán hoặc chia sẻ cho người khác!";var ohoang7={is_sandbox:!1,ownership_type:"PURCHASED",billing_issues_detected_at:null,period_type:"normal",expires_date:"2099-12-18T01:04:17Z",grace_period_expires_date:null,unsubscribe_detected_at:null,original_purchase_date:"2024-07-28T01:04:18Z",purchase_date:"2024-07-28T01:04:17Z",store:"app_store"},vuong2023={grace_period_expires_date:null,purchase_date:"2024-07-28T01:04:17Z",product_identifier:"com.ohoang7.premium.yearly",expires_date:"2099-12-18T01:04:17Z"};

// === Fake Location: Los Angeles, California, USA ===
if(obj.subscriber){
  obj.subscriber.store_country="US";
  if(!obj.subscriber.subscriber_attributes)obj.subscriber.subscriber_attributes={};
  obj.subscriber.subscriber_attributes["$countryCode"]={value:"US",updated_at_ms:Date.now()};
  obj.subscriber.subscriber_attributes["$gpsAdCountry"]={value:"US",updated_at_ms:Date.now()};
  obj.subscriber.subscriber_attributes["$ipCountry"]={value:"US",updated_at_ms:Date.now()};
  obj.subscriber.subscriber_attributes["$locationLatitude"]={value:"34.0522",updated_at_ms:Date.now()};
  obj.subscriber.subscriber_attributes["$locationLongitude"]={value:"-118.2437",updated_at_ms:Date.now()};
  obj.subscriber.subscriber_attributes["$locationCity"]={value:"Los Angeles",updated_at_ms:Date.now()};
  obj.subscriber.subscriber_attributes["$locationState"]={value:"California",updated_at_ms:Date.now()};
  obj.subscriber.subscriber_attributes["$locationZip"]={value:"90001",updated_at_ms:Date.now()};
  obj.subscriber.subscriber_attributes["$locale"]={value:"en_US",updated_at_ms:Date.now()};
  obj.subscriber.subscriber_attributes["$timezone"]={value:"America/Los_Angeles",updated_at_ms:Date.now()};
}

const match=Object.keys(mapping).find(e=>ua.includes(e));if(match){let[e,s]=mapping[match];s?(vuong2023.product_identifier=s,obj.subscriber.subscriptions[s]=ohoang7):obj.subscriber.subscriptions["com.ohoang7.premium.yearly"]=ohoang7,obj.subscriber.entitlements[e]=vuong2023}else obj.subscriber.subscriptions["com.ohoang7.premium.yearly"]=ohoang7,obj.subscriber.entitlements.pro=vuong2023;$done({body:JSON.stringify(obj)});
