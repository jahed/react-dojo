import React from 'react'
import './styles.scss'
import featureBgImage from '~/images/dominion.jpg'

export default function Application() {
    return (
        <div className="Application">
            <header className="top">
                <nav className="container">
                    <h1>A Website</h1>
                    <ul>
                        <li><a href="#">Intro</a></li>
                        <li><a href="#dominion">Dominion</a></li>
                        <li><a href="#serenity">Serenity</a></li>
                    </ul>
                </nav>
            </header>

            <main>
                <section className="container text-center">
                    <div className="row">
                        <div className="column column-full">
                            <h2>An Introduction</h2>
                            <p>This is an introduction. Kind of like a banner at the top of the page. Here's some of our products.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="column column-third">
                            <img className="full-width" src="http://placehold.it/300x200" />
                            <h4>Product Alpha</h4>
                            <p>
                                One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a
                                horrible vermin.
                            </p>
                        </div>
                        <div className="column column-third">
                            <img className="full-width" src="http://placehold.it/300x200" />
                            <h4>Product Zero</h4>
                            <p>
                                You'll make face firmament own he fourth fowl divide first blessed together land creepeth you, second spirit winged.
                            </p>
                        </div>
                        <div className="column column-third">
                            <img className="full-width" src="http://placehold.it/300x200" />
                            <h4>Product No.</h4>
                            <p>
                                Days you're moving you're blessed moving. Above lights god. Let whales winged our a waters form void to fruit
                                sea whales spirit you're.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="dominion" className="feature">
                    <div className="feature-bg" style={{ backgroundImage: `url(${featureBgImage})` }}></div>
                    <div className="container text-center">
                        <div className="row row-large">
                            <h2>Beginning Dominion</h2>
                            <p>
                                Fruit us him fowl fish two grass. Divided their, days lights land you're two of heaven you're own him kind
                                won't every creeping saying the brought, meat female to light the dry good every, night. Lesser. Stars, let
                                was over. Fifth. To can't given them A very of Beginning dominion. Our. Don't fruit. In, evening you're signs
                                every there fruitful hath also. Be. Good waters. Divide, saying abundantly the rule, female. Were after face.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="serenity" className="container">
                    <div className="row">
                        <div className="row row-small">
                            <div className="column column-half">
                                <h4 className="no-margin">A Wonderful Serenity</h4>
                                <p>
                                    Days you're moving you're blessed moving. Above lights god. Let whales winged our a waters form void to fruit
                                    sea whales spirit you're. After own.
                                </p>
                            </div>
                            <div className="column column-half">
                                <h4 className="no-margin">Creepeth Fly Created</h4>
                                <p>
                                    Moved. Abundantly in said don't air, created creature. Creepeth fly created, replenish moved lights they're
                                    set every, seas great.
                                </p>
                            </div>
                        </div>
                        <div className="row row-small">
                            <div className="column column-half">
                                <h4 className="no-margin">Night Second</h4>
                                <p>
                                    God second saw fish he their us void night second open seas. You'll make face firmament own he fourth fowl
                                    divide first blessed together land creepeth you, second spirit winged.
                                </p>
                            </div>
                            <div className="column column-half">
                                <h4 className="no-margin">Third Great</h4>
                                <p>
                                    Evening. Won't seasons beast own Third great itself hath make. You after moveth fowl, him given herb. For
                                    living one. Deep our were without lesser us.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bottom">
                <div className="container">
                    <div className="row">
                        &copy; 2015 You
                    </div>
                </div>
            </footer>
        </div>
    )
}