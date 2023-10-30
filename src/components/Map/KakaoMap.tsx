import React, { useState, useEffect } from 'react';

declare global {
    interface Window {
        kakao: any; // kakao 객체 타입 선언
    }
}

interface propsParam {
    value?: string;
    onChange?: any;
    marker?: boolean;
}

function KakaoMap(props: propsParam) {
    const [isKeyword, setKeyword] = useState(props.value ? props.value : ' ');

    useEffect(() => {
        setKeyword(props.value ? props.value : ' ');
    }, [props.value]);

    useEffect(() => {
        const infowindow = new window.kakao.maps.InfoWindow({ zIndex: 1 });

        const mapContainer = document.getElementById('map');
        const mapOption = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667),
            level: 3
        };

        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        const ps = new window.kakao.maps.services.Places();

        ps.keywordSearch(isKeyword, placesSearchCB);

        function placesSearchCB(data: any, status: any, pagination: any) {
            if (status === window.kakao.maps.services.Status.OK) {
                const bounds = new window.kakao.maps.LatLngBounds();

                for (let i = 0; i < data.length; i++) {
                    props.marker ? displayMarker(data[i]) : void 0;
                    bounds.extend(new window.kakao.maps.LatLng(data[i].y, data[i].x));
                }

                map.setBounds(bounds);
            }
        }

        function displayMarker(place: any) {
            const marker = new window.kakao.maps.Marker({
                map,
                position: new window.kakao.maps.LatLng(place.y, place.x)
            });

            window.kakao.maps.event.addListener(marker, 'click', function () {
                infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
                infowindow.open(map, marker);
                props.onChange(place.address_name);
            });
        }
    }, [isKeyword]);

    return <div id='map' style={{ width: '100%', height: '100%' }} />;
}

export default KakaoMap;
