function googleMap() {
	console.log("maps")
    $('.map').each(function(i, e) {
        $map = $(e);
        $map_lat = $map.attr('data-mapLat');
        $map_lon = $map.attr('data-mapLon');
        $map_zoom = parseInt($map.attr('data-mapZoom'));
        $map_title = $map.attr('data-mapTitle');
        $map_info = $map.attr('data-info');
        $map_img = $map.attr('data-img');
        $map_color = $map.attr('data-color');
        $map_height = $map.attr('data-height');
        var latlng = new google.maps.LatLng($map_lat, $map_lon);
        var options = {
            scrollwheel: false,
            draggable: false,
            zoomControl: false,
            disableDoubleClickZoom: true,
            disableDefaultUI: true,
            zoom: $map_zoom,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var red1 = "#fd685b",
            red2 = "#fe8e84",
            orange1 = "#fa6f57",
            orange2 = "#fb9381",
            yellow1 = "#fecd5e",
            yellow2 = "#fedc8f",
            green1 = "#a1d26e",
            green2 = "#b9dd92",
            mint1 = "#4fcead",
            mint2 = "#7bdac2",
            aqua1 = "#4FC1E9",
            aqua2 = "#73d2f4",
            blue1 = "#5D9CEC",
            blue2 = "#86b5f1",
            purple1 = "#ab94e9",
            purple2 = "#c0afef",
            pink1 = "#ea89bf",
            pink2 = "#efa7cf",
            white1 = "#E6E9ED",
            white2 = "#F5F7FA",
            grey1 = "#AAB2BD",
            grey2 = "#CCD1D9",
            darkgrey1 = "#434A54",
            darkgrey2 = "#5f656d";
        if ($map_color == 'red') {
            var styles = [{
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "water",
                    "stylers": [{
                        "color": red1
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape.natural",
                    "stylers": [{
                        "color": red2
                    }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "poi",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "road",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape.man_made",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }],
                textcolor = red1;
        }
        if ($map_color == 'orange') {
            var styles = [{
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "water",
                    "stylers": [{
                        "color": orange1
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape.natural",
                    "stylers": [{
                        "color": orange2
                    }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "poi",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "road",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape.man_made",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }],
                textcolor = orange1;
        }
        if ($map_color == 'yellow') {
            var styles = [{
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "water",
                    "stylers": [{
                        "color": yellow1
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape.natural",
                    "stylers": [{
                        "color": yellow2
                    }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "poi",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "road",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape.man_made",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }],
                textcolor = yellow1;
        }
        if ($map_color == 'green') {
            var styles = [{
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "water",
                    "stylers": [{
                        "color": green1
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape.natural",
                    "stylers": [{
                        "color": green2
                    }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "poi",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "road",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape.man_made",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }],
                textcolor = green1;
        }
        if ($map_color == 'mint') {
            var styles = [{
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "water",
                    "stylers": [{
                        "color": mint1
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape.natural",
                    "stylers": [{
                        "color": mint2
                    }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "poi",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "road",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape.man_made",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }],
                textcolor = mint1;
        }
        if ($map_color == 'aqua') {
            var styles = [{
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "water",
                    "stylers": [{
                        "color": aqua1
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape.natural",
                    "stylers": [{
                        "color": aqua2
                    }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "poi",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "road",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape.man_made",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }],
                textcolor = aqua1;
        }
        if ($map_color == 'blue') {
            var styles = [{
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "water",
                    "stylers": [{
                        "color": blue1
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape.natural",
                    "stylers": [{
                        "color": blue2
                    }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "poi",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "road",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape.man_made",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }],
                textcolor = blue1;
        }
        if ($map_color == 'purple') {
            var styles = [{
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "water",
                    "stylers": [{
                        "color": purple1
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape.natural",
                    "stylers": [{
                        "color": purple2
                    }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "poi",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "road",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape.man_made",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }],
                textcolor = purple1;
        }
        if ($map_color == 'pink') {
            var styles = [{
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "water",
                    "stylers": [{
                        "color": pink1
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape.natural",
                    "stylers": [{
                        "color": pink2
                    }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "poi",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "road",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape.man_made",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }],
                textcolor = pink1;
        }
        if ($map_color == 'white') {
            var styles = [{
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "water",
                    "stylers": [{
                        "color": white1
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape.natural",
                    "stylers": [{
                        "color": white2
                    }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "poi",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "road",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape.man_made",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }],
                textcolor = '#333';
        }
        if ($map_color == 'grey') {
            var styles = [{
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "water",
                    "stylers": [{
                        "color": grey1
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape.natural",
                    "stylers": [{
                        "color": grey2
                    }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "poi",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "road",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape.man_made",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }],
                textcolor = '#333';
        }
        if ($map_color == 'dark-grey') {
            var styles = [{
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "water",
                    "stylers": [{
                        "color": darkgrey1
                    }]
                }, {
                    "featureType": "water",
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape.natural",
                    "stylers": [{
                        "color": darkgrey2
                    }]
                }, {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "poi",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "road",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "landscape.man_made",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "administrative",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }],
                textcolor = '#333';
        }
        if ($map_color == 'invert') {
            var styles = [{
                    "stylers": [{
                        "invert_lightness": "true"
                    }, {
                        "hue": "0xffbb00"
                    }, {
                        "saturation": "-100"
                    }, {
                        "lightness": "15"
                    }]
                }],
                textcolor = '#333';
        }
        var styledMap = new google.maps.StyledMapType(styles, {
            name: "Styled Map"
        });
        var map = new google.maps.Map($map[0], options);
        var icon = {
            url: $map_img,
            size: null,
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(26, 26),
            scaledSize: new google.maps.Size(52, 52)
        };
        var marker = new google.maps.Marker({
            position: latlng,
            title: $map_title,
            map: map,
            icon: icon
        });
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');
        var contentString = '<div class="infobox-inner" style="color: ' + textcolor + ';">' + $map_info + '</div>';
        var infobox = new InfoBox({
            content: contentString,
            disableAutoPan: false,
            maxWidth: 0,
            zIndex: null,
            boxStyle: {
                width: "280px"
            },
            closeBoxURL: "",
            pixelOffset: new google.maps.Size(-140, 40),
            infoBoxClearance: new google.maps.Size(1, 1)
        });
        if (!$map.parent('div').is('#intro')) {
            $map.css({
                'height': $map_height + 'em'
            });
        } else {
            function adaptMapH() {
                var sectionH = $map.parent('#intro').height();
                $map.css({
                    'height': sectionH
                });
            }
            adaptMapH();
            $(window).resize(adaptMapH);
        }
        google.maps.event.addListener(marker, 'click', function() {
            infobox.open(map, marker);
        });
        infobox.open(map, marker);
        google.maps.event.addDomListener(window, "resize", function() {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });
    });
}

jQuery(document).ready(
	function($){
		if ($('.map').length) {
		    googleMap();
		}
	}
)