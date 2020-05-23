
import React from 'react';

export default class Logo extends React.Component {

    renderLogo  = () => {
        return (/*
            <svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" enable-background="new 0 0 512 512" height="512px" viewBox="0 0 512 512" width="512px" class="">
                <g><g><g><g clip-rule="evenodd" fill-rule="evenodd">
                    <path d="m172.488 360.616h-29.053-46.582-29.053l-60.3 60.3v83.584h225.288v-83.584z" fill="#d0dbef" data-original="#D0DBEF" class=""/>
                    <path d="m504.5 420.916-60.3-60.3h-29.053-46.583-29.052l-60.3 60.3v83.584h225.288z" fill="#ed9b88" data-original="#ED9B88" class="" style="fill:#F077E6" data-old_color="#ed9b88"/>
                    <path d="m457.319 288.261-22.641-25.337h-108.284v50.673l42.17 47.019h46.583l42.171-47.019z" fill="#fadfc0" data-original="#FADFC0" class=""/>
                    <path d="m457.318 262.924c0-36.005-29.458-65.463-65.462-65.463s-65.462 29.458-65.462 65.463h108.284l22.64 25.336z" fill="#f7ec91" data-original="#F7EC91" class="active-path" style="fill:#E299DC" data-old_color="#f7ec91"/>
                    <path d="m438.88 22.501-15-15.001h-147.253l-15 15.001 15 15v96.041h131.38l30.862 20.498z" fill="#a7eed4" data-original="#A7EED4" class="" style="fill:#91CCEC" data-old_color="#a7eed4"/>
                    <path d="m54.681 288.261 22.641-25.337h108.284v50.673l-42.171 47.019h-46.582l-42.171-47.019z" fill="#fadfc0" data-original="#FADFC0" class=""/>
                    <path d="m54.682 262.924c0-36.005 29.458-65.463 65.462-65.463s65.462 29.458 65.462 65.463h-108.284l-22.64 25.336z" fill="#5a5a5d" data-original="#5A5A5D" class=""/>
                    <path d="m97.8 360.616h-.947-29.053l-60.3 60.3v83.584h30v-83.584z" fill="#a0b6de" data-original="#A0B6DE"/>
                    <path d="m369.512 360.616h-.948-29.052l-60.3 60.3v83.584h30v-83.584z" fill="#e76c4c" data-original="#E76C4C" class="" style="fill:#F0AEEB" data-old_color="#e76c4c"/>
                    <path d="m54.681 288.261 22.641-25.337h7.36v25.335l-.001.002.001 25.336 42.17 47.019h-29.999l-42.171-47.019z" fill="#f2d1a5" data-original="#F2D1A5" class=""/>
                    <path d="m54.682 262.924c0-36.005 29.458-65.463 65.462-65.463 5.157 0 10.179.607 15 1.748-28.838 6.827-50.462 32.867-50.462 63.715h-7.36l-22.64 25.336z" fill="#4b4b4e" data-original="#4B4B4E" class=""/>
                    <path d="m356.394 262.924h-30v50.673l42.17 47.019h30l-42.17-47.019z" fill="#f2d1a5" data-original="#F2D1A5" class=""/>
                    <path d="m406.856 199.208c-4.821-1.141-9.843-1.748-15-1.748-36.004 0-65.462 29.458-65.462 65.463h30c0-30.848 21.624-56.887 50.462-63.715z" fill="#edd52e" data-original="#EDD52E" class="" style="fill:#F0AEEB" data-old_color="#edd52e"/>
                    <path d="m261.627 22.501h-147.253l-15.001 15 .012 131.54 30.861-20.498h131.381l15-15v-96.042z" fill="#f7ec91" data-original="#F7EC91" class="active-path" style="fill:#E299DC" data-old_color="#f7ec91"/>
                    <path d="m144.373 22.501h-29.999l-15.001 15 .012 131.54 29.998-19.924-.01-111.616z" fill="#edd52e" data-original="#EDD52E" class="" style="fill:#F0AEEB" data-old_color="#edd52e"/></g><g><path d="m467 467h15v15h-15z" fill="#fff" data-original="#FFF" class=""/></g><g><path d="m195.288 467h15v15h-15z" fill="#fff" data-original="#FFF" class=""/></g><g><path d="m422.001 467h30v15h-30z" fill="#fff" data-original="#FFF" class=""/></g><g><path d="m150.289 467h30v15h-30z" fill="#fff" data-original="#FFF" class=""/></g><path clip-rule="evenodd" d="m306.627 7.5h-30l-15 15 15 15v96.041h30v-96.04l-15-15zm101.38 126.042 30.862 20.498.002-19.924-.864-.574z" fill="#71e4bf" fill-rule="evenodd" data-original="#71E4BF" class="" style="fill:#819CBE" data-old_color="#71e4bf"/></g><g><path d="m210.5 57.107h15v51.875h-15z" data-original="#000000" class="" style="fill:#000000"/><path d="m150.5 86.863h15v22.118h-15z" data-original="#000000" class="" style="fill:#000000"/><path d="m180.5 72.106h15v36.875h-15z" data-original="#000000" class="" style="fill:#000000"/><path d="m447.307 353.116h-15.359l32.869-36.649v-53.543c0-40.232-32.73-72.963-72.962-72.963-40.23 0-72.961 32.731-72.961 72.963v53.543l32.869 36.649h-15.359l-64.693 64.693v94.191h68.145v-15h-53.145v-72.978l55.906-55.906h98.476l55.907 55.906v72.978h-142.143v15h157.143v-94.19zm-55.452-148.156c31.96 0 57.962 26.002 57.962 57.963v5.686l-11.783-13.186h-103.638c3.691-28.428 28.042-50.463 57.459-50.463zm-57.96 105.766v-40.302h97.427l18.496 20.698v19.604l-38.017 42.39h-39.888z" data-original="#000000" class="" style="fill:#000000"/><path d="m405.743 141.042 40.625 26.982.004-51.482-15-.001-.002 23.516-21.099-14.015h-126.144v-91.647l-11.894-11.895 7.5-7.5h141.04l10.608 10.607-.008 75.933 15 .002.008-82.148-19.395-19.394h-153.465l-15.001 15h-106.646v15h106.646l10.607 10.607v89.829l-10.606 10.607h-130.539l-21.098 14.014-.011-114.45 10.607-10.607h19.393v-15h-25.605l-19.395 19.395.013 148.629 40.624-26.981h132.223l15.001-15.001z" data-original="#000000" class="" style="fill:#000000"/><path d="m160.236 353.116 32.869-36.649v-53.543c0-40.232-32.73-72.963-72.961-72.963s-72.962 32.731-72.962 72.963v53.543l32.869 36.649h-15.358l-64.693 64.694v94.19h240.288v-94.19l-64.693-64.693h-15.359zm-98.053-42.39v-19.605l18.495-20.697h18.224v-15h-24.937l-11.782 13.185v-5.685c0-31.961 26.002-57.963 57.962-57.963 29.417 0 53.768 22.035 57.459 50.463h-63.702v15h64.203v40.302l-38.017 42.39h-39.888zm163.105 186.274h-210.288v-72.978l55.906-55.906h98.476l55.906 55.906z" data-original="#000000" class="" style="fill:#000000"/><path d="m312.754 73.271h15.198v15h-15.198z" data-original="#000000" class="" style="fill:#000000"/><path d="m342.903 73.271h14.95v15h-14.95z" data-original="#000000" class="" style="fill:#000000"/><path d="m372.804 73.271h14.95v15h-14.95z" data-original="#000000" class="" style="fill:#000000"/>
                </g></g></g> 
            </svg>*/
            <div> logo </div>
        );
    }

    render(){
        return this.renderLogo();
    }
}

