import gamestackTexture2Large from 'assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/gamestack-list.jpg';
import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/gamestack-login.jpg';
import sliceTextureLarge from 'assets/slice-app-large.jpg';
import sliceTexturePlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceTexture from 'assets/slice-app.jpg';
import FabulaTextureLarge from 'assets/fabula-website-dark-large.jpg';
import FabulaTexture from 'assets/fabula-website-dark.jpg';
import sprTextureLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from 'assets/spr-lesson-builder-dark.jpg';
import raccoonCareMain from 'assets/raccoon_care_main_large.png';
import raccoonCareMainLarge from 'assets/raccoon_care_main_large.png';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { ProjectSummaryImages } from 'layouts/Home/ProjectSummaryImages';

import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';

const disciplines = ['Developer', 'Illustrator'];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [
      intro,
      projectOne,
      // projectTwo, projectThree,
      details,
    ];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    // sections.forEach(section => {
    //   sectionObserver.observe(section.current);
    // });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Designer + Developer"
        description="Design portfolio of Christina Shevtsova — a product designer working on web & mobile
          apps with a focus on motion, experience design, and accessibility."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      {/* <div className={styles.newProjects}>
      <img src={ImageOne} alt="image"/>
      </div> */}
      {/* <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Game Design documents and presentations"
        description="Development and implementation of the marketing documents RPG MMO Fabula"
        buttonText="View project"
        buttonLink="/projects/gamedesign"
        model={{
          type: 'laptop',
          alt: 'game design documents builder',
          textures: [
            {
              srcSet: [sprTexture, sprTextureLarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
        />
<ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Development website for blockchaine game Fabula"
        description="Created design and development website"
        buttonText="View project"
        buttonLink="/projects/fabula"
        model={{
          type: 'laptop',
          alt: 'Fabula website builder',
          textures: [
            {
              srcSet: [FabulaTexture, FabulaTextureLarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Raccoon Care - mobile app"
        description="Development UX/UI Design with Figma and Blender"
        buttonText="View project"
        buttonLink="/projects/raccoon_care"
        model={{
          type: 'laptop',
          alt: 'Raccoon Care - mobile app',
          textures: [
            {
              srcSet: [raccoonCareMain, raccoonCareMainLarge],
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
        /> */}
      <ProjectSummaryImages id="project-1" sectionRef={projectOne} />

      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
