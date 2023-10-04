<template>
    <div class="container position-relative content-section margin-jitter overflow-visible">
        <div class="container heading-wrapper overflow-visible">
            <h3 class="overflow-visible">PROJECTS</h3>
        </div>
    </div>
</template>



<script>
export default {
    setup() {
        return {
        };
    },
};
</script>
 

<style lang="scss" scoped>

.content-section {
    background:var(--black);
    text-align: center;
    padding: 3.5rem 0 6rem;
    // margin-top: 2px;
}
.heading-wrapper{
    h3{
        color:white;
        padding:.1rem 0;
        font-weight: 600;
        text-decoration: underline;
        text-underline-offset: 1rem;
    }
}
.content-wrapper{
    padding:1.5rem 0 1rem;
    h5{
        color:white;
        overflow:visible;
    }
}


</style>
