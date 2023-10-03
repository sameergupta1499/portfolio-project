<template>
    <div class="flexCenter vpW navbar transform-default" :class="{ 'navbar-hide': isNavbarHidden }" ref="navbarRef">
        <div class="navbar-logo-container">
            <a href="" class="logo-link">
                <img src="logo.png" id="logo-img" class="orange-hover"
                    alt="Logo" />
            </a>
        </div>
        <div class="navbar-logo-container">
            <a href="https://www.linkedin.com/in/sameer-gupta-a9531612a" class="logo-link" target="_blank">
                <img src="linkedin.png" class="contact-links" id="linkedin-img" alt="linkedin-img"/>
            </a>
            <a href="https://github.com/sameergupta1499" class="logo-link" target="_blank">
                <img src="github.png" class="contact-links" id="github-img" alt="github-img"/>
            </a>
            <a href="" class="logo-link" target="_blank">
                <img src="resume.png" class="contact-links" id="resume-img" alt="resume-img"/>
            </a>
        </div>
    </div>
</template>
  

<script>
import { watch, ref, computed } from 'vue';
import { useScrollTracker } from '@/utils/useScrollTracker.js';
export default {
    setup() {
        const { scrollY, viewportWidth, viewportHeight } = useScrollTracker();
        const navbarRef = ref(null)
        const isNavbarHidden = ref(false);
        let prevScrollY = 0;
        const navState = ref("NONE")
        let accumulatedScroll = 0;

        watch(scrollY, (newValue) => {
            const threshold = 200;

            // Calculate the difference in scroll position
            const scrollDifference = newValue - prevScrollY;

            // Check if the user is scrolling up
            if (scrollDifference < 0) {
                accumulatedScroll += Math.abs(scrollDifference);
            } else {
                accumulatedScroll = 0;
            }

            if (accumulatedScroll >= threshold || newValue === 0) {
                isNavbarHidden.value = false; // Show the navbar
            } else {
                isNavbarHidden.value = true; // Hide the navbar
            }

            prevScrollY = newValue;
        });



        return {
            navState,
            navbarRef,
            isNavbarHidden
        };
    },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
@import "@/styles/animations.scss";

$logoHeight: 9vh;

.navbar {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    min-height: $navbar-height-l;
    margin: 0;
    padding: ($navbar-padding-l*.6) $x-gutter-l (
        $navbar-padding-l*.6) $x-gutter-l;
    justify-content: space-between;
    box-sizing: border-box;
    line-height: 1.2rem;
    background: transparent;
    transition: top 0.5s ease-out;

    // Vendor-specific prefixes for 'transition'
    -webkit-transition: top 0.5s ease-out;
    -moz-transition: top 0.5s ease-out;
    transition: top 0.5s ease-out;
}

.navbar-hide {
    top: - $navbar-height-l - ($navbar-padding-l * 2
    );

}

.navbar-item,
.navbar-logo-container {
    overflow: visible;
}

.navbar-menu-container {
    display: none;
    color: white;
    position: relative;
}


.navbar-hamburger-icon {
    height: $hamburger-icon-height;
    width: $hamburger-icon-height;


    svg {
        path {
            color: white;
        }

    }

}

//Logo in navbar
.navbar-logo-container {
    height: $logoHeight;
    padding: calc($navbar-padding-l * 0.7);
    // left: calc(50% + calc($navbar-padding-l * 0.7));
    // -webkit-transform: translateX(calc(-50% - calc($navbar-padding-l * 0.7)));
    // /* Safari and Chrome */
    // -moz-transform: translateX(calc(-50% - calc($navbar-padding-l * 0.7)));
    // /* Firefox */
    // -ms-transform: translateX(calc(-50% - calc($navbar-padding-l * 0.7)));
    // /* IE */
    // -o-transform: translateX(calc(-50% - calc($navbar-padding-l * 0.7)));
    // /* Opera */
    // transform: translateX(calc(-50% - calc($navbar-padding-l * 0.7)));
}

#logo-img {
    height: 80%;
    width: auto;
    object-fit: contain;
}
.contact-links {
    height: 70%;
    width: auto;
    object-fit: contain;
    margin: 1rem 1rem;
}

@media (max-width: 768px) {
    .navbar-logo-container {
        height: $logoHeight-s;
    }

    .navbar {
        padding: $navbar-padding-s $x-gutter-s 0 $x-gutter-s;
        line-height: 1.2rem;
    }

    .navbar-navbar {
        display: none;
    }

    .navbar-menu-container {
        display: flex;
        width: 100%;
        justify-content: flex-end;

    }

    .navbar-list.collapsed {
        flex-direction: column;
        align-items: flex-start;
        background-color: rgba(0, 0, 0, 0.4);
        width: 20rem;

        li {
            padding: 2rem 1rem;
            line-height: 1.2rem;
        }
    }

}

// Navigation in navbar
.navbar-list {
    display: flex;
    flex-direction: row;

    li {
        a {
            h6 {
                font-weight: 300;
                color: white;
            }

        }

    }
}

.margin-right {
    margin-right: 2vw;
}

.margin-left {
    margin-left: 2vw;
}
</style>
