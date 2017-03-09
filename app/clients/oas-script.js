(function(__ad_data) {
    if (!__ad_data || !__ad_data.tag || __ad_data.tag === null) return;
    var tag = __ad_data.tag;
    OAS_url = tag.url;
    OAS_sitepage = tag.sitepage;

    OAS_pos = tag.pos || "";
    OAS_query = tag.query || "";
    OAS_exclude = tag.exclude || "";

    if(__ad_data.context.matches) {
        var contextTerms =[];
        for (match in __ad_data.context.matches) {
            var term = match;
            var score = __ad_data.context.matches[match].score;
            if(score < 4) {
                contextTerms.push('kwlow='+term);
            } else {
                contextTerms.push('kwhigh='+term);
            }
        }
        if(OAS_query != "") {
            OAS_query += "&";
        }
        OAS_query += contextTerms.join('&');
        var _url = __ad_data.context.url;
        var _urlparts = _url.split('//');
        OAS_query += '&vhurl='+_urlparts[1];
    }

    var OAS_RN = new String(Math.random());
    var OAS_RNS = OAS_RN.substring(2, 11);

    document.write('<scr' + 'ipt language="javascript" type="text/javascript" src="' + OAS_url + '/RealMedia/ads/adstream_jx.ads/' + OAS_sitepage + '/1' + OAS_RNS + '@' + OAS_pos + '?_RM_Exclude_=' + OAS_exclude + '&' + OAS_query + '"></scr' + 'ipt>');

})(__ad_data);
