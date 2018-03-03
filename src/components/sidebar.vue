<template>
    <div id="sidebar">
        <aside class="menu">

            <!-- Search Bar -->
            <p class="menu-label">
                Search
            </p>
            <SearchBar
            v-on:page="pageChange"
            v-bind:page="page"
            v-bind:pages="pages">
            </SearchBar>

            <!-- General Menu -->
            <div v-for="group in groups">
                <span></span>
                <p class="menu-label">
                    {{ group }}
                </p>

                <ul class="menu-list">

                    <!-- Ground -->
                    <li v-for="a in pages" v-show="a.group == group && a.LinkDisplayStyle == 3">
                        <a v-bind:class="{ 'is-active': a.LinkSelected }" v-on:click="setPage(a)"><Icon v-bind:name="a.icon"></Icon> {{ a.title }}</a>

                        <!-- Sub Pages -->
                        <ul v-show="a.pages" class="ul">
                            <li v-for="b in a.pages" v-show="b.LinkDisplayStyle >= 2 && a.LinkSelected">
                                <a v-bind:class="{ 'is-active': b.LinkSelected }" v-on:click="setPage(b)"><Icon v-bind:name="b.icon"></Icon> {{ b.title }}</a>

                                <!-- Sub-Sub Pages -->
                                <ul v-if="b.pages" class="ul">
                                    <li v-for="c in b.pages" v-show="c.LinkDisplayStyle >= 2 && b.LinkSelected">
                                        <a v-bind:class="{ 'is-active': c.LinkSelected }" v-on:click="setPage(c)"><Icon v-bind:name="c.icon"></Icon> {{ c.title }}</a>

                                        <!-- Sub-Sub-Sub Pages -->
                                        <ul v-show="c.pages" class="ul">
                                            <li v-for="d in c.pages" v-show="d.LinkDisplayStyle >= 2 && c.LinkSelected">
                                                <a v-bind:class="{ 'is-active': d.LinkSelected }" v-on:click="setPage(d)"><icon v-bind:name="d.icon"></icon> {{ d.title }}</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </aside>
    </div>
</template>

<script>

    import SearchBar from './search_bar'
    import Icon from 'vue-awesome/components/Icon'

    export default {
        components: {
            SearchBar,
            Icon,
        },

        data () {
            return {
                query: "",
            }
        },
        props: ['pages', 'page'],

        computed: {

            groups: function(){
                var pages = this.pages
                var ind_labels = []

                for(var x = 0; x < pages.length; x++){
                    if(!ind_labels.includes(pages[x].group)){
                        ind_labels.push(pages[x].group)
                    }

                }

                return ind_labels
            }
        },

        methods: {

            setPage: function(page){
                this.$emit('page', page)
            },

            pageChange: function(value){
                this.setPage(value)
            },
        }
    }
</script>

<style scoped>
    .ul {
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 1.25rem;
        padding: 0;
    }

    .select{
        width: 100%;
    }
    #search_bar{
        margin-bottom: 5px;
    }
    textarea {
        resize: none;
    }

</style>
