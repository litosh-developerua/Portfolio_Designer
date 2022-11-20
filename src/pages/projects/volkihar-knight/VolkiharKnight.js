import volkiharBackgroundLarge from 'assets/volkihar-background-large.jpg';
import volkiharBackgroundPlaceholder from 'assets/volkihar-background-placeholder.jpg';
import volkiharBackground from 'assets/volkihar-background.jpg';
import volkiharBannerLarge from 'assets/volkihar-banner-large.jpg';
import volkiharBannerPlaceholder from 'assets/volkihar-banner-placeholder.jpg';
import volkiharBanner from 'assets/volkihar-banner.jpg';
import volkiharBookLarge from 'assets/volkihar-book-large.png';
import volkiharBookPlaceholder from 'assets/volkihar-book-placeholder.png';
import volkiharBook from 'assets/volkihar-book.png';
import volkiharEnderalLarge from 'assets/volkihar-enderal-large.jpg';

import volkiharEnderalPlaceholder from 'assets/volkihar-enderal-placeholder.jpg';
import volkiharEnderal from 'assets/volkihar-enderal.jpg';
import AcrilicPaint from 'assets/acrilic-painting.jpg';
import AcrilicPaintLarge from 'assets/acrilic-painting-large.jpg';
import AcrilicPaintWood from 'assets/acrilic-painting-wood.jpg';
import AcrilicPaintWoodLarge from 'assets/acrilic-painting-wood-large.jpg';
import volkiharSlide1Large from 'assets/volkihar-slide-1-large.jpg';
import volkiharSlide1 from 'assets/volkihar-slide-1.jpg';
import volkiharSlide2Large from 'assets/volkihar-slide-2-large.jpg';
import volkiharSlide2 from 'assets/volkihar-slide-2.jpg';
import volkiharSlide3Large from 'assets/volkihar-slide-3-large.jpg';
import volkiharSlide3 from 'assets/volkihar-slide-3.jpg';
import volkiharSlidePlaceholder from 'assets/volkihar-slide-placeholder.jpg';
import watercolorMountains from 'assets/watercolor-mountains.jpg';

import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
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
import styles from './VolkiharKnight.module.css';

const Carousel = dynamic(() => import('components/Carousel').then(mod => mod.Carousel));


const title = 'Traditional Art';
const description =
  'Painting has been present in my life since my youth. The process of creating a canvas helps me relieve stress, meditate and train my eyes for color perception.';
const roles = ['Acrilic', 'Watercolor'];

export function VolkiharKnight() {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            [data-theme='dark'] {
              --rgbPrimary: 240 211 150;
              --rgbAccent: 240 211 150;
            }
            [data-theme='light'] {
              --rgbPrimary: 134 99 23;
              --rgbAccent: 134 99 23;
            }
          `,
        }}
      />
      <ProjectContainer>
        <ProjectBackground
          srcSet={[volkiharBackground, volkiharBackgroundLarge]}
          placeholder={volkiharBackgroundPlaceholder}
          opacity={0.5}
        />
        <ProjectHeader
          title={title}
          description={description}
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[volkiharBanner, volkiharBannerLarge]}
              placeholder={volkiharBannerPlaceholder}
              alt="A dark elf wearing the Volkihar Knight armor with the logo overlaid on the image."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              srcSet={[volkiharBook, volkiharBookLarge]}
              placeholder={volkiharBookPlaceholder}
              alt="A book containing a sketch depicting the logo and armor"
              sizes={`(max-width: ${media.mobile}px) 90vw, (max-width: ${media.tablet}px) 80vw, 70vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <div className={styles.armor}>
            <ProjectImage
              srcSet={[watercolorMountains]}
              placeholder={volkiharBannerPlaceholder}
              alt="A dark elf wearing the Volkihar Knight armor with the logo overlaid on the image."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
            </div>
            <div className={styles.textSection}>
              <ProjectSectionHeading>Watercolor Painting</ProjectSectionHeading>
              <ProjectSectionText>
              In my work, I use the highest quality materials and tools from Ukraine and Italy. Natural wood, thick paper, cotton canvases and the smell of colours... All this attracts and fascinates, soothes and excites.
              </ProjectSectionText>
              <ProjectSectionText>
                My decision was the creation of many landscapes. I create my work from six primary colours."Paradoxically though it may seem, it is none the less true that life imitates art far more than art imitates life."(Oscar Wilde)
              </ProjectSectionText>
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center noMargin>
              <ProjectSectionHeading>Individual handwriting</ProjectSectionHeading>
              <ProjectSectionText>
              Every man`s work, whether it be literature or music or pictures or architecture or anything else, is always a portrait of himself. Everything you can imagine is real. A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Carousel
              placeholder={volkiharSlidePlaceholder}
              images={[
                {
                  srcSet: [volkiharSlide1, volkiharSlide1Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'A female character wearing the black coloured armor set.',
                },
                {
                  srcSet: [volkiharSlide3, volkiharSlide3Large],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'A female character wielding a sword and wearing the red coloured armor.',
                },
                
                {
                  srcSet: [AcrilicPaintWood, AcrilicPaintWoodLarge],
                  sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
                  alt: 'A female character wielding a sword and wearing the red coloured armor.',
                },
              ]}
              width={1920}
              height={1080}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection
          backgroundElement={
            <Image
              srcSet={[volkiharEnderal, volkiharEnderalLarge]}
              placeholder={volkiharEnderalPlaceholder}
              alt="A promotional image from Enderal showing several characters in the game overlooking a distant city."
              sizes={`100vw`}
            />
          }
        >
          <ProjectSectionContent>
            <ProjectTextRow center centerMobile noMargin>
            
              <ProjectSectionHeading>Charity art</ProjectSectionHeading>
              <ProjectSectionText>
              I was delighted that my works were presented at a charity exhibition in Italy to collect donations to help children affected by the war. 
              </ProjectSectionText>
              
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}
