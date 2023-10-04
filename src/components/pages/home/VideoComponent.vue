<template>
    <div class="video-container flexCenter position-relative">
        <div class="video-wrapper">
            <video autoplay loop muted playsinline>
                <source :src="videoSrc" type="video/mp4">
            </video>
        </div>
    </div>
</template>



<script>
import { watch, ref, onMounted } from 'vue';
export default {
    props: {
        videoSrc: String, // Define the prop type as String
    },
    setup() {
        return {
        };
    },
    components: {
    },
};
</script>
 
<style lang="scss" scoped>
$video-width: 40%;
// $padding-slide-padding-top: 5vh;
// .video-container {
//     width: 100vw;
//     height: 52.36vw; //depends on the aspect ratio. Explicitly set the height 
//     background:pink;
// }

.video-container {
    width: $video-width;
    height: calc($video-width / 1.91);
    /* Set the height based on the aspect ratio */
    background: black;
    box-sizing: border-box;
    // margin: -1px 0; // to remove the top and bottom line that comes due to background mismatch (glitch)

    // Vendor-specific prefixes for 'box-sizing'
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    // Vendor-specific prefixes for 'margin'
    -webkit-margin: -1px 0;
    -moz-margin: -1px 0;
    margin: -1px 0;
}

.video-wrapper {
    height: 100%;
    border-radius: 3rem;

    // Vendor-specific prefixes for 'border-radius'
    -webkit-border-radius: 3rem;
    -moz-border-radius: 3rem;
    border-radius: 3rem;
    border: 2px solid white;
}

.video-wrapper video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Maintain aspect ratio and cover container */

    // Vendor-specific prefixes for 'object-fit'
    -o-object-fit: cover;
    object-fit: cover;
}

@media (max-width: 768px) {

    // Adjust the breakpoint as needed for desktop
    .video-container {
        width: 80%;
        height: calc(70% / 1.91);
    }

    .video-wrapper {
        // border-radius: 3rem;
        // height: 70%;
        // -moz-border-radius: 3rem;
        // border-radius: 3rem;
    }
}
</style>
