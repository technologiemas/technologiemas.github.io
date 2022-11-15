function mpld3_load_lib(url, callback){
  var s = document.createElement('script');
  s.src = url;
  s.async = true;
  s.onreadystatechange = s.onload = callback;
  s.onerror = function(){console.warn("failed to load library " + url);};
  document.getElementsByTagName("head")[0].appendChild(s);
}

if(typeof(mpld3) !== "undefined" && mpld3._mpld3IsLoaded){
   // already loaded: just create the figure
   !function(mpld3){

       mpld3.draw_figure("fig_el7943453555512804251516540", {"width": 600.0, "height": 600.0, "axes": [{"bbox": [0.1257638888888889, 0.12055555555555553, 0.844236111111111, 0.8077777777777778], "xlim": [76.95721127028291, 143.26567841332624], "ylim": [0.0, 10.0], "xdomain": [76.95721127028291, 143.26567841332624], "ydomain": [0.0, 10.0], "xscale": "linear", "yscale": "linear", "axes": [{"position": "bottom", "nticks": 9, "tickvalues": null, "tickformat_formatter": "", "tickformat": null, "scale": "linear", "fontsize": 10.0, "grid": {"gridOn": false}, "visible": true}, {"position": "left", "nticks": 6, "tickvalues": null, "tickformat_formatter": "", "tickformat": null, "scale": "linear", "fontsize": 10.0, "grid": {"gridOn": false}, "visible": true}], "axesbg": "#FFFFFF", "axesbgalpha": null, "zoomable": true, "id": "el794345355552336", "lines": [{"data": "data01", "xindex": 0, "yindex": 1, "coordinates": "data", "id": "el794345361071776", "color": "#1F77B4", "linewidth": 2.25, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default"}], "paths": [], "markers": [], "texts": [{"text": "Speed (km/u)", "position": [0.5, -0.0749656121045392], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "hanging", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el794345355546288"}, {"text": "Petrol use (L/100km)", "position": [-0.07789750760878507, 0.5], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "auto", "rotation": -90.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el794345355544800"}, {"text": "Petrol vs. speed in the Kia Picanto", "position": [0.5, 1.0206327372764787], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "auto", "rotation": -0.0, "fontsize": 12.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el794345355537120"}], "collections": [{"offsets": "data02", "xindex": 0, "yindex": 1, "paths": [[[[0.0, -0.5], [0.13260155, -0.5], [0.25978993539242673, -0.44731684579412084], [0.3535533905932738, -0.3535533905932738], [0.44731684579412084, -0.25978993539242673], [0.5, -0.13260155], [0.5, 0.0], [0.5, 0.13260155], [0.44731684579412084, 0.25978993539242673], [0.3535533905932738, 0.3535533905932738], [0.25978993539242673, 0.44731684579412084], [0.13260155, 0.5], [0.0, 0.5], [-0.13260155, 0.5], [-0.25978993539242673, 0.44731684579412084], [-0.3535533905932738, 0.3535533905932738], [-0.44731684579412084, 0.25978993539242673], [-0.5, 0.13260155], [-0.5, 0.0], [-0.5, -0.13260155], [-0.44731684579412084, -0.25978993539242673], [-0.3535533905932738, -0.3535533905932738], [-0.25978993539242673, -0.44731684579412084], [-0.13260155, -0.5], [0.0, -0.5]], ["M", "C", "C", "C", "C", "C", "C", "C", "C", "Z"]]], "pathtransforms": [[10.0, 0.0, 0.0, 10.0, 0.0, 0.0]], "alphas": [0.8], "edgecolors": ["rgba(31, 119, 180, 0.8)"], "facecolors": ["rgba(31, 119, 180, 0.8)"], "edgewidths": [1.0], "offsetcoordinates": "data", "pathcoordinates": "display", "zorder": 1, "id": "el794345361070480"}], "images": [], "sharex": [], "sharey": []}], "data": {"data01": [[80.0, 4.28450068318186], [80.60606060606061, 4.285894155574398], [81.21212121212122, 4.288144981586989], [81.81818181818181, 4.291253161219637], [82.42424242424242, 4.2952186944723385], [83.03030303030303, 4.300041581345095], [83.63636363636364, 4.305721821837906], [84.24242424242425, 4.312259415950772], [84.84848484848484, 4.319654363683691], [85.45454545454545, 4.327906665036665], [86.06060606060606, 4.337016320009695], [86.66666666666667, 4.346983328602779], [87.27272727272728, 4.357807690815918], [87.87878787878788, 4.36948940664911], [88.48484848484848, 4.382028476102358], [89.0909090909091, 4.3954248991756595], [89.6969696969697, 4.409678675869017], [90.3030303030303, 4.424789806182429], [90.9090909090909, 4.440758290115895], [91.51515151515152, 4.457584127669414], [92.12121212121212, 4.47526731884299], [92.72727272727273, 4.493807863636619], [93.33333333333333, 4.513205762050304], [93.93939393939394, 4.533461014084043], [94.54545454545455, 4.5545736197378375], [95.15151515151516, 4.576543579011685], [95.75757575757575, 4.599370891905587], [96.36363636363636, 4.623055558419545], [96.96969696969697, 4.647597578553557], [97.57575757575758, 4.672996952307624], [98.18181818181819, 4.699253679681745], [98.78787878787878, 4.726367760675919], [99.39393939393939, 4.75433919529015], [100.0, 4.783167983524436], [100.60606060606061, 4.8128541253787755], [101.21212121212122, 4.84339762085317], [101.81818181818181, 4.874798469947617], [102.42424242424242, 4.9070566726621205], [103.03030303030303, 4.940172228996679], [103.63636363636364, 4.974145138951292], [104.24242424242425, 5.00897540252596], [104.84848484848484, 5.044663019720679], [105.45454545454545, 5.081207990535456], [106.06060606060606, 5.1186103149702875], [106.66666666666667, 5.156869993025174], [107.27272727272728, 5.195987024700112], [107.87878787878788, 5.235961409995107], [108.48484848484848, 5.276793148910158], [109.0909090909091, 5.318482241445261], [109.6969696969697, 5.361028687600421], [110.30303030303031, 5.404432487375633], [110.9090909090909, 5.4486936407709], [111.51515151515152, 5.493812147786222], [112.12121212121212, 5.5397880084216], [112.72727272727272, 5.5866212226770315], [113.33333333333334, 5.634311790552519], [113.93939393939394, 5.682859712048056], [114.54545454545455, 5.732264987163653], [115.15151515151516, 5.782527615899301], [115.75757575757575, 5.833647598255006], [116.36363636363637, 5.8856249342307665], [116.96969696969697, 5.93845962382658], [117.57575757575758, 5.992151667042446], [118.18181818181819, 6.046701063878372], [118.78787878787878, 6.102107814334348], [119.3939393939394, 6.158371918410381], [120.0, 6.215493376106467], [120.60606060606061, 6.273472187422608], [121.21212121212122, 6.332308352358802], [121.81818181818181, 6.392001870915053], [122.42424242424242, 6.452552743091359], [123.03030303030303, 6.513960968887718], [123.63636363636364, 6.576226548304134], [124.24242424242425, 6.639349481340601], [124.84848484848484, 6.703329767997125], [125.45454545454545, 6.768167408273701], [126.06060606060606, 6.833862402170336], [126.66666666666667, 6.900414749687022], [127.27272727272728, 6.967824450823766], [127.87878787878788, 7.036091505580558], [128.4848484848485, 7.1052159139574105], [129.0909090909091, 7.1751976759543155], [129.6969696969697, 7.246036791571275], [130.3030303030303, 7.317733260808292], [130.9090909090909, 7.390287083665361], [131.5151515151515, 7.4636982601424835], [132.12121212121212, 7.537966790239664], [132.72727272727272, 7.6130926739568965], [133.33333333333334, 7.689075911294186], [133.93939393939394, 7.765916502251527], [134.54545454545456, 7.843614446828926], [135.15151515151516, 7.922169745026373], [135.75757575757575, 8.00158239684388], [136.36363636363637, 8.081852402281442], [136.96969696969697, 8.162979761339056], [137.57575757575756, 8.244964474016724], [138.1818181818182, 8.327806540314452], [138.78787878787878, 8.41150596023223], [139.3939393939394, 8.496062733770065], [140.0, 8.581476860927953]], "data02": [[79.97123250405761, 4.2], [80.33467898413892, 4.2], [99.91658858957496, 5.2], [99.80911365875477, 4.9], [100.3376148664168, 5.0], [100.15352438488472, 4.7], [110.47386634980094, 5.2], [110.38411579267739, 4.9], [109.76632130114302, 5.7], [109.73946081175878, 5.5], [119.50871718400913, 6.6], [120.19342045322395, 5.8], [120.44388656563518, 6.1], [119.96309177341352, 6.1], [120.30896932578692, 5.7], [130.2281132535957, 7.8], [130.00221985564409, 8.0], [130.22130344599339, 7.0], [129.59037488289346, 7.2], [129.6098388842891, 7.0], [140.25165717955156, 8.5]]}, "id": "el794345355551280", "plugins": [{"type": "reset"}, {"type": "zoom", "button": true, "enabled": false}, {"type": "boxzoom", "button": true, "enabled": false}]});
   }(mpld3);
}else if(typeof define === "function" && define.amd){
   // require.js is available: use it to load d3/mpld3
   require.config({paths: {d3: "https://d3js.org/d3.v5"}});
   require(["d3"], function(d3){
      window.d3 = d3;
      mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.5.8.js", function(){

         mpld3.draw_figure("fig_el7943453555512804251516540", {"width": 600.0, "height": 600.0, "axes": [{"bbox": [0.1257638888888889, 0.12055555555555553, 0.844236111111111, 0.8077777777777778], "xlim": [76.95721127028291, 143.26567841332624], "ylim": [0.0, 10.0], "xdomain": [76.95721127028291, 143.26567841332624], "ydomain": [0.0, 10.0], "xscale": "linear", "yscale": "linear", "axes": [{"position": "bottom", "nticks": 9, "tickvalues": null, "tickformat_formatter": "", "tickformat": null, "scale": "linear", "fontsize": 10.0, "grid": {"gridOn": false}, "visible": true}, {"position": "left", "nticks": 6, "tickvalues": null, "tickformat_formatter": "", "tickformat": null, "scale": "linear", "fontsize": 10.0, "grid": {"gridOn": false}, "visible": true}], "axesbg": "#FFFFFF", "axesbgalpha": null, "zoomable": true, "id": "el794345355552336", "lines": [{"data": "data01", "xindex": 0, "yindex": 1, "coordinates": "data", "id": "el794345361071776", "color": "#1F77B4", "linewidth": 2.25, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default"}], "paths": [], "markers": [], "texts": [{"text": "Speed (km/u)", "position": [0.5, -0.0749656121045392], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "hanging", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el794345355546288"}, {"text": "Petrol use (L/100km)", "position": [-0.07789750760878507, 0.5], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "auto", "rotation": -90.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el794345355544800"}, {"text": "Petrol vs. speed in the Kia Picanto", "position": [0.5, 1.0206327372764787], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "auto", "rotation": -0.0, "fontsize": 12.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el794345355537120"}], "collections": [{"offsets": "data02", "xindex": 0, "yindex": 1, "paths": [[[[0.0, -0.5], [0.13260155, -0.5], [0.25978993539242673, -0.44731684579412084], [0.3535533905932738, -0.3535533905932738], [0.44731684579412084, -0.25978993539242673], [0.5, -0.13260155], [0.5, 0.0], [0.5, 0.13260155], [0.44731684579412084, 0.25978993539242673], [0.3535533905932738, 0.3535533905932738], [0.25978993539242673, 0.44731684579412084], [0.13260155, 0.5], [0.0, 0.5], [-0.13260155, 0.5], [-0.25978993539242673, 0.44731684579412084], [-0.3535533905932738, 0.3535533905932738], [-0.44731684579412084, 0.25978993539242673], [-0.5, 0.13260155], [-0.5, 0.0], [-0.5, -0.13260155], [-0.44731684579412084, -0.25978993539242673], [-0.3535533905932738, -0.3535533905932738], [-0.25978993539242673, -0.44731684579412084], [-0.13260155, -0.5], [0.0, -0.5]], ["M", "C", "C", "C", "C", "C", "C", "C", "C", "Z"]]], "pathtransforms": [[10.0, 0.0, 0.0, 10.0, 0.0, 0.0]], "alphas": [0.8], "edgecolors": ["rgba(31, 119, 180, 0.8)"], "facecolors": ["rgba(31, 119, 180, 0.8)"], "edgewidths": [1.0], "offsetcoordinates": "data", "pathcoordinates": "display", "zorder": 1, "id": "el794345361070480"}], "images": [], "sharex": [], "sharey": []}], "data": {"data01": [[80.0, 4.28450068318186], [80.60606060606061, 4.285894155574398], [81.21212121212122, 4.288144981586989], [81.81818181818181, 4.291253161219637], [82.42424242424242, 4.2952186944723385], [83.03030303030303, 4.300041581345095], [83.63636363636364, 4.305721821837906], [84.24242424242425, 4.312259415950772], [84.84848484848484, 4.319654363683691], [85.45454545454545, 4.327906665036665], [86.06060606060606, 4.337016320009695], [86.66666666666667, 4.346983328602779], [87.27272727272728, 4.357807690815918], [87.87878787878788, 4.36948940664911], [88.48484848484848, 4.382028476102358], [89.0909090909091, 4.3954248991756595], [89.6969696969697, 4.409678675869017], [90.3030303030303, 4.424789806182429], [90.9090909090909, 4.440758290115895], [91.51515151515152, 4.457584127669414], [92.12121212121212, 4.47526731884299], [92.72727272727273, 4.493807863636619], [93.33333333333333, 4.513205762050304], [93.93939393939394, 4.533461014084043], [94.54545454545455, 4.5545736197378375], [95.15151515151516, 4.576543579011685], [95.75757575757575, 4.599370891905587], [96.36363636363636, 4.623055558419545], [96.96969696969697, 4.647597578553557], [97.57575757575758, 4.672996952307624], [98.18181818181819, 4.699253679681745], [98.78787878787878, 4.726367760675919], [99.39393939393939, 4.75433919529015], [100.0, 4.783167983524436], [100.60606060606061, 4.8128541253787755], [101.21212121212122, 4.84339762085317], [101.81818181818181, 4.874798469947617], [102.42424242424242, 4.9070566726621205], [103.03030303030303, 4.940172228996679], [103.63636363636364, 4.974145138951292], [104.24242424242425, 5.00897540252596], [104.84848484848484, 5.044663019720679], [105.45454545454545, 5.081207990535456], [106.06060606060606, 5.1186103149702875], [106.66666666666667, 5.156869993025174], [107.27272727272728, 5.195987024700112], [107.87878787878788, 5.235961409995107], [108.48484848484848, 5.276793148910158], [109.0909090909091, 5.318482241445261], [109.6969696969697, 5.361028687600421], [110.30303030303031, 5.404432487375633], [110.9090909090909, 5.4486936407709], [111.51515151515152, 5.493812147786222], [112.12121212121212, 5.5397880084216], [112.72727272727272, 5.5866212226770315], [113.33333333333334, 5.634311790552519], [113.93939393939394, 5.682859712048056], [114.54545454545455, 5.732264987163653], [115.15151515151516, 5.782527615899301], [115.75757575757575, 5.833647598255006], [116.36363636363637, 5.8856249342307665], [116.96969696969697, 5.93845962382658], [117.57575757575758, 5.992151667042446], [118.18181818181819, 6.046701063878372], [118.78787878787878, 6.102107814334348], [119.3939393939394, 6.158371918410381], [120.0, 6.215493376106467], [120.60606060606061, 6.273472187422608], [121.21212121212122, 6.332308352358802], [121.81818181818181, 6.392001870915053], [122.42424242424242, 6.452552743091359], [123.03030303030303, 6.513960968887718], [123.63636363636364, 6.576226548304134], [124.24242424242425, 6.639349481340601], [124.84848484848484, 6.703329767997125], [125.45454545454545, 6.768167408273701], [126.06060606060606, 6.833862402170336], [126.66666666666667, 6.900414749687022], [127.27272727272728, 6.967824450823766], [127.87878787878788, 7.036091505580558], [128.4848484848485, 7.1052159139574105], [129.0909090909091, 7.1751976759543155], [129.6969696969697, 7.246036791571275], [130.3030303030303, 7.317733260808292], [130.9090909090909, 7.390287083665361], [131.5151515151515, 7.4636982601424835], [132.12121212121212, 7.537966790239664], [132.72727272727272, 7.6130926739568965], [133.33333333333334, 7.689075911294186], [133.93939393939394, 7.765916502251527], [134.54545454545456, 7.843614446828926], [135.15151515151516, 7.922169745026373], [135.75757575757575, 8.00158239684388], [136.36363636363637, 8.081852402281442], [136.96969696969697, 8.162979761339056], [137.57575757575756, 8.244964474016724], [138.1818181818182, 8.327806540314452], [138.78787878787878, 8.41150596023223], [139.3939393939394, 8.496062733770065], [140.0, 8.581476860927953]], "data02": [[79.97123250405761, 4.2], [80.33467898413892, 4.2], [99.91658858957496, 5.2], [99.80911365875477, 4.9], [100.3376148664168, 5.0], [100.15352438488472, 4.7], [110.47386634980094, 5.2], [110.38411579267739, 4.9], [109.76632130114302, 5.7], [109.73946081175878, 5.5], [119.50871718400913, 6.6], [120.19342045322395, 5.8], [120.44388656563518, 6.1], [119.96309177341352, 6.1], [120.30896932578692, 5.7], [130.2281132535957, 7.8], [130.00221985564409, 8.0], [130.22130344599339, 7.0], [129.59037488289346, 7.2], [129.6098388842891, 7.0], [140.25165717955156, 8.5]]}, "id": "el794345355551280", "plugins": [{"type": "reset"}, {"type": "zoom", "button": true, "enabled": false}, {"type": "boxzoom", "button": true, "enabled": false}]});
      });
    });
}else{
    // require.js not available: dynamically load d3 & mpld3
    mpld3_load_lib("https://d3js.org/d3.v5.js", function(){
         mpld3_load_lib("https://mpld3.github.io/js/mpld3.v0.5.8.js", function(){

                 mpld3.draw_figure("fig_el7943453555512804251516540", {"width": 600.0, "height": 600.0, "axes": [{"bbox": [0.1257638888888889, 0.12055555555555553, 0.844236111111111, 0.8077777777777778], "xlim": [76.95721127028291, 143.26567841332624], "ylim": [0.0, 10.0], "xdomain": [76.95721127028291, 143.26567841332624], "ydomain": [0.0, 10.0], "xscale": "linear", "yscale": "linear", "axes": [{"position": "bottom", "nticks": 9, "tickvalues": null, "tickformat_formatter": "", "tickformat": null, "scale": "linear", "fontsize": 10.0, "grid": {"gridOn": false}, "visible": true}, {"position": "left", "nticks": 6, "tickvalues": null, "tickformat_formatter": "", "tickformat": null, "scale": "linear", "fontsize": 10.0, "grid": {"gridOn": false}, "visible": true}], "axesbg": "#FFFFFF", "axesbgalpha": null, "zoomable": true, "id": "el794345355552336", "lines": [{"data": "data01", "xindex": 0, "yindex": 1, "coordinates": "data", "id": "el794345361071776", "color": "#1F77B4", "linewidth": 2.25, "dasharray": "none", "alpha": 1, "zorder": 2, "drawstyle": "default"}], "paths": [], "markers": [], "texts": [{"text": "Speed (km/u)", "position": [0.5, -0.0749656121045392], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "hanging", "rotation": -0.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el794345355546288"}, {"text": "Petrol use (L/100km)", "position": [-0.07789750760878507, 0.5], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "auto", "rotation": -90.0, "fontsize": 10.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el794345355544800"}, {"text": "Petrol vs. speed in the Kia Picanto", "position": [0.5, 1.0206327372764787], "coordinates": "axes", "h_anchor": "middle", "v_baseline": "auto", "rotation": -0.0, "fontsize": 12.0, "color": "#000000", "alpha": 1, "zorder": 3, "id": "el794345355537120"}], "collections": [{"offsets": "data02", "xindex": 0, "yindex": 1, "paths": [[[[0.0, -0.5], [0.13260155, -0.5], [0.25978993539242673, -0.44731684579412084], [0.3535533905932738, -0.3535533905932738], [0.44731684579412084, -0.25978993539242673], [0.5, -0.13260155], [0.5, 0.0], [0.5, 0.13260155], [0.44731684579412084, 0.25978993539242673], [0.3535533905932738, 0.3535533905932738], [0.25978993539242673, 0.44731684579412084], [0.13260155, 0.5], [0.0, 0.5], [-0.13260155, 0.5], [-0.25978993539242673, 0.44731684579412084], [-0.3535533905932738, 0.3535533905932738], [-0.44731684579412084, 0.25978993539242673], [-0.5, 0.13260155], [-0.5, 0.0], [-0.5, -0.13260155], [-0.44731684579412084, -0.25978993539242673], [-0.3535533905932738, -0.3535533905932738], [-0.25978993539242673, -0.44731684579412084], [-0.13260155, -0.5], [0.0, -0.5]], ["M", "C", "C", "C", "C", "C", "C", "C", "C", "Z"]]], "pathtransforms": [[10.0, 0.0, 0.0, 10.0, 0.0, 0.0]], "alphas": [0.8], "edgecolors": ["rgba(31, 119, 180, 0.8)"], "facecolors": ["rgba(31, 119, 180, 0.8)"], "edgewidths": [1.0], "offsetcoordinates": "data", "pathcoordinates": "display", "zorder": 1, "id": "el794345361070480"}], "images": [], "sharex": [], "sharey": []}], "data": {"data01": [[80.0, 4.28450068318186], [80.60606060606061, 4.285894155574398], [81.21212121212122, 4.288144981586989], [81.81818181818181, 4.291253161219637], [82.42424242424242, 4.2952186944723385], [83.03030303030303, 4.300041581345095], [83.63636363636364, 4.305721821837906], [84.24242424242425, 4.312259415950772], [84.84848484848484, 4.319654363683691], [85.45454545454545, 4.327906665036665], [86.06060606060606, 4.337016320009695], [86.66666666666667, 4.346983328602779], [87.27272727272728, 4.357807690815918], [87.87878787878788, 4.36948940664911], [88.48484848484848, 4.382028476102358], [89.0909090909091, 4.3954248991756595], [89.6969696969697, 4.409678675869017], [90.3030303030303, 4.424789806182429], [90.9090909090909, 4.440758290115895], [91.51515151515152, 4.457584127669414], [92.12121212121212, 4.47526731884299], [92.72727272727273, 4.493807863636619], [93.33333333333333, 4.513205762050304], [93.93939393939394, 4.533461014084043], [94.54545454545455, 4.5545736197378375], [95.15151515151516, 4.576543579011685], [95.75757575757575, 4.599370891905587], [96.36363636363636, 4.623055558419545], [96.96969696969697, 4.647597578553557], [97.57575757575758, 4.672996952307624], [98.18181818181819, 4.699253679681745], [98.78787878787878, 4.726367760675919], [99.39393939393939, 4.75433919529015], [100.0, 4.783167983524436], [100.60606060606061, 4.8128541253787755], [101.21212121212122, 4.84339762085317], [101.81818181818181, 4.874798469947617], [102.42424242424242, 4.9070566726621205], [103.03030303030303, 4.940172228996679], [103.63636363636364, 4.974145138951292], [104.24242424242425, 5.00897540252596], [104.84848484848484, 5.044663019720679], [105.45454545454545, 5.081207990535456], [106.06060606060606, 5.1186103149702875], [106.66666666666667, 5.156869993025174], [107.27272727272728, 5.195987024700112], [107.87878787878788, 5.235961409995107], [108.48484848484848, 5.276793148910158], [109.0909090909091, 5.318482241445261], [109.6969696969697, 5.361028687600421], [110.30303030303031, 5.404432487375633], [110.9090909090909, 5.4486936407709], [111.51515151515152, 5.493812147786222], [112.12121212121212, 5.5397880084216], [112.72727272727272, 5.5866212226770315], [113.33333333333334, 5.634311790552519], [113.93939393939394, 5.682859712048056], [114.54545454545455, 5.732264987163653], [115.15151515151516, 5.782527615899301], [115.75757575757575, 5.833647598255006], [116.36363636363637, 5.8856249342307665], [116.96969696969697, 5.93845962382658], [117.57575757575758, 5.992151667042446], [118.18181818181819, 6.046701063878372], [118.78787878787878, 6.102107814334348], [119.3939393939394, 6.158371918410381], [120.0, 6.215493376106467], [120.60606060606061, 6.273472187422608], [121.21212121212122, 6.332308352358802], [121.81818181818181, 6.392001870915053], [122.42424242424242, 6.452552743091359], [123.03030303030303, 6.513960968887718], [123.63636363636364, 6.576226548304134], [124.24242424242425, 6.639349481340601], [124.84848484848484, 6.703329767997125], [125.45454545454545, 6.768167408273701], [126.06060606060606, 6.833862402170336], [126.66666666666667, 6.900414749687022], [127.27272727272728, 6.967824450823766], [127.87878787878788, 7.036091505580558], [128.4848484848485, 7.1052159139574105], [129.0909090909091, 7.1751976759543155], [129.6969696969697, 7.246036791571275], [130.3030303030303, 7.317733260808292], [130.9090909090909, 7.390287083665361], [131.5151515151515, 7.4636982601424835], [132.12121212121212, 7.537966790239664], [132.72727272727272, 7.6130926739568965], [133.33333333333334, 7.689075911294186], [133.93939393939394, 7.765916502251527], [134.54545454545456, 7.843614446828926], [135.15151515151516, 7.922169745026373], [135.75757575757575, 8.00158239684388], [136.36363636363637, 8.081852402281442], [136.96969696969697, 8.162979761339056], [137.57575757575756, 8.244964474016724], [138.1818181818182, 8.327806540314452], [138.78787878787878, 8.41150596023223], [139.3939393939394, 8.496062733770065], [140.0, 8.581476860927953]], "data02": [[79.97123250405761, 4.2], [80.33467898413892, 4.2], [99.91658858957496, 5.2], [99.80911365875477, 4.9], [100.3376148664168, 5.0], [100.15352438488472, 4.7], [110.47386634980094, 5.2], [110.38411579267739, 4.9], [109.76632130114302, 5.7], [109.73946081175878, 5.5], [119.50871718400913, 6.6], [120.19342045322395, 5.8], [120.44388656563518, 6.1], [119.96309177341352, 6.1], [120.30896932578692, 5.7], [130.2281132535957, 7.8], [130.00221985564409, 8.0], [130.22130344599339, 7.0], [129.59037488289346, 7.2], [129.6098388842891, 7.0], [140.25165717955156, 8.5]]}, "id": "el794345355551280", "plugins": [{"type": "reset"}, {"type": "zoom", "button": true, "enabled": false}, {"type": "boxzoom", "button": true, "enabled": false}]});
            })
         });
}