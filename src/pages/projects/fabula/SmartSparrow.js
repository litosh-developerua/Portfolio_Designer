import backgroundFabulaLarge from 'assets/fabula-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from 'assets/fabula-background-motion-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from 'assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from 'assets/fabula-background-motion.jpg';
import backgroundSpr from 'assets/spr-background.jpg';
import imageFabulaComponentsDarkLarge from 'assets/fabula-components-dark-large.png';
import imageSprComponentsDarkPlaceholder from 'assets/spr-components-dark-placeholder.png';
import imageFabulaComponentsDark from 'assets/fabula-components-dark.png';
import imageFabulaComponentsLightLarge from 'assets/fabula-components-light-large.png';
import imageSprComponentsLightPlaceholder from 'assets/spr-components-light-placeholder.png';
import imageFabulaComponentsLight from 'assets/fabula-components-light.png';
import imageFabulaDarkLarge from 'assets/fabula-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import imageFabulaDark from 'assets/fabula-dark.jpg';
import imageFabulaLightLarge from 'assets/fabula-light-large.jpg';
import imageSprLessonBuilderLightPlaceholder from 'assets/spr-lesson-builder-light-placeholder.jpg';
import imageFabulaLight from 'assets/fabula-light.jpg';
import videoSprMotionLarge from 'assets/fabula-motion-large.mp4';
import videoSprMotionPlaceholder from 'assets/spr-motion-placeholder.jpg';
import videoSprMotion from 'assets/fabula-motion.mp4';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { SegmentedControl, SegmentedControlOption } from 'components/SegmentedControl';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import dynamic from 'next/dynamic';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './SmartSparrow.module.css';



const title = 'Webapp for blockchain game Fabula';
const description =
  'I developed this project for the blockchain game Fabula. The site performs the tasks of an information platform to attract the community and investors to get acquainted with the game and its documentation.';
const roles = [
  'UX and UI Design',
  'Front End Development: React JS, Three.js',
  'Motion Design',
  'Blender 3D Modeling design',
  'Adobe Photoshop',
  'Adobe Illustrator',
];

export const SmartSparrow = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    dispatch({ type: 'setTheme', value: themes[index] });
  };

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr.src} 1080w, ${backgroundFabulaLarge.src} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageFabulaDark, imageFabulaDarkLarge]
                  : [imageFabulaLight, imageFabulaLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprLessonBuilderDarkPlaceholder
                  : imageSprLessonBuilderLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
            The main problem of the project was the lack of original 3D models and a minimum viable version of the game. The project failed due to the refusal of the founders of the company to develop the idea of an MMO RPG. At the moment I am developing a new simplified version of the site, which describes the project of the card mobile game Fabula.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              key={themeId}
              srcSet={
                isDark
                  ? [imageFabulaComponentsDark, imageFabulaComponentsDarkLarge]
                  : [imageFabulaComponentsLight, imageFabulaComponentsLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprComponentsDarkPlaceholder
                  : imageSprComponentsLightPlaceholder
              }
              alt={`A set of ${themeId} themed components for the aero design system`}
              sizes="100vw"
            />
            <ProjectTextRow>
              <SegmentedControl
                currentIndex={themes.indexOf(themeId)}
                onChange={handleThemeChange}
              >
                <SegmentedControlOption>Dark theme</SegmentedControlOption>
                <SegmentedControlOption>Light theme</SegmentedControlOption>
              </SegmentedControl>
            </ProjectTextRow>
           
          </ProjectSectionContent>
        </ProjectSection>
       
        <ThemeProvider themeId="dark" data-invert>
          <ProjectSection
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={[imageSprBackgroundVolcanism, imageSprBackgroundVolcanismLarge]}
                placeholder={imageSprBackgroundVolcanismPlaceholder}
                alt="A dramatic ocean scene with lava forming a new land mass."
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>Motion design</ProjectSectionHeading>
                  <ProjectSectionText>
                  The main principle was animation, making the visit more enjoyable. Elements are animated in such a way that they indicate the variety of characters, attract attention and are remembered by the user. Intuitively, the user understands which element is active and clickable.
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <Image
                raised
                className={styles.video}
                srcSet={[
                  { src: videoSprMotion, width: 1280 },
                  { src: videoSprMotionLarge, width: 2560 },
                ]}
                placeholder={videoSprMotionPlaceholder}
                alt="A learning designer building and deploying an interactive lesson on volcanism using the app."
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>
        
        
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
