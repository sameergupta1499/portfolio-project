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
                    <h6 class="white-color" v-html="item.content"></h6>
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
                    content: `<b>Project</b>: AI-powered Supply Chain software suite for ThroughPut Inc.<br/>
                                <b>Details</b>:  A web application for supply chain management that focuses on providing detailed pages for demand, inventory, customers, and more.<br/>
                                <b>Tech</b>: Python, Django Rest Framework, Nginx, Gunicorn, Redis, PostgreSQL, Vue 3, HTML, CSS, Django CMS, Linux servers, GitHub Actions, Docker, and more. <br/>
                                <b>Contribution</b>:<br/>
                                <b>-</b> Developed and maintained a supply chain management web application based on Django Rest Framework with a PostgreSQL backend and provided support for the Vue 3-based frontend.<br/>
                                <b>-</b> Set up development and staging Linux-based servers from scratch, configuring Nginx, Gunicorn, Docker, Redis, and GitHub workflows.<br/>
                                <b>-</b> Implemented a JWT-based authorization system along with TOTP for custom user management. Additionally, created a cookie-based Single Sign-On (SSO) solution for multiple applications running on the same domain with different custom permissions.<br/>
                                <b>-</b> Integrated the third-party service Tray.io for data integration.<br/>
                                <b>-</b> Developed multiple APIs and django admin pages as per the project requirement.`
                    ,
                },
                {
                    title: 'TATA CONSULTANCY SERVICES LTD.',
                    date: 'System Engineer · Jun 2019 - Jan 2022 · 2 yrs 8 mos',
                    content: `<b>Project - 1</b>: Retail Strategic Initiatives  (Oct 2020 - Jan 2022)<br/>
                                <b>Details</b>: Django web application for R&D project at TCS focused on addressing real-world challenges by developing and selling AI and ML Proof of Concepts (POCs). Solutions included sentiment analysis, item property recognition, deep tagging, and more. <br/>
                                <b>Tech</b>: Python, Django Rest Framework, Python-Dash, Plotly, Pandas, RESTful API, HTML, CSS, Postman, GitLab <br/>
                                <b>Contribution</b>:<br/>
                                <b>-</b> Created and maintained a Django web application for hosting AI solutions.<br/>
                                <b>-</b> Collaborated on the Supplier Portal project in Django Rest Framework with Angular frontend developers.
                                <br/><br/><b>Project - 2</b>: Drug Research Management System (Jun 2019 - Sep 2020)<br/>
                                <b>Details</b>: Developed Plansource, a web application for managing the drug lifecycle at Roche Pharmaceuticals, covering financial planning, timeline management, R&D, portfolio, drug studies, and user access. <br/>
                                <b>Tech</b>: React, HTML, CSS, Python, PyCharm, PostgreSQL, GitHub, JIRA, Django Rest Framework <br/>
                                <b>Contribution</b>:<br/>
                                <b>-</b> Migrated Plansource web application to a modern Redux-based React framework. <br/>
                                <b>-</b> Collaborated in a sprint-based Agile web development environment using JIRA, while also creating Python backend development with Django APIs, managing AWS-hosted servers, and overseeing PostgreSQL databases.
                                `,
                },
                {
                    title: 'LANDIS + GYR LTD. (Internship)',
                    date: 'Intern · May 2018 - Jul 2018 · 3 mos',
                    content: `<b>Project</b>: Python GUI based embedded system linker file generation <br/>
                                <b>Detail</b>: Python GUI Application for converting Excel and CSV files into comparable XML files, enhancing version control on GitHub. <br/>
                                <b>Tech</b>: Python, wxPython, XML, Pandas, Numpy <br/>
                                <b>Contribution</b>:<br/>
                                <b>-</b> Project consists of developing a Dynamic Python based GUI, creating an XML database and scripting in Python for linker file generation.<br/>
                                `,
                },
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
h6 {
    overflow: visible;
    line-height: 1.5rem;
}
@media (max-width: 768px) {
    .timeline {
        max-width: 70%;
    }
}
</style>
  