import React from 'react';
import {Grid, Theme} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {Hero, Lazy, Seo} from '../components';
import {FC} from '../util';
import {graphql, useStaticQuery} from "gatsby";
import ExpertButton from "../components/pieces/button";

const useStyles = makeStyles((theme: Theme) => ({
    heroButtons: {
        marginTop: '1rem',
        marginBottom: '5rem',
        textAlign: 'center'
    }
}));

const IndexPage: FC = () => {
    const styles = useStyles();

    const jsonFile = useStaticQuery(graphql`
        query LinkTreeQuery {
            allContentJson {
                edges {
                    node {
                        elements {
                            title
                            link
                            subLinks {
                                title
                                link
                            }
                        }
                        instagramLink
                        instagramUser
                        name
                        location
                    }
                }
            }
        }
    `)

    const jsonData = jsonFile.allContentJson.edges[1].node.elements;
    const instagram = jsonFile.allContentJson.edges[0].node

    return (
        <>
            <Seo title="Home"/>
            <Lazy type="grow" delay={500} timeout={1000} mountOnEnter unmountOnExit>
                <div>
                    <Hero
                        instagram={instagram.instagramLink}
                        instagramUser={instagram.instagramUser}
                        instagramName={instagram.name}
                        instagramLocation={instagram.location}
                    />
                    <div className={styles.heroButtons}>
                        <Grid>
                            <Lazy type="slide" direction="left" delay={500}>
                                <>{jsonData.map(
                                    (entity: any) => {
                                        if (entity.link) {
                                            return <ExpertButton key={entity.title} title={entity.title}
                                                                 link={entity.link}/>
                                        } else {
                                            return <ExpertButton key={entity.title} title={entity.title}
                                                                 submenu={entity.subLinks}/>
                                        }
                                    })}
                                </>
                            </Lazy>
                        </Grid>
                    </div>
                </div>
            </Lazy>
        </>
    );
};

export default IndexPage;
