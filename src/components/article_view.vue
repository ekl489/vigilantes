<template>
    <div id="article" class="container">

        <!-- Title -->
        <h1 class="title">
            <span v-show="page.icon" class="fa" v-bind:class="page.icon"></span>
            {{ page.title }}
        </h1>

        <!-- Tabs -->
        <div class="tabs" v-if="parent.hasTabs">
            <ul>
              <li
                v-for="link in parent.pages"
                v-bind:class="{ 'is-active': link.LinkSelected }"
                v-show="link.LinkDisplayStyle > 0">
                <a href="#" v-on:click="setPage(link)"> {{ link.title }} </a>
              </li>
            </ul>
        </div>
        <hr v-else>

        <!-- Own Component Page -->
        <component
        v-bind:is="page.id"
        v-show="page.has_own_component"

        v-on:page="pageChange"
        v-bind:page="page"
        v-bind:pages="pages">
        <!-- Show separate page -->
        </component>
    </div>
</template>

<script>

    // General Pages
    import Home from './pages/home'
    import AnotherPage from './pages/another_page'
    import SubUniverses from './pages/sub_universes'
    import Quiz from './pages/quiz'
    import Podcasts from './pages/podcasts'
    import TheTeam from './pages/team'
    import DiscoverMore from './pages/discover'
    import UpdateLog from './pages/updates'
    import WorldHistory from './pages/history'
    import Timeline from './pages/timeline'
    import Storylines from './pages/storylines'

    // Sub Universes
    import Viper from './pages/viper'
    import ViperViper from './pages/viper-viper'
    import Tongyi from './pages/tongyi'

    import Echo59 from './pages/echo59'


    export default {

        data () {
            return {
              tree: [],
            }
        },

        props: ['page', 'pages'],

        components: {
          Home, SubUniverses, AnotherPage, Quiz, Podcasts, TheTeam,
          DiscoverMore, UpdateLog, WorldHistory, Timeline, Storylines,

          // Heroes
          Viper, ViperViper, Tongyi,

          Echo59,
        },

        methods: {
            setPage: function(page){
                this.$emit('page', page)
            },

            generateTree: function(){
              var pages = this.pages

              var arr = pages

              // loop through pages
              for(var a = 0; a < pages.length; a++){

                // check sub pages
                if(pages[a].pages){
                  for(var b = 0; b < pages[a].pages.length; b++){
                    arr.push(pages[a].pages[b])

                    if(pages[a].pages[b].pages){
                      for(var c = 0; c < pages[a].pages[b].pages.length; c++){
                        arr.push(pages[a].pages[b].pages[c])

                        if(pages[a].pages[b].pages[c].pages){
                          for(var d = 0; d < pages[a].pages[b].pages[c].pages.length; d++){
                            arr.push(pages[a].pages[b].pages[c].pages[d])
                          }
                        }
                      }
                    }
                  }
                }
              }

              return arr
            },

            pageChange: function(value){
                this.setPage(value)
            },
        },

        computed: {
          parent: function(){
            var pages = this.pages
            var page = this.page

            // Loop through pages
            for(var a = 0; a < pages.length; a++){
              if(pages[a] == page){

                // No parent
                return { title: 'no parent'}
              }

              //  Loop through sub Pages
              else if(pages[a].pages){
                for(var b = 0; b < pages[a].pages.length; b++){
                  if(pages[a].pages[b] == page){
                    return pages[a]
                  }

                  // Loop through subsub Pages
                  else if(pages[a].pages[b].pages){
                    for(var c = 0; c < pages[a].pages[b].pages.length; c++){
                      if(pages[a].pages[b].pages[c] == page){
                        return pages[a].pages[b]
                      }
                    }
                  }
                }
              }
            }

            // Failed
            return { title: 'failed'}
          },
        },

        watch: {
          page: function(){
            var pages = this.pages
            var page = this.page

            // Check for LinkPages
            var tree = this.tree

            if(page.LinkPage){
              for(var x = 0; x < tree.length; x++){
                if(tree[x].id == page.LinkPage){
                  this.setPage(tree[x])
                }
              }
            }
          }
        },

        beforeMount(){
          this.tree = this.generateTree()
        },

    }
</script>

<style scoped>
    #article {
        padding: 10px;
    }

    h1, h2, p{
        margin: 0px;
    }
</style>
id
