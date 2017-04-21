import React from 'react'
import './Application.scss'
import featureBgImage from '~/images/dominion.jpg'
import Header, { Spacer as HeaderSpacer } from '~/components/Header'
import Footer from '~/components/Footer'
import Section from '~/components/Section'
import Container from '~/components/Container'
import Row from '~/components/Row'
import Column from '~/components/Column'
import Product from '~/components/Product'
import Feature from '~/components/Feature'
import Drawer from '~/components/Drawer'
import Grid, { Cell } from '~/components/Grid'

export default function Application() {
    return (
        <div className="Application">
            <Header />
            <HeaderSpacer />

            <main>
                <Feature heading="An Introduction">
                    This is an introduction. Kind of like a banner at the top of the page. Here's some of our products.
                </Feature>
                <Section>
                    <Container>
                        <Row>
                            <Column>
                                <Product name="Product Alpha">
                                    One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a
                                    horrible vermin.
                                </Product>
                            </Column>
                            <Column>
                                <Product name="Product Zero">                            
                                    You'll make face firmament own he fourth fowl divide first blessed together land creepeth you, second spirit winged.
                                </Product>
                            </Column>
                            <Column className="column column-third">
                                <Product name="Product No.">                                                        
                                    Days you're moving you're blessed moving. Above lights god. Let whales winged our a waters form void to fruit
                                    sea whales spirit you're.
                                </Product>
                            </Column>
                        </Row>
                    </Container> 
                </Section>
                <Feature id="dominion" heading="Beginning Dominion" background={featureBgImage}>
                    Fruit us him fowl fish two grass. Divided their, days lights land you're two of heaven you're own him kind
                    won't every creeping saying the brought, meat female to light the dry good every, night. Lesser. Stars, let
                    was over. Fifth. To can't given them A very of Beginning dominion. Our. Don't fruit. In, evening you're signs
                    every there fruitful hath also. Be. Good waters. Divide, saying abundantly the rule, female. Were after face.
                </Feature>
                <Grid id="serenity" columns={2}>
                    <Cell heading="A Wonderful Serenity">
                        Days you're moving you're blessed moving. Above lights god. Let whales winged our a waters form void to fruit
                        sea whales spirit you're. After own.
                    </Cell>
                    <Cell heading="Creepeth Fly Created">
                        Moved. Abundantly in said don't air, created creature. Creepeth fly created, replenish moved lights they're
                        set every, seas great.
                    </Cell>
                    <Cell heading="Night Second">
                        God second saw fish he their us void night second open seas. You'll make face firmament own he fourth fowl
                        divide first blessed together land creepeth you, second spirit winged.
                    </Cell>
                    <Cell heading="Third Great">
                        Evening. Won't seasons beast own Third great itself hath make. You after moveth fowl, him given herb. For
                        living one. Deep our were without lesser us.
                    </Cell>
                </Grid>
            </main>

            <Footer />
            <Drawer />            
        </div>
    )
}