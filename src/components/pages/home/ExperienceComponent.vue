<template>
    <SectionHeadingComponent data="EXPERIENCE" section_id="section_experience" />
    <div class="timeline-container flexCenter">
        <div class="timeline flexCenterColumn overflow-visible">
            <div class="tl-content overflow-visible" v-for="(item, index) in timelineItems" :key="index">
                <div class="tl-header overflow-visible">
                    <span class="tl-marker overflow-visible"></span>
                    <h5 class="tl-title white-color">{{ item.title }}</h5>
                    <h6 class="tl-time overflow-visible">{{ item.date }}</h6>
                </div>
                <div class="tl-body">
                    <h6 class="white-color">{{ item.content }}</h6>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import SectionHeadingComponent from '@/components/pages/home/SectionHeadingComponent.vue';
export default {
    name: 'Timeline',
    data() {
        return {
            timelineItems: [
                {
                    title: 'ACCENTURE SOLUTIONS PRIVATE LTD.',
                    date: 'Applications Development Senior Analyst · Jan 2022 - Oct 2023 · 1 yr 10 mos',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore, eum quibusdam velit enim iste culpa eveniet aliquam. Veniam, quasi fugiat? Vitae nobis cupiditate iure autem beatae consequuntur nam! Animi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore, eum quibusdam velit enim iste culpa eveniet aliquam. Veniam, quasi fugiat? Vitae nobis cupiditate iure autem beatae consequuntur nam! Animi!',
                },
                {
                    title: 'TATA CONSULTANCY SERVICES LTD.',
                    date: 'System Engineer · Jun 2019 - Jan 2022 · 2 yrs 8 mos',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore, eum quibusdam velit enim iste culpa eveniet aliquam. Veniam, quasi fugiat? Vitae nobis cupiditate iure autem beatae consequuntur nam! Animi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore, eum quibusdam velit enim iste culpa eveniet aliquam. Veniam, quasi fugiat? Vitae nobis cupiditate iure autem beatae consequuntur nam! Animi!',
                },
                {
                    title: 'LANDIS + GYR LTD. (Internship)',
                    date: 'Intern · May 2018 - Jul 2018 · 3 mos',
                    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore, eum quibusdam velit enim iste culpa eveniet aliquam. Veniam, quasi fugiat? Vitae nobis cupiditate iure autem beatae consequuntur nam! Animi! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam labore, eum quibusdam velit enim iste culpa eveniet aliquam. Veniam, quasi fugiat? Vitae nobis cupiditate iure autem beatae consequuntur nam! Animi!',
                },
                // Add more timeline items here
            ],
        };
    },
    components: {
        SectionHeadingComponent
    },
}
</script>
  
<style lang="scss" scoped>
$max-timeline-width: 60%;

.timeline-container {}

.timeline {
    padding: 3rem 2rem;
    max-width: 460px;
    border-radius: 12px;
    background-color: transparent;
    /* Change background to transparent */
    box-shadow: none;
    /* Remove the box-shadow */
    max-width: $max-timeline-width;
    align-items: flex-start;
}

/* Update lines and text circle to white */
.tl-content .tl-header,
.tl-content .tl-body {
    padding-left: 25.6px;
    border-left: 3px solid white;
    /* Change border color to white */
}

.tl-header {
    position: relative;
}

.tl-body {
    padding: 1rem 0 2rem;
}

.tl-content {
    width: 100%;
}

.tl-title {
    width: 100%;
    font-weight: 600;
    border-bottom: 1px solid white;
    /* Change border color to white */
}

.tl-time {
    font-size: 0.7em;
    padding-top: .5rem;
    color: white;
    /* Change text color to white */
}

.tl-marker {
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50% / 50%;
    background: white;
    /* Change background color to white */
    left: -16px;
    ;
    top: 50%;
    transform: translate(50%, -50%);
}

.tl-content-active .tl-marker {
    padding: 1.6px;
    left: -1.25rem;
    width: 18px;
    height: 18px;
    border: 2px solid white;
    /* Change border color to white */
    background-color: white;
    /* Change background color to white */
    background-clip: content-box;
    box-shadow: 0 0 15px -2px white;
    /* Change box-shadow color to white */
}

.tl-content-active .tl-title {
    font-weight: 700;
    color: white;
    /* Change text color to white */
}

@media (max-width: 768px) {
    .timeline {
        max-width: 70%;
    }
}
</style>
  