<template>
    <div class="margin-jitter">
        <div class="container position-relative content-section margin-jitter">
            <div class="container heading-wrapper">
                <h3 class="fontface-antonio">SELECTED <span class="yellow-color fontface-antonio font-size-inherit">GOOD
                        WORK</span></h3>
            </div>
        </div>
        <RoundBGComponent v-for="(item, index) in data" :key="index" :number="index + 1" :title="item.title"
            :description="item.description" :topColor="item.top_color" :backgroundColor="item.background_color"
            :textColor="item.text_color" :leftCardUrl="item.left_card_url" :rightCardUrl="item.right_card_url" />
    </div>
</template>

<script>
import RoundBGComponent from '@/components/common/RoundBGComponent.vue';
import { getCSSVariableValue } from '@/utils/utils';
export default {
    setup() {
        const data = [
            {
                "title": "TITAN",
                "description": "What we did: Motion Graphics & Ad Designing",
                "top_color": getCSSVariableValue('--black'),
                "background_color": getCSSVariableValue('--yellow'),
                "text_color": getCSSVariableValue('--black'),
                "left_card_url": "https://images.ctfassets.net/8b1jz4cf6kyy/6aosNheaRtPUBQRf4RE2fx/48291d8abbe63cccb400c9efa0660fc1/45.png?w=1024&fm=webp&q=92",
                "right_card_url": "https://images.ctfassets.net/8b1jz4cf6kyy/6aosNheaRtPUBQRf4RE2fx/48291d8abbe63cccb400c9efa0660fc1/45.png?w=1024&fm=webp&q=92",
            },
            {
                "title": "SECRET ALCHEMIST",
                "description": "What we did: Motion Graphics & Ad Designing",
                "top_color": getCSSVariableValue('--yellow'),
                "background_color": getCSSVariableValue('--almond'),
                "text_color": getCSSVariableValue('--black'),
                "left_card_url": "https://images.ctfassets.net/8b1jz4cf6kyy/6aosNheaRtPUBQRf4RE2fx/48291d8abbe63cccb400c9efa0660fc1/45.png?w=1024&fm=webp&q=92",
                "right_card_url": "https://images.ctfassets.net/8b1jz4cf6kyy/6aosNheaRtPUBQRf4RE2fx/48291d8abbe63cccb400c9efa0660fc1/45.png?w=1024&fm=webp&q=92",
            },
            {
                "title": "ASA BEAUTY",
                "description": "What we did: Motion Graphics & Ad Designing",
                "top_color": getCSSVariableValue('--almond'),
                "background_color": getCSSVariableValue('--black'),
                "text_color": getCSSVariableValue('--white'),
                "left_card_url": "https://images.ctfassets.net/8b1jz4cf6kyy/6aosNheaRtPUBQRf4RE2fx/48291d8abbe63cccb400c9efa0660fc1/45.png?w=1024&fm=webp&q=92",
                "right_card_url": "https://images.ctfassets.net/8b1jz4cf6kyy/6aosNheaRtPUBQRf4RE2fx/48291d8abbe63cccb400c9efa0660fc1/45.png?w=1024&fm=webp&q=92",
            }
        ]
        return {
            data,
        }
    },
    components: {
        RoundBGComponent,
    },
}
</script>

<style lang="scss" scoped>
.content-section {
    background: var(--black);
    text-align: center;
    padding: 3.5rem 0 1rem;
}

.heading-wrapper {
    h3 {
        color: white;
    }
}
</style>