import backgroundSprLarge from 'assets/gamedesign-background-large.jpg';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from 'assets/design-game-background-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from 'assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from 'assets/design-game-background.jpg';
import backgroundSpr from 'assets/gamedesign-background.jpg';
import imageSprComponentsDarkLarge from 'assets/gamedesign-components-dark-large.png';
import imageSprComponentsDarkPlaceholder from 'assets/spr-components-dark-placeholder.png';
import imageSprComponentsDark from 'assets/spr-components-dark.png';
import imageSprComponentsLightLarge from 'assets/gamedesign-components-light-large.png';
import imageSprComponentsLightPlaceholder from 'assets/spr-components-light-placeholder.png';
import imageSprComponentsLight from 'assets/spr-components-light.png';
import imageSprDesignSystemDarkLarge from 'assets/design-system-dark-large.png';
import imageSprDesignSystemDarkPlaceholder from 'assets/spr-design-system-dark-placeholder.png';
import imageSprDesignSystemDark from 'assets/design-system-dark.png';
import imageSprDesignSystemLightLarge from 'assets/design-system-light-large.png';
import imageSprDesignSystemLightPlaceholder from 'assets/spr-design-system-light-placeholder.png';
import imageSprDesignSystemLight from 'assets/design-system-light.png';
import imageSprLessonBuilderDarkLarge from 'assets/spr-lesson-builder-dark-large.png';
import imageSprLessonBuilderDarkPlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderDark from 'assets/spr-lesson-builder-dark.png';
import imageSprLessonBuilderLightLarge from 'assets/spr-lesson-builder-light-large.png';
import imageSprLessonBuilderLightPlaceholder from 'assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprLessonBuilderLight from 'assets/spr-lesson-builder-light.png';
import imageFabulaPresLarge from 'assets/fabula_presentation_dark_large.png';
import imageFabulaPresDarkLarge from 'assets/fabula_presentation_dark_large.png';
import imageFabulaPresLight from 'assets/fabula_presentation_dark_large.png';
import imageFabulaPresrLightLarge from 'assets/fabula_presentation_dark_large.png';


import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { SegmentedControl, SegmentedControlOption } from 'components/SegmentedControl';
import { useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import dynamic from 'next/dynamic';
import { Fragment, useMemo } from 'react';
import { media } from 'utils/style';
import styles from './SmartSparrow.module.css';

const Earth = dynamic(() => import('./Earth').then(mod => mod.Earth));
const EarthSection = dynamic(() => import('./Earth').then(mod => mod.EarthSection));

const title = 'Game Design documents and presentations';
const description =
  'I developed and implemented this project for the Fabula blockchain NFT RPG MMO game. I set myself the task of creating a style of play. Documents, presentations and brand books were supposed to attract attention, interest the user to explore the game world and attract investments.';
const roles = [
  'Graphic Design',
  'Vector Illustrations',
  'Character Creation',
  'Figma',
  'Adobe Illustrator',
  'Adobe Photoshop'
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
          srcSet={`${backgroundSpr.src} 1080w, ${backgroundSprLarge.src} 2160w`}
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
                  ? [imageSprLessonBuilderDark, imageSprLessonBuilderDarkLarge]
                  : [imageSprLessonBuilderLight, imageSprLessonBuilderLightLarge]
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
            <ProjectSectionHeading>About Fabula</ProjectSectionHeading>
            <ProjectSectionText>
            In 2022, Fabula started a project to create a completely new blockchain game that will become a powerful competitor in the gaming space. The goal of the development is to create a cozy game where you want to come again and again, while earning real money. The product is currently under development. A small indie team is working on it, in which I hold the position of designer and front-end developer.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprComponentsDark, imageSprComponentsDarkLarge]
                  : [imageSprComponentsLight, imageSprComponentsLightLarge]
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
            <ProjectTextRow>
              <ProjectSectionHeading>The design system</ProjectSectionHeading>
              <ProjectSectionText>
              In order to streamline the design process for other designers and developers for such a project, it was important to lay the groundwork with a robust and flexible design system that could evolve over the course of the product development cycle. This will affect both the aesthetics and user experience of the product itself, as well as the website and marketing materials. For example, on the basis of the developed document, a brand book of the company was created.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprDesignSystemDark, imageSprDesignSystemDarkLarge]
                  : [imageSprDesignSystemLight, imageSprDesignSystemLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprDesignSystemDarkPlaceholder
                  : imageSprDesignSystemLightPlaceholder
              }
              alt="The homepage of the aero design system docs website linking to principles and components."
              sizes="100vw"
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Beautiful world of Fabula</ProjectSectionHeading>
              <ProjectSectionText>
               "I was gone for a year. Everything has changed so much. I feel very strong magic, I guess an extremely powerful mage workedhere. People are calling. Theyneed me.They can’t do anything without me.Only a hero can win this war, and I’ll become this “hero”!". - I wanted to convey the magical atmosphere of the medieval world filled with magic, where the air smelled of victorious crusades and the conquest of new lands, where crafting is not just entertainment but an opportunity to survive...
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageFabulaPresLarge, imageFabulaPresDarkLarge]
                  : [imageFabulaPresLight, imageFabulaPresrLightLarge]
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
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
