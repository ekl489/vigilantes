<template>
    <div id="viper-viper" class="content">
        <div class="columns">
            <div class="column is-two-thirds-desktop">

                <blockquote>"Every great story seems to start with a snake."</blockquote>

                When discrimination against Asians began, Nick, then a promising young lawyer, helped his friends Tongyi Shen and Jonathan Pan seek refuge in Chinatown. Here they happened upon a hidden Chinese syndicate, the Longying. Seeking protection and a means to empower themselves they joined their cause and spent years training there and immersing themselves in the syndicate.<br><br>
                During this time he lived in an apartment in Chinatown and completed his training as a lawyer, having long had a passion for the profession.
                However, as he worked in the business corruption became very evident and Nick was appalled. Coupled with this, due to his race, his work was made very difficult by the government and some of his coworkers, forcing himself to push himself hard to achieve anything.<br><br>
                Over this time the Longying became more powerful and conditions across the rest of Sydney worsened. Eventually Nick became so distraught with the state of the legal system he stopped his Longying training to commit to his profession and overcome the obstacles presented by his ethnicity.<br>
                While he was away a US raid crippled the Longying and Nick became furious.
                With the help of close friends, he put together his arsenal and left to become one of the first vigilantes, Viper.<br><br><br>

                <h4 class="subtitle">Arsenal</h4>
                <ul>
                    <li>
                        Rope darts
                        <ul>
                            <li>Strong rope (carbon fibre) so it can be swung from and climbed.</li>
                            <li>Dart is steel and engraved with the Viper emblem.</li>
                            <li>Green and yellow flags on the dart help confuse opponenents.</li>
                        </ul>
                    </li>
                    <li>Viper costume</li>
                </ul><br>

                <h4 class="subtitle">Capabilities</h4>
                <ul>
                    <li>Changquan (Long Fist)<br>Chinese martial art; long range fighting; acrobatic kicks.</li>
                    <li>Acute sense of emotions: able to gauge emotions and thoughts based on body language.</li>
                    <li>Magic-trick based hand tricks: slide of hand, pickpocketing etc.</li>
                    <li>Computer coding</li>
                    <li>Speaks Mandarin</li>
                </ul><br>

                <h4 class="subtitle">Qualities</h4>
                <ul>
                    <li>Witty/funny</li>
                    <li>Confident</li>
                    <li>Silver tongued</li>
                    <li>Rational</li>
                    <li>Short tempered/ferocious</li>
                    <li>Stubborn</li>
                    <li>Argumentative</li>
                </ul>
            </div>

            <div class="column">
                <img width="400px" height="500px" src="src/assets/viper.png" alt="Depiction of viper wearing his costume in a defensive pose."><br><br>
                <article class="message is-primary">
                    <div class="message-header">
                        Viper Costume
                    </div>
                    <div class="message-body">
                        <ul class="img-caption-body">
                            <li>Dark green sleeveless shirt: lightly padded with some body armour.</li>
                            <li>Bare arms help manoeuvre rope darts.</li>
                            <li>Black bandages cover his fists.</li>
                            <li>Green helmet with large angry eyes stops after his nose.</li>
                            <li>Black viper logo on chest.</li>
                            <li>Very loosely modelled after the pit viper.</li>
                            <li>Long black pants, fairly tight and a black belt as well as dark grey sneaker-esque shoes.</li>
                        </ul>
                    </div>
                </article>
                <article class="message is-primary">
                    <div class="message-header">
                        Extra Resources
                    </div>
                    <div class="message-body">
                        <i>Some additional links and comments to help appreciate Viper:</i><br><br>
                        <h5 class="subtitle">Rope Darts</h5>
                        <ul class="img-caption-body">
                            <li><a href="https://www.youtube.com/watch?v=aLCQA197rwc">Rope Dart/Kunai</a></li>
                            <li><a href="https://www.youtube.com/watch?v=8IPl2tFNihc">Rope Dart Master Goes Crazy</a></li>
                            <li><a href="https://www.youtube.com/watch?v=Ss64Bgtl-c0&ab_channel=acidblood13">Rope Dart &amp; Meteor Hammer Fight Scenes in Film & Cinema</a></li>
                        </ul>
                        <h5 class="subtitle">Changquan</h5>
                        <ul class="img-caption-body">
                            <li><a href="https://www.youtube.com/watch?v=koFuJOgh6do">Beijing Olympics 2008</a></li>
                        </ul>
                        <h5 class="subtitle">Notes</h5>
                        <ul class="img-caption-body">
                            <li>Snakes are symbolic of rebirth/transformation, duality, focus, influence, impulsivity, eloquence, guardianship, vengefulness and evil.</li>
                        </ul>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                current_tab: "Viper",
                tabs: [
                    { title: 'Viper' },
                    { title: 'Three Eyed Warrior' },
                    { title: 'Tongyi Shen' },
                    { title: 'Major Patton' },
                    { title: 'Lóngyǐng' },
                ]
            }
        },
        methods: {
            setTabPage: function(name){
                this.current_tab = name
            }
        },

        components: {
        }
    }
</script>

<style scoped>
    .tabs ul{
        margin-left: 0;

    }
    .tabs {
        margin-top: 0;
    }
</style>
