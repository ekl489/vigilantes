<template>
    <div id="app">
        <navigation :pages="pages"></navigation>
        <div class="container">
            <div class="columns">
                <div class="column is-one-quarter">
                    <sidebar
                    v-on:page="pageChange"
                    v-bind:page="page"
                    v-bind:pages="pages">
                    </sidebar>
                </div>
                <div class="column">
                    <article_view
                    v-on:page="pageChange"
                    v-bind:page="page"
                    v-bind:pages="pages">
                    </article_view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import navigation from './components/navigation'
import sidebar from './components/sidebar'
import article_view from './components/article_view'
import Icon from 'vue-awesome/components/Icon'

export default {
    name: 'app',

    components: {
        navigation,
        sidebar,
        article_view,
        Icon
    },

    data () {

        return {

          /*
            Page Properties:
            - id
            - title
            - group
            - author
            - content
            - icon
            - has_own_component
            - LinkDisplayStyle
            - LinkPage

            LinkDisplayStyle
            Hidden: 0
            SearchBarOnly: 1
            ParentSelected: 2
            Always: 3
          */

            pages: [
                {
                    id: 'Home',
                    title: 'Home',
                    group: 'General',
                    author: '',
                    content: '',
                    icon: 'home',
                    has_own_component: true,
                    LinkDisplayStyle: 3,
                }, // Home

                {
                    id: 'Podcasts',
                    title: 'Podcasts',
                    group: 'General',
                    author: '',
                    content: '',
                    icon: 'podcast',
                    has_own_component: true,
                    LinkDisplayStyle: 3
                }, // Podcasts

                {
                    id: 'Quiz',
                    title: 'Quiz',
                    group: 'General',
                    author: '',
                    content: '',
                    icon: 'question',
                    has_own_component: true,
                    LinkDisplayStyle: 0,
                }, // Quiz

                {
                    id: 'TheTeam',
                    title: 'The Team',
                    group: 'General',
                    author: '',
                    content: '',
                    icon: 'pencil-square',
                    has_own_component: true,
                    LinkDisplayStyle: 3
                }, // The Team

                {
                    id: 'DiscoverMore',
                    title: 'Discover More',
                    group: 'General',
                    author: '',
                    content: '',
                    icon: 'info-circle',
                    has_own_component: true,
                    LinkDisplayStyle: 3
                }, // Discover More

                {
                    id: 'UpdateLog',
                    title: 'Update Log',
                    group: 'General',
                    author: '',
                    content: '',
                    icon: 'cog',
                    has_own_component: true,
                    LinkDisplayStyle: 3
                }, // Update Log


                {
                    id: 'WorldHistory',
                    title: 'World History',
                    group: 'Vigilantes',
                    author: '',
                    content: '',
                    icon: 'university',
                    has_own_component: true,
                    LinkDisplayStyle: 3
                }, // World History

                {
                    id: 'Territory',
                    title: 'Territory',
                    group: 'Vigilantes',
                    author: '',
                    content: '',
                    icon: 'flag',
                    has_own_component: true,
                    LinkDisplayStyle: 1
                }, // Territory

                {
                    id: 'SubUniverses',
                    title: 'Sub-Universes',
                    group: 'Vigilantes',
                    author: '',
                    content: '',
                    icon: 'address-book',
                    has_own_component: true,
                    LinkDisplayStyle: 3,
                    pages: [
                        {
                            id: 'Viper', title: 'Viper', author: '', content: '', hasTabs: true,
                            icon: 'users', has_own_component: true, LinkPage: 'ViperViper', LinkDisplayStyle: 2,
                            pages: [
                                {
                                    id: 'ViperViper', title: 'Viper', author: '', content: '',
                                    icon: 'user', has_own_component: true, LinkDisplayStyle: 1,
                                },

                                {
                                    id: 'Tongyi', title: 'Tongyi', author: '', content: '',
                                    icon: 'user', has_own_component: true, LinkDisplayStyle: 1,
                                },

                                {
                                    id: 'JonathanPan', title: 'Three Eyed Warrior', author: '', content: '',
                                    icon: 'user', has_own_component: true, LinkDisplayStyle: 1,
                                },

                                {
                                    id: 'Longying', title: 'Longying', author: '', content: '',
                                    icon: 'user', has_own_component: true, LinkDisplayStyle: 1,
                                },

                                {
                                    id: 'MajorPatton', title: 'Major Patton', author: '', content: '',
                                    icon: 'user', has_own_component: true, LinkDisplayStyle: 1,
                                },
                            ]
                        },

                        {
                            id: 'SilverSpectre', title: 'Silver Spectre', author: '', content: '',
                            icon: 'users', has_own_component: true, LinkDisplayStyle: 2,
                        },

                        {
                            id: 'Echo59', title: 'Echo59', author: '', content: '',
                            icon: 'users', has_own_component: true, LinkDisplayStyle: 2,
                        },

                        {
                            id: 'BurningHand', title: 'BurningHand', author: '', content: '',
                            icon: 'users', has_own_component: true, LinkDisplayStyle: 2,
                        },

                        {
                            id: 'JackKitchin', title: 'Jack Kitchin', author: '', content: '',
                            icon: 'users', has_own_component: true, LinkDisplayStyle: 2,
                        },

                        {
                            id: 'Hannah', title: 'Hannah', author: '', content: '',
                            icon: 'users', has_own_component: true, LinkDisplayStyle: 2,
                        },
                    ]
                }, // Sub Universes

                {
                    id: 'Timeline',
                    title: 'Timeline',
                    group: 'Vigilantes',
                    author: '',
                    content: '',
                    icon: 'clock-o',
                    has_own_component: true,
                    LinkDisplayStyle: 3,
                }, // Timeline

                {
                    id: 'Storylines',
                    title: 'Storylines',
                    group: 'Vigilantes',
                    author: '',
                    content: '',
                    icon: 'book',
                    has_own_component: true,
                    LinkDisplayStyle: 0,
                }, // Storylines

                {
                    id: 'Gallery',
                    title: 'Gallery',
                    group: 'General',
                    author: '',
                    content: '',
                    icon: 'picture-o',
                    has_own_component: true,
                    LinkDisplayStyle: 0,
                }, // Gallery

            ],

            page: {},
        }
    },

    methods: {

        setPage: function(page){

            this.page = page // set the page data

            this.clearLinkSelected() // remove LinkSelected from all pages

            // Loop through GROUND pages
            for(var x = 0; x < this.pages.length; x++){
                if(this.pages[x] == page){
                    this.pages[x].LinkSelected = true
                }

                // if SUB exists
                if(this.pages[x].hasOwnProperty('pages')){

                    // Loop through SUB pages
                    for(var y = 0; y < this.pages[x].pages.length; y++){

                        if(this.pages[x].pages[y] == page){
                            this.pages[x].pages[y].LinkSelected = true
                            this.pages[x].LinkSelected = true
                        }

                        // If SUB_SUB exists
                        if(this.pages[x].pages[y].hasOwnProperty('pages')){

                            // Loop through SUB_SUB pages
                            for(var z = 0; z < this.pages[x].pages[y].pages.length; z++){
                                if(this.pages[x].pages[y].pages[z] == page){
                                    this.pages[x].pages[y].pages[z].LinkSelected = true
                                    this.pages[x].pages[y].LinkSelected = true
                                    this.pages[x].LinkSelected = true
                                }

                                // If SUB_SUB_SUB exists
                                if(this.pages[x].pages[y].pages[z].hasOwnProperty('pages')){

                                    // Loop through SUB_SUB pages
                                    for(var w = 0; w < this.pages[x].pages[y].pages[z].pages.length; w++){

                                        if(this.pages[x].pages[y].pages[z].pages[w] == page){
                                            this.pages[x].pages[y].pages[z].pages[w].LinkSelected = true
                                            this.pages[x].pages[y].pages[z].LinkSelected = true
                                            this.pages[x].LinkSelected = true
                                            this.pages[x].pages[y].LinkSelected = true
                                            this.pages[x].LinkSelected = true
                                        }
                                    }
                                }

                            }
                        }
                    }
                }
            }
        },

        clearLinkSelected: function(){

            //loop through pages
            for(var x = 0; x < this.pages.length; x++){

                // remove LinkSelected
                this.pages[x].LinkSelected = false

                // if subpages exist
                if(this.pages[x].hasOwnProperty('pages')){

                    // loop through sub-pages
                    for(var y = 0; y < this.pages[x].pages.length; y++){
                        this.pages[x].pages[y].LinkSelected = false

                        // if subpages exist
                        if(this.pages[x].pages[y].hasOwnProperty('pages')){

                            // loop through sub-sub-pages
                            for(var z = 0; z < this.pages[x].pages[y].pages.length; z++){
                                this.pages[x].pages[y].pages[z].LinkSelected = false

                                // if subsubsubpages exist
                                if(this.pages[x].pages[y].pages[z].hasOwnProperty('pages')){

                                    // loop through sub-sub-sub-pages
                                    for(var w = 0; w < this.pages[x].pages[y].pages[z].pages.length; w++){
                                        this.pages[x].pages[y].pages[z].pages[w].LinkSelected = false
                                    }
                                }
                            }
                        }
                    }
                }
            }

        },

        pageChange: function(value){
            this.setPage(value) // show the correct page
        },
    },

    beforeMount(){
        this.setPage(this.pages[0])
    },
}
</script>

<style scoped>
    .container{
        margin: 10px;
        width: 100%;
    }
</style>
